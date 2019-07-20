class LikesController < ApplicationController
def new
  @like = Like.new
end

def create
  @like =Like.new(params_like)
  @like.save
  redirect_to photos_path


end
private
def params_like
params.require(:like).permit(:user_id, :photo_id)
end
end
