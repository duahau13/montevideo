Vue.createApp({
  data() {
    return {
			showBook: true,
			books: [
				{title: 'The Final Empire', author: 'Brandon Williams'},
				{title: 'Name of the Wind', author: 'Patrick Swayne'},
				{title: 'A song of fire and ice', author: 'George RR Martin'}
			]
      
    }
  },
	methods: {
		changeTitle(title) {
			this.title = title
		},
		toggleShowBooks (){
			this.showBook = !this.showBook
		}
	}
}).mount('#app')