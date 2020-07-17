@comments.each do |comment|
  json.set! comment.id do 
    json.extract! comment, :body, :author_id, :author_email
  end
end