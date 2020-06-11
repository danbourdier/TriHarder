class Route < ApplicationRecord

  validates :route, :total_time, :activity, :distance, :description, :start_point,
      :end_point, :user_id, presence: true
  validates :activity, :route, :description, length: { minimum: 6 }

  belongs_to :user, {
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id
  }

  


end
