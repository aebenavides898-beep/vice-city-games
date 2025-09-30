/* =========================
   Vice City Games — script.js (stable)
   - Home is default (no auto-PS5)
   - Console chips + Home buttons always work
   - Hash routing supported (#ps5, #xbox, #switch, #pc)
   ========================= */

const PLACEHOLDER = "https://via.placeholder.com/640x360?text=Image+not+available";

/* ====== Catalog ====== */
const catalog = new Map([
  ["PS5", new Map([
    [1,{name:"PlayStation 5 Console",type:"console",genre:"—",price:500,year:2020,img:"https://upload.wikimedia.org/wikipedia/commons/f/f4/PlayStation_5_and_DualSense_%282%29.jpg"}],
    [2,{name:"Elden Ring",type:"game",genre:"RPG",price:60,year:2022,img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg"}],
    [3,{name:"Resident Evil 4 Remake",type:"game",genre:"Horror",price:70,year:2023,img:"https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg"}],
    [4,{name:"Marvel’s Spider-Man Remastered",type:"game",genre:"Action",price:70,year:2022,img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg"}],
    [5,{name:"Demon’s Souls",type:"game",genre:"RPG",price:70,year:2020,img:"https://upload.wikimedia.org/wikipedia/en/6/64/Demon%27s_Souls_%28PS5%29.jpg"}],
    [6,{name:"Final Fantasy XVI",type:"game",genre:"RPG",price:70,year:2023,img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1608070/header.jpg"}],
    [7,{name:"Ghost of Tsushima Director’s Cut",type:"game",genre:"Action",price:60,year:2021,img:"https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/header.jpg"}],
  ])],
  ["Xbox Series X|S", new Map([
    [1,{name:"Xbox Series X",type:"console",genre:"—",price:500,year:2020,img:"https://upload.wikimedia.org/wikipedia/commons/5/5c/Xbox_Series_%28X%29.jpg"}],
    [2,{name:"Starfield",type:"game",genre:"RPG",price:70,year:2023,img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg"}],
    [3,{name:"Halo Infinite",type:"game",genre:"Shooter",price:60,year:2021,img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1240440/header.jpg"}],
    [4,{name:"Forza Horizon 5",type:"game",genre:"Racing",price:60,year:2021,img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg"}],
    [5,{name:"Forza Motorsport (2023)",type:"game",genre:"Racing",price:70,year:2023,img:"https://cdn.akamai.steamstatic.com/steam/apps/2440510/header.jpg"}],
    [6,{name:"Gears 5 (Series X|S Update)",type:"game",genre:"Shooter",price:40,year:2020,img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1097840/header.jpg"}],
    [7,{name:"Avowed",type:"game",genre:"RPG",price:70,year:2024,img:"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2081060/header.jpg"}],
  ])],
  ["Switch", new Map([
    [1,{name:"Nintendo Switch OLED",type:"console",genre:"—",price:350,year:2021,img:"https://upload.wikimedia.org/wikipedia/commons/3/3a/Nintendo_Switch_-_OLED.JPG"}],
    [2,{name:"Zelda: Tears of the Kingdom",type:"game",genre:"Adventure",price:70,year:2023,img:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_fill,w_600/ncom/en_US/games/switch/t/the-legend-of-zelda-tears-of-the-kingdom-switch/hero"}],
    [3,{name:"Metroid Dread",type:"game",genre:"Action",price:60,year:2021,img:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_fill,w_600/ncom/en_US/games/switch/m/metroid-dread-switch/hero"}],
    [4,{name:"Pokémon Scarlet & Violet",type:"game",genre:"RPG",price:60,year:2022,img:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_fill,w_600/ncom/en_US/games/switch/p/pokemon-scarlet-switch/hero"}],
    [5,{name:"Animal Crossing: New Horizons",type:"game",genre:"Simulation",price:60,year:2020,img:"https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_fill,w_600/ncom/en_US/games/switch/a/animal-crossing-new-horizons-switch/hero"}],
  ])],
  ["PC", new Map([
    [1,{name:"Gaming PC Tower",type:"console",genre:"—",price:1200,year:2024,img:"https://upload.wikimedia.org/wikipedia/commons/8/89/Gaming_computer.jpg"}],
    [2,{name:"Baldur’s Gate 3",type:"game",genre:"RPG",price:70,year:2023,img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg"}],
    [3,{name:"Cyberpunk 2077: Phantom Liberty",type:"game",genre:"RPG",price:30,year:2023,img:"https://cdn.cloudflare.steamstatic.com/steam/apps/2138330/header.jpg"}],
    [4,{name:"Helldivers 2",type:"game",genre:"Shooter",price:40,year:2024,img:"https://cdn.cloudflare.steamstatic.com/steam/apps/553850/header.jpg"}],
    [5,{name:"Doom Eternal",type:"game",genre:"Shooter",price:60,year:2020,img:"https://cdn.cloudflare.steamstatic.com/steam/apps/782330/header.jpg"}],
    [6,{name:"Horizon Zero Dawn Complete Edition",type:"game",genre:"Action",price:50,year:2020,img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg"}],
    [7,{name:"Palworld",type:"game",genre:"Adventure",price:30,year:2024,img:"https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg"}],
  ])],
]);

/* ====== State & Helpers ====== */
let currentConsole = null;
let cart = [];

const $  = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

function show(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("show"));
  document.getElementById(id)?.classList.add("show");
}

function setBackground(cs){
  document.body.className = ""; // wipe previous bg
  if(cs==="PS5") document.body.classList.add("ps5-bg");
  if(cs==="Xbox Series X|S") document.body.classList.add("xbox-bg");
  if(cs==="Switch") document.body.classList.add("switch-bg");
  if(cs==="PC") document.body.classList.add("pc-bg");
}

function imgTag(src,alt){
  return `<img class="thumb" src="${src}" alt="${alt}" loading="lazy" onerror="this.src='${PLACEHOLDER}'">`;
}

/* ====== Elements ====== */
const consoleBar = $("#consoleBar");
const grid = $("#catalogGrid");
const genreSelect = $("#genreSelect");
const minPrice = $("#minPrice");
const maxPrice = $("#maxPrice");

/* ====== Navigation (Home default) ====== */
$("#navHome")?.addEventListener("click", ()=>{
  currentConsole = null;
  document.body.className = "";
  $("#screen-shop")?.classList.remove("fullpage");
  show("screen-home");
  history.replaceState(null,"",location.pathname);
});
$("#navBuy")?.addEventListener("click", ()=>{
  document.body.className = "";
  $("#screen-shop")?.classList.add("fullpage");
  show("screen-shop");
});
$("#navCart")?.addEventListener("click", ()=> show("screen-cart"));
$("#backHome")?.addEventListener("click", ()=>{
  currentConsole = null;
  document.body.className = "";
  $("#screen-shop")?.classList.remove("fullpage");
  show("screen-home");
  history.replaceState(null,"",location.pathname);
});
$("#backShop")?.addEventListener("click", ()=> show("screen-shop"));

/* ====== Render console chips in Shop ====== */
function renderConsoleButtons(){
  if(!consoleBar) return;
  consoleBar.innerHTML = "";
  for(const cs of catalog.keys()){
    const b = document.createElement("button");
    b.className = "chip" + (cs===currentConsole ? " active" : "");
    b.textContent = cs;
    b.dataset.cs = cs;             // for cute per-console colors
    consoleBar.appendChild(b);
  }
}
/* Event delegation for reliable clicks */
consoleBar?.addEventListener("click", (e)=>{
  const btn = e.target.closest(".chip");
  if(!btn) return;
  openConsole(btn.textContent.trim());
});

/* ====== Home buttons open consoles too ====== */
$$(".consoleBtn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    openConsole(btn.dataset.console);
  });
});

/* ====== Central openConsole ====== */
function openConsole(cs){
  if(!catalog.has(cs)) return console.warn("Unknown console:", cs);
  currentConsole = cs;
  setBackground(cs);
  renderConsoleButtons();
  renderCatalog();
  show("screen-shop");
  $("#screen-shop")?.classList.add("fullpage");
  const slug = cs.toLowerCase().replace(/\s+/g,"").replace(/[|]/g,"");
  location.hash = slug; // #ps5, #xboxseriesxs, #switch, #pc
}

/* ====== Filters ====== */
$("#applyFilters")?.addEventListener("click", renderCatalog);
$("#clearFilters")?.addEventListener("click", ()=>{
  if(genreSelect) genreSelect.value = "ALL";
  if(minPrice) minPrice.value = "";
  if(maxPrice) maxPrice.value = "";
  renderCatalog();
});
function passesFilters(item){
  if(genreSelect && item.type==="game" && genreSelect.value!=="ALL" && item.genre!==genreSelect.value) return false;
  const min = minPrice ? (+minPrice.value||0) : 0;
  const max = maxPrice ? (+maxPrice.value||Infinity) : Infinity;
  return item.price >= min && item.price <= max;
}

/* ====== Catalog render ====== */
function renderCatalog(){
  if(!grid) return;
  grid.innerHTML = currentConsole ? "" : "<div class='panel'>Select a console above</div>";
  if(!currentConsole) return;

  const items = catalog.get(currentConsole);
  if(!items){
    grid.innerHTML = "<div class='panel'><b>Oops.</b> Couldn't load this catalog.</div>";
    return;
  }

  items.forEach(item=>{
    if(!passesFilters(item)) return;
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      ${imgTag(item.img,item.name)}
      <div class='meta'>
        <div class='title'>${item.name}</div>
        <div class='muted'><span class='pill'>${item.type==="game"?item.genre:"Hardware"}</span> • Year ${item.year}</div>
        <div class='price'>$${item.price}</div>
        <button class='add'>Add to Cart</button>
      </div>`;
    card.querySelector(".add").onclick = ()=> addToCart(item);
    grid.appendChild(card);
  });

  if(!grid.children.length){
    grid.innerHTML = "<div class='panel'><b>No items match your filters.</b> Try clearing them.</div>";
  }
}

/* ====== Cart ====== */
let cartCount = $("#cartCount");
let cartTotalHeader = $("#cartTotalHeader");
let miniList = $("#miniList");
let miniCount = $("#miniCount");
let miniTotal = $("#miniTotal");
let cartItems = $("#cartItems");
let cartTotal = $("#cartTotal");

function addToCart(item){ cart.push({...item}); updateCartUI(); }
function removeFromCart(i){ cart.splice(i,1); updateCartUI(); }
function clearCart(){ cart = []; updateCartUI(); }
function computeTotal(){ return cart.reduce((s,i)=>s+(+i.price||0),0); }

$("#miniClear")?.addEventListener("click", clearCart);
$("#miniGoCart")?.addEventListener("click", ()=> show("screen-cart"));
$("#clearCart")?.addEventListener("click", clearCart);
$("#checkoutBtn")?.addEventListener("click", ()=>{
  alert(`Checkout complete! You bought ${cart.length} item(s) totaling $${computeTotal()}`);
  clearCart(); show("screen-home");
});

function updateCartUI(){
  const total = computeTotal();
  cartCount && (cartCount.textContent = `(${cart.length})`);
  cartTotalHeader && (cartTotalHeader.textContent = total);

  if(miniList){
    miniList.innerHTML = "";
    cart.forEach((it,i)=>{
      const row = document.createElement("div");
      row.className = "miniRow";
      row.innerHTML = `<span>${it.name}</span><span>$${it.price}</span><button>x</button>`;
      row.querySelector("button").onclick = ()=> removeFromCart(i);
      miniList.appendChild(row);
    });
  }
  miniCount && (miniCount.textContent = cart.length);
  miniTotal && (miniTotal.textContent = total);

  if(cartItems){
    cartItems.innerHTML = "";
    cart.forEach((it,i)=>{
      const div = document.createElement("div");
      div.className = "cartItem";
      div.innerHTML = `<span>${it.name} — $${it.price}</span><button>Remove</button>`;
      div.querySelector("button").onclick = ()=> removeFromCart(i);
      cartItems.appendChild(div);
    });
  }
  cartTotal && (cartTotal.textContent = total);
}

/* ====== Global Search ====== */
$("#searchBar")?.addEventListener("input", e=>{
  const q = e.target.value.toLowerCase();
  show("screen-shop");
  document.body.className = "";   // neutral bg
  currentConsole = null;          // not locked to a console
  $("#screen-shop")?.classList.add("fullpage");
  renderConsoleButtons();

  if(!q){
    grid && (grid.innerHTML = "<div class='panel'>Type to search, or pick a console above.</div>");
    history.replaceState(null,"",location.pathname);
    return;
  }

  grid && (grid.innerHTML = "");
  catalog.forEach((items,platform)=>{
    items.forEach(item=>{
      if(item.name.toLowerCase().includes(q)){
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          ${imgTag(item.img,item.name)}
          <div class='meta'>
            <div class='title'>${item.name}</div>
            <div class='muted'><span class='pill'>${platform}</span> • ${item.type==="game"?item.genre:"Hardware"} • ${item.year}</div>
            <div class='price'>$${item.price}</div>
            <button class='add'>Add to Cart</button>
          </div>`;
        card.querySelector(".add").onclick = ()=> addToCart(item);
        grid?.appendChild(card);
      }
    });
  });

  if(grid && !grid.children.length){
    grid.innerHTML = "<div class='panel'><b>No results found.</b> Try another term.</div>";
  }
});

/* ====== Chatbot ====== */
const chatBtn = $("#openChat");
const chatBox = $("#chat");
const chatlog = $("#chatlog");
chatBtn?.addEventListener("click", ()=> chatBox.style.display = chatBox.style.display==="flex" ? "none" : "flex");
function addMsg(t,who="bot"){
  const d = document.createElement("div");
  d.className = "msg " + (who==="me" ? "me" : "bot");
  d.textContent = t;
  chatlog?.appendChild(d);
  chatlog && (chatlog.scrollTop = chatlog.scrollHeight);
}
function botReply(q){
  const msg = q.toLowerCase();
  if(msg.includes("price")) return "Use the Min/Max $ filters on the Shop screen.";
  if(msg.includes("genre")) return "Pick a console, then set Genre (RPG, Shooter, etc.).";
  if(msg.includes("recommend")) return "Try Elden Ring (RPG), Forza Horizon 5 (Racing), or Helldivers 2 (Shooter).";
  if(["ps5","xbox","switch","pc"].some(k=>msg.includes(k))){
    const c = msg.includes("ps5") ? "PS5" :
              msg.includes("xbox") ? "Xbox Series X|S" :
              msg.includes("switch") ? "Switch" : "PC";
    openConsole(c);
    return `Opening ${c} for you 👌`;
  }
  if(msg.includes("cart")) return "Your cart updates live in the header and the right mini panel.";
  return "I can help with consoles, genres, filters, recommendations, and cart.";
}
$("#chatForm")?.addEventListener("submit", e=>{
  e.preventDefault();
  const input = $("#chatInput");
  const text = input.value.trim();
  if(!text) return;
  addMsg(text,"me");
  addMsg(botReply(text),"bot");
  input.value = "";
});

/* ====== Hash router (supports direct links like #ps5 or #pc) ====== */
window.addEventListener("load", ()=>{
  if(!location.hash){
    currentConsole = null;
    document.body.className = "";
    show("screen-home");
    renderConsoleButtons();
    return;
  }
  const raw = location.hash.replace("#","").toLowerCase();
  let consoleName = null;
  if(raw==="ps5") consoleName = "PS5";
  if(raw==="xbox" || raw==="xboxseriesxs") consoleName = "Xbox Series X|S";
  if(raw==="switch") consoleName = "Switch";
  if(raw==="pc") consoleName = "PC";
  renderConsoleButtons();
  if(consoleName) openConsole(consoleName);
});

/* ====== Home Orbs (subtle neon glow) ====== */
(function orbs(){
  const canvas = document.getElementById("viceOrbs");
  if(!canvas) return;
  const ctx = canvas.getContext("2d",{alpha:true});
  let W = canvas.width = canvas.offsetWidth;
  let H = canvas.height = canvas.offsetHeight;

  const ORBS = Array.from({length:14}, ()=>({
    x: Math.random()*W, y: Math.random()*H, r: 18+Math.random()*36,
    a: Math.random()*Math.PI*2, s: 0.15+Math.random()*0.35,
    hue: 200+Math.random()*160, alpha: 0.08+Math.random()*0.12
  }));

  function draw(){
    ctx.clearRect(0,0,W,H);
    for(const o of ORBS){
      o.a += 0.002 + o.s*0.0008;
      o.x += Math.cos(o.a)*o.s;
      o.y += Math.sin(o.a*0.8)*o.s*0.6;
      if(o.x<-o.r) o.x=W+o.r; if(o.x>W+o.r) o.x=-o.r;
      if(o.y<-o.r) o.y=H+o.r; if(o.y>H+o.r) o.y=-o.r;
      const g = ctx.createRadialGradient(o.x,o.y,0,o.x,o.y,o.r);
      g.addColorStop(0, `hsla(${o.hue}, 80%, 70%, ${o.alpha})`);
      g.addColorStop(1, `hsla(${o.hue}, 80%, 50%, 0)`);
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(o.x,o.y,o.r,0,Math.PI*2); ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();
  new ResizeObserver(()=>{ W=canvas.width=canvas.offsetWidth; H=canvas.height=canvas.offsetHeight; }).observe(canvas);
})();