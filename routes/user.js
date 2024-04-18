const router = require("express").Router();
const userController = require("../controllers/userController");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../middleware/verifyToken");


// UPADATE USER
router.put("/", verifyTokenAndAuthorization, userController.updateUser);

// DELETE USER

router.delete("/", verifyTokenAndAuthorization, userController.deleteUser);

// GET USER

router.get("/", verifyTokenAndAuthorization, userController.getUser);

// Add Skills
router.post("/skills", verifyTokenAndAuthorization, userController.addSkills);

// Get Skills
router.get("/skills", verifyTokenAndAuthorization, userController.getSkills);

router.delete("/skills/:id", verifyTokenAndAuthorization, userController.deleteSkill);

// GET ALL USER
router.get("/", verifyTokenAndAdmin, userController.getAllUsers);

// GET ALL AGENTS
router.get("/agents", userController.getAgents);

// POST AGENTS
router.post("/agents",verifyTokenAndAuthorization, userController.postAgent);


// UPDATE AGENTS
router.put("/agents",verifyTokenAndAuthorization, userController.updateAgent);

// GET SINGLE AGENTS
router.get("/agents/:uid", userController.getAgent);


module.exports = router