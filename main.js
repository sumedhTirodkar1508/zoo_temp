import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import {scene, loadBird, loadTree, loadLog, loadGround, loadGroundBack, loadRock, loadRock2, loadGrass, loadFlower, loadFlower2} from './scene1.js';
import {scene2, loadSheep, loadGround2, loadGround2Back, loadDirt, loadCart, loadGrass2, loadPebble} from './scene2.js';
import {scene3, loadHare, loadSnow, loadSnowBack, loadSnowPile, loadSnowPile2, loadTree2, loadTree3, loadRock3, loadSnowyTree} from './scene3.js';
import {scene4, loadBear, loadGround3, loadGround3Back, loadPebble2, loadPebble3, loadPebble4, loadPebble5, loadGrass3, loadFlower3, loadFlower4, loadTree4, loadTree5} from './scene4.js';
import {scene5, loadTurtle, loadWater, loadSand, loadPlant, loadPebble6} from './scene5.js';
import {scene6, loadDuck, loadWater2, loadLillyPads, loadReeds} from './scene6.js';
import {scene7, loadCaterpillar, loadHill, loadHillBack, loadTreeStump, loadMushroom, loadMushroom2, loadApple} from './scene7.js';
import {scene8, loadBee, loadHive, loadHive2, loadHive3, loadHive4, loadHive5, loadBackground, loadBackgroundBack, loadFlower5} from './scene8.js';
import {scene9, loadBirdSolo} from './scene9.js';
import {scene10, loadSheepSolo} from './scene10.js';
import {scene11, loadHareSolo} from './scene11.js';
import {scene12, loadBearSolo} from './scene12.js';
import {scene13, loadTurtleSolo} from './scene13.js';
import {scene14, loadDuckSolo} from './scene14.js';
import {scene15, loadCaterpillarSolo} from './scene15.js';
import {scene16, loadBeeSolo} from './scene16.js';

async function loadData() {
  const response = await fetch("./animals.json");
  const data = await response.json();
  addNames(data);
  getInfo(data);
}

//audio____________________________________________________________________________________________________________________
let pageTurn = new Audio("./sounds/pageturn.mp3");
pageTurn.volume = 0.1;
let zoomIn = new Audio("./sounds/zoomin.mp3");
zoomIn.volume = 0.05;
let zoomOut = new Audio("./sounds/zoomout.mp3");
zoomOut.volume = 0.05;
let bird = new Audio("./sounds/bird.mp3");
bird.volume = 0.1;
let boing = new Audio("./sounds/boing.mp3");
boing.volume = 0.2;
let sheep = new Audio("./sounds/sheep.mp3");
sheep.volume = 0.2;
let bear = new Audio("./sounds/bear.mp3");
bear.volume = 0.2;
let duck = new Audio("./sounds/duck.mp3");
duck.volume = 0.2;
let splash = new Audio("./sounds/splash.mp3");
splash.volume = 0.1;
let bee = new Audio("./sounds/bee.wav");
bee.volume = 0.2;
let munch = new Audio("./sounds/munch.wav");
munch.volume = 0.2;

//setup______________________________________________________________________________________________________________________
const camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( 400, 400 );
const light = new THREE.DirectionalLight(0xeded9d, 1.5);
light.position.set(-1, -1, 2);
scene.add(light);
renderer.domElement.setAttribute("id", "birdScene");
document.querySelector("#bird").appendChild(renderer.domElement);

const camera2 = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
const renderer2 = new THREE.WebGLRenderer();
renderer2.setSize( 400, 400 );
const light2 = new THREE.DirectionalLight(0xeded9d, 1.5);
light2.position.set(1, 1, 2);
scene2.add(light2);
renderer2.domElement.setAttribute("id", "sheepScene");
document.querySelector("#sheep").appendChild(renderer2.domElement);

const camera3 = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
const renderer3 = new THREE.WebGLRenderer();
renderer3.setSize( 400, 400 );
const light3 = new THREE.DirectionalLight(0xeded9d, 1.5);
light3.position.set(-1, 1, 2);
light3.castShadow = true;
scene3.add( light3 );
renderer3.domElement.setAttribute("id", "hareScene");
document.querySelector("#hare").appendChild(renderer3.domElement);

const camera4 = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
const renderer4 = new THREE.WebGLRenderer();
renderer4.setSize( 400, 400 );
const light4 = new THREE.DirectionalLight(0xeded9d, 1.5);
light4.position.set(1, -1, 2);
light4.castShadow = true;
scene4.add( light4 );
renderer4.domElement.setAttribute("id", "bearScene");
document.querySelector("#bear").appendChild(renderer4.domElement);

const camera5 = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
const renderer5 = new THREE.WebGLRenderer();
renderer5.setSize( 400, 400 );
const light5 = new THREE.DirectionalLight(0xeded9d, 1.5);
light5.position.set(-1, 1, 2);
light5.castShadow = true;
scene5.add( light5 );
renderer5.domElement.setAttribute("id", "turtleScene");
document.querySelector("#turtle").appendChild(renderer5.domElement);

const camera6 = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
const renderer6 = new THREE.WebGLRenderer();
renderer6.setSize( 400, 400 );
const light6 = new THREE.DirectionalLight(0xeded9d, 1.5);
light6.position.set(1, 1, 2);
light6.castShadow = true;
scene6.add( light6 );
renderer6.domElement.setAttribute("id", "duckScene");
document.querySelector("#duck").appendChild(renderer6.domElement);

const camera7 = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
const renderer7 = new THREE.WebGLRenderer();
renderer7.setSize( 400, 400 );
const light7 = new THREE.DirectionalLight(0xeded9d, 1.5);
light7.position.set(-1, -1, 2);
scene7.add(light7);
renderer7.domElement.setAttribute("id", "caterpillarScene");
document.querySelector("#caterpillar").appendChild(renderer7.domElement);

