import * as THREE from 'three';
import { TextureLoader } from 'three';

export const scene2 = new THREE.Scene();
const textureLoader = new TextureLoader();

function getRandomNumber(min, max) {
    return Math.random() * (max - min + 1)  + min;
}

export function loadSheep(object) {
    object.scale.set(40,40,40);
    object.position.set(0, -20, 0);
    object.rotation.set(1.5, 1, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          if (material && material.map) {
            const texture = textureLoader.load('./models/BabyPack_TextureAtlas_01.png');
            material.map = texture;
          }
        }
      });
  scene2.add(object);
}

export function loadGround2(object) {
    object.scale.set(0.3,0.3,0.3);
    object.position.set(0, 0, -25);
    object.rotation.set(1.5, 1.5, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          if (material && material.map) {
            const texture = textureLoader.load('./models/PolyKnightsTexture_01.png');
            material.map = texture;
          }
        }
      });
  scene2.add(object);
}

export function loadGround2Back(object) {
  object.scale.set(0.3,0.3,0.3);
  object.position.set(50, -80, -30);
  object.rotation.set(1 , 2.3, 0);
  object.traverse(function (child) {
      if (child.isMesh) {
        const material = child.material;
        if (material && material.map) {
          const texture = textureLoader.load('./models/PolyKnightsTexture_01.png');
          material.map = texture;
        }
      }
    });
scene2.add(object);
}

export function loadDirt(object) {
    object.scale.set(0.6,0.6,0.6);
    object.position.set(0, 0, -10);
    object.rotation.set(1.5, 1.5, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          if (material && material.map) {
            const texture = textureLoader.load('./models/PolyKnightsTexture_01.png');
            material.map = texture;
          }
        }
      });
  scene2.add(object);
}

export function loadCart(object) {
    object.scale.set(0.08,0.08,0.08);
    object.position.set(15, 15, 0);
    object.rotation.set(1.5, 0, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          if (material && material.map) {
            const texture = textureLoader.load('./models/PolyKnightsTexture_01.png');
            material.map = texture;
          }
        }
      });
  scene2.add(object);
}

export function loadGrass2(object) {
    object.scale.set(0.1,0.1,0.1);
    object.position.set(getRandomNumber(-30, 30), getRandomNumber(-30, 30), -5);
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
  scene2.add(object);
} 

export function loadPebble(object) {
    object.scale.set(0.5,0.5,0.5);
    object.position.set(-30, 30, 0);
    object.rotation.set(1.5, 0, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          if (material && material.map) {
            const texture = textureLoader.load('./models/PolyKnightsTexture_01.png');
            material.map = texture;
          }
        }
      });
  scene2.add(object);
}