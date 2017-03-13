define(["underscore","services/suluredirect/redirect-manager","services/suluredirect/redirect-router"],function(a,b,c){"use strict";var d={options:{},templates:{list:['<div class="list-toolbar-container"></div>','<div class="list-info"></div>','<div class="datagrid-container"></div>','<div class="dialog"></div>'].join("")},translations:{headline:"sulu_redirect.title"}};return{defaults:d,header:{noBack:!0,toolbar:{buttons:{add:{options:{callback:function(){c.toAdd()}}},deleteSelected:{}}}},layout:{content:{width:"max"}},initialize:function(){this.render()},render:function(){this.$el.html(this.templates.list()),this.sandbox.sulu.initListToolbarAndList.call(this,"redirect-routes","/admin/api/redirect-routes/fields",{el:this.$find(".list-toolbar-container"),instanceName:"redirect-routes",template:this.sandbox.sulu.buttons.get({settings:{options:{dropdownItems:[{type:"columnOptions"}]}}})},{el:this.sandbox.dom.find(".datagrid-container"),url:"/admin/api/redirect-routes?sortBy=created&sortOrder=desc",searchInstanceName:"redirect-routes",searchFields:["source","target"],resultKey:"redirect-routes",instanceName:"redirect-routes",actionCallback:function(a){c.toEdit(a)}.bind(this),viewOptions:{table:{actionIconColumn:"source"}}})}}});