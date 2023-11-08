import { LitElement } from "lit";

import { StoreController } from "@nanostores/lit";
import { Store } from "nanostores";
import { property } from "lit/decorators.js";

/**
 * @description StateComponent is basically LitElement with a state controller from nanostores
 */
export abstract class StateComponent<T> extends LitElement {
  @property()
  private stateController: StoreController<T>;

  constructor($state: Store<T>) {
    super();

    /* init state controller */
    this.stateController = new StoreController(this, $state);
  }

  protected getState() {
    return this.stateController.value;
  }
}