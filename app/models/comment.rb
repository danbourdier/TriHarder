# == Schema Information
#
# Table name: comments
# 
#  id                :bigint           not null, primary key
#  author_email      :string           not null
#  body              :string           not null
#  author_id         :integer          not null
#  parent_comment_id :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Comment < ApplicationRecord

  validates :author_email, :author_id, presence: true
  validates :body, length: { minimum: 10 }

  belongs_to :user,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id

  belongs_to :parent_comment,
    class_name: :Comment,
    foreign_key: :parent_comment_id

  has_many :child_comments,
    class_name: :Comment
    foreign_key: :parent_comment_id

  def the_author
    user.id
  end

  def the_author_email
    user.email
  end


end
