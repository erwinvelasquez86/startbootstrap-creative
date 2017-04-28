


$("#search").submit(function(){
    event.preventDefault()
    $("img").remove()
    $("p").remove()

    var $artist=$("#search :input")
    console.log ($artist)
    var $url="https://api.spotify.com/v1/search?q=" + $artist[0].value + "&type=artist"
    $.ajax({
         url: $url,
        datatype: "JSONP"
    })
    .done(function(data){
        console.log (data)
        var $name= $("<p>",{text: data.artists.items[0].name})
        $("#main").append($name)

    
        var imagesrc=data.artists.items[0].images[0].url
        var $image=$("<img>",{src: imagesrc})
        $("#main").append($image)

        var genreHeader=$("<p>GENRES</p>")
        $("#main").append(genreHeader)
        var genres=data.artists.items[0].genres;
        for (var i=0;i<genres.length;i+=1){
            var $genre=$("<p>",{class:"genres"})
            $("#main").append($genre)
            $("p").last().text(genres[i])
        }
    })
    .fail(function(data){
        console.log ("error",data)
    })
    $("#input").val("")
})



