/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:8:42.18
*/
gx.evt.autoSkip=!1;gx.define("pais",!1,function(){var n,t;this.ServerClass="pais";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7PaisId=gx.fn.getControlValue("vPAISID");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV9TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Paisid=function(){return this.validCliEvt("Valid_Paisid",0,function(){try{var n=gx.util.balloon.getNew("PAISID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e121b2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e131b56_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e141b56_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];this.GXLastCtrlId=48;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Paisid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAISID",gxz:"Z80PaisId",gxold:"O80PaisId",gxvar:"A80PaisId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A80PaisId=n)},v2z:function(n){n!==undefined&&(gx.O.Z80PaisId=n)},v2c:function(){gx.fn.setControlValue("PAISID",gx.O.A80PaisId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A80PaisId=this.val())},val:function(){return gx.fn.getControlValue("PAISID")},nac:function(){return!(""==this.AV7PaisId)}};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAISNOMBRE",gxz:"Z583PaisNombre",gxold:"O583PaisNombre",gxvar:"A583PaisNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A583PaisNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z583PaisNombre=n)},v2c:function(){gx.fn.setControlValue("PAISNOMBRE",gx.O.A583PaisNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A583PaisNombre=this.val())},val:function(){return gx.fn.getControlValue("PAISNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(27,function(){});n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,lvl:0,type:"char",len:5,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAISPRF",gxz:"Z636PaisPrf",gxold:"O636PaisPrf",gxvar:"A636PaisPrf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A636PaisPrf=n)},v2z:function(n){n!==undefined&&(gx.O.Z636PaisPrf=n)},v2c:function(){gx.fn.setControlValue("PAISPRF",gx.O.A636PaisPrf,0)},c2v:function(){this.val()!==undefined&&(gx.O.A636PaisPrf=this.val())},val:function(){return gx.fn.getControlValue("PAISPRF")},nac:gx.falseFn};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"BTNTRN_ENTER",grid:0,evt:"e131b56_client",std:"ENTER"};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"BTNTRN_CANCEL",grid:0,evt:"e141b56_client"};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"BTNTRN_DELETE",grid:0,evt:"e151b56_client",std:"DELETE"};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[45]={id:45,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAIS094",gxz:"Z637Pais094",gxold:"O637Pais094",gxvar:"A637Pais094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A637Pais094=n)},v2z:function(n){n!==undefined&&(gx.O.Z637Pais094=n)},v2c:function(){gx.fn.setControlValue("PAIS094",gx.O.A637Pais094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A637Pais094=this.val())},val:function(){return gx.fn.getControlValue("PAIS094")},nac:gx.falseFn};this.declareDomainHdlr(45,function(){});n[46]={id:46,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAIS095",gxz:"Z638Pais095",gxold:"O638Pais095",gxvar:"A638Pais095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A638Pais095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z638Pais095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PAIS095",gx.O.A638Pais095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A638Pais095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("PAIS095")},nac:gx.falseFn};this.declareDomainHdlr(46,function(){});n[47]={id:47,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAIS097",gxz:"Z639Pais097",gxold:"O639Pais097",gxvar:"A639Pais097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A639Pais097=n)},v2z:function(n){n!==undefined&&(gx.O.Z639Pais097=n)},v2c:function(){gx.fn.setControlValue("PAIS097",gx.O.A639Pais097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A639Pais097=this.val())},val:function(){return gx.fn.getControlValue("PAIS097")},nac:gx.falseFn};this.declareDomainHdlr(47,function(){});n[48]={id:48,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAIS098",gxz:"Z640Pais098",gxold:"O640Pais098",gxvar:"A640Pais098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A640Pais098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z640Pais098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PAIS098",gx.O.A640Pais098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A640Pais098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("PAIS098")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});this.A80PaisId="";this.Z80PaisId="";this.O80PaisId="";this.A583PaisNombre="";this.Z583PaisNombre="";this.O583PaisNombre="";this.A636PaisPrf="";this.Z636PaisPrf="";this.O636PaisPrf="";this.A637Pais094="";this.Z637Pais094="";this.O637Pais094="";this.A638Pais095=gx.date.nullDate();this.Z638Pais095=gx.date.nullDate();this.O638Pais095=gx.date.nullDate();this.A639Pais097="";this.Z639Pais097="";this.O639Pais097="";this.A640Pais098=gx.date.nullDate();this.Z640Pais098=gx.date.nullDate();this.O640Pais098=gx.date.nullDate();this.AV8WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV9TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV7PaisId="";this.AV10WebSession={};this.A80PaisId="";this.A638Pais095=gx.date.nullDate();this.A637Pais094="";this.A640Pais098=gx.date.nullDate();this.A639Pais097="";this.A583PaisNombre="";this.A636PaisPrf="";this.Gx_mode="";this.Events={e121b2_client:["AFTER TRN",!0],e131b56_client:["ENTER",!0],e141b56_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7PaisId",fld:"vPAISID",pic:"",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7PaisId",fld:"vPAISID",pic:"",hsh:!0}],[]];this.EvtParms.START=[[],[{av:"AV8WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:""},{av:'gx.fn.getCtrlProperty("PAIS094","Visible")',ctrl:"PAIS094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PAIS095","Visible")',ctrl:"PAIS095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PAIS097","Visible")',ctrl:"PAIS097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PAIS098","Visible")',ctrl:"PAIS098",prop:"Visible"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:""}],[]];this.EvtParms.VALID_PAISID=[[],[]];this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV7PaisId","vPAISID",0,"char",3,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV9TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);this.Initialize()});gx.wi(function(){gx.createParentObj(pais)})