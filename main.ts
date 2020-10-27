let I = 0
let j = 0
let index = 0
basic.forever(function () {
    basic.pause(100)
    basic.clearScreen()
    I = 4
    j += 0
    index = 0
    while (I >= -4) {
        for (let j = 0; j <= index; j++) {
            led.plot(I + j, j)
        }
        index = 1
        I += -1
        basic.pause(100)
    }
})
