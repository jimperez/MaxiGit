/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:40:26.56
*/
gx.evt.autoSkip=!1;gx.define("articuloarticulolistawc",!0,function(n){var t,i,r;this.ServerClass="articuloarticulolistawc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV30Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV24IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV25IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV26IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE");this.AV7ArtId=gx.fn.getIntegerValue("vARTID",".");this.AV7ArtId=gx.fn.getIntegerValue("vARTID",".");this.AV30Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV24IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV25IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV26IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE")};this.Valid_Artid=function(){var n=gx.fn.currentGridRowImpl(25);return this.validCliEvt("Valid_Artid",25,function(){try{if(gx.fn.currentGridRowImpl(25)===0)return!0;var n=gx.util.balloon.getNew("ARTID",gx.fn.currentGridRowImpl(25));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artimpid=function(){var n=gx.fn.currentGridRowImpl(25);return this.validCliEvt("Valid_Artimpid",25,function(){try{if(gx.fn.currentGridRowImpl(25)===0)return!0;var n=gx.util.balloon.getNew("ARTIMPID",gx.fn.currentGridRowImpl(25));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e116x2_client=function(){return this.executeServerEvent("'DOINSERT'",!1,null,!1,!1)};this.e156x2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e166x2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46];this.GXLastCtrlId=46;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",25,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"articuloarticulolistawc",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addSingleLineEdit("Display",26,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");i.addSingleLineEdit("Update",27,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");i.addSingleLineEdit("Delete",28,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");i.addSingleLineEdit(8,29,"ARTID","Ide.","","ArtId","int",0,"px",9,9,"right",null,[],8,"ArtId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(16,30,"ARTNOM","Descripción","","ArtNom","svchar",0,"px",64,64,"left",null,[],16,"ArtNom",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(14,31,"ARTIMPID","Ide.","","ArtImpId","int",0,"px",4,4,"right",null,[],14,"ArtImpId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(367,32,"ARTIMPALI","Porcentaje","","ArtImpAli","decimal",0,"px",6,6,"right",null,[],367,"ArtImpAli",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(27,33,"ARTLISTAID","Ide.","","ArtListaId","int",0,"px",4,4,"right",null,[],27,"ArtListaId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(407,34,"ARTLISTADESDE","Desde","Fecha ...","ArtListaDesde","date",0,"px",10,10,"right",null,[],407,"ArtListaDesde",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(408,35,"ARTLISTAHASTA","Hasta","Fecha ...","ArtListaHasta","date",0,"px",10,10,"right",null,[],408,"ArtListaHasta",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(409,36,"ARTLISTAALICUOTA","Alicuota","","ArtListaAlicuota","decimal",0,"px",6,6,"right",null,[],409,"ArtListaAlicuota",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(410,37,"ARTLISTAPCIVTACTDONETO","Neto","","ArtListaPciVtaCtdoNeto","decimal",0,"px",13,13,"right",null,[],410,"ArtListaPciVtaCtdoNeto",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(411,38,"ARTLISTAPCIVTACTDOIVA","IVA","","ArtListaPciVtaCtdoIVA","decimal",0,"px",13,13,"right",null,[],411,"ArtListaPciVtaCtdoIVA",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(412,39,"ARTLISTAPCIVTACTDO","Contado","","ArtListaPciVtaCtdo","decimal",0,"px",13,13,"right",null,[],412,"ArtListaPciVtaCtdo",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(413,40,"ARTLISTAPCIVTALISTANETO","Neto","","ArtListaPciVtaListaNeto","decimal",0,"px",13,13,"right",null,[],413,"ArtListaPciVtaListaNeto",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(414,41,"ARTLISTAPCIVTALISTAIVA","IVA","","ArtListaPciVtaListaIVA","decimal",0,"px",13,13,"right",null,[],414,"ArtListaPciVtaListaIVA",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(415,42,"ARTLISTAPCIVTALISTA","Lista","","ArtListaPciVtaLista","decimal",0,"px",13,13,"right",null,[],415,"ArtListaPciVtaLista",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(416,43,"ARTLISTAUTILIDAD","Utilidad","","ArtListaUtilidad","decimal",0,"px",6,6,"right",null,[],416,"ArtListaUtilidad",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(417,44,"ARTLISTABONI","Bonificacion","","ArtListaBoni","decimal",0,"px",6,6,"right",null,[],417,"ArtListaBoni",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(418,45,"ARTLISTACOMISION","Comision","","ArtListaComision","decimal",0,"px",6,6,"right",null,[],418,"ArtListaComision",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addComboBox(419,46,"ARTLISTAESTADO","Estado","ArtListaEstado","char",null,0,!1,!1,0,"px","WWColumn");this.GridContainer.emptyText="";this.setGrid(i);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,12,0,"BootstrapPanel",this.CmpContext+"DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");r=this.DVPANEL_TABLEHEADERContainer;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Width","Width","100%","str");r.setProp("Height","Height","100","str");r.setProp("AutoWidth","Autowidth",!1,"bool");r.setProp("AutoHeight","Autoheight",!0,"bool");r.setProp("Cls","Cls","PanelFilled_BaseColor","str");r.setProp("ShowHeader","Showheader",!0,"bool");r.setProp("Title","Title","Precios de Venta","str");r.setProp("Collapsible","Collapsible",!0,"bool");r.setProp("Collapsed","Collapsed",!1,"bool");r.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");r.setProp("IconPosition","Iconposition","Right","str");r.setProp("AutoScroll","Autoscroll",!1,"bool");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEGRIDHEADER",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[14]={id:14,fld:"TABLEHEADER",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"TABLEACTIONS",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"BTNINSERT",grid:0,evt:"e116x2_client"};t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"",grid:0};t[26]={id:26,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV20Display",gxold:"OV20Display",gxvar:"AV20Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV20Display=n)},v2z:function(n){n!==undefined&&(gx.O.ZV20Display=n)},v2c:function(n){gx.fn.setGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(25),gx.O.AV20Display,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV20Display=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};t[27]={id:27,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV18Update",gxold:"OV18Update",gxvar:"AV18Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV18Update=n)},v2z:function(n){n!==undefined&&(gx.O.ZV18Update=n)},v2c:function(n){gx.fn.setGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(25),gx.O.AV18Update,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV18Update=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};t[28]={id:28,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV19Delete",gxold:"OV19Delete",gxvar:"AV19Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV19Delete=n)},v2z:function(n){n!==undefined&&(gx.O.ZV19Delete=n)},v2c:function(n){gx.fn.setGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(25),gx.O.AV19Delete,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV19Delete=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};t[29]={id:29,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:this.Valid_Artid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTID",gxz:"Z8ArtId",gxold:"O8ArtId",gxvar:"A8ArtId",ucs:[],op:[32,30,31],ip:[32,30,31,29],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A8ArtId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z8ArtId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ARTID",n||gx.fn.currentGridRowImpl(25),gx.O.A8ArtId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A8ArtId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ARTID",n||gx.fn.currentGridRowImpl(25),".")},nac:gx.falseFn};t[30]={id:30,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTNOM",gxz:"Z16ArtNom",gxold:"O16ArtNom",gxvar:"A16ArtNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A16ArtNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z16ArtNom=n)},v2c:function(n){gx.fn.setGridControlValue("ARTNOM",n||gx.fn.currentGridRowImpl(25),gx.O.A16ArtNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A16ArtNom=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ARTNOM",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};t[31]={id:31,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:this.Valid_Artimpid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTIMPID",gxz:"Z14ArtImpId",gxold:"O14ArtImpId",gxvar:"A14ArtImpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A14ArtImpId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z14ArtImpId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ARTIMPID",n||gx.fn.currentGridRowImpl(25),gx.O.A14ArtImpId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A14ArtImpId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ARTIMPID",n||gx.fn.currentGridRowImpl(25),".")},nac:gx.falseFn};t[32]={id:32,lvl:2,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTIMPALI",gxz:"Z367ArtImpAli",gxold:"O367ArtImpAli",gxvar:"A367ArtImpAli",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A367ArtImpAli=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z367ArtImpAli=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ARTIMPALI",n||gx.fn.currentGridRowImpl(25),gx.O.A367ArtImpAli,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A367ArtImpAli=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ARTIMPALI",n||gx.fn.currentGridRowImpl(25),".",",")},nac:gx.falseFn};t[33]={id:33,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTAID",gxz:"Z27ArtListaId",gxold:"O27ArtListaId",gxvar:"A27ArtListaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A27ArtListaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z27ArtListaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ARTLISTAID",n||gx.fn.currentGridRowImpl(25),gx.O.A27ArtListaId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A27ArtListaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ARTLISTAID",n||gx.fn.currentGridRowImpl(25),".")},nac:gx.falseFn};t[34]={id:34,lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTADESDE",gxz:"Z407ArtListaDesde",gxold:"O407ArtListaDesde",gxvar:"A407ArtListaDesde",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A407ArtListaDesde=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z407ArtListaDesde=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("ARTLISTADESDE",n||gx.fn.currentGridRowImpl(25),gx.O.A407ArtListaDesde,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A407ArtListaDesde=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("ARTLISTADESDE",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};t[35]={id:35,lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTAHASTA",gxz:"Z408ArtListaHasta",gxold:"O408ArtListaHasta",gxvar:"A408ArtListaHasta",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A408ArtListaHasta=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z408ArtListaHasta=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("ARTLISTAHASTA",n||gx.fn.currentGridRowImpl(25),gx.O.A408ArtListaHasta,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A408ArtListaHasta=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("ARTLISTAHASTA",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};t[36]={id:36,lvl:2,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTAALICUOTA",gxz:"Z409ArtListaAlicuota",gxold:"O409ArtListaAlicuota",gxvar:"A409ArtListaAlicuota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A409ArtListaAlicuota=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z409ArtListaAlicuota=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ARTLISTAALICUOTA",n||gx.fn.currentGridRowImpl(25),gx.O.A409ArtListaAlicuota,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A409ArtListaAlicuota=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ARTLISTAALICUOTA",n||gx.fn.currentGridRowImpl(25),".",",")},nac:gx.falseFn};t[37]={id:37,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTAPCIVTACTDONETO",gxz:"Z410ArtListaPciVtaCtdoNeto",gxold:"O410ArtListaPciVtaCtdoNeto",gxvar:"A410ArtListaPciVtaCtdoNeto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A410ArtListaPciVtaCtdoNeto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z410ArtListaPciVtaCtdoNeto=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ARTLISTAPCIVTACTDONETO",n||gx.fn.currentGridRowImpl(25),gx.O.A410ArtListaPciVtaCtdoNeto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A410ArtListaPciVtaCtdoNeto=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ARTLISTAPCIVTACTDONETO",n||gx.fn.currentGridRowImpl(25),".",",")},nac:gx.falseFn};t[38]={id:38,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTAPCIVTACTDOIVA",gxz:"Z411ArtListaPciVtaCtdoIVA",gxold:"O411ArtListaPciVtaCtdoIVA",gxvar:"A411ArtListaPciVtaCtdoIVA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A411ArtListaPciVtaCtdoIVA=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z411ArtListaPciVtaCtdoIVA=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ARTLISTAPCIVTACTDOIVA",n||gx.fn.currentGridRowImpl(25),gx.O.A411ArtListaPciVtaCtdoIVA,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A411ArtListaPciVtaCtdoIVA=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ARTLISTAPCIVTACTDOIVA",n||gx.fn.currentGridRowImpl(25),".",",")},nac:gx.falseFn};t[39]={id:39,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTAPCIVTACTDO",gxz:"Z412ArtListaPciVtaCtdo",gxold:"O412ArtListaPciVtaCtdo",gxvar:"A412ArtListaPciVtaCtdo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A412ArtListaPciVtaCtdo=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z412ArtListaPciVtaCtdo=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ARTLISTAPCIVTACTDO",n||gx.fn.currentGridRowImpl(25),gx.O.A412ArtListaPciVtaCtdo,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A412ArtListaPciVtaCtdo=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ARTLISTAPCIVTACTDO",n||gx.fn.currentGridRowImpl(25),".",",")},nac:gx.falseFn};t[40]={id:40,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTAPCIVTALISTANETO",gxz:"Z413ArtListaPciVtaListaNeto",gxold:"O413ArtListaPciVtaListaNeto",gxvar:"A413ArtListaPciVtaListaNeto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A413ArtListaPciVtaListaNeto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z413ArtListaPciVtaListaNeto=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ARTLISTAPCIVTALISTANETO",n||gx.fn.currentGridRowImpl(25),gx.O.A413ArtListaPciVtaListaNeto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A413ArtListaPciVtaListaNeto=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ARTLISTAPCIVTALISTANETO",n||gx.fn.currentGridRowImpl(25),".",",")},nac:gx.falseFn};t[41]={id:41,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTAPCIVTALISTAIVA",gxz:"Z414ArtListaPciVtaListaIVA",gxold:"O414ArtListaPciVtaListaIVA",gxvar:"A414ArtListaPciVtaListaIVA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A414ArtListaPciVtaListaIVA=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z414ArtListaPciVtaListaIVA=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ARTLISTAPCIVTALISTAIVA",n||gx.fn.currentGridRowImpl(25),gx.O.A414ArtListaPciVtaListaIVA,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A414ArtListaPciVtaListaIVA=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ARTLISTAPCIVTALISTAIVA",n||gx.fn.currentGridRowImpl(25),".",",")},nac:gx.falseFn};t[42]={id:42,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTAPCIVTALISTA",gxz:"Z415ArtListaPciVtaLista",gxold:"O415ArtListaPciVtaLista",gxvar:"A415ArtListaPciVtaLista",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A415ArtListaPciVtaLista=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z415ArtListaPciVtaLista=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ARTLISTAPCIVTALISTA",n||gx.fn.currentGridRowImpl(25),gx.O.A415ArtListaPciVtaLista,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A415ArtListaPciVtaLista=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ARTLISTAPCIVTALISTA",n||gx.fn.currentGridRowImpl(25),".",",")},nac:gx.falseFn};t[43]={id:43,lvl:2,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTAUTILIDAD",gxz:"Z416ArtListaUtilidad",gxold:"O416ArtListaUtilidad",gxvar:"A416ArtListaUtilidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A416ArtListaUtilidad=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z416ArtListaUtilidad=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ARTLISTAUTILIDAD",n||gx.fn.currentGridRowImpl(25),gx.O.A416ArtListaUtilidad,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A416ArtListaUtilidad=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ARTLISTAUTILIDAD",n||gx.fn.currentGridRowImpl(25),".",",")},nac:gx.falseFn};t[44]={id:44,lvl:2,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTABONI",gxz:"Z417ArtListaBoni",gxold:"O417ArtListaBoni",gxvar:"A417ArtListaBoni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A417ArtListaBoni=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z417ArtListaBoni=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ARTLISTABONI",n||gx.fn.currentGridRowImpl(25),gx.O.A417ArtListaBoni,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A417ArtListaBoni=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ARTLISTABONI",n||gx.fn.currentGridRowImpl(25),".",",")},nac:gx.falseFn};t[45]={id:45,lvl:2,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTACOMISION",gxz:"Z418ArtListaComision",gxold:"O418ArtListaComision",gxvar:"A418ArtListaComision",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A418ArtListaComision=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z418ArtListaComision=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ARTLISTACOMISION",n||gx.fn.currentGridRowImpl(25),gx.O.A418ArtListaComision,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A418ArtListaComision=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ARTLISTACOMISION",n||gx.fn.currentGridRowImpl(25),".",",")},nac:gx.falseFn};t[46]={id:46,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTAESTADO",gxz:"Z419ArtListaEstado",gxold:"O419ArtListaEstado",gxvar:"A419ArtListaEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A419ArtListaEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z419ArtListaEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("ARTLISTAESTADO",n||gx.fn.currentGridRowImpl(25),gx.O.A419ArtListaEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A419ArtListaEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ARTLISTAESTADO",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};this.ZV20Display="";this.OV20Display="";this.ZV18Update="";this.OV18Update="";this.ZV19Delete="";this.OV19Delete="";this.Z8ArtId=0;this.O8ArtId=0;this.Z16ArtNom="";this.O16ArtNom="";this.Z14ArtImpId=0;this.O14ArtImpId=0;this.Z367ArtImpAli=0;this.O367ArtImpAli=0;this.Z27ArtListaId=0;this.O27ArtListaId=0;this.Z407ArtListaDesde=gx.date.nullDate();this.O407ArtListaDesde=gx.date.nullDate();this.Z408ArtListaHasta=gx.date.nullDate();this.O408ArtListaHasta=gx.date.nullDate();this.Z409ArtListaAlicuota=0;this.O409ArtListaAlicuota=0;this.Z410ArtListaPciVtaCtdoNeto=0;this.O410ArtListaPciVtaCtdoNeto=0;this.Z411ArtListaPciVtaCtdoIVA=0;this.O411ArtListaPciVtaCtdoIVA=0;this.Z412ArtListaPciVtaCtdo=0;this.O412ArtListaPciVtaCtdo=0;this.Z413ArtListaPciVtaListaNeto=0;this.O413ArtListaPciVtaListaNeto=0;this.Z414ArtListaPciVtaListaIVA=0;this.O414ArtListaPciVtaListaIVA=0;this.Z415ArtListaPciVtaLista=0;this.O415ArtListaPciVtaLista=0;this.Z416ArtListaUtilidad=0;this.O416ArtListaUtilidad=0;this.Z417ArtListaBoni=0;this.O417ArtListaBoni=0;this.Z418ArtListaComision=0;this.O418ArtListaComision=0;this.Z419ArtListaEstado="";this.O419ArtListaEstado="";this.AV7ArtId=0;this.AV20Display="";this.AV18Update="";this.AV19Delete="";this.A8ArtId=0;this.A16ArtNom="";this.A14ArtImpId=0;this.A367ArtImpAli=0;this.A27ArtListaId=0;this.A407ArtListaDesde=gx.date.nullDate();this.A408ArtListaHasta=gx.date.nullDate();this.A409ArtListaAlicuota=0;this.A410ArtListaPciVtaCtdoNeto=0;this.A411ArtListaPciVtaCtdoIVA=0;this.A412ArtListaPciVtaCtdo=0;this.A413ArtListaPciVtaListaNeto=0;this.A414ArtListaPciVtaListaIVA=0;this.A415ArtListaPciVtaLista=0;this.A416ArtListaUtilidad=0;this.A417ArtListaBoni=0;this.A418ArtListaComision=0;this.A419ArtListaEstado="";this.AV30Pgmname="";this.AV24IsAuthorized_Display=!1;this.AV25IsAuthorized_Update=!1;this.AV26IsAuthorized_Delete=!1;this.Events={e116x2_client:["'DOINSERT'",!0],e156x2_client:["ENTER",!0],e166x2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7ArtId",fld:"vARTID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{av:"AV30Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV24IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV25IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV26IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0}],[{av:"AV24IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:"AV25IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:"AV26IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"}]];this.EvtParms.START=[[{av:"AV30Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV7ArtId",fld:"vARTID",pic:"ZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV24IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"A8ArtId",fld:"ARTID",pic:"ZZZZZZZZ9"},{av:"A27ArtListaId",fld:"ARTLISTAID",pic:"ZZZ9",hsh:!0},{av:"AV25IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV26IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0}],[{av:"AV20Display",fld:"vDISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:"vDISPLAY",prop:"Link"},{av:"AV18Update",fld:"vUPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:"vUPDATE",prop:"Link"},{av:"AV19Delete",fld:"vDELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:"vDELETE",prop:"Link"}]];this.EvtParms["'DOINSERT'"]=[[{av:"AV7ArtId",fld:"vARTID",pic:"ZZZZZZZZ9"},{av:"A27ArtListaId",fld:"ARTLISTAID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7ArtId",fld:"vARTID",pic:"ZZZZZZZZ9"},{av:"AV24IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV25IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV26IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"sPrefix"},{av:"AV30Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{ctrl:"GRID",prop:"Rows"}],[{av:"AV24IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:"AV25IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:"AV26IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"}]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7ArtId",fld:"vARTID",pic:"ZZZZZZZZ9"},{av:"AV24IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV25IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV26IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"sPrefix"},{av:"AV30Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{ctrl:"GRID",prop:"Rows"}],[{av:"AV24IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:"AV25IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:"AV26IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"}]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7ArtId",fld:"vARTID",pic:"ZZZZZZZZ9"},{av:"AV24IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV25IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV26IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"sPrefix"},{av:"AV30Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{ctrl:"GRID",prop:"Rows"}],[{av:"AV24IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:"AV25IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:"AV26IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"}]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7ArtId",fld:"vARTID",pic:"ZZZZZZZZ9"},{av:"AV24IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV25IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV26IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"sPrefix"},{av:"AV30Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{ctrl:"GRID",prop:"Rows"}],[{av:"AV24IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:"AV25IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:"AV26IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"}]];this.EvtParms.VALID_ARTID=[[{av:"A367ArtImpAli",fld:"ARTIMPALI",pic:"999.99"},{av:"A16ArtNom",fld:"ARTNOM",pic:"@!"},{av:"A14ArtImpId",fld:"ARTIMPID",pic:"ZZZ9"},{av:"A8ArtId",fld:"ARTID",pic:"ZZZZZZZZ9"}],[{av:"A367ArtImpAli",fld:"ARTIMPALI",pic:"999.99"},{av:"A16ArtNom",fld:"ARTNOM",pic:"@!"},{av:"A14ArtImpId",fld:"ARTIMPID",pic:"ZZZ9"}]];this.EvtParms.VALID_ARTIMPID=[[],[]];this.setVCMap("AV30Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV24IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV25IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV26IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV7ArtId","vARTID",0,"int",9,0);this.setVCMap("AV7ArtId","vARTID",0,"int",9,0);this.setVCMap("AV30Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV24IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV25IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV26IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV7ArtId","vARTID",0,"int",9,0);this.setVCMap("AV30Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV24IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV25IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV26IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);i.addRefreshingVar({rfrVar:"AV7ArtId"});i.addRefreshingVar({rfrVar:"AV30Pgmname"});i.addRefreshingVar({rfrVar:"AV24IsAuthorized_Display"});i.addRefreshingVar({rfrVar:"AV25IsAuthorized_Update"});i.addRefreshingVar({rfrVar:"AV26IsAuthorized_Delete"});i.addRefreshingParm({rfrVar:"AV7ArtId"});i.addRefreshingParm({rfrVar:"AV30Pgmname"});i.addRefreshingParm({rfrVar:"AV24IsAuthorized_Display"});i.addRefreshingParm({rfrVar:"AV25IsAuthorized_Update"});i.addRefreshingParm({rfrVar:"AV26IsAuthorized_Delete"});this.Initialize()})