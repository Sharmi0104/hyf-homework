var titleDiv=document.getElementById("divName");
document.getElementById("btnRepo").addEventListener("click",getJson)

function getJson()
{

fetch('https://api.github.com/orgs/HackYourFuture-CPH/repos')
.then((res)=>{return res.json()})

.then((data) => {
    titleDiv.hidden=false;
    data.forEach(function (x){
        titleDiv.innerHTML += `<br> <ul>
      <li>          
      <button class='btntittle' ">${x.name}</button>
      </li>
      </ul>`;    
  }) 
})
}
var divRepo=document.getElementById("divRepo");
var divRepoUrl=document.getElementById("divRepoUrl");
document.getElementById("btnSearch").addEventListener("click",searchRepo)

function searchRepo()
{
  let SearchText=document.getElementById("txtReop").value;
  if(SearchText!=''){
  fetch(`https://api.github.com/search/repositories?q=user:HackYourFuture+${SearchText}`)
.then((res)=>{return res.json()})

.then((data) => {
 
  data.items.map(function(x){
        titleDiv.hidden=true;
    divRepo.innerHTML += `<br>
    <div class="alignrow">
    <div class="aligncol">
     <ul>
      <li>          
      <a href='https://api.github.com/repos/HackYourFuture/${x.name}' target="_blank">${x.name}</a>
      </li>
      </ul>
      </div>
      <div class="aligncol" >
      <ul>
      <li> 
      <a href='https://api.github.com/repos/HackYourFuture/${x.contributors_url}' onclick="makeRequest(this.href);" target="_blank">${x.contributors_url}</a>
      </li>
      </ul>
      </div>
      </div>
      `; 
      
  }).join('');
})
}
else{

  alert('Please enter search text');
}

}
function makeRequest(strurl)
{
  alert(strurl);
}