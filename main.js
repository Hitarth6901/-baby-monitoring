aawaz = ""
function preload(){
    aawaz.loadSound()
}

function setup(){
    Canvas=createCanvas(380,380)
    Canvas.center()
    video= createCapture(VIDEO)
    video.size(380,380)
    video.hide()
    objectDetector =ml5.objectDetector('cocossd',modelloaded)
    document.getElementById("detected").innerHTML="Status: Detecting Object"
    
}
function modelloaded(){
console.log("modelLoaded")
Status = true
}

function gotresult(error,result){
    if (error){
        console.error(error)
    }
    function draw(){
        image(video,0,0,380,380)
        
        if(Status!= ""){
            r=random(255)
            g=random(255)
            b=random(255)
            objectDetector.detect(video,gotResult())
        for(i=0;i<object.length;i++){
            document.getElementById("detected").innerHTML = "Status: detecting objects"
            fill(r,g,b)
            stroke(r,g,b)
            automatic = floor(object[i].confidence*100)
            text(object[i].label+""+automatic+"%",object[i].x,object[i].y)
            noFill()
            
            rect(object[i].x,object[i].y,object[i].width,object[i].height)
        if(objects[i].label==person)
        {document.getElementById("found").innerHTML= "Baby Found"
    console.log("stop")
                      aawaz.stop()}
                      else{
                        document.getElementById("found").innerHTML= "Baby not Found"
                        console.log("play")
                                          aawaz.play()
                      }
        }
        if(objects.length==0){
            document.getElementById("found").innerHTML= "Baby not Found"
                        console.log("play")
                                          aawaz.play()
        }
    }
}
}

