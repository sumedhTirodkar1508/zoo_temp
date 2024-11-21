import * as THREE from 'three';
import { TextureLoader } from 'three';

export const scene5 = new THREE.Scene();
const textureLoader = new TextureLoader();

function getRandomNumber(min, max) {
    return Math.random() * (max - min + 1)  + min;
}

export function loadTurtle(object) {
  object.scale.set(40,40,40);
  object.position.set(10, -10, -6);
  object.rotation.set(1.7, 0.5, 0);
  object.traverse(function (child) {
    if (child.isMesh) {
      const material = child.material;
      if (material && material.map) {
        const texture = textureLoader.load('./models/BabyPack_TextureAtlas_01.png');
        material.map = texture;
      }
    }
  });
  scene5.add(object);
}

export function loadWater(object) {
    object.scale.set(0.3,0.3,0.3);
    object.position.set(0, -2, -20);
    object.rotation.set(1.5, 0, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({transparent: true, opacity:0.5, color: 0x049ef4, roughness:0.145, metalness:0.323});
        }
      });
  scene5.add(object);
}

export function loadSand(object) {
    object.scale.set(0.8, 0.8, 0.8);
    object.position.set(50, -55, -10);
    object.rotation.set(1.5, 1.5, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({color: 0xcec992});
        }
      });
  scene5.add(object);
}

export function loadPlant(object) {
    let size = Math.random() * 0.05 + 0.05;
    object.scale.set(size,size,size);
      object.position.set(getRandomNumber(-30, 30), getRandomNumber(-30, 20), -9);
      object.rotation.set(1.5, Math.random() * 3, 0);
      object.traverse(function (child) {
          if (child.isMesh) {
            const material = child.material;
            if (material && material.map) {
              const texture = textureLoader.load('./models/PolyAdventureTexture_01.png');
              material.map = texture;
            }
          }
        });
    scene5.add(object);
}

export function loadPebble6(object) {
    let size = Math.random() * 0.05 + 0.05;
     object.scale.set(size,size,size);
     object.position.set(getRandomNumber(-30, 30), getRandomNumber(-30, 20), -9);
     object.rotation.set(1.5, Math.random() * 3, 0);
     object.traverse(function (child) {
         if (child.isMesh) {
           let colors = [0xaf91c0, 0x8fcccb, 0xc0b991];
           let randomIndex = Math.floor(Math.random() * 3);
           child.material = new THREE.MeshStandardMaterial({color: colors[randomIndex]});
         }
       });
   scene5.add(object);
 }