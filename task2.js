function drawChessboard() {
    let a = 'wbwbwbwb'
    let b = 'bwbwbwbw'
  
    for (let i = 0; i< 8; i++ ) {
      if (i % 2 === 0) {
        console.log(a);
      }
      else {
        console.log(b);
      }
    }
  
  }
  
  drawChessboard();
  