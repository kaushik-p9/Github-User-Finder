class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        // console.log(user);
        this.profile.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col s9">
                    <img class="card-img" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn large">View Profile</a>
                </div>
                    <div class="col s3 repos">
                        <li>User repos: ${user.public_repos}</li>
                        <li>User gists: ${user.public_gists}</li>
                        <li>Followers: ${user.followers}</li>
                        <li>Following: ${user.following}</li>
                        <li>Company: ${user.company}</li>
                        <li>Blog: ${user.blog}</li>
                        <li>Location: ${user.location}</li>
                        <li>Member since: ${user.created_at}</li>
                    </div>
                </div >

                <h3>Latest Repos</h3>
                <div id="repos"></div>

            </div >
      
            
        </div>
        `;
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    showAlert(message, className) {
        // create div
        const div = document.createElement('div');
        // add class
        div.className = className
        // add text
        div.appendChild(document.createTextNode(message));
        // get parent
        const container = document.querySelector('.container');
        // get card
        const row = document.querySelector('.row');
        // insert alert
        container.insertBefore(div, row);
        // set timeout
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        // console.log(document.querySelector('.container').firstElementChild.classList);
        if (document.querySelector('.container').firstElementChild.classList[0] === 'red') {

            document.querySelector('.red').remove();
        }
        // console.log(document.querySelector('.container').firstChild);

    }

    showRepos(repos) {
        let output = '';

        repos.forEach(element => {
            output += `
            <div class="card">
            <div class="row">
            <div class="col s12">
            <a href="${element.html_utl}" target="_blank">${element.name}</a>
            </div>
            <div class="col s12">
            <li>Stars: ${element.stargazers_count}</li>
            <li>Watchers: ${element.watchers}</li>
            <li>Forks: ${element.forks_count}</li>
            </div>
            </div>
            </div>
            `
        });

        document.getElementById('repos').innerHTML = output;
    }
}



