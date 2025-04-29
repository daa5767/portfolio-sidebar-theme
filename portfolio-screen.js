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
      { title: "Who I am" },
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
        :host {
          display: flex;
          height: 100vh;
        }

        ::slotted(img) {
          width: 300px;
          float: right;
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
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          padding: 2rem;
        }
        .intro-content {
          flex: 1;
          max-width: 600px;
        }
        .profile-photo {
          width: 300px;
          border-radius: 10px;
          flex-shrink: 0;
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
