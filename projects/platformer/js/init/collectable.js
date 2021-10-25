(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let collectable = window.opspark.collectable;

    let type = {
        db: {assetKey: 'db', points: 10},
        max: {assetKey: 'max', points: 20},
        steve: {assetKey: 'steve', points: 30},
        grace: {assetKey: 'grace', points: 40},
        kennedi: {assetKey: 'kennedi', points: 50},
        raccoon: {assetKey: 'raccoon', points: 30},
    };
    
    /**
     * init: Initialize all collectables.
     * 
     * GOAL: Add as many collectables as necessary to make your level challenging.
     * 
     * Use the createCollectable() Function to create collectables for the level.
     * See the type Object, above, for the types of collectables and their point values.
     * 
     * createCollectable() takes these arguments:
     *      
     *      createCollectable(type, x, y, gravity, bounce);
     * 
     *      type: The type of the collectable, use the type Object above.
     *      x: The x coordineate for the collectable.
     *      y: The y coordineate for the collectable.
     *      gravity: OPTIONAL The gravitational pull on the collectable.
     *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
     */ 
    function init(game) {
        let createCollectable = collectable.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        

        // example: 
        createCollectable(type.raccoon, 125, 150, 6, 0.7);
        // createCollectable(type,steve, 200, 300, 6, 0.7);
        createCollectable(type.raccoon, 10, 300, 6, 0.7);
        createCollectable(type.raccoon, 425, 500,6, 0.7);
        createCollectable(type.raccoon, 250, 400,6,0.7);
        createCollectable(type.raccoon, 250, 250,6,0.7);
        createCollectable(type.raccoon, 400, 300,6,0.7);
        // createCollectable(type.steve,550,600,6,0.7);
        // createCollectable(tpye.steve,500,550,6,0.7);
        createCollectable(type.raccoon, 825, 525,6,0.7);
        createCollectable(type.raccoon, 825, 325,6,0.7);
        createCollectable(type.raccoon, 825, 125,6,0.7);
        createCollectable(type.raccoon, 650, 425,6,0.7);
        createCollectable(type.raccoon, 650, 245,6,0.7);
        createCollectable(type.raccoon, 200, 600, 6, 0.7);
        createCollectable(type.raccoon, 400, 150, 6, 0.7);
        createCollectable(type.raccoon, 650, 50, 6, 0.7);
                
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
    collectable.init = init;
})(window);