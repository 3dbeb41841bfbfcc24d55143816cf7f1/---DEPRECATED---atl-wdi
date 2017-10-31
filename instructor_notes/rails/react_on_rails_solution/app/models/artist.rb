class Artist < ApplicationRecord
  has_many :songs, dependent: :destroy
end
