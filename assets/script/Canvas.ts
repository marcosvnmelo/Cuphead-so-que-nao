// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import InGameKeyboardController from './Cuphead/InGameKeyboardController';

const { ccclass, property } = cc._decorator;

@ccclass
export default class Canvas extends cc.Component {
  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {}

  // update (dt) {}

  enableCupheadControls() {
    this.node.getChildByName('Cuphead').getComponent(cc.Animation).play();
    this.node
      .getChildByName('Cuphead')
      .addChild(new cc.Node(), 1, 'InGameKeyboardController');
    this.node
      .getChildByName('Cuphead')
      .getChildByName('InGameKeyboardController')
      .addComponent(InGameKeyboardController);
  }
}
