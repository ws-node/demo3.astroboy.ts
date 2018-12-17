import { DemoBaseFramework } from "demo2.astroboy.ts";
import { Server } from "astroboy.ts";

Server.Create(DemoBaseFramework).run({
  onStart: () => console.log("hello world demo3!"),
  onError: () => console.log("fuck it demo3!")
});
