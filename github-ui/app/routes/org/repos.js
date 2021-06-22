import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return [
      { id: "repo-a", name: "Repo A" },
      { id: "repo-b", name: "Repo B" },
      { id: "repo-c", name: "Repo C" },
    ];
  },
});
