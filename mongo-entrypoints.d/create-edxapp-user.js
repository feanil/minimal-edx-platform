db.createUser(
  {
    user: "edxapp",
    pwd:  "password",   // cleartext dev password, change if you're gonna use this for production.
    roles: [
	     { role: "readWrite", db: "edxapp" },
           ]
  }
)

