
console.log("=======Step 3: Javascript warmup part two====="); 
    const timeObject=CalTime();
    console.log(timeObject);

function CalTime()
{
    const timeX = 12;
    return timeX;
}


console.log("===3.2=Array With Objects===");

//Type1
let arrayColor=[{color: '',color: '',color: ''}]

function arrColor(color1,color2,color3){
    arrayColor[0]=color1;
    arrayColor[1]=color2;
    arrayColor[2]=color3;
    return arrayColor;
}
let colorobject=arrColor('red','blue','yelow');
console.log(colorobject);
//Type2:
let colorArray =[];
//let color;
function  arrayObj(color1,color2,color3)
{
    //colorArray.push({[color]:color1,color2,color3});
    colorArray.push({color1,color2,color3});
    console.log(colorArray[0]);

}
let colorObjects1 =arrayObj('red','blue','green');
for (i=0;i<colorArray.length;i++)
{
console.log("Log out of color"+colorArray[i]);
}
console.log("=======Step 3.8========"); 
function newDate()
{
    let Days=[];
    Days[0]="Sunday";
    Days[1]="Monday";
    Days[2]="Tuesday";
    Days[3]="Wednessday";
    Days[4]="Thursday";
    Days[5]="Friday";
    Days[6]="Saturday";
    let sysTime= new Date();
let getTodayDate=sysTime.getDate();
let DaysToMeet =9;
//let todayDay=sysTime.getVarDate();
let addDate=(getTodayDate+DaysToMeet)%7;
//console.log(getTodayDate);
//console.log(addDate);
let meetingDay =Days[addDate];
console.log(meetingDay);
}
newDate();
console.log("=======Step 3: Smart-ease - Goes Global!========"); 
console.log("=======Step 3: NOnoN0nOYes (Note taking app)========"); 
let note=[];
function addNotes(notes,noteId)
{
   
note.push([notes,noteId]);
console.log(note[0]);
}
addNotes({NoteName:'test',NoteNo:1},{NoteName:'test2',NoteNo:2});
console.log("=======Step 3: Get a note========");

const newNote=[{NoteName:'test',NoteNo:1},{NoteName:'test2',NoteNo:2}];
function getNoteFromId(getId)
{
    for(let keyID in newNote)
{
    
    if(newNote[keyID].NoteNo===getId)
    
    {
        console.log(newNote[keyID].NoteNo);
    }
    else{
        console.log("Does not match with Id");
    }
    
    //const listOfTeacher=note.map(x=>x+='n');
}
}
getNoteFromId(2);
console.log("=======Step 3: Read all notes========"); 

function showAllNotes ()
{
    for(let keyID in newNote)
    {
    console.log("The note with id:" +newNote[keyID].NoteNo, "has the following note text: "+newNote[keyID].NoteName);
    }
}
 showAllNotes();
 console.log("=======Step 3.2: CactusIO-interactive (Smart phone usage app)========"); 
 console.log("=======Step 3.2: Adding an activity========"); 
 let currentDate= new Date();
 let activities=[{date:currentDate,activity:'exercise',duration:20}]
 function addActivity(date, activity ,duration){
 activities.push(date,activity,duration);
 console.log(activities);
 }
 
 addActivity('23/7-18', 'Youtube', 30);
 addActivity('23/7-18', 'cycling', 10);
 addActivity('23/7-18', '', 60);
 //addActivity('date:todayDate','activity:exercise',"duration:" +20);
 console.log("=======Step 3.2: show status========"); 

 let totalMins=0;
 let cntactivity =0;
 let limits=90;
 function showStatus(stractivities){
    for(let i=0;i<activities.length;i++){
        if(activities[i] === "")   
        {
           console.log("Add some activities before calling showStatus");
        }
        
    }
    for (let i = 3; i < activities.length; i += 3){
        cntactivity++;
        //console.log(activities[i]);
        totalMins +=activities[i];
         //console.log(cntactivity);

    }
    console.log("You have added" +" "+cntactivity+ " activities. They amount to" +" " +totalMins+ " min. of usage");
    console.log("=======Step 3.2: Usage limit========"); 

    if(totalMins>limits)
    {
        console.log("You have reached your limit, no more smartphoning for you!");
    }
    
    
 }
 showStatus(activities);

 console.log("===Create a function for calculating the activity a user has spent the most time on.==")
 let activityAndDuration= [];
 for (let i = 0; i < activities.length; i ++){
    cntactivity++;
    activityAndDuration = activities.slice(2, 4);
    //console.log(activityAndDuration);
}
console.log(activityAndDuration);
 /*for(let i=0;i<activities.length;i++){
    if(activities[i] === "")   
    {
       console.log("Add some activities before calling showStatus");
    }
    
}*/
 let maxActivities= [];
 for (let i = 3; i < activities.length; i += 3){
    cntactivity++;
    totalMins =activities[i];
    //console.log(activities[i]);
    maxActivities.push(totalMins);
    
}

    // console.log(maxActivities);
     var max = maxActivities.reduce(function(a, b,c) {
        return Math.max(a, b,c);
    });
    console.log("You spent maximum time in the activity " + max );
 


