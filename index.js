const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");



const questions = [
  
];

function writeToFile(fileName, data) {
 
}

function init() {
console.log("hello")
}
init();

inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(res) {
      const user =  {
          avatar_url: res.data.avatar_url,
          login: res.data.login,
          bio: res.data.bio,
          public_repos: res.data.public_repos,
          followers: res.data.followers,
          following: res.data.following,

        
      };
      console.log(user.avatar_url)
      console.log(user.login)
      console.log(user.bio)
      console.log(user.public_repos)
      console.log(user.followers)
      console.log(user.following)
      const repoNamesStr = repoNames.join("\n");

      fs.writeFile("repos.txt", repoNamesStr, function(err) {
        if (err) {
          throw err;
        }

        console.log(`Saved ${repoNames.length} repos`);
      });
    });
  });
