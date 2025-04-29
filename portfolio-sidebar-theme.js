/**
 * Copyright 2025 daa5767
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./portfolio-menu.js";
import "@haxtheweb/scroll-button/scroll-button.js"

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
      { title: "Who I am" },
      { title: "Resume" },
      { title: "Experience" },
      { title: "Contact" },
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
          overflow-x: hidden;
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
          height: 200px;
          object-fit: cover;
          border-radius: 50%;
          margin-bottom: 1em;
        }
       
        .content {
          margin-left: 300px;
        }
        scroll-button{
          position: fixed;
          right: 0;
          bottom: 0;
        }
        .description {
        text-align: center;
        padding-right: 40px;

      }
        html {
        scroll-behavior: smooth;
        }

      `,
    ];
  }

  // Lit render the HTML

  render() {
    return html`
      <portfolio-menu>
        ${this.sections.map((s) => {
          const id = s.title.toLowerCase().replace(/\s+/g, '-');
          return html`<a href="#${id}">${s.title}</a>`;
        })}
        <!-- <img src="./profile.jpg" alt="Photo of Daniela Alarcon" /> -->
      </portfolio-menu>
  
      <div class="content" id="scroll-container">
        <slot></slot>
        <scroll-button></scroll-button>
      </div>
      `;
  }}

   globalThis.customElements.define(
  PortfolioSidebarTheme.tag,
  PortfolioSidebarTheme
);  
