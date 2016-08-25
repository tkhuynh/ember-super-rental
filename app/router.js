import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about'); // from ember g route about
});

export default Router;

/*
    Ember CLI uses ECMAScript 2015 (ES2015 for short or previously known as ES6) 
    modules to organize application code. For example, the line import Ember 
    from 'ember'; gives us access to the actual Ember.js library as the variable 
    Ember. And the import config from './config/environment'; line gives us 
    access to our app's configuration data as the variable config. const is a 
    way to declare a read-only variable, as to make sure it is not accidentally 
    reassigned elsewhere. At the end of the file, export default Router; makes 
    the Router variable defined in this file available to other parts of the app.
*/
