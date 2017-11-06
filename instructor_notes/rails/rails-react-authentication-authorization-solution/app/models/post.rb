class Post < ApplicationRecord
  attr_accessor :user_email

  belongs_to :user
end
