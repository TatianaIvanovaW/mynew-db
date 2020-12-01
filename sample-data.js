const TodoItem = require("./models").toDoItem;
const User = require("./models").user;

async function createSampleTodoItems() {
  try {
    const todo1 = await TodoItem.create({
      task: "Clean bedroom",
      important: false,
    });
    const todo2 = await TodoItem.create({
      task: "Learn to code",
      important: true,
    });
    const todo3 = await TodoItem.create({
      task: "Have fun",
      important: true,
    });

    return [todo1, todo2, todo3].map((item) => item.get({ plain: true }));
  } catch (e) {
    console.error(e);
  }
}

createSampleTodoItems().then((todos) => console.log(todos));

async function createNewUser() {
  try {
    const newUser1 = await User.create({
      name: "Max",
      email: "max@gmail.com",
      phone: 987765432,
      password: "testtest",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return newUser1.get({ plain: true });
  } catch (e) {
    console.error(e);
  }
}

createNewUser().then((users) => console.log(users));

async function getByTask() {
  const specificUser = await TodoItem.findAll({ where: { important: true } });
  console.log(specificUser);
}

getByTask();
