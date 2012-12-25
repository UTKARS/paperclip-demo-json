$(document).ready(function () {
	
	getURL = function (id) {
	    $.ajax({
	        url:'/friends/' + id + '/get_url.json',
	        success:function (response) { $('img[xyz="true"][id="' + id +'"]').attr('src',response); },
	        error:function (data) { alert('ERROR'); }
	    });
	}

	checkImages();
	var interval = setInterval(function(){checkImages()},3000);

	function checkImages(){
		var control = 0;
		$('img[xyz="true"]').each(function () {
			var altVal = $(this).attr("alt");
			if (altVal == 'Missing') {
				var imgId = $(this).attr("id");
				getURL(imgId)
				control = control + 1;
			}
		});	
		if (control==0){ clearInterval(interval) }
	}
});
