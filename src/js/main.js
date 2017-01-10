/**
 * Created by rj on 1/8/2017.
 */
import Backbone from 'backbone';
import Application from './app/app';
require('../sass/styles.scss');

new Application();
Backbone.history.start({pushState: true});
