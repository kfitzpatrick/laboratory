require 'rubygems'
require 'sinatra'

set :root, File.dirname(__FILE__)
set :public, Proc.new { File.join(root, "public") }

