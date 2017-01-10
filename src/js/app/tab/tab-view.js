/**
 * Created by rj on 1/8/2017.
 */
import Backbone from 'backbone';
import TabItemView from './tab-item-view';

export default  Backbone.View.extend({
    tagName: 'div',
    className: 'tab-list',

    initialize: function () {
        this.listenTo(this.collection, 'change:isSelected', this.render, this);
    },
    render: function () {
        this.$el.empty();
        this.collection.each((model) => {
            const item = new TabItemView({model: model});
            this.$el.append(item.render().el);
        });
        return this;
    }
});