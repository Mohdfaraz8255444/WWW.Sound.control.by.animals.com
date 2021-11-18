function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/YlqqvC0ol/model.json",modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
     
}
function gotResults(error,results){
    console.log("gotResults")
    if(error){
        console.error(error);

    }
    else{
        console.log(results);
        ramdom_number_r= Math.floor(Math.random()*255)+1
        ramdom_number_g= Math.floor(Math.random()*255)+1
        ramdom_number_b= Math.floor(Math.random()*255)+1
        document.getElementById("result_label").innerHTML="I Can Hear-"+results[0].label;
        document.getElementById("result_confindence").innerHTML="Accurcy"+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+ramdom_number_r+","+ramdom_number_g+","+random_number_b+")";
        document.getElementById("result_confindence").style.color="rgb("+ramdom_number_r+","+ramdom_number_g+","+random_number_b+")";
        
        
    }
    
}