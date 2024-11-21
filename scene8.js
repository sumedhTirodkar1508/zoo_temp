import * as THREE from 'three';
import { TextureLoader } from 'three';

export const scene8 = new THREE.Scene();
export const textureLoader = new TextureLoader();

export function loadBee(object) {
    object.scale.set(50,50,50);
    object.position.set(0, 0, 0);
    object.rotation.set(1.5, -1, 0);
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
  scene8.add(object);
}

export function loadHive(object) {
    object.scale.set(0.5,0.5,0.5);
      object.position.set(5, 5, 0);
      object.rotation.set(0, 0, 0);
      object.traverse(function (child) {
          if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({color: 0xf5ef47});
          }
        });
    scene8.add(object);
}

export function loadHive2(object) {
    object.scale.set(0.5,0.5,0.5);
      object.position.set(16, 28, 0);
      object.rotation.set(0, 0, 0);
      object.traverse(function (child) {
          if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({color: 0xf5ef47});
          }
        });
    scene8.add(object);
} 

export function loadHive3(object) {
    object.scale.set(0.5,0.5,0.5);
      object.position.set(-7, -18, 0);
      object.rotation.set(0, 0, 0);
      object.traverse(function (child) {
          if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({color: 0xf5ef47});
          }
        });
    scene8.add(object);
}

export function loadHive4(object) {
    object.scale.set(1.8,1.8,1.8);
      object.position.set(45, -6, -10);
      object.rotation.set(0, 0, 1);
      object.traverse(function (child) {
          if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({color: 0xf5ef47});
          }
        });
    scene8.add(object);
}

export function loadHive5(object) {
    object.scale.set(0.5,0.5,0.5);
      object.position.set(2, -40, 0);
      object.rotation.set(0, 0, 0);
      object.traverse(function (child) {
          if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({transparent: false, opacity:0.8, color: 0xf5ef47});
          }
        });
    scene8.add(object);
}

export function loadBackground(object) {
    object.scale.set(0.3,0.3,0.3);
    object.position.set(-1, 0, -22);
    object.rotation.set(1.5, 0, 0);
    object.traverse(function (child) {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({color: 0x6ba160});
      }
      });
  scene8.add(object);
}

export function loadBackgroundBack(object) {
  object.scale.set(0.3,0.3,0.3);
  object.position.set(-100, -20, -12);
  object.rotation.set(1.6, 0, 0);
  object.traverse(function (child) {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({color: 0x6ba160});
    }
    });
scene8.add(object);
}

export function loadFlower5(object) {
    object.scale.set(1.5,1.5,1.5);
    object.position.set(-20,25, -20);
    object.rotation.set(1.8, 0, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          if (material && material.map) {
            const texture = textureLoader.load('./models/PolyAdventureTexture_01.png');
            material.map = texture;
          }
        }
      });
  scene8.add(object);
}