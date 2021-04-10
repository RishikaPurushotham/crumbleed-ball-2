class Paper{

constructor(){
var options={
    isStatic:false,
restitution:0.3,
friction:0.5,
density:1.5,
}
this.image=loadImage("paper.png")
this.body=Bodies.circle(100,230,40,options)
World.add(world,this.body)


}

display(){
imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,40,40)

}


}