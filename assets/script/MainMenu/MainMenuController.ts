// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import KeyboardController from '../KeyBoardController';

const { ccclass, property } = cc._decorator;

@ccclass
export default class MainMenuController extends KeyboardController {
  private _selectedOption = 0;
  private optionNodesList: cc.Node[] = [];

  private get selectedOption() {
    return this._selectedOption;
  }

  private set selectedOption(value: number) {
    this._selectedOption = this._selectedOption = cc.misc.clampf(value, 0, 2);

    this.setUpOptions();
  }

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    super.onLoad();
    this.optionNodesList = cc.find('Canvas/MenuOptions').children;
    this.setUpOptions();
  }

  start() {}

  // update (dt) {}

  onKeyDown(event: cc.Event.EventKeyboard): void {
    switch (event.keyCode) {
      case cc.macro.KEY.w:
      case cc.macro.KEY.up:
        this.selectedOption--;
        break;

      case cc.macro.KEY.s:
      case cc.macro.KEY.down:
        this.selectedOption++;
        break;

      case cc.macro.KEY.enter:
        this.selectOption();
        break;
    }
  }

  onKeyUp(event: cc.Event.EventKeyboard): void {}

  private setUpOptions() {
    this.optionNodesList.forEach((labelNode) => {
      labelNode.opacity = 120;
    });

    this.optionNodesList[this.selectedOption].opacity = 255;
  }

  private selectOption() {
    switch (this.optionNodesList[this.selectedOption].name) {
      case 'Start':
        cc.director.loadScene('Main');
        break;

      case 'Options':
        console.log('Options');
        break;

      case 'Exit':
        cc.game.end();
    }
  }
}
