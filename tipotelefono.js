/*!   GeneXus C# 16_0_5-135614 on 10/30/2019 19:14:7.5
*/
gx.evt.autoSkip=!1;gx.define("tipotelefono",!1,function(){var n,t;this.ServerClass="tipotelefono";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7TipTelId=gx.fn.getIntegerValue("vTIPTELID",".");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV9TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Tiptelid=function(){return this.validCliEvt("Valid_Tiptelid",0,function(){try{var n=gx.util.balloon.getNew("TIPTELID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e12012_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e13011_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e14011_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];this.GXLastCtrlId=36;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelCard_GrayTitle","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tiptelid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TIPTELID",gxz:"Z1TipTelId",gxold:"O1TipTelId",gxvar:"A1TipTelId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1TipTelId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1TipTelId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TIPTELID",gx.O.A1TipTelId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1TipTelId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TIPTELID",".")},nac:function(){return!(0==this.AV7TipTelId)}};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TIPTELNOM",gxz:"Z3TipTelNom",gxold:"O3TipTelNom",gxvar:"A3TipTelNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3TipTelNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z3TipTelNom=n)},v2c:function(){gx.fn.setControlValue("TIPTELNOM",gx.O.A3TipTelNom,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3TipTelNom=this.val())},val:function(){return gx.fn.getControlValue("TIPTELNOM")},nac:gx.falseFn};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"BTNTRN_ENTER",grid:0,evt:"e13011_client",std:"ENTER"};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"BTNTRN_CANCEL",grid:0,evt:"e14011_client"};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"BTNTRN_DELETE",grid:0,evt:"e15011_client",std:"DELETE"};this.A1TipTelId=0;this.Z1TipTelId=0;this.O1TipTelId=0;this.A3TipTelNom="";this.Z3TipTelNom="";this.O3TipTelNom="";this.AV8WWPContext={UserId:0,UserName:""};this.AV9TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV7TipTelId=0;this.AV10WebSession={};this.A1TipTelId=0;this.A3TipTelNom="";this.Gx_mode="";this.Events={e12012_client:["AFTER TRN",!0],e13011_client:["ENTER",!0],e14011_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7TipTelId",fld:"vTIPTELID",pic:"ZZZZZZZZ9",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7TipTelId",fld:"vTIPTELID",pic:"ZZZZZZZZ9",hsh:!0}],[]];this.EvtParms.START=[[],[{av:"AV8WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:""}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:""}],[]];this.EvtParms.VALID_TIPTELID=[[],[]];this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV7TipTelId","vTIPTELID",0,"int",9,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV9TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);this.Initialize()});gx.wi(function(){gx.createParentObj(tipotelefono)})