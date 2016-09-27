console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');

var newsection;

var theringdiv;

var theShire = body.getElementsByTagName('article')[0];
var rivendell = body.getElementsByTagName('article')[1];
var mordor = body.getElementsByTagName('article')[2];

// Part 1



function makeMiddleEarth() {

  //create a new section
  var newsection = document.createElement('section');

  //create a id for section

  var sectionatt = document.createAttribute('id');

  //set the attribute value
sectionatt.value = 'middle-earth';

// attach the css value to the section
newsection.setAttributeNode(sectionatt);


  //

  for (var l = 0; l < lands.length; l++){
  var land = document.createElement('article');
  land.innerHTML = "<h1>" + lands[l] + "</h1>"
  newsection.appendChild(land);

  }

// append it
body.appendChild(newsection);






  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth();


// Part 2

function makeHobbits() {

  function makeUL(array) {
      // Create the list element:
      var list = document.createElement('ul');

      for(var i = 0; i < array.length; i++) {
          // Create the list item:
          var item = document.createElement('li');
            var hobbitatt = document.createAttribute('class');
              hobbitatt.value = 'hobbit';

              item.setAttributeNode(hobbitatt);

          // Set its contents:
          item.appendChild(document.createTextNode(array[i]));

          // Add it to the list:
          list.appendChild(item);
      }

      // Finally, return the constructed list:
      return list;
  }

  // Add the contents of options[0] to #foo:
  document.querySelector('article:nth-child(1)').appendChild(makeUL(hobbits));

  // attach the css value to the section



  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
}

makeHobbits();



// Part 3

function keepItSecretKeepItSafe() {




  // create a div with an id of 'the-ring'

  var theringdiv = document.createElement('div');

  //create a id/class for the div
  var theringidatt = document.createAttribute('id');
  var theringclassatt = document.createAttribute('class');

  var frodo = body.getElementsByTagName('li')[0];

  //set the attribute value
  theringidatt.value = 'the-ring';
  theringclassatt.value = 'magic-imbued-jewelry';

//attachattribute
  theringdiv.setAttributeNode(theringidatt);
  theringdiv.setAttributeNode(theringclassatt);

  body.appendChild(theringdiv);
  frodo.appendChild(theringdiv);

  theringdiv.addEventListener('click', nazgulScreech);



//ringselector.addEventListener('click', nazgulScreech);


//function nazgulScreech() {
  //alert('hello');
//}






  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {

  var aside = document.createElement('aside');
  var rivendell = body.getElementsByTagName('article')[1];
    var buddyList = document.createElement('ul');
    for(var i = 0; i < buddies.length; i++) {
      // attach an unordered list of the 'buddies' in the aside
      var buddy = document.createElement('li');
      buddy.textContent = buddies[i];
      buddyList.appendChild(buddy);
    }

  aside.appendChild(buddyList);
  rivendell.appendChild(aside);


  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}

makeBuddies();

// Part 5


function beautifulStranger() {

  var aragorntext = document.createTextNode("Aragorn");

// Get the first child node of an <ul> element
var getstrider = document.querySelector("article:nth-child(2) ul li:nth-child(4)");

getstrider.replaceChild(aragorntext, getstrider.childNodes[0]);



  // change the 'Strider' textnode to 'Aragorn'
}

beautifulStranger ();

// Part 6

function leaveTheShire() {

var hobbits = document.querySelector('article:nth-child(1) ul');
console.log(hobbits);

document.querySelector('article aside').appendChild(hobbits);




  // assemble the hobbits and move them to Rivendell
}
leaveTheShire();

// Part 7


function forgeTheFellowShip() {

// create a new div called 'the-fellowship' within rivendell
var rivendell = document.querySelector('article:nth-child(2) aside');


var thefellowshipdiv = document.createElement('div');
thefellowshipdiv.id= "the-fellowship";

rivendell.appendChild(thefellowshipdiv);

var fellowship = document.querySelector('#the-fellowship');

var shireList = document.querySelector('article aside ul:nth-child(1)');
console.log(shireList);
shireList.id ='shireList';

var rivendellList = document.querySelector('article aside ul:nth-child(2)');
rivendellList.id ='rivendellList';

shireList = shireList.querySelectorAll('li');
rivendellList = rivendellList.querySelectorAll('li');

for (var i = 0; i < shireList.length; i++) {
  thefellowshipdiv.appendChild( shireList[i] );
  alert(shireList[i] + "has joined your party");}

for (var i = 0; i < rivendellList.length; i++) {
  thefellowshipdiv.appendChild( rivendellList[i] );
}

var fellowshiplist = document.getElementById('the-fellowship');











  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}

forgeTheFellowShip();


// Part 8


function theBalrog() {




    // change the 'Gandalf' textNode to 'Gandalf the White'

var gandalftext = document.createTextNode("Gandalf the White");

// Get the first child node of an <ul> element
var getgandalf = document.querySelector("#the-fellowship li:first-child");

getgandalf.replaceChild(gandalftext, getgandalf.childNodes[0]);

getgandalf.style.background = "white";
getgandalf.style.border = '1px grey';

  // apply style to the element
  // make the background 'white', add a grey border
}

theBalrog();

// Part 9

function hornOfGondor() {

alert ('horn of gondor has been blown');

fellowshiplist = document.getElementById('the-fellowship');

var boromir = fellowshiplist.querySelector('li:nth-child(5)');
//console.log(boromir);

boromir.style.textDecoration = 'line-through';

fellowshiplist.removeChild(boromir);

  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}
hornOfGondor();

// Part 10

function itsDangerousToGoAlone(){

fellowshiplist = document.getElementById('the-fellowship');

var frodo = fellowshiplist.querySelector('li:nth-child(5)');
var sam = fellowshiplist.querySelector('li:nth-child(6)');

//console.log(frodo);

fellowshiplist.removeChild(frodo);
fellowshiplist.removeChild(sam);

var mountdoom = document.createElement('div');
mountdoom.id = 'mount-doom';

var mordor = document.querySelector('article:nth-child(3)');
mordor.appendChild(mountdoom);

mordor.appendChild(sam);
mordor.appendChild(frodo);



  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}

itsDangerousToGoAlone();

// Part 11

function weWantsIt() {

  var gollum = document.createElement('div');
  gollum.id = 'gollum';

  mordor = document.querySelector('article:nth-child(3)');

  mordor.appendChild(gollum);







  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}
weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
