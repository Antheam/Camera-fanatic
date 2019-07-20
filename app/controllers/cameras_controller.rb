class CamerasController < ApplicationController

  def index
    if params[:search]
      @cameras = Camera.search(params[:search]).order("created_at DESC")
    else
    @cameras = Camera.all
    end
  end

  def show
      @camera=Camera.find(params[:id])
      @photos = @camera.photos
      @photo = Photo.new
      @comments = @camera.comments

  end

  def most_review
    @camera = Camera.all.max_by{|camera|camera.comments.length}
  end

  def new
    @camera = Camera.new
end
def create
@camera = Camera.new(camera_params)
if @camera.valid?
@camera.save
redirect_to camera_path(@camera)
else
  render :new
end
end
def edit
@camera = Camera.find(params[:id])
end

def update
@camera = Camera.find(params[:id])
@camera.update(camera_params)
redirect_to cameras_path
end

def destroy
@camera = Camera.find(params[:id])
  @camera.destroy
  redirect_to cameras_path
end

end

private
def camera_params
# params.require(:camera).permit!
params.require(:camera).permit(:id, :user_id, :model, :description, :search)
end
