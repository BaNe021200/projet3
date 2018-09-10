function initMap(){
    new Map({lat: 45.756891, lng: 4.855970},13, document.getElementById('map'));
 };

var remainTime = sessionStorage.getItem("remainTime");
console.log("Storage Time : " + remainTime);

console.log("Storage velo : " + sessionStorage.getItem("veloStation"));

function getStorage(map){
    
   
    if (sessionStorage.getItem("remainTime")!== null && sessionStorage.getItem("veloStation")!==null ) {
                    
       
        document.getElementById("canvas").classList.add("disabledMouse");
        document.getElementById("valider").disabled = true;
        document.getElementById("cancel").disabled = false;
        document.getElementById("countDown").classList.remove("hiddenDisplay");
        document.getElementById("countDown").classList.add("visibleDisplay");
        document.getElementById("veloStation").innerHTML= sessionStorage.getItem("veloStation");
                    
       var timerStorage = new Timer(document.getElementById("timer"));
        timerStorage.startTimer();
       
        
        
        console.log("clearStorage : " + sessionStorage.getItem("remainTime") + " ; "+ sessionStorage.getItem("veloStation"));
    }else{
      
        document.getElementById("cancel").disabled = true;  
    }
};

function stopTimerStorage(timer){
    if (sessionStorage.getItem("remainTime")!== null && sessionStorage.getItem("veloStation")!==null ){
        timer.stopTimerByUser();
    }
};

function ListenMapEvents(map){
    console.log(map);
    document.getElementById("valider").addEventListener("click",function(){
        
        view.validateLocation();
        map.timer.startTimer();
  });
};

function ListenMapEventsCanvas(canvas){
    document.getElementById("valider").addEventListener("click",function(){
         canvas.clearCanvas();
    });
   
};

function listenCanvasEvents(canvas){
    document.getElementById("clear").addEventListener("click", function(){
           
        canvas.clearCanvas();
        document.getElementById("valider").disabled = true;
    });
};
function listenTimerEvents(timer){
    document.getElementById("cancel").addEventListener('click', function(){
        
            view.cancelCountDown();
            view.cancelLocationByUser();
            timer.stopTimerByUser();
       
            console.log("clearStorage : " + sessionStorage.getItem("remainTime") + " ; "+ sessionStorage.getItem("veloStation"));
            
            setTimeout(function(){
             
            
            view.cancelInfoStorage();
        
            },3000);
        
        
            
            
            
    }); 
};
function listenPanelEvents(){
        var clickButtonLocation = document.getElementById("louer");
    clickButtonLocation.addEventListener('click', function(){
            var cadreElt = document.getElementById("cadre");
            cadreElt.classList.remove("hiddenDisplay");
            cadreElt.classList.add("visibleDisplay");
            clickButtonLocation.classList.add("hiddenDisplay");
            document.getElementById("valider").disabled = true;
            
        });
};
   


getStorage();

stopTimerStorage();
view.initInfopanel();
listenPanelEvents();
new Canvas(document.querySelector('canvas'));





