@connection_requests.each do |connection_request|
  json.set! connection_request.id do
    json.extract! connection_request, :id, :requester, :requestee, :pending
  end
end
 