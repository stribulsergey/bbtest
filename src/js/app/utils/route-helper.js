/**
 * Created by rj on 1/9/2017.
 */
import Backbone from 'backbone';

export default class {
    static generateRoute(menu, tab, collapsed) {
        if (menu) {
            return `/${menu}`;
        }

        const oldParts = Backbone.history.location.pathname.split('/');

        if (tab) {
            return `${oldParts[1]}/${tab}`;
        }

        let newUrl = `${oldParts[1]}/${oldParts[2]}`;

        const collapsedString = Backbone.history.location.search.replace(/^.*=/, '');
        const oldCollapsedArray = collapsedString.length ? collapsedString.split(',') : [];

        if (!~oldCollapsedArray.indexOf(collapsed)) {
            oldCollapsedArray.push(collapsed);
        } else {
            oldCollapsedArray.splice(oldCollapsedArray.indexOf(collapsed), 1);
        }

        if (oldCollapsedArray.length) {
            newUrl += `?collapsed=${oldCollapsedArray.join(',')}`;
        }

        return newUrl;
    }
}
