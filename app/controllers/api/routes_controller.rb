class Api::RoutesController < ApplicationController
  def index
    @routes = current_user.routes # this takes advantage of our active record associations established within our models.

    render "api/routes/index"
  end
 
  def show 
    @route = Route.find(params[:id]) # this uses active record to perform an SQL query of our DB to return a search from our Routes table

    render "api/routes/show"
  end

  def create

    @route = Route.new(route_params) # active record passing our *strong params*

    if @route.save # if the route saves without throwing we execute the conditional
      render "api/routes/show"
    else
      render json: @route.errors.full_messages, status: 422
    end
  end


  def destroy
    @route = Route.find(params[:id])

    if @route.destroy

      render json: ["destroy successful"]
    else
      render json: ["destroy unnsuccessful"]
    end
  end

  def update
    @route = Route.find(params[:id])

    
    if @route.update_attributes(route_params) # with the #update_attrs method we allow mutation of an existing entry in our table
      @route.save
      render "api/routes/show"
    else
      render json: route.errors.full_messages, status: 422
    end
  end


  private 

  def route_params
    params.require(:route).permit(
      :title, :distance, :total_time, :activity, :description, 
      :start_point, :end_point, :user_id, :route_data
      )
  end
end
