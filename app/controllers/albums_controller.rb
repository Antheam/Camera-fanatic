class AlbumsController < ApplicationController
  def index
    albums = Album.all
    if albums
      render json: {data: albums}, status: 200
    else
      render json: {data: 'No albums found'}, status: 404
    end
  end

  def show
    album = Album.find(params[:id])
    photos = album.photos
    if album
      render json: {data: {album: album, photos: photos}}, status: 200
    else
      render json: {data: 'No albums found'}, status: 404
    end
  end
end
