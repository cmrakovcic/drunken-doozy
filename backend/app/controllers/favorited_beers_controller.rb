class FavoritedBeersController < ApplicationController
    before_action :set_params, only: [:show, :update, :destroy]

  def index
    @favorited_beers = FavoritedBeer.all
    render json: @favorited_beers, only: [:id, :beer], status: 200
  end

  def create
    @favorited_beer = FavoritedBeer.create(favorited_beer_params)
    render json: @favorited_beer, status: 200
  end

  def show
    render json: @favorited_beer, status: 200
  end

  def destroy
    @favorited_beer.destroy
  end

  private

  def favorited_beer_params
    params.require(:favorited_beer).permit(:id, :beer)
  end

  def set_params
    @favorited_beer = FavoritedBeer.find(params[:id])
  end
end
