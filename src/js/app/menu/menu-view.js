/**
 * Created by rj on 1/8/2017.
 */
import Backbone from 'backbone';
import MenuItemView from './menu-item-view';

export default Backbone.View.extend({
    tagName: 'ul',

    initialize: function () {
        this.listenTo(this.collection, 'change:isSelected reset', this.render, this);
    },
    render: function () {
        this.$el.empty();
        this.collection.each((model) => {
            const item = new MenuItemView({model: model});
            this.$el.append(item.render().el);
        });
        return this;
    }
});