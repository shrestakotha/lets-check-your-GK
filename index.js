var r = require("readline-sync");
var username=r.question("may i have your name?");
console.log("welcome "+username+" Lets check your strength in GK!!");
var score =0;
var userAnswer=["Which one is the smallest ocean in the World?","In which ocean Bermuda Triangle region is located?","Which country is also known as the Land of Rising Sun?","Which country is known as the Land of Thunderbolts?","Which continent has the highest number of countries?","Total number of oceans in the World is?"]
var originalAnswer=["arctic","atlantic","japan","bhutan","africa","5"]
var highest =[
  {
  name : "shresta",
  total: 6,
}, 
{
  name :"mom" ,
  total : 5 ,}
]
function play(userAnswer,originalAnswer){
  if (userAnswer==originalAnswer){
    console.log("correct");
    score=score+1;
    
  }else{
    console.log("oops you got it wrong "+username+ " !");
    console.log("the correct answer is "+originalAnswer);
  }
}
for (var i=0;i<=5;i++){
  play(r.question(userAnswer[i]),originalAnswer[i]);
}

if (score >= highest.total){
  console.log("you know  very well about me "+username);
  console.log("your score is "+score);
}else {
  console.log("hey your score is "+score)
}
console.log("thank you for playing :-)");