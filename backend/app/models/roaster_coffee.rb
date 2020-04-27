class RoasterCoffee < ApplicationRecord
  belongs_to :roaster
  belongs_to :coffee
end
