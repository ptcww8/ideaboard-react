Rails.application.routes.draw do
  get 'home/index'
	root to: 'home#index'
	#get  '/logs', to: 'logs#index', as: :logs
  namespace :api do
    namespace :v1 do
      resources :ideas  
    end
  end
  #resources :ideas
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
