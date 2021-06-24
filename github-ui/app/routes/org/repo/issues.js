import Route from "@ember/routing/route";
import { get } from "@ember/object";

import api from "github-ui/helpers/github-api";
import { injectDatetimeRecord } from "github-ui/helpers/datetime";

export default Route.extend({
  model() {
    const orgId = get(this.modelFor("org"), "id");
    const repoId = get(this.modelFor("org.repo"), "id");
    const repoIssuesApiUri = api.org(orgId).repo(repoId).issues;

    return $.get(repoIssuesApiUri).then((repoIssues) => {
      // We gotta edit each repo's data...
      return repoIssues.map((issue) => {
        // Process "created at" and "updated at" strings for display.
        injectDatetimeRecord(issue, issue.created_at, "created_at__", "");
        injectDatetimeRecord(issue, issue.updated_at, "updated_at__", "");

        return issue;
      });
    });
  },
});
