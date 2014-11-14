require 'dm-core'
require 'dm-migrations'

# defining my models with datamapper

class Song
	include DataMapper::Resource
	property :id, Serial
	property :title, String
	property :lyrics, Text
	property :length, Integer
	property :released_on, Date
	property :likes, Integer, :default => 0

	def released_on=date
		super Date.strptime(date, '%m/%d/%Y')
	end

end

# class Contact 
# 	include DataMapper::Resource
# 	property :id, Serial
# 	property :name, String
# 	property :body, Text
# 	property :released_on, Date
# 	property :email, String
# end

configure do 
	enable :sessons
	set :username, 'frank'
	set :password, 'sinatra'
end

DataMapper.finalize


get '/songs' do
	@songs = Song.all 
	erb :index
end

get '/song/new' do
	@song = Song.new
	erb :new_song_form
end

# like button route
post '/like/:id' do
	@song = Song.get(params[:id])
	@song.likes = @song.likes.next
	@song.save # saves and updates page upon a redirect or render

  redirect to"/song/#{@song.id}" unless request.xhr? # unless runs on false condition, if true the else is run...
    erb :like, :layout => false  # renders like, which is just the like portion, and doesnt show layout
end


# with ajax you can call a route you created which gives the response u want
# use the id to find description and return it   
# and then use js to put it in 
# js will insert that response to...
# get '/ajax/all' do
# 	@songs = Song.all
# 	@songs.to_json
	## since we are doing ajax request we dont need a view
  ## just return as json and will handle the data via jquery
  ## donot forget to add jquery in your layout.erb file

get '/ajax/:id' do
	@song = Song.get(params[:id])
	@song.to_json

end


# post '/song/ajax/:id' do
# 	@song = Song.get(params[:id])
# 	@song.likes = @song.likes.next
# 	@song.save
#   # erb :like, :layout => false
#   # redirect to"/song/ajax/#{@song.id}" unless request.xhr?
# 	#
# 	redirect back
# end


get '/song/:id' do
	@song = Song.get(params[:id])
	erb :songs
end

get '/song/:id/edit' do
	@song = Song.get(params[:id])
	erb :edit_song
end

post '/song' do
	song = Song.create(params[:song])
	redirect to("/song/#{song.id}")
end

put '/song/:id' do
	song = Song.get(params[:id])
	song.update(params[:song])
	redirect to("/song/#{song.id}")
end

# delete made with one route because I used a form to send the post/delete request to here
delete '/song/:id' do
	Song.get(params[:id]).destroy
	redirect to("/songs")
end





























