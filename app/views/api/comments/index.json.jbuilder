@comments.each do |comment|
  json.set! comment.id do 
    json.extract! comment, :id, :body, :the_author, :author_email
  end
end