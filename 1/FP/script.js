

"use strict";

// ------------------------------
// Data (Maps per platform)
// ------------------------------
const catalog = new Map();

// PS5
catalog.set("PS5", {
  hardware: [
    {
      title: "PlayStation 5 Console",
      genre: "Hardware",
      price: 499,
      img: "https://http2.mlstatic.com/D_NQ_NP_955000-MLU75239551715_032024-O.webp"
    },
    {
      title: "DualSense Wireless Controller",
      genre: "Hardware",
      price: 69,
      img: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-overview-controllers-image-block-01-en-09jul24?$1600px$"
    }
  ],
  games: [
    {
      title: "Elden Ring",
      genre: "RPG",
      price: 59,
      img: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg"
    },
    {
      title: "Resident Evil 4 Remake",
      genre: "Horror",
      price: 59,
      img: "https://cdn.akamai.steamstatic.com/steam/apps/2050650/header.jpg"
    },
    {
      title: "Demon's Souls",
      genre: "RPG",
      price: 69,
      img: "https://image.api.playstation.com/vulcan/img/rnd/202011/1717/brIXKBE5BqYgBSrsDn6Wo18O.png?w=5000&thumb=false"
    },
    {
      title: "Returnal",
      genre: "roguelike,shooter",
      price: 69,
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202011/1621/fYZQHZ42eXXUt7c6D5YjLrq5.png?w=440&thumb=false"
    }
  ]
});

// Xbox
catalog.set("Xbox Series X|S", {
  hardware: [
    {
      title: "Xbox Series X",
      genre: "Hardware",
      price: 499,
      img: "https://cms-assets.xboxservices.com/assets/bc/40/bc40fdf3-85a6-4c36-af92-dca2d36fc7e5.png?n=642227_Hero-Gallery-0_A1_857x676.png"
    },
    {
      title: "Xbox Wireless Controller",
      genre: "Hardware",
      price: 59,
      img: "https://assets.xboxservices.com/assets/1d/e9/1de988c2-f32f-4434-a541-f9a4b353ee78.jpg?n=Accessories-Hub_Content-Placement-0_2020-Controller-White_788x444.jpg"
    }
  ],
  games: [
    {
      title: "Avowed",
      genre: "RPG",
      price: 69,
      img: "https://store-images.s-microsoft.com/image/apps.63195.13624715126573049.35e3abd5-bd41-4efb-bc2a-0bfbdd50b02a.d3291934-3236-4279-91eb-792123046d1d?q=90&w=177&h=265"
    },
    {
      title: "Forza Horizon 5",
      genre: "Racing",
      price: 59,
      img: "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg"
    }
  ]
});

// Switch
catalog.set("Switch", {
  hardware: [
    {
      title: "Nintendo Switch OLED",
      genre: "Hardware",
      price: 349,
      img: "https://m.media-amazon.com/images/I/61nqNujSF2L._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
      title: "Joy-Con Pair",
      genre: "Hardware",
      price: 79,
      img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_600/ncom/en_US/products/accessories/nintendo-switch/controllers/joy-con-controllers/joy-con-neon-red-neon-blue/104882-nintendo-switch-joy-con-red-blue-package-1200x675"
    }
  ],
  games: [
    {
      title: "Metroid Dread",
      genre: "Action",
      price: 59,
      // Wikimedia cover to avoid Nintendo hotlink issues
      img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch/70010000042924/c7e6839975afd46893274cf7cfdb63b39a54d6f700938bcd1c8849ac66755d00"
    },
    {
      title: "The Legend of Zelda: Tears of the Kingdom",
      genre: "Adventure",
      price: 69,
      img: "https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/b37fec09f82c44c9bc3d8627b932557f_1024"
    }
  ]
});

// PC
catalog.set("PC", {
  hardware: [
    {
      title: "Gaming PC (Prebuilt)",
      genre: "Hardware",
      price: 1299,
      img: "https://images.icecat.biz/img/gallery/ce575b740373ce2a3ebf96228596b9c76a614271.jpg"
    },
    {
      title: "Mechanical Keyboard",
      genre: "Hardware",
      price: 99,
      img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/SPW5C-2000x1500-BB-00?qlt=90&hei=270&wid=270&bgc=FFFFFFFF&fmt=jpg"
    }
  ],
  games: [
    {
      title: "Cyberpunk 2077",
      genre: "RPG",
      price: 59,
      img: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg"
    },
    {
      title: "Baldur's Gate 3",
      genre: "RPG",
      price: 59,
      img: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg"
    }
  ]
});

// ------------------------------
// State
// ------------------------------
let currentPlatform = null;
let currentItems = []; // items currently displayed (for filters)
let cart = [];

// ------------------------------
// Helpers
// ------------------------------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function money(n){ return Number(n).toFixed(2); }

