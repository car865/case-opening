

let itemUnboxedTitle = document.getElementById("item-unboxed-title");
let caseCounterDisplay = document.getElementById("case-counter-display");
let itemImg = document.getElementById("item-img");
let priceTierDisplay = document.getElementById("price-tier-display");

let lowTier = [
  //low tier
  "Lycans bane",
  ".SYS",
  "Titanmail",
  "Sarmad",
  "Luna",
  "Ego red",
  "Endeavour",
  "Team ace",
  "Schema",
  "Depths",
  "KTAC",
  "Nitro",
  "Silvanus", // 13 items
];
let lowTierImg = [
  "lowtier/lycans-bane.png",
  "lowtier/sys.png",
  "lowtier/titanmail.png",
  "lowtier/sarmad.png",
  "lowtier/luna.png",
  "lowtier/ego-red.png",
  "lowtier/endeavour.png",
  "lowtier/team-ace.png",
  "lowtier/schema.png",
  "lowtier/depths.png",
  "lowtier/ktac.png",
  "lowtier/nitro.png",
  "lowtier/silvanus.png",
];

let midTier = [
  // mid tier
  "Gaias Orange",
  "Gaias Vengeance",
  "Reaver Black",
  "Reaver White",
  "Forsaken",
  "Forsaken Gold",
  "Neptune", // 7 items
];

let midTierImg = [
  "midtier/gaias-Orange.png",
  "midtier/gaias.png",
  "midtier/reaver-black.png",
  "midtier/reaver-white.png",
  "midtier/forsaken.png",
  "midtier/forsaken-gold.png",
  "midtier/neptune.png",
];

let highTier = [
  // high tier
  "ChronoVoid Black",
  "Chronovoid Purple",
  "Araxys Silver",
  "Araxys Purple",
  "RGX 11z Pro Yellow",
  "RGX 11z pro",
  "Oni Hana", // 7 items
];
let highTierImg = [
  "hightier/chronovoid-black.png",
  "hightier/chronovoid-purple.png",
  "hightier/araxys-silver.png",
  "hightier/araxys-purple.png",
  "hightier/rgx-yellow.png",
  "hightier/rgx.png",
  "hightier/oni-hana.png",
];

let specialItem = [
  // special
  "Arcane sheriff", // 1 item
];

let specialItemImg = ["secret/secret.png"];

let allTier = [lowTier, midTier, highTier, specialItem];

// stats

let caseCount = 0;

let inventory = [

]

var timer;

function playAnimation() {
    

    openCase()
}

function openCase() {
  let randomNum = Math.random() * 100;

  let percentDisplay = " " + "(" + Math.round(randomNum) + "%" + ")";

  let lowTierVariant = Math.floor(Math.random() * lowTier.length);

  let midTierVariant = Math.floor(Math.random() * midTier.length);

  let highTierVariant = Math.floor(Math.random() * highTier.length);

  if (randomNum < 0.2) {
    // special item

    itemUnboxedTitle.style.color = "#800080e8";
    itemUnboxedTitle.textContent = "Arcane sheriff (0.2%)";

    itemImg.src = specialItemImg[0]
    priceTierDisplay.src = "secret/radiant.png"

  } else if (randomNum < 5) {
    // high tier

    itemImg.src = highTierImg[highTierVariant];
    priceTierDisplay.src = "price-tier/exclusive-icon.png";

    itemUnboxedTitle.style.color = "#f6945b";
    itemUnboxedTitle.textContent = highTier[highTierVariant] + percentDisplay;
    
    caseCount++;
    caseCounterDisplay.textContent = "Case Opened: " + caseCount;
    
  } else if (randomNum < 12) {
    // mid tier

    itemImg.src = midTierImg[midTierVariant];
    priceTierDisplay.src = "price-tier/premium-icon.png";

    itemUnboxedTitle.style.color = "#ca568d";
    itemUnboxedTitle.textContent = midTier[midTierVariant] + percentDisplay;

    caseCount++;
      caseCounterDisplay.textContent = "Case Opened: " + caseCount;
    
  } else {
    // low tier

    itemImg.src = lowTierImg[lowTierVariant];
    priceTierDisplay.src = "price-tier/select-icon.png";

    itemUnboxedTitle.style.color = "#5aa3e7";
    itemUnboxedTitle.textContent = lowTier[lowTierVariant] + percentDisplay;

    caseCount++;
      caseCounterDisplay.textContent = "Case Opened: " + caseCount;
    
      
  }
}
