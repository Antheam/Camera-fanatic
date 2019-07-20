class Camera < ApplicationRecord
  has_many :photos
  has_many :comments
  belongs_to :user
  validates :model, uniqueness: true
  def photo_count
    self.photos.length
  end

  def self.search(search)
    where("model LIKE ?", "%#{search.downcase}")
  end

end
