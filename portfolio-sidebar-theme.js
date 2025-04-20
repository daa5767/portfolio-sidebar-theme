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
export class PortfolioSidebarTheme extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "portfolio-sidebar-theme";
  }

  constructor() {
    super();
    this.sections = [
      { name: "about", title: "About" },
      { name: "projects", title: "Projects" },
      { name: "skills", title: "Skills" },
      { name: "experience", title: "Experience" },
      { name: "contact", title: "Contact" },
    ];
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
        .sidebar {
          width: 200px;
          background-color: var(--ddd-theme-primary);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 1rem;
          gap: 1rem;
          z-index: 1;
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        h3 span {
          font-size: var(
            --portfolio-sidebar-theme-label-font-size,
            var(--ddd-font-size-s)
          );
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <div class="wrapper">
      <h3><span>${this.t.title}:</span> ${this.title}</h3>
      <slot></slot>
    </div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(
  PortfolioSidebarTheme.tag,
  PortfolioSidebarTheme
);
