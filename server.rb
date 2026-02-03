#!/usr/bin/env ruby
# Simple HTTP server for static site
require 'webrick'

port = ENV['PORT'] || 8000
document_root = File.expand_path(__dir__)

server = WEBrick::HTTPServer.new(
  Port: port,
  DocumentRoot: document_root,
  BindAddress: '127.0.0.1'
)

trap('INT') { server.shutdown }
trap('TERM') { server.shutdown }

puts "Starting server at http://127.0.0.1:#{port}"
puts "Press Ctrl+C to stop the server"
server.start
