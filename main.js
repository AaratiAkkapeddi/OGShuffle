

//basically we are grabbing all the elements one by one randomly from one array, storing them in a temp array and then setting that array equal to the original.
var state = 'clean';
var round = 0;
var rounds = [1,2,3,4,5]
function serve(arr, index){
	if(arr[index] == 'Oh Golly'){
	   $('canvas').remove()
	   $('.visual div').css('max-height','0').css('opacity','0');
	   $('.og').css('max-height','1200px').css('opacity','1');
	   $('.og h4').css('text-shadow','5px 5px #ff0000;').css('transform','translateY(55%)')
	   var arrOfSpans = $('.og span');
	   animateDiv(arrOfSpans[2])
	   $.each(arrOfSpans,function(index, item){
	   	animateDiv(item)
	   })
	} else if(arr[index] == 'Lily Konigsberg'){
	    $('canvas').remove()
		$('.og h4').css('text-shadow','5px 5px #ff0000;').css('transform','translateY(0%)')
		$('.visual div').css('max-height','0').css('opacity','0');
		 $('.lk').css('max-height','1200px').css('opacity','1');
		} else if(arr[index] == 'Love Spread'){
			$('canvas').remove()
			lily();
      $('canvas').css('opacity', 1);
			$('.og h4').css('text-shadow','5px 5px #ff0000;').css('transform','translateY(0%)')
			$('.visual div').css('max-height','0').css('opacity','0');
			$('.dg').css('max-height','1200px').css('opacity','1');
			} else if(arr[index] == 'Big Figment'){
				$('canvas').remove()
				$('.og h4').css('text-shadow','5px 5px #ff0000;').css('transform','translateY(0%)')
				$('.visual div').css('max-height','0').css('opacity','0');
				$('.bf').css('max-height','1200px').css('opacity','1');
			} else if (arr[index] == 1){
        $('.visual div').css('max-height','0').css('opacity','0');
        $('canvas').remove();
        $('.round1').css('max-height','1200px').css('opacity','1');
      } else if (arr[index] == 2){
        $('.visual div').css('max-height','0').css('opacity','0');
        $('canvas').remove();
        $('.round2').css('max-height','1200px').css('opacity','1');
      } else if (arr[index] == 3){
        $('.visual div').css('max-height','0').css('opacity','0');
        $('canvas').remove();
        $('.round3').css('max-height','1200px').css('opacity','1');
      } else if (arr[index] == 4){
        $('.visual div').css('max-height','0').css('opacity','0');
        $('canvas').remove();
        $('.round4').css('max-height','1200px').css('opacity','1');
      } else if (arr[index] == 5){
        $('.visual div').css('max-height','0').css('opacity','0');
        $('canvas').remove();
        $('.round5').css('max-height','1200px').css('opacity','1');
      }

}
		function shuff(array){

  			if(state == 'clean'){
  				shuffle(array);
          if(round == 0){
            var index = 0;
            serve(rounds,0);
            } else if (round == 1){
              var index = 0;
              serve(rounds,1);
              } else if (round == 2){
                var index = 0;
                serve(rounds,2);
                } else if (round == 3){
                  var index = 0;
                  serve(rounds,3);
                  } else if (round == 4){
                    var index = 0;
                    serve(rounds,4);
                  }		
				  state = 0;
				} else if(state == 0){
          // shuffle(array);
          var index = 0;
          serve(array,index);
          state = 1;
          }
          else if (state == 1){
						var index = 1;
						serve(array,index);
						state = 2;
						}	else if (state == 2){
							var index = 2;
							serve(array,index);
							state = 3;
							}	else if (state == 3){
								var index = 3;
								serve(array,index);
								state = 'clean';
                if(round == 4){
                  round = 0;
                } else{
                  round++;
                }
							}

		}
		function reset(array){
			shuffle(array);
			// $('h1').text(array[0])
					state = 1; 
		}
		function shuffle(array) {
		  var currentIndex = array.length; //so if the array is ['pink','blue','red'] it's 3
		  var temporaryValue; //this will be a placeholder
		  var randomIndex; //this will be a randomized slot index

		  // While there remain elements to shuffle...
		  while (0 !== currentIndex) {

		    // Pick a remaining element...
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;

		    // And swap it with the current element.
		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;
		  }

		  return array;
		}

		var arr = ['Big Figment','Lily Konigsberg','Oh Golly','Love Spread'];

	    $('#array').text(arr.join(', '));
	    $('div.array').click(function(){
	        shuff(arr)
	        $('#array').text(arr.join(', '));

	    });

	    $('body').keyup(function(e){
		   if(e.keyCode == 32){
		       // user has pressed space
		      shuff(arr)
	        $('#array').text(arr.join(', '));
		   } else if(e.keyCode == 82){
			   	reset(arr);
		        $('#array').text(arr.join(', '));
			   }
		});


	    $('div.reset').click(function(){
	        reset(arr);
	        // $('#array').text(arr.join(', '));

	    });
	

/* random movement */
// $(document).ready(function(){
//     animateDiv();
    
