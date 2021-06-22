import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return [
      { id: "contributor-a", name: "Contributor A" },
      { id: "contributor-b", name: "Contributor B" },
      { id: "contributor-c", name: "Contributor C" },
    ];
  },
});