const camera8 = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
const renderer8 = new THREE.WebGLRenderer();
renderer8.setSize( 400, 400 );
const light8 = new THREE.DirectionalLight(0xeded9d, 1.5);
light8.position.set(1, 1, 2);
light8.castShadow = true;
scene8.add( light8 );
renderer8.domElement.setAttribute("id", "beeScene");
document.querySelector("#bee").appendChild(renderer8.domElement);

//zoom functionality________________________________________________________________________________________________________
let zoom;
let xPos;
let yPos;
let zPos;
let xRot;

document.querySelector("#birdScene").addEventListener("mouseenter", () => {
  zoomIn.play();
  zoom = true;
  xPos = true;
  yPos = true;
  zPos = true;
  xRot = true;
});

document.querySelector("#birdScene").addEventListener("mouseleave", () => {
  if (!click) {
    zoomOut.play();
  }
  zoom = false;
  xPos = false;
  yPos = false;
  zPos = false;
  xRot = false;
});

let zoom2;
let yPos2;
let zPos2;
let xRot2;

document.querySelector("#hareScene").addEventListener("mouseenter", () => {
  zoomIn.play();
  zoom2 = true;
  yPos2 = true;
  zPos2 = true;
  xRot2 = true;
});


document.querySelector("#hareScene").addEventListener("mouseleave", () => {
  if (!click) {
    zoomOut.play();
  }
  zoom2 = false;
  yPos2 = false;
  zPos2 = false;
  xRot2 = false;
});

let zoom3;
let xRot3;
let yRot3;
let yPos3;
let zPos3;

document.querySelector("#bearScene").addEventListener("mouseenter", () => {
  zoomIn.play();
  zoom3 = true;
  xRot3 = true;
  yRot3 = true;
  yPos3 = true;
  zPos3 = true;
});


document.querySelector("#bearScene").addEventListener("mouseleave", () => {
  if (!click) {
    zoomOut.play();
  }
  zoom3 = false;
  xRot3 = false;
  yRot3 = false;
  yPos3 = false;
  zPos3 = false;
});

let zoom4;
let zRot4;
let xRot4;
let xPos4;
let yPos4;
let zPos4;

document.querySelector("#turtleScene").addEventListener("mouseenter", () => {
  zoomIn.play();
  zoom4 = true;
  zRot4 = true;
  xRot4 = true;
  xPos4 = true;
  yPos4 = true;
  zPos4 = true;
});

document.querySelector("#turtleScene").addEventListener("mouseleave", () => {
  if (!click) {
    zoomOut.play();
  }
  zoom4 = false;
  zRot4 = false;
  xRot4 = false;
  xPos4 = false;
  yPos4 = false;
  zPos4 = false;
});

let zoom5;
let zRot5;
let xRot5;
let yRot5;
let yPos5;
let zPos5;
let xPos5;

document.querySelector("#sheepScene").addEventListener("mouseenter", () => {
  zoomIn.play();
  zoom5 = true;
  zRot5 = true;
  xRot5 = true;
  yRot5 = true;
  yPos5 = true;
  zPos5 = true;
  xPos5 = true;
});

document.querySelector("#sheepScene").addEventListener("mouseleave", () => {
  if (!click) {
    zoomOut.play();
  }
  zoom5 = false;
  zRot5 = false;
  xRot5 = false;
  yRot5 = false;
  yPos5 = false;
  zPos5 = false;
  xPos5 = false;
});

let zoom6;
let zRot6;
let xRot6;
let yPos6;
let zPos6;

document.querySelector("#duckScene").addEventListener("mouseenter", () => {
  zoomIn.play();
  zoom6 = true;
  zRot6 = true;
  xRot6 = true;
  yPos6 = true;
  zPos6 = true;
});

document.querySelector("#duckScene").addEventListener("mouseleave", () => {
  if (!click) {
    zoomOut.play();
  }
  zoom6 = false;
  zRot6 = false;
  xRot6 = false;
  yPos6 = false;
  zPos6 = false;
});

let zoom7;
let xRot7;
let yPos7;
let yRot7;
let zPos7;
let xPos7;

document.querySelector("#caterpillarScene").addEventListener("mouseenter", () => {
  zoomIn.play();
  zoom7 = true;
  xRot7 = true;
  yPos7 = true;
  yRot7 = true;
  zPos7 = true;
  xPos7 = true;
});

document.querySelector("#caterpillarScene").addEventListener("mouseleave", () => {
  if (!click) {
    zoomOut.play();
  }
  zoom7 = false;
  xRot7 = false;
  yPos7 = false;
  yRot7 = false;
  zPos7 = false;
  xPos7 = false;
});

let zoom8;
let zRot8;
let xPos8;
let yRot8;
let zPos8;

document.querySelector("#beeScene").addEventListener("mouseenter", () => {
  zoomIn.play();
  zoom8 = true;
  zRot8 = true;
  xPos8 = true;
  yRot8 = true;
  zPos8 = true;
});

document.querySelector("#beeScene").addEventListener("mouseleave", () => {
  if (!click) {
    zoomOut.play();
  }
  zoom8 = false;
  zRot8 = false;
  xPos8 = false;
  yRot8 = false;
  zPos8 = false;
});

//clickEvents_______________________________________________________________________________________________________________
document.querySelector("#explore").addEventListener("click", () => {
  document.querySelector("#explore").style.display = "none";
  document.querySelector("#bird").style.display = "block";
  document.querySelector("#hare").style.display = "block";
  document.querySelector("#bear").style.display = "block";
  document.querySelector("#turtle").style.display = "block";
  document.querySelector("#sheep").style.display = "block";
  document.querySelector("#bee").style.display = "block";
  document.querySelector("#caterpillar").style.display = "block";
  document.querySelector("#duck").style.display = "block";
  document.querySelector(".container").style.height = "fit-content";
});
  
let click = false;

document.querySelector("#bird").addEventListener("click", () => {
  click = true;
  pageTurn.play();
  document.querySelector(".card").style.display = "block";
  document.querySelector(".notebook").style.display = "none";
  document.querySelector("#birdSolo").style.display = "block";
});

