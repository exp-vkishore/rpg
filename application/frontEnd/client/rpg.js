/**
 * Created with JetBrains PhpStorm.
 * User: Mudit Jaju
 * Date: 31/10/12
 * Time: 10:09 AM
 * To change this template use File | Settings | File Templates.
 */
//alert(1);

//Ext.BLANK_IMAGE_URL = '../../public/resources/images/default/s.gif';

Ext.BLANK_IMAGE_URL = '../../public/resources/images/default/s.gif';

// application main entry point
Ext.onReady(function() {

    Ext.QuickTips.init();

    var tabPanel = new Ext.TabPanel({
        region: 'center', // a center region is ALWAYS required for border layout
        deferredRender: false,
        border:true
     });
    var tab = new home({});
    tabPanel.add(tab);
    tabPanel.setActiveTab(tab);

     var east = new eastPanel({});

    var viewport = new Ext.Viewport({
        id:'simplevp'
        ,layout:'border'
        ,border:true
        ,items:[{
            region:'north'
            ,height:50
            ,border:false
            ,bodyStyle:'background-color:#f8f8f8;'
            ,title:'North'
            ,collapsible:true

        },{
             region:'west'
            ,height:100
            ,width:300
            ,border:true
            ,title:'South'

            ,items:[{xtype:'button',    text:'Home',   handler:clickHandler, actionSpace:tabPanel  , action:'center-home-tab', functionToCall:'new home({})' ,width:280}
,                    {xtype:'button',    text:'Map',   handler:clickHandler, actionSpace:tabPanel  , action:'center-map-tab', functionToCall:'new map({})', width:280}
            ]
        },
            east,
        tabPanel
        ]
    });
});

var clickHandler = function(data){

        var tab =  data.actionSpace.getItem(data.action);
    if(!tab)
        {
            eval('var tab = '+data.functionToCall);

            data.actionSpace.add(tab);
        }

    data.actionSpace.setActiveTab(tab);

}


