# json.athlete do
# json.set! :id, @athlete.id
# json.set! :athletename, @athlete.username
# end

json.partial! "api/athletes/athlete", athlete: @athlete
