class FavoritedBeersController < ApplicationController
    before_action :set_params, only: [:show, :destroy]

  def index
    @favorited_beers = FavoritedBeer.all
    # render json: @favorited_beers, only: [:name, :tagline, :abv, :ibu], status: 200
    render json: @favorited_beers, status: 200

  end

  def create
    @favorited_beer = FavoritedBeer.create(favorited_beer_params)
    # render json: @favorited_beer, only: [:name, :tagline, :abv, :ibu], status: 200
    render json: @favorited_beers, status: 200

  end

  def show
    @favorited_beer = FavoritedBeer.all
    render json: @favorited_beers, status: 200
  end

  def destroy
    # binding.pry
    @favorited_beer = FavoritedBeer.find(params[:id])
    @favorited_beer.destroy
  end

  private

  def favorited_beer_params
    params.permit(:id, :name, :tagline, :abv, :ibu, :food_pairing)
    # params.require(:favorited_beer).permit(:name, :tagline, :abv, :ibu, :food_pairing)
  end

  def set_params
    @favorited_beer = FavoritedBeer.find(params[:id])
  end
end
