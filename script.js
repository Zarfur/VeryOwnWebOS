// copied and pasted from thingy LoL


// Make the DIV element draggable:
dragElement(document.getElementById("cheeseDraggable"));
dragElement(document.querySelector("#app"))
dragElement(document.querySelector("#app2"))
dragElement(document.querySelector("#loveCheese"))
dragElement(document.querySelector("#welcome"))




// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
  
}

// welcome close stuff (copied)
var welcomeScreenClose = document.querySelector("#welcomeclose")
var welcomeScreenOpen = document.querySelector("#welcomeopen")
var welcomeScreen = document.querySelector("#welcome")

var appScreenClose = document.querySelector("#appclose")
var appScreenOpen = document.querySelector("#appopen")
var appScreen = document.querySelector("#app")


var app2ScreenClose = document.querySelector("#app2close")
var app2ScreenOpen = document.querySelector("#app2open")
var app2Screen = document.querySelector("#app2")

var biggestIndex = 1;

var topBar = document.querySelector("#top")

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
    handleWindowTap(element)
  )
}

function handleWindowTap(element) {
  biggestIndex++;  
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

function openWindow(element) {
  element.style.display = "block"
  biggestIndex++; 
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

function closeWindow(element) {
  element.style.display = "none"
}

welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

appScreenClose.addEventListener("click", function() {
  closeWindow(appScreen)
  closeWindow(document.querySelector("#app"));
})
appScreenOpen.addEventListener("click", function() {
  openWindow(appScreen)
  handleIconTap(appScreen);
})

app2ScreenClose.addEventListener("click", function() {
  closeWindow(app2Screen)
  closeWindow(document.querySelector("#app2"));
})
app2ScreenOpen.addEventListener("click", function() {
  openWindow(app2Screen)
  openWindow(appScreen)
  handleIconTap2(app2Screen);
})

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});


addWindowTapHandling(welcomeScreen);
addWindowTapHandling(document.querySelector("#loveCheese"));
addWindowTapHandling(document.querySelector("#app"));

//  app stuff
var selectedIcon = undefined;

function selectIcon(element){
  element.classList.add("selected");
  selectedIcon = element
}

function deselectIcon(element){
  element.classList.remove("selected");
  selectedIcon = undefined;
}

function handleIconTap(element){
  if(element.classList.contains("selected")){
    deselectIcon(element) 
    openWindow(window)
  }else{
    selectIcon(element)
  }

  // content stuff...

  var content = [
    {
      title: "The Chosen Cheese",
      rating: "SSR",
      content: ` 
      <h3 style="margin: 0 0 4px 0; font-family: 'Times New Roman', Times, serif;">The Chosen Cheese</h3>
      <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; letter-spacing: 1px; color: #3f8b75;">SSR</p>
      <p>
        The Rarest and Best Relic in The World! Granting +1 Max HP after each combat.
        What's not to love? Other than its cost of spilled blood.
      </p>

      `

    },
    {
      title: "Ice Cream",
      rating: "SR",
      content: ` 
    
      <h3 style="margin: 0 0 4px 0; font-family: 'Times New Roman', Times, serif;">Ice Cream</h3>
      <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; letter-spacing: 1px; color: #3f8b75;">SR</p>
      <p>
        I love this relic--but not as much as The Chosen Cheese. It's pretty up there, though.
        Ice Cream is just awesome!
      </p>
    
      `
    },
    {
      title: "Psalm Cylinder",
      rating: "R",
      content: ` 
        <h3 style="margin: 0 0 4px 0; font-family: 'Times New Roman', Times, serif;">Psalm Cylinder</h3>
      <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; letter-spacing: 1px; color: #3f8b75;">R</p>
      <p>
        These are cute little tracks, but they aren't particularly crazy. They're guarranteed, which is why they aren't SR.
        Still, they are fun and the Whispering Vaults is rather cool.
      </p>
      

      `
    },
    {
      title: "Dart",
      rating: "C",
      content: ` 

      <h3 style="margin: 0 0 4px 0; font-family: 'Times New Roman', Times, serif;">Dart</h3>
      <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; letter-spacing: 1px; color: #3f8b75;">C</p>
      <p>
             Noob item. Eberybody has this one.
      </p>
  
      `

    },

    {
      title: "Gatchapon",
      rating: "B",
      content: ` 
      <p>
        <h3 style="margin: 0 0 4px 0; font-family: 'Times New Roman', Times, serif;">Gatchapon</h3>
      <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; letter-spacing: 1px; color: #3f8b75;">B</p>
      <p>
             Cool item. gamba. 
      </p>
      </p>
      `
    },

    
    {
      title: "AA Turret",
      rating: "A",
      content: ` 
      <p>
        <h3 style="margin: 0 0 4px 0; font-family: 'Times New Roman', Times, serif;">AA Turret</h3>
      <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; letter-spacing: 1px; color: #3f8b75;">A</p>
      <p>
          Very good utility throughout the entire game. Pesky air crafts.
      </p>
      </p>
      `
    },

  ]

  ///

function setContent(index) {
  var contentArea = document.querySelector("#contentArea");
  contentArea.innerHTML = content[index].content;
}

function addToSideBar(index) {
    var sidebar = document.querySelector("#sidebar");
    var entry = content[index];
    var newDiv = document.createElement("div");
    newDiv.style = "cursor: pointer; margin-bottom: 12px;";

    newDiv.innerHTML = `
      <p style="margin: 0px; font-weight: 700;">
        ${entry.title}
      </p>
      <p style="font-size: 12px; margin: 0px;">
        ${entry.rating}
      </p>
    `;

    newDiv.addEventListener("click", function() {
      setContent(index);
    });

    sidebar.appendChild(newDiv);
  }

  document.querySelector("#sidebar").innerHTML = "";

  for (let i = 0; i < content.length; i++) {
    addToSideBar(i);
  }

  setContent(0);
}

