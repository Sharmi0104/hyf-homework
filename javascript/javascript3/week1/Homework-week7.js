/*Step2 */
let numbers = [1, 2, 3, 4];
let newNumbers = [];


 newNumbers = numbers
  .filter((Nos) => {
    return Nos % 2 !== 0;
}).map((Nos) => {
    return Nos* 2
});
console.log("The doubled numbers are", newNumbers); 

/*Step3 */
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'
)
.then(res=> res.json())
.then(movies=>{
   let Goodmovies= movies
    .filter((good) => {
       
           return good.rating >=7;
    })

    console.log('=========Good Movies==========');
    console.log(Goodmovies);
    let Averagemovies= movies
    .filter((average) => {
       
           return average.rating >= 4 && average.rating < 7;
    })
    console.log('=========Average Movies==========');
    console.log(Averagemovies);
    let Badmovies= movies
    .filter((bad) => {
       
           return bad.rating < 4;
    })
    console.log('=========Bad Movies==========');
    console.log(Badmovies);

    console.log('Total Good movies : ' +Goodmovies.length + ' Averagemovies : '+Averagemovies.length + ' Bad movies :'+Badmovies.length);
    let movieList=movies.filter(movieYear=>{
        return(movieYear.year >= 1980 && movieYear.year <= 1989);
    })
    console.log('========= Movies between 1980-1989==========');
    console.log(movieList);
   
    let average =movies.map(avg=>avg.rating)
    .reduce( ( a, b ) => a + b, 0 ) / movies.length;

    console.log('========= Average Rating==========');
    console.log(average);
    let movieTitles =movies.map(movieTitle=>movieTitle.title.split(' '));
    
   
    tittlemovie=movieTitles.filter(Mtitle=>{
      
       function Multiwords(s){
           // var a = flix[0].toLowerCase();
           let count2=0; 
            for(var i=0; i<Mtitle.length; i++){
                if (Mtitle.indexOf(s[i]) != -1){
                    
                  count2++;
                  
                  console.log(count2.length);
                } 
                
            }
           
        }
        
        Multiwords(["The", "dogs", "who", "is", "not", "a", "man"]);
       
     
    });
  //console.log(tittlemovie);
 // console.log(movieTitles.includes("The" ));
     
})