function setBodyBg(platform){
  const b = document.body;
  b.classList.remove("ps5-bg","xbox-bg","switch-bg","pc-bg");
  $("#psSymbols").style.display = "none";
  if(platform === "PS5"){ b.classList.add("ps5-bg"); $("#psSymbols").style.display = "block"; }
  if(platform === "Xbox Series X|S"){ b.classList.add("xbox-bg"); }
  if(platform === "Switch"){ b.classList.add("switch-bg"); }
  if(platform === "PC"){ b.classList.add("pc-bg"); }
}

// Build the console chips under "Choose your platform"
function renderConsoleBar(){
  const bar = $("#consoleBar");
  bar.innerHTML = "";
  for(const key of catalog.keys()){
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.dataset.cs = key;
    btn.textContent = key;
    btn.addEventListener("click", ()=>selectPlatform(key, true));
    bar.appendChild(btn);
  }
}

function markActiveChip(){
  $$("#consoleBar .chip").forEach(ch=>{
    ch.classList.toggle("active", ch.dataset.cs === currentPlatform);
  });
}

// Combine hardware + games for the platform
function itemsForPlatform(platform){
  const data = catalog.get(platform);
  if(!data) return [];
  return [
    ...data.hardware.map(x=>({...x,type:"Hardware",platform})),
    ...data.games.map(x=>({...x,type:"Game",platform}))
  ];
}

