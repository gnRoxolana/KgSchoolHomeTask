function drawTriangle(a){

    for (let i=1; i <= a; i++)
    {
      let line = ''
  
        for (let j=1; j<=i; j++)
        {
          line += j + " ";
        }
        
        console.log(line);
    }
  
  }
  
  drawTriangle(3);