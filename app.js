$(document).ready(function(){
  var temp=false;
  var countTie=0; // use this variable to count no of tie matches
  var countX=0;  // use this variable to count no of matches player X won
  var countO=0; // use this variable to count no of matches player O won
  var match="notTie"; // this variable gets updated when match ties and used in checkTie()

  $(".btn").click(function(){// when the start button gets clicked disable the start button and the game begins
    $( ".container div span" ).empty();
    $(".won").empty();
    $(".btn").css({"opacity": "0.6","cursor": "not-allowed"});
    computerTurn();
  });
  $(".reset").click(function(){ // resets the whole game
    reset();
    $(".btn").css({"opacity": "1","cursor": "allowed"});
  });

  function checkTie(){ // check if the game is tie or  not and updates 'match' varibale when tie
  var d1,d2,d3,d4,d5,d6,d7,d8,d9;

    d1 = $("#1").text();
    d2 = $("#2").text();
    d3 = $("#3").text();
    d4 = $("#4").text();
    d5 = $("#5").text();
    d6 = $("#6").text();
    d7 = $("#7").text();
    d8 = $("#8").text();
    d9 = $("#9").text();
    if(d1!=''&&d2!=''&&d3!=''&&d4!=''&&d5!=''&&d6!=''&&d7!=''&&d8!=''&&d9!=''){
      countTie++;
      $(".won").empty();
      $(".won").append("<h3>The game is Tie</h3>");
      sound('wrong');
      $(".tie-score").empty();
      $(".tie-score").append(countTie);
      $(".btn").css({"opacity": "1","cursor": "allowed"});
      match="tie";
      return match;
    }

  }

  function checkToWin(){ // check noughts or X's are aligned correctly and shows the winning message whoever aligned it first.
    var d1,d2,d3,d4,d5,d6,d7,d8,d9;
    d1 = $("#1").text();
    d2 = $("#2").text();
    d3 = $("#3").text();
    d4 = $("#4").text();
    d5 = $("#5").text();
    d6 = $("#6").text();
    d7 = $("#7").text();
    d8 = $("#8").text();
    d9 = $("#9").text();
  if(d1=="X"&&d2=="X"&&d3=="X"){
      sound('wrong');
      blink_text(1,2,3);
      playerX();
      return;
    }else if(d1=="O"&&d2=="O"&&d3=="O"){
      sound('wrong');
      blink_text(1,2,3);
      playerO();
      return;
    }else if(d4=="X"&&d5=="X"&&d6=="X"){
      sound('wrong');
      blink_text(4,5,6);
      playerX();
      return;
    }else if(d4=="O"&&d5=="O"&&d6=="O"){
      sound('wrong');
      blink_text(4,5,6);
      playerO();
      return;
    }else if(d7=="X"&&d8=="X"&&d9=="X"){
      sound('wrong');
      blink_text(7,8,9);
      playerX();
      return;
    }else if(d7=="O"&&d8=="O"&&d9=="O"){
      sound('wrong');
      blink_text(7,8,9);
      playerO();
      return;
    }else if(d1=="X"&&d5=="X"&&d9=="X"){
      sound('wrong');
      blink_text(1,5,9);
      playerX();
      return;
    }else if(d1=="O"&&d5=="O"&&d9=="O"){
      sound('wrong');
      blink_text(1,5,9);
      playerO();
      return;
    }else if(d3=="X"&&d5=="X"&&d7=="X"){
      sound('wrong');
      blink_text(3,5,7);
      playerX();
      return;
    }else if(d3=="O"&&d5=="O"&&d7=="O"){
      sound('wrong');
      blink_text(3,5,7);
      playerO();
      return;
    }else if(d1=="X"&&d4=="X"&&d7=="X"){
      sound('wrong');
      blink_text(1,4,7);
      playerX();
      return;
    }else if(d1=="O"&&d4=="O"&&d7=="O"){
      sound('wrong');
      blink_text(1,4,7);
      playerO();
      return;
    }else if(d2=="X"&&d5=="X"&&d8=="X"){
      sound('wrong');
      blink_text(2,5,8);
      playerX();
      return;
    }else if(d2=="O"&&d5=="O"&&d8=="O"){
      sound('wrong');
      blink_text(2,5,8);
      playerO();
      return;
    }else if(d3=="X"&&d6=="X"&&d9=="X"){
      sound('wrong');
      blink_text(3,6,9);
      playerX();
      return;
    }else if(d3=="O"&&d6=="O"&&d9=="O"){
      sound('wrong');
      blink_text(3,6,9);
      playerO();
      return;
    }else{
      checkTie();
      return match==="tie"?(match='notTie'):(temp===false?computerTurn() : humanTurn());

    }
  }

  function computerTurn(){ // logic for computer playing
    var getNumber = Math.floor(Math.random() * 9 + 1);
    if($('#'+getNumber).text()===''){
      $('#'+getNumber).append("O");
      sound('blue');
      temp=true;
      checkToWin();

    }else{
      computerTurn();
    }
  }

  function humanTurn(){ // Player X logic to play the game
    $(".entries").click(function(){
      var getDivID=$(this).find("span").attr('id');
      console.log(getDivID);
      if(getDivID && ($("#"+getDivID).text()==='')){
      $("#"+getDivID).append("X");
        sound('blue');
        temp=false;
        checkToWin();

      }
    });
  }

  function sound(getSound){ // make two different sounds when wins or make entries
    var audio = new Audio("sounds/" +getSound+ ".mp3");
    audio.play();
  }


  function blink_text(blink1,blink2,blink3) { // bink the correctly aligned entries to show user the game is over
    console.log("blink:"+blink1);
      $('#'+blink1).fadeOut(500);
      $('#'+blink2).fadeOut(500);
      $('#'+blink3).fadeOut(500);
      $('#'+blink1).fadeIn(500);
      $('#'+blink2).fadeIn(500);
      $('#'+blink3).fadeIn(500);
      sound('wrong');
  }


  function reset(){ // resets the whole game
    $( ".container div span" ).empty();
    $(".won").empty();
    $(".Xscore").empty();
    $(".Oscore").empty();
    $(".tie-score").empty();
  }

  function playerX(){ // when player X won removing all the msgs and enable start button again
      countX++;
      $(".won").append("<h3>Palyer X Won</h3>");
      $(".Xscore").empty();
      $(".Xscore").append(countX);
      $(".btn").css({"opacity": "1","cursor": "allowed"});
  }

  function playerO(){ // when player O won removing all the msgs and enable start button again
    countO++;
    $(".won").append("<h3>Palyer O Won</h3>");
    $(".Oscore").empty();
    $(".Oscore").append(countO);
    $(".btn").css({"opacity": "1","cursor": "allowed"});
  }
});
