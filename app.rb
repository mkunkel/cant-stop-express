require 'sinatra'
require 'json'
require 'slim'
require_relative 'lib/roller'

class CantStop < Sinatra::Base
  get '/' do
    slim :index
  end

  get '/roll' do
    Roller.roll.to_json
  end

  get '/index.css' do
    scss :index
  end
end
