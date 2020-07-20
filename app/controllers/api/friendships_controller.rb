class Api::FriendshipsController < ApplicationController

   def create
        @friendship1 = FriendRequest.new({requester: friendship_params[:requester], requestee: friendship_params[:requestee]}) 
        @friendship2 = FriendRequest.new({requester: friendship_params[:requestee], requestee: friendship_params[:requester]}) 

        if @friendship1.save && @friendship2.save
            render :show
        else
            render json: ["Unable to accept friendship"], status: 422
        end
    end
end
