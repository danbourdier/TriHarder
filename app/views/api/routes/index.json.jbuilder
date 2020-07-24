
@routes.each do |route|
  json.set! route.id do
    json.extract! route, :id, :title, :total_time, :activity, :distance, :description, :start_point,
      :end_point, :user_id, :created_at, :updated_at
  end
 
end