// Your JS goes here
let body = document.getElementsByTagName('body')[0];
let paletter = document.createElement("input");
let h1 = document.createElement('h1');
let h6 = document.createElement("h6");
let label = document.createElement("label");

//I create my header here
h1.innerText = "My Pixal-Art-Maker"
h1.className = "card-panel teal lighten-2 z-depth-4"
h1.style.border = "1px solid #00FFFF"
h1.style.fontSize = "xx-large";
h1.style.fontStyle = "italic"
body.appendChild(h1);
body.style.marginTop = "50px";
body.style.marginBottom = "200px"

//instruction how to play here
h6.innerText = "Instruction:---- Click 'Once' to begin painting, and move your mouse over this pixal art to start your imagination. Click 'Twice' to stop painting";
h6.style.border =  "1px solid #aaa"
h6.style.fontSize = "large"
h6.className = "#e1bee7 purple lighten-4"
body.appendChild(h6);

//here I create pixal art board
for(let i = 0; i < 1260; i++){
  let create = document.createElement('div');
    create.style.backgroundColor = 'white';
    create.style.width = '2.2%' ;
    create.style.float = 'left';
    create.style.paddingBottom = '2.2%';
    create.style.border = "thin solid grey" ;
    //I dont' understand the 'this' key word here.
    let click;
    create.addEventListener("click", function(){
      create.style.background = paletter.value;
         clicked = true;
    });
    //I dont' understand why paletter.value works here. what is what
    //is paletter value anyway? should I use the this key word here?regardless //it works.....
    create.addEventListener("mouseenter", function() {
      if (clicked){
        this.style.background = paletter.value;
      }
    });
    create.addEventListener("dblclick", function(){
      this.style.background = "white";
      clicked = false;
    })

  body.append(create)
}

//I created the label here.
label.innerText = "Please Pick A Color Here  == >> ";
label.className = "waves-effect waves-light btn";
label.style.fontSize = "medium";
label.style.color = "black";
label.style.fontStyle = "italic";
label.style.border = "thin solid grey"
label.for = "select";

//I created the paletter here
paletter.id = "select";
paletter.type = "color";
paletter.style.marginLeft = "40px";
paletter.style.marginTop = "20px";

//I appened both the label and paletter to the board.
body.appendChild(label);
body.appendChild(paletter);
body.className = "container center-align";

//I create button here to refresh the page.
let button = document.createElement("button");
button.innerHTML = "Please Click here to start a new page";
button.className = "waves-effect waves-light btn";
button.style.marginLeft = "40px";
button.style.fontStyle = "italic";
button.style.color = "black";
body.appendChild(button);

button.addEventListener('click', function(){
  let divbox = document.getElementsByTagName('div');
  for(let i = 0; i < divbox.length; i++){
    divbox[i].style.backgroundColor = "white";
  }
});
