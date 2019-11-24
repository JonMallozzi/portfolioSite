//proper physics will be added to the movement later on

//Acceleration Variables
let dx = 0;
let dy = 0;
let dz = 0;

export function controls(camera){

    return document.addEventListener('keydown', event => {
        switch (event.key) {
            case 'ArrowUp':
                if(dz < 1){ dz += .25 }
                camera.position.z += -dz;
                console.log(dz);
                break;
            case 'ArrowDown' :
                if(dz < 1 ){ dz += .25 }
                camera.position.z += dz;
                console.log(dz);
                break;
            default :

        }

    });

}

//acceleration reset
export function reset(){
    return document.addEventListener('keyup', event => {
       switch (event.key){
           case 'ArrowUp' || 'ArrowDown' :
               dz = 0;
               break;
           default :
               break;
       }

    });
}