import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "@haxtheweb/scroll-button/scroll-button.js"

class PortfolioScreen extends DDDSuper(I18NMixin(LitElement))  {
  static properties = {
    title: { type: String },
    name: { type: String },
    color: { type: String },
    image: { type: String },
  };
  constructor() {
    super();
    this.sections = [
      { title: "Who Am I" },
      { title: "Resume" },
      { title: "Experience" },
      { title: "Contact" },
    ];
    this.image = "";
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
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
      `,
    ];
  }

  // Lit render the HTML

  render() {
    return html`
      <div class="content" > </div>
        <slot></slot>
      </div>
    `;
  }

static get tag() {
  return "portfolio-screen";
}
}
globalThis.customElements.define(PortfolioScreen.tag, PortfolioScreen);
