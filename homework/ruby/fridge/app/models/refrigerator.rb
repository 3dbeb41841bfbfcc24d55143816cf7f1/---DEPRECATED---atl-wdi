class Refrigerator < ApplicationRecord
    has_many :foods, dependent: :destroy
    has_many :drinks, dependent: :destroy
end