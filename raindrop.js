class Raindrop{
    constructor(_x){
        this.x= _x||0;
        this.y = random(-height/2,-10);
        this.z = random(0,20);
        this.droplen = 10;
        this.thick = 3;
        this.gravity= 0.7;
   }
    reset(){
        this.x = random(0,width);4
        this.y = random(-height/2,-10);
        this.yspeed = random(4,20);
        this.z= random(0,20);
        this.droplen = map(this.z,4,20,3,10);
        this.thick = map(this.droplen,0,20,1,2);
    }
    fall(){
        this.y = this.y + this.yspeed;
        this.gravity = map(this.z,0,20,0,0.5);
        this.y+=0.05;
        this.yspeed = this.yspeed + this.gravity;
        if(this.y > height){
            this.y=random(-200,-100);
            this.y = map(this.z,0,20,4,10);
        }
    }
    display(){
        push();
        strokeWeight(this.thick);
        stroke(255);
        line(this.x,this.y,this.x,this.y+this.droplen);
        pop();
    }
}

