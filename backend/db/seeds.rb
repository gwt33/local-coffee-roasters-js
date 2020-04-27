# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Roaster.create([
    {
        name: "Roast'd",
        location: "Fort Lee & Hasbrouck Heights, NJ"
    }
])
Roaster.create([
    {
        name: "Stray Cat Brew",
        location: "Maywood, NJ"
    }
])
Roaster.create([
    {
        name: "American Bulldog Coffee Roasters",
        location: "Ridgewood & Ramsay, NJ & Chestnut Ridge, NY"
    }
])

Coffee.create([{
    name: "Kivu - Rwanda",
    notes: "Rhubarb, honey, smooth. Certified Fair Trade",
    roast: "Dark",
    roaster_id: 1
}])
Coffee.create([{
    name: "Peruvian HB Cuzco Region",
    notes: "Full-bodied, citrus notes. Delicate, with floral and nutty overtones and a sweet finish. Fruity acidity.",
    roast: "Medium",
    roaster_id: 2
}])
Coffee.create([{
    name: "Bali Blue Moon",
    notes: "Bakers Chocolate, Licorice and Red Wine",
    roast: "medium/dark",
    roaster_id: 3
}])

p "Created #{Roaster.count} roasters"
p "Created #{Coffee.count} coffees"