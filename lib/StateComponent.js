import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import { StoreController } from '@nanostores/lit';

var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };

/**
 * @description StateComponent is basically LitElement with a state controller from nanostores
 */
export class StateComponent extends LitElement {
  constructor($state) {
    super();
    /* init state controller */
    this.stateController = new StoreController(this, $state);
  }
  getState() {
    return this.stateController.value;
  }
}
__decorate([property()], StateComponent.prototype, 'stateController', void 0);
