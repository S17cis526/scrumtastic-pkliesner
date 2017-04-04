/* Main entry point */

var project = require('./project');

$.get('/projects', function(data){
    $('body').html(project.list(projects));
});