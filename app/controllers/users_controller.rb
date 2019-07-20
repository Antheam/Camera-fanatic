class UsersController < ApplicationController
    def index
        @users = User.all
    end

    def new
      @user= User.new
    end

    def show
        @user = User.find(params[:id])
        @albums = @user.albums
    end

      def create
  @user = User.new(user_params)
  if @user.save
    session[:user_id] = @user.id
    redirect_to '/'
  else
    redirect_to '/signup'
  end

end
private
  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
