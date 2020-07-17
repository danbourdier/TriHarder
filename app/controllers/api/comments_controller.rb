class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.all

    render "api/comments/index"
  end

  def show
    @comment = Comment.find(params[:id])

    render "api/comments/show"
  end

  def create
    @comment = Comment.new(comment_params)
    # debugger
    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  # def edit

  # end

  private
  def comment_params
    params.require(:comment).permit(:body, :author_email, :author_id)
  end

end