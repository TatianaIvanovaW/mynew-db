const User = require("./models").user;
const TodoItem = require("./models").toDoItem;
const TodoList = require("./models").toDoList;
const Tag = require("./models").tag;
// const ItemTag = require("./models").itemTag;

async function getAllUsers() {
  try {
    // This is how we can use a query method to get all the users from the database
    // Selects all rows. Resolves with a (possibly empty) array
    const allUsers = await User.findAll();
    return allUsers.map((user) => user.get({ plain: true }));
  } catch (e) {
    console.log(e);
  }
}

// getAllUsers().then((users) => console.log(users));
// .finally(console.log("done"));

async function listsWithUsers() {
  const lists = await User.findOne({
    where: { id: 2 },
    include: [{ model: TodoList }],
  });

  return lists.get({ plain: true });
}

// listsWithUsers().then((lists) => console.log(lists));

async function userWithItems(id) {
  const lists = await User.findOne({
    where: { id },
    include: [
      {
        model: TodoList,
        attributes: ["name"],
        include: { model: TodoItem },
      },
    ],
  });

  return lists.get({ plain: true });
}

// userWithItems(2).then((lists) => console.log(lists.toDoLists[0]));

async function getItemsWithTags() {
  const allItemsWithTags = await TodoItem.findAll({
    include: [Tag],
  });

  return allItemsWithTags.map((item) => item.get({ plain: true }));
}

getItemsWithTags().then((items) => console.log(items));

// async function getItemsWithTags() {
//   const allItemsWithTags = await Tag.findAll();

//   return allItemsWithTags.map((item) => item.get({ plain: true }));
// }

// getItemsWithTags().then((items) => console.log(items));
