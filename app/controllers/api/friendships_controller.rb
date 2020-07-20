class Api::FriendshipsController < ApplicationController

  def index
        @friendships = Friendship.all
        render :index
    end

   def create
        @friendship1 = FriendRequest.new({requester: strong_params[:requester], requestee: strong_params[:requestee]}) 
        @friendship2 = FriendRequest.new({requester: strong_params[:requestee], requestee: strong_params[:requester]}) 

        if @friendship1.save && @friendship2.save
            render :show
        else
            render json: ["Unable to accept friendship"], status: 422
        end
    end

    def destroy
        @friendship = Friendship.find(params[:id])
        if @friendship.destroy
            render json: @friendship
        else
            render json: ["Unable to delete friendship"], status: 422
        end 
    end


    private 

    def strong_params
        params.require(:friendship).permit(:requester, :requestee)
    end


end
