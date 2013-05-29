get '/' do
  @roles = dice_roles.roles #creates new DieRolls object and assigns an empty array of roles to it, which is assigned to the sessions[:roles] variable
  erb :index
end

post '/roll' do
  
  
  dice_roles.roll! #shovels a random number to the roles array for the current DieRolls instance
  
  
  content_type :json
  {roles: session[:roles]}.to_json
end

get '/roles' do
  content_type :json
  dice_roles.roles.to_json
end

# html data: data-rolls
# script in view--sprinkling
# url parameter - grabbing javascript url  /5
# on js side, grab from 
# cookie - write it in your route, and read it from js
