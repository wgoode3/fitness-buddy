const Activities = require("../controllers/Activities.controller");


module.exports = app => {

    app.get("/api/activities", Activities.getAll);
    app.get("/api/activities/:_id", Activities.getOne);
    app.post("/api/activities", Activities.create);
    app.put("/api/activities/:_id", Activities.update);
    app.delete("/api/activities/:_id", Activities.delete);

}