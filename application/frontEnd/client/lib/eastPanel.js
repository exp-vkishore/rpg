


eastPanel = function(config){

    /*this.newsStore = Ext.data.jsonData({
     url:'application/server/home.php'
     })
     this.newsGrid = new Ext.GridPanel({

     })*/

    this.GridStore  = new Ext.data.JsonStore({
        url: 'application/frontEnd/server/mapAjaxSocket/playerMovementCheck.php',

        baseParams:{

        },
        idProperty:'user_id',
        root:'user',
        fields: [ 'user_id', 'type', 'defence', 'attack', 'damage', 'health', 'title' ]
    })
    this.GridStore.load();
    var  tpl =new Ext.XTemplate(
        '<ul class="actionList" id="actionList">',

            '<li class="actionListItem creature creature-0 first">',
                '<div class="header">',
                    '<div class="verbs">',
                        '<a class="view verb tipped" href="#"></a>',
                        '<a href="#" class="verb attack attack-1 action-attack-creature-14 default tipped"></a>',
                    '</div>',
                        '<a   class="icon tipped" href="#"></a>{title}',
                '</div>',
            '</li>',

        '</ul>',
        {
            getField: function(values) {
                var result = Ext.id();

               /* this.addPublicListener.defer(1, this, [result]);

                return result;*/
            },
            addPublicListener: function(id) {
            }
        }

    )
    this.columnModel = new Ext.grid.ColumnModel({
               columns:[
                   {
                       text: 'Field',
                       xtype:'templatecolumn',
                       tpl: tpl,
                       sortable:false
                    }
                   ]
    })

    this.grid = new Ext.grid.GridPanel({
        	    renderTo:Ext.getBody(),
        	    store: this.GridStore,
        	    autoHeight: true,
        	    cm:  this.columnModel,
                viewConfig:{forceFit:true},
                height: 350

	});
    eastPanel.superclass.constructor.call(this, {
        region:'east'
        ,width:200
        ,border:true
        ,title:'BlockInfo'
        ,autoScroll: true
        , id:'east-blockInfo-tab'
        ,items:this.grid
    });
};

Ext.extend(eastPanel, Ext.Panel)

