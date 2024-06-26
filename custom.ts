
/**
* 使用此文件来定义自定义函数和图形块。
* 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block="不知道"
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: blink a light
     * @param value describe value here, eg: 5
     */
    //% block="blink x $x y $y every time $time"
    export function foo2(x: number, y: number, time: number): void {
        let sprite =game.createSprite(x,y)
        sprite.setBlink(time)
        sprite.blink()
    }

    
    
}
