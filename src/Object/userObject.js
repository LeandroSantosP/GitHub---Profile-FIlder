const user = {
   userAvatar: '',
   bio: '',
   name: '',
   followers: '',
   following: '',
   username: '',
   setInfo(userData){
      this.userAvatar = userData.avatar_url,
      this.bio = userData.bio,
      this.name = userData.name,
      this.username = userData.login,
      this.followers = userData.followers,
      this.following = userData.following
   },
   repositories: [],
   setRepositories(repositories){
      this.repositories = repositories
   },
   userEvents: [],
   setUserEvents(userEvents){
      this.userEvents = userEvents
   },
   forks: '',
   watchers: '',
   star_received: '',
   userEventsOnwer(repoDataOwner){
      this.forks = repoDataOwner.forks,
      this.watchers = repoDataOwner.watchers
   }
}


export { user};