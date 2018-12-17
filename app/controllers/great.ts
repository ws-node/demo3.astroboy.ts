import { Controller, Index, RenderResult, Render } from "astroboy.ts";
import { TestService } from "demo2.astroboy.ts";
import X0c1Service from "./../services/x0c1";

@Controller("great")
class GreatController {

  constructor(
    private render: Render,
    private x0c1: X0c1Service,
    private test: TestService) { }

  @Index([""])
  public imdexHtml() {
    this.render.setView("viewNum", this.test.showValue());
    return new RenderResult({
      // path: "great.njk",
      // engine: "nunjunks"
      path: "great2.ejs",
      engine: "ejs"
    });
  }

}

export = GreatController;