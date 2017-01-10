/**
 * Created by rj on 1/8/2017.
 */
import Promise from 'bluebird';

export function getMenu() {
    return Promise.resolve([
        {
            title: 'Products',
            url: 'products',
        },
        {
            title: 'Customers',
            url: 'customers',
        },
        {
            title: 'Orders',
            url: 'orders',
        },
        {
            title: 'News',
            url: 'news',
        }
    ]);
}
export function getTabs(menu) {
    return Promise.resolve([
        {
            title: menu + ' General',
            url: 'general',
        }, {
            title: menu + ' Address',
            url: 'address',
        }, {
            title: menu + ' Orders',
            url: 'orders',
        },
    ]);
}

export function getContent(menu, tab) {
    return Promise.resolve([
        {
            title: menu + ' ' + tab + ' Shipping',
            url: 'shipping',
            text: menu + ' ' + tab + ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }, {
            title: menu + ' ' + tab + ' Billing',
            url: 'billing',
            text: menu + ' ' + tab + ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquid consequuntur dolorem, fugit illum laudantium libero molestiae mollitia nemo quaerat quasi rerum tempore temporibus veritatis vero, voluptas? Dicta, voluptatibus!'
        }, {
            title: menu + ' ' + tab + ' Home',
            url: 'home',
            text: menu + ' ' + tab + ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
    ]);
}