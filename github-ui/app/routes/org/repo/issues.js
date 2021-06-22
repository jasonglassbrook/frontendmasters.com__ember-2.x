import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return [
      { id: "issue-a", name: "Issue A" },
      { id: "issue-b", name: "Issue B" },
      { id: "issue-c", name: "Issue C" },
    ];
  },
});
