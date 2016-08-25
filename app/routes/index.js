import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.get('store').findAll('rental');
		// this.get('store').findAll('rental'), Ember Data will make a GET request to /rentals
		// https://guides.emberjs.com/v2.7.0/tutorial/ember-data/
	}
});
