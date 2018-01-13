$(function(){
	var quotes = "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?"
	$.getJSON(quotes,function(res){
		$("#quote").append('<blockquote>'+res.quoteText+"</blockquote>");
		$("#author").append("<i><h5><q>"+res.quoteAuthor+"</q></h5></i>");
	$("#generate").click(function(){
		$("#quote").empty();
		$("#author").empty();
		$.getJSON(quotes,function(res){
		$("#quote").append('<blockquote>'+res.quoteText+"</blockquote>");
		if(res.quoteAuthor!=="")
			$("#author").append("<i><h5><q>"+res.quoteAuthor+"</q></h5></i>");
		else
			$("#author").append("<i><h5><q>Unknown Author</q></h5></i>");
	});
	});
});
});