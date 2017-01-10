/**
 * Created by rj on 1/8/2017.
 */
import Backbone from 'backbone';

import RouteHelper from '../utils/route-helper';
import template from './block-item-template.hbs';

export default  Backbone.View.extend({
    events: {
        'click .accordion-header': 'onHeaderClick'
    },
    tagName: 'div',
    className: 'accordion',
    template: template,

    onHeaderClick: function (e) {
        e.preventDefault();
        this.model.set({isCollapsed: !this.model.get('isCollapsed')});

        const newUrl = RouteHelper.generateRoute(null, null, this.model.get('url'));
        Backbone.history.navigate(newUrl, true);
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});