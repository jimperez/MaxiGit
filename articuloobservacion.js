/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 14:30:31.14
*/
gx.evt.autoSkip=!1;gx.define("articuloobservacion",!1,function(){var n,t,i;this.ServerClass="articuloobservacion";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A1624ArtPciCtoAct=gx.fn.getDecimalValue("ARTPCICTOACT",".",",");this.A381ArtPciVtaListaAct=gx.fn.getDecimalValue("ARTPCIVTALISTAACT",".",",")};this.Valid_Artid=function(){return this.validCliEvt("Valid_Artid",0,function(){try{var n=gx.util.balloon.getNew("ARTID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e138x2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e148x2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,34,35,36,37,38,39,40,41];this.GXLastCtrlId=41;this.DVPANEL_TABLECONTENTContainer=gx.uc.getNew(this,12,0,"BootstrapPanel","DVPANEL_TABLECONTENTContainer","Dvpanel_tablecontent","DVPANEL_TABLECONTENT");t=this.DVPANEL_TABLECONTENTContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","","str");t.setProp("Collapsible","Collapsible",!0,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);this.DVPANEL_PANELMARKUPContainer=gx.uc.getNew(this,32,19,"BootstrapPanel","DVPANEL_PANELMARKUPContainer","Dvpanel_panelmarkup","DVPANEL_PANELMARKUP");i=this.DVPANEL_PANELMARKUPContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setProp("Gx Control Type","Gxcontroltype","","int");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[14]={id:14,fld:"TABLECONTENT",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTID",gxz:"Z8ArtId",gxold:"O8ArtId",gxvar:"A8ArtId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A8ArtId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z8ArtId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTID",gx.O.A8ArtId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A8ArtId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTID",".")},nac:gx.falseFn};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"",grid:0};n[24]={id:24,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTNOM",gxz:"Z16ArtNom",gxold:"O16ArtNom",gxvar:"A16ArtNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A16ArtNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z16ArtNom=n)},v2c:function(){gx.fn.setControlValue("ARTNOM",gx.O.A16ArtNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A16ArtNom=this.val())},val:function(){return gx.fn.getControlValue("ARTNOM")},nac:gx.falseFn};this.declareDomainHdlr(24,function(){});n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,lvl:0,type:"vchar",len:300,dec:150,sign:!1,pic:"@!",ro:1,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTDESCRIPCION",gxz:"Z1529ArtDescripcion",gxold:"O1529ArtDescripcion",gxvar:"A1529ArtDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1529ArtDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z1529ArtDescripcion=n)},v2c:function(){gx.fn.setControlValue("ARTDESCRIPCION",gx.O.A1529ArtDescripcion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1529ArtDescripcion=this.val())},val:function(){return gx.fn.getControlValue("ARTDESCRIPCION")},nac:gx.falseFn};this.declareDomainHdlr(29,function(){});n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[34]={id:34,fld:"PANELMARKUP",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"MARKUP01",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTMARKUP",gxz:"Z2620ArtMarkup",gxold:"O2620ArtMarkup",gxvar:"A2620ArtMarkup",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2620ArtMarkup=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2620ArtMarkup=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("ARTMARKUP",gx.O.A2620ArtMarkup,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2620ArtMarkup=this.val())},val:function(){return gx.fn.getDecimalValue("ARTMARKUP",".",",")},nac:gx.falseFn};this.declareDomainHdlr(41,function(){});this.A8ArtId=0;this.Z8ArtId=0;this.O8ArtId=0;this.A16ArtNom="";this.Z16ArtNom="";this.O16ArtNom="";this.A1529ArtDescripcion="";this.Z1529ArtDescripcion="";this.O1529ArtDescripcion="";this.A2620ArtMarkup=0;this.Z2620ArtMarkup=0;this.O2620ArtMarkup=0;this.A8ArtId=0;this.A16ArtNom="";this.A1529ArtDescripcion="";this.A2620ArtMarkup=0;this.A1624ArtPciCtoAct=0;this.A381ArtPciVtaListaAct=0;this.Events={e138x2_client:["ENTER",!0],e148x2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"A8ArtId",fld:"ARTID",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.START=[[],[{av:'gx.fn.getCtrlProperty("PANELMARKUP","Visible")',ctrl:"PANELMARKUP",prop:"Visible"}]];this.EvtParms.VALID_ARTID=[[],[]];this.setVCMap("A1624ArtPciCtoAct","ARTPCICTOACT",0,"decimal",12,2);this.setVCMap("A381ArtPciVtaListaAct","ARTPCIVTALISTAACT",0,"decimal",12,2);this.Initialize()});gx.wi(function(){gx.createParentObj(articuloobservacion)})