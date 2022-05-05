const mysql = require("mysql");
const Routes = require("../routes/routes");

//conexion a MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "adrian123",
  database: "crudBook",
});

//Se crea un objeto para almacenar e interactuar con la DB
let bookModel = {};

//consulta a DB
bookModel.getbooks = (callback) => {
  //Se valida que se este conectado
  if (connection) {
    connection.query("SELECT * FROM books ORDER BY id", (err, rows) => {
      if (err) {
        throw err;
      } else {
        callback(null, rows);
      }
    });
  }
};

//Realizar busqueda por author
bookModel.getbook = (bookData, callback) => {
  if (connection) {
    const adr = bookData;
    const sql = "SELECT * FROM books WHERE author = ?";
    //enviar la consult a la db
    connection.query(sql, [adr], (err, rows) => {
      if (err) {
        throw err;
      } else {
        callback(null, rows);
      }
    });
  }
};

// Crear o insertar un nuevo libro, si es exitoso me trae el Id del libro creado.
bookModel.insertBook = (bookData, callback) => {
  if (connection) {
    connection.query("INSERT INTO books SET ?", bookData, (err, result) => {
      if (err) {
        throw err;
      } else {
        callback(null, { insertId: result.insertId });
      }
    });
  }
};

// Actualiza libro
bookModel.updateBook = (bookData, callback) => {
  if (connection) {
    const sql = `
      UPDATE books SET
      author = ${connection.escape(bookData.author)},
      titulo = ${connection.escape(bookData.titulo)},
      editorial = ${connection.escape(bookData.editorial)},
      edicion = ${connection.escape(bookData.edicion)},
      ISBN = ${connection.escape(bookData.ISBN)}
      WHERE id = ${bookData.id}`;

    connection.query(sql, (err, result) => {
      if (err) {
        throw err;
      } else {
        callback(null, {
          msg: "success",
        });
      }
    });
  }
};

//Borrar libro
bookModel.deleteBook = (id, callback) => {
  if (connection) {
    const sql = `SELECT * FROM books WHERE id = ${connection.escape(id)}`;
    //enviar la consult a la db
    connection.query(sql, (err, row) => {
      if (row) {
        //ejecute una nueva sentencia
        const sql = `DELETE FROM books WHERE id = ${id}`;
        //de nuevo consulta
        connection.query(sql, (err, result) => {
          if (err) {
            throw err;
          } else {
            callback(null, {
              msg: "deleted",
            });
          }
        });
        //no encuentra el usurio
      } else {
        callback(null, {
          msg: "not exists",
        });
      }
    });
  }
};

module.exports = bookModel;
