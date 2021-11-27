const express = require("express");
const model = require('../models/workouts')

const app = express.Router();

app 
    .get("/", (req, res, next)=>{
        model.GetAll()
        .then(exerciseName=>{
            res.send(exerciseName);
        })
        .catch(next);
    })
    .get("/:exerciseName_id", (req, res, next)=>{
        model.Get(req.params.exerciseName_id)
        .then(exerciseName=>{
            res.send(exerciseName);
        })
        .catch(next);
    })
    .post("/", (req, res, next)=>{
        model.Add(req.body)
        .then(exerciseName=>{
            res.status(201).send(exerciseName);
        })
        .catch(next);
    })
    .delete("/:id", (req, res, next)=>{
        model.Delete(req.params.id)
        .then(deleteexerciseName=>{
            res.send({deleted: deleteexerciseName});
        })
        .catch(next);
    })
    .post("/seed", (req, res, next)=>{
        model.Seed()
        .then(user=>{
            res.send("Created").status(201);
        })
        .catch(next)
    })

module.exports = app;