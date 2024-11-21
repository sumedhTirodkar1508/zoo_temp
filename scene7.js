import * as THREE from 'three';
import { TextureLoader } from 'three';

export const scene7 = new THREE.Scene();
const textureLoader = new TextureLoader();

export function loadCaterpillar(object) {
    object.scale.set(10,10,10);
    object.position.set(-10, 10, 30);
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
  scene7.add(object);
}

export function loadHill(object) {
    object.scale.set(0.1,0.1,0.1);
      object.position.set(0, 0, -10);
      object.rotation.set(1.5, 0, 0);
      object.traverse(function (child) {
          if (child.isMesh) {
            const material = child.material;
            if (material && material.map) {
              const texture = textureLoader.load('./models/PolyAdventureTexture_02.png');
              material.map = texture;
            }
          }
        });
    scene7.add(object);
}

export function loadHillBack(object) {
  object.scale.set(0.1,0.1,0.1);
    object.position.set(-20, 50, 0);
    object.rotation.set(2, 0, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          if (material && material.map) {
            const texture = textureLoader.load('./models/PolyAdventureTexture_02.png');
            material.map = texture;
          }
        }
      });
  scene7.add(object);
}

export function loadTreeStump(object) {
    object.scale.set(0.2,0.2,0.2);
      object.position.set(5, -10, 30);
      object.rotation.set(1.5, 0, 0);
      object.traverse(function (child) {
          if (child.isMesh) {
            const material = child.material;
            if (material && material.map) {
              const texture = textureLoader.load('./models/PolyAdventureTexture_02.png');
              material.map = texture;
            }
          }
        });
    scene7.add(object);
}

export function loadMushroom(object) {
    object.scale.set(0.08,0.08,0.08);
      object.position.set(1, 9, 34);
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
    scene7.add(object);
  }

export function loadMushroom2(object) {
    object.scale.set(0.05,0.05,0.05);
      object.position.set(-1,5, 34);
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
    scene7.add(object);
}

export function loadApple(object) {
    object.scale.set(0.08,0.08,0.08);
      object.position.set(-6, 0, 38);
      object.rotation.set(0, 0, 0);
      object.traverse(function (child) {
          if (child.isMesh) {
            const material = child.material;
            if (material && material.map) {
              const texture = textureLoader.load('./models/PolygonPrototype_Texture_01.png');
              material.map = texture;
            }
          }
        });
    scene7.add(object);
}