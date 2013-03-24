/**
 * Created with JetBrains PhpStorm.
 * User: Mudit Jaju
 * Date: 31/10/12
 * Time: 12:28 PM
 * To change this template use File | Settings | File Templates.
 */


map = function(config){





        pan = new Ext.Panel({

            height:480,
            width:448,
            borders: false,
            plain: true,
            cls: 'green2',
            id: 'myCanvas12',

            items:{
                xtype: 'box',

                autoEl:{
                    tag: 'canvas'
                    ,height:480
                    ,width:448
                }
                ,listeners:{
                    render:{
                        scope:this
                        ,fn:function(){
                            eventWindowLoaded(pan.items.items[0].el.dom);
                        }
                    }
                }
            }
        });







    map.superclass.constructor.call(this, {
        autoScroll: true
        , title: 'Map'
        , frame:true
        , id:'center-map-tab'
        , bodyStyle:'margin:20px 0 0 130px;'
        , closable: true
        ,items:pan
    });

};

Ext.extend(map, Ext.Panel)

function eventWindowLoaded(el) {
    var walkableMapArray;
    var playerCurrentX = 5;
    var playerCurrentY = 5;

    //How much to move the player when keys are pressed (in pixels)
    var playerMovement = 32;


    Ext.Ajax.request({
        el:el,
        callback: function(options, success, response){
        var responseObj = Ext.decode(response.responseText);
            var mapArr =responseObj[0];
            if(mapArr.length != 0){
                walkableMapArray = mapArr;
                playerCurrentX = responseObj[1].X;
                playerCurrentY = responseObj[1].Y;

                createScreen(options.el);

            }

        }
        , params: {



        }
        , scope: this
        , url: 'application/frontEnd/server/mapAjaxSocket/getMap.php'
    });    //TODO: Get from AJAX request.


    //TODO: Get from AJAX request.


    function createScreen(el) {
        var canvas = el;
        var context = canvas.getContext("2d");
        var imageObj;

        loadMap();

        function loadMap() {
            //Load the map bitmap

            imageObj = new Image(); // new instance for each image
            imageObj.src = "image/map001.png";
            imageObj.addEventListener('load', mapLoadComplete, false);
        }

        //Called when ALL images to be loaded have been loaded.
        function mapLoadComplete() {
            //TODO: If more than one bitmap being loaded check first if all have been loaded.
            drawMap();
            initSettings();
        }


        function initSettings() {
            //Keyboard listener to listen for up,down,left,right keys and change players position if possible
            var playerTempX = playerCurrentX;
            var playerTempY = playerCurrentY;
            var Y = 0;
            var X = 0;
            document.onkeydown = function(e) {
                e = e?e:window.event;
                console.log(Y);
                if(e.keyCode == 38 ) {
                    if(Y == 0 || Y == -1){

                         playerTempY--;
                         Y = Y+1;
                    }
                }
                if(e.keyCode == 40 ) {
                    if(Y == 0 || Y == 1){

                        playerTempY++;
                        Y = Y-1;
                    }
                }
                if(e.keyCode == 37) {
                    if(X == 0 || X == -1){
                        playerTempX--;
                        X = X+1;
                    }
                }
                if(e.keyCode == 39) {
                    if(X == 0 || X == 1){
                        playerTempX++;
                        X = X-1;
                    }

                }
                console.log(Y);
                // Changes the tile of the player (moves him) if the tile is walkable checked in the walkableMapArray[][];
                if(walkableMapArray[playerTempY][playerTempX]) {

                        if(walkableMapArray[playerTempY][playerTempX] == 1) {

                            playerCurrentX = playerTempX;
                            playerCurrentY = playerTempY;
                            Ext.Ajax.request({
                                callback: function(options, success, response){

                                }
                                , params: {
                                    playerX : playerTempX,
                                    playerY : playerTempY


                                }
                                , scope: this
                                , url: 'application/frontEnd/server/mapAjaxSocket/playerMovementCheck.php'
                            });

                            drawMap();
                        }


                }

            }
        }

        function drawMap() {
            context.clearRect(0, 0, 448, 480);
            context.globalAlpha = 1;

            //---------- Draws the map bitmap image (stored in the imageObj) ---------------
            context.drawImage(imageObj, 0, 0, 448, 480);

            //---------  Marks the current location of the player -----------------
            context.fillStyle = "blue";
            context.fillRect(playerCurrentX*32 + 6, playerCurrentY*32 + 6, 20, 20);

            context.globalAlpha = 0.5;
            //--------  Marks four square around the player, Green if he can walk there, Red if cannot walk there ------------
            if (walkableMapArray[playerCurrentY + 1][playerCurrentX] == 1) {
                context.fillStyle = "green";
                context.fillRect(playerCurrentX*32, (playerCurrentY + 1)*32, 32, 32);
            }
            else {
                context.fillStyle = "red";
                context.opacity = 0.5;
                context.fillRect(playerCurrentX*32, (playerCurrentY + 1)*32, 32, 32);
            }
            if (walkableMapArray[playerCurrentY - 1][playerCurrentX] == 1) {
                context.fillStyle = "green";
                context.fillRect(playerCurrentX*32, (playerCurrentY - 1)*32, 32, 32);
            }
            else {
                context.fillStyle = "red";
                context.opacity = 0.5;
                context.fillRect(playerCurrentX*32, (playerCurrentY - 1)*32, 32, 32);
            }
            if (walkableMapArray[playerCurrentY][playerCurrentX + 1] == 1) {
                context.fillStyle = "green";
                context.fillRect((playerCurrentX + 1)*32, (playerCurrentY)*32, 32, 32);
            }
            else {
                context.fillStyle = "red";
                context.opacity = 0.5;
                context.fillRect((playerCurrentX + 1)*32, (playerCurrentY)*32, 32, 32);
            }
            if (walkableMapArray[playerCurrentY][playerCurrentX - 1] == 1) {
                context.fillStyle = "green";
                context.fillRect((playerCurrentX - 1) *32, (playerCurrentY)*32, 32, 32);
            }
            else {
                context.fillStyle = "red";
                context.opacity = 0.5;
                context.fillRect((playerCurrentX - 1) *32, (playerCurrentY)*32, 32, 32);
            }
        }
    }
}