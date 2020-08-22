import { Injectable, RendererFactory2, Inject, Renderer2 } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  render: Renderer2;

  constructor(
    private renderFctry: RendererFactory2,
    @Inject(DOCUMENT) private doc: Document
  ) {
    this.render = renderFctry.createRenderer(null, null);
  }

  enableDarkMode() {
    this.render.addClass(this.doc.body, "dark-theme");
  }

  enableLightMode() {
    this.render.removeClass(this.doc.body, "dark-theme");
  }
}
