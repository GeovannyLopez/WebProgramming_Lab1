$(document).ready(function () {

    var table = $('#example').DataTable({
        "columnDefs": [{
            "targets": 5,
            "data": null,
            "render": function (data, type, row, meta) {
                let viewButton = "<a class=\"btn btn-primary\" href=\"#\" onclick=\"DetailsFunction(" + row[0] + ");\">" +
                    "<i class=\"far fa-eye\"></i></a>";
                let editButton = "<a class=\"btn btn-info\" href=\"#\" onclick=\"EditFunction(" + row[0] + ");\">" +
                    "<i class=\"fas fa-edit\"></i></a>";
                let deleteButton = "<a class=\"btn btn-danger\" href=\"#\" onclick=\"DeleteFunction(" + row[0] + ");\">" +
                    "<i class=\"fas fa-trash-alt\"></i></a>";
                return viewButton + editButton + deleteButton;
            }
        }]
    });
});

//CRUD functions 
function DetailsFunction(idSong){
    window.location.href = "Views/Song/Details.html";
}

function CreateFunction(){
    window.location.href = "Views/Song/Create.html";
}

function EditFunction(idSong){
    window.location.href = "Views/Song/Edit.html";
}

function DeleteFunction(idSong){
    window.location.href = "Views/Song/Delete.html";
}