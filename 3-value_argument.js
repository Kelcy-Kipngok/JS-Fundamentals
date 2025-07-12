const args = process.argv;

if (args[2] === undefined) {
  console.log("No argument");
} else if (args[3] === undefined) {
  console.log(`HBTN`);
} else if (args[4] === undefined) {
  console.log(`HBTN cool`);
}