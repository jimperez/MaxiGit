/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:8:51.25
*/
gx.evt.autoSkip=!1;gx.define("tarjeta",!1,function(){var n,t;this.ServerClass="tarjeta";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7TrjId=gx.fn.getIntegerValue("vTRJID",".");this.AV16Pgmdesc=gx.fn.getControlValue("vPGMDESC");this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",".");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV9TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Trjid=function(){return this.validCliEvt("Valid_Trjid",0,function(){try{var n=gx.util.balloon.getNew("TRJID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Trjnom=function(){return this.validCliEvt("Valid_Trjnom",0,function(){try{var n=gx.util.balloon.getNew("TRJNOM");if(this.AnyError=0,""==this.A849TrjNom)try{n.setError("Error! Debe ingresar un Nombre de Tarjeta.");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Trjest=function(){return this.validCliEvt("Valid_Trjest",0,function(){try{var n=gx.util.balloon.getNew("TRJEST");if(this.AnyError=0,!(this.A851TrjEst=="ACT"||this.A851TrjEst=="INA"))try{n.setError("Campo Estado fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e121s2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e131s78_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e141s78_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54];this.GXLastCtrlId=54;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Trjid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJID",gxz:"Z96TrjId",gxold:"O96TrjId",gxvar:"A96TrjId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A96TrjId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z96TrjId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TRJID",gx.O.A96TrjId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A96TrjId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TRJID",".")},nac:gx.falseFn};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trjnom,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJNOM",gxz:"Z849TrjNom",gxold:"O849TrjNom",gxvar:"A849TrjNom",ucs:[],op:[27],ip:[27],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A849TrjNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z849TrjNom=n)},v2c:function(){gx.fn.setControlValue("TRJNOM",gx.O.A849TrjNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A849TrjNom=this.val())},val:function(){return gx.fn.getControlValue("TRJNOM")},nac:gx.falseFn};this.declareDomainHdlr(27,function(){});n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,lvl:0,type:"svchar",len:1024,dec:255,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJOBS",gxz:"Z850TrjObs",gxold:"O850TrjObs",gxvar:"A850TrjObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A850TrjObs=n)},v2z:function(n){n!==undefined&&(gx.O.Z850TrjObs=n)},v2c:function(){gx.fn.setControlValue("TRJOBS",gx.O.A850TrjObs,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A850TrjObs=this.val())},val:function(){return gx.fn.getControlValue("TRJOBS")},nac:gx.falseFn};this.declareDomainHdlr(32,function(){});n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Trjest,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJEST",gxz:"Z851TrjEst",gxold:"O851TrjEst",gxvar:"A851TrjEst",ucs:[],op:[37],ip:[37],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A851TrjEst=n)},v2z:function(n){n!==undefined&&(gx.O.Z851TrjEst=n)},v2c:function(){gx.fn.setComboBoxValue("TRJEST",gx.O.A851TrjEst);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A851TrjEst=this.val())},val:function(){return gx.fn.getControlValue("TRJEST")},nac:gx.falseFn};this.declareDomainHdlr(37,function(){});n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"BTNTRN_ENTER",grid:0,evt:"e131s78_client",std:"ENTER"};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"BTNTRN_CANCEL",grid:0,evt:"e141s78_client"};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"BTNTRN_DELETE",grid:0,evt:"e151s78_client",std:"DELETE"};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[50]={id:50,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJULTIMALINEA",gxz:"Z852TrjUltimaLinea",gxold:"O852TrjUltimaLinea",gxvar:"A852TrjUltimaLinea",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A852TrjUltimaLinea=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z852TrjUltimaLinea=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TRJULTIMALINEA",gx.O.A852TrjUltimaLinea,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A852TrjUltimaLinea=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TRJULTIMALINEA",".")},nac:gx.falseFn};this.declareDomainHdlr(50,function(){});n[51]={id:51,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJ094",gxz:"Z853Trj094",gxold:"O853Trj094",gxvar:"A853Trj094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A853Trj094=n)},v2z:function(n){n!==undefined&&(gx.O.Z853Trj094=n)},v2c:function(){gx.fn.setControlValue("TRJ094",gx.O.A853Trj094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A853Trj094=this.val())},val:function(){return gx.fn.getControlValue("TRJ094")},nac:gx.falseFn};this.declareDomainHdlr(51,function(){});n[52]={id:52,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJ095",gxz:"Z854Trj095",gxold:"O854Trj095",gxvar:"A854Trj095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A854Trj095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z854Trj095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("TRJ095",gx.O.A854Trj095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A854Trj095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("TRJ095")},nac:gx.falseFn};this.declareDomainHdlr(52,function(){});n[53]={id:53,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJ097",gxz:"Z855Trj097",gxold:"O855Trj097",gxvar:"A855Trj097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A855Trj097=n)},v2z:function(n){n!==undefined&&(gx.O.Z855Trj097=n)},v2c:function(){gx.fn.setControlValue("TRJ097",gx.O.A855Trj097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A855Trj097=this.val())},val:function(){return gx.fn.getControlValue("TRJ097")},nac:gx.falseFn};this.declareDomainHdlr(53,function(){});n[54]={id:54,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJ098",gxz:"Z856Trj098",gxold:"O856Trj098",gxvar:"A856Trj098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A856Trj098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z856Trj098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("TRJ098",gx.O.A856Trj098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A856Trj098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("TRJ098")},nac:gx.falseFn};this.declareDomainHdlr(54,function(){});this.A96TrjId=0;this.Z96TrjId=0;this.O96TrjId=0;this.A849TrjNom="";this.Z849TrjNom="";this.O849TrjNom="";this.A850TrjObs="";this.Z850TrjObs="";this.O850TrjObs="";this.A851TrjEst="";this.Z851TrjEst="";this.O851TrjEst="";this.A852TrjUltimaLinea=0;this.Z852TrjUltimaLinea=0;this.O852TrjUltimaLinea=0;this.A853Trj094="";this.Z853Trj094="";this.O853Trj094="";this.A854Trj095=gx.date.nullDate();this.Z854Trj095=gx.date.nullDate();this.O854Trj095=gx.date.nullDate();this.A855Trj097="";this.Z855Trj097="";this.O855Trj097="";this.A856Trj098=gx.date.nullDate();this.Z856Trj098=gx.date.nullDate();this.O856Trj098=gx.date.nullDate();this.AV8WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV9TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV7TrjId=0;this.AV10WebSession={};this.A96TrjId=0;this.A854Trj095=gx.date.nullDate();this.A853Trj094="";this.A856Trj098=gx.date.nullDate();this.A855Trj097="";this.AV16Pgmdesc="";this.Gx_BScreen=0;this.A849TrjNom="";this.A850TrjObs="";this.A851TrjEst="";this.A852TrjUltimaLinea=0;this.Gx_mode="";this.Events={e121s2_client:["AFTER TRN",!0],e131s78_client:["ENTER",!0],e141s78_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7TrjId",fld:"vTRJID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7TrjId",fld:"vTRJID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.START=[[],[{av:"AV8WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:""},{av:'gx.fn.getCtrlProperty("TRJULTIMALINEA","Visible")',ctrl:"TRJULTIMALINEA",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRJ094","Visible")',ctrl:"TRJ094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRJ095","Visible")',ctrl:"TRJ095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRJ097","Visible")',ctrl:"TRJ097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TRJ098","Visible")',ctrl:"TRJ098",prop:"Visible"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:""}],[]];this.EvtParms.VALID_TRJID=[[],[]];this.EvtParms.VALID_TRJNOM=[[{av:"A849TrjNom",fld:"TRJNOM",pic:"@!"}],[{av:"A849TrjNom",fld:"TRJNOM",pic:"@!"}]];this.EvtParms.VALID_TRJEST=[[{ctrl:"TRJEST"},{av:"A851TrjEst",fld:"TRJEST",pic:"@!"}],[{ctrl:"TRJEST"},{av:"A851TrjEst",fld:"TRJEST",pic:"@!"}]];this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV7TrjId","vTRJID",0,"int",4,0);this.setVCMap("AV16Pgmdesc","vPGMDESC",0,"char",30,0);this.setVCMap("Gx_BScreen","vGXBSCREEN",0,"int",1,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV9TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);this.Initialize()});gx.wi(function(){gx.createParentObj(tarjeta)})