/**
 * Created by rj on 1/8/2017.
 */
import Backbone from 'backbone';

export default Backbone.Model.extend({
    defaults: {
        title: 'Default Tab Title',
        url: '/',
        isSelected: false
    }
});