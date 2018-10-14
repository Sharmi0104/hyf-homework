const watchFirstEpisode = function() {
  
  //watchFirstEpisode ,watchBreakingBad,finishMondayEvening,(anonymous)
  console.log('Watch first episode');
};

const watchBreakingBad = function() {
  console.log('Watching Breaking bad');
  //watchBreakingBad,finishMondayEvening,(anonymous) 
  watchFirstEpisode();
  console.log('No more for today');
};

const goForARun = function() {
  console.log('Im running! look at me!');
}

const helpStudentsWithHomework = function() {
  console.log('Help help help');
}

function finishMondayEvening(functionThatIsParameter) {
  functionThatIsParameter();
  // finishMondayEvening,(anonymous)
  goForARun();
  // finishMondayEvening,(anonymous)
  helpStudentsWithHomework();
  // helpStudentsWithHomework,finishMondayEvening,(anonymous)
  console.log('done for today')
}

// (anonymous)
finishMondayEvening(watchBreakingBad);
// (anonymous)

/*

watchFirstEpisode (call_stack.js:4)
watchBreakingBad (call_stack.js:9)
finishMondayEvening (call_stack.js:22)
(anonymous) (call_stack.js:32)
*/
/*
goForARun (call_stack.js:14)
finishMondayEvening (call_stack.js:24)
(anonymous) (call_stack.js:32)
*/

/*console-output
Watching Breaking bad

Watch first episode

No more for today

Im running! look at me!

Help help help

done for today*/