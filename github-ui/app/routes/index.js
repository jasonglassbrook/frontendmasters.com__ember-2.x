import Route from "@ember/routing/route";

export default Route.extend({
  beforeModel(...args) {
    this._super(...args);
    this.replaceWith("orgs");
  },
});
