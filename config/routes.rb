Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :athletes, only: [:create, :show]
    resource :session, only: [:destroy, :create]
    resources :routes, only: [:create, :show, :index]
    resources :activities, only: [:create, :show, :edit, :index]
  end
end
