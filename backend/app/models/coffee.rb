class Coffee < ApplicationRecord
  has_many :roaster_coffees
  has_many :roasters, through: :roaster_coffees
end
