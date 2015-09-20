import ActiveModelAdapter from'active-model-adapter';
import $ from 'jquery';

export default ActiveModelAdapter.extend({
  namespace: 'api/v2',
  headers: {
    "X-CSRF-Token": $('meta[name="csrf-token"]').attr('content')
  }
});
