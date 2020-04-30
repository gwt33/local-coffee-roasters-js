const BASE_URL = 'http://localhost:3000/api/v1';

document.addEventListener("DOMContentLoaded", init)

function init() {
    loadRoasters()
    attachListeners()
}

function attachListeners() {
    newRoasterForm().addEventListener("submit", createRoaster)
}

// ___________________ INDEX ROASTER ______________________
const roastersUl = () => document.getElementById("roasters-index-ul")

function loadRoasters() {
    roastersUl().innerHTML = "";
    fetch("http://localhost:3000/api/v1/roasters")
        .then(resp => resp.json())
        .then(roasters => {
            roasters.map(roaster => {
                const newRoaster = new Roaster(roaster)
                newRoaster.template()
                selectRoasterOption(roaster)
            })
        })
}
// _________________________________________________________


// ___________________ CREATE ROASTER ______________________

const newRoasterForm = () => document.getElementById("new-roaster-form")
const newRoasterFormNameInput = () => document.getElementById("new-roaster-name-input")
const newRoasterFormLocationInput = () => document.getElementById("new-roaster-location-input")

function createRoaster(event) {
    event.preventDefault();

    const roasterName = newRoasterFormNameInput().value
    const roasterLocation = newRoasterFormLocationInput().value

    const roasterData = {
        roaster: {
            name: roasterName,
            location: roasterLocation
        }
    }

    fetch("http://localhost:3000/api/v1/roasters", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(roasterData)
    })
        .then(response => response.json())
        .then(roaster => {
            if (roaster.errors) {
                throw new Error(roaster.errors.join(", "))
            } else {
                loadRoasters()
            }
        })
        .catch(alert)
}

// _________________________________________________________


// ___________________ CREATE COFFEE ______________________
const coffeeName = () => document.getElementById("new-coffee-name-input")
const coffeeNotes = () =>  document.getElementById("new-coffee-notes-input")
const coffeeRoast = () => document.getElementById("new-coffee-roast-input")
const coffeeSubmit = document.getElementById("submit-coffee")
const selectRoaster = document.getElementById('select-roaster')

    // event for when a user clicks
coffeeSubmit.addEventListener("click", event => {
    event.preventDefault(); // 
    createCoffee();
})

        // __ Select Menu __
const selectRoasterOption = roasterObj => {
    const option = document.createElement('option')
    option.value = roasterObj.id
    option.label = roasterObj.name

    selectRoaster.appendChild(option)
}

function createCoffee() {

    const coffee = {
        name: coffeeName().value,
        notes: coffeeNotes().value,
        roast: coffeeRoast().value,
        roaster_id: selectRoaster.value
    }

    coffeeName.value = '';
    coffeeNotes.value = '';
    coffeeRoast.value = '';

    fetch("http://localhost:3000/api/v1/coffees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(coffee)
    })
        .then(responseJSON => {
            return responseJSON.json()
        })
        .then(coffee => {
            if (coffee.errors) {
                throw new Error(coffee.errors.join(", "))
            } else {
                loadRoasters()
            }
        })
        .catch(alert)
}   
// _________________________________________________________


