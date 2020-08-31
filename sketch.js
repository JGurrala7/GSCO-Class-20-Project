var car1, speed1, weight1, wall1;
var car2, wall2, speed2, weight2;
var wall3, car3, speed3, weight3;
var car4, speed4, weight4, wall4;
var car5, wall5, speed5, weight5; 
var deformation = 0;

function setup() {
  createCanvas(1200,400);
  car1 = createSprite(200, 50, 25, 10);
  car1.shapeColor = "white";
  car1.debug = true;
  car2 = createSprite(200, 125, 25, 10);
  car2.shapeColor = "white";
  car2.debug = true;
  car3 = createSprite(200, 200, 25, 10);
  car3.shapeColor = "white";
  car3.debug = true;
  car4 = createSprite(200, 275, 25, 10);
  car4.shapeColor = "white";
  car4.debug = true;
  car5 = createSprite(200, 350, 25, 10);
  car5.shapeColor = "white";
  car5.debug = true;
  wall1 = createSprite(1100, 50, 40, 40);
  wall1.shapeColor = "gray";
  wall1.debug = true;
  wall2 = createSprite(1100, 125, 40, 40);
  wall2.shapeColor = "gray";
  wall2.debug = true;
  wall3 = createSprite(1100, 200, 40, 40);
  wall3.shapeColor = "gray";
  wall3.debug = true;
  wall4 = createSprite(1100, 275, 40, 40);
  wall4.shapeColor = "gray";
  wall4.debug = true;
  wall5 = createSprite(1100, 350, 40, 40);
  wall5.shapeColor = "gray";
  wall5.debug = true;
  speed1 = random(55, 90);
  weight1 = random(400, 1500);
  speed2 = random(55, 90);
  weight2 = random(400, 1500);
  speed3 = random(55, 90);
  weight3 = random(400, 1500);
  speed4 = random(55, 90);
  weight4 = random(400, 1500);
  speed5 = random(55, 90);
  weight5 = random(400, 1500);
}
 

function draw() {
  background(0);
  car1.display();
  car2.display();
  car3.display();
  car4.display();
  car5.display();
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  car1.setVelocity(speed1/10, 0);
  car2.setVelocity(speed2/10, 0);
  car3.setVelocity(speed3/10, 0);
  car4.setVelocity(speed4/10, 0);
  car5.setVelocity(speed5/10, 0);

  if (wall1.x - car1.x < ((car1.width + wall1.width)/2)){
    car1.velocityX = 0;
    calculateDeformation(car1, speed1, weight1);
  }
  if (wall2.x - car2.x < ((car2.width + wall2.width)/2)){
   car2.velocityX = 0;
   calculateDeformation(car2, speed2, weight2);
  }
  if (wall3.x - car3.x < ((car3.width + wall3.width)/2)){
    car3.velocityX = 0;
    calculateDeformation(car3, speed3, weight3);
  }
  if (wall4.x - car4.x < ((car4.width + wall4.width)/2)){
    car4.velocityX = 0;
    calculateDeformation(car4, speed4, weight4);
  }
  if (wall5.x - car5.x < ((car5.width + wall5.width)/2)){
    car5.velocityX = 0;
    calculateDeformation(car5, speed5, weight5);
  }
  drawSprites();
}

function calculateDeformation(car, speed, weight){
  deformation = (0.5 * weight * speed * speed)/22500;
  if (deformation < 100){
    car.shapeColor = color(0, 255, 0);
  }
  if (deformation > 100 && deformation < 180){
    car.shapeColor = color(230, 230, 0);
  }
  if (deformation > 180){
    car.shapeColor = color(255, 0, 0);
  }
}









