/**
 * Created by rj on 1/8/2017.
 */
import $ from 'jquery';
import Backbone from 'backbone';
import {MainView} from './main';
import {MenuItemCollection, MenuView} from './menu';
import {TabView, TabItemCollection} from './tab';
import {BlockView, BlockItemCollection} from './block';
import {RootRouter} from './routers';
import {getMenu, getContent, getTabs} from './utils/data';

export default Backbone.Model.extend({
    defaults: {
        menu: '',
        tab: '',
        collapsed: [],
        menuCollection: null,
        tabsCollection: null,
        accordionsCollection: null
    },

    initialize: function () {

        const mainVew = new MainView();
        mainVew.render();

        this.on('change:menu', this.onMenuChanged, this);
        this.on('change:tab', this.onTabChanged, this);

        this.menuCollection = new MenuItemCollection();
        this.tabsCollection = new TabItemCollection();
        this.blocksCollection = new BlockItemCollection();

        const menu = new MenuView({collection: this.menuCollection});
        const tabView = new TabView({collection: this.tabsCollection});
        const blockView = new BlockView({collection: this.blocksCollection});

        $('.sidebar').html(menu.render().el);
        $('#tabs').html(tabView.render().el);
        $('#tab-content').html(blockView.render().el);

        const router = new RootRouter();
        this.listenTo(router, 'urlChanged', this.routeChanged, this);

        this.fetchMenu();
    },

    fetchMenu: function () {
        getMenu().then(menu => {
            this.menuCollection.reset(menu);
            if (!this.get('menu')) {
                const currentMenu = this.menuCollection.models[0];
                currentMenu.set('isSelected', true);
                this.set('menu', currentMenu.get('url'));
                Backbone.history.navigate(currentMenu.get('url'));
            } else {
                this.menuCollection.selectItemByUrl(this.get('menu'));
            }
        });
    },

    routeChanged: function (options) {
        if (this.get('menu') !== options.menu) {
            this.menuCollection.selectItemByUrl(options.menu);
            this.set({menu: options.menu});
        }
        if (this.get('tab') !== options.tab) {
            this.tabsCollection.selectItemByUrl(options.tab);
            this.set({tab: options.tab});
        }
        if (this.get('collapsed').join(',') !== options.collapsed.join(',')) {
            this.set({collapsed: options.collapsed});
            this.blocksCollection.collapseByUrls(options.collapsed);
        }
    },

    onMenuChanged: function (model, value) {
        this.menuCollection.selectItemByUrl(value);

        getTabs(value).then((tabs) => {
            this.tabsCollection.reset(tabs);
            if (!this.get('tab')) {
                const currentTab = this.tabsCollection.models[0];
                currentTab.set('isSelected', true);
                this.set('tab', currentTab.get('url'));
                Backbone.history.navigate(this.get('menu') + '/' + currentTab.get('url'));
            } else {
                this.tabsCollection.selectItemByUrl(this.get('tab'));
            }
        });
    },

    onTabChanged: function (model, value) {
        this.tabsCollection.selectItemByUrl(value);

        getContent(this.get('menu'), this.get('tab')).then(content => {
            this.blocksCollection.reset(content);
            if (!this.get('collapsed')) {
                this.set('collapsed', []);
            } else {
                this.blocksCollection.collapseByUrls(this.get('collapsed'));
            }
        });
    }
});

