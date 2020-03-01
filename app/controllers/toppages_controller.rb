class ToppagesController < ApplicationController
  def index
    if logged_in?
      @microposts = Micropost.all.order(id: :desc).page(params[:page])
    end
  end
end

