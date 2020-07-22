// mostrare / nascondere il menù principale.

// Al click mostra il menù principale.
$(".header-right>a").click(function() {
    $(".hamburger-menu").show("fast");
});

// Al click nasconde il menù principale.
$(".close").click(function() {
    $(".hamburger-menu").hide("slow");
});
