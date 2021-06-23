import Route from "@ember/routing/route";
import { get } from "@ember/object";
import api from "github-ui/helpers/github-api";

export default Route.extend({
  model() {
    const orgId = get(this.modelFor("org"), "id");
    const orgReposApiUri = api.org(orgId).repos;

    return $.get(orgReposApiUri).then((orgRepos) => {
      // We gotta edit each repo's data...
      return orgRepos.map((repo) => {
        // Backup GitHub's internal numeric ID.
        repo.github_id = repo.id;
        // Use my ID instead.
        repo.id = repo.name;

        return repo;
      });
    });
  },
});
