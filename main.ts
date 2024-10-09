//% color="#6b32a8"
namespace fakeButtons {
    //% blockId=fakeButtons_pressButton
    //% block="press button $button"
    //% weight=100
    //% blockGap=8
    export function pressButton(button: ControllerButton) {
        control.raiseEvent(INTERNAL_KEY_DOWN, button);
    }

    //% blockId=fakeButtons_releaseButton
    //% block="release button $button"
    //% weight=90
    export function releaseButton(button: ControllerButton) {
        control.raiseEvent(INTERNAL_KEY_UP, button);
    }

    //% blockId=fakeButtons_pressMultiplayerButton
    //% block="press $player button $button"
    //% weight=80
    //% blockGap=8
    export function pressMultiplayerButton(player: controller.Controller, button: ControllerButton) {
        const start = (player.playerIndex - 1) * 7

        control.raiseEvent(INTERNAL_KEY_DOWN, button + start);
    }

    //% blockId=fakeButtons_releaseMultiplayerButton
    //% block="release $player button $button"
    //% weight=70
    export function releaseMultiplayerButton(player: controller.Controller, button: ControllerButton) {
        const start = (player.playerIndex - 1) * 7
        control.raiseEvent(INTERNAL_KEY_UP, button + start);
    }

    //% blockId=fakeButtons_pressMenu
    //% block="press menu"
    //% weight=60
    //% blockGap=8
    export function pressMenu() {
        control.raiseEvent(INTERNAL_KEY_DOWN, 7);
    }

    //% blockId=fakeButtons_releaseMenu
    //% block="release menu"
    //% weight=50
    export function releaseMenu() {
        control.raiseEvent(INTERNAL_KEY_UP, 7);
    }

    //% blockId=fakeButtons_setPlayerConnected
    //% block="set $player connected $connected"
    //% weight=40
    export function setPlayerConnected(player: controller.Controller, connected: boolean) {
        const MULTIPLAYER_PLAYER_JOINED_ID = 3241;
        const MULTIPLAYER_PLAYER_LEFT_ID = 3242;

        if (connected) {
            control.raiseEvent(MULTIPLAYER_PLAYER_JOINED_ID, player.playerIndex);
        }
        else {
            control.raiseEvent(MULTIPLAYER_PLAYER_LEFT_ID, player.playerIndex);
        }
    }
}