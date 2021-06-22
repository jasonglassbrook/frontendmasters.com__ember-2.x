import Route from "@ember/routing/route";
import api from "github-ui/helpers/github-api";

export default Route.extend({
  model(params) {
    const orgId = params.org;
    const orgApiUri = api.org(orgId).index;

    return $.get(orgApiUri).then((org) => {
      // Backup GitHub's internal numeric ID.
      org.github_id = org.id;
      // Use my ID instead.
      org.id = orgId;

      return org;
    });
  },
});
