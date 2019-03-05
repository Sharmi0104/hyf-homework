let favbook=["Crow_Lake","Alone_on_a_Wide_Wide_Sea","The_Secret_Garden","Never_Cry_Wolf","In_Siberia","A_Harvest_of_Sunflowers"];
//console.log(favbook);


const bookDetails=[
    {
        id:favbook[0],
       title:"Crow Lake",
        author:"Mary Lawson",
        language:"English"
    },
    {
        id:favbook[1],
        title:"Alone on a Wide Wide Sea",
        author:"Mary Lawson",
       language:"English"
    },
    {
        id:favbook[2],
        title:"The Secret Garden",
        author:"Frances Hodgson Burnett",
        language:"English"
    },
    
    {
        id:favbook[3],
        title:"In Siberia",
        author:"Colin Thubron",
       language:"English"
    },
    {
        id:favbook[4],
        title:"A Harvest of Sunflowers",
        author:"Ruth Silvestre",
       language:"English"
    },
    {
        id:favbook[5],
        title:"Alone on a Wide Wide Sea",
        author:"Michael Morpurgo",
       language:"English"
    },
    {
        id:favbook[6],
        title:"Never Cry Wolf",
        author:"Farley Mowat ",
       language:"English"
    },
    {
        id:favbook[7],
        title:"North and South",
        author:"Elizabeth Gaskell",
       language:"English"
    },
    {
        id:favbook[8],
        title:"The speeches",
        author:"Winston Churchill",
       language:"English"
    },
    {
        id:favbook[9],
        title:"The Lost Continent",
        author:"Bill Bryson",
       language:"English"
    },
    {
        id:favbook[10],
        title:"Into Thin Air",
        author:"Jan Krakauer",
       language:"English"
    }];

    function myBooks()
    {
        const strul=document.createElement('ul');
       
        
        for(let x=0;x<bookDetails.length;x++)
        {
     //books += "<li>"+favbook[x]+"</li>";
     const strli=document.createElement('li');
     const strp = document.createElement('p');
     const strh2 = document.createElement('h2');
     console.log(bookDetails[x].title);
     strh2.innerHTML=bookDetails[x].title;
     strp.innerHTML=bookDetails[x].author;
     strli.appendChild(strh2);
     strli.appendChild(strp);
     strul.appendChild(strli);
        //console.log(strul.appendChild(li));
        }
        console.log(document.getElementById("myBooks").appendChild(strul));
        document.getElementById("myBooks").appendChild(strul);
        
        
    }
    

    myBooks();