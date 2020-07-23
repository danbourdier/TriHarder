class Api::ConnectionRequestsController < ApplicationController

  def index
    @connection_requests = current_user.connection_requests.all
    render 'api/connection_requests/index'
  end

  def show
    @connection_request = ConnectionRequest.find(params[:id])
    render 'api/connection_requests/show'
  end

  def create
    
    if current_user.id === strong_params[:requester_id].to_i
        @connection_request = ConnectionRequest.new(strong_params)

        if current_user.connection_requests.all? { |connection_req| connection_req[:requestee_id] != strong_params[:requestee_id]  }
              @connection_request[:pending] = true
          if @connection_request.save
            render 'api/connection_requests/show'
          else
            render json: @connection_request.errors.full_messages, status: 422
          end

        end
    else
      render json: ["Have to be logged in to send a friend request"]
    end
  end

  def destroy
    @connection_request = current_user.connection_requests.find(params[:id])

    if @connection_request
      @connection_request.destroy
    else
      render json: @connection_request.errors.full_messages, status: 404
    end
  end

  private
  def strong_params
    params.require(:connection_request).permit(:requester_id, :requestee_id, :pending)
  end

end