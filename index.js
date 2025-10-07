// Imports
const readline = require("readline")
const Stress = require('ddos-stress')
const { promisify } = require("util")

// Setup
const stress = []
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question = promisify(rl.question).bind(rl);

async function index() {
  const url = await question("Enter URL: ")
  const number = await question("Enter number of time: ")
  rl.close()

  for(i = 0; i < number; i++) {
    stress.push(new Stress())
  }

  for(i = 0; i < number; i++) {
    stress[i].run(url, 1)
  }
}

index()
