import * as THREE from 'three';
import { TextureLoader } from 'three';

export const scene3 = new THREE.Scene();
const textureLoader = new TextureLoader();

export function loadHare(object) {
    object.scale.set(30,30,30);
    object.position.set(0, -10, 0);
    object.rotation.set(1.3, 3.7, 0);
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
  scene3.add(object);
}

export function loadSnow(object) {
    object.scale.set(0.3,0.3,0.3);
    object.position.set(-2, 0, -30);
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
  scene3.add(object);
}

export function loadSnowBack(object) {
  object.scale.set(0.3,0.3,0.3);
  object.position.set(0, 100, -20);
  object.rotation.set(2, 0, 0);
  object.traverse(function (child) {
    if (child.isMesh) {
      const material = child.material;
      if (material && material.map) {
        const texture = textureLoader.load('./models/PolyAdventureTexture_01.png');
        material.map = texture;
      }
    }
  });
scene3.add(object);
}

export function loadSnowPile(object) {
    object.scale.set(0.08,0.08,0.08);
    object.position.set(-15, 15, 0);
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
  scene3.add(object);
}

export function loadSnowPile2(object) {
    object.scale.set(0.2,0.2,0.2);
    object.position.set(-30, 30, 0);
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
  scene3.add(object);
}

export function loadTree2(object) {
    object.scale.set(0.04,0.04,0.04);
    object.position.set(15, 15, 0);
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
  scene3.add(object);
}

export function loadTree3(object) {
    object.scale.set(0.04,0.04,0.04);
    object.position.set(5, 20, 0);
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
  scene3.add(object);
}

export function loadRock3(object) {
    object.scale.set(0.2,0.2,0.2);
    object.position.set(-26, -26, 0);
    object.rotation.set(1.5, 2, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          if (material && material.map) {
            const texture = textureLoader.load('./models/PolyAdventureTexture_Dark_01.png');
            material.map = texture;
          }
        }
      });
  scene3.add(object);
}

export function loadSnowyTree(object) {
    object.scale.set(0.04,0.04,0.04);
    object.position.set(25, 5, 0);
    object.rotation.set(1.2, 2, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          if (material && material.map) {
            const texture = textureLoader.load('./models/PolyAdventureTexture_Dark_01.png');
            material.map = texture;
          }
        }
      });
  scene3.add(object);
}