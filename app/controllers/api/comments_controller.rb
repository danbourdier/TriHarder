class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.all

    render "api/comments/index"
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save

    else
      render_json @comment.errors.full_messages, status: 422
    end
  end

  def edit

  end

  private
  def comment_params
    params.require(:comment).permit(:body, :author_email, :author_id, :)
  end

end