const router = require("express").Router();
const store = require("../db/store.js");
router.get("/notes", (req, res) => {
  store.getNotes().then((notes) => res.json(notes));
});

router.post("/notes", (req, res) => {
  store
    .addNotes(req.body)
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
