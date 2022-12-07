const baseUrl = 'https://api.github.com/users'

async function getUserInfos(username) {
      const response = await fetch(`${baseUrl}/${username}`)
      return await response.json();
}

async function getRepositories(username) {
   try {
      const response = await fetch(`${baseUrl}/${username}/repos?per_page=12`);
      if(!response.ok) throw new Error("algo deu errado");   
      return await response.json();
   } catch  (err) {
      console.log(err.message);
   }
   
}

async function getLastsEvents(username) {
   try {
      const response = await fetch(`${baseUrl}/${username}/events?per_page=10`)
      if(!response.ok) throw new Error("algo deu errado")
      return await response.json();
   } catch (err) {
      console.log(err.message);
   }
}

async function getEventsOnwer(eventOnwer) {
   const response = await fetch(`${eventOnwer}`)
   return await response.json()
}

export { getUserInfos,  getRepositories, getLastsEvents, getEventsOnwer };