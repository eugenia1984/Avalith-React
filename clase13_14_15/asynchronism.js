// Exercise for Call Stack
function installSoftware(software) {
  console.log("Installing Software " + software);
}

function customizeEditor(numberExtensions) {
  if (numberExtensions <= 0) return;
  console.log(`Installing ${numberExtensions} extensions for VSC`);
}

function readyForProgramming() {
  console.log("Environment ready for begin to Programming");
}

function prepareEnvironment() {
  installSoftware("Git");
  installSoftware("Visual Studio Code");
  installSoftware("Node.js");
  customizeEditor(5);
  readyForProgramming();
}
prepareEnvironment();