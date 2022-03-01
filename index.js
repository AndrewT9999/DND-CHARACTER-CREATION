const express = require("express")
const ejs = require("ejs")
const path = require("path")
const bp = require("body-parser")
const router = require("./routers/router.js")
const cp = require("cookie-parser")
const app = express()
app.engine("html", ejs.renderFile)
app.set("engine", "html")
app.set("views", path.join(__dirname + "/views/"))
app.use("/assets/css", express.static(path.join(__dirname + "/css")))
app.use("/assets/scripts", express.static(path.join(__dirname + "/scripts")))
app.use(bp.urlencoded({ extended: false }))

// GET Routes \\
app.get("/", router.GET.Home)
app.get("/create", router.GET.Create)

// POST Routes \\
app.post("/creation", router.POST.Create)


app.listen(8080, () => {
  console.log("Website is ready")
  
})