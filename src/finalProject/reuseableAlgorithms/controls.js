//proper physics will be added to the movement later on
//controls needs to be outlined and some what fixed monday night

//Acceleration Variables
let dx = 0;
let dy = 0;
let dz = 0;

export function controls(camera){

    return document.addEventListener('keydown', event => {
        switch (event.key) {
            case 'ArrowUp':
                if(dz < 1){ dz += 0.25 }
                camera.position.z += -dz;
                console.log(dz);
                break;
            case 'ArrowDown' :
                if(dz < 1 ){ dz += 0.25 }
                camera.position.z += dz;
                console.log(dz);
                break;
            case 'ArrowRight' :
                if(dx < 1){dx += 0.25}
                camera.position.x += dx;
                break;
            default :

        }

    });

}

//acceleration reset
export function reset(){
    return document.addEventListener('keyup', event => {
       switch (event.key){
           case 'ArrowUp':
               dz = 0;
               console.log("hi");
               break;
           case 'ArrowDown':
               dz = 0;
               console.log("hi");
               break;
           default :
               break;
       }

    });
}