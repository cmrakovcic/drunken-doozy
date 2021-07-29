class CreateFavoritedBeers < ActiveRecord::Migration[6.1]
  def change
    create_table :favorited_beers do |t|
      t.string :name
      t.string :tagline
      t.decimal :abv
      t.decimal :ibu
      t.string :food_pairing

      t.timestamps
    end
  end
end
