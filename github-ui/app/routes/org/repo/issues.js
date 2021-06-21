import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return [
      { id: "issue-a", displayName: "Issue A" },
      { id: "issue-b", displayName: "Issue B" },
      { id: "issue-c", displayName: "Issue C" },
    ];
  },
});
