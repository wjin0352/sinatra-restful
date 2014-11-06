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


# with ajax you can call a route you created which gives the response u want
# use the id to find description and return it   
# and then use js to put it in 
# js will insert that response to...
get 'song/ajax/:id' do
	@song = Song.get(params[:id])
	id = @song.id
	erb :index
end

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





























