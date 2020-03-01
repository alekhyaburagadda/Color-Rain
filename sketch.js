dropsA=[];
var dropCount=7000;

function setup(){
    var canvas = createCanvas(1200,800);
    for(let i=0; i < dropCount; i++){
        var drop = new Raindrop();
        drop.reset();
        dropsA.push(drop);
    }
}
function draw(){
    background(255,0,0);
    for(let i =0;  i < dropCount; i++){
        var drop = dropsA[i];
        drop.fall();
        drop.display();
    }
  }