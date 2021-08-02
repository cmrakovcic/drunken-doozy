class FavoritedBeersController < ApplicationController
  before_action :set_favorited_beer, only: [:show, :destroy]

  def index
    @favorited_beers = FavoritedBeer.all
    render json: @favorited_beers, status: 200

  end

  def create
    @favorited_beer = FavoritedBeer.create(favorited_beer_params)
    render json: @favorited_beer, status: 200

  end

  def show
    @favorited_beer = FavoritedBeer.all
    render json: @favorited_beers, status: 200
  end

  def destroy
    # binding.pry
    @favorited_beer.destroy
    render json: @favorited_beer, status: 200
  end

  private

  def favorited_beer_params
    params.require(:favorited_beers).permit(:id, :name, :tagline, :abv, :ibu, :food_pairing)
  end

  def set_favorited_beer
    @favorited_beer = FavoritedBeer.find(params[:id])
  end
end
