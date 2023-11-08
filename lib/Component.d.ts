import { LitElement } from 'lit';

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
/**
 * @description a re-export of LitElement
 */
export declare const Component: typeof LitElement;
/**
 * @param cp component pair
 * @description register the component globally with customElements
 */
export declare const registerComponent: (cp: ComponentPair) => void;
/**
 * @param cps list of component pair
 * @description register the components globally with customElements
 */
export declare const registerComponents: (cps: ComponentPair[]) => void;
/**
 * @description empty theme
 */
export declare const emptyTheme: EmptyTheme;
/**
 * @param cp component pair
 * @param theme raw string of css
 *
 * @description inject a style to body for the component
 */
export declare const injectTheme: (cp: ComponentPair, theme: Theme) => void;
