json.extract! route, :id, :title, :activity, :distance, :description, :start_point,
  :end_point, :creator_id, :route_data, :created_at

  # jbuilder directly references each respective object from a model utilizing methods from a model
  # my partial