class PhotosController < ApplicationController

    def index
        photos=Photo.all
       render json: {data: {
        photos: photos,
      }}
    end
    def show
        photo = Photo.find(params[:id])
        cameras = camera.photos
        if photo
    render json: {data:{photo: photos}}, status:200
        else 
          render json: {data:'no photos found'}, status:404
    end
  end

    
    def new
        @photo=Photo.new
    end
    def create
        @photo = Photo.new(photo_params)
        @photo.album = Album.all.sample
        @photo.save
        # byebug
        redirect_to photo_path(@photo)
      end

def destroy
  @photo =Photo.find(params[:id])
  @photo.destroy
  redirect_to photos_path
end

end
private
def photo_params
  params.require(:photo).permit(:image_link, :camera_id)
end
