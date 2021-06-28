class User < ApplicationRecord
    has_secure_password
    has_many :favorited_beer

    validates :username, :email, presence: true
    validates :username, uniqueness: {scope: :username, message: "already exists"}
end
