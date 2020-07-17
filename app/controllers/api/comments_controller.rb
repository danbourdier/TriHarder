class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.all

    render "api/comments/index"
  end

  def create

  end

  def edit

  end



end