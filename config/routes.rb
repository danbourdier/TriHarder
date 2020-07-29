Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do 
    resource :user, only: [:create, :show]
    resources :routes, only: [:index, :create, :show, :destroy, :edit]
    resource :session, only: [:create, :destroy, :show]
    resources :comments, only: [:index, :create, :show, :destroy]
    resources :connections, only: [:index, :create, :destroy]
    resources :connection_requests, only: [:index, :create, :show, :destroy]
    resources :friend_searches, only: [:index, :show]
  end
  
  root "static_pages#root"
end
