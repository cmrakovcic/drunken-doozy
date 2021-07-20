class FavoritedBeerSerializer < ActiveModel::Serializer
  attributes :name, :tagline, :abv, :ibu
  belongs_to :user
end
