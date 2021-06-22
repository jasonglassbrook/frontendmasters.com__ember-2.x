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
      { id: "emberjs", name: "EmberJS" },
      { id: "facebook", name: "Facebook" },
      { id: "google", name: "Google" },
      { id: "jquery", name: "JQuery" },
      { id: "microsoft", name: "Microsoft" },
      { id: "netflix", name: "Netflix" },
    ];
  },
});
