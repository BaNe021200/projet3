class Timer{
    constructor(display){
        this.duration = sessionStorage.getItem("remainTime") || 60*20;
        this.display = display;
       console.log(this.display);
        stopTimerStorage(this);
        listenTimerEvents(this);
       
        
    }
    startTimer(){
       
        this.timer = this.duration/*, this.minutes, this.seconds*/;
        this.intervalID = setInterval(function () {
            this.minutes = parseInt(this.timer / 60, 10)
            this.seconds = parseInt(this.timer % 60, 10);

            this.minutes = this.minutes < 10 ? " 0" + this.minutes : this.minutes;
            this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

            this.display.innerHTML= "&nbsp;" + this.minutes + ":" + this.seconds+ "&nbsp;";
           sessionStorage.setItem("remainTime", this.timer);
            if (--this.timer < 0) {

               
                this.stopTimerByCountDown();
                
            } 
            
            
        }.bind(this), 1000);
        
       
        
        }
    
   TimerStorage(){
        if (sessionStorage.getItem("remainTime")!== null){
            new Timer(document.getElementById("timer"));
            
            this.stopTimerByUser();
        }
    }
   
    stopTimerByCountDown(intervalID,cancelLocation){
        clearInterval(this.intervalID);
        sessionStorage.clear();
        view.cancelCountDown();
        document.getElementById("canvas").classList.remove("disabledMouse");
        var cancelLocationByCountDown =document.getElementById("cancelLocationByCountDown");
        cancelLocationByCountDown.classList.remove("hiddenDisplay");
        cancelLocationByCountDown.classList.add("visibleDisplay");
        setTimeout(function () {
            cancelLocationByCountDown.classList.remove("visibleDisplay");
            cancelLocationByCountDown.classList.add("hiddenDisplay");
            
        }.bind(this), 5000);
    }

    stopTimerByUser(intervalID){
        clearInterval(this.intervalID);
        sessionStorage.clear();
       if (sessionStorage.getItem("remainTime")!== null){
            this.duration=60*20;
        }
    }
    
}