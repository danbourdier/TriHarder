@comments.each do |comment|
  json.set! comment.id do 
    json.extract! comment, :id, :body, :the_author, :the_author_email
  end
end
