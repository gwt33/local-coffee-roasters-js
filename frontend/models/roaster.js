class Roaster {
    static all = []

    constructor(roasterData) {
        this.id = roasterData.id;
        this.name = roasterData.name;
        this.location = roasterData.location;
        this.coffees = roasterData.coffees.map(coffee => new Coffee(coffee));
        this.save()
    }

    save() {
        Roaster.all.push(this)
    }

    template() {
        const roasterVar = document.getElementById("roasters-index-ul")

        const newRoaster = 
            (`
            <ul>
                <li><strong>${this.name}</strong></li>
                    Location: ${this.location} 
                    <br><br>
                    <ul>
                    ${this.coffees.map(coffee => coffee.template()).join("")}
                    </ul> <br>
                    <br>
            </ul><br>
            `)
        roasterVar.innerHTML += newRoaster
    }
}
