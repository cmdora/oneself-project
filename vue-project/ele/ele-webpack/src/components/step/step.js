$('#form').submit(function (e) {
	e.preventDefault()

	let url = $(this).attr('action')
	let type = $(this).attr('method')
	let serializeObj = {}
	$.each($(this).serializeArray(), function (index, item) {
		serializeObj[item.name] = item.value
	})

	$.ajax({
		url: url,
		type: type,
		data: serializeObj,
		dataType: "json",
		headers: {
	        contentType: "application/json; charset=utf-8"
	    },
		success: function(data) {
			console.log(data)
		}
	})
})