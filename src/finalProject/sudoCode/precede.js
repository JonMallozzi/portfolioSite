//sudo code for procedeually generating the city 

var MersenneTwister = require('mersenne-twister');
var generator = new MersenneTwister();

generator.random(123) // give a range of numbers 
                   // this will a random number in that range
                   // which will then be passed as vpos of the object being generated


      //mat for a building forexample
      let mat = new THREE.ShaderMaterial({
        uniforms: {
          uv: {value: new THREE.Vec4(rand,rand,rand,1.0)}, //height and number segments
          color: {value: new THREE.Vec4(colorOfBuilding, colorOfBuilding,
                                        colorOfBuilding, alphaIs1)}
        },
        vertexShader: vertShader,
        fragmentShader: fragsShader
    });

    //mat and geometry will probably be globals 
  function drawBuilding(chunk, mat, geometry, position ){

        buildingMesh = new THREE.Mesh(mat, geometry); //geometry is obtained from the
                                                      //gltf file for the building

        chunk.add(buildingMesh);

        buildingMesh.position.set(position); //postiion is a vec3 of where goes
                                             //in its corresponding chunk of the city

  }
  
   function buildingsForChunk(chunk, generator){


    let random = generator.random(222); //make a random number generator 
                               //using the code above for number of buildings in chunk
                               //range of some number like 5 to 15
    
    let randomPosition = generator.random(223); //random numbers for the postion

      for(let i = 0; i < randomNumber; i++){
          //write dictionary to check if position is take and close
          drawBuilding(chunk,randomPosition)
      }
   }


  function setupChunks(scene, viewDistance){

    for(let i = 0; i < 10; i++){ //renders the ten starting chunks on the screen

        
        var MersenneTwister = require('mersenne-twister');
        var generator = new MersenneTwister(); //probably will install as npm and add this
                                               //as an import and should probably be global

       let chunk = new THREE.Object3D();

       buildingsForChunk(chunk, generator);

       for(let j =0; i < 10; i++){
           let chunkId = i.toString() + j.toString();
           chunk.id = Number(chunkId); 
       }

       if(i < 4 && i > 0){ //draws 4 to right of starting
        chunk.position.set(vec3(chunkWidth,y,z));
        scene.add(chunk);
       }else if (i > 4 && i < 9){ //draws 4 below of starting
        chunk.position.set(vec3(x,chunkHeight,z));
        scene.add(chunk);
       }else if( i == 9){ //draws the diagonal 
        chunk.position.set(vec3(x,chunkHeight,z));
        scene.add(chunk);
       }else{//adds starting chunk
           scene.add(chunk);
       }
       
    }


    function generateMoreChunks(scene,viewDistance){
        //draw L and diagonal again 

        //checks to see if the chunk moved into 
        //is greater than the viewdistance 
        // and deletes those chunks farther than viewstance
        //in the direction moved from the scene 

        if(4 - Number(String(currentChunk.id).charAt(0)) == 0  ){//the 4 would probably 
                                                                //be a viewdistance 
                                                                //varible in config file 
          for(let i = 0; i < 5; i++){
            scene.remove(currentChunk.id - 50 + i); //because moving down would make it be 
                                                //50 greater or 5 in y direction to remove
          }
        }else if(4 - Number(String(currentChunk.id).charAt(1)) == 0 ){
           for(let i = 0; i < 50; i += 10){
            scene.remove(currentChunk.id - 5 + i);
           }

        }
    }
    
    

            


  }