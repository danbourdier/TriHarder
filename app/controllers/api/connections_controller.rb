class Api::ConnectionsController < ApplicationController

  def index
        @connections = Connection.all
        render json: "api/connections/index"
  end

  def create
      @connection1 = Connection.new({requester: strong_params[:requester], requestee: strong_params[:requestee]}) 
      @connection2 = Connection.new({requester: strong_params[:requestee], requestee: strong_params[:requester]}) 

      if @connection1.save && @connection2.save
          render json: "api/connections/index"
      else
          render json: ["Unable to accept connection"], status: 422
      end

  end

  def destroy
      @connection = connection.find(params[:id])

      if @connection.destroy
          # render json: @connection
      else
          # flash: {error: "unsuccessful!!!!"}
          render json: ["Unable to delete connection"], status: 422
      end 

  end


    private 

    def strong_params
        params.require(:connection).permit(:requester, :requestee)
    end


end
