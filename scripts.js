const searchBar = $('#search-bar');
const images = $('a');

searchBar.keyup(function() {
    let searchTerm = searchBar.val().toLowerCase();
        images.show();
        if (searchTerm !== '') {
            images.not('[data-caption*="' + searchTerm + '"]').hide();
        }
    }
);

$('[data-fancybox="gallery"]').fancybox({
    loop: 'true',
    transitionEffect: 'slide'
});

