const express = require("express");
const router = express.Router();

// http://localhost:3000/users
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Successful - GET",
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// http://localhost:3000/users/20
router.get("/:id", (req, res) => {
  res.status(200).json({
    message: "Successful - GET by ID",
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// http://localhost:3000/users
router.post("/", (req, res) => {
  const name = req.body.name;
  res.status(201).json({
    message: "Successful - POST",
    metadata: {
      name,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// http://localhost:3000/users/20
router.put("/:id", (req, res) => {
  res.status(200).json({
    message: "Successful - PUT by ID",
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// http://localhost:3000/users/20
router.delete("/:id", (req, res) => {
  res.status(200).json({
    message: "Successful - DELETE by ID",
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

module.exports = router;
