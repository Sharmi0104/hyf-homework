var titleDiv=document.getElementById("divName");
var forkDIv=document.getElementById("divFork");
var countDiv=document.getElementById("divContName");
document.getElementById("btnRepo").addEventListener("click",getJson);
document.getElementById("btnFork").addEventListener("click",leastFork);
document.getElementById("btnWatch").addEventListener("click",mostWatch);
document.getElementById("btnCont").addEventListener("click",Contributors)



function getJson()
{

fetch('https://api.github.com/orgs/HackYourFuture-CPH/repos')
.then((res)=>{return res.json()})

.then((data) => {
  titleDiv.innerHTML="";
  countDiv.innerHTML="";
  forkDIv.innerHTML="";
  forkDIv.hidden=false;
    titleDiv.hidden=false;
    let count=0;
    data.map(function (x){
      count = count + x.forks; 
      console.log(x.contributors_url);
      forkDIv.innerHTML=`<div class="aligncol">Total Forked repository:${count}</div>`
        titleDiv.innerHTML += `<br>
        
        <br>
       <ul>
      <li>          
      <div>${x.name}</div>
      </li>
      </ul>
      `; 
     
       
  })
  
})
}

function leastFork()
{
  fetch('https://api.github.com/orgs/HackYourFuture-CPH/repos')
.then((res)=>{return res.json()})

.then((data) => {
  titleDiv.innerHTML="";
  countDiv.innerHTML="";
  

  var res= Math.min.apply(Math,data.map(function(o)
  {
   // console.log(o.name +':' +o.forks);
  // titleDiv.innerHTML +=  o.forks;
  return o.forks;
    }))
   data.filter(function(x){
      //  data.find(function(o)
       // { 
            //console.log(x.forks.length);
             if(x.forks == res){
                return x.name
            }; 
       // })
     //  console.log(obj[0].forks);
    }).map(function(strObj)
    {
      titleDiv.innerHTML +=`<ul>
      <li> 
      <div >${strObj.name}</div> 
      </li>
      </ul>`
    
     
    })
  })
}

function mostWatch()
{
  fetch('https://api.github.com/orgs/HackYourFuture-CPH/repos')
.then((res)=>{return res.json()})

.then((data) => {
  titleDiv.innerHTML="";
  countDiv.innerHTML="";
  forkDIv.innerHTML="";
  var res= Math.max.apply(Math,data.map(function(o)
  {
   // console.log(o.name +':' +o.forks);
  // titleDiv.innerHTML +=  o.forks;
  return o.watchers;
    }))
   data.filter(function(x){
      //  data.find(function(o)
       // { 
            //console.log(x.forks.length);
             if(x.watchers == res){
                return x.name
            }; 
       // })
     //  console.log(obj[0].forks);
    }).map(function(strObj)
    {
      titleDiv.innerHTML += `<div class="aligncol">${strObj.name}</div>`
     
    })
  })

}
function Contributors()
{

  fetch('https://api.github.com/orgs/HackYourFuture-CPH/repos')
.then((res)=>{return res.json()})

.then((data) => {
  titleDiv.innerHTML="";
  countDiv.innerHTML="";
  forkDIv.innerHTML="";
    titleDiv.hidden=false;
   
    data.map(function (x){
    
        titleDiv.innerHTML += `<br>
        
        <br>
       <ul>
      <li>          
      <div>${x.name}</div>
      <button onclick=getContributorCount(\'${x.contributors_url}'\,\'${x.name}'\);>${x.contributors_url}</button>
      </li>
      </ul>
      `; 
     
       
  })
  
})
}
function getContributorCount(getCount,getName)
{
 // console.log(getCount);
  fetch(getCount, {
    method: 'get', // or 'PUT'
    //body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then((res)=>{return res.json()})
  
  .then((data) => {
   // console.log(data);
    titleDiv.innerHTML="";
    forkDIv.innerHTML="";
      titleDiv.hidden=false;
      let count=0;
      
      data.map(function (x){
        count = count + x.contributions
      document.getElementById("divContName").innerHTML=`<div class="aligncol3">Repo-Name</div> 
      <div class="aligncol1">${getName}</div> 
      <div class="aligncol3">Total contributor</div> 
      <div class="aligncol2">${count}</div>`
          
          
          
        
       
       
         
    })
    
  })
}