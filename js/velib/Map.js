class Map {
    constructor(center,zoom,container){
        this.map = this.createMap(center,zoom,container);
       
        
        this.loadVelibMarker();
        this.map.addListener("dragend",function(){
            this.loadVelibMarker();
           
        
        }.bind(this));
        this.timer=new Timer(document.getElementById("timer"));
        
        ListenMapEvents(this);
        
    }
    createMap (center,zoom,container){
        var map = new google.maps.Map(container,{
            zoom: zoom,
            center: center
        });
        return map;
    }
    createNewMarker(record){
        console.log(record);
       
        var image = {
            
            url: 'img/cyclingGreen.png',
   
            size: new google.maps.Size(32,32),
   
        };
     
        var newMarker = new google.maps.Marker({
            position: new google.maps.LatLng(record.position.lat, record.position.lng),
            map: this.map,
            icon: image,
            
            title: record.name
        }); console.log(newMarker.icon);
        if (record.status === "CLOSED"){
            newMarker.setIcon("img/cyclingRed.png");
        }else if((record.status==="OPEN") && (record.availableBikes===0)){
            newMarker.setIcon("img/cyclingOrange.png");
        }
        this.map.addListener('dragstart',function(){
            newMarker.setMap(null);
            
                        
        }.bind(this));
        console.log(record.position.lat);
        
       view.getInfoPanel(newMarker,record);
       
        
    }
    loadVelibMarker(){
        
       
        misc.ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=65333317ee6389642123c98ba54e3c2b3b6d9f95",function (reponse){
            var data = JSON.parse(reponse);
            data.forEach(function(record){
               /* var record = record.fields;*/
                this.createNewMarker(new Station(record.position, record.status, record.bike_stands, record.available_bike_stands, record.available_bikes, record.name, record.address));
            }.bind(this))
          
        }.bind(this))     
    }
    
   
}  

