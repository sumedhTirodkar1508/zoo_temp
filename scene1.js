import * as THREE from 'three';
import { TextureLoader } from 'three';

export const scene = new THREE.Scene();
const textureLoader = new TextureLoader();

function getRandomNumber(min, max) {
    return Math.random() * (max - min + 1)  + min;
}

export function loadBird(object) {
    object.scale.set(30,30,30);
    object.position.set(-20, 20, 0);
    object.rotation.set(1.5, 3.7, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          if (material && material.map) {
            const texture = textureLoader.load('./models/Toys2_TextureAtlas_01.png');
            material.map = texture;
          }
        }
      });
  scene.add(object);
}

export function loadTree(object) {
    object.scale.set(0.08,0.08,0.08);
    object.position.set(7, 6, 0);
    object.rotation.set(1.5, 0, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          if (material && material.map) {
            const texture = textureLoader.load('./models/PolyAdventureTexture_01.png');
            material.map = texture;
          }
        }
      });
  scene.add(object);
}

export function loadLog(object) {
    object.scale.set(0.15,0.15,0.15);
    object.position.set(-19, 20, -4);
    object.rotation.set(1.5, 3.7, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          if (material && material.map) {
            const texture = textureLoader.load('./models/PolyAdventureTexture_01.png');
            material.map = texture;
          }
        }
      });
  scene.add(object);
}

export function loadGround(object) {
    object.scale.set(0.3,0.3,0.3);
    object.position.set(0, 0, -20);
    object.rotation.set(1.5, 0, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({color: 0x8ead7d});
        }
      });
  scene.add(object);
}

export function loadGroundBack(object) {
  object.scale.set(0.3,0.3,0.3);
  object.position.set(-15, 100, -40);
  object.rotation.set(2, 0, 0);
  object.traverse(function (child) {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({color: 0x8ead7d});
      }
    });
scene.add(object);
}

export function loadRock(object) {
    object.scale.set(0.3,0.3,0.3);
    object.position.set(-20, -20, 0);
    object.rotation.set(1.5, 0, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          if (material && material.map) {
            const texture = textureLoader.load('./models/PolyAdventureTexture_Dark_01.png');
            material.map = texture;
          }
        }
      });
  scene.add(object);
}

export function loadRock2(object) {
    object.scale.set(0.2,0.2,0.2);
    object.position.set(-26, -26, 0);
    object.rotation.set(1.5, 1, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          if (material && material.map) {
            const texture = textureLoader.load('./models/PolyAdventureTexture_Dark_01.png');
            material.map = texture;
          }
        }
      });
  scene.add(object);
}

export function loadGrass(object) {
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
  scene.add(object);
}

export function loadFlower(object) {
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
  scene.add(object);
}

export function loadFlower2(object) {
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
  scene.add(object);
}