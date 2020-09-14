const express = require("express")

const projectModel = require("../helpers/projectModel")
const { get } = require("../../server")

const router = express.Router();


//Create
router.post("/", (req,res) => {
    const projectInfo = req.body
    projectModel
    .insert(projectInfo)
    .then(() => {
        res.status(200).json({message:"Success"})
    }).catch(error => {
res.status(500).json({error:"error! could not add project"})
    })
})

//Read
router.get("/", (req,res) => {
    projectModel
    .get(req.params.id)
    .then((e) => {
        res.status(200).json(e)
    }) .catch(error => {
        res.status(500).json({message:"no <3"})
    });
});

//Update
router.put("/:id", (req,res) => {
    const projectInfo = req.body;
    projectModel
    .update(req.params.id, projectInfo)
    .then(e => {
        if(e) {
            res.status(200).json({message:"successful update"})
        } else {
            res.status(404).json({message:"The project could not be found"})
        }
    })
})


//Delete
router.delete("/:id", (req,res) => {
   projectModel
    .remove(req.params.id)
    .then(e => {
        if(e > 0) {
            res.status(200).json({message:"The project has been deleted"})
        } else {
            res.status(404).json({message:"The project could not be found"})
        }
    }).catch(error => {
        console.log(error);
        res.status(500).json({message:"Error deleting project"})
    })
})

router.get("/:id/actions", (req,res) => {
    projectModel
    .getProjectActions(req.params.id)
    .then(e => {
        res.status(200).json(e)
    }) .catch(error => {
        console.log(error)
        res.status(500).json({message:"no"})
    })
})

router.get("/:id", (req, res) => {
    projectModel
    .get(req.id)
    .then((e) => {
        res.status(200).json(e)
    })
    .catch(error => {
        res.status(500).json({message:"Error retrieving shows"})
    });
});



module.exports = router