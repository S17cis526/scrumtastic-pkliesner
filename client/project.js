
module.exports = {
    list
};

/* Given a list of projects, create a table */
function list(projects){
    var table = $('<table>').addClass('table');
    var head = $('<tr>').append('<td>Name</td>').appendTo(table);
    projects.forEach(function(project) {
        var row = $('<tr>').append(
            $('<td>').text(project.name)
        ).appendTo(table);
    });
    return table;
}