<<<<<<< HEAD
function startTime() {
  offset_est = -4;
  offset_kst = 9;
  var today = new Date();
  var h = today.getUTCHours();
  var m = today.getUTCMinutes();
  var s = today.getUTCSeconds();
  var h_est = h + offset_est;
  var h_kst = h + offset_kst;
  
  if (h_est > 24) {
    h_est = h_est - 24;
  }
  if (h_est < 0) {
    h_est = h_est + 24;
  }
  
    if (h_kst > 24) {
    h_kst = h_kst - 24;
  }
  if (h_kst < 0) {
    h_kst = h_kst + 24;
  }
  
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML = h + ":" + m + ":" + s + " \nUTC |  ";
  document.getElementById('est').innerHTML = " " + (h_est) + ":" + m + ":" + s + " EST |  ";
  document.getElementById('kst').innerHTML = " " + (h_kst) + ":" + m + ":" + s + " KST";
  var t = setTimeout(function() {
    startTime()
  }, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  };
  return i;
}

=======
function startTime() {
  offset_est = -4;
  offset_kst = 9;
  var today = new Date();
  var h = today.getUTCHours();
  var m = today.getUTCMinutes();
  var s = today.getUTCSeconds();
  var h_est = h + offset_est;
  var h_kst = h + offset_kst;
  
  if (h_est >= 24) {
    h_est = h_est - 24;
  }
  if (h_est < 0) {
    h_est = h_est + 24;
  }
  
  if (h_kst >= 24) {
    h_kst = h_kst - 24;
  }
  if (h_kst < 0) {
    h_kst = h_kst + 24;
  }
  
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML = h + ":" + m + ":" + s + " \nUTC |  ";
  document.getElementById('est').innerHTML = " " + (h_est) + ":" + m + ":" + s + " EST |  ";
  document.getElementById('kst').innerHTML = " " + (h_kst) + ":" + m + ":" + s + " KST";
  var t = setTimeout(function() {
    startTime()
  }, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  };
  return i;
}

>>>>>>> a6fa563f91f461d1d1ed5a5e98bcb4dfa682cb37
startTime()