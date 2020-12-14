var ca=1;
var content = document.getElementById("exp_content");
 content.style.display = "none";
function fns_exp() {
  var elem = document.getElementById("btn_exp");
  
  if (ca) {
    elem.innerHTML = "Show less";
    ca=0;
    content.style.display = "block";
  } else {
    elem.innerHTML = "Lear more";
    ca=1;
    content.style.display = "none";
  }

}