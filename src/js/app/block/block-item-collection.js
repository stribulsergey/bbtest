/**
 * Created by rj on 1/8/2017.
 */
import Backbone from 'backbone';
import BlockItem from './block-item-model';

export default Backbone.Collection.extend({
    model: BlockItem,

    collapseByUrls: function (urls) {
        this.each(model => {
            if(~urls.indexOf(model.get('url'))) {
                model.set({ isCollapsed: true });
            }
        });
    }
});