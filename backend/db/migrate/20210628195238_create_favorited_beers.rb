class CreateFavoritedBeers < ActiveRecord::Migration[6.1]
  def change
    create_table :favorited_beers do |t|
      t.string :beer
      t.references :user

      t.timestamps
    end
  end
end
