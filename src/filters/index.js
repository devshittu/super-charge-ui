import Vue from 'vue'
import {absoluteTimeTeller, relativeTimeTeller} from './time-filter'
import {capitalize, slugify, truncate} from './text-filter'

// time-filters
Vue.filter('absoluteTimeTeller', absoluteTimeTeller);// including the last week and this week
Vue.filter('relativeTimeTeller', relativeTimeTeller); // only ago

// text-filters
Vue.filter('capitalize', capitalize);
Vue.filter('slugify', slugify);
Vue.filter('truncate', truncate);
