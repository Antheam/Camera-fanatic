class User < ApplicationRecord
  has_many :comments
  has_many :cameras
  has_many :albums
  has_many :photos, through: :album
  has_many :likes

  has_secure_password
end
