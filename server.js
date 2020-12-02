const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const cors = require("cors");
app.use(cors());

const User = require("./models").user;
const TodoList = require("./models").toDoList;

app.use(express.json());

///test >>>

app.post("/echo", (req, res) => {
  res.json(req.body);
});

///// users >>>

app.post("/users", async (req, res, next) => {
  ///add new
  try {
    const email = req.body.email;
    if (!email || email === " ") {
      res.status(400).send("Must provide an email address");
    } else {
      const user = await User.create(req.body);
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

app.get("/users/:userId", async (req, res, next) => {
  ///get
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send("user not found");
    }
    res.json(user);
  } catch (e) {
    next(e);
  }
});

app.put("/users/:userId", async (req, res, next) => {
  /// update
  try {
    const userId = parseInt(req.params.userId);
    const userToUpdate = await User.findByPk(userId);
    if (!userToUpdate) {
      res.status(404).send("User not found");
    } else {
      const updatedUser = await userToUpdate.update(req.body);
      res.json(updatedUser);
    }
  } catch (e) {
    next(e);
  }
});

///to do lists >>>
/// get
app.get("/lists", async (req, res, next) => {
  console.log("request send");
  try {
    const lists = await TodoList.findAll();
    if (!lists) {
      return res.status(404).send("nothing found");
    }
    res.json(lists);
  } catch (e) {
    next(e);
  }
});
/// add new list
app.post("/lists", async (req, res, next) => {
  try {
    const newList = await TodoList.create(req.body);
    res.json(newList);
  } catch (e) {
    next(e);
  }
});
//update list
app.put("/lists/:listId", async (req, res, next) => {
  /// update
  try {
    const listId = parseInt(req.params.listId);
    const listToUpdate = await TodoList.findByPk(listId);
    if (!listToUpdate) {
      res.status(404).send("User not found");
    } else {
      const updatedList = await listToUpdate.update(req.body);
      res.json(updatedList);
    }
  } catch (e) {
    next(e);
  }
});

///get list by id

app.get("/lists/:listId", async (req, res, next) => {
  console.log("request send");
  try {
    const listId = parseInt(req.params.listId);
    const list = await TodoList.findByPk(listId);
    if (!list) {
      return res.status(404).send("nothing found");
    }
    res.json(list);
  } catch (e) {
    next(e);
  }
});

/// get all lists for one user

app.get("/users/:userId/lists", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, {
      include: [TodoList],
    });
    if (user) {
      res.send(user.toDoLists);
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    next(e);
  }
});

///delete a list

app.delete("/lists/:listId", async (req, res, next) => {
  console.log("we are herer");
  try {
    const listId = parseInt(req.params.listId);
    const deleteList = await TodoList.findByPk(listId);
    console.log(deleteList);
    const deleted = await deleteList.destroy();
    res.json(deleted);
  } catch (e) {
    next(e);
  }
});

app.listen(port, console.log("on air..."));
