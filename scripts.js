const searchBar = $('#search-bar');
const images = $('a');

searchBar.keyup(function() {
    let searchTerm = searchBar.val().toLowerCase();
    images.filter(function ( index )
        {
            $(this).toggle($(this).attr('data-caption').toLowerCase().indexOf(searchTerm) > -1);
        }
    );
}
);

$('[data-fancybox="gallery"]').fancybox({
    loop: 'true',
    transitionEffect: 'slide'
});

