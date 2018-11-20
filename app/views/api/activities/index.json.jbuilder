@activities.each do |activity|
  json.set! route.id do
    json.partial! "route", route: route
