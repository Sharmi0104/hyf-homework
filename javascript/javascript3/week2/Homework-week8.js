const nextPromise= false;
let loadMovies=document.getElementById("divMovie");
let loadAverageMovies=document.getElementById("divName");
let loadGood=document.getElementById("divGood")
document.getElementById("chkGood").addEventListener("change",valueChanged)
document.getElementById("chkAverage").addEventListener("change",valueChanged1)
document.getElementById("chkBad").addEventListener("change",valueChanged2)
function valueChanged() {  
       document.getElementById("chkAverage").checked = false;
       document.getElementById("chkBad").checked = false;
  
}
function valueChanged1() {
   document.getElementById("chkGood").checked = false;
   document.getElementById("chkBad").checked = false;
}
function valueChanged2() {
  document.getElementById("chkAverage").checked = false;
 document.getElementById("chkGood").checked = false;
}


getUrl='https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';

    function getMovies(getSuccess,getError)
    {
       let  myNewpromise=new Promise((resolve,reject)=>{
          
            if(nextPromise){
                reject(getError) ;
               }
               else{
                 resolve(getSuccess)  
                }
               
        })

        return myNewpromise;
    }

   const GetallMovies= getMovies(getUrl,'error')
        .then((data)=>loadAllMovies(data))
        .catch((err)=>console.log(err))
 function loadAllMovies(getdata)
{
fetch(getdata)
.then(res=> res.json())
.then(movies=>{
    document.getElementById("btnAll").addEventListener("click",MoviesGet)
    function MoviesGet(){
        let Allmovies= movies
        .map((good) => {
            //let goodMovie=good.rating >=7;
        // console.log(good);
                loadGood.hidden=true;
                loadAverageMovies.hidden=true;
                loadMovies.hidden=false;
            loadMovies.innerHTML+=`<div class="alignRowDiv">
                                    <div class="aligncol1">${good.title}</div>
                                    <div class="aligncol1">${good.rating}</div>
                                    <div class="aligncol3"><button class="btn btn-success" onclick="getPoster('${good.title}');">Get Poster</button></div>
                                </div>`
        
        
            //return Allmovies;
        })
    }
    document.getElementById("btnGood").addEventListener("click",MoviesGood)
    function MoviesGood()
    {
        let Gmovies= movies 
        .filter((goodM) =>
                {
                    return goodM.rating >=7 
                }
        ).map((MGood)=>{
      
           
                loadGood.hidden=false;
                loadAverageMovies.hidden=true;
                loadMovies.hidden=true;
                
                loadGood.innerHTML+=`<div class="alignRowDiv">
                                        <div class="aligncol1">${MGood.title}</div>
                                        <div class="aligncol1">${MGood.rating}</div>
                                        <div class="aligncol3"><button class="btn btn-success" onclick="getPoster('${MGood.title}');">Get Poster</button></div>
                                    </div>`
                                      
            
        })
    }
    document.getElementById("btnAverage").addEventListener("click",MoviesAverage)
    function MoviesAverage(){
        let Amovies= movies 
        .filter((Maverage) =>
                {
                    return Maverage.rating >= 4 && Maverage.rating < 7; 
                }
        )
        console.log(Amovies)
        Amovies.map((AverageM)=>{
           
                loadAverageMovies.hidden=false;
                loadMovies.hidden=true;
                loadGood.hidden=true;
                loadAverageMovies.innerHTML+= `<div class="alignRowDiv">
                                                <div class="aligncol1">${AverageM.title}</div>
                                                <div class="aligncol1">${AverageM.rating}</div>
                                                <div class="aligncol3"><button class="btn btn-success" onclick="getPoster('${AverageM.title}');">Get Poster</button></div>
                                            </div>`
                    
      
        })
    }
    document.getElementById("btnBad").addEventListener("click",MoviesBad)
    function MoviesBad()
    {
        let Bmovies= movies 
        .filter((MBad) =>
                {
                    return MBad.rating < 4; 
                }
        )
        console.log(Bmovies)
        Bmovies.map((BadM)=>{
           
                loadAverageMovies.hidden=true;
                loadMovies.hidden=false;
                loadGood.hidden=true;
                loadMovies.innerHTML+= `<div class="alignRowDiv">
                                                <div class="aligncol1">${BadM.title}</div>
                                                <div class="aligncol1">${BadM.rating}</div>
                                                <div class="aligncol3"><button class="btn btn-success" onclick="getPoster('${BadM.title}');">Get Poster</button></div>
                                            </div>`
                    
      
        })
    }
    document.getElementById("btnSearch").addEventListener("click",loadGoodMovies)
    function loadGoodMovies(){
        loadMovies.innerHTML ="";
        let searchTxt=document.getElementById("txtSearch").value;
       // const getTxtValue=searchTxt;
        
        let movieTitles =movies.map(movieTitle=>movieTitle.title.split(' '));
                
         
             let chkGood =document.getElementById("chkGood");
             
              if(chkGood.checked==true && searchTxt!="")
              {
               let Goodmovies= movies 
                .filter((good) =>
                        {
                            return good.rating >=7 
                        }
                ).map((movieGood)=>{
              
                    let searchWord = searchTxt.toLowerCase();
                    const searchGoodItem = movieGood.title.indexOf(searchWord);
                    if(searchGoodItem>=0)
                    {
                        loadGood.hidden=false;
                        loadAverageMovies.hidden=true;
                        loadMovies.hidden=true;
                        
                        loadGood.innerHTML+=`<div class="alignRowDiv">
                                                <div class="aligncol1">${movieGood.title}</div>
                                                <div class="aligncol1">${movieGood.rating}</div>
                                                <div class="aligncol3"><button class="btn btn-success" onclick="getPoster('${movieGood.title}');">Get Poster</button></div>
                                            </div>`
                                              
                    }
                                
                           
              
                })
                
            }
           
            //Average
            let chkAverage1 =document.getElementById("chkAverage");
             
              if(chkAverage1.checked==true && searchTxt!="")
              {
               
               let Averagemovies= movies 
                .filter((average) =>
                        {
                            return average.rating >= 4 && average.rating < 7; 
                        }
                )
                //console.log(Averagemovies)
                Averagemovies.map((movieAverage)=>{
             
                    let searchWord = searchTxt.toLowerCase();
                    const searchAverageItem = movieAverage.title.indexOf(searchWord);
                    if(searchAverageItem>=0)
                    {
                        loadAverageMovies.hidden=false;
                        loadMovies.hidden=true;
                        loadGood.hidden=true;
                        loadAverageMovies.innerHTML+= `<div class="alignRowDiv">
                                                        <div class="aligncol1">${movieAverage.title}</div>
                                                        <div class="aligncol1">${movieAverage.rating}</div>
                                                        <div class="aligncol3"><button class="btn btn-success" onclick="getPoster('${movieAverage.title}');">Get Poster</button></div>
                                                    </div>`
                        
                    }
                                
                                
              
                })
            }
           
            //Bad
            let chkBad =document.getElementById("chkBad");
             
              if(chkBad.checked==true && searchTxt!="")
              {
                  
              
               let Badmovies= movies 
                .filter((Bad) =>
                
                        {
                            //console.log(Bad.rating < 4);
                            return Bad.rating < 4; 
                           
                            
                        }
                        
                )
                //console.log(Badmovies);
                
                Badmovies.map((movieBad)=>{
                    let searchWord = searchTxt.toLowerCase();
                    const searchItem = movieBad.title.indexOf(searchWord);
                    if(searchItem>=0)
                    {
                        loadAverageMovies.hidden=true;
                        loadGood.hidden=true;
                        loadMovies.hidden=false;
                        loadMovies.innerHTML+=`<div class="alignRowDiv">
                                                    <div class="aligncol1">${movieBad.title}</div>
                                                    <div class="aligncol1">${movieBad.rating}</div>
                                                    <div class="aligncol3"><button class="btn btn-success" onclick="getPoster('${movieBad.title}');">Get Poster</button></div>
                                                </div>`
                       
                    }
                                
                                
              
                })
            }
            
          
    }
   
})   
}

function getPoster(strPoster)
  {
    fetch(`http://www.omdbapi.com/?t=${strPoster}&apikey=5d147479`)
    .then((res) =>  res.json())
    .then((data) => { 
        console.log(data);
        let output ='';
        output = `<img src = "${data.Poster}" class="poster-img">`;
       //document.getElementById("divPoster").innerHTML += output;
       window.open(data.Poster,"'height=300','width=400'");
    })
  
  }  
     




