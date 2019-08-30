class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :camera_id, :image_link
  belongs_to :camera
end
