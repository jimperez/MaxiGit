/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:41:50.33
*/
gx.evt.autoSkip=!1;gx.define("departamento",!1,function(){var n,t;this.ServerClass="departamento";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7DepartamentoId=gx.fn.getIntegerValue("vDEPARTAMENTOID",".");this.AV17Pgmdesc=gx.fn.getControlValue("vPGMDESC");this.AV11Insert_ProvinciaId=gx.fn.getIntegerValue("vINSERT_PROVINCIAID",".");this.AV18Pgmname=gx.fn.getControlValue("vPGMNAME");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV9TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Departamentoid=function(){return this.validCliEvt("Valid_Departamentoid",0,function(){try{var n=gx.util.balloon.getNew("DEPARTAMENTOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Provinciaid=function(){return this.validSrvEvt("Valid_Provinciaid",0).then(function(n){return n}.closure(this))};this.e12152_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e131594_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e141594_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51];this.GXLastCtrlId=51;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Departamentoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DEPARTAMENTOID",gxz:"Z126DepartamentoId",gxold:"O126DepartamentoId",gxvar:"A126DepartamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A126DepartamentoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z126DepartamentoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("DEPARTAMENTOID",gx.O.A126DepartamentoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A126DepartamentoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("DEPARTAMENTOID",".")},nac:gx.falseFn};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DEPARTAMENTONOMBRE",gxz:"Z905DepartamentoNombre",gxold:"O905DepartamentoNombre",gxvar:"A905DepartamentoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A905DepartamentoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z905DepartamentoNombre=n)},v2c:function(){gx.fn.setControlValue("DEPARTAMENTONOMBRE",gx.O.A905DepartamentoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A905DepartamentoNombre=this.val())},val:function(){return gx.fn.getControlValue("DEPARTAMENTONOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(26,function(){});n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Provinciaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVINCIAID",gxz:"Z79ProvinciaId",gxold:"O79ProvinciaId",gxvar:"A79ProvinciaId",ucs:[],op:[34],ip:[34,31],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A79ProvinciaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z79ProvinciaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PROVINCIAID",gx.O.A79ProvinciaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A79ProvinciaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PROVINCIAID",".")},nac:function(){return this.Gx_mode=="INS"&&!(0==this.AV11Insert_ProvinciaId)}};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVINCIANOMBRE",gxz:"Z510ProvinciaNombre",gxold:"O510ProvinciaNombre",gxvar:"A510ProvinciaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A510ProvinciaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z510ProvinciaNombre=n)},v2c:function(){gx.fn.setControlValue("PROVINCIANOMBRE",gx.O.A510ProvinciaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A510ProvinciaNombre=this.val())},val:function(){return gx.fn.getControlValue("PROVINCIANOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(34,function(){});n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"BTNTRN_ENTER",grid:0,evt:"e131594_client",std:"ENTER"};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"BTNTRN_CANCEL",grid:0,evt:"e141594_client"};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"BTNTRN_DELETE",grid:0,evt:"e151594_client",std:"DELETE"};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[47]={id:47,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DEPARTAMENTO094",gxz:"Z906Departamento094",gxold:"O906Departamento094",gxvar:"A906Departamento094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A906Departamento094=n)},v2z:function(n){n!==undefined&&(gx.O.Z906Departamento094=n)},v2c:function(){gx.fn.setControlValue("DEPARTAMENTO094",gx.O.A906Departamento094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A906Departamento094=this.val())},val:function(){return gx.fn.getControlValue("DEPARTAMENTO094")},nac:gx.falseFn};this.declareDomainHdlr(47,function(){});n[48]={id:48,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DEPARTAMENTO095",gxz:"Z907Departamento095",gxold:"O907Departamento095",gxvar:"A907Departamento095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A907Departamento095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z907Departamento095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("DEPARTAMENTO095",gx.O.A907Departamento095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A907Departamento095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("DEPARTAMENTO095")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});n[49]={id:49,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DEPARTAMENTO097",gxz:"Z908Departamento097",gxold:"O908Departamento097",gxvar:"A908Departamento097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A908Departamento097=n)},v2z:function(n){n!==undefined&&(gx.O.Z908Departamento097=n)},v2c:function(){gx.fn.setControlValue("DEPARTAMENTO097",gx.O.A908Departamento097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A908Departamento097=this.val())},val:function(){return gx.fn.getControlValue("DEPARTAMENTO097")},nac:gx.falseFn};this.declareDomainHdlr(49,function(){});n[50]={id:50,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DEPARTAMENTO098",gxz:"Z909Departamento098",gxold:"O909Departamento098",gxvar:"A909Departamento098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A909Departamento098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z909Departamento098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("DEPARTAMENTO098",gx.O.A909Departamento098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A909Departamento098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("DEPARTAMENTO098")},nac:gx.falseFn};this.declareDomainHdlr(50,function(){});n[51]={id:51,fld:"PROMPT_79",grid:94};this.A126DepartamentoId=0;this.Z126DepartamentoId=0;this.O126DepartamentoId=0;this.A905DepartamentoNombre="";this.Z905DepartamentoNombre="";this.O905DepartamentoNombre="";this.A79ProvinciaId=0;this.Z79ProvinciaId=0;this.O79ProvinciaId=0;this.A510ProvinciaNombre="";this.Z510ProvinciaNombre="";this.O510ProvinciaNombre="";this.A906Departamento094="";this.Z906Departamento094="";this.O906Departamento094="";this.A907Departamento095=gx.date.nullDate();this.Z907Departamento095=gx.date.nullDate();this.O907Departamento095=gx.date.nullDate();this.A908Departamento097="";this.Z908Departamento097="";this.O908Departamento097="";this.A909Departamento098=gx.date.nullDate();this.Z909Departamento098=gx.date.nullDate();this.O909Departamento098=gx.date.nullDate();this.AV8WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV9TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV19GXV1=0;this.AV11Insert_ProvinciaId=0;this.AV12TrnContextAtt={AttributeName:"",AttributeValue:""};this.AV7DepartamentoId=0;this.AV10WebSession={};this.A126DepartamentoId=0;this.A79ProvinciaId=0;this.A907Departamento095=gx.date.nullDate();this.A906Departamento094="";this.A909Departamento098=gx.date.nullDate();this.A908Departamento097="";this.AV18Pgmname="";this.AV17Pgmdesc="";this.A905DepartamentoNombre="";this.A510ProvinciaNombre="";this.Gx_mode="";this.Events={e12152_client:["AFTER TRN",!0],e131594_client:["ENTER",!0],e141594_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7DepartamentoId",fld:"vDEPARTAMENTOID",pic:"ZZZZZZZZ9",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV7DepartamentoId",fld:"vDEPARTAMENTOID",pic:"ZZZZZZZZ9",hsh:!0}],[]];this.EvtParms.START=[[{av:"AV18Pgmname",fld:"vPGMNAME",pic:""},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0}],[{av:"AV8WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV19GXV1",fld:"vGXV1",pic:"99999999"},{av:"AV12TrnContextAtt",fld:"vTRNCONTEXTATT",pic:""},{av:"AV11Insert_ProvinciaId",fld:"vINSERT_PROVINCIAID",pic:"ZZZ9"},{av:'gx.fn.getCtrlProperty("DEPARTAMENTO094","Visible")',ctrl:"DEPARTAMENTO094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("DEPARTAMENTO095","Visible")',ctrl:"DEPARTAMENTO095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("DEPARTAMENTO097","Visible")',ctrl:"DEPARTAMENTO097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("DEPARTAMENTO098","Visible")',ctrl:"DEPARTAMENTO098",prop:"Visible"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0}],[]];this.EvtParms.VALID_DEPARTAMENTOID=[[],[]];this.EvtParms.VALID_PROVINCIAID=[[{av:"A79ProvinciaId",fld:"PROVINCIAID",pic:"ZZZ9"},{av:"A510ProvinciaNombre",fld:"PROVINCIANOMBRE",pic:"@!"}],[{av:"A510ProvinciaNombre",fld:"PROVINCIANOMBRE",pic:"@!"}]];this.setPrompt("PROMPT_79",[31]);this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV7DepartamentoId","vDEPARTAMENTOID",0,"int",9,0);this.setVCMap("AV17Pgmdesc","vPGMDESC",0,"char",30,0);this.setVCMap("AV11Insert_ProvinciaId","vINSERT_PROVINCIAID",0,"int",4,0);this.setVCMap("AV18Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV9TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);this.Initialize()});gx.wi(function(){gx.createParentObj(departamento)})