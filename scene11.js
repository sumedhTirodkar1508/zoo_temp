import * as THREE from 'three';
import { TextureLoader } from 'three';

export const scene11 = new THREE.Scene();
export const textureLoader = new TextureLoader();

export function loadHareSolo(object) {
    object.scale.set(50,50,50);
    object.position.set(0, -10, 20);
    object.rotation.set(0, 3.14, 0);
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
  scene11.add(object);
}

const geometry = new THREE.BoxGeometry(65, 65, 65); 
const material = new THREE.MeshBasicMaterial( {color: 0xd8b1f0} ); 
const cube = new THREE.Mesh( geometry, material ); 
cube.position.set(0, 0, -20);
scene11.add( cube );