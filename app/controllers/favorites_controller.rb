class FavoritesController < ApplicationController
  before_action :require_user_logged_in
  
  def create
    post = Micropost.find(params[:micropost_id])
    current_user.favorite(post)
    flash[:success] = 'お気に入りを追加しました'
    redirect_back(fallback_location: root_path)
  end

  def destroy
    favorite = Favorite.find(params[:id])
    post = Micropost.find_by(id: favorite.micropost_id)
    current_user.unfavorite(post)
    flash[:success] = 'お気に入りを解除しました。'
    redirect_back(fallback_location: root_path)
  end
end
