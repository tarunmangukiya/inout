$(function () {

	$(window).on("scroll", function(e) {
	    var wrap = $(".static-header");

	    //console.log($(this).scrollTop());

	    if ($(this).scrollTop() > 500) {
	        wrap.addClass("fix-header");
	    } else {
	        wrap.removeClass("fix-header");
	    }
	});

	if($('.file-input').length){
		$('.file-input input[type=file]').on('click', function(e) {
			e.stopPropagation();
		});

		$('.file-input').on('click', function(e) {
			$(this).parent().find('input[type=file]').click();
		});

		$('.file-input input[type=file]').on('change', function(e) {
			var fileName = $(this).val().split('/').pop().split('\\').pop();
			var fileNameHolder = $(this).parent().find('span.file-name-holder');
			if(fileNameHolder.length){
				fileNameHolder.text(fileName);
			}
			else{
				$(this).parent().append('<span class="file-name-holder">'+fileName+'</span>');
			}
		});
	}
});