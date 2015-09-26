import Ember from 'ember';

export default Ember.Component.extend({
  tagname: 'tr',
  article: null, //passed-in
  articleStates: null, //passed-in
  actions: {
    saveArticle() {
      let article = this.get('article');
      if (article.get('hasDirtyAttributes')) {
        this.sendAction('save', article);
      }
    }
  }
});
