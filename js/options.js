document.getElementById('toggleSwitch').addEventListener('change', function() {
    var optionsDiv = document.getElementById('options');
    if (this.checked) {
      optionsDiv.style.display = 'block';
    } else {
      optionsDiv.style.display = 'none';
    }
  });
  