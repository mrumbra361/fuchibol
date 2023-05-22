radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == "adelante") {
        cuteBot.motors(60, 60)
    }
    if (receivedNumber == "derecha") {
        cuteBot.motors(10, 40)
    }
    if (receivedNumber == "izquierda") {
        cuteBot.motors(40, 10)
    }
})
basic.forever(function () {
    radio.setGroup(208)
})
