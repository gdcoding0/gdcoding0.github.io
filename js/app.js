let pages = [
  {
    title: "landing",
    pageid: 1,
    content: `
    <div class="debug-menu">
    <button class="btn-debug debug-back">Back</button>
    <button class="btn-debug debug-forward">Forward</button>
    </div>
    <main class="landing">
    <img
      class="appimg-landing"
      src="./img/landing-title1.png"
      alt="Landing Page Title"
      title="Landing Page Title"
    />
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
    <button class="btn-debug debug-back">Back</button>
    <button class="btn-debug debug-forward">Forward</button>
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

let timeManageArray = [];

let appBody;
let isLoaded;
let hasLocal;

window.addEventListener("DOMContentLoaded", loadSequence);

function loadSequence() {
  appBody = document.querySelector(".app-body");
  const findPage = pages.find((pages) => pages.title === "landing");
  if (findPage) {
    const findIndex = pages.findIndex((pages) => pages === findPage);
    console.log(findIndex);
    appBody.innerHTML = pages[findIndex].content;
    appBody.classList.add(".app-landing");
    loadInAnimation();
  }
  function loadInAnimation() {
    console.log("loadInAnimation function call");
    appBody.classList.add("load-page");
    enterEvent();
  }
  getKey();
}

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

function enterEvent() {
  console.log("enterEvent function call");
  const enterBtn = document.getElementById("enter");
  enterBtn.addEventListener("click", function () {
    const getCurrent = appBody.classList[1];
    appNav(getCurrent, "newplan");
  });
}

function appNav(current, next) {
  const getCurrent = appBody.classList[1];
  if (getCurrent === current) {
    console.log("On the right page!");
    const findPage = pages.find((pages) => pages.title === next);
    if (findPage) {
      const findIndex = pages.findIndex((pages) => pages === findPage);
      console.log(findIndex);
      appBody.innerHTML = pages[findIndex].content;
      appBody.classList.remove(getCurrent);
      appBody.classList.add("app-new");
      if (next === "newplan") {
        setTimeout(() => {
          document.body.style.background = "none";
          document.body.style.backgroundColor = getComputedStyle(
            document.documentElement
          ).getPropertyValue("--cs-4");
        }, 500);
        addEventsSaveBtns();
        function addEventsSaveBtns() {
          const getSaveBtns = appBody.querySelectorAll(".btn-quad-save");
          getSaveBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
              const btnIndex = Array.from(getSaveBtns).indexOf(btn);
              const textAreas = appBody.querySelectorAll(".quad");
              console.log(textAreas);
              switch (btnIndex) {
                case 0:
                  console.log("Quadrant 1");
                  saveNewEntry(1, textAreas[btnIndex].value);
                  break;
                case 1:
                  console.log("Quadrant 2");
                  saveNewEntry(2, textAreas[btnIndex].value);
                  break;
                case 2:
                  console.log("Quadrant 3");
                  saveNewEntry(3, textAreas[btnIndex].value);
                  break;
                case 3:
                  console.log("Quadrant 4");
                  saveNewEntry(4, textAreas[btnIndex].value);
                  break;
              }
            });
          });
        }
      } else {
        document.body.style.background = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--bg-gradient");
      }
    }
  }
}

function saveNewEntry(quad, textarea) {
  const newEntry = new timeEntry(quad, textarea);
  timeManageArray.push(newEntry);
  newEntry.add();
}

function timeEntry(quadrant, text) {
  const entryString = quadrant + text;
  this.quadrant = quadrant;
  this.text = text;
  this.add = function () {
    localStorage.setItem("bestday", JSON.parse(entryString));
  };
}
