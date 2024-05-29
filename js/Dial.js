function setDialReading(read, id){
    var readingAngle = (180*read/100)-90;
    document.getElementById(id).style.transform = "rotate("+(readingAngle)+"deg)";
  }