// });

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() + 50 ; 
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(x){
    var newq = makeNewPosition();
    $(x).animate({ top: newq[0], left: newq[1] },1000, function(){
      animateDiv(x);  
       
    });
    
};

/* CANVAS */
function lily(){
//Declare global variables

var canvas = document.createElement("canvas");
   var c = canvas.getContext('2d');

    $(document).ready(function(){
      //initial drawing of canvas and append to body
      canvas.width = $(window).width();
      canvas.height = $(window).height();
      c.fillStyle = 'pink';
      c.fillRect(0,0, $(window).width(), $(window).height());
      $(canvas).appendTo('body');
      var imageObj = new Image();
      imageObj.src = 'http://freepngimages.com/wp-content/uploads/2014/04/kitten_2.png';

      var particles = {};
      var particleIndex = 0;
      var particleNum = 2;
      var mouseX;
      var mouseY;

      //Particle Exploder
      // $(document).on('load', function(event){
    //   	setInterval(function(){
    //     for(var i in particles){
    //       particles[i].vx *= 1;
    //       particles[i].vy *= 1;
    
    //     }
    // }, 1000);
      // });

      //Particle emitter on mouse coordinates
      $(document).on('mousemove', function(event){
        //sets the mouseX to wherever the mouse is whenever the mouse moves
        mouseX = $(window).width()/2;
        mouseY = $(window).height()/3;
      });
      
      //particle constructor

       function Particle(){
        this.x = 0;
        this.y = 0;
        //<><><<>optional<><><> Assigning the particles random color
        /*this.color = 'rgb('
           + Math.floor(Math.random() * 255) + ','
           + Math.floor(Math.random() * 255) + ','
           + Math.floor(Math.random() * 255) + ')'
          ; */
        //<><><><><>OPTIONAL
        //Random speeds
        this.vx = Math.random() * 50 -10;
        this.vy = Math.random() * 50 -10;

        //Increment the particle Index
        //Add this particle to the particles object with a key of particle index
        particleIndex ++;
        particles[particleIndex] = this;
        this.id = particleIndex;

        //add a lifespan
        this.life = 0;
        this.maxLife = Math.random() * 20 + 20;

      }

      Particle.prototype.draw = function(){
        this.x += this.vx;
        this.y += this.vy;
          //Re-randomizes velocity ~~~ looks like swarm.
          if(Math.random()< 0.1){
            this.vx = Math.random() * 50 - 10;
            this.vy = Math.random() * 50 - 10;
          }
        //Draw the particles with random colors
 /*       c.fillStyle = 'rgb('
           + Math.floor(Math.random() * 255) + ','
           + Math.floor(Math.random() * 255) + ','
           + Math.floor(Math.random() * 255) + ')'*/
           
          ;
       //<><><><OPTIONAL c.fillStyle = this.color; <><><>*/
c.drawImage(imageObj, this.x, this.y, 100,100);
        //Age your particle
        this.life++;
        //If particle is too old, delete it.
        if(this.life >= this.maxLife){
            delete particles[this.id];
        }
      };

      var aaratiisqueen = 1;

      var myInterval = setInterval(function(){
        if(aaratiisqueen > 1500){
          clearInterval(myInterval);
           $(canvas).fadeOut();
           $('.dg').css('background-color', 'black')
           aaratiisqueen = 1;
        }else{
        c.fillStyle = 'black';
        c.fillRect(0,0,$(window).width(), $(window).height());
        
        for(var i = 0; i < particleNum; i ++){
        new Particle();
        }

        for(var j in particles){
        particles[j].draw();
        aaratiisqueen++;
        }
      }
      },
      100);


      /*<><><><><><><><>EXCERSIZE ONE <><><><><><><>

      //initial positions
      var posX = canvas.width /2;
      var posY = canvas.height/2;
      //incrementing the position each time an interval occurs.
      //velocity coefficients
      var vx = 10;
      var vy = -10;
      var gravity = 1;

      function Particle(){
        this.x = canvas.width/2;
        this.y = canvas.height/2;
      }
      
      setInterval(function(){
        //Redrawing our canvas
        c.fillStyle = "black";
        c.fillRect(0,0, $(window).width(), $(window).height());

        //constant velocity
        posX += vx;
        posY += vy;

        //acceleration ~~simulating friction
       // vx *= 0.9;
       // vy *= 0.9;

     
       //simulate ground
       //<><><>* need to make vy = 0 *<><><>//
      if(posY > canvas.height/2){
        //Constant Bounce Effect
        //vy *= -1;
        //Diminishing Bounce Effect
        vy *= -0.6;
        vx *= 0.6;

        posY = canvas.height/2;
      }
        //simulate gravity
       vy += gravity;

        c.fillStyle = 'white';
        c.fillRect(posX, posY, 10, 10); //pixel values

      }, 30);
      //ResizeCanvas
*/
      resizeCanvas();

    });

    function resizeCanvas(){
      $(window).resize(function(event){
           canvas.width = $(window).width();
      canvas.height = $(window).height();
      c.fillStyle = 'pink';
      c.fillRect(0,0, $(window).width(), $(window).height());
      $(canvas).appendTo('body');
      });
     

    }
}