$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid


    // TODO 2 - Create Platforms
    createPlatform(750, 500, 150, 20, "#00383D");
    createPlatform(450, 601, 150, 20, "#90CBC5");
    createPlatform(600, 700, 150, 20, "#EDF6F9");
    createPlatform(750, 700, 150, 20, "#FE5D9F");
    createPlatform(900, 601, 150, 20, "#CC0052");
    createPlatform(600, 500, 150, 20, "#4E0E29");
    createPlatform(750, 250, 150, 20, "#00383D");
    createPlatform(350, 360, 150, 20, "#90CBC5");
    createPlatform(120, 240, 150, 20, "#EDF6F9");
    createPlatform(1250, 240, 150, 20, "#FE5D9F");
    createPlatform(1000, 360, 150, 20, "#CC0052");
    createPlatform(600, 250, 150, 20, "#4E0E29");

    // TODO 3 - Create Collectables
    createCollectable("database", 1310, 200);
    createCollectable("database", 600, 650);
    createCollectable("database", 700, 650);
    createCollectable("database", 800, 650);
    createCollectable("database", 900, 650);
    // TODO 4 - Create Cannons
    createCannon("left", 550, 2000)
    createCannon("top", 1050, 1000)
    createCannon("right", 200, 2000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
