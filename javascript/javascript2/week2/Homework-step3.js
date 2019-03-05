let titleDiv=document.getElementById("divName");
document.getElementById("btn").addEventListener("click",getJson)

//document.getElementById("txtReop").addEventListener("keypress",searchText)
function getJson()
{
    //fetch('https://api.github.com/orgs/HackYourFuture/repos')
    let newData;
    fetch('https://api.github.com/orgs/HackYourFuture/repos')
    .then((res)=>{return res.json()})
   /* .then(function(myJson) {
        console.log(JSON.parse(myJson));*/
    .then((data) => {
        //console.log(data);
        newData=data
        data.forEach(function (x){
          titleDiv.innerHTML += `<br> <ul>
          <li>
          <a href="https://api.github.com/repos/HackYourFuture/${x.name}" target="_blank">${x.name}</a><br>
          </li>
          </ul>`;

        
      })
     
      
    })
    document.getElementById("searchBtn").addEventListener("click",function(x) {
      let filterText=document.getElementById("txtReop").value;
      
      //console.log(filterText);
      newData.forEach(function (x){
      //data.filter(function(searchData) {
        console.log(filterText === x.name);
        titleDiv.hidden=true;
          //console.log('inside');
          if(filterText === x.name){
          document.getElementById("searchDiv").innerHTML += ` <ul>
            <li>
            <a href="https://api.github.com/repos/HackYourFuture/${x.name}" target="_blank">${x.name}</a><br>
            
            </li></ul>`;
            
          }
    // })
    })
    })
//document.getElementById("divName").innerHTML=repo;
};

/*let items=document.querySelectorAll("li")
function searchText()
{
  alert(filterText);
  //let a = li[i].getElementsByTagName("a")[0];
  
  console.log(items);
  for (i=0;items.length;i++)
  {
    console.log(items[i].innerHTML);
   
  }
  /*if (a.innerHTML.indexOf(filter) > -1) {
    li[i].style.display = "";
} else {
    li[i].style.display = "none";
}}*/

/*function getJson()
{
    fetch('https://developer.github.com/v3')
  .then(function(response) {
    return response.text();
  })
  .then((out) => {
    console.log('Output: ', JSON.stringify(out));
   // divName.innerHTML += JSON.parse(out);
}).catch(err => console.log(err));
}*/

