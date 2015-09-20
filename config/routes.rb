Rails.application.routes.draw do
  mount EmberCLI::Engine => 'ember-tests' if Rails.env.development?

  root 'application#index'

  namespace :api do
    resources :articles, except: [:new, :edit]
    resources :friends, except: [:new, :edit]
    namespace :v2 do
      resources :friends,  except: [:new, :edit]
      resources :articles, except: [:new, :edit]
    end
    namespace :v3 do
      resources :friends,  except: [:new, :edit]
      resources :articles, except: [:new, :edit]
    end
    namespace :v4 do
      resources :friends,  except: [:new, :edit]
      resources :articles, except: [:new, :edit]
    end
  end

  get '/*path' => 'application#index'
end