document.querySelector("#sheep").addEventListener("click", () => {
  click = true;
  pageTurn.play();
  document.querySelector(".card").style.display = "block";
  document.querySelector(".notebook").style.display = "none";
  document.querySelector("#sheepSolo").style.display = "block";
});

document.querySelector("#bear").addEventListener("click", () => {
  click = true;
  pageTurn.play();
  document.querySelector(".card").style.display = "block";
  document.querySelector(".notebook").style.display = "none";
  document.querySelector("#bearSolo").style.display = "block";
});

document.querySelector("#hare").addEventListener("click", () => {
  click = true;
  pageTurn.play();
  document.querySelector(".card").style.display = "block";
  document.querySelector(".notebook").style.display = "none";
  document.querySelector("#hareSolo").style.display = "block";
});

document.querySelector("#duck").addEventListener("click", () => {
  click = true;
  pageTurn.play();
  document.querySelector(".card").style.display = "block";
  document.querySelector(".notebook").style.display = "none";
  document.querySelector("#duckSolo").style.display = "block";
});

document.querySelector("#turtle").addEventListener("click", () => {
  click = true;
  pageTurn.play();
  document.querySelector(".card").style.display = "block";
  document.querySelector(".notebook").style.display = "none";
  document.querySelector("#turtleSolo").style.display = "block";
});

document.querySelector("#bee").addEventListener("click", () => {
  click = true;
  pageTurn.play();
  document.querySelector(".card").style.display = "block";
  document.querySelector(".notebook").style.display = "none";
  document.querySelector("#beeSolo").style.display = "block";
});

document.querySelector("#caterpillar").addEventListener("click", () => {
  click = true;
  pageTurn.play();
  document.querySelector(".card").style.display = "block";
  document.querySelector(".notebook").style.display = "none";
  document.querySelector("#caterpillarSolo").style.display = "block";
});

document.querySelector(".backArrow").addEventListener("click", () => {
  pageTurn.play();
  document.querySelector(".card").style.display = "none";
  document.querySelector(".notebook").style.display = "block";
  document.querySelector("#birdSolo").style.display = "none";
  document.querySelector("#hareSolo").style.display = "none";
  document.querySelector("#bearSolo").style.display = "none";
  document.querySelector("#duckSolo").style.display = "none";
  document.querySelector("#beeSolo").style.display = "none";
  document.querySelector("#turtleSolo").style.display = "none";
  document.querySelector("#caterpillarSolo").style.display = "none";
  document.querySelector("#sheepSolo").style.display = "none";
  click = false;
});

//loaders_________________________________________________________________________________________________________________
const manager = new THREE.LoadingManager();
const loader = new FBXLoader(manager);
let loaded = false;

manager.onLoad = function () {
	loaded = true;
  document.querySelector("#explore").innerHTML = "Explore!";
  document.querySelector("#explore").disabled = false;
};

//bird
loader.load('./models/Bird_01.fbx', loadBird);

loader.load('./models/SM_Env_Tree_015.fbx', loadTree);

loader.load('./models/SM_Prop_Loghalf_01.fbx', loadLog);

loader.load('./models/SM_Env_GroundMounds_01.fbx', loadGround);

loader.load('./models/SM_Env_GroundMounds_01.fbx', loadGroundBack);

loader.load('./models/SM_Env_Rock_01.fbx', loadRock);

loader.load('./models/SM_Env_Rock_01.fbx', loadRock2);

for (let i = 0; i < 10; i++) {
  loader.load('./models/SM_Env_Grass_02.fbx', loadGrass);
}

loader.load('./models/SM_Env_Flower_05.fbx', loadFlower);

for (let i = 0; i < 5; i++) {
  loader.load('./models/SM_Env_Flower_05.fbx', loadFlower);
}

loader.load('./models/SM_Env_Flower_06.fbx', loadFlower2);

for (let i = 0; i < 5; i++) {
  loader.load('./models/SM_Env_Flower_06.fbx', loadFlower2);
}

//sheep
loader.load('./models/Sheep_01.fbx', loadSheep);

loader.load('./models/SM_Env_GroundMounds_01.fbx', loadGround2);

loader.load('./models/SM_Env_GroundMounds_01.fbx', loadGround2Back);

loader.load('./models/SM_Env_Path_Dirt_03.fbx', loadDirt);

loader.load('./models/SM_Prop_CartHay_01.fbx', loadCart);

for (let i = 0; i < 20; i++) {
  loader.load('./models/SM_Env_Grass_02.fbx', loadGrass2);
}

loader.load('./models/SM_Env_Pebble_01.fbx', loadPebble);

//bunny
loader.load('./models/Bunny_01.fbx', loadHare);

loader.load('./models/SM_Bld_Village_SnowSheet_01.fbx', loadSnow);

loader.load('./models/SM_Bld_Village_SnowSheet_01.fbx', loadSnowBack);

loader.load('./models/SM_Env_SnowPile_02.fbx', loadSnowPile);

loader.load('./models/SM_Env_SnowPile_02.fbx', loadSnowPile2);

loader.load('./models/SM_Env_TreePine_01_Snow.fbx', loadTree2);

loader.load('./models/SM_Env_TreeDead_02_Snow.fbx', loadTree3);

loader.load('./models/SM_Env_Rock_05_Snow.fbx', loadRock3);

loader.load('./models/SM_Env_Tree_017_Snow.fbx', loadSnowyTree);

//bear
loader.load('./models/TeddyBear_01.fbx', loadBear);

loader.load('./models/SM_Env_GroundMounds_01.fbx', loadGround3);

loader.load('./models/SM_Env_GroundMounds_01.fbx', loadGround3Back);


loader.load('./models/SM_Env_Pebble_01.fbx', loadPebble2);

loader.load('./models/SM_Env_Pebble_01.fbx', loadPebble3);

loader.load('./models/SM_Env_Pebble_01.fbx', loadPebble4);

loader.load('./models/SM_Env_Pebble_01.fbx', loadPebble5);

for (let i = 0; i < 20; i++) {
  loader.load('./models/SM_Env_Grass_02.fbx', loadGrass3);
}

