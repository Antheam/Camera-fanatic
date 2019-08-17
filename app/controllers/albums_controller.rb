class AlbumsController < ApplicationController
  def index
    albums = Album.all.map do |album|
      AlbumSerializer.new(album)
    end
    if albums
      render json: {data: albums}, status: 200
    else
      render json: {data: 'No albums found'}, status: 404
    end
  end

  def show
    album = Album.find(params[:id])
    if album
      render json: {data: {album: AlbumSerializer.new(album)}}, status: 200
    else
      render json: {data: 'No albums found'}, status: 404
    end
  end
end
