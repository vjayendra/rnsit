$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   

    $(".comedk-details,.cet-details,.dept-details-holder").hide();
  
                                  

                        /*ADMISSIONS SECTION BUTTON - HOVERING*/
    $(".comedkbtn").hover(function(){
        $(".cetbtn").hide();
        $("#comedk-details").css("z-index", "1").fadeIn(1000);
    },
    function(){
        $("#comedk-details").hide().css("z-index", "-1");
        $(".cetbtn").fadeIn();
    });

    $(".cetbtn").hover(function(){
        $(".comedkbtn").hide();
        $("#admission-left-banner").hide();
        $("#cet-details").css("z-index", "1").fadeIn();
    },
    function(){
        $("#cet-details").hide().css("z-index", "-1");
        $(".comedkbtn").fadeIn(500);    
        $("#admission-left-banner").fadeIn();
    });

                                            /*ACADEMICS SECTION DEPARTMENT-IMAGE HOVERING*/

    $("#civil").click(function(){
        $("#civil-details").toggle(300);
    });
    $("#cse").click(function(){
        $("#cse-details").toggle(300);
    });
    $("#ece").click(function(){
        $("#ece-details").toggle(300);
    });
    $("#ele").click(function(){
        $("#ele-details").toggle(300);
    });
    $("#ise").click(function(){
        $("#ise-details").toggle(300);
    });
    $("#ite").click(function(){
        $("#ite-details").toggle(300);
    });
    $("#me").click(function(){
        $("#me-details").toggle(300);
    });
    $("#sciences").click(function(){
        $("#sciences-details").toggle(300);
    });


                /*GOOGLE - MAP Script*/
    var myCenter=new google.maps.LatLng(12.9011,77.5181);
    var marker;

    function initialize()
    {
    var mapProp = {
      center:myCenter,
      zoom:14,
      mapTypeId:google.maps.MapTypeId.ROADMAP
      };

    var map=new google.maps.Map(document.getElementById("map"),mapProp);

    var marker=new google.maps.Marker({
      position:myCenter,
      });

    marker.setMap(map);
    }

    google.maps.event.addDomListener(window, 'load', initialize);

                                    


});


