class Comment < ApplicationRecord

  validates :author_email, :author_id, presence: true
  validates :body, length: {minimum: 10}

  belongs_to :user,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id

  def the_author
    user.id
  end

  def the_author_email
    user.email
  end


end