  
function accelerationCalculation(currentVelocity,
                                 targetVelocity,
                                 accelerationVelocity,
                                 dt){

                                     let currAmtToTarget = targetVelocity - currentVelocity;
                                     let springforce = currAmtToTarget * accelerationConst;
                                     let dampingForce = -accelerationVelocity * 2 * Math.sqrt(acclerationConst);
                                     let force = springforce + dampingForce;
                                     accelerationVelocity += force * dt;
                                     currentVelocity = accelerationVelocity * dt;

                                 }

export function acclerationControl(camera){
    return document.addEventListener('keydown', event => {

        switch (event.key) {
            case 'ArrowUp': //create a case for each key to move the camera in there 
                            //respected direction
                if(dz < targetVelocity){ // checks if the camera reaches max velocity
                    accelerationCalculation()// fill with constants
                }else {
                    dt = 0; //reset time for deaccleration 
                } 
                camera.position.z += -currentVelocity;
                console.log(dz);
                break;
            default :

        }
}