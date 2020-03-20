const Activities = require("../controllers/Activities.controller");
const Users = require("../controllers/Users.controller");
const { authenticate } = require("../config/jwt");


module.exports = app => {

    app.post("/api/register", Users.register);
    app.post("/api/login", Users.login);

    app.get("/api/activities", authenticate, Activities.getAll);
    app.get("/api/activities/:_id", authenticate, Activities.getOne);
    app.post("/api/activities", authenticate, Activities.create);
    app.put("/api/activities/:_id", authenticate, Activities.update);
    app.delete("/api/activities/:_id", authenticate, Activities.delete);

}