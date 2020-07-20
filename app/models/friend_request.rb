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