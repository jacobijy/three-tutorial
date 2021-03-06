import * as THREE from 'three';
import * as objlibrary from 'three-obj-loader';
import * as MTLLoader from 'three-mtl-loader';

let OBJLoader = objlibrary(THREE);

export default class Loader {
    static getInstance() {
        if (!this.instance) {
            this.instance = new Loader();
            return this.instance;
        }
    }
    private static instance: Loader = null;
    private objLoader = new THREE.OBJLoader();
    private mtlLoader = new MTLLoader();

    load(...args: any[]) {
        // this.mtlLoader.load()
        this.objLoader.load.call(this.objLoader, ...args);
    }
}
