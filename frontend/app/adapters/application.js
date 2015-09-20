import ActiveModelAdapter from'active-model-adapter';
import $ from 'jquery';

export default ActiveModelAdapter.extend({
  host: 'http://api.ember-cli-101.com',
  namespace: 'api/v2',
  headers: {
    "X-CSRF-Token": $('meta[name="csrf-token"]').attr('content')
  }
});
