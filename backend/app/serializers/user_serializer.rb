class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password
  has_many :favorited_beer
end
