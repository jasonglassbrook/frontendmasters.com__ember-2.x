import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route("home");
  this.route("orgs");
  this.route("org", { path: "org/:org" }, function () {
    this.route("repos");
    this.route("repo", { path: "repo/:repo" }, function () {
      this.route("contributors");
      this.route("issues");
    });
  });
  this.route("not-found", {  path: "*path"  });
});

export default Router;
