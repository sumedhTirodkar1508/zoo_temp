import * as THREE from 'three';
import { TextureLoader } from 'three';

export const scene14 = new THREE.Scene();
export const textureLoader = new TextureLoader();

export function loadDuckSolo(object) {
    object.scale.set(100,100,100);
    object.position.set(0, -10, 20);
    object.rotation.set(0, 3.14, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          if (material && material.map) {
            const texture = textureLoader.load('./models/BabyPack_TextureAtlas_01.png');
            material.map = texture;
          }
        }
      });
  scene14.add(object);
}

const geometry = new THREE.BoxGeometry(65, 65, 65); 
const material = new THREE.MeshBasicMaterial( {color: 0xf3c295} ); 
const cube = new THREE.Mesh( geometry, material ); 
cube.position.set(0, 0, -20);
scene14.add( cube );