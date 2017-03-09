function setSidemenuToggling() {
    $('.side-submenu .sidebar-title a').click(function(e){
        e.preventDefault();
        var id = $(e.target).attr('data-toggle');
        console.log(id);
        var submenu = $(id);
        submenu.hasClass('active') ? submenu.removeClass('active') : submenu.addClass('active');
    })
}

$(document).ready(function () {
    setSidemenuToggling();
});