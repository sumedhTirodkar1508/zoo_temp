import * as THREE from 'three';
import { TextureLoader } from 'three';

export const scene6 = new THREE.Scene();
const textureLoader = new TextureLoader();

function getRandomNumber(min, max) {
    return Math.random() * (max - min + 1)  + min;
}

export function loadDuck(object) {
    object.scale.set(60,60,60);
      object.position.set(-5, 0, -6.5);
      object.rotation.set(1.7, 0, 0);
      object.traverse(function (child) {
          if (child.isMesh) {
            const material = child.material;
            if (material && material.map) {
              const texture = textureLoader.load('./models/BabyPack_TextureAtlas_01.png');
              material.map = texture;
            }
          }
        });
    scene6.add(object);
}

export function loadWater2(object) {
    object.scale.set(0.3,0.3,0.3);
    object.position.set(0, 0, -20);
    object.rotation.set(1.5, 3.2, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({transparent: true, opacity:0.8, color: 0x049ef4, roughness:0.145, metalness:0.323});
        }
      });
  scene6.add(object);
}

export function loadLillyPads(object) {
    object.scale.set(0.2,0.2,0.2);
    object.position.set(13, 10, -5.5);
    object.rotation.set(1.5, 3, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          if (material && material.map) {
            const texture = textureLoader.load('./models/PolyAdventureTexture_01.png');
            material.map = texture;
          }
        }
      });
  scene6.add(object);
}

export function loadReeds(object) {
    let size = Math.random() * 0.08 + 0.08;
    object.scale.set(size,size,size);
    object.position.set(getRandomNumber(-30, 10), getRandomNumber(-40, -15), -7);
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
  scene6.add(object);
}