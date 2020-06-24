// init gitub
const github = new Github

// init ui
const ui = new UI;
// Search Input
const searchUser = document.getElementById('searchUser');

// add eventlistener to searchUser
searchUser.addEventListener('keyup', (e) => {
    // input text
    const user = e.target.value;
    // console.log(user);
    if (user !== '') {
        // Make a http call
        github.getUsers(user)
            .then(data => {
                if (data.profile.message === 'Not Found') {

                    // ui.clearAlert();
                    // show alert
                    ui.showAlert('User not found', 'red');
                } else {
                    // show profile
                    // console.log(data.profile);
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // clear profile
        ui.clearProfile();
    }
});