class Roaster < ApplicationRecord
    has_many :coffees

    validates :name, presence: true
    validates :location, presence: true

end
