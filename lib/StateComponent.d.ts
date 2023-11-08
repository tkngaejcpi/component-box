import { LitElement } from 'lit';

import { Store } from 'nanostores';

/**
 * @description StateComponent is basically LitElement with a state controller from nanostores
 */
export declare abstract class StateComponent<T> extends LitElement {
  private stateController;
  constructor($state: Store<T>);
  protected getState(): T;
}
