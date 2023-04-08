require 'sinatra/reloader' if development?
require 'sinatra/cookies'

# load models
require "./models/models.rb"

# configs
enable :sessions

# load helpers
require "./appHelpers"