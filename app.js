//FIXME:
//*INIT GITHUB
const github = new Github();
//* INIT UI
const ui = new UI();

// TODO THIS IS OUR ENTRY POINT

//! Search Input
const searchUser = document.getElementById("searchUser");

//!Search Input Event Listener
searchUser.addEventListener("keyup", e => {
  // *Get Input Text
  const userText = e.target.value;

  if (userText !== "") {
    // ? Make HTTP Call
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        //!show Alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        //! show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //! clear Profile
    ui.clearProfile();
  }
});
