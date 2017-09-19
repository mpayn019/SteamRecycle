var grid = document.querySelector('.grid');

var gridMason = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
});

imagesLoaded(grid).on('progress', function () {
    gridMason.layout();
})