const unirest = require("unirest")
async function Create(req, res) {
  res.render("characterCreation")
  
}
async function Home(req, res) {
  res.render("Home")
}
module.exports = {
  Create,
  Home
}