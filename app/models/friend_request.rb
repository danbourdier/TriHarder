# == Schema Information
#
# Table name: friend_requests
#
#  id         :bigint           not null, primary key
#  requester  :integer          not null
#  requestee  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class FriendRequest < ApplicationRecord

validates :requester, :requestee, presence: true

  #person with which we associate with the requestee
  belongs_to :user,
    foreign_key: :requester,
    class_name: :User,
    primary_key: :id

  belongs_to :friend,
    foreign_key: :requestee,
    class_name: :User,
    primary_key: :id



end
