class CameraSerializer < ActiveModel::Serializer
  attributes :id, :model, :description
  has_many :photos
end
