$("#filmtable").DataTable({
    "ajax" : "data/filmdaten.json",
    "aLengthMenu": [5, 10, 25, 50, 75, "All"],
    "iDisplayLength": 5,
    "aaSorting": [1,'desc']
});

$(".tooltip").tooltipster({
	content: $("#plakat").detach()
});
