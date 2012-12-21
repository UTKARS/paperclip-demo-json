PaperclipDemo::Application.routes.draw do
  resources :friends
  root :to => 'friends#index'
  get '/friends/:id/get_url' => 'friends#get_url', :as => :get_url
end
