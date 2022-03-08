import ChildComp from "./ChildComp.js";

Vue.createApp({
  data() {
    return {
      url: "http://abc.com",
      showBook: true,
      books: [
        {
          title: "The Final Empire",
          author: "Brandon Williams",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "Name of the Wind",
          author: "Patrick Swayne",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "A song of fire and ice",
          author: "George RR Martin",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleShowBooks() {
      this.showBook = !this.showBook;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filterBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
  components: {
    ChildComp,
  },
}).mount("#app");
