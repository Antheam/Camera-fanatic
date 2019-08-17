class AlbumSerializer < ActiveModel::Serializer
    attributes :id, :name
    belongs_to :user
    belongs_to :camera
    has_many :photos
  
    def camera
      {
        camera_model: self.object.camera.model,
        camera_name: self.object.camera.description,
      }
    end
end