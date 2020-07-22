class ConnectionRequest < ApplicationRecord

  validates :pending, inclusion: { in: [true, false] }
  validates :requester_id, :requestee_id, presence: true

  belongs_to :user,
    foreign_key: :requester_id,
    class_name: :User,
    primary_key: :id

  belongs_to :connection_requestee,
    foreign_key: :requestee_id,
    class_name: :User,
    primary_key: :id

end