for (let i = 0; i < 6; i++) {
  loader.load('./models/SM_Env_Flower_06.fbx', loadFlower3);
}

for (let i = 0; i < 6; i++) {
  loader.load('./models/SM_Env_Flower_05.fbx', loadFlower4);
}

loader.load('./models/SM_Env_TreePine_03.fbx', loadTree4);

loader.load('./models/SM_Env_TreePine_03.fbx', loadTree5);

//turtle 
loader.load('./models/Turtle_01.fbx', loadTurtle);

loader.load('./models/SM_Env_GroundMounds_01.fbx', loadWater);

loader.load('./models/SM_Env_Path_Dirt_03.fbx', loadSand);

for (let i = 0; i < 10; i++) {
  loader.load('./models/SM_Env_Plant_03.fbx', loadPlant);
}

for (let i = 0; i < 10; i++) {
  loader.load('./models/SM_Env_Pebble_01.fbx', loadPebble6);
}

//duck
loader.load('./models/RubberDuck_01.fbx', loadDuck);

loader.load('./models/SM_Env_GroundMounds_01.fbx', loadWater2);

loader.load('./models/SM_Env_Lillypads_02.fbx', loadLillyPads);

for (let i = 0; i < 6; i++) {
  loader.load('./models/SM_Env_Reeds_02.fbx', loadReeds);
}

//caterpillar
loader.load('./models/Worm_01.fbx', loadCaterpillar);

loader.load('./models/SM_Env_Hill_01.fbx', loadHill);

loader.load('./models/SM_Env_Hill_01.fbx', loadHillBack);

loader.load('./models/SM_Env_TreeStump_01.fbx', loadTreeStump);

loader.load('./models/SM_Env_Mushroom_01.fbx', loadMushroom);

loader.load('./models/SM_Env_Mushroom_01.fbx', loadMushroom2);

loader.load('./models/SM_Icon_Apple_01.fbx', loadApple);


//bee
loader.load('./models/Bee_01.fbx', loadBee);

loader.load('./models/SM_PolygonPrototype_Icon_Coin_01.fbx', loadHive);

loader.load('./models/SM_PolygonPrototype_Icon_Coin_01.fbx', loadHive2);

loader.load('./models/SM_PolygonPrototype_Icon_Coin_01.fbx', loadHive3);

loader.load('./models/SM_PolygonPrototype_Icon_Coin_01.fbx', loadHive4);

loader.load('./models/SM_PolygonPrototype_Icon_Coin_01.fbx', loadHive5);

loader.load('./models/SM_Env_GroundMounds_01.fbx', loadBackground);

loader.load('./models/SM_Env_GroundMounds_01.fbx', loadBackgroundBack);

loader.load('/models/SM_Env_Flower_01.fbx', loadFlower5);

//camera setup ____________________________________________________________________________________________________________
camera.position.z = 50;
camera2.position.z = 50;
camera3.position.z = 50;
camera4.position.z = 50;
camera5.position.z = 50;
camera6.position.z = 50;
camera7.position.z = 53;
camera8.position.z = 50;

//animal names________________________________________________________________________________________________________________
function addNames(animals){
  for (let animal of animals) {
    const name = document.createElement("h3");
    name.setAttribute("class", "name");
    name.innerHTML = animal.name;
    if (animal.name.toLowerCase().includes("bird")) {
      const bird = document.querySelector("#bird");
      bird.appendChild(name);
    }
    if (animal.name.toLowerCase().includes("sheep")) {
      const sheep = document.querySelector("#sheep");
      sheep.appendChild(name);
    }
    if (animal.name.toLowerCase().includes("bear")) {
      const bear = document.querySelector("#bear");
      bear.appendChild(name);
    }
    if (animal.name.toLowerCase().includes("duck")) {
      const duck = document.querySelector("#duck");
      duck.appendChild(name);
    }
    if (animal.name.toLowerCase().includes("turtle")) {
      const turtle = document.querySelector("#turtle");
      turtle.appendChild(name);
    }
    if (animal.name.toLowerCase().includes("hare")) {
      const hare = document.querySelector("#hare");
      hare.appendChild(name);
    }
    if (animal.name.toLowerCase().includes("caterpillar")) {
      const caterpillar = document.querySelector("#caterpillar");
      caterpillar.appendChild(name);
    }
    if (animal.name.toLowerCase().includes("bee")) {
      const bee = document.querySelector("#bee");
      bee.appendChild(name);
    }
  }
}

//second setup_________________________________________________________________________________________________________________
const camera9 = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
const renderer9 = new THREE.WebGLRenderer();
renderer9.setSize( 400, 400 );
const light9 = new THREE.DirectionalLight( 0xffffbb, 0.8);
light9.position.set(-1,1,0);
light9.castShadow = true;
const light9_2 = new THREE.DirectionalLight( 0xffffbb, 0.8);
light9_2.position.set(1,1,0);
light9_2.castShadow = true;
scene9.add( light9 );
scene9.add(light9_2);
renderer9.domElement.setAttribute("id", "birdSoloScene");
document.querySelector("#birdSolo").appendChild(renderer9.domElement);

const camera10 = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
const renderer10 = new THREE.WebGLRenderer();
renderer10.setSize( 400, 400 );
const light10 = new THREE.DirectionalLight( 0xffffbb, 1.5);
light10.position.set(-1,1,0);
light10.castShadow = true;
const light10_2 = new THREE.DirectionalLight( 0xffffbb, 1.5);
light10_2.position.set(1,1,0);
light10_2.castShadow = true;
scene10.add( light10 );
scene10.add(light10_2);
renderer10.domElement.setAttribute("id", "sheepSoloScene");
document.querySelector("#sheepSolo").appendChild(renderer10.domElement);

