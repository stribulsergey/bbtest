/**
 * Created by rj on 1/8/2017.
 */
import Backbone from 'backbone';

import BlockItemView from './block-item-view';

export default Backbone.View.extend({
    tagName: 'div',

    initialize: function () {
        this.listenTo(this.collection, 'change:isCollapsed reset', this.render, this);
    },
    render: function () {
        this.$el.empty();
        this.collection.each((model) => {
            const item = new BlockItemView({model: model});
            this.$el.append(item.render().el);
        });
        return this;
    }
});