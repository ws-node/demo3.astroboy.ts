import { UpgradeServer } from "demo2.astroboy.ts";

UpgradeServer.Create().run({
  onStart: () => console.log("hello world demo3!"),
  onError: () => console.log("fuck it demo3!")
});