// app2  stuff (im lowk lazy so im just repurposing things)
var totalCheese = 0;
var cheesePerSecond = 1;

function updateCheese(){
  totalCheese += cheesePerSecond;
  var counter = document.querySelector("#cheeseCounter");
  if(counter){
    counter.innerHTML = "Cheese: " + totalCheese;
  }
}
setInterval(updateCheese, 1000)

function handleIconTap2(element){
  if(element.classList.contains("selected")){
    deselectIcon(element) 
    openWindow(window)
  }else{
    selectIcon(element)
  }

  // content stuff...

  var content = [  
    {
      title: "Chosen Cheese Upgrade",
      boost: "+99999 cheese",
      cost: "99999 cheese",
      content: ` 
      <p>
        <h3 style="margin: 0 0 4px 0; font-family: 'Times New Roman', Times, serif;">The Chosen Cheese ($99999)</h3>
      <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; letter-spacing: 1px; color: #3f8b75;">+99999 cheese</p>
      <p>
          Upgrade Chosen Cheese Upgrade. 
      </p>
      </p>
      `
    },

    {
      title: "Ice Cream Upgrade",
      boost: "+6700 cheese",
      cost: "16767 cheese",
      content: ` 
      <p>
        <h3 style="margin: 0 0 4px 0; font-family: 'Times New Roman', Times, serif;">Ice Cream Upgrade ($16767)</h3>
      <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; letter-spacing: 1px; color: #3f8b75;">+6700 cheese</p>
      <p>
          Upgrade Ice Cream Upgrade. 
      </p>
      </p>
      `
    },

    {
      title: "Psalm Cylinder Upgrade",
      boost: "+1500 cheese",
      cost: "3750 cheese",
      content: ` 
      <p>
        <h3 style="margin: 0 0 4px 0; font-family: 'Times New Roman', Times, serif;">Psalm Cylinder ($3750)</h3>
      <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; letter-spacing: 1px; color: #3f8b75;">+1500 cheese</p>
      <p>
          Upgrade Psalm Cylinder Upgrade. 
      </p>
      </p>
      `
    },

    {
      title: "AA Turret Upgrade",
      boost: "+550 cheese",
      cost: "1200 cheese",
      content: ` 
      <p>
        <h3 style="margin: 0 0 4px 0; font-family: 'Times New Roman', Times, serif;">AA Turret Upgrade($1200)</h3>
      <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; letter-spacing: 1px; color: #3f8b75;">+550 cheese</p>
      <p>
          Upgrade AA Turret Upgrade.
      </p>
      </p>
      `
    },
     {
      title: "Gatchapon Upgrade",
      boost: "+150 cheese",
      cost: "250 cheese",
      content: ` 
      <p>
        <h3 style="margin: 0 0 4px 0; font-family: 'Times New Roman', Times, serif;">Gatchapon Upgrade($250)</h3>
      <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; letter-spacing: 1px; color: #3f8b75;">+150 cheese</p>
      <p>
          Upgrade Gatchapon Upgrade.
      </p>
      </p>
      `
    },
     {
      title: "Dart Upgrade",
      boost: "+15 cheese",
      cost: "35 cheese",
      content: ` 
      <p>
        <h3 style="margin: 0 0 4px 0; font-family: 'Times New Roman', Times, serif;">AA Turret Upgrade($35)</h3>
      <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; letter-spacing: 1px; color: #3f8b75;">+15 cheese</p>
      <p>
          Upgrade AA Turret Upgrade.
      </p>
      </p>
      `
    },
  ]

  ///

function setContent(index) {
  var contentArea = document.querySelector("#contentArea");
  contentArea.innerHTML = content[index].content;
  var costText = content[index].cost;
  var cost = parseInt(costText.replace("cheese", "").trim());
  if(totalCheese >= cost){
    totalCheese -=cost
    upgradeCheese(index);
  }
}

function upgradeCheese(index){
  var boost = content[index].boost;
  var upgrade = parseInt(boost.replace("cheese", "").trim());
  cheesePerSecond += upgrade;
  var CPScounter = document.querySelector("#cheesePerSecond");
  if(CPScounter){
    CPScounter.innerHTML = "CPS: "+ cheesePerSecond;
  }
}

function addToSideBar(index) {
    var sidebar = document.querySelector("#sidebar");
    var entry = content[index];
    var newDiv = document.createElement("div");
    newDiv.style = "cursor: pointer; margin-bottom: 12px;";

      newDiv.innerHTML = `
      <p style="margin: 0px; font-weight: 700;">
        ${entry.title}
      </p>
      <p style="font-size: 12px; margin: 0px;">
        ${entry.boost}
      </p>

      <p style="font-size: 12px; margin: 0px;">
        cost: ${entry.cost}
      </p>
    `;

    newDiv.addEventListener("click", function() {
      setContent(index);
    });

    sidebar.appendChild(newDiv);
  }

  document.querySelector("#sidebar").innerHTML = "";
  for (let i = 0; i < content.length; i++) {
    addToSideBar(i);
  }

  setContent(0);
}