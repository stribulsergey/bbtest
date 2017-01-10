/**
 * Created by rj on 1/8/2017.
 */
import Backbone from 'backbone';
import RouteHelper from '../utils/route-helper';

export default  Backbone.View.extend({
    tagName: 'div',
    events: {
        'click': 'onClick'
    },

    initialize: function () {
        this.listenTo(this.model, 'change:isSelected', this.updateSelected, this);
    },
    updateSelected: function () {
        this.$el.toggleClass('active', !!this.model.get('isSelected'));
    },
    onClick: function (e) {
        e.preventDefault();
        this.model.set({isSelected: true});
        const url = RouteHelper.generateRoute(null, this.model.get('url'));
        Backbone.history.navigate(url, true);
    },
    render: function () {
        this.$el.text(this.model.get('title'));
        this.updateSelected();
        return this;
    },
});