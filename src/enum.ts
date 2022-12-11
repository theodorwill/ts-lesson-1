enum Color {
    Red = "Red",
    Yellow = "Yellow",
    Green = "Green"
}

const trafficLight = (color: Color) => {
    switch (color) {
        case Color.Red:
            console.log('du måste stanna"')
            break;
        case Color.Yellow:
            console.log('Kör om du inte hinner stanna!')
            break;
        case Color.Green:
            console.log('kör så det ryker!')
            break;
    }
}