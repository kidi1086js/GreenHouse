
function updateChart(labels, data, id, Symbol, linecolor, fillcolour) {
      const ctx = document.getElementById(id).getContext('2d');
      const chart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  label: id + " " + String(Symbol),
                  data: data,
                  borderColor: linecolor,
                  backgroundColor: fillcolour,
                  borderWidth: 1
              }]
          },
          options: {
              animation: {
                  duration: 0 // Set duration to 0 to disable animation
              },
              maintainAspectRatio: false, // Prevent chart from maintaining aspect ratio
              aspectRatio: 2, // Set custom aspect ratio (width / height)
              layout: {
                padding: {
                    top: 0, // Add padding to the top of the chart
                    bottom: 0, // Add padding to the bottom of the chart
                    left: 0, // Add padding to the left of the chart
                    right: 0 // Add padding to the right of the chart
                }
            },
              scales: {
                  x: {
                      title: {
                          display: true,
                          text: 'Time (Hour)'
                      },
                      grid: {
                        display: false // Turn off x-axis grid lines
                    }
                  },
                  y: {
                      title: {
                          display: true,
                          text: id
                      },
                      grid: {
                        display: false // Turn off y-axis grid lines
                    }
                  }
              }
          }
      });
}
function submitForm() {
  // Get the form values
  const wateringHour = document.getElementById('wateringHour').value;
  const wateringMinute = document.getElementById('wateringMinute').value;
  const threshold = document.getElementById('threshold').value;
  // Prepare the data to be sent
  const data = {
      wateringHour: wateringHour,
      wateringMinute: wateringMinute,
      threshold: threshold
  };
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();
  // Configure it: POST-request for the given URL / endpoint
  xhr.open('POST','SetData', true);
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
}
