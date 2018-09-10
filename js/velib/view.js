var view = {

    initInfopanel: function(){
        var startpanel = document.getElementById("rightPanelStart");
        startpanel.classList.add("visible");
        
        var idStationHidden = document.getElementById("idStation");
        idStationHidden.classList.add("hidden");
        var cadre = document.getElementById("cadre");
        cadre.classList.add("hiddenDisplay");
        
    },
    
    getInfoPanel: function(newMarker,station){
        var InfoPanel = document.getElementById('rightPanel');
        google.maps.event.addListener(newMarker, 'click',function(){
            
            var startpanel = document.getElementById("rightPanelStart");
            startpanel.classList.remove("visible");
            startpanel.classList.add("hidden");
            var idStationHidden = document.getElementById("idStation");
            idStationHidden.classList.remove("hidden");
           
            var infoStationName= document.getElementById("idStationName");
            infoStationName.textContent = station.name;
            
            
            var infoStationNameAddress = document.getElementById("idStationAddress");
            infoStationNameAddress.textContent = station.address;
            
            
            var infoStationStatus =  document.getElementById("InfoStat");
            
            if(station.status === "OPEN"){
                 infoStationStatus.classList.remove("closed");
                infoStationStatus.textContent="Station Ouverte";
               
            }
            
            else{
                infoStationStatus.classList.add("closed");
                infoStationStatus.textContent = "Station Fermée";
                
            };
           
        
            if (station.status === "CLOSED"){
                
                document.getElementById("idStationTech").style.visibility="hidden";
                
            }
            else{
                document.getElementById("idStationTech").style.visibility="visible";
            }
            var infoStationBikeStand = document.getElementById("infoBS");
            infoStationBikeStand.textContent = station.bikeStands;
            
            
            var infoStationAvailableBikeStands = document.getElementById("InfoABS")
            infoStationAvailableBikeStands.textContent= station.availableBikeStands;
            
            var infoStationAvailableBike = document.getElementById("infoAB")
            infoStationAvailableBike.textContent = station.availableBikes;
            
            if((station.status ==="CLOSED")|| (station.availableBikes === 0)){
                document.getElementById("louer").style.visibility = "hidden";
                document.getElementById("cadre").style.visibility = "hidden";
            }
            else{
                document.getElementById("louer").style.visibility = "visible";
                 document.getElementById("cadre").style.visibility = "visible";
            };
            
            if((station.status==="OPEN") && (station.availableBikes===0)){
                infoStationAvailableBike.classList.add("closed");
                infoStationAvailableBike.textContent="Aucun vélo disponible"; 
              
            }
            else{
                
                
                infoStationAvailableBike.classList.remove("closed");
            };
            //console.log(InfoPanel.textContent);
           new Canvas(document.querySelector('canvas'));
        
        });
    },
    
    validateLocation: function(map){
        document.getElementById("countDown").classList.remove("hiddenDisplay");
        document.getElementById("countDown").classList.add("visibleDisplay");
        var veloStation = document.getElementById("veloStation");
        veloStation.innerHTML= document.getElementById("idStationName").innerHTML;
        sessionStorage.setItem("veloStation", veloStation.innerHTML);
    
        document.getElementById("canvas").classList.add("disabledMouse");
        document.getElementById("valider").disabled = true;
        document.getElementById("valider").classList.remove("enabledValidate");
        document.getElementById("cancel").disabled = false;
    },
  
    cancelLocationByUser: function(){
        var cancelLocationByUser=  document.getElementById("cancelLocationByUser");
        cancelLocationByUser.classList.remove("hiddenDisplay");
        cancelLocationByUser.classList.add("visibleDisplay");
       document.getElementById("cancel").disabled = true;
        document.getElementById("canvas").classList.remove("disabledMouse");
    },
    
    cancelCountDown: function(){
        var cancelCountDown= document.getElementById("countDown");
        cancelCountDown.classList.remove("visibleDisplay");
        cancelCountDown.classList.add("hiddenDisplay");    
    },
    
    cancelInfoStorage: function(){
        var cancelInfoStorage=  document.getElementById("cancelLocationByUser");
        cancelInfoStorage.classList.remove("visibleDisplay");
        cancelInfoStorage.classList.add("hiddenDisplay");
    },
    
    /*nothingToCancel: function(){
        var nothingToCancel= document.getElementById("nothingToCancel");
        nothingToCancel.classList.remove("hiddenDisplay");
        nothingToCancel.classList.add("visibleDisplay");
        setTimeout (function(){
            
            nothingToCancel.classList.remove("visibleDisplay");
            nothingToCancel.classList.add("hiddenDisplay");
            
        },3000);
        
    }   */     
      
    
   

    
}