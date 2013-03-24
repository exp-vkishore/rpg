/**
 * Created with JetBrains PhpStorm.
 * User: Mudit Jaju
 * Date: 31/10/12
 * Time: 10:22 AM
 * To change this template use File | Settings | File Templates.
 */


home = function(config){

    /*this.newsStore = Ext.data.jsonData({
        url:'application/server/home.php'
    })
    this.newsGrid = new Ext.GridPanel({

    })*/
    home.superclass.constructor.call(this, {
        autoScroll: true
        , title: 'Home'
        , id:'center-home-tab'
        , closable: true
       // ,items[]
    });
};

Ext.extend(home, Ext.Panel)

