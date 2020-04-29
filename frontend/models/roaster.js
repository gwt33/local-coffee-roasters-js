class Roaster {
    static all = []

    constructor(roasterData) {
        this.id = roasterData.id;
        this.name = roasterData.name;
        this.location = roasterData.location;
        this.save()
    }


    save() {
        Roaster.all.push(this)
    }

    template() {
        const roasterVar = document.getElementById("roasters-index-ul")

        const newRoaster = `

            <ul>
                <li><strong>${this.name}</strong></li>
                    Location: ${this.location} <br>
                    <br>
            </ul><br>`

        roasterVar.innerHTML += newRoaster
    }
}

                        // <ul>
                        //     <li>Coffees: ${this.coffees}</li>
                        // </ul>
