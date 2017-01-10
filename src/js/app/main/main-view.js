/**
 * Created by rj on 1/10/2017.
 */
import Backbone from 'backbone';
import template from './main-view-template.hbs';

export default  Backbone.View.extend({
    el: '#application',
    template: template,

    render: function () {
        this.$el.html(this.template());
        return this;
    }
});