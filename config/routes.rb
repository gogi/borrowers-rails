Rails.application.routes.draw do
  mount EmberCLI::Engine => 'ember-tests' if Rails.env.development?

  root 'application#index'

  namespace :api do
    resources :friends, except: [:new, :edit]
  end

  get '/*path' => 'application#index'
end
