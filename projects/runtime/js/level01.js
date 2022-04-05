var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function (game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1,
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE

        function createSawBlade(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);
            var obstacleImage = draw.bitmap('img/sawblade.png');
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }
        createSawBlade(400, 300);
        createSawBlade(800, 350);
        createSawBlade(1200, 250);
        function createDoge(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var dogeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            dogeHitZone.x = x;
            dogeHitZone.y = y;
            game.addGameItem(dogeHitZone);
            var obstacleImage = draw.bitmap('img/smalldoge.png');
            dogeHitZone.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            git
        }
        createDoge(1600, 325);

        var enemy = game.createGameItem('enemy', 25);
        var redSquare = draw.rect(50, 50, 'red');
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addchild(redSquare);
        enemy.x = 400;
        enemy.y = groundY- 50;
        
        game.addGameItem(enemy);

  
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
