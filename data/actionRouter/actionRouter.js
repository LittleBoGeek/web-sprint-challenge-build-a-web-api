const express = require("express")

const actionModel = require("../helpers/actionModel")

const router = express.Router();

//create
router.post("/", (req,res) => {
    const actionInfo = req.body;
    actionModel
    .insert(actionInfo)
    .then(() => {
        res.status(201).json({message:"success"})
    }) .catch(error => {
       
        res.status(500).json({message:"error"})
    })
})

//read

router.get("/", (req,res) => {
    actionModel
    .get(req.params.id)
    .then(e => {
        res.status(200).json(e)
    }) .catch(error => {
res.status(500).json({message:"There was an error"})
    }) 
})

//update 

router.put("/:id", (req,res) => {
    const actionInfo = req.body;
    actionModel
    .update(req.params.id, actionInfo)
    .then(e => {
        if(e) {
            res.status(200).json({message:"The action was updated successfully"})
        } else {
            res.status(404).json({message:"no <3"})
        }
    }).catch(error => {
        res.status(500).json({error:"There was an error updating the action"})
    })
})

router.delete("/:id", (req,res) => {
    actionModel
    .remove(req.params.id)
    .then(e => {
        if(e > 0) {
            res.status(200).json({message:"Action deleted"})
        } else {
            res.status(404).json({message:"Action could not be found"})
        }
    }) .catch(error => {
        res.status(500).json({message:"character could not be deleted"})
    })
})

module.exports = router