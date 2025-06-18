input.onButtonPressed(Button.A, function () {
    counter = counter + 1
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.InBackground)
    basic.showString("" + (counter))
})
input.onButtonPressed(Button.B, function () {
    counter = counter - 1
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpDown), music.PlaybackMode.InBackground)
    basic.showString("" + (counter))
})
let counter = 0
counter = 0
