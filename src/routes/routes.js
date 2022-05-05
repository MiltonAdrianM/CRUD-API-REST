const Library = require("../models/library");

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.send("Welcome");
  });

  app.get("/read", async (req, res) => {
    Library.getbooks((err, data) => {
      res.status(200).json(data);
    });
  });

  app.get("/read/single/:author", async (req, res) => {
    Library.getbook(req.params.author, (err, data) => {
      if (data) {
        res.json({
          success: true,
          msg: "Successfully query",
          data: data,
        });
      } else {
        res.status(500).json({
          success: false,
          msg: "Error to query book",
        });
      }
    });
  });

  app.post("/create", async (req, res) => {
    const bookData = {
      id: null,
      author: req.body.author,
      titulo: req.body.titulo,
      editorial: req.body.editorial,
      edicion: req.body.edicion,
      ISBN: req.body.ISBN,
    };

    Library.insertBook(bookData, (err, data) => {
      if (data && data.insertId) {
        res.json({
          success: true,
          msg: "book created!",
          data: data,
        });
      } else {
        res.status(500).json({
          success: false,
          msg: "Error to create book",
        });
      }
    });
  });

  app.put("/update/:id", async (req, res) => {
    const bookData = {
      id: req.params.id,
      author: req.body.author,
      titulo: req.body.titulo,
      editorial: req.body.editorial,
      edicion: req.body.edicion,
      ISBN: req.body.ISBN,
    };

    Library.updateBook(bookData, (err, data) => {
      if (data && data.msg) {
        res.json({
          success: true,
          msg: "Update book!",
          data: data,
        });
      } else {
        res.json({
          success: false,
          msg: "error to update book",
        });
        console.log("salio");
      }
    });
  });

  app.delete("/delete/:id", async (req, res) => {
    Library.deleteBook(req.params.id, (err, data) => {
      if ((data && data.msg == "deleted") || data.msg == "not exists") {
        res.json({
          success: true,
          data,
        });
      } else {
        res.status(500).json({
          msg: "error",
        });
      }
    });
  });
};
