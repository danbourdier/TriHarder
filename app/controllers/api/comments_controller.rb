require 'byebug';

class Api::CommentsController < ApplicationController

  def index
    #debugger
    @comments = current_user.comments
    render "api/comments/index"
  end

  def show
    @comment = Comment.find(params[:id])
    render "api/comments/show"
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    # can use our associations for a shortcut to delete ONLY a user's comments
    @comment = current_user.comments.find(params[:id])

    if @comment
      @comment.destroy
    else
      render json: @comment.errors.full_messages, status: 404
    end

  end


  private
  def comment_params
    params.require(:comment).permit(:body, :author_email, :author_id)
  end

end
