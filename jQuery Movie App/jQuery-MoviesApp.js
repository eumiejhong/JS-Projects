$(function() {
    $("#new-movie-form").on("submit", function(evt) {
        evt.preventDefault();
        let movieTitle = $("#movie-title").val();
        console.log(movieTitle);
        let movieRating = $("#movie-rating").val();
        const li = $("<li/>");

        if(movieTitle.length < 2) {
            alert('Must be at least 2 characters!');
        }
        else {
            li.append(movieTitle + ' ');
            li.append(movieRating + ' stars');
            li.attr('data-title', movieTitle);
            li.attr('data-rating', movieRating);

            li.append($("<button/>").text("Delete").click(function(){li.remove()}))
            $("ol").append(li);
        }
        $("input[name], select").val(null);
    });

    $("#sort-by-title").click(function(){
        const result = $('ol li').sort(function (a, b) {
            return $(a).data('title').toLowerCase() > $(b).data('title').toLowerCase()
         });

         $("ol").html(result);
    });
    $("#sort-by-highest-title").click(function(){
        const result = $('ol li').sort(function (a, b) {
            return $(a).data('title').toLowerCase() < $(b).data('title').toLowerCase()
         });

         $("ol").html(result);
    });
    $("#sort-by-rating").click(function() {
        console.log('yay!')
        const result = $('ol li').sort(function (a, b) {
            console.log(a, b);
            return parseInt($(a).data('rating')) > parseInt($(b).data('rating'));
         });

         $("ol").html(result);
    })
    $("#sort-by-highest-rating").click(function() {
        console.log('yay!')
        const result = $('ol li').sort(function (a, b) {
            console.log(a, b);
            return parseInt($(a).data('rating')) < parseInt($(b).data('rating'));
         });

         $("ol").html(result);
    })


})