const Activity = require("../models/Activity.models");


class ActivityContoller {

    getAll(req, res) {
        Activity.find({}).sort("-date").exec()
            .then( activities => res.json(activities) )
            .catch( err => res.json(err) );
    }

    getOne(req, res) {
        Activity.findOne({_id: req.params._id})
            .then( activity => res.json(activity) )
            .catch( err => res.json(err) );
    }

    create(req, res) {
        const newActivity = new Activity(req.body);
        newActivity.save()
            .then( () => res.json({msg: "ok"}) )
            .catch( err => res.json(err) );
    }

    update(req, res) {
        Activity.findOneAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
            .then( () => res.json({msg: "ok"}) )
            .catch( err => res.json(err) );
    }

    delete(req, res) {
        Activity.findOneAndDelete({_id: req.params._id})
            .then( () => res.json({msg: "ok"}) )
            .catch( err => res.json(err) );
    }

}

module.exports = new ActivityContoller();