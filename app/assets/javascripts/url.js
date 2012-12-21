$(document).ready(function () {
	
	getURL = function (id) {
	    $.ajax({
	        url:'/friends/' + id + '/get_url.json',
	        success:function (response) { $('img#image-' + id).attr('src',response); },
	        error:function (data) { alert('ERROR'); }
	    });
	}
	$('div.friend .front a img').each(function () {
		var altVal = $(this).attr("alt");
		
		if (altVal == 'Missing') {
			var imgId = $(this).parent().parent().parent().attr("id");
			getURL(imgId)
		}
		
	});

});
