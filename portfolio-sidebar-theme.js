/**
 * Copyright 2025 daa5767
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./portfolio-menu.js";

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
      { name: "who-i-am", title: "Who I am" },
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

        img {
          width: 300px;
        }

        a:visited,
        a:link {
          color: white;
          gap: 10px;
          padding: var(--ddd-spacing-8);
          margin: var(--ddd-spacing-2);
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
        .profile-photo {
          width: 200px;
          border-radius: 10px;
        }

        .who-i-am {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 2rem;
        }
        .intro-content {
          max-width: 600px;
        }
        .content {
          margin-left: 300px;
        }
      `,
    ];
  }

  // Lit render the HTML

  render() {
    return html`
      <portfolio-menu>
        ${this.sections.map((s) => html` <a href="#${s.name}">${s.title}</a> `)}
      </portfolio-menu>
      <div class="content" id="scroll-container">
        <slot></slot>
      </div>
    `;
  }
}

globalThis.customElements.define(
  PortfolioSidebarTheme.tag,
  PortfolioSidebarTheme
);
