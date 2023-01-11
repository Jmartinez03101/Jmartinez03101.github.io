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
                { "type": "sawblade", "x": 400, "y": 400 },
                { "type": "smalldoge", "x": 600, "y": groundY },
                { "type": "enemy", "x": 900, "y": groundY },
            ]
        };
        for(i = 0; i < levelData.gameItems.length; i++){
            var firstGameItemObject = levelData.gameItems.type[0];
            var firstType = firstGameItemObject;
            var firstX = sawBladeHitZone.x;
            var secondX = sawBladeHitZone.y;
            if (firstType === "sawblade"){
                createSawBlade(firstX, secondX);
            }
         
            

            createDoge(x, y);
            createEnemy(x, y);

        }
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

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
        // createSawBlade(400, 300);
        // createSawBlade(800, 350);
        // createSawBlade(1200, 250);
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
        }
        createDoge(1600, 325);


        function createEnemy(x, y) {
            var enemy = game.createGameItem('enemy', 25);
            var redSquare = draw.bitmap('img/buffdoge.png');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = y;
            enemy.velocityX = -1;
            enemy.rotationalVelocity = 10;
            game.addGameItem(enemy);


            enemy.onPlayerCollision = function () {
                console.log('The enemy has hit Halle');
                game.changeIntegrity(-10);
            };
            enemy.onProjectileCollision = function () {
                console.log('Halle has hit the enemy');
                game.increaseScore(0.0001);
                enemy.shrink();

            }
        }
        createEnemy(400, groundY - 50);
        createEnemy(800, groundY - 100);
        createEnemy(1200, groundY - 50);
        function reward(x,y){
            var reward = game.createGameItem('reward',25);
            var dogeCoin = draw.bitmap('img/dogeCoin.png');
            dogeCoin.x = -25;
            dogeCoin.y = -25;
            reward.addChild(dogeCoin);
            reward.x = x;
            reward.y = y;
            reward.velocityX = -1;
            reward.rotationalVelocity = 10;
            game.addGameItem(reward);
            reward.onPlayerCollision = function () {
                console.log('got da reward');
                reward.shrink();
                game.changeIntegrity(0.5);
            };
        }
        reward(500, groundY - 50);

        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
