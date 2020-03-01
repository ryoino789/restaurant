class Micropost < ApplicationRecord
  belongs_to :user
  
  has_many :favorites , dependent: :destroy
  has_many :users, through: :favorites, dependent: :destroy
  
  mount_uploader :img, ImageUploader
  
  validates :content, presence: true, length: { maximum: 255 }
  validates :lat, presence: true
  validates :lng, presence: true
end
