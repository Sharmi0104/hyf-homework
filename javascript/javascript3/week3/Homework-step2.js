
function getAjaxData(url) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.onload = () => resolve(JSON.parse(request.responseText))
        request.onerror = () => reject(request.status.responseText)

        request.open("GET", url);
        request.send();
    })


}

const usersURL = "https://jsonplaceholder.typicode.com/users";

getAjaxData(usersURL).then(function main(data) {

    let users = data;
    const todoRequests = users
        .map(user => {

            const todosURL = `https://jsonplaceholder.typicode.com/users/${user.id}/todos`;
          
            return getAjaxData(todosURL);
        })
    return Promise.all(todoRequests);
})
    .then(function (todos) {
       todos.map((user)=>{
            users = user;
        })
       
      console.log(todos)
            
        
       
    })
    .catch(console.log);