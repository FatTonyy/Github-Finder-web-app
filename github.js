class Github {
  constructor() {
    this.client_id = "0c99e2daf967b786364d";
    this.client_secret = "c46ad20e056502229321c2c39e51a795487a930b";
    //? doing this so all their repos don't get shown but top 10
    this.repos_count = 10;
    this.repos_sort = "created: asc";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    //TODO this is for repo response
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos,
    };
  }
}
