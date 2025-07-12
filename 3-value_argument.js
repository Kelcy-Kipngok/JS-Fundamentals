const args = process.argv;

if (args[2] === undefined) {
  console.log("No argument");
} else if (args[3] === undefined) {
  console.log(`one argument: "${args[2]}"`);
} else if (args[4] === undefined) {
  console.log(`2 arguments: "${args[2]} ${args[3]}"`);
}