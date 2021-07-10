class User < ApplicationRecord
    has_secure_password
    has_many :favorited_beer
    validates :email, presence: true
    validates :email, uniqueness: {scope: :email, message: "already exists"}
end
