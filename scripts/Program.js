$(document).ready(function(){
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        $("a").hover(
            function(){
                $(this).css("text-decoration", "underline");
            },
            function(){
                $(this).css("text-decoration", "none");
            }
        );
    }
});