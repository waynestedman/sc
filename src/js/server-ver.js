<script type="text/javascript" xml="space">// <![CDATA[
require([
  'jquery',
  'slick'
  ], function ($) {
jQuery(document).ready(function(){
jQuery('#ingredientsDesc').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 2000,
    fade: true,
    cssEase: 'ease-in-out',
    pauseOnHover: true
});
  jQuery('#commentsSlider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    speed: 1200,
    cssEase: 'ease-in-out'
   }); // comments slider
});
});
// ]]></script>

// *********************** Page Bottom *************************************** //
<script type="text/javascript" xml="space">// <![CDATA[
    function openCare(evt, careName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("mainTabContent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("mainTablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(careName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    // Get the element with id="defaultOpenMain" and click on it
    document.getElementById("defaultOpenMain").click();
// ]]></script>
<script type="text/javascript" xml="space">// <![CDATA[
    function openFace(prodName1, elmnt) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.backgroundColor = "#EEEEEE";
            tablinks[i].style.color = "#9E9E9E";
            tablinks[i].style.borderBottom = "none";
        }
        document.getElementById(prodName1).style.display = "block";
        elmnt.style.borderBottom = "2px solid #913788";
        elmnt.style.color = "#913788";
        elmnt.style.backgroundColor = "#FFFFFF";
    }
    // Get the element with id="defaultOpen1" open it & set active
    document.getElementById("defaultOpen1").click();
// ]]></script>
<script type="text/javascript" xml="space">// <![CDATA[
    function openTarget(prodName2, elmnt) {
        var i, targetcontent, targetlink;
        targetcontent = document.getElementsByClassName("targetcontent");
        for (i = 0; i < targetcontent.length; i++) {
            targetcontent[i].style.display = "none";
        }
        targetlink = document.getElementsByClassName("targetlink");
        for (i = 0; i < targetlink.length; i++) {
            targetlink[i].style.backgroundColor = "#EEEEEE";
            targetlink[i].style.color = "#9E9E9E";
            targetlink[i].style.borderBottom = "none";
        }
        document.getElementById(prodName2).style.display = "block";
        elmnt.style.borderBottom = "2px solid #913788";
        elmnt.style.color = "#913788";
        elmnt.style.backgroundColor = "#FFFFFF";
    }
    // Get the element with id="defaultOpen2" open it & set active
    document.getElementById("defaultOpen2").click();
// ]]></script>
<script type="text/javascript" xml="space">// <![CDATA[
    function openRegimen(evt, regimenName) {
        var i, regimencontent, regimenlinks;
        regimencontent = document.getElementsByClassName("regimenTabContent");
        for (i = 0; i < regimencontent.length; i++) {
            regimencontent[i].style.display = "none";
        }
        regimenlinks = document.getElementsByClassName("regimenTablinks");
        for (i = 0; i < regimenlinks.length; i++) {
            regimenlinks[i].className = regimenlinks[i].className.replace(" active", "");
        }
        document.getElementById(regimenName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    // Get the element with id="defaultOpenRegimen" and click on it
    document.getElementById("defaultOpenRegimen").click();
// ]]></script>
