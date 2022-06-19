function solve() {
  class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }
    toString() {
      return `Post: ${this.title}\nContent: ${this.content}`;
    }
  }
  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = likes;
      this.dislikes = dislikes;
      this.comments = [];
    }
    addComment(comment) {
      this.comments.push(comment);
    }
    toString() {
      let result = super.toString();
      result += `\nRating: ${this.likes - this.dislikes}`;
      if (this.comments.length > 0) {
        result += "\nComments:";
        for (const comment of this.comments) {
          result += "\n * " + comment;
        }
      }
      return result;
    }
  }
  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);
      this.views = views;
    }
    view() {
      this.views++;
      return this;
    }
    toString() {
      return super.toString() + `\nViews: ${this.views}`;
    }
  }
  return { Post, SocialMediaPost, BlogPost };
}
const classes = solve();
let post = new classes.Post("Post", "Content");
console.log(post.toString());
let scm = new classes.BlogPost("TestTitle", "TestContent", 25);
scm.view().view().view();
console.log(scm.toString());
