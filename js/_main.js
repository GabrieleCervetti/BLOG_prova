
$(document).ready(function () {

    $(".send-comment").click(function () {
		var nickText = $("#formGroupExampleInput").val();
        var commentText = $("#formGroupExampleInput2").val();
        var commentContainer = $(".comments-container");
        var commentRow = '<li class="list-group-item"><a href="#" class="badge badge-light">' + '</a>' + nickText + " scrive: </br> " + commentText + '</li>';

        commentContainer.append(commentRow);

    });
	
	$("#publishPostBtn").click(addPost);
	
});


function addPost(title,body)	{
	//creare un item HTML e aggiungerlo nel DOM.
	var title = $("#postTitle").val();
	var body = $("#postBody").val();
	
	var post = new Post(title, body, true);		//messi pubblici
	
	$("#articles").append("<h3>" + post.title + "</h3>");
	$("#articles").append("<p>" + post.body + "</p>");
}