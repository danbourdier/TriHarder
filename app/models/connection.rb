class Connection < ApplicationRecord

validates :requester, presence: true
validates :requestee, presence: true

  #person with which we associate with the requestee
  belongs_to :user,
    foreign_key: :requester,
    class_name: :User,
    primary_key: :id

  belongs_to :connection,
    foreign_key: :requestee, 
    class_name: :User,
    primary_key: :id


    def all_the_user_comments 
      # returns an array of objects each representing a comment
        # we want each comment to have a key pointing to a collection of replies(if any)
      collection = []
      connection.comments.each do |comment| 
        newObj = {}
        newObj['comment'] = comment
        newObj['parent_comment'] = comment.parent_comment
        comment.parent_comment ? newObj['parent_comment_replies'] = comment.parent_comment.child_comments : newObj['parent_comment_replies'] = []
        newObj['replies'] = comment.child_comments
        collection << newObj
      end

      collection
    end

    

end