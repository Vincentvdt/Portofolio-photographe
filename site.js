$(document).ready(function() {
  $(".mosaique-col").click(function() {
    $(".card-custom").removeClass("col-6 col-lg-4 col-xl-6");
    $(".card-custom").addClass("col-12");
  });

  $(".mosaique-grid").click(function() {
    $(".card-custom").removeClass("col-12");
    $(".card-custom").addClass("col-6 col-lg-4 col-xl-6");
  });

  $(".galery-nav").click(function(e) {
    e.preventDefault();
    $(".galery-nav.active").removeClass("active");
    $(this).addClass("active");

    var className = "." + this.id;
    $(".card-custom" + className).show();
    $(".card-custom:not(" + className + ")").hide();
  });

  $(".nav-anchor").click(function(e) {
    e.preventDefault();
    var attrAnchor = $(this).attr("href");
    $("section" + attrAnchor).show();
    $("section:not(" + attrAnchor + ")").hide();
  });

  $(".submit-custom").hover(
    function() {
      $(this).css({
        backgroundColor: "#ffc14d"
      });
      $(".submit-custom p").css({
        transform: "translateX(3px)",
        color: "#333333"
      });
      $(".submit-custom ion-icon").css({
        transform: "translateX(15px)",
        opacity: "1"
      });
    },
    function() {
      $(this).css({
        backgroundColor: ""
      });
      $(".submit-custom p").css({
        transform: "",
        color: ""
      });
      $(".submit-custom ion-icon").css({
        transform: "",
        opacity: ""
      });
    }
  );
});
