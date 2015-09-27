import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('article', {
      friend: this.modelFor('friends/show')
    });
  },
  resetController(controller, isExiting) {
    if (isExiting) {
      var model = controller.get('model');
      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  },
  actions: {
    save() {
      var model = this.modelFor('articles/new');

      if (this.get('isValid')) {
        model.save().then(() => {
          this.transitionTo('articles');
        });
      } else {
        this.set('errorMessage', 'Fill description field dumbass!');
      }
      return false;
    },
    cancel() {
      this.transitionTo('articles');
    }
  }
});
