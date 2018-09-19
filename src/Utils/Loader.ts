import * as THREE from 'three';
import * as objlibrary from 'three-obj-loader';

let OBJLoader = objlibrary(THREE);

export default class Loader {
    static getInstance() {
        if (!this.instance) {
            this.instance = new Loader();
            return this.instance;
        }
    }
    private static instance: Loader = null;
    private loader = new THREE.OBJLoader();

    load(...args: any[]) {
        this.loader.load.call(this.loader, ...args);
    }
}
