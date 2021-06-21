import Route from "@ember/routing/route";
import { inject } from "@ember/service";

export default Route.extend({
  favorites: inject(),

  actions: {
    handleClickedFavorite(org) {
      this.get("favorites").addItem(org);
    },
  },

  model() {
    return [
      { id: "emberjs", displayName: "EmberJS" },
      { id: "facebook", displayName: "Facebook" },
      { id: "google", displayName: "Google" },
      { id: "jquery", displayName: "JQuery" },
      { id: "microsoft", displayName: "Microsoft" },
      { id: "netflix", displayName: "Netflix" },
    ];
  },
});
