var Hour = 0;
var Minute = 0;
function getTime(){
    var now = new Date();
    Hour = now.getHours();
    Minute = now.getMinutes();
}
/*function submitForm() {
    // Get the form values
    const wateringHour = document.getElementById('wateringHour').value;
    const wateringMinute = document.getElementById('wateringMinute').value;
    const threshold = document.getElementById('threshold').value;
    // Prepare the data to be sent
    const data = {
        Hour: Hour,
        Minute: Minute,
    };
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    // Configure it: POST-request for the given URL / endpoint
    xhr.open('POST','SetTime', true);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    // Setup a function to run when the request completes successfully
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Handle the response from the server if needed
            console.log('Success:', xhr.responseText);
        } else {
            console.error('Request failed with status:', xhr.status, xhr.statusText);
        }
    };
    // Handle network errors
    xhr.onerror = function () {
        console.error('Network request failed');
    };
    // Convert the data object to a JSON string and send the request
    xhr.send(JSON.stringify(data));
}*/

function SendWateringData(){
    const data = {
        WateringHour: WateringHour,
        WateringMinute: WateringMinute,
        Threshold: Threshold
    };
    const xhr = new XMLHttpRequest();
    xhr.open('POST','http://192.168.4.2/SetWateringData', true);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('Success:', xhr.responseText);
        } else {
            console.error('Request failed with status:', xhr.status, xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Network request failed');
    };
    xhr.send(JSON.stringify(data));
}
function SetTime(){
    getTime();
    const data = {
        Hour: Hour,
        Minute: Minute,
    };
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    // Configure it: POST-request for the given URL / endpoint
    xhr.open('POST','http://192.168.4.2/SetTime', true);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    // Setup a function to run when the request completes successfully
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Handle the response from the server if needed
            console.log('Success:', xhr.responseText);
        } else {
            console.error('Request failed with status:', xhr.status, xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Network request failed');
    };
    xhr.send(JSON.stringify(data));
}
function SetPeltierOff(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','http://192.168.4.2/PeltierOff', true);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('Success:', xhr.responseText);
        } else {
            console.error('Request failed with status:', xhr.status, xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Network request failed');
    };
}
function SetPeltierHot(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','http://192.168.4.2/PeltierHot', true);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('Success:', xhr.responseText);
        } else {
            console.error('Request failed with status:', xhr.status, xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Network request failed');
    };
}
function SetPeltierCold(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','http://192.168.4.2/PeltierCold', true);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('Success:', xhr.responseText);
        } else {
            console.error('Request failed with status:', xhr.status, xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Network request failed');
    };
}
