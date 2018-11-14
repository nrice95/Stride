json.athlete do
  json.set! :id, @athlete.id
  json.set! :athletename, @athlete.username
end
