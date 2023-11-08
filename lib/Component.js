import { LitElement } from 'lit';

/* utils */
/**
 * @description a re-export of LitElement
 */
export const Component = LitElement;
/**
 * @param cp component pair
 * @description register the component globally with customElements
 */
export const registerComponent = (cp) => {
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
export const registerComponents = (cps) => {
  cps.forEach((cp) => registerComponent(cp));
};
/**
 * @description empty theme
 */
export const emptyTheme = '';
const ensureGetThemeNode = (tag) => {
  const currentThemeNode = document.getElementById(
    `-component-box-${tag}-theme`,
  );
  if (currentThemeNode && currentThemeNode.tagName == 'style') {
    return currentThemeNode;
  }
  const newThemeNode = document.createElement('style');
  document.getElementsByTagName('body')[0].appendChild(newThemeNode);
  return newThemeNode;
};
/**
 * @param cp component pair
 * @param theme raw string of css
 *
 * @description inject a style to body for the component
 */
export const injectTheme = (cp, theme) => {
  const themeNode = ensureGetThemeNode(cp.tag);
  themeNode.innerHTML = theme;
};
