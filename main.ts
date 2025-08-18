input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, 45)
})
let skift = 0
pins.servoWritePin(AnalogPin.P1, 1)
