class Github {
    constructor() {
        this.client_id = '7346f833973b0cf97c09';
        this.client_secret = '9676ffc009116dfe68395afaf66fafa5e572647f';
        this.repos_count = 5;
        this.report_sort = 'created: asc';
    }

    async getUsers(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }

    }
}