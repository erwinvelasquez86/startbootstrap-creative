


$('#rockbutton').click(function(){
    //  $("#winner").text("")
    // $("#player1").addClass("none")
    //  $("#computer").addClass("none")
    console.log('click')
    turn('rock')
})

$('#paperbutton').click(function(){
    // $("#winner").text("")
    //  $("#player1").addClass("none")
    //   $("#computer").addClass("none")
    console.log('click')
    turn('paper')
})

$('#scissorbutton').click(function(){
    // $("#winner").text("")
    // $("#player1").addClass("none")
    //  $("#computer").addClass("none")
    console.log('click')
    turn('scissor')
})

function turn(choice){
    console.log('choice',choice)
    console.log('turn')
    if (choice==="rock"){
        $("#player1").text("Rock")
        $("#player1").removeClass("none")
        
    }
     if (choice==="paper"){
        $("#player1").text("Paper")
        $("#player1").removeClass("none")
     }
      if (choice==="scissor"){
        $("#player1").text("Scissor")
        $("#player1").removeClass("none")


      }
      var computerChoice=Math.floor(Math.random()*(4-1)+1)
      
        if (computerChoice===1){
        $("#computer").text("Rock")
        $("#computer").removeClass("none")
        
    }
     if (computerChoice===2){
        $("#computer").text("Paper")
        $("#computer").removeClass("none")
     }
      if (computerChoice===3){
        $("#computer").text("Scissor")
        $("#computer").removeClass("none")

      }
      checkWin()
      
}

function checkWin(){
    console.log ("checkWin")
    var play1 = $("#player1").text()
    var comp = $("#computer").text()
    console.log('play1', play1)
    console.log('comp', comp)

    if (play1 === "Rock" && comp === "Paper"){
        $(".victor").text("Computer Wins!")
        return
    }
     if (play1 === "Paper" && comp === "Rock"){
        $(".victor").text("Player1 Wins!")
        return
    }
            if (play1 === "Scissor" && comp === "Paper"){
        $(".victor").text("Player1 Wins!")
        return
    }
        if (play1 === "Paper" && comp === "Scissor") {
        $(".victor").text("Computer Wins!")
        return
    }
            if (play1 === "Rock" && comp === "Scissor"){
        $(".victor").text("Player1 Wins!")
        return
    }
            if (play1 === "Scissor" && comp === "Rock"){
        $(".victor").text("Computer Wins!")
        return
    }
        if (play1 === comp){
        $(".victor").text("Tie!")
        return
    }
}













