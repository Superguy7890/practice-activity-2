function back(){
    window.location="activity_1.html";
}
function get_score(){
    score=localStorage.getItem("score");
    document.getElementById("Update").innerHTML="<h4>score-"+score+"</h4>"
}