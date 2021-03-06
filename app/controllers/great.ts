import { Controller, GET, RenderResult, Render } from "@exoskeleton/core";
import { TestService, MixinService } from "demo2.astroboy.ts";
import X0c1Service from "./../services/x0c1";

@Controller("great")
class GreatController {
  constructor(
    private render: Render,
    private mixin: MixinService,
    private x0c1: X0c1Service,
    private test: TestService
  ) {}

  @GET("")
  public indexMethod() {
    this.render.setView("viewNum", this.test.showValue());
    this.render.setView("mixinNum", this.mixin.stamp);
    return new RenderResult({
      // root: "/sbx",
      path: "great.njk",
      engine: "nunjunks"
      // path: "great2.ejs",
      // engine: "ejs"
    });
  }
}

export = GreatController;
