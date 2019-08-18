class CamerasController < ApplicationController

  def index
    if params[:search]
      if cameras = Camera.search(params[:search]).order("created_at DESC")
        render json: {data: cameras}, status: 200
      end
    else
      render json: {data: Camera.all}, status: 200
    end
  end

  def show
    camera = Camera.find(params[:id])
    photos = camera.photos
    comments = camera.comments
    if camera and photos and comments
      render json: {data: {
        camera: camera,
        photos: photos,
        comments: comments
      }}, status: 200
    else
      render json: {data: 'Not found'}, status: 404
    end
  end

  def most_review
    camera = Camera.all.max_by{|camera|camera.comments.length}
    if camera
      render json: {data: camera}, status: 200
    else
      render json: {data: 'Not found'}, status: 404
    end
  end

  def create
    camera = Camera.new(camera_params)
    if camera.save
      render json: {data: camera}, status: 200
    else
      render json: {data: 'Failed to save'}, status: 500
    end
  end

  def update
    camera = Camera.find(params[:id])
    if camera.update(camera_params) and camera.save
      render json: {
	  	  camera:camera
	  } 
	end
  end

  def destroy
    @camera = Camera.find(params[:id])
    @camera.destroy
    redirect_to cameras_path
  end

  private
  def camera_params
    # params.require(:camera).permit!
    params.require(:camera).permit(:id, :user_id, :model, :description, :search)
  end
end