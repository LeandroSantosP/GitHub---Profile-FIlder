import { getUserInfos, getRepositories, getLastsEvents, getEventsOnwer } from '../endPoint/getUserData.js'

import { user } from '../Object/userObject.js'
import { screen } from '../Object/screenRender.js'

document.querySelector("#btn_search").addEventListener("click", () => {
   const username = document.querySelector("#input_search").value
   if(username.length === 0) {
      alert("Prencha o Campo com o nome do usuario!")
      return;
   }
   getUserData(username);
   document.querySelector("#input_search").value = ''
})

document.querySelector("#input_search").addEventListener("keyup", (event) => {
   let userName = event.target.value
   const key = event.while || event.keyCode
   if(key === 13 && userName.length > 0) {
      getUserData(userName);
      event.target.value = ''
   } 
})

async function getUserData(username) {
   const userData = await getUserInfos(username);
   console.log(userData)
   if(userData.message == 'Not Found') {
      screen.renderNotFound();
      return;
   }
   user.setInfo(userData);
   //
   const userEvents = await getLastsEvents(username);
   user.setUserEvents(userEvents);
   //
   const repositorieData = await getRepositories(username);
   user.setRepositories(repositorieData);
   //

   /* Render */
   screen.renderUser(user);
   const { eventOnwer } = screen.renderUserEvents(user);

   /* Not Ready */
         eventOnwer.forEach(element => {
            async function EventsOnwer() {
               const repoDataOwner = await getEventsOnwer(element);
               user.userEventsOnwer(repoDataOwner);
            }
            EventsOnwer();
         });
         
   return;
}