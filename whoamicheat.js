$(document).ready(function() {
   (waic=function(){var e=$("#what_guesses input[name='user_id']").toArray().map(function(e){return $(e).val()});for(var t=0;t<4;t++){$.get("https://internal.isfit.org/users/"+e[t]+".html",function(e){var t=$(e).find(".user h1").text();var n=$(e).find(".picture img").attr("src");if(n===$(".picture img").attr("src")){$("input[value='"+t+"'").click()}})}})()
});