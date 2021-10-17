let gotAlert = document.cookie

if (gotAlert == "gotalert=true") {
  console.log("cool")
} else {
  alert("This site is based off of the Elgeis Minecraft server. If you don't know what that is then you should go to https://elgeis.com")
  document.cookie = "gotalert=true"
}
