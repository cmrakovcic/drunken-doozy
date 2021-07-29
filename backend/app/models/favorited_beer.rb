class FavoritedBeer < ApplicationRecord
    scope :alpha, -> { order(:title) }
end
