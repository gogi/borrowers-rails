Rails.application.routes.draw do
  mount EmberCLI::Engine => 'ember-tests' if Rails.env.development?

  root 'application#index'

  get '/*path' => 'application#index'
end
