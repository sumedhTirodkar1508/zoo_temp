import * as THREE from 'three';
import { TextureLoader } from 'three';

export const scene13 = new THREE.Scene();
export const textureLoader = new TextureLoader();

export function loadTurtleSolo(object) {
    object.scale.set(60,60,60);
    object.position.set(0, -5, 20);
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
  scene13.add(object);
}

const geometry = new THREE.BoxGeometry(65, 65, 65); 
const material = new THREE.MeshBasicMaterial( {color: 0xf3e995} ); 
const cube = new THREE.Mesh( geometry, material ); 
cube.position.set(0, 0, -20);
scene13.add( cube );