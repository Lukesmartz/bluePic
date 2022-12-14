let xPos, yPos, xSpeed, ySpeed; 
let xPos2, yPos2, xSpeed2, ySpeed2;

function setup() {
    noStroke(); // no black outline
    var canvas = createCanvas(600, 600);
    canvas.parent("p5container");
    xPos = width/2;
    yPos = height/2;
    xSpeed = 1;
    ySpeed = 1;

    xPos2 = width/2;
    yPos2 = height/2;
    xSpeed2 = 1;
    ySpeed2 = 1;
}

function draw() {

  


   
    background(14,34,105);
    fill(8, 19, 56)
   

    fill('#6D88ED');
    rect(20, 470, 158, 370,); //left brick 4

    fill('#4D6FEE');
    rect(10, 470, 158, 370,); //left brick 4

    fill('#1D3EB9');
    rect(-15, 450, 158, 370,); //left brick 3

    fill('#18359E');
    rect(-30, 450, 158, 370,); //left brick 3


    fill('#040B23');
    rect(415, 440, 198, 382,); //right brick 3

    fill('#040E32');
    rect(430, 440, 198, 382,); //right brick 3

    fill('#04103C');
    rect(476, 400, 198, 382,); //right brick 2

    fill('#05144B');
    rect(490, 400, 198, 382,); //right brick 2


    fill('#0D2684');
    rect(-60, 400, 159, 370,); //left brick 2

    fill('#071857');
    rect(-75, 400, 156, 371,); //left brick 2

    fill( '#081338');
    ellipse(120, yPos, 82 , 82,); //little floaty 

    fill( '#0A1743');
    ellipse(115, yPos, 73 , 74,); //little floaty 2

    //horizontal movement
   // xPos = xPos + xSpeed;
   // if (xPos + 50 > width || xPos-50 < 0 ){
   //     xSpeed *= -1; //inverts the value
    

    //vertical movement
    yPos = yPos + ySpeed;
    if (yPos+140> height || yPos-25 < 0){
        ySpeed *= -1;
    }


    fill( '#081338');
    ellipse(350, yPos2, 323 , 316,); // big floaty

    fill( '#0A1743');
    ellipse(360, yPos2, 287 , 287,); //2nd big floaty
    
    //horizontal movement
    //xPos2 = xPos2 + xSpeed2;
    //if (xPos2 + 50 > width || xPos-50 < 0){
    //    xSpeed2 *= -1; //inverts the value
    

    //vertical movement
    yPos2 = yPos2 + ySpeed2;
    if (yPos2+270 > height || yPos2-50 < 0){
        ySpeed2 *= -1;

    }

    fill( '#071857');
    ellipse(300, 560, 537, 164,); //hill

    fill( '#0A1743');
    ellipse(120, 555, 73 , 105,); //baby shadow

    fill( '#05144B');
    ellipse(320, 678, 301 , 398,); //big shadow

    fill('#071857');
    rect(530, 375, 198, 382,); //right 2ndborderbricks

    fill(7, 16, 49 );
    rect(-115, 379, 166, 310,); //leftborder bricks
    
    fill(0);
    rect(-140, 379, 166, 310,); //leftborder bricks

    fill(17, 46, 156 );
    rect(560, 375, 166, 310,); //rightborder bricks


    

    



}