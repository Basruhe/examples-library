// Simple user object with several keys and methods; to practice OOP

// implementing the user class
class User {
  constructor(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastNamene = lastName;
    this.email = email;
    this.password = password;
    this.posts = [];
  }

  authenticate(email, password) {
    if (email === this.email && password === this.password) {
      return true;
    } else {
      return false;
    }
  }

  post(title) {
    if (!title) {
      return console.log("please provide a title to post");
    } else {
      this.posts.push({ id: this.posts.length + 1, title: title });
    }
  }

  getPosts() {
    return this.posts;
  }
}

const user = new User("Bas", "R", "me@me.com", "mypass");

console.log(user); // console.log what user is

const authAttempt1 = user.authenticate("me@me.com", "me@me.com"); // returns false
const authAttempt2 = user.authenticate("me@me.com", "me@me.com"); // returns true

console.log(authAttempt1, authAttempt2);

user.post(); // no post is created
user.post("My introduction");
user.post("Request");

console.log(user.posts[1]);
const myPosts = user.getPosts(); // array of all posts

console.log(myPosts);

const newMe = new User("person2", "person2surname", "x@y.z", "anotherpass");

console.log(newMe);
