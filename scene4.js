import * as THREE from 'three';
import { TextureLoader } from 'three';

export const scene4 = new THREE.Scene();
const textureLoader = new TextureLoader();

function getRandomNumber(min, max) {
    return Math.random() * (max - min + 1)  + min;
}

export function loadBear(object) {
    object.scale.set(50,50,50);
    object.position.set(14, 14, 0);
    object.rotation.set(1.5, 2.4, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          if (material && material.map) {
            const texture = textureLoader.load('./models/Toys_TextureAtlas.png');
            material.map = texture;
            material.shininess = 0;
          }
        }
      });
  scene4.add(object);
}

export function loadGround3(object) {
    object.scale.set(0.31,0.31,0.31);
    object.position.set(0, 0, -25);
    object.rotation.set(1.5, 3, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({color: 0x4b7a31});
        }
      });
  scene4.add(object);
}

export function loadGround3Back(object) {
  object.scale.set(0.4,0.4,0.4);
  object.position.set(70, 130, -5);
  object.rotation.set(2, 2, 0);
  object.traverse(function (child) {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({color: 0x4b7a31});
      }
    });
  scene4.add(object);
}

export function loadPebble2(object) {
    object.scale.set(1,1,1);
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
  scene4.add(object);
}

export function loadPebble3(object) {
    object.scale.set(1.3,1.3,1.3);
    object.position.set(-10, 30, 0);
    object.rotation.set(1.5, 2, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          if (material && material.map) {
            const texture = textureLoader.load('./models/PolyKnightsTexture_01.png');
            material.map = texture;
          }
        }
      });
  scene4.add(object);
}

export function loadPebble4(object) {
    object.scale.set(1.3,1.3,1.3);
    object.position.set(10, 40, -2);
    object.rotation.set(1.5, 2.3, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          if (material && material.map) {
            const texture = textureLoader.load('./models/PolyKnightsTexture_01.png');
            material.map = texture;
          }
        }
      });
  scene4.add(object);
}

export function loadPebble5(object) {
    object.scale.set(1,1,1);
    object.position.set(30, 30, 0);
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
  scene4.add(object);
}

export function loadGrass3(object) {
    object.scale.set(0.1,0.1,0.1);
    object.position.set(getRandomNumber(-30, 30), getRandomNumber(-30, 20), -5);
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
  scene4.add(object);
}

export function loadFlower3(object) {
    object.scale.set(0.1,0.1,0.1);
    object.position.set(getRandomNumber(-30, 30), getRandomNumber(-30, 20), -5);
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
  scene4.add(object);
}

export function loadFlower4(object) {
    object.scale.set(0.1,0.1,0.1);
    object.position.set(getRandomNumber(-30, 30), getRandomNumber(-30, 20), -5);
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
  scene4.add(object);
}

export function loadTree4(object) {
    object.scale.set(0.05,0.05,0.05);
    object.position.set(-15, -10, 0);
    object.rotation.set(1.5, 2, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          if (material && material.map) {
            const texture = textureLoader.load('./models/PolyAdventureTexture_01.png');
            material.map = texture;
          }
        }
      });
  scene4.add(object);
}

export function loadTree5(object) {
    object.scale.set(0.04,0.04,0.04);
    object.position.set(-0, -15, 0);
    object.rotation.set(1.5, 2, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          if (material && material.map) {
            const texture = textureLoader.load('./models/PolyAdventureTexture_01.png');
            material.map = texture;
          }
        }
      });
  scene4.add(object);
}