class Coffee {
    constructor(coffeeData) {
        this.name = coffeeData.name;
        this.notes = coffeeData.notes;
        this.roast = coffeeData.roast;
        this.roaster_id = coffeeData.roaster_id;
    }

    template() {
        return `<ul>
                <li>
                    <strong>${this.name}</strong>
                    <ul>
                        <i>${this.roast} roast</i>
                    </ul>
                    <ul>
                        <i>${this.notes}</i>
                    </ul>
                </li>
            </ul>`
        
    }

}

// `<ul>
// <h5>Coffees</h5>
// <li>Name: ${this.name}
//     Notes: ${this.notes}
//     Roast: ${this.roast}
//      <br>
// </li>
// </ul>`
