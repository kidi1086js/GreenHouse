var Temperature;
var CurrentTemperature=0;
var AmbientLight;
var CurrentAmbientLight=10;
var Humidity;
var CurrentHumidity=12;
var GasStatus;
var CurrentGasStatus=12;
var SoilMoisture1 = 0;
var SoilMoisture2 = 0;
var SoilMoisture3 = 0;
var SoilMoisture4 = 0;
var PeltierTop = 0;
var PeltierBot = 0;
var WaterPumpStatus = 0;
var WaterTankStatus = 0;
var RainStatus = 0;
var WateringHour = 0;
var WateringMinute = 0;
var Threshold = 0;
var SetTemperature = 0;
var SetHumidity = 0;
var Mode = 0;
var PeltierPumpFans = 0;
var LedPWM = 0;
var DeHumitizer = 0;
var EnclosureFans = 0;
var MistMaker = 0;
var PeltierMode = 0;
function GetData(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://192.168.4.2/SendData", true); //Handle readADC server on ESP8266
    xhttp.send();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var txt = this.responseText;
        console.log(txt);
        var obj = JSON.parse(txt); //Ref: https://www.w3schools.com/js/js_json_parse.asp
        SoilMoisture1 = Math.round(obj.SoilMoisture1) + " %";
        SoilMoisture2 = Math.round(obj.SoilMoisture2) + " %";
        SoilMoisture3 = Math.round(obj.SoilMoisture3) + " %";
        SoilMoisture4 = Math.round(obj.SoilMoisture4) + " %";
        PeltierBot = Math.round(obj.PeltierBot) + " °C";
        PeltierTop = Math.round(obj.PeltierTop) + " °C";
        WaterPumpStatus = Math.round(obj.WaterPumpStatus);
        WaterTankStatus = Math.round(obj.WaterTankStatus) + " %";
        RainStatus = Math.round(obj.RainStatus);
        CurrentTemperature = Math.round(obj.CurrentTemp) + " °C";
        CurrentHumidity = Math.round(obj.CurrentHum) + " °C";
        CurrentAmbientLight = Math.round(obj.CurrentAmbientLight) + " %";
        CurrentGasStatus = Math.round(obj.CurrentGasStatus);
        WateringHour = obj.WateringHour;
        WateringMinute = obj.WateringMinute;
        Threshold = obj.Threshold;
        Temperature = obj.Temperature;
        Humidity = obj.Humidity;
        AmbientLight = obj.AmbientLight;
        GasStatus = obj.GasStatus;
        SetTemperature = obj.SetTemperature;
        SetHumidity = obj.SetHumidity;
        Mode = obj.Mode;
        PeltierPumpFans = obj.PeltierPumpFans;
        DeHumitizer = obj.DeHumitizer;
        EnclosureFans = obj.EnclosureFans;
        LedPWM = obj.LedPWM;
        PeltierMode = obj.PeltierMode;
        }
      };
}