const camera11 = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
const renderer11 = new THREE.WebGLRenderer();
renderer11.setSize( 400, 400 );
const light11 = new THREE.DirectionalLight( 0xffffbb, 1.5);
light11.position.set(-1,1,0);
light11.castShadow = true;
const light11_2 = new THREE.DirectionalLight( 0xffffbb, 1.5);
light10_2.position.set(1,1,0);
light10_2.castShadow = true;
scene11.add( light11 );
scene11.add(light11_2);
renderer11.domElement.setAttribute("id", "hareSoloScene");
document.querySelector("#hareSolo").appendChild(renderer11.domElement);

const camera12 = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
const renderer12 = new THREE.WebGLRenderer();
renderer12.setSize( 400, 400 );
const light12 = new THREE.DirectionalLight( 0xffffbb, 1.5);
light12.position.set(-1,1,0);
light12.castShadow = true;
const light12_2 = new THREE.DirectionalLight( 0xffffbb, 1.5);
light12_2.position.set(1,1,0);
light12_2.castShadow = true;
scene12.add( light12 );
scene12.add(light12_2);
renderer12.domElement.setAttribute("id", "bearSoloScene");
document.querySelector("#bearSolo").appendChild(renderer12.domElement);

const camera13 = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
const renderer13 = new THREE.WebGLRenderer();
renderer13.setSize( 400, 400 );
const light13 = new THREE.DirectionalLight( 0xffffbb, 1.5);
light13.position.set(-1,1,0);
light13.castShadow = true;
const light13_2 = new THREE.DirectionalLight( 0xffffbb, 1.5);
light13_2.position.set(1,1,0);
light13_2.castShadow = true;
scene13.add( light13 );
scene13.add(light13_2);
renderer13.domElement.setAttribute("id", "turtleSoloScene");
document.querySelector("#turtleSolo").appendChild(renderer13.domElement);

const camera14 = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
const renderer14 = new THREE.WebGLRenderer();
renderer14.setSize( 400, 400 );
const light14 = new THREE.DirectionalLight( 0xffffbb, 1.5);
light14.position.set(-1,1,0);
light14.castShadow = true;
const light14_2 = new THREE.DirectionalLight( 0xffffbb, 1.5);
light14_2.position.set(1,1,0);
light14_2.castShadow = true;
scene14.add( light14 );
scene14.add(light14_2);
renderer14.domElement.setAttribute("id", "duckSoloScene");
document.querySelector("#duckSolo").appendChild(renderer14.domElement);

const camera15 = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
const renderer15 = new THREE.WebGLRenderer();
renderer15.setSize( 400, 400 );
const light15 = new THREE.DirectionalLight( 0xffffbb, 1.5);
light15.position.set(-1,1,0);
light15.castShadow = true;
const light15_2 = new THREE.DirectionalLight( 0xffffbb, 1.5);
light15_2.position.set(1,1,0);
light15_2.castShadow = true;
scene15.add( light15 );
scene15.add(light15_2);
renderer15.domElement.setAttribute("id", "caterpillarSoloScene");
document.querySelector("#caterpillarSolo").appendChild(renderer15.domElement);

const camera16 = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
const renderer16 = new THREE.WebGLRenderer();
renderer16.setSize( 400, 400 );
const light16 = new THREE.DirectionalLight( 0xffffbb, 1.5);
light16.position.set(-1,1,0);
light16.castShadow = true;
const light16_2 = new THREE.DirectionalLight( 0xffffbb, 1.5);
light16_2.position.set(1,1,0);
light16_2.castShadow = true;
scene16.add( light16 );
scene16.add(light16_2);
renderer16.domElement.setAttribute("id", "beeSoloScene");
document.querySelector("#beeSolo").appendChild(renderer16.domElement);

//animal sounds____________________________________________________________________________________________________________
document.querySelector("#birdSoloScene").addEventListener("mouseenter", () => {
  bird.play();
});
document.querySelector("#hareSoloScene").addEventListener("mouseenter", () => {
  boing.play();
});
document.querySelector("#sheepSoloScene").addEventListener("mouseenter", () => {
  sheep.play();
});
document.querySelector("#bearSoloScene").addEventListener("mouseenter", () => {
  bear.play();
});
document.querySelector("#duckSoloScene").addEventListener("mouseenter", () => {
  duck.play();
});
document.querySelector("#turtleSoloScene").addEventListener("mouseenter", () => {
  splash.play();
});
document.querySelector("#beeSoloScene").addEventListener("mouseenter", () => {
  bee.play();
});
document.querySelector("#caterpillarSoloScene").addEventListener("mouseenter", () => {
  munch.play();
});

//second loaders______________________________________________________________________________________________________________
//bird solo
loader.load('./models/Bird_01.fbx', loadBirdSolo);
camera9.position.z = 50;

//sheep solo
loader.load('./models/Sheep_01.fbx', loadSheepSolo);
camera10.position.z = 50;

//hare solo
loader.load('./models/Bunny_01.fbx', loadHareSolo);
camera11.position.z = 50;

//bear solo
loader.load('./models/TeddyBear_01.fbx', loadBearSolo);
camera12.position.z = 50;

//turtle solo
loader.load('./models/Turtle_01.fbx', loadTurtleSolo);
camera13.position.z = 50;

//duck solo
loader.load('./models/RubberDuck_01.fbx', loadDuckSolo);
camera14.position.z = 50;

//caterpillar solo
loader.load('./models/Worm_01.fbx', loadCaterpillarSolo);
camera15.position.z = 50;

//bee solo
loader.load('./models/Bee_01.fbx', loadBeeSolo);
camera16.position.z = 50;

