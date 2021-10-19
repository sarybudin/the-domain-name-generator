console.log("hello world");

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];

for (let i = 0; i < pronoun.length; i++) {
  for (let u = 0; u < adj.length; u++) {
    for (let e = 0; e < adj.length; e++) {
      console.log(pronoun[i] + adj[u] + noun[e] + ".com");
    }
  }
}
