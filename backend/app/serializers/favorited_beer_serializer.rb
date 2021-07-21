class FavoritedBeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :tagline, :abv, :ibu
  # belongs_to :user
end
