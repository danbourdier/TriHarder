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
require 'test_helper'

class RouteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
