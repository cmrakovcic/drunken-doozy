class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]
    before_action :set_user, only: [:show, :destroy]

    def profile
      render json: { user: UserSerializer.new(current_user) }, status: :accepted
    end

    def index
      @users = User.all
      render json: @users
    end

    def show
      render json: @user
    end

    # def create
    #   @user = User.new(user_params)
    #   if @user.save
    #     render json: @user, status: :created, location: @user
    #   else
    #     render json: @user.errors, status: :unprocessable_entity
    #   end
    # end

    def create
      @user = User.create(user_params)
      if @user.valid?
        @token = encode_token({ user_id: @user.id })
        render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
      else
        render json: { error: 'failed to create user' }, status: :not_acceptable
      end
    end

    def destroy
      @user.destroy
    end
    
  private

  def set_user
        @user = User.find(params[:id])
      end

      def user_params
        params.require(:user).permit(:email, :password)
      end
  end