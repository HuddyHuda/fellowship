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

// append it
body.appendChild(newsection);

//test if its appended


function createthreearticlediv(threearticle) {
  var threearticlediv = document.createElement("article");
  threearticlediv.appendChild(document.createTextNode(threearticle));
  return threearticlediv;
}

var articledivs = [
  createthreearticlediv(""),
  createthreearticlediv(""),
  createthreearticlediv("")
];

function createh1land(threeh1) {
  var threeh1name = document.createElement("h1");
  threeh1name.appendChild(document.createTextNode(threeh1));
  return threeh1name;
}

var h1land = [
  createh1land("The Shire"),
  createh1land("Rivendell"),
  createh1land("Mordor")
];




var docFrag = document.createDocumentFragment();
for(var i = 0; i < articledivs.length; i++) {
  docFrag.appendChild(articledivs[i]);
(articledivs[0]).appendChild(h1land[0]);
(articledivs[1]).appendChild(h1land[1]);
(articledivs[2]).appendChild(h1land[2]);
}



(newsection).appendChild(docFrag);





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

  //set the attribute value
  theringidatt.value = 'the-ring';
  theringclassatt.value = 'magic-imbued-jewelry';

//attachattribute
  theringdiv.setAttributeNode(theringidatt);
  theringdiv.setAttributeNode(theringclassatt);

  body.appendChild(theringdiv);


//document.getElementById('the-ring').addEventListener('click', nazgulScreech);

//function nazgulScreech() {
  //alert('hello');
//}






  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {

  var asidediv = document.createElement('aside');
body.appendChild(asidediv);

  // create an aside tag


  function makeUL2(array2) {
      // Create the list element:
      var list2 = document.createElement('ul');

      for(var k = 0; k < array2.length; k++) {
          // Create the list item:
          var item2 = document.createElement('li');
          // Set its contents:
          item2.appendChild(document.createTextNode(array2[k]));

          // Add it to the list:
          list2.appendChild(item2);
      }

      // Finally, return the constructed list:
      return list2;
  }

  // Add the contents of buddies[0] to aside div:
  document.querySelector('article:nth-child(2)').appendChild(makeUL2(buddies));





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

  var gettheshire = document.querySelector('article:nth-child(1)');

('article:nth-child(2)').appendChild(gettheshire);



  // assemble the hobbits and move them to Rivendell
}
leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
