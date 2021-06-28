class FavoritedBeer < ApplicationRecord
    belongs_to :user

    scope :alpha, -> { order(:title) }
    
end
