
var player1="" , player2="", turn = "";
var grid =  [[0,0,0],[0,0,0],[0,0,0]];
var hasWinner = 0, moveCount=0;

function boardMsg(x){
  return $("#board").text(x);
}

function init(){
  turn = "";
  grid =  [[0,0,0],[0,0,0],[0,0,0]];
  boardMsg("");
  $(".col").map(function() {
    $(this).text("");
  }).get();
  hasWinner = 0;
  moveCount=0;
}
function setTurn(){
  var r = Math.floor((Math.random() * 2) + 1);
  hasWinner=0;
  if(r==1){
    turn = player1Name;
    boardMsg(player1Name+"'s turn now!");
  }
  else{
    turn = player2Name;
    boardMsg(player2Name+"'s turn now!");
  }
}
$("#playButton").click(function (){

  if(hasWinner==1){
    init();
  }

  player1Name = $("#player1").val();
  player2Name = $("#player2").val();

  if(player1Name=="" || player2Name==""){
    alert("Please set player all the names.");
    return;
  }

  setTurn();
});
$(".col").click(function (){

  if(player1Name=="" || player2Name==""){
    alert("Please set player all the names.");
    return;
  }

  var row = $(this).parent().index();
  var col = $(this).index();

  if(grid[row][col]!==0){
    alert("This position is taken. Please try other position.");
    return;
  }
  if(hasWinner==1){
    alert("Please click play again");
    return;
  }

  if(turn==player1Name){
    moveCount++;
    $(this).text("O");
    grid[row][col] = 1;
    var ifWon = winnerCheck(1,player1Name);
    if(!ifWon){
      if(moveCount>=9){
        boardMsg("Match Drawn!");
        moveCount=0;
        $("#playButton").text("Play again");
        hasWinner=1;
        return;
      }else{
        turn = player2Name;
        boardMsg(player2Name+"'s turn now!");
      }
      return;
    }
    else{
      return;
    }
  }
  else if(turn==player2Name){
    moveCount++;
    $(this).text("X");
    grid[row][col] = 2;
    var ifWon = winnerCheck(2,player2Name);
    if(!ifWon){
      if(moveCount>=9){
        boardMsg("Match Drawn!");
        moveCount=0;
        $("#playButton").text("Play again");
        hasWinner=1;
        return;
      }else{
        turn = player1Name;
        boardMsg(player1Name+"'s turn now!");
      }
      return;
    }
    else{
      return;
    }
  }
});



//
//
//
//
//
// var Game = (function() {
//
//   var togglePlayer = function(message){
//     $('.message').html(message);
//   };
// })
//
//
//
// var gameOver = function() {
//   var winCases =  [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[7,5,3]];
//   tableIndex = -1;
//
//   $.each(winCases, function(index, winCases) {
//     if (allEqual(winCase)) {
//      tableIndex = index;
//      return false;
//     }
//   });
//   if (tableIndex !== -1) {
//     return winCases[ tableIndex];
//   }else if (moves === 9) {
//     return true;
//   }
//     else {
//     return false;
//   }
// };
//
//
//
// $(document).ready(function() {
//
//   $("#1").click(function() {
//     $("#1").append('<img src="img/playerX.jpg">');
//   });

// });
// var array1= [19, 18, 11];
// undefined
// var array2= [19, 11, 18];
// undefined
// if(array1.sort().join(',')=== array2.sort().join(',')){
//     alert('same members');
// }
// else alert('not a match');
