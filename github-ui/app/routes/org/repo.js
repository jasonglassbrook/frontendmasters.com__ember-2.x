import Route from "@ember/routing/route";
import { get } from "@ember/object";
import api from "github-ui/helpers/github-api";

export default Route.extend({
  model(params) {
    const orgId = get(this.modelFor("org"), "id");
    const repoId = params.repo;
    const repoApiUri = api.org(orgId).repo(repoId).index;

    return $.get(repoApiUri).then((repo) => {
      // Backup GitHub's internal numeric ID.
      repo.github_id = repo.id;
      // Use my ID instead.
      repo.id = repoId;

      return repo;
    });
  },
});
