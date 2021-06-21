import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      { id: "contributor-a", displayName: "Contributor A" },
      { id: "contributor-b", displayName: "Contributor B" },
      { id: "contributor-c", displayName: "Contributor C" },
    ];
  },
});
