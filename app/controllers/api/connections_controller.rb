class Api::ConnectionsController < ApplicationController

  def index
    #@connections = Connection.where({ requester: current_user.id})
     @connections = Connection.all
    
    render "api/connections/index"
  end

  def create

        # created both ways so simulate two connections, thats why we create while indexing into strong_params
      @connection1 = Connection.new({requester: strong_params[:requester], requestee: strong_params[:requestee]}) 
      @connection2 = Connection.new({requester: strong_params[:requestee], requestee: strong_params[:requester]}) 

      if @connection1.save && @connection2.save
        render "api/connections/show"
      else
          render json: @connection1.errors.full_messages, status: 422
      end
  end

  def destroy
    #@connection = Connection.find(params[:id])

    @connection = current_user.connections.find(params[:id])

      if @connection
        @connection.destroy
      else
          render json: ["Error deleting connection"], status: 422
      end 

  end

    private 

    def strong_params
        params.require(:connection).permit(:requester, :requestee)
    end


end
