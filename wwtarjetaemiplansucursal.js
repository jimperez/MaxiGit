/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:50:16.43
*/
gx.evt.autoSkip=!1;gx.define("wwtarjetaemiplansucursal",!1,function(){var n,t,r,i;this.ServerClass="wwtarjetaemiplansucursal";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A858TrjPlanCosto=gx.fn.getDecimalValue("TRJPLANCOSTO",".",",");this.A1038TrjPlanDesde=gx.fn.getDateValue("TRJPLANDESDE");this.A1039TrjPlanHasta=gx.fn.getDateValue("TRJPLANHASTA");this.AV47Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV42IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV47Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV42IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY")};this.Valid_Trjid=function(){var n=gx.fn.currentGridRowImpl(41);return this.validCliEvt("Valid_Trjid",41,function(){try{if(gx.fn.currentGridRowImpl(41)===0)return!0;var n=gx.util.balloon.getNew("TRJID",gx.fn.currentGridRowImpl(41));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Trjnom=function(){var n=gx.fn.currentGridRowImpl(41);return this.validCliEvt("Valid_Trjnom",41,function(){try{if(gx.fn.currentGridRowImpl(41)===0)return!0;var n=gx.util.balloon.getNew("TRJNOM",gx.fn.currentGridRowImpl(41));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Emisortrjid=function(){var n=gx.fn.currentGridRowImpl(41);return this.validCliEvt("Valid_Emisortrjid",41,function(){try{if(gx.fn.currentGridRowImpl(41)===0)return!0;var n=gx.util.balloon.getNew("EMISORTRJID",gx.fn.currentGridRowImpl(41));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Emisortrjnombre=function(){var n=gx.fn.currentGridRowImpl(41);return this.validCliEvt("Valid_Emisortrjnombre",41,function(){try{if(gx.fn.currentGridRowImpl(41)===0)return!0;var n=gx.util.balloon.getNew("EMISORTRJNOMBRE",gx.fn.currentGridRowImpl(41));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Tarjetaeminombre=function(){var n=gx.fn.currentGridRowImpl(41);return this.validCliEvt("Valid_Tarjetaeminombre",41,function(){try{if(gx.fn.currentGridRowImpl(41)===0)return!0;var n=gx.util.balloon.getNew("TARJETAEMINOMBRE",gx.fn.currentGridRowImpl(41));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Trjplanid=function(){var n=gx.fn.currentGridRowImpl(41);return this.validCliEvt("Valid_Trjplanid",41,function(){try{if(gx.fn.currentGridRowImpl(41)===0)return!0;var n=gx.util.balloon.getNew("TRJPLANID",gx.fn.currentGridRowImpl(41));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Planid=function(){var n=gx.fn.currentGridRowImpl(41);return this.validCliEvt("Valid_Planid",41,function(){try{if(gx.fn.currentGridRowImpl(41)===0)return!0;var n=gx.util.balloon.getNew("PLANID",gx.fn.currentGridRowImpl(41));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Plannombre=function(){var n=gx.fn.currentGridRowImpl(41);return this.validCliEvt("Valid_Plannombre",41,function(){try{if(gx.fn.currentGridRowImpl(41)===0)return!0;var n=gx.util.balloon.getNew("PLANNOMBRE",gx.fn.currentGridRowImpl(41));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Tarjetaemiplannombre=function(){var n=gx.fn.currentGridRowImpl(41);return this.validCliEvt("Valid_Tarjetaemiplannombre",41,function(){try{if(gx.fn.currentGridRowImpl(41)===0)return!0;var n=gx.util.balloon.getNew("TARJETAEMIPLANNOMBRE",gx.fn.currentGridRowImpl(41));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Entidadid=function(){var n=gx.fn.currentGridRowImpl(41);return this.validCliEvt("Valid_Entidadid",41,function(){try{if(gx.fn.currentGridRowImpl(41)===0)return!0;var n=gx.util.balloon.getNew("ENTIDADID",gx.fn.currentGridRowImpl(41));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Sucursalid=function(){var n=gx.fn.currentGridRowImpl(41);return this.validCliEvt("Valid_Sucursalid",41,function(){try{if(gx.fn.currentGridRowImpl(41)===0)return!0;var n=gx.util.balloon.getNew("SUCURSALID",gx.fn.currentGridRowImpl(41));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Sucursalnombre=function(){var n=gx.fn.currentGridRowImpl(41);return this.validCliEvt("Valid_Sucursalnombre",41,function(){try{if(gx.fn.currentGridRowImpl(41)===0)return!0;var n=gx.util.balloon.getNew("SUCURSALNOMBRE",gx.fn.currentGridRowImpl(41));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e174e2_client=function(){return this.clearMessages(),this.call("associationwwtarjetaemiplansucursalarticuloplantarjeta.aspx",[this.A96TrjId,this.A97EmisorTrjId,this.A98TrjPlanId,this.A44EntidadId,this.A45SucursalId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e114e2_client=function(){return this.executeServerEvent("'DOINSERT'",!1,null,!1,!1)};this.e124e2_client=function(){return this.executeServerEvent("'DOEXPORT'",!1,null,!1,!1)};this.e134e2_client=function(){return this.executeServerEvent("'DOEXPORTREPORT'",!1,null,!1,!1)};this.e184e2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e194e2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,39,40,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];this.GXLastCtrlId=62;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",41,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwtarjetaemiplansucursal",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.GridContainer;t.addSingleLineEdit("Display",42,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");t.addSingleLineEdit(96,43,"TRJID","Tarjeta","","TrjId","int",0,"px",4,4,"right",null,[],96,"TrjId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addSingleLineEdit(849,44,"TRJNOM","Tarjeta","","TrjNom","svchar",0,"px",64,64,"left",null,[],849,"TrjNom",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addSingleLineEdit(97,45,"EMISORTRJID","Ide.","","EmisorTrjId","int",0,"px",4,4,"right",null,[],97,"EmisorTrjId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addSingleLineEdit(1030,46,"EMISORTRJNOMBRE","Emisor","","EmisorTrjNombre","svchar",0,"px",64,64,"left",null,[],1030,"EmisorTrjNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addSingleLineEdit(1524,47,"TARJETAEMINOMBRE","Tarjeta Emisor Nombre","","TarjetaEmiNombre","svchar",0,"px",64,64,"left",null,[],1524,"TarjetaEmiNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addSingleLineEdit(98,48,"TRJPLANID","Ide.","","TrjPlanId","int",0,"px",4,4,"right",null,[],98,"TrjPlanId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addSingleLineEdit(119,49,"PLANID","Ide. Plan","","PlanId","int",0,"px",4,4,"right",null,[],119,"PlanId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addSingleLineEdit(1040,50,"PLANNOMBRE","Plan Nombre","","PlanNombre","svchar",0,"px",64,64,"left",null,[],1040,"PlanNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addComboBox(1041,51,"PLANESTADO","Plan Estado","PlanEstado","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");t.addSingleLineEdit(1532,52,"TARJETAEMIPLANNOMBRE","Plan","","TarjetaEmiPlanNombre","char",0,"px",100,80,"left",null,[],1532,"TarjetaEmiPlanNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addSingleLineEdit(44,53,"ENTIDADID","Ide.","","EntidadId","int",0,"px",2,2,"right",null,[],44,"EntidadId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addSingleLineEdit(373,54,"ENTIDADNOMBRE","Empresa","","EntidadNombre","svchar",0,"px",64,64,"left",null,[],373,"EntidadNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addSingleLineEdit(45,55,"SUCURSALID","Ide.","","SucursalId","int",0,"px",4,4,"right",null,[],45,"SucursalId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addSingleLineEdit(374,56,"SUCURSALNOMBRE","Sucursal","","SucursalNombre","svchar",0,"px",64,64,"left",null,[],374,"SucursalNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addSingleLineEdit(2652,57,"TRJPLANSUCURSALDESCRIPCION","Plan - Sucursal","","TrjPlanSucursalDescripcion","char",0,"px",100,80,"left",null,[],2652,"TrjPlanSucursalDescripcion",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addComboBox(1536,58,"TRJPLANSUCURSALESTADO","Estado","TrjPlanSucursalEstado","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");t.addBitmap("&Asociararticulo","vASOCIARARTICULO",59,0,"px",17,"px","e174e2_client","","","ActionBaseColorAttribute","WWActionColumn");this.GridContainer.emptyText="";this.setGrid(t);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");r=this.DVPANEL_TABLEHEADERContainer;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Width","Width","100%","str");r.setProp("Height","Height","100","str");r.setProp("AutoWidth","Autowidth",!1,"bool");r.setProp("AutoHeight","Autoheight",!0,"bool");r.setProp("Cls","Cls","PanelFilled_BaseColor","str");r.setProp("ShowHeader","Showheader",!0,"bool");r.setProp("Title","Title","Opciones","str");r.setProp("Collapsible","Collapsible",!0,"bool");r.setProp("Collapsed","Collapsed",!1,"bool");r.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");r.setProp("IconPosition","Iconposition","Right","str");r.setProp("AutoScroll","Autoscroll",!1,"bool");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);this.INNEWWINDOW1Container=gx.uc.getNew(this,63,31,"InNewWindow","INNEWWINDOW1Container","Innewwindow1","INNEWWINDOW1");i=this.INNEWWINDOW1Container;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setDynProp("Width","Width","50","str");i.setDynProp("Height","Height","50","str");i.setProp("Name","Name","","str");i.setDynProp("Target","Target","","str");i.setProp("Fullscreen","Fullscreen",!1,"bool");i.setProp("Location","Location",!0,"bool");i.setProp("MenuBar","Menubar",!0,"bool");i.setProp("Resizable","Resizable",!0,"bool");i.setProp("Scrollbars","Scrollbars",!0,"bool");i.setProp("TitleBar","Titlebar",!0,"bool");i.setProp("ToolBar","Toolbar",!0,"bool");i.setProp("directories","Directories",!0,"bool");i.setProp("status","Status",!0,"bool");i.setProp("copyhistory","Copyhistory",!0,"bool");i.setProp("top","Top","5","str");i.setProp("left","Left","5","str");i.setProp("fitscreen","Fitscreen",!1,"bool");i.setProp("RefreshParentOnClose","Refreshparentonclose",!1,"bool");i.setProp("Targets","Targets","","str");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEACTIONS",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"BTNINSERT",grid:0,evt:"e114e2_client"};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"BTNEXPORT",grid:0,evt:"e124e2_client"};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"BTNEXPORTREPORT",grid:0,evt:"e134e2_client"};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"TABLEFILTERS",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSUCURSALNOMBRE",gxz:"ZV17SucursalNombre",gxold:"OV17SucursalNombre",gxvar:"AV17SucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV17SucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV17SucursalNombre=n)},v2c:function(){gx.fn.setControlValue("vSUCURSALNOMBRE",gx.O.AV17SucursalNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV17SucursalNombre=this.val())},val:function(){return gx.fn.getControlValue("vSUCURSALNOMBRE")},nac:gx.falseFn};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,lvl:0,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTARJETAEMIPLANNOMBRE",gxz:"ZV35TarjetaEmiPlanNombre",gxold:"OV35TarjetaEmiPlanNombre",gxvar:"AV35TarjetaEmiPlanNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV35TarjetaEmiPlanNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV35TarjetaEmiPlanNombre=n)},v2c:function(){gx.fn.setControlValue("vTARJETAEMIPLANNOMBRE",gx.O.AV35TarjetaEmiPlanNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV35TarjetaEmiPlanNombre=this.val())},val:function(){return gx.fn.getControlValue("vTARJETAEMIPLANNOMBRE")},nac:gx.falseFn};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[42]={id:42,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:0,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV33Display",gxold:"OV33Display",gxvar:"AV33Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV33Display=n)},v2z:function(n){n!==undefined&&(gx.O.ZV33Display=n)},v2c:function(n){gx.fn.setGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(41),gx.O.AV33Display,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV33Display=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[43]={id:43,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:this.Valid_Trjid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJID",gxz:"Z96TrjId",gxold:"O96TrjId",gxvar:"A96TrjId",ucs:[],op:[57,52,50,51,49,47,44,46,56,54],ip:[57,51,54,56,52,50,47,49,48,46,44,43,45,55,53],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A96TrjId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z96TrjId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("TRJID",n||gx.fn.currentGridRowImpl(41),gx.O.A96TrjId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A96TrjId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("TRJID",n||gx.fn.currentGridRowImpl(41),".")},nac:gx.falseFn};n[44]={id:44,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:this.Valid_Trjnom,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJNOM",gxz:"Z849TrjNom",gxold:"O849TrjNom",gxvar:"A849TrjNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A849TrjNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z849TrjNom=n)},v2c:function(n){gx.fn.setGridControlValue("TRJNOM",n||gx.fn.currentGridRowImpl(41),gx.O.A849TrjNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A849TrjNom=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TRJNOM",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[45]={id:45,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:this.Valid_Emisortrjid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMISORTRJID",gxz:"Z97EmisorTrjId",gxold:"O97EmisorTrjId",gxvar:"A97EmisorTrjId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A97EmisorTrjId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z97EmisorTrjId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("EMISORTRJID",n||gx.fn.currentGridRowImpl(41),gx.O.A97EmisorTrjId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A97EmisorTrjId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("EMISORTRJID",n||gx.fn.currentGridRowImpl(41),".")},nac:gx.falseFn};n[46]={id:46,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:this.Valid_Emisortrjnombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMISORTRJNOMBRE",gxz:"Z1030EmisorTrjNombre",gxold:"O1030EmisorTrjNombre",gxvar:"A1030EmisorTrjNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1030EmisorTrjNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1030EmisorTrjNombre=n)},v2c:function(n){gx.fn.setGridControlValue("EMISORTRJNOMBRE",n||gx.fn.currentGridRowImpl(41),gx.O.A1030EmisorTrjNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1030EmisorTrjNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("EMISORTRJNOMBRE",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[47]={id:47,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:this.Valid_Tarjetaeminombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARJETAEMINOMBRE",gxz:"Z1524TarjetaEmiNombre",gxold:"O1524TarjetaEmiNombre",gxvar:"A1524TarjetaEmiNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1524TarjetaEmiNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1524TarjetaEmiNombre=n)},v2c:function(n){gx.fn.setGridControlValue("TARJETAEMINOMBRE",n||gx.fn.currentGridRowImpl(41),gx.O.A1524TarjetaEmiNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1524TarjetaEmiNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TARJETAEMINOMBRE",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[48]={id:48,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:this.Valid_Trjplanid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJPLANID",gxz:"Z98TrjPlanId",gxold:"O98TrjPlanId",gxvar:"A98TrjPlanId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A98TrjPlanId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z98TrjPlanId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("TRJPLANID",n||gx.fn.currentGridRowImpl(41),gx.O.A98TrjPlanId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A98TrjPlanId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("TRJPLANID",n||gx.fn.currentGridRowImpl(41),".")},nac:gx.falseFn};n[49]={id:49,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:this.Valid_Planid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANID",gxz:"Z119PlanId",gxold:"O119PlanId",gxvar:"A119PlanId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A119PlanId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z119PlanId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PLANID",n||gx.fn.currentGridRowImpl(41),gx.O.A119PlanId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A119PlanId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PLANID",n||gx.fn.currentGridRowImpl(41),".")},nac:gx.falseFn};n[50]={id:50,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:this.Valid_Plannombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANNOMBRE",gxz:"Z1040PlanNombre",gxold:"O1040PlanNombre",gxvar:"A1040PlanNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1040PlanNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1040PlanNombre=n)},v2c:function(n){gx.fn.setGridControlValue("PLANNOMBRE",n||gx.fn.currentGridRowImpl(41),gx.O.A1040PlanNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1040PlanNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PLANNOMBRE",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[51]={id:51,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANESTADO",gxz:"Z1041PlanEstado",gxold:"O1041PlanEstado",gxvar:"A1041PlanEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1041PlanEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z1041PlanEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("PLANESTADO",n||gx.fn.currentGridRowImpl(41),gx.O.A1041PlanEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1041PlanEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PLANESTADO",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[52]={id:52,lvl:2,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:this.Valid_Tarjetaemiplannombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARJETAEMIPLANNOMBRE",gxz:"Z1532TarjetaEmiPlanNombre",gxold:"O1532TarjetaEmiPlanNombre",gxvar:"A1532TarjetaEmiPlanNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1532TarjetaEmiPlanNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1532TarjetaEmiPlanNombre=n)},v2c:function(n){gx.fn.setGridControlValue("TARJETAEMIPLANNOMBRE",n||gx.fn.currentGridRowImpl(41),gx.O.A1532TarjetaEmiPlanNombre,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1532TarjetaEmiPlanNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TARJETAEMIPLANNOMBRE",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[53]={id:53,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:this.Valid_Entidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ENTIDADID",gxz:"Z44EntidadId",gxold:"O44EntidadId",gxvar:"A44EntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A44EntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z44EntidadId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ENTIDADID",n||gx.fn.currentGridRowImpl(41),gx.O.A44EntidadId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A44EntidadId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ENTIDADID",n||gx.fn.currentGridRowImpl(41),".")},nac:gx.falseFn};n[54]={id:54,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ENTIDADNOMBRE",gxz:"Z373EntidadNombre",gxold:"O373EntidadNombre",gxvar:"A373EntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A373EntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z373EntidadNombre=n)},v2c:function(n){gx.fn.setGridControlValue("ENTIDADNOMBRE",n||gx.fn.currentGridRowImpl(41),gx.O.A373EntidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A373EntidadNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ENTIDADNOMBRE",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[55]={id:55,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:this.Valid_Sucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SUCURSALID",gxz:"Z45SucursalId",gxold:"O45SucursalId",gxvar:"A45SucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A45SucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z45SucursalId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("SUCURSALID",n||gx.fn.currentGridRowImpl(41),gx.O.A45SucursalId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A45SucursalId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("SUCURSALID",n||gx.fn.currentGridRowImpl(41),".")},nac:gx.falseFn};n[56]={id:56,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:this.Valid_Sucursalnombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SUCURSALNOMBRE",gxz:"Z374SucursalNombre",gxold:"O374SucursalNombre",gxvar:"A374SucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A374SucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z374SucursalNombre=n)},v2c:function(n){gx.fn.setGridControlValue("SUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(41),gx.O.A374SucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A374SucursalNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("SUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[57]={id:57,lvl:2,type:"char",len:100,dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJPLANSUCURSALDESCRIPCION",gxz:"Z2652TrjPlanSucursalDescripcion",gxold:"O2652TrjPlanSucursalDescripcion",gxvar:"A2652TrjPlanSucursalDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2652TrjPlanSucursalDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z2652TrjPlanSucursalDescripcion=n)},v2c:function(n){gx.fn.setGridControlValue("TRJPLANSUCURSALDESCRIPCION",n||gx.fn.currentGridRowImpl(41),gx.O.A2652TrjPlanSucursalDescripcion,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2652TrjPlanSucursalDescripcion=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TRJPLANSUCURSALDESCRIPCION",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[58]={id:58,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJPLANSUCURSALESTADO",gxz:"Z1536TrjPlanSucursalEstado",gxold:"O1536TrjPlanSucursalEstado",gxvar:"A1536TrjPlanSucursalEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1536TrjPlanSucursalEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z1536TrjPlanSucursalEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("TRJPLANSUCURSALESTADO",n||gx.fn.currentGridRowImpl(41),gx.O.A1536TrjPlanSucursalEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1536TrjPlanSucursalEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TRJPLANSUCURSALESTADO",n||gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};n[59]={id:59,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vASOCIARARTICULO",gxz:"ZV36AsociarArticulo",gxold:"OV36AsociarArticulo",gxvar:"AV36AsociarArticulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV36AsociarArticulo=n)},v2z:function(n){n!==undefined&&(gx.O.ZV36AsociarArticulo=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vASOCIARARTICULO",n||gx.fn.currentGridRowImpl(41),gx.O.AV36AsociarArticulo,gx.O.AV46Asociararticulo_GXI)},c2v:function(n){gx.O.AV46Asociararticulo_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV36AsociarArticulo=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vASOCIARARTICULO",n||gx.fn.currentGridRowImpl(41))},val_GXI:function(n){return gx.fn.getGridControlValue("vASOCIARARTICULO_GXI",n||gx.fn.currentGridRowImpl(41))},gxvar_GXI:"AV46Asociararticulo_GXI",nac:gx.falseFn,evt:"e174e2_client"};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};this.AV17SucursalNombre="";this.ZV17SucursalNombre="";this.OV17SucursalNombre="";this.AV35TarjetaEmiPlanNombre="";this.ZV35TarjetaEmiPlanNombre="";this.OV35TarjetaEmiPlanNombre="";this.ZV33Display="";this.OV33Display="";this.Z96TrjId=0;this.O96TrjId=0;this.Z849TrjNom="";this.O849TrjNom="";this.Z97EmisorTrjId=0;this.O97EmisorTrjId=0;this.Z1030EmisorTrjNombre="";this.O1030EmisorTrjNombre="";this.Z1524TarjetaEmiNombre="";this.O1524TarjetaEmiNombre="";this.Z98TrjPlanId=0;this.O98TrjPlanId=0;this.Z119PlanId=0;this.O119PlanId=0;this.Z1040PlanNombre="";this.O1040PlanNombre="";this.Z1041PlanEstado="";this.O1041PlanEstado="";this.Z1532TarjetaEmiPlanNombre="";this.O1532TarjetaEmiPlanNombre="";this.Z44EntidadId=0;this.O44EntidadId=0;this.Z373EntidadNombre="";this.O373EntidadNombre="";this.Z45SucursalId=0;this.O45SucursalId=0;this.Z374SucursalNombre="";this.O374SucursalNombre="";this.Z2652TrjPlanSucursalDescripcion="";this.O2652TrjPlanSucursalDescripcion="";this.Z1536TrjPlanSucursalEstado="";this.O1536TrjPlanSucursalEstado="";this.ZV36AsociarArticulo="";this.OV36AsociarArticulo="";this.AV17SucursalNombre="";this.AV35TarjetaEmiPlanNombre="";this.A1039TrjPlanHasta=gx.date.nullDate();this.A1038TrjPlanDesde=gx.date.nullDate();this.A858TrjPlanCosto=0;this.AV33Display="";this.A96TrjId=0;this.A849TrjNom="";this.A97EmisorTrjId=0;this.A1030EmisorTrjNombre="";this.A1524TarjetaEmiNombre="";this.A98TrjPlanId=0;this.A119PlanId=0;this.A1040PlanNombre="";this.A1041PlanEstado="";this.A1532TarjetaEmiPlanNombre="";this.A44EntidadId=0;this.A373EntidadNombre="";this.A45SucursalId=0;this.A374SucursalNombre="";this.A2652TrjPlanSucursalDescripcion="";this.A1536TrjPlanSucursalEstado="";this.AV36AsociarArticulo="";this.AV47Pgmname="";this.AV42IsAuthorized_Display=!1;this.Events={e114e2_client:["'DOINSERT'",!0],e124e2_client:["'DOEXPORT'",!0],e134e2_client:["'DOEXPORTREPORT'",!0],e184e2_client:["ENTER",!0],e194e2_client:["CANCEL",!0],e174e2_client:["VASOCIARARTICULO.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV17SucursalNombre",fld:"vSUCURSALNOMBRE",pic:"@!"},{av:"AV35TarjetaEmiPlanNombre",fld:"vTARJETAEMIPLANNOMBRE",pic:"@!"},{ctrl:"GRID",prop:"Rows"},{av:"AV47Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV42IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0}],[{av:"AV42IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"},{ctrl:"BTNEXPORTREPORT",prop:"Visible"}]];this.EvtParms.START=[[{av:"AV47Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"AV17SucursalNombre",fld:"vSUCURSALNOMBRE",pic:"@!"},{av:"AV35TarjetaEmiPlanNombre",fld:"vTARJETAEMIPLANNOMBRE",pic:"@!"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV47Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV42IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV42IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"A96TrjId",fld:"TRJID",pic:"ZZZ9",hsh:!0},{av:"A97EmisorTrjId",fld:"EMISORTRJID",pic:"ZZZ9",hsh:!0},{av:"A98TrjPlanId",fld:"TRJPLANID",pic:"ZZZ9",hsh:!0},{av:"A44EntidadId",fld:"ENTIDADID",pic:"Z9",hsh:!0},{av:"A45SucursalId",fld:"SUCURSALID",pic:"ZZZ9",hsh:!0}],[{av:"AV33Display",fld:"vDISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:"vDISPLAY",prop:"Link"},{av:"AV36AsociarArticulo",fld:"vASOCIARARTICULO",pic:""},{av:'gx.fn.getCtrlProperty("vASOCIARARTICULO","Tooltiptext")',ctrl:"vASOCIARARTICULO",prop:"Tooltiptext"}]];this.EvtParms["'DOINSERT'"]=[[{av:"A96TrjId",fld:"TRJID",pic:"ZZZ9",hsh:!0},{av:"A97EmisorTrjId",fld:"EMISORTRJID",pic:"ZZZ9",hsh:!0},{av:"A98TrjPlanId",fld:"TRJPLANID",pic:"ZZZ9",hsh:!0},{av:"A44EntidadId",fld:"ENTIDADID",pic:"Z9",hsh:!0},{av:"A45SucursalId",fld:"SUCURSALID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms["'DOEXPORT'"]=[[{av:"AV47Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:"AV17SucursalNombre",fld:"vSUCURSALNOMBRE",pic:"@!"},{av:"AV35TarjetaEmiPlanNombre",fld:"vTARJETAEMIPLANNOMBRE",pic:"@!"},{ctrl:"GRID",prop:"Rows"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV47Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV42IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0}]];this.EvtParms["'DOEXPORTREPORT'"]=[[{av:"AV47Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:"this.INNEWWINDOW1Container.Target",ctrl:"INNEWWINDOW1",prop:"Target"},{av:"this.INNEWWINDOW1Container.Height",ctrl:"INNEWWINDOW1",prop:"Height"},{av:"this.INNEWWINDOW1Container.Width",ctrl:"INNEWWINDOW1",prop:"Width"},{av:"AV17SucursalNombre",fld:"vSUCURSALNOMBRE",pic:"@!"},{av:"AV35TarjetaEmiPlanNombre",fld:"vTARJETAEMIPLANNOMBRE",pic:"@!"},{ctrl:"GRID",prop:"Rows"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV47Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV42IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0}]];this.EvtParms["VASOCIARARTICULO.CLICK"]=[[{av:"A96TrjId",fld:"TRJID",pic:"ZZZ9",hsh:!0},{av:"A97EmisorTrjId",fld:"EMISORTRJID",pic:"ZZZ9",hsh:!0},{av:"A98TrjPlanId",fld:"TRJPLANID",pic:"ZZZ9",hsh:!0},{av:"A44EntidadId",fld:"ENTIDADID",pic:"Z9",hsh:!0},{av:"A45SucursalId",fld:"SUCURSALID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV42IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV47Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV17SucursalNombre",fld:"vSUCURSALNOMBRE",pic:"@!"},{av:"AV35TarjetaEmiPlanNombre",fld:"vTARJETAEMIPLANNOMBRE",pic:"@!"},{ctrl:"GRID",prop:"Rows"}],[{av:"AV42IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"},{ctrl:"BTNEXPORTREPORT",prop:"Visible"}]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV42IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV47Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV17SucursalNombre",fld:"vSUCURSALNOMBRE",pic:"@!"},{av:"AV35TarjetaEmiPlanNombre",fld:"vTARJETAEMIPLANNOMBRE",pic:"@!"},{ctrl:"GRID",prop:"Rows"}],[{av:"AV42IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"},{ctrl:"BTNEXPORTREPORT",prop:"Visible"}]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV42IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV47Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV17SucursalNombre",fld:"vSUCURSALNOMBRE",pic:"@!"},{av:"AV35TarjetaEmiPlanNombre",fld:"vTARJETAEMIPLANNOMBRE",pic:"@!"},{ctrl:"GRID",prop:"Rows"}],[{av:"AV42IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"},{ctrl:"BTNEXPORTREPORT",prop:"Visible"}]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV42IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV47Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV17SucursalNombre",fld:"vSUCURSALNOMBRE",pic:"@!"},{av:"AV35TarjetaEmiPlanNombre",fld:"vTARJETAEMIPLANNOMBRE",pic:"@!"},{ctrl:"GRID",prop:"Rows"}],[{av:"AV42IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"},{ctrl:"BTNEXPORTREPORT",prop:"Visible"}]];this.EvtParms.VALID_TRJID=[[{av:"A2652TrjPlanSucursalDescripcion",fld:"TRJPLANSUCURSALDESCRIPCION",pic:""},{ctrl:"PLANESTADO"},{av:"A1041PlanEstado",fld:"PLANESTADO",pic:"@!"},{av:"A373EntidadNombre",fld:"ENTIDADNOMBRE",pic:"@!"},{av:"A374SucursalNombre",fld:"SUCURSALNOMBRE",pic:"@!"},{av:"A1532TarjetaEmiPlanNombre",fld:"TARJETAEMIPLANNOMBRE",pic:"@!"},{av:"A1040PlanNombre",fld:"PLANNOMBRE",pic:"@!"},{av:"A1524TarjetaEmiNombre",fld:"TARJETAEMINOMBRE",pic:"@!"},{av:"A119PlanId",fld:"PLANID",pic:"ZZZ9"},{av:"A98TrjPlanId",fld:"TRJPLANID",pic:"ZZZ9",hsh:!0},{av:"A1030EmisorTrjNombre",fld:"EMISORTRJNOMBRE",pic:"@!"},{av:"A849TrjNom",fld:"TRJNOM",pic:"@!"},{av:"A96TrjId",fld:"TRJID",pic:"ZZZ9",hsh:!0},{av:"A97EmisorTrjId",fld:"EMISORTRJID",pic:"ZZZ9",hsh:!0},{av:"A45SucursalId",fld:"SUCURSALID",pic:"ZZZ9",hsh:!0},{av:"A44EntidadId",fld:"ENTIDADID",pic:"Z9",hsh:!0}],[{av:"A2652TrjPlanSucursalDescripcion",fld:"TRJPLANSUCURSALDESCRIPCION",pic:""},{av:"A1532TarjetaEmiPlanNombre",fld:"TARJETAEMIPLANNOMBRE",pic:"@!"},{av:"A1040PlanNombre",fld:"PLANNOMBRE",pic:"@!"},{ctrl:"PLANESTADO"},{av:"A1041PlanEstado",fld:"PLANESTADO",pic:"@!"},{av:"A119PlanId",fld:"PLANID",pic:"ZZZ9"},{av:"A1524TarjetaEmiNombre",fld:"TARJETAEMINOMBRE",pic:"@!"},{av:"A849TrjNom",fld:"TRJNOM",pic:"@!"},{av:"A1030EmisorTrjNombre",fld:"EMISORTRJNOMBRE",pic:"@!"},{av:"A374SucursalNombre",fld:"SUCURSALNOMBRE",pic:"@!"},{av:"A373EntidadNombre",fld:"ENTIDADNOMBRE",pic:"@!"}]];this.EvtParms.VALID_TRJNOM=[[],[]];this.EvtParms.VALID_EMISORTRJID=[[],[]];this.EvtParms.VALID_EMISORTRJNOMBRE=[[],[]];this.EvtParms.VALID_TARJETAEMINOMBRE=[[],[]];this.EvtParms.VALID_TRJPLANID=[[],[]];this.EvtParms.VALID_PLANID=[[],[]];this.EvtParms.VALID_PLANNOMBRE=[[],[]];this.EvtParms.VALID_TARJETAEMIPLANNOMBRE=[[],[]];this.EvtParms.VALID_ENTIDADID=[[],[]];this.EvtParms.VALID_SUCURSALID=[[],[]];this.EvtParms.VALID_SUCURSALNOMBRE=[[],[]];this.setVCMap("A858TrjPlanCosto","TRJPLANCOSTO",0,"decimal",6,2);this.setVCMap("A1038TrjPlanDesde","TRJPLANDESDE",0,"date",8,0);this.setVCMap("A1039TrjPlanHasta","TRJPLANHASTA",0,"date",8,0);this.setVCMap("AV47Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV42IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV47Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV42IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV47Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV42IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);t.addRefreshingVar(this.GXValidFnc[31]);t.addRefreshingVar(this.GXValidFnc[35]);t.addRefreshingVar({rfrVar:"AV47Pgmname"});t.addRefreshingVar({rfrVar:"AV42IsAuthorized_Display"});t.addRefreshingParm(this.GXValidFnc[31]);t.addRefreshingParm(this.GXValidFnc[35]);t.addRefreshingParm({rfrVar:"AV47Pgmname"});t.addRefreshingParm({rfrVar:"AV42IsAuthorized_Display"});this.Initialize()});gx.wi(function(){gx.createParentObj(wwtarjetaemiplansucursal)})