class Photo < ApplicationRecord
  belongs_to :album
  belongs_to :camera
  has_many :likes
end
