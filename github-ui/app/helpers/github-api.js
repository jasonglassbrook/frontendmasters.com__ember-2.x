const baseUri = "https://api.github.com";
const baseOrgsUri = `${baseUri}/orgs`;
const baseReposUri = `${baseUri}/repos`;

export default {
  org: (orgId) => {
    const orgUri = `${baseOrgsUri}/${orgId}`;
    return {
      index: orgUri,
      repos: `${orgUri}/repos`,
      repo: (repoId) => {
        const repoUri = `${baseReposUri}/${orgId}/${repoId}`;
        return {
          index: repoUri,
          issues: `${repoUri}/issues`,
          contributors: `${repoUri}/contributors`,
        };
      },
    };
  },
};
