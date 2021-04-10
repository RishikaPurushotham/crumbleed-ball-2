class Box{

    constructor(){
    
    this.image=loadImage("dustbin.png")
  
    
    
    
    }
    
    
    display(){
    imageMode(CENTER)
    fill("red")
    image( this.image,350,600,80,100)
   
    }
    
    }