import { css, html } from "lit";
import { StateComponent } from "@lib/StateComponent";
import { $state, CounterState, increase } from "../states/counter";
import { ComponentPair, Theme } from "@lib/Component";

import theme from "./TestDefaultTheme.css?inline";

export const tag = "vvv-test" as const;

export class Test extends StateComponent<CounterState> {
  constructor() {
    super($state);
  }

  render() {
    return html` <button @click=${increase}>${this.getState().count}</button> `;
  }

  static styles = css`
    button {
      width: var(--button-width);
    }
  `;
}

export const pair: ComponentPair = {
  tag: tag,
  constructor: Test,
};

export const defaultTheme: Theme = theme;

declare global {
  interface HTMLElementTagNameMap {
    [tag]: Test;
  }
}
