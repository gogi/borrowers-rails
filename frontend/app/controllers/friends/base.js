import Ember from 'ember';

export default Ember.Controller.extend({
  hasEmail: Ember.computed.notEmpty('model.email'),
  hasFirstName: Ember.computed.notEmpty('model.firstName'),
  hasLastName: Ember.computed.notEmpty('model.lastName'),
  hastwitter: Ember.computed.notEmpty('model.twitter'),
  isValid: Ember.computed.and(
    'hasEmail',
    'hasFirstName',
    'hasLastName',
    'hasTwitter'
  ),
  actions: {
    save() {
      if (this.get('isValid')) {
        this.get('model').save().then((friend) => {
          this.transitionToRoute('friends.show', friend);
        });
      } else {
        this.set('errorMessage', 'Fill all the fields dumbass!');
      }
      return false;
    },
    cancel() {
      return true;
    }
  }
});
