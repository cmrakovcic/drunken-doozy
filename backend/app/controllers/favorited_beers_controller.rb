class FavoritedBeersController < ApplicationController
    before_action :set_params, only: [:show, :update, :destroy]

  def index
    @favorited_beers = Favorited_beer.all
    render json: @favorited_beers, only: [:id, :beer], status: 200
  end

  def create
    @favorited_beer = Favorited_beer.create(favorited_beer_params)
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
    @favorited_beer = Favorited_beer.find(params[:id])
  end
end
