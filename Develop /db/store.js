const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const uuidv1 = require("uuidv1");

class Store {
  read() {
    return readFile("db/db.json", "utf8");
  }
  write(notes) {
    return writeFile("db/db.json", JSON.stringify(notes));
  }

  addNotes(notes) {
    const { title, text } = notes;
    if (!title || !text) {
      throw new Error("Notes require a title and text.");
    }
    const newNote = { title, text, id: uuidv1() };
    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
  }

  getNotes() {
    return this.read().then((notes) => {
      let createdNotes;
      try {
        createdNotes = [].concat(JSON.parse(notes));
      } catch (error) {
        createdNotes = [];
      }
      return createdNotes;
    });
  }
}

module.exports = new Store();
