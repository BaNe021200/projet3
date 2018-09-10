class Canvas{
    constructor(canvas){
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        
        this.clickX = new Array();
        this.clickY = new Array();
        this.clickDrag = new Array();
        
        this.paint;
        this.listenTouchEvents();
        this.listenMouseEvents();
        //this.validateReservation();
  
       
        listenCanvasEvents(this);
        ListenMapEventsCanvas(this);
    }
    
    listenTouchEvents(){
       
        
        this.canvas.addEventListener("touchstart",function(e){
            var mouseX = (e.targetTouches[0] ? e.targetTouches[0].pageX : e.changedTouches[e.changedTouches.length-1].pageX) - this.canvas.offsetLeft;
            var mouseY = (e.targetTouches[0] ? e.targetTouches[0].pageY : e.changedTouches[e.changedTouches.length-1].pageY) - this.canvas.offsetTop;
             
            this.paint = true;
            this.addClick(mouseX, mouseY);
            this.redraw();
            console.log("mouseDown : " + this.paint + " ; offsetleft = "+ this.canvas.offsetLeft+ " ; offsetTop = "+ this.canvas.offsetTop );
        }.bind(this));
 
        this.canvas.addEventListener("touchmove",function(e){
            if(this.paint){
                e.preventDefault();
                this.addClick((e.targetTouches[0] ? e.targetTouches[0].pageX : e.changedTouches[e.changedTouches.length-1].pageX) - this.canvas.offsetLeft,
                    (e.targetTouches[0] ? e.targetTouches[0].pageY : e.changedTouches[e.changedTouches.length-1].pageY) - this.canvas.offsetTop, true);
                this.redraw();
                
            }
        }.bind(this));      
 
        this.canvas.addEventListener("touchend",function(e){
            this.paint = false;
             
        }.bind(this));
 
       
        
       
       
        
      
    }
    listenMouseEvents(){
       
        
        this.canvas.addEventListener("mousedown",function(e){
            var mouseX = e.pageX - this.canvas.offsetLeft;
            var mouseY = e.pageY - this.canvas.offsetTop;
             
            this.paint = true;
            this.addClick(mouseX, mouseY);
            this.redraw();
            console.log("mouseDown : " + this.paint + " ; offsetleft = "+ this.canvas.offsetLeft+ " ; offsetTop = "+ this.canvas.offsetTop );
        }.bind(this));
 
        this.canvas.addEventListener("mousemove",function(e){
            if(this.paint){
                this.addClick(e.pageX - this.canvas.offsetLeft, e.pageY - this.canvas.offsetTop, true);
                this.redraw();
                
            }
        }.bind(this));      
 
        this.canvas.addEventListener("mouseup",function(e){
            this.paint = false;
             
        }.bind(this));
 
        this.canvas.addEventListener("mouseleave",function(e){
            this.paint = false;
        }.bind(this));
        
       
       
        
      
    }
    addClick(x, y, dragging){
        
        this.clickX.push(x);
        this.clickY.push(y);
        this.clickDrag.push(dragging);
        console.log("x = " +x +" ; y = " + y + " ; dragging = " + dragging);
      console.log("clickX = " + this.clickX.length + " ; clickY = " + this.clickY.length + " ; clickDrag = " + this.clickDrag.length);
    }
    redraw(){
        
        
       
         this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height); // Clears the canvas
            
            
        this.context.strokeStyle = "#000";
        this.context.lineJoin = "round";
        this.context.lineWidth = 1;
             
            
            
        for(var i=0; i < this.clickX.length; i++) {       
            this.context.beginPath();
            if(this.clickDrag[i] && i){
                this.context.moveTo(this.clickX[i-1], this.clickY[i-1]);
            }else{
                this.context.moveTo(this.clickX[i]-1, this.clickY[i]);
            }
            this.context.lineTo(this.clickX[i], this.clickY[i]);
            this.context.closePath();
            this.context.stroke();
           
        }
      this.validateReservation();
        
    }
    clearCanvas(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.clickX=[];
        this.clickY=[];
        this.clickDrag=[];
        document.getElementById("valider").classList.remove("enabledValidate")
    }
    validateReservation(){
       if(typeof this.clickX[0] !== "undefined" && this.clickX[0] !== null){
         var EnabledValidate = document.getElementById("valider");
           EnabledValidate.disabled = false;
           EnabledValidate.classList.add("enabledValidate");
       }else{
          document.getElementById("valider").disabled = true; 
       }
   }
  
    
    
    
}