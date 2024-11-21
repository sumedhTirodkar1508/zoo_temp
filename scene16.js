import * as THREE from 'three';
import { TextureLoader } from 'three';

export const scene16 = new THREE.Scene();
export const textureLoader = new TextureLoader();

export function loadBeeSolo(object) {
    object.scale.set(60,60,60);
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
  scene16.add(object);
}

const geometry = new THREE.BoxGeometry(70, 70, 70); 
const material = new THREE.MeshBasicMaterial( {color: 0x959df3} ); 
const cube = new THREE.Mesh( geometry, material ); 
cube.position.set(0, 0, -25);
scene16.add( cube );