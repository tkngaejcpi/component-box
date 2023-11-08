import { LitElement } from 'lit';

/* types */

/**
 * @description the html tag name of the component
 */
export type ComponentTag = `${string}-${string}`;

/**
 * @description a web component class, alias of the constructor of LitElement
 */
export type ComponentConstructor = new (...args: any[]) => LitElement;

/**
 * @description an adhoc container type to store ComponentTag and Component
 */
export type ComponentPair = {
  tag: ComponentTag;
  constructor: ComponentConstructor;
};

export type Theme = string;
export type EmptyTheme = '';

/* utils */

/**
 * @param cp component pair
 * @description register the component globally with customElements
 */
export const registerComponent = (cp: ComponentPair): void => {
  if (!customElements.get(cp.tag)) {
    customElements.define(cp.tag, cp.constructor);
    console.info(`custom element ${cp.tag} is defined now!`);
  } else {
    console.info(`${cp.tag} was defined before, fail to define it.`);
  }
};

/**
 * @param cps list of component pair
 * @description register the components globally with customElements
 */
export const registerComponents = (cps: ComponentPair[]): void => {
  cps.forEach((cp) => registerComponent(cp));
};

/**
 * @description empty theme
 */
export const emptyTheme: EmptyTheme = '';

const ensureGetThemeNode = (tag: string): HTMLStyleElement => {
  const currentThemeNode = document.getElementById(
    `-component-box-${tag}-theme`,
  );

  if (currentThemeNode && currentThemeNode.tagName == 'style') {
    return currentThemeNode as HTMLStyleElement;
  }

  const newThemeNode = document.createElement('style');
  document.getElementsByTagName('body')[0]!.appendChild(newThemeNode);

  return newThemeNode;
};

/**
 * @param cp component pair
 * @param theme raw string of css
 *
 * @description inject a style to body for the component
 */
export const injectTheme = (cp: ComponentPair, theme: Theme): void => {
  const themeNode = ensureGetThemeNode(cp.tag);
  themeNode.innerHTML = theme;
};
