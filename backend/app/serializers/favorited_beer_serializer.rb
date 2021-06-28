class FavoritedBeerSerializer < ActiveModel::Serializer
  attributes :id, :beer
  belongs_to :user
end
