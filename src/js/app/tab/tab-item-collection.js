/**
 * Created by rj on 1/8/2017.
 */
import Backbone from 'backbone';
import TabItem from './tab-item-model';

export default  Backbone.Collection.extend({
    model: TabItem,

    initialize: function () {
        this.on('change:isSelected', this.onSelectedChanged, this);
    },
    onSelectedChanged: function (changedModel) {
        if (changedModel.get('isSelected')) {
            this.clearSelectionOthers(changedModel.get('url'));
        }
    },
    selectItemByUrl: function (url) {
        const model = this.findWhere(m => m.get('url') === url);
        model && model.set({isSelected: true});
    },
    clearSelectionOthers: function (url) {
        this.each((model) => {
            if (model.get('url') !== url && model.get('isSelected')) {
                model.set({isSelected: false});
            }
        });
    }
});
