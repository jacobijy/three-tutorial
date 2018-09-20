import * as THREE from 'three';
import { EventDispatcher } from 'three';

export default class GameController extends EventDispatcher {
    static getInstance() {
        if (!this.instance) {
            this.instance = new GameController();
            return this.instance;
        }
    }
    private static instance: GameController = null;
    private vector: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
    private objects: THREE.Object3D[] = [];

    constructor() {
        super();
        // this.vector.
    }

    registerKeyBinding() {
        const mapPressKeys = {
            'w': 'moveForward',
            'a': 'moveLeft',
            's': 'moveBackward',
            'd': 'moveRight',
            ' ': 'jump'
        };
        const mapDownKeys = {
            'Escape': 'setting',
            ' ': 'jump',
        };
        window.onkeypress = (event: KeyboardEvent) => {
            let code = event.key;
            code = code.length === 1 ? code.toLowerCase() : code;
            if (mapPressKeys[code]) {
                try {
                    this[mapPressKeys[code]]();
                } catch (error) {
                    console.log(error);
                }
            }
        };
        window.onkeydown = (event: KeyboardEvent) => {
            let code = event.key;
            code = code.length === 1 ? code.toLowerCase() : code;
            if (mapDownKeys[code]) {
                try {
                    this[mapDownKeys[code]]();
                } catch (error) {
                    console.log(error);
                }
            }
        };
    }

    moveForward() {
        console.log('forward');
        // this.objects.forEach(object => object.position.add(this.vector));
    }

    moveBackward() {
        console.log('back');
    }

    moveLeft() {
        console.log('left');
    }

    moveRight() {
        console.log('right');
    }
}
