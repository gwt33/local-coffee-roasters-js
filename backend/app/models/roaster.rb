class Roaster < ApplicationRecord
    has_many :roaster_coffees
    has_many :coffees, through: :roaster_coffees
end
