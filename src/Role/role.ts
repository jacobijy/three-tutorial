import * as THREE from 'three';
import Loader from '../Utils/Loader';
import scene from '..';

export default class Role {
    private position: THREE.Vector3 = null;
    private path: string = '';
    private sprite = null;

    constructor(path?: string) {
        this.path = path;
        this.onLoad = this.onLoad.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.onError = this.onError.bind(this);
    }

    onLoad(group: THREE.Group) {
        console.log('load success');
        console.log(group);
        scene.add(group);
    }

    onProgress(event: ProgressEvent) {
        console.log('progress', (event.loaded / event.total * 100) + '% loaded');
    }

    onError() {
        console.log('error occurred');
    }

    load() {
        Loader.getInstance().load(this.path, this.onLoad, this.onProgress, this.onError);
    }
}
