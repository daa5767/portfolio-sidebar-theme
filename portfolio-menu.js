/**
 * Copyright 2025 daa5767
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-sidebar-theme`
 *
 * @demo index.html
 * @element portfolio-sidebar-theme
 */
export class PortfolioMenu extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "portfolio-menu";
  }

  constructor() {
    super();
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: flex;
          height: 100vh;
          overflow: hidden;
        }
        .content {
          display: flex;
          flex-direction: column;
          background-color: var(--ddd-theme-default-pughBlue);
          position: fixed;
          justify-content: center;

          align-items: center;
          height: 100vh;
          width: 15%;
          color: white;
        }
        .
      
      `,
    ];
  }

  // Lit render the HTML

  render() {
    return html`
      <div class="content" id="scroll-container">
        <slot></slot>
      </div>
    `;
  }
}

globalThis.customElements.define(PortfolioMenu.tag, PortfolioMenu);
