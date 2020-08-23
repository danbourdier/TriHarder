# == Schema Information
#
# Table name: routes
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  total_time  :float            not null
#  activity    :string           not null
#  distance    :float            not null
#  description :text             not null
#  start_point :string           not null
#  end_point   :string           not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Route < ApplicationRecord

  validates :title, :total_time, :activity, :distance, :description, :start_point,
      :end_point, :user_id, :route_date, presence: true
  validates :activity, :title, :description, length: { minimum: 3 }

  belongs_to :user, 
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id
  

  def creator_id
    user.id
  end

end
