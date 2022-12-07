const screen = {
   userContent: document.querySelector(".user_content"),
   renderUser(userData) {
      this.userContent.innerHTML = `<div class="info">
                           <div class="profile_info">
                           <img src="${userData.userAvatar ?? 'The user does have profile picture!'}" alt="" >
                              <div class="data">
                              <h1>${userData.username ?? 'User Not Found'}</h2>
                              <p>Name: ${userData.name ?? 'The user not has redisteres name!'}</p>
                                 <p>Following =  ${userData.following}</p>
                                 <p>Followers = ${userData.followers}</p>
                                 <p>Bio: ${userData.bio ?? 'The user has no bio'} </p>
                              </div>
                           </div>
                        </div>
                        `
         let repositoriesItem = ''
            userData.repositories.forEach(repo => {
            repositoriesItem += `<a href="${repo.html_url}" target="_blank"><li>${repo.name}</li></a>`
         })

      if(userData.repositories.length > 0) {
         document.querySelector(".info").innerHTML += `<h2 class="repositories_title">Repositories</h2>
                                       <div class="repositories">
                                          <ul>${repositoriesItem}</ul>
                                       </div>`
      }
   },
   renderNotFound() {
      this.userContent.innerHTML = "<h3 class='notfound'>Usuario não encontrado...</h3>";
   },
   renderUserEvents(userData) {
      console.log(userData)
      let eventList = ''
      let eventOnwer = [];
      userData.userEvents.forEach(events => {
         if(events.type === 'WatchEvent' || events.type === 'PushEvent')
            eventList += `<li>${events.repo.name} - <a href="${events.repo.url}" target="_blank">GitHub Api </a></li>`

            eventOnwer.push(events.repo.url)
      })
      document.querySelector(".info").innerHTML += `<div class="userEvents">
                                                      <h2>Events</h2>
                                                         <ul>${eventList}</ul>
                                                   </div>`
      return { eventOnwer };
   },
}

export { screen };