import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      { id: "repo-a", displayName: "Repo A" },
      { id: "repo-b", displayName: "Repo B" },
      { id: "repo-c", displayName: "Repo C" },
    ];
  },
});
