##Find out how many tasks are in the task table
SELECT 
    COUNT(*) no
FROM
    task;
SELECT 
    COUNT(title) title
FROM
    task;



##Find out how many tasks in the task table do not have a valid due date
SELECT 
    *
FROM
    TASK
WHERE
    due_date IS NULL;

##Find all the tasks that are marked as done
SELECT 
    *
FROM
    task
        JOIN
    status ON task.status_id = status.id
WHERE
    status.name = 'done';

##Find all the tasks that are not marked as done
SELECT 
    *
FROM
    task
        JOIN
    status ON task.status_id = status.id
WHERE
    status.name != 'done';

##Get all the tasks, sorted with the most recently created first
SELECT 
    *
FROM
    task
ORDER BY created DESC;


##Get the single most recently created task
SELECT 
    MAX(created)
FROM
    task;
SELECT 
    *
FROM
    task
ORDER BY created DESC
LIMIT 1;
##Get the title and due date of all tasks where the title or description contains database
SELECT 
    title, due_date
FROM
    task
WHERE
    title LIKE '%database%';
SELECT 
    title, due_date
FROM
    task
WHERE
    description LIKE '%database%';

SELECT 
    title, due_date
FROM
    task
WHERE
    description LIKE '%database%'
        OR title LIKE '%database%';


##Get the title and status (as text) of all tasks
select title,status.name from task join status on task.status_id= status.id ;

##Get the name of each status, along with a count of how many tasks have that status
SELECT 
    status_id, COUNT(*) task
FROM
    task
        JOIN
    status ON task.status_id = status.id;

##Get the names of all statuses, sorted by the status with most tasks first

SELECT 
    status.name, COUNT(task.status_id) total_task
FROM
    task
        JOIN
    status ON task.status_id = status.id
GROUP BY task.status_id
ORDER BY COUNT(task.status_id) DESC;
