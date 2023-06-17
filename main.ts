controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (SUJETO.vy == 0) {
        SUJETO.vy = -150
    }
})
let SUJETO: Sprite = null
SUJETO = sprites.create(assets.image`SUJETO`, SpriteKind.Player)
scene.setBackgroundColor(1)
info.setScore(0)
controller.moveSprite(SUJETO)
tiles.setCurrentTilemap(tilemap`nivel1 acuatico`)
scene.cameraFollowSprite(SUJETO)
game.onUpdate(function () {
    SUJETO.ay = 300
})
