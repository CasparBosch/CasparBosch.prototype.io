setInterval(selectScreen, 300000);

function selectScreen() {
  const d = new Date();
  let hour = d.getHours();

  if (hour < 12) {
    
    window.location.href = './ochtend.html';
    console.log('./ochtend.html');
  } else if (hour >= 12 && hour < 15) {
    window.location.href = './middag.html';
  } else {
    window.location.href = './avond.html';
  }
}

