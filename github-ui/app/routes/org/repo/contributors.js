import Route from "@ember/routing/route";
import { get } from "@ember/object";

import api from "github-ui/helpers/github-api";

export default Route.extend({
  model() {
    const orgId = get(this.modelFor("org"), "id");
    const repoId = get(this.modelFor("org.repo"), "id");
    const repoContributorsApiUri = api.org(orgId).repo(repoId).contributors;

    return $.get(repoContributorsApiUri);
  },
});
