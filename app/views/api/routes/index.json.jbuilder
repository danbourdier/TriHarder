# debugger
@routes.each do |route|
  json.set! route.id do
    json.extract! route, :id, :title, :activity, :distance, :description, :start_point,
      :end_point, :user_id 
  end
  # debugger
end