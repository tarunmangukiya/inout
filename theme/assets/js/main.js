$(function () {
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