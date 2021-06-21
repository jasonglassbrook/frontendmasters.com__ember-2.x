import Route from '@ember/routing/route';

export default Route.extend({
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
