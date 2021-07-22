class FavoritedBeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :tagline, :abv, :ibu, :food_pairing
  # belongs_to :user
end
