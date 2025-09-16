const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((res) => rl.question(q, (ans) => res(ans.trim())));

const reservations = [];
const ROOM_TYPES = ["individual", "doble", "familiar"];
const CAPACITY = [2, 4, 6];
const PETS_ALLOWED = [0, 0, 1];

const toInt = (s) => Number.parseInt(s, 10);
const isPosInt = (n) => Number.isInteger(n) && n > 0;
const yesNoTo01 = (s) => (s.toLowerCase().startsWith("y") ? 1 : 0);

function printRow(row, index) {
  const type = ROOM_TYPES[row[2]];
  const smoker = row[3] === 1 ? "yes" : "no";
  const pet = row[5] === 1 ? "yes" : "no";
  console.log(
    `${index}. ${row[0]} (${row[1]}) | type: ${type} | smoker: ${smoker} | people: ${row[4]} | pet: ${pet} | nights: ${row[6]}`
  );
}

function showReservations() {
  if (reservations.length === 0) {
    console.log("No reservations yet.\n");
    return;
  }
  console.log("\n--- Current reservations ---");
  reservations.forEach((r, i) => printRow(r, i));
  console.log("");
}

function showStats() {
  const totalRooms = reservations.length;
  let totalPeople = 0;
  const byType = [0, 0, 0];
  for (const r of reservations) {
    totalPeople += r[4];
    byType[r[2]] += 1;
  }
  console.log("\n--- Hotel stats ---");
  console.log(`Rooms reserved: ${totalRooms}`);
  console.log(`Total occupants (people in hotel): ${totalPeople}`);
  console.log(`By type → individual: ${byType[0]}, doble: ${byType[1]}, familiar: ${byType[2]}\n`);
}

async function createReservation() {
  console.log("\nCreate reservation");
  const name = await ask("Name of guest who reserves: ");
  const country = await ask("Country of origin: ");
  console.log("Room type:\n  1) individual (max 2)\n  2) doble (max 4)\n  3) familiar (max 6)");
  const typeChoice = toInt(await ask("Choose (1-3): "));
  if (![1, 2, 3].includes(typeChoice)) {
    console.log("❌ Invalid type.\n");
    return;
  }
  const typeIdx = typeChoice - 1;
  const smoker = yesNoTo01(await ask("Smoking room? (y/n): "));
  const numPeople = toInt(await ask("How many people will stay? "));
  if (!isPosInt(numPeople) || numPeople > CAPACITY[typeIdx]) {
    console.log(`❌ Invalid people count. Max for ${ROOM_TYPES[typeIdx]} is ${CAPACITY[typeIdx]}.\n`);
    return;
  }
  let hasPet = 0;
  if (PETS_ALLOWED[typeIdx] === 1) {
    hasPet = yesNoTo01(await ask("Bringing a pet? (y/n): "));
  } else {
    const wantPet = yesNoTo01(await ask("Bringing a pet? (y/n): "));
    if (wantPet === 1) {
      console.log("❌ Pets are only allowed in 'familiar' rooms.\n");
      return;
    }
  }
  const nights = toInt(await ask("How many nights? "));
  if (!isPosInt(nights)) {
    console.log("❌ Nights must be a positive integer.\n");
    return;
  }
  const row = [name, country, typeIdx, smoker, numPeople, hasPet, nights];
  reservations.push(row);
  console.log("✅ Reservation added.\n");
}

async function cancelReservation() {
  showReservations();
  if (reservations.length === 0) return;
  const idx = toInt(await ask("Enter reservation index to cancel: "));
  if (!Number.isInteger(idx) || idx < 0 || idx >= reservations.length) {
    console.log("❌ Invalid index.\n");
    return;
  }
  reservations.splice(idx, 1);
  console.log("🗑️ Reservation removed.\n");
}

async function menu() {
  while (true) {
    console.log("=== Hotel Reservation System (Matrix) ===");
    console.log("1) Create reservation");
    console.log("2) List reservations");
    console.log("3) Show stats");
    console.log("4) Cancel reservation");
    console.log("5) Exit\n");
    const choice = await ask("Choose an option: ");
    console.log("");
    if (choice === "1") await createReservation();
    else if (choice === "2") showReservations();
    else if (choice === "3") showStats();
    else if (choice === "4") await cancelReservation();
    else if (choice === "5") {
      console.log("👋 Bye!\n");
      break;
    } else console.log("❌ Invalid option.\n");
  }
  rl.close();
}

menu();
