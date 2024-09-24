$(function () { 

  // initialize canvas and context when able to
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  let firstTimeSetup = true;
  let frameRate = 60;
  let player = {
    x: 100,
    y: canvas.height - 150,
    width: 50,
    height: 100,
    headHeight: 20,
    color: 'blue'
  };

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      // start game
      setInterval(main, 1000 / frameRate);
    }
    
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); // right
    createPlatform(-50, -50, 50, canvas.height + 500); // bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // Create platforms
    createPlatform(150, canvas.height - 100, 200, 20);
    createPlatform(400, canvas.height - 150, 200, 20);

    // Create collectables
    createCollectable('diamond', 250, canvas.height - 120, 0.5, 1);
    createCollectable('grace', 450, canvas.height - 170, 0.5, 1);

    // Create cannons
    createCannon('top', 300, 1000, 50, 20);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  function drawPlayer() {
    // Draw body
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Draw head
    ctx.fillStyle = 'red'; // Color for the head
    ctx.fillRect(player.x, player.y - player.headHeight, player.width, player.headHeight);
  }

  function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setup(); // Ensure setup runs
    drawPlayer(); // Draw the player
  }

  registerSetup(setup);
});