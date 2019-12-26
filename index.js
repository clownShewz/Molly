let livingRoom = {
  name:"Living Room",
  description: "a room for relaxing and reading. It has 2 blue chairs, a fireplace, a couch that sits 3 and a small table the length of the couch",
  brokenThing: "Lamp",
  fixWith: "Light bulb",
  points:10,
  items:["Key","Hammer"],
  north: "office",
  south: "sunroom",
  east:null,
  west:"kitchen",
}

let office = {
  name: "Office",
  description: "a room for working with a desk and chair. A lamp and bookshelf.",
  brokenThing:"Bookshelf",
  fixWith:"Hammer",
  points:15,
  item: ["Screwdriver","Heating Coil"],
  north: null,
  south: "Living room",
  east:null,
  west:null
}

let sunRoom  = {
  name: "Sunroom",
  description: "a room for sitting and enjoying the sunlight. It has a small couch that seats 2 and a chair.",
  brokenThing:"Fan",
  fixWith: ["Wire"],
  points:10,
  items:["cable","Light bulb"],
  north: "Living room",
  south:null,
  east:null,
  west:null
}

let kitchen = {
  name: "Kitchen",
  description: "a room for eating. With an oven, stove, and refridgerator",
  brokenThing:"Oven",
  fixWith: "Heating Coil",
  points: 10 ,
  items: ["wire" ,"Table leg"],
  north: "Family Room",
  south:null,
  east:null,
  west: "Dining Room"
}

let familyRoom = {
  name: "Family Room",
  description: "a room for congregating. It has a large couch that seats 5, a game table, and a television",
  brokenThing:"television",
  fixWith: "cable",
  points: 15,
  items: ["Heating Coil" ,"Table leg"],
  north:null,
  south: "Kitchen",
  east: "Living Room",
  west: null
}

let diningRoom = {
  name: "Dining Room",
  description: "a room for eating with a large table and 6 chairs",
  brokenThing: "Table",
  fixWith: "Table leg",
  points: 15,
  items: ["book" ,"cable"],
  north:null,
  south:null,
  east:"Kitchen",
  west: null
}

directionArray = ["north", "south", "east","west"]



function getDirections(room){

  if(room.north != null) {
    alert("To the North is"  + room.north)
    }

  if(room.south != null) {
    alert("To the South is" + room.south)
    }

  if(room.east != null) {
    alert("To the East is" + room.east)
    }
  if(room.west != null) {
    alert("To the West is" + room.west)
    }

}



function getDirectionsBetter(room){
  directionArray.forEach((direction,index) => {alert("To the " + direction + "is " + room[direction])})
}


function getDirectionsBest(room){
  directionArray.forEach((direction,index) => { getDirectionText(direction, room[direction]) })
}

function getDirectionText(direction, room){
  if(direction != null) {
    alert("To the " + direction + " is" + room)
    }

}

function enterRoom(room){
  alert(room.name)
  alert(room.description)
 
  getDirections(room)
  //getDirectionsBetter(room)
  //getDirectionsBest(room)
}


enterRoom(livingRoom)