// Render a grid of cards
function renderCatalog(items){
  const grid = $("#catalogGrid");
  grid.innerHTML = "";
  currentItems = items.slice();

  items.forEach((it, idx) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img class="thumb" src="${it.img}" alt="${it.title}"
           onerror="this.onerror=null;this.src='https://placehold.co/640x360?text=Image+not+available'">
      <div class="meta">
        <div class="title">${it.title}</div>
        <div class="muted">${it.platform} • ${it.type}${it.genre && it.genre!=="Hardware" ? " • "+it.genre : ""}</div>
        <div class="price">$${money(it.price)}</div>
        <button class="btn add addBtn"
          data-platform="${it.platform}"
          data-index="${idx}"
        >Add to Cart</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ------------------------------
// Filters + Search
// ------------------------------
function applyFilters(){
  if(!currentPlatform){ return; }
  const genre = $("#genreSelect").value;
  const min = parseFloat($("#minPrice").value || "0");
  const max = parseFloat($("#maxPrice").value || "999999");

  const all = itemsForPlatform(currentPlatform);
  const filtered = all.filter(it=>{
    const inGenre = (genre==="ALL") || (it.genre===genre) || (it.type==="Hardware" && genre==="ALL");
    const inPrice = it.price>=min && it.price<=max;
    return inGenre && inPrice;
  });
  renderCatalog(filtered);
}

function clearFilters(){
  $("#genreSelect").value = "ALL";
  $("#minPrice").value = "";
  $("#maxPrice").value = "";
  if(currentPlatform){
    renderCatalog(itemsForPlatform(currentPlatform));
  }
}

// Global search across all platforms
function runGlobalSearch(q){
  const term = q.trim().toLowerCase();
  if(!term){
    if(currentPlatform){
      renderCatalog(itemsForPlatform(currentPlatform));
    }
    return;
  }
  let results = [];
  for(const [plat] of catalog){
    const items = itemsForPlatform(plat);
    results.push(...items.filter(it => it.title.toLowerCase().includes(term)));
  }
  $("#shopTitle").textContent = `Search results for "${q}"`;
  showScreen("screen-shop", true);
  renderCatalog(results);
  markActiveChip();
}

// ------------------------------
// Cart
// ------------------------------
function updateCartUI(){
  const total = cart.reduce((s,it)=>s+it.price,0);
  $("#cartCount").textContent = `(${cart.length})`;
  $("#cartTotalHeader").textContent = money(total);

  $("#miniCount").textContent = cart.length;
  $("#miniTotal").textContent = money(total);

  const mini = $("#miniList");
  mini.innerHTML = "";
  cart.forEach((it, i)=>{
    const row = document.createElement("div");
    row.className = "miniRow";
    row.innerHTML = `
      <div class="muted">${it.title}</div>
      <div class="price">$${money(it.price)}</div>
      <button data-remove="${i}">X</button>
    `;
    mini.appendChild(row);
  });

  const list = $("#cartItems");
  list.innerHTML = "";
  cart.forEach((it,i)=>{
    const row = document.createElement("div");
    row.className = "cartItem";
    row.innerHTML = `
      <span>${it.title}</span>
      <span>$${money(it.price)}</span>
      <button data-remove="${i}">Remove</button>
    `;
    list.appendChild(row);
  });
  $("#cartTotal").textContent = money(total);
}

function addToCart(_platform, index){
  const item = currentItems[index];
  if(!item){ return; }
  cart.push({...item});
  updateCartUI();
}

// ------------------------------
// Navigation + Screens
// ------------------------------
function showScreen(id, fullpage=false){
  $$(".screen").forEach(s => s.classList.remove("show"));
  const screen = document.getElementById(id);
  screen.classList.add("show");
  if(id==="screen-shop"){
    screen.classList.toggle("fullpage", !!fullpage);
  }else{
    screen.classList.remove("fullpage");
  }
}

function selectPlatform(platform, _viaBar=false){
  currentPlatform = platform;
  $("#shopTitle").textContent = `${platform} Store`;
  setBodyBg(platform);
  renderCatalog(itemsForPlatform(platform));
  showScreen("screen-shop", true);
  markActiveChip();
}

// ------------------------------
// Wire up DOM
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderConsoleBar();
  updateCartUI();

  // Home big console buttons
  $$(".consoleBtn").forEach(b=>{
    b.addEventListener("click", ()=>selectPlatform(b.dataset.console, false));
  });

  // Top nav
  $("#navHome").addEventListener("click", ()=>{ showScreen("screen-home"); setBodyBg(null); });
  $("#navBuy").addEventListener("click", ()=>{ showScreen("screen-shop", true); });
  $("#navCart").addEventListener("click", ()=> showScreen("screen-cart"));
  $("#backHome").addEventListener("click", ()=>{ showScreen("screen-home"); setBodyBg(null); });
  $("#backShop").addEventListener("click", ()=> showScreen("screen-shop", true));

  // Filters
  $("#applyFilters").addEventListener("click", applyFilters);
  $("#clearFilters").addEventListener("click", clearFilters);

  // Mini cart actions
  $("#miniClear").addEventListener("click", ()=>{ cart = []; updateCartUI(); });
  $("#miniGoCart").addEventListener("click", ()=> showScreen("screen-cart"));

  // Full cart actions
  $("#clearCart").addEventListener("click", ()=>{ cart = []; updateCartUI(); });
  $("#checkoutBtn").addEventListener("click", ()=>{
    if(!cart.length){ alert("Your cart is empty."); return; }
    alert("Thanks for your purchase! (demo)");
    cart = [];
    updateCartUI();
  });

  // Event delegation for Add/Remove
  document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("addBtn")){
      const idx = parseInt(e.target.dataset.index,10);
      addToCart(currentPlatform, idx);
    }
    if(e.target.matches("[data-remove]")){
      const i = parseInt(e.target.getAttribute("data-remove"),10);
      if(!Number.isNaN(i)){ cart.splice(i,1); updateCartUI(); }
    }
  });

  // Global search (on Enter)
  $("#searchBar").addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
      e.preventDefault();
      runGlobalSearch(e.target.value);
    }
  });

  // Chat toggle + simple responses
  const chat = $("#chat"), openChat = $("#openChat");
  openChat.addEventListener("click", ()=>{
    chat.style.display = (chat.style.display==="flex") ? "none" : "flex";
  });
  $("#chatForm").addEventListener("submit", (e)=>{
    e.preventDefault();
    const input = $("#chatInput");
    const q = input.value.trim();
    if(!q) return;
    addChat("me", q);
    input.value = "";
    setTimeout(()=>{
      const t = q.toLowerCase();
      if(t.includes("price")) addChat("bot","Use the price fields and Apply to filter by budget.");
      else if(t.includes("genre")) addChat("bot","Pick a genre from the dropdown and click Apply.");
      else if(t.includes("ps5")||t.includes("xbox")||t.includes("switch")||t.includes("pc")) addChat("bot","Use the Home buttons or console chips to switch platforms.");
      else addChat("bot","I can help with genres, prices, and platforms.");
    }, 600);
  });

  // Home floating orb canvas (non-critical)
  try{
    const cvs = document.getElementById("viceOrbs");
    if(cvs){
      const ctx = cvs.getContext("2d");
      function size(){ cvs.width = cvs.clientWidth; cvs.height = cvs.clientHeight; }
      window.addEventListener("resize", size); size();
      const orbs = Array.from({length:18}, ()=>({
        x: Math.random()*cvs.width,
        y: Math.random()*cvs.height,
        r: 6+Math.random()*12,
        dx: -0.6+Math.random()*1.2,
        dy: -0.6+Math.random()*1.2
      }));
      function loop(){
        ctx.clearRect(0,0,cvs.width,cvs.height);
        orbs.forEach(o=>{
          o.x+=o.dx; o.y+=o.dy;
          if(o.x<0||o.x>cvs.width) o.dx*=-1;
          if(o.y<0||o.y>cvs.height) o.dy*=-1;
          const grd = ctx.createRadialGradient(o.x,o.y,0,o.x,o.y,o.r*3);
          grd.addColorStop(0,"rgba(0,229,255,.55)");
          grd.addColorStop(1,"rgba(255,77,184,.0)");
          ctx.fillStyle = grd;
          ctx.beginPath(); ctx.arc(o.x,o.y,o.r*3,0,Math.PI*2); ctx.fill();
        });
        requestAnimationFrame(loop);
      }
      loop();
    }
  }catch(_){}
});

// Chat helpers
function addChat(who, text){
  const log = document.getElementById("chatlog");
  const div = document.createElement("div");
  div.className = "msg " + (who==="me" ? "me" : "bot");
  div.textContent = text;
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
}