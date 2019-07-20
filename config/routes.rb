Rails.application.routes.draw do
  get 'cameras/most_review', to: 'cameras#most_review', as: 'most_review'
  post 'login' => 'sessions#create'
get '/login', to: 'sessions#new'
  resources :comments
  resources :cameras
  resources :photos
  resources :albums
  resources :users
  resources :likes

  get 'signup', to: 'users#new'
  root to: 'pages#home'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
