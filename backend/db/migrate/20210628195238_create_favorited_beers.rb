class CreateFavoritedBeers < ActiveRecord::Migration[6.1]
  def change
    create_table :favorited_beers do |t|
      t.string :name
      t.string :tagline
      t.decimal :abv
      t.decimal :ibu
      # t.references :user

      t.timestamps
    end
  end
end
