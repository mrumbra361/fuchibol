radio.onReceivedString(function (receivedString) {
    if (receivedString == "adelante") {
        cuteBot.motors(100, 100)
    }
    if (receivedString == "derecha") {
        cuteBot.motors(70, 100)
    }
    if (receivedString == "izquierda") {
        cuteBot.motors(100, 70)
    }
})
basic.forever(function () {
    radio.setGroup(208)
})
