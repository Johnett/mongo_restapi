const express = require("express");
const bodyParser = require("body-parser");
const taskController = require("./controllers/TaskController");
const userController = require("./controllers/UserController");

// db instance connection
require("./config/db");

const app = express();

const port = process.env.PORT || 3301;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API ENDPOINTS

app
  .route("/tasks")
  .get(taskController.listAllTasks)
  .post(taskController.createNewTask);

app
  .route("/tasks/:taskid")
  .get(taskController.readTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);

app
  .route("/users")
  .get(userController.listAllUsers)
  .post(userController.createNewUser);

// app
//   .route("/users/:userid")
//   .get(userController.readTask)
//   .put(userController.updateUser)
//   .delete(userController.deleteUser);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
