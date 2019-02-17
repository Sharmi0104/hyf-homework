var fs = require('fs');
var mysql = require('mysql');

var config = JSON.parse(fs.readFileSync("config-secret.json"))

var connection = mysql.createConnection({
   host: config.host,
   user: config.user,
   password: config.password,
   port: config.port,
   database: config.database
});

//connection.connect();
connection.connect(err => { if (err) throw err; });

connection.query('INSERT INTO user (name, email, phone) VALUES(?, ?, ?) ', ['Stripes3', 'stripes@gmail.com', '111-222-333'], function(error, results, fields) {
   console.log(results);
});

connection.query('SELECT * FROM user', function(error, results, fields) {
   console.log(results);
});

//////
const findDatabaseTasks = function(searchText) {
   connection.query(`SELECT * 
   FROM user JOIN user_task ON user_task.user_id = user.id JOIN task ON user_task.task_id = task.id
   WHERE task.title LIKE ?;`, [searchText], (error, result) => {
         if (error) {
            throw error
         }
         console.log(`results: ${JSON.stringify(result)}`)
      })
  
}
findDatabaseTasks("%database%")


const findUserTasks = function (userName) {
   connection.query(`SELECT *
   FROM user JOIN user_task ON user_task.user_id = user.id
   WHERE user.name LIKE ?`, [userName], (error, result) => {
         if (error) {
            throw "doesn't work"
         }
         console.log(`results: ${JSON.stringify(result)}`)
      })
}

findUserTasks("Donald Duck")

const findUserTasksStatus = function(userName) {
   connection.query(`SELECT status.name, user.name, task.title FROM user JOIN user_task ON user.id = user_task.user_id 
   JOIN task ON user_task.task_id = task.id 
   JOIN status ON task.status_id = status.id where user.name like ?`, [userName], (error, result) => {
         if (error) {
            throw "doesn't work"
         }
         console.log(`results: ${JSON.stringify(result)}`)
      })
}
findUserTasksStatus("%Pavel%")

const addNewTask = function(title, description, created, updated, due_date, status_id) {
   connection.query('insert into task (title, description, created, updated, due_date, status_id) values(?, ?, ?, ?, ?, ?)',
[title, description, created, updated, due_date, status_id], (err, results, fields) => {
   if (err){
       throw 'sorry verify your data fields and try again'
   };
   console.log(results);
});
 
};


addNewTask('New Task', 'Create a function to insert new task', new Date ('2019-02-14 11:48:30'), new Date ('2019-12-25 12:12:12'), null, 2);

const changeTaskTitle = function(newTitle, targetId) {
   connection.query('update task set title = ? where id = ? ', 
  [newTitle, targetId], (err, results, fields) => {
      if (err) {
          throw 'Check the id, try again'
      };
      console.log(results);
  });
};
  // executable function
  changeTaskTitle('New project', 16);



const changeTaskDueDate = function(setDate, targetId) {
  connection.query('update task set due_date = ? where id = ?',
[setDate, targetId], (err, results, fields) => {
  if (err) {
      throw 'check data and try again';
  };
  console.log(results);
})

};

// executable function
changeTaskDueDate('2019-11-23 23:23:37');

const changeTaskStatus = function(statusID, targetId) {
  connection.query('update task set status_id = ? where id = ?', 
[statusID, targetId], (err, results, fields) => {
  if (err) {
      throw 'Try again!!';
  };
  console.log(results);
});

};

// executable function
changeTaskStatus(2, 7)

const markTaskAsCompleted = function(taskID, targetId) {
  connection.query('update task set status_id = ? where id = ?', 
[taskID, targetId], (err, results, fields) => {
  if (err) {
      throw 'Try again';
  };
  console.log(results);
});

};

// executable function
markTaskAsCompleted(3, 15);

const deleteTask = function(taskID) {
  connection.query('delete from task where id = ?',
[taskID], (err, results, fields) => {
  if(err) {
      throw 'Try again';
  };
  console.log(results);
});

};

// executable function
deleteTask(4);


const deleteUser = function(taskID) {
  connection.query('delete from user where id = ?',
[taskID], (err, results, fields) => {
  if(err) {
      throw 'Try again';
  };
  console.log(results);
});

};

// executable function
deleteUser(1);


connection.end();