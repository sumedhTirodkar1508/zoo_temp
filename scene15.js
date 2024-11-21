import * as THREE from 'three';
import { TextureLoader } from 'three';

export const scene15 = new THREE.Scene();
export const textureLoader = new TextureLoader();

export function loadCaterpillarSolo(object) {
    object.scale.set(40,40,40);
    object.position.set(0, -10, 20);
    object.rotation.set(0, 3.14, 0);
    object.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          if (material && material.map) {
            const texture = textureLoader.load('./models/Toys2_TextureAtlas_01.png');
            material.map = texture;
          }
        }
      });
  scene15.add(object);
}

const geometry = new THREE.BoxGeometry(70, 70, 70); 
const material = new THREE.MeshBasicMaterial( {color: 0xf39595} ); 
const cube = new THREE.Mesh( geometry, material ); 
cube.position.set(0, 0, -25);
scene15.add( cube );