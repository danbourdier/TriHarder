class Api::RoutesController < ApplicationController
  def index
    @routes = current_user.routes

    render "api/routes/index"
  end
 
  def show 
    @route = Route.find(params[:id])

    render "api/routes/show"
  end

  def create

    @route = Route.new(route_params)

    if @route.save
      render "api/routes/show"
    else
      render json: @route.errors.full_messages, status: 422
    end
  end


  def destroy
    @route = Route.find(params[:id])

    if @route.destroy

      render json: ["mock destroy test successful"]
    else
      render json: ["mock destroy test unnsuccessful"]
    end
  end

  def update

    @route = Route.find(params[:id])
    # @new_route = Route.new(route_params)
    debugger
    
    if @route.update_attributes(route_params)
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
