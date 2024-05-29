GetData();
var Address = '"http://192.168.1.203/SendData"';
window.onload = function() {
    GetData();
    Update();
};
//window.addEventListener("mousemove", UpdateData);
window.addEventListener("scroll", UpdateData);
window.onfocus = UpdateData;
const jsonData = {
    "labels": ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    "temperatures": [20, 21, 20, 19, 18, 18, 19, 20, 22, 24, 25, 26, 27, 28, 29, 30, 29, 28, 27, 26, 24, 23, 22, 21]
};
const labels = jsonData.labels;
function Update(){
    SetTime();
    GetData();
    console.log(Temperature);
    console.log(labels);
    UpdateData();
}
function UpdateData(){
    updateChart(labels, Temperature, 'TEMPERATURE', '(°C)', 'green', 'rgba(190, 215, 220, 1)');
    updateChart(labels, Humidity, 'HUMIDITY', '%', 'red', 'rgba(190, 215, 220, 1)');
    updateChart(labels, AmbientLight, 'AMBIENT LIGHT', '(°C)', 'orange', 'rgba(190, 215, 220, 1)');
    updateChart(labels, GasStatus, 'GAS STATUS', '%', 'violet', 'rgba(190, 215, 220, 1)');
    document.getElementById("SoilMoisture1").innerHTML = SoilMoisture1;
    document.getElementById("SoilMoisture2").innerHTML = SoilMoisture2;
    document.getElementById("SoilMoisture3").innerHTML = SoilMoisture3;
    document.getElementById("SoilMoisture4").innerHTML = SoilMoisture4;
    var d1 = SoilMoisture1.replace("%",'');
    var d2 = SoilMoisture2.replace("%",'');
    var d3 = SoilMoisture3.replace("%",'');
    var d4 = SoilMoisture4.replace("%",'');
    setDialReading(d1,"needle1");
    setDialReading(d2,"needle2");
    setDialReading(d3,"needle3");
    setDialReading(d4,"needle4");
    document.getElementById("peltier-top").innerHTML = PeltierTop;
    document.getElementById("peltier-bottom").innerHTML = PeltierBot;
    document.getElementById("water-Tank-percentage").innerHTML = WaterTankStatus;
    if(RainStatus == 1){
        document.getElementById("rain-status").innerHTML = "It's Raining!!";
    }
    else if(RainStatus == 0){
        document.getElementById("rain-status").innerHTML = "No Rain";
    }
    if(WaterPumpStatus == 1){
        document.getElementById("water-pump-status").innerHTML = "ON";
    }
    else if(WaterPumpStatus == 0){
        document.getElementById("water-pump-status").innerHTML = "OFF";
    }
    if(PeltierMode == 0){
        document.getElementById("peltier-status").innerHTML = "OFF"
    }
    else if(PeltierMode == 1){
        document.getElementById("peltier-status").innerHTML = "HOT"
    }
    else if(PeltierMode == 2){
        document.getElementById("peltier-status").innerHTML = "COLD"
    }
}
