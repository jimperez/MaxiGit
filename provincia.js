/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:41:28.9
*/
gx.evt.autoSkip=!1;gx.define("provincia",!1,function(){var n,t;this.ServerClass="provincia";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7ProvinciaId=gx.fn.getIntegerValue("vPROVINCIAID",".");this.AV17Pgmdesc=gx.fn.getControlValue("vPGMDESC");this.AV11Insert_PaisId=gx.fn.getControlValue("vINSERT_PAISID");this.AV18Pgmname=gx.fn.getControlValue("vPGMNAME");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV9TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Provinciaid=function(){return this.validCliEvt("Valid_Provinciaid",0,function(){try{var n=gx.util.balloon.getNew("PROVINCIAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Paisid=function(){return this.validSrvEvt("Valid_Paisid",0).then(function(n){return n}.closure(this))};this.e120v2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e130v55_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e140v55_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51];this.GXLastCtrlId=51;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Provinciaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVINCIAID",gxz:"Z79ProvinciaId",gxold:"O79ProvinciaId",gxvar:"A79ProvinciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A79ProvinciaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z79ProvinciaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PROVINCIAID",gx.O.A79ProvinciaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A79ProvinciaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PROVINCIAID",".")},nac:gx.falseFn};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVINCIANOMBRE",gxz:"Z510ProvinciaNombre",gxold:"O510ProvinciaNombre",gxvar:"A510ProvinciaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A510ProvinciaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z510ProvinciaNombre=n)},v2c:function(){gx.fn.setControlValue("PROVINCIANOMBRE",gx.O.A510ProvinciaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A510ProvinciaNombre=this.val())},val:function(){return gx.fn.getControlValue("PROVINCIANOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(26,function(){});n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Paisid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAISID",gxz:"Z80PaisId",gxold:"O80PaisId",gxvar:"A80PaisId",ucs:[],op:[34],ip:[34,31],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A80PaisId=n)},v2z:function(n){n!==undefined&&(gx.O.Z80PaisId=n)},v2c:function(){gx.fn.setControlValue("PAISID",gx.O.A80PaisId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A80PaisId=this.val())},val:function(){return gx.fn.getControlValue("PAISID")},nac:function(){return this.Gx_mode=="INS"&&!(""==this.AV11Insert_PaisId)}};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAISNOMBRE",gxz:"Z583PaisNombre",gxold:"O583PaisNombre",gxvar:"A583PaisNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A583PaisNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z583PaisNombre=n)},v2c:function(){gx.fn.setControlValue("PAISNOMBRE",gx.O.A583PaisNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A583PaisNombre=this.val())},val:function(){return gx.fn.getControlValue("PAISNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(34,function(){});n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"BTNTRN_ENTER",grid:0,evt:"e130v55_client",std:"ENTER"};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"BTNTRN_CANCEL",grid:0,evt:"e140v55_client"};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"BTNTRN_DELETE",grid:0,evt:"e150v55_client",std:"DELETE"};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[47]={id:47,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVINCIA094",gxz:"Z702Provincia094",gxold:"O702Provincia094",gxvar:"A702Provincia094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A702Provincia094=n)},v2z:function(n){n!==undefined&&(gx.O.Z702Provincia094=n)},v2c:function(){gx.fn.setControlValue("PROVINCIA094",gx.O.A702Provincia094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A702Provincia094=this.val())},val:function(){return gx.fn.getControlValue("PROVINCIA094")},nac:gx.falseFn};this.declareDomainHdlr(47,function(){});n[48]={id:48,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVINCIA095",gxz:"Z703Provincia095",gxold:"O703Provincia095",gxvar:"A703Provincia095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A703Provincia095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z703Provincia095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PROVINCIA095",gx.O.A703Provincia095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A703Provincia095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("PROVINCIA095")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});n[49]={id:49,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVINCIA097",gxz:"Z704Provincia097",gxold:"O704Provincia097",gxvar:"A704Provincia097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A704Provincia097=n)},v2z:function(n){n!==undefined&&(gx.O.Z704Provincia097=n)},v2c:function(){gx.fn.setControlValue("PROVINCIA097",gx.O.A704Provincia097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A704Provincia097=this.val())},val:function(){return gx.fn.getControlValue("PROVINCIA097")},nac:gx.falseFn};this.declareDomainHdlr(49,function(){});n[50]={id:50,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVINCIA098",gxz:"Z705Provincia098",gxold:"O705Provincia098",gxvar:"A705Provincia098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A705Provincia098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z705Provincia098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PROVINCIA098",gx.O.A705Provincia098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A705Provincia098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("PROVINCIA098")},nac:gx.falseFn};this.declareDomainHdlr(50,function(){});n[51]={id:51,fld:"PROMPT_80",grid:55};this.A79ProvinciaId=0;this.Z79ProvinciaId=0;this.O79ProvinciaId=0;this.A510ProvinciaNombre="";this.Z510ProvinciaNombre="";this.O510ProvinciaNombre="";this.A80PaisId="";this.Z80PaisId="";this.O80PaisId="";this.A583PaisNombre="";this.Z583PaisNombre="";this.O583PaisNombre="";this.A702Provincia094="";this.Z702Provincia094="";this.O702Provincia094="";this.A703Provincia095=gx.date.nullDate();this.Z703Provincia095=gx.date.nullDate();this.O703Provincia095=gx.date.nullDate();this.A704Provincia097="";this.Z704Provincia097="";this.O704Provincia097="";this.A705Provincia098=gx.date.nullDate();this.Z705Provincia098=gx.date.nullDate();this.O705Provincia098=gx.date.nullDate();this.AV8WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV9TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV19GXV1=0;this.AV11Insert_PaisId="";this.AV12TrnContextAtt={AttributeName:"",AttributeValue:""};this.AV7ProvinciaId=0;this.AV10WebSession={};this.A79ProvinciaId=0;this.A80PaisId="";this.A703Provincia095=gx.date.nullDate();this.A702Provincia094="";this.A705Provincia098=gx.date.nullDate();this.A704Provincia097="";this.AV18Pgmname="";this.AV17Pgmdesc="";this.A510ProvinciaNombre="";this.A583PaisNombre="";this.Gx_mode="";this.Events={e120v2_client:["AFTER TRN",!0],e130v55_client:["ENTER",!0],e140v55_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7ProvinciaId",fld:"vPROVINCIAID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV7ProvinciaId",fld:"vPROVINCIAID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.START=[[{av:"AV18Pgmname",fld:"vPGMNAME",pic:""},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0}],[{av:"AV8WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV19GXV1",fld:"vGXV1",pic:"99999999"},{av:"AV12TrnContextAtt",fld:"vTRNCONTEXTATT",pic:""},{av:"AV11Insert_PaisId",fld:"vINSERT_PAISID",pic:""},{av:'gx.fn.getCtrlProperty("PROVINCIA094","Visible")',ctrl:"PROVINCIA094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PROVINCIA095","Visible")',ctrl:"PROVINCIA095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PROVINCIA097","Visible")',ctrl:"PROVINCIA097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PROVINCIA098","Visible")',ctrl:"PROVINCIA098",prop:"Visible"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0}],[]];this.EvtParms.VALID_PROVINCIAID=[[],[]];this.EvtParms.VALID_PAISID=[[{av:"A80PaisId",fld:"PAISID",pic:""},{av:"A583PaisNombre",fld:"PAISNOMBRE",pic:"@!"}],[{av:"A583PaisNombre",fld:"PAISNOMBRE",pic:"@!"}]];this.setPrompt("PROMPT_80",[31]);this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV7ProvinciaId","vPROVINCIAID",0,"int",4,0);this.setVCMap("AV17Pgmdesc","vPGMDESC",0,"char",30,0);this.setVCMap("AV11Insert_PaisId","vINSERT_PAISID",0,"char",3,0);this.setVCMap("AV18Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV9TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);this.Initialize()});gx.wi(function(){gx.createParentObj(provincia)})