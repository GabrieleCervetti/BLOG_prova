
$(document).ready(function () {

    $(".send-comment").click(function () {
		var nickText = $("#formGroupExampleInput").val();
        var commentText = $("#formGroupExampleInput2").val();
        var commentContainer = $(".comments-container");
        var commentRow = '<li class="list-group-item"><a href="#" class="badge badge-light">' + '</a>' + nickText + " scrive: </br> " + commentText + '</li>';

        commentContainer.append(commentRow);

    });

});

