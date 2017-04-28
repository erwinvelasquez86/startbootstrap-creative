$('#plus').click(function(){
    var number=$("#num")
    number.html(parseInt(number.html())+1)
})

$('#minus').click(function(){
    var number=$("#num")
    number.html(parseInt(number.html())-1)
})

for (var i=0;i<3;i+=1){
    var $row= $('<tr>', {id: 'row'+i, class:'row'})
    $('#gameboard').append($row)
    for (var k=0;k<3;k+=1){
        var $square= $('<td>',{id: 'square'+i+k, class:'square'})
        $('#row'+i).append($square)
    }
}

$('.square').text("-")

var counter= 1;

$('.square').click(function(){
    if (counter%2!=0 && ($(this).text()==='-')){
        $(this).text('X')

    }   else if (($(this).text()==='-')){
        $(this).text('O')
    }
     counter +=1  
    if (checkwin()) {
       $('.square').text("-") 
       counter=1
    }
})

function checkwin(){
    if ($('#square00').text()==='X' &&$('#square01').text()==='X'&& $('#square02').text()==='X' ){
        alert('Player 1 Wins');
        increaseScores(1)
        return true
    }
    if ($('#square00').text()==='O' &&$('#square01').text()==='O'&& $('#square02').text()==='O' ){
        alert('Player 2 Wins');
        increaseScores(2)
        return  true
    }
    if ($('#square10').text()==='X' &&$('#square11').text()==='X'&& $('#square12').text()==='X' ){
        alert('Player 1 Wins');
        increaseScores(1)
        return  true
    }
    if ($('#square10').text()==='O' &&$('#square11').text()==='O'&& $('#square12').text()==='O' ){
        alert('Player 2 Wins');
        increaseScores(2)
                
        return  true
    }
    if ($('#square20').text()==='X' &&$('#square21').text()==='X'&& $('#square22').text()==='X' ){
        alert('Player 1 Wins');
        increaseScores(1)
        return  true
    }
    if ($('#square20').text()==='O' &&$('#square21').text()==='O'&& $('#square22').text()==='O' ){
        alert('Player 2 Wins');
        increaseScores(2)
        return  true
    }
    if ($('#square00').text()==='X' &&$('#square10').text()==='X'&& $('#square20').text()==='X' ){
        alert('Player 1 Wins');
        increaseScores(1)
        return  true
    }
    if ($('#square00').text()==='O' &&$('#square10').text()==='O'&& $('#square20').text()==='O' ){
        alert('Player 2 Wins');
        increaseScores(2)
        return  true
    }
    if ($('#square01').text()==='X' &&$('#square11').text()==='X'&& $('#square21').text()==='X' ){
        alert('Player 1 Wins');
        increaseScores(1)
        return  true
    }
    if ($('#square01').text()==='O' &&$('#square11').text()==='O'&& $('#square21').text()==='O' ){
        alert('Player 2 Wins');
        increaseScores(2)
        return  true
    }
    if ($('#square02').text()==='X' &&$('#square12').text()==='X'&& $('#square22').text()==='X' ){
        alert('Player 1 Wins');
        increaseScores(1)
        return  true
    }
    if ($('#square02').text()==='O' &&$('#square12').text()==='O'&& $('#square22').text()==='O' ){
        alert('Player 2 Wins');
        increaseScores(2)
        return  true
    }
    if ($('#square02').text()==='X' &&$('#square11').text()==='X'&& $('#square20').text()==='X' ){
        alert('Player 1 Wins');
        increaseScores(1)
        return  true
    }
    if ($('#square02').text()==='O' &&$('#square11').text()==='O'&& $('#square20').text()==='O' ){
        alert('Player 2 Wins');
        increaseScores(2)
        return  true
    }
    if ($('#square00').text()==='X' &&$('#square11').text()==='X'&& $('#square22').text()==='X' ){
        alert('Player 1 Wins');
        increaseScores(1)
        return  true
    }
    if ($('#square00').text()==='O' &&$('#square11').text()==='O'&& $('#square22').text()==='O' ){
        alert('Player 2 Wins');
        increaseScores(2)
        return  true
    }
    if (counter===10){
        alert ('Cats Game')
        return true
    }
    return false
}

function increaseScores(winner){
    if (winner===1){
        var $player=$('#player1score')
        $player.html(parseInt($player.html())+1)
    } else if (winner===2){
        var $player2=$('#player2score')
        $player2.html(parseInt($player2.html())+1)
    }
}





