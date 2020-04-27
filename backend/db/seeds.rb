# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Roaster.create(
    { name: "Roast'd Coffee",
    location: "Fort Lee & Hasbrouck Heights, NJ" },
    { name: "Stray Cat Brew",
    location: "Maywood, NJ" },
    { name: "American Bulldog Coffee Roasters",
    location: "Ridgewood & Ramsey NJ, Chestnut Ridge NY" },
)

p "Created #{Roaster.count} roasters"

Coffee.create(
    {},
    {},
    {}
)