//animation___________________________________________________________________________________________________________________
function animate() { //this is like the draw() loop in p5

  //zoom in
  if (zoom && camera.zoom < 2) {
    camera.zoom = camera.zoom + 0.005;
    camera.updateProjectionMatrix();
  }
  if (xPos && camera.position.x > -14) {
    camera.position.x = camera.position.x - 0.05;
  }
  if (yPos && camera.position.y > -15) {
    camera.position.y = camera.position.y - 0.05;
  }
  if (xRot && camera.rotation.x < 0.9) {
    camera.rotation.x = camera.rotation.x + 0.003;
  }
  if (zPos && camera.position.z > 30) {
    camera.position.z = camera.position.z - 0.07;
  }

  //zoom out

  if (!zoom && camera.zoom > 1) {
    camera.zoom = camera.zoom - 0.003;
    camera.updateProjectionMatrix();
  }
  if (!xPos && camera.position.x < 0) {
    camera.position.x = camera.position.x + 0.07;
  }
  if (!yPos && camera.position.y < 0) {
    camera.position.y = camera.position.y + 0.07;
  }
  if (!xRot && camera.rotation.x > 0) {
    camera.rotation.x = camera.rotation.x - 0.003;
  }
  if (!zPos && camera.position.z < 50) {
    camera.position.z = camera.position.z + 0.07;
  }

  //zoom in
  if (zoom2 && camera3.zoom < 1.5) {
    camera3.zoom = camera3.zoom + 0.005;
    camera3.updateProjectionMatrix();
  }
  if (yPos2 && camera3.position.y > -30) {
    camera3.position.y = camera3.position.y - 0.12;
  }
  if (zPos2 && camera3.position.z > 30) {
    camera3.position.z = camera3.position.z - 0.1;
  }
  if (xRot2 && camera3.rotation.x < 0.7) {
    camera3.rotation.x = camera3.rotation.x + 0.003;
  }

  //zoom out
  if (!zoom2 && camera3.zoom > 1) {
    camera3.zoom = camera3.zoom - 0.003;
    camera3.updateProjectionMatrix();
  }
  if (!yPos2 && camera3.position.y < 0) {
    camera3.position.y = camera3.position.y + 0.16;
  }
  if (!zPos2 && camera3.position.z < 50) {
    camera3.position.z = camera3.position.z + 0.1;
  }
  if (!xRot2 && camera3.rotation.x > 0) {
    camera3.rotation.x = camera3.rotation.x - 0.005;
  }

  //zoom in

  if (zoom3 && camera4.zoom < 1.5) {
    camera4.zoom = camera4.zoom + 0.005;
    camera4.updateProjectionMatrix();
  }
  if (xRot3 && camera4.rotation.x < 0.9) {
    camera4.rotation.x = camera4.rotation.x + 0.005;
  }
  if (yPos3 && camera4.position.y > -10) {
    camera4.position.y = camera4.position.y - 0.05;
  }
  if (zPos3 && camera4.position.z > 30) {
    camera4.position.z = camera4.position.z - 0.1;
  }
  if (yRot3 && camera4.rotation.y > -0.3) {
    camera4.rotation.y = camera4.rotation.y - 0.003;
  }

  //zoom out 

  if (!zoom3 && camera4.zoom > 1) {
    camera4.zoom = camera4.zoom - 0.0025;
    camera4.updateProjectionMatrix();
  }
  if (!xRot3 && camera4.rotation.x > 0) {
    camera4.rotation.x = camera4.rotation.x - 0.007;
  }
  if (!yPos3 && camera4.position.y < 0) {
    camera4.position.y = camera4.position.y + 0.045;
  }
  if (!zPos3 && camera4.position.z < 50) {
    camera4.position.z = camera4.position.z + 0.1;
  }
  if (!yRot3 && camera4.rotation.y < 0) {
    camera4.rotation.y = camera4.rotation.y + 0.003;
  }

  //zoom in
  if (zoom4 && camera5.zoom < 2) {
    camera5.zoom = camera5.zoom + 0.005;
    camera5.updateProjectionMatrix();
  }
  if (zRot4 && camera5.rotation.z < 3.14) {
    camera5.rotation.z = camera5.rotation.z + 0.01;
  }
  if (xRot4 && camera5.rotation.x > -0.9) {
    camera5.rotation.x = camera5.rotation.x - 0.0024;
  }
  if (yPos4 && camera5.position.y < 30) {
    camera5.position.y = camera5.position.y + 0.1;
  }
  if (zPos4 && camera5.position.z > 15) {
    camera5.position.z = camera5.position.z - 0.15;
  }
  if (xPos4 && camera5.position.x < 10) {
    camera5.position.x = camera5.position.x + 0.1;
  }

  //zoom out
  if (!zoom4 && camera5.zoom > 1) {
    camera5.zoom = camera5.zoom - 0.003;
    camera5.updateProjectionMatrix();
  }
  if (!zRot4 && camera5.rotation.z > 0) {
    camera5.rotation.z = camera5.rotation.z - 0.01;
  }
  if (!xRot4 && camera5.rotation.x < 0) {
    camera5.rotation.x = camera5.rotation.x + 0.005;
  }
  if (!yPos4 && camera5.position.y > 0) {
    camera5.position.y = camera5.position.y - 0.1;
  }
  if (!zPos4 && camera5.position.z < 50) {
    camera5.position.z = camera5.position.z + 0.1;
  }
  if (!xPos4 && camera5.position.x > 0) {
    camera5.position.x = camera5.position.x - 0.1;
  }
  
  //zoom in
  if (zoom5 && camera2.zoom < 2) {
    camera2.zoom = camera2.zoom + 0.005;
    camera2.updateProjectionMatrix();
  }
  if (zRot5 && camera2.rotation.z < 3.4) {
    camera2.rotation.z = camera2.rotation.z + 0.02;
  }
  if (xRot5 && camera2.rotation.x > -0.9) {
    camera2.rotation.x = camera2.rotation.x - 0.004;
  }
  if (yRot5 && camera2.rotation.y > -0.4) {
    camera2.rotation.y = camera2.rotation.y - 0.002;
  }
  if (yPos5 && camera2.position.y < 20) {
    camera2.position.y = camera2.position.y + 0.1;
  }
  if (zPos5 && camera2.position.z > 30) {
    camera2.position.z = camera2.position.z - 0.1;
  }
  if (xPos5 && camera2.position.x > -20) {
    camera2.position.x = camera2.position.x - 0.1;
  }

  //zoom out 
  if (!zoom5 && camera2.zoom > 1) {
    camera2.zoom = camera2.zoom - 0.004;
    camera2.updateProjectionMatrix();
  }
  if (!zRot5 && camera2.rotation.z > 0) {
    camera2.rotation.z = camera2.rotation.z - 0.02;
  }
  if (!xRot5 && camera2.rotation.x < 0) {
    camera2.rotation.x = camera2.rotation.x + 0.007;
  }
  if (!yRot5 && camera2.rotation.y < 0) {
    camera2.rotation.y = camera2.rotation.y + 0.005;
  }
  if (!yPos5 && camera2.position.y > 0) {
    camera2.position.y = camera2.position.y - 0.1;
  }
  if (!zPos5 && camera2.position.z < 50) {
    camera2.position.z = camera2.position.z + 0.1;
  }
  if (!xPos5 && camera2.position.x < 0) {
    camera2.position.x = camera2.position.x + 0.1;
  }

  //zoom in
  if (zoom6 && camera6.zoom < 2) {
    camera6.zoom = camera6.zoom + 0.005;
    camera6.updateProjectionMatrix();
  }
  if (zRot6 && camera6.rotation.z < 3.14) {
    camera6.rotation.z = camera6.rotation.z + 0.03;
  }
  if (xRot6 && camera6.rotation.x > -0.8) {
    camera6.rotation.x = camera6.rotation.x - 0.003;
  }
  if (yPos6 && camera6.position.y < 30) {
    camera6.position.y = camera6.position.y + 0.1;
  }
  if (zPos6 && camera6.position.z > 25) {
    camera6.position.z = camera6.position.z - 0.1;
  }

  //zoom out
  if (!zoom6 && camera6.zoom > 1) {
    camera6.zoom = camera6.zoom - 0.004;
    camera6.updateProjectionMatrix();
  }
  if (!zRot6 && camera6.rotation.z > 0) {
    camera6.rotation.z = camera6.rotation.z - 0.02;
  }
  if (!xRot6 && camera6.rotation.x < 0) {
    camera6.rotation.x = camera6.rotation.x + 0.003;
  }
  if (!yPos6 && camera6.position.y > 0) {
    camera6.position.y = camera6.position.y - 0.1;
  }
  if (!zPos6 && camera6.position.z < 50) {
    camera6.position.z = camera6.position.z + 0.1;
  }

  //zoom in
  if (zoom7 && camera7.zoom < 1.8) {
    camera7.zoom = camera7.zoom + 0.005;
    camera7.updateProjectionMatrix();
  }
  if (xRot7 && camera7.rotation.x < 0.9) {
    camera7.rotation.x = camera7.rotation.x + 0.005;
  }
  if (yPos7 && camera7.position.y < 2) {
    camera7.position.y = camera7.position.y + 0.01;
  }
  if (yRot7 && camera7.rotation.y > -0.1) {
    camera7.rotation.y = camera7.rotation.y - 0.005;
  }
  if (zPos7 && camera7.position.z > 40) {
    camera7.position.z = camera7.position.z - 0.05;
  }
  if (xPos7 && camera7.position.x > -10) {
    camera7.position.x = camera7.position.x - 0.05;
  }
  
  //zoom out
  if (!zoom7 && camera7.zoom > 1) {
    camera7.zoom = camera7.zoom - 0.005;
    camera7.updateProjectionMatrix();
  }
  if (!xRot7 && camera7.rotation.x > 0) {
    camera7.rotation.x = camera7.rotation.x - 0.005;
  }
  if (!yPos7 && camera7.position.y > 0) {
    camera7.position.y = camera7.position.y - 0.01;
  }
  if (!yRot7 && camera7.rotation.y < 0) {
    camera7.rotation.y = camera7.rotation.y + 0.005;
  }
  if (!zPos7 && camera7.position.z < 53) {
    camera7.position.z = camera7.position.z + 0.05;
  }
  if (!xPos7 && camera7.position.x < 0) {
    camera7.position.x = camera7.position.x + 0.05;
  }

  //zoom in
  if (zoom8 && camera8.zoom < 2) {
    camera8.zoom = camera8.zoom + 0.005;
    camera8.updateProjectionMatrix();
  }
  if (zRot8 && camera8.rotation.z < 1.5) {
    camera8.rotation.z = camera8.rotation.z + 0.007;
  }
  if (xPos8 && camera8.position.x < 30) {
    camera8.position.x = camera8.position.x + 0.1;
  }
  if (yRot8 && camera8.rotation.y < 0.9) {
    camera8.rotation.y = camera8.rotation.y + 0.005;
  }
  if (zPos8 && camera8.position.z > 30) {
    camera8.position.z = camera8.position.z - 0.1;
  }

  //zoom out
  if (!zoom8 && camera8.zoom > 1) {
    camera8.zoom = camera8.zoom - 0.005;
    camera8.updateProjectionMatrix();
  }
  if (!zRot8 && camera8.rotation.z > 0) {
    camera8.rotation.z = camera8.rotation.z - 0.007;
  }
  if (!xPos8 && camera8.position.x > 0) {
    camera8.position.x = camera8.position.x - 0.2;
  }
  if (!yRot8 && camera8.rotation.y > 0) {
    camera8.rotation.y = camera8.rotation.y - 0.005;
  }
  if (!zPos8 && camera8.position.z < 50) {
    camera8.position.z = camera8.position.z + 0.1;
  }

  //renderers__________________________________________________________________________________________________________________
  renderer.render( scene, camera );
  renderer2.render(scene2, camera2);
  renderer3.render(scene3, camera3);
  renderer4.render(scene4, camera4);
  renderer5.render(scene5, camera5);
  renderer6.render(scene6, camera6);
  renderer7.render(scene7, camera7);
  renderer8.render(scene8, camera8);
  renderer9.render(scene9, camera9);
  renderer10.render(scene10, camera10);
  renderer11.render(scene11, camera11);
  renderer12.render(scene12, camera12)
  renderer13.render(scene13, camera13);
  renderer14.render(scene14, camera14);
  renderer15.render(scene15, camera15);
  renderer16.render(scene16, camera16);

  //rotations_____________________________________________________________________________________________________________________
  if (scene9.children.length === 4) {
    scene9.children[3].children[0].rotation.y = Date.now() * 0.001; //this makes it rotate
  }
  if (scene10.children.length === 4) {
    scene10.children[3].children[0].rotation.y = Date.now() * 0.001;
  }
  if (scene11.children.length === 4) {
    scene11.children[3].children[0].rotation.y = Date.now() * 0.001;
  }
  if (scene12.children.length === 4) {
    scene12.children[3].children[0].rotation.y = Date.now() * 0.001;
  }
  if (scene13.children.length === 4) {
    scene13.children[3].children[0].rotation.y = Date.now() * 0.001;
  }
  if (scene14.children.length === 4) {
    scene14.children[3].children[0].rotation.y = Date.now() * 0.001;
  }
  if (scene15.children.length === 4) {
    scene15.children[3].children[0].rotation.y = Date.now() * 0.001;
  }
  if (scene16.children.length === 4) {
    scene16.children[3].children[0].rotation.y = Date.now() * 0.001;
  }
  
}

