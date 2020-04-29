class Coffee {
    constructor(coffeeData) {
        this.name = coffeeData.name;
        this.notes = coffeeData.notes;
        this.roast = coffeeData.roast;
        this.roaster = coffeeData.roaster;
    }

    template() {
        return `<ul>
        <h5>Coffees</h5>
            <li>Name: ${this.name}
                Notes: ${this.notes}
                <br>
                Roast: ${this.roaster}
            </li>
        </ul>`
    }

}