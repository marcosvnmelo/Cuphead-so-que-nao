// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Cuphead from '../Actor/Cuphead/Cuphead';
import { DIRECTIONS } from '../Actor/DIRECTION';
import KeyboardController from '../KeyBoardController';

const { ccclass, property } = cc._decorator;

@ccclass
export default class InGameKeyboardController extends KeyboardController {
  private cuphead: Cuphead;

  private movePressedButtons: boolean[] = [];

  start() {
    this.cuphead = this.node.parent.getComponent(Cuphead);
  }

  public onKeyDown(event: cc.Event.EventKeyboard) {
    switch (event.keyCode) {
      case cc.macro.KEY.space:
        this.cuphead.jump();
        break;
      case cc.macro.KEY.a || cc.macro.KEY.left:
        this.movePressedButtons['LEFT'] = true;
        break;
      case cc.macro.KEY.d || cc.macro.KEY.right:
        this.movePressedButtons['RIGHT'] = true;
        break;
    }
  }

  public onKeyUp(event: cc.Event.EventKeyboard) {
    switch (event.keyCode) {
      case cc.macro.KEY.space:
        this.cuphead.jump();
        break;
      case cc.macro.KEY.a || cc.macro.KEY.left:
        delete this.movePressedButtons['LEFT'];
        break;
      case cc.macro.KEY.d || cc.macro.KEY.right:
        delete this.movePressedButtons['RIGHT'];
        break;
    }
  }

  public update(_dt: number) {
    if ('LEFT' in this.movePressedButtons) {
      this.cuphead.move(DIRECTIONS.LEFT);
    }

    if ('RIGHT' in this.movePressedButtons) {
      this.cuphead.move(DIRECTIONS.RIGHT);
    }
  }
}
