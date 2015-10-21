import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('friend');
  },
  resetController(controller, isExisting) {
    if (isExisting) {
      var model = controller.get('model');
      model.rollback();
    }
  },
});
