
var len = 20;
var arr = [];
var arr_dum = [];
var wid = 20;
var hig = 20;

function setup(){
  createCanvas(1000,800, WEBGL);
  init();
  frameRate(20);
}

function init(){
  
  for(var i = 0; i < 20; i++){
    arr[i] = [];
    arr_dum[i] = [];
    for(var j = 0;j < 20; j++){
      arr[i][j] = int(random(0,2));
      arr_dum[i][j] = arr[i][j];
    }
  }
}

function draw(){
  background('orange');
  translate(-350, 0, 0);
  rotateX(PI/1.5);
  rotateZ(PI/4);
  
  for(var i = 0; i < wid; i++){
    for(var j = 0; j < hig; j++){
      
      if(i == 0 && j == 0)
        sum = arr[0][1] + arr[1][0] + arr[1][1];
      else if(i == 0 && j == hig)
        sum = arr[0][hig - 1] + arr[1][hig - 1] + arr[1][hig - 1];
      else if(i == (wid - 1) && j == 0)
        sum = arr[wid - 1][0] + arr[wid - 2][1] + arr[wid - 1][1];
      else if(i == (wid - 1) && j == (hig - 1))
        sum = arr[wid - 1][hig - 2] + arr[wid - 2][hig - 2] + arr[wid - 2][hig - 1];
      else if(i == 0 && j > 0)
        sum = arr[0][j + 1] + arr[0][j - 1] + arr[1][j - 1] + arr[1][j] + arr[1][j + 1];
      else if(i == wid - 1 && j > 0)
        sum = arr[i][j + 1] + arr[i][j - 1] + arr[i - 1][j - 1] + arr[i - 1][j] + arr[i - 1][j + 1];
      else if(i > 0 && j == 0)
        sum = arr[i - 1][0] + arr[i + 1][0] + arr[i][1] + arr[i + 1][1] + arr[i - 1][1];
      else if(i > 0 && j == hig - 1)
        sum = arr[i + 1][hig - 1] + arr[i - 1][hig - 1] + arr[i][hig - 2] + arr[i + 1][hig - 2] + arr[i - 1][hig - 2];
      else if(i > 0 && j > 0 && i < wid - 1 && j < hig - 1)
        sum = arr[i][j + 1] + arr[i][j - 1] + arr[i - 1][j - 1] + arr[i - 1][j] + arr[i - 1][j + 1] + arr[i + 1][j - 1] + arr[i + 1][j] + arr[i + 1][j + 1];
        
        if(arr[i][j] == 1 && sum < 2)
          arr_dum[i][j] = 0;
        else if(arr[i][j] == 1 && sum == 2 || sum == 3)
          arr_dum[i][j] = 1;
        else if(arr[i][j] == 1 && sum > 3)
          arr_dum[i][j] = 0;
        else if(arr[i][j] == 0 && sum == 3)
          arr_dum[i][j] = 1;
        else 
          arr_dum[i][j] = arr[i][j];
          
    sum = 0;  
    
  }
  }
  
  drawgrid();
  
  for(var i = 0; i < wid; i++)
    for(var j = 0; j < hig; j++) 
      arr[i][j] = arr_dum[i][j];
      
}

function drawgrid(){
  
  for(var i = 0; i < len; i++){
    for(var j = 0; j < len; j++){
      translate(len, 0, 0);
      var col = int(random(0,2));
      if(arr[i][j] == 1){
        fill('green');
        box(len,len,len);
      }
      else{
        fill('black');
        box(len,len,len);
      }
    }
    translate(-len*len, len , 0)
  }
  
}