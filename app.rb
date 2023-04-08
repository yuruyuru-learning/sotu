require 'bundler/setup'
Bundler.require

require "./appRequires"

not_found do
  redirect "/"
end

set :server, 'thin'
set :sockets, []
set :raws, []

get '/' do
  erb :index
end

get '/result' do
  erb :result
end

get '/websocket' do
  if request.websocket?
    request.websocket do |ws|
      ws.onopen do
        settings.sockets << ws
      end
      ws.onmessage do |msg|
        if msg == "0"
          settings.raws.each do |r|
            r.send(msg)
          end
        else
          settings.sockets.each do |s|
            s.send(msg)
          end
        end
      end
      ws.onclose do
        settings.sockets.delete(ws)
      end
    end
  end
end

