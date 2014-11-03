require 'rubygems'
require 'sinatra'
require 'data_mapper'
require 'sinatra/reloader' if development?
require 'do_postgres'
require './db'

configure :development do
	DataMapper.setup(:default, ENV['DATABASE_URL'] || 'postgres://localhost/mynewdb')
end

configure do
	enable :sessions
	set :username, 'frank'
	set :password, 'sinatra'
end

configure :production do
	DataMapper.setup(:default, ENV['DATABASE_URL'] || 'postgres://localhost/[HEROKU_POSTGRESQL_CHARCOAL_URL]')	
end

get '/' do
	@title = "home page"
	erb :home # Even '/' must lead to a erb even if its empty or you wont get the layouts
	
end

get '/about' do
	@title = "about page" # look at layouts in title tag
	erb :about
end

get '/contact' do
	@title = "Contact"
	erb :contact
end



 