//renderer loops____________________________________________________________________________________________________________
renderer.setAnimationLoop( animate );
renderer2.setAnimationLoop( animate);
renderer3.setAnimationLoop(animate);
renderer4.setAnimationLoop(animate);
renderer5.setAnimationLoop(animate);
renderer6.setAnimationLoop(animate);
renderer7.setAnimationLoop(animate);
renderer8.setAnimationLoop(animate);

renderer9.setAnimationLoop(animate);
renderer10.setAnimationLoop(animate);
renderer11.setAnimationLoop(animate);
renderer12.setAnimationLoop(animate);
renderer13.setAnimationLoop(animate);
renderer14.setAnimationLoop(animate);
renderer15.setAnimationLoop(animate);
renderer16.setAnimationLoop(animate);

//card info_____________________________________________________________________________________________________________________
function getInfo(animals) {
  for (let animal of animals) {
    const div1 = document.createElement('div');
    div1.setAttribute("class", "pictureBox");

    const regularName = document.createElement("p");
    regularName.setAttribute("class", "info");
    regularName.innerHTML = "Name: " + animal.name;
    
    const namePic = document.createElement("img");
    namePic.setAttribute("class", "namePic");
    namePic.setAttribute("src", "./pictures/name_icon.png");

    div1.appendChild(namePic);
    div1.appendChild(regularName);

    const div2 = document.createElement('div');
    div2.setAttribute("class", "pictureBox");

    const name = document.createElement("p");
    name.setAttribute("class", "info");
    name.innerHTML = "Scientific Name: " + animal.taxonomy.scientific_name;

    const sciencePic = document.createElement("img");
    sciencePic.setAttribute("class", "sciencePic");
    sciencePic.setAttribute("src", "./pictures/lab-beaker-icon.png");

    div2.appendChild(sciencePic);
    div2.appendChild(name);
    
    const div3 = document.createElement('div');
    div3.setAttribute("class", "pictureBox");

    const favFood = document.createElement('p');
    favFood.setAttribute("class", "info");
    favFood.innerHTML = "Favorite Food: " + animal.characteristics.favorite_food;

    const foodPic = document.createElement("img");
    foodPic.setAttribute("class", "foodPic");
    foodPic.setAttribute("src", './pictures/food.png');

    div3.appendChild(foodPic);
    div3.appendChild(favFood);

    const div4 = document.createElement('div');
    div4.setAttribute("class", "pictureBox");

    const threat = document.createElement('p');
    threat.setAttribute("class", "info");
    threat.innerHTML = "Biggest Threat: " + animal.characteristics.biggest_threat;

    const deathPic = document.createElement("img");
    deathPic.setAttribute("class", "foodPic");
    deathPic.setAttribute("src", './pictures/bomb.png');

    div4.appendChild(deathPic);
    div4.appendChild(threat);


    if (animal.name.toLowerCase().includes("bird")) {
      const bird = document.querySelector("#birdSolo");
      bird.appendChild(div1);
      bird.appendChild(div2);
      bird.appendChild(div3);
      bird.appendChild(div4);
    }
    if (animal.name.toLowerCase().includes("sheep")) {
      const sheep = document.querySelector("#sheepSolo");
      sheep.appendChild(div1);
      sheep.appendChild(div2);
      sheep.appendChild(div3);
      sheep.appendChild(div4);
    }
    if (animal.name.toLowerCase().includes("bear")) {
      const bear = document.querySelector("#bearSolo");
      bear.appendChild(div1);
      bear.appendChild(div2);
      bear.appendChild(div3);
      bear.appendChild(div4);
    }
    if (animal.name.toLowerCase().includes("duck")) {
      const duck = document.querySelector("#duckSolo");
      duck.appendChild(div1);
      duck.appendChild(div2);
      duck.appendChild(div3);
      duck.appendChild(div4);
    }
    if (animal.name.toLowerCase().includes("turtle")) {
      const turtle = document.querySelector("#turtleSolo");
      turtle.appendChild(div1);
      turtle.appendChild(div2);
      turtle.appendChild(div3);
      turtle.appendChild(div4);
    }
    if (animal.name.toLowerCase().includes("hare")) {
      const hare = document.querySelector("#hareSolo");
      hare.appendChild(div1);
      hare.appendChild(div2);
      hare.appendChild(div3);
      hare.appendChild(div4);
    }
    if (animal.name.toLowerCase().includes("caterpillar")) {
      const caterpillar = document.querySelector("#caterpillarSolo");
      caterpillar.appendChild(div1);
      caterpillar.appendChild(div2);
      caterpillar.appendChild(div3);
      caterpillar.appendChild(div4);
    }
    if (animal.name.toLowerCase().includes("bee")) {
      const bee = document.querySelector("#beeSolo");
      bee.appendChild(div1);
      bee.appendChild(div2);
      bee.appendChild(div3);
      bee.appendChild(div4);
    }
  }
}

document.addEventListener("DOMContentLoaded", loadData);