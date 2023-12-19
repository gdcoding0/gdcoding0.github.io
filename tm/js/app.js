// Array to store all dynamic page content in
let pages = [
  {
    title: "landing",
    pageid: 1,
    content: `
    <div class="debug-menu">
    <button class="btn-debug debug-back" onclick="debugMenu('landing')">Back</button>
    <button class="btn-debug debug-forward" onclick="debugMenu('form')">Forward</button>
    </div>
    <main class="landing">
    <h1 class="landing-title"><b>best</b>day</h1>
    <div class="landing-btns">
      <button class="btn-landing btn-shadow btn-newplan" id="enter">
        Create Plan
      </button>
      <button class="btn-landing btn-shadow btn-viewplan btn-disabled" id="view">
        View Plan
      </button>
    </div>
  </main>
        `,
  },
  {
    title: "newplan",
    id: 2,
    content: `
    <div class="debug-menu">
    <button class="btn-debug debug-back" onclick="debugMenu('landing')">Back</button>
    <button class="btn-debug debug-forward" onclick="debugMenu('form')">Forward</button>
    </div>
    <header class="top-title">
          <h1 class="app-title">Todays Plan</h1>
        </header>
        <main class="content">
          <div class="quad-grid">
            <div class="quadrant">
              <div class="quadrant-top">
                <span class="quad-number">1</span>
                <div class="quad-titles">
                  <h2 class="quadrant-title">Important</h2>
                  <h2 class="quadrant-title">& Urgent</h2>
                </div>
              </div>
              <div class="interactive">
                <textarea
                  class="quad quad-1"
                  name="quadrant-text"
                  id="quad-text"
                  cols="30"
                  rows="10"
                >
                </textarea>
                <button class="btn-quad-save btn-enabled">Save</button>
              </div>
            </div>
            <div class="quadrant">
              <div class="quadrant-top">
                <span class="quad-number">2</span>
                <div class="quad-titles">
                  <h2 class="quadrant-title">Important</h2>
                  <h2 class="quadrant-title">& Not Urgent</h2>
                </div>
              </div>
              <div class="interactive">
                <textarea
                  class="quad quad-2"
                  name="quadrant-text"
                  id="quad-text"
                  cols="30"
                  rows="10"
                ></textarea>
                <button class="btn-quad-save btn-enabled">Save</button>
              </div>
            </div>
            <div class="quadrant">
              <div class="quadrant-top">
                <span class="quad-number">3</span>
                <div class="quad-titles">
                  <h2 class="quadrant-title">Not Important</h2>
                  <h2 class="quadrant-title">Urgent</h2>
                </div>
              </div>
              <div class="interactive">
                <textarea
                  class="quad quad-3"
                  name="quadrant-text"
                  id="quad-text"
                  cols="30"
                  rows="10"
                ></textarea>
                <button class="btn-quad-save btn-enabled">Save</button>
              </div>
            </div>
            <div class="quadrant">
              <div class="quadrant-top">
                <span class="quad-number">4</span>
                <div class="quad-titles">
                  <h2 class="quadrant-title">Not Important</h2>
                  <h2 class="quadrant-title">& Not Urgent</h2>
                </div>
              </div>
              <div class="interactive">
                <textarea
                  class="quad quad-4"
                  name="quadrant-text"
                  id="quad-text"
                  cols="30"
                  rows="10"
                ></textarea>
                <button class="btn-quad-save btn-enabled">Save</button>
              </div>
            </div>
          </div>
        </main>
        <nav class="bottom-nav">
          <div class="nav-bar">
            <div class="nav-left">
              <img src="./img/write.svg" alt="Write" title="Write" />
              <img src="./img/list.svg" alt="List" title="List" />
            </div>
            <div class="nav-right">
              <img src="img/settings.svg" alt="Settings" title="Settings" />
            </div>
          </div>
        </nav>
      </div>
    `,
  },
];

// Array to store all time management entries in
let timeManageArray = [];

let appBody;
let hasLocal;
let existingData;
let onBoardingDone = false;

function getLocal(key) {
  return new Promise((resolve, reject) => {
    try {
      const item = JSON.parse(localStorage.getItem(key));
      resolve(item);
    } catch (error) {
      reject(error);
    }
  });
}

async function getKey() {
  const viewBtn = document.getElementById("view");
  console.log(viewBtn);
  try {
    const item = await getLocal("bestday");
    if (item === null) {
      console.log("No key");
    } else {
      viewBtn.classList.remove("btn-disabled");
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener("DOMContentLoaded", loadSequence);

function loadSequence() {
  // Get appBody element (dynamic page content goes within this parent element)
  appBody = document.querySelector(".app-body");
  // Find landing page in 'pages' array
  const findPage = pages.find((pages) => pages.title === "landing");
  if (findPage) {
    // Find index of 'landing' page
    const findIndex = pages.findIndex((pages) => pages === findPage);
    // Change HTML to HTML in 'pages' content property
    appBody.innerHTML = pages[findIndex].content;
    // Add appropriate class to identify current dynamic page loaded in
    appBody.classList.add(".app-landing");
    // Call function to deal with animations
    loadInAnimation();
  }
  // Load in fancy animations
  function loadInAnimation() {
    console.log("loadInAnimation function call");
    appBody.classList.add("load-page");
    addEventListeners();
  }
  // Async function call to check for LocalStorage
  getKey();
}

function navEventAdd() {
  const getBtns = document.querySelectorAll(".btn-landing");
  getBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const getClass = e.currentTarget.classList;
      if (getClass.contains("btn-newplan")) {
        document.querySelector(".");
        console.log("New plan");
      } else if (getClass.contains("btn-viewplan")) {
        console.log("View plan");
      }
    });
  });
}

// FUNCTION FOR ADDING EVENT LISTENERS TO ELEMENTS
function addEventListeners() {
  console.log("enterEvent function call");
  const enterBtn = document.getElementById("enter");
  enterBtn.addEventListener("click", function () {
    const getCurrent = appBody.classList[1];
    appNav(getCurrent, "newplan");
  });
}

function appNav(current, next) {
  // Get classList for appBody (for ascertaining classes added to it's element)
  const getCurrent = appBody.classList[1];
  if (getCurrent === current) {
    console.log("On the right page!");
    // Find the page in 'pages' array
    const findPage = pages.find((pages) => pages.title === next);
    if (findPage) {
      // Find index for corresponding page in 'pages' array
      const findIndex = pages.findIndex((pages) => pages === findPage);
      console.log(findIndex);
      appBody.innerHTML = pages[findIndex].content;
      // Remove previous page identifier
      appBody.classList.remove(getCurrent);
      // Set appropriate class to identify new dynamic page content
      appBody.classList.add("app-new");
      if (next === "newplan") {
        // Call function to add event listeners to all save buttons
        addEventsSaveBtns();
        function addEventsSaveBtns() {
          const getSaveBtns = appBody.querySelectorAll(".btn-quad-save");
          getSaveBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
              // Create array from nodelist
              const btnIndex = Array.from(getSaveBtns).indexOf(btn);
              const textAreas = appBody.querySelectorAll(".quad");
              console.log(textAreas);
              // Switch statement for all buttons and corresponding logic
              switch (btnIndex) {
                // Quadrant 1
                case 0:
                  console.log("Quadrant 1");
                  saveNewEntry(1, textAreas[btnIndex].value);
                  break;
                // Quadrant 2
                case 1:
                  console.log("Quadrant 2");
                  saveNewEntry(2, textAreas[btnIndex].value);
                  break;
                // Quadrant 3
                case 2:
                  console.log("Quadrant 3");
                  saveNewEntry(3, textAreas[btnIndex].value);
                  break;
                case 3:
                  // Quadrant 4
                  console.log("Quadrant 4");
                  saveNewEntry(4, textAreas[btnIndex].value);
                  break;
              }
            });
          });
        }
      } else {
        loadSequence();
      }
    }
  }
}

function saveNewEntry(quad, textarea) {
  function timeEntry(quadrant, text) {
    let saveState = false;
    const entryString = quadrant + text;
    this.quadrant = quadrant;
    this.text = text;
    // Function to be called on object creation to save entry to LocalStorage
    this.add = function (state) {
      switch (state) {
        case "s":
          try {
            localStorage.setItem("bestday", JSON.stringify(mergedData));
            saveState = true;
            if (saveState) {
              showToastNote("save");
            }
          } catch (error) {
            console.log(error);
          }
        case "n":
          try {
          } catch {}
      }
    };

    const newData = { ...quad, ...textarea };
    let mergedData;
    checkFirstSave();
    function checkFirstSave() {
      const save = JSON.parse(localStorage.getItem("save"));
      if (save) {
        console.log("existing data");
        existingData = JSON.parse(localStorage.getItem("save")) || {};
        mergedData = { ...existingData, ...newData };
        newEntry.add("s");
      } else {
        console.log("no save");
        localStorage.setItem("save", "true");
      }
    }
    // Call object constructor for new entries using parameters
    // containing user input
    const newEntry = new timeEntry(quad, textarea);
    // Push new entry to array for storing all entries in
    timeManageArray.push(newEntry);
    // Call function on newEntry to save entry to LocalStorage

    // Object constructor for new time management entry
  }

  function showToastNote(state) {
    // Call object constructor for new entries using parameters
    // containing user input
    if (state === "save") {
      const newToast = new toastObj("save", "Ent");
      // Call function on newEntry to save entry to LocalStorage
      toastObj.include();
    }
  }

  // Object constructor for new time management entry
  function toastObj(job, msgstatus) {
    this.job = job;
    this.status = msgstatus;
    // Function to be called on object creation to save entry to LocalStorage
    this.include = function () {};
  }
  showToastNote();
}

// Debug menu
function debugMenu(direction) {
  const getCurrent = appBody.classList[1];
  switch (direction) {
    case "landing":
      appNav(getCurrent, "landing");
      notify(direction);
      break;
    case "form":
      appNav(getCurrent, "newplan");
      notify(direction);
      break;
    case "onboard":
      appBody.innerHTML = pages[2].content;
      notify(direction);
      break;
  }
  function notify() {
    const addEl = document.createElement("span");
    addEl.className = "debug-notify";
    addEl.textContent = `Debug: ${direction}`;
    document.body.appendChild(addEl);
    setTimeout(() => {
      document.body.removeChild(addEl);
    }, 1000);
  }
}
