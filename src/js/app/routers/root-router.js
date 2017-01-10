/**
 * Created by rj on 1/8/2017.
 */
import Backbone from 'backbone';

export default Backbone.Router.extend({
    defaults: {
        app: null
    },
    routes: {
        ':menu(/:tab)(?collapsed=:collapsed)': 'rootHandler'
    },

    rootHandler: function (menu, tab, collapsed) {
        const collapsedArray = collapsed && collapsed.split(',') || [];
        this.trigger('urlChanged', { menu, tab, collapsed: collapsedArray });
    }
});