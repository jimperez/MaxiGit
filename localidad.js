/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:39:55.6
*/
gx.evt.autoSkip=!1;gx.define("localidad",!1,function(){var n,t;this.ServerClass="localidad";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7LocalidadId=gx.fn.getIntegerValue("vLOCALIDADID",".");this.AV18Pgmdesc=gx.fn.getControlValue("vPGMDESC");this.AV13Insert_ProvinciaId=gx.fn.getIntegerValue("vINSERT_PROVINCIAID",".");this.AV19Pgmname=gx.fn.getControlValue("vPGMNAME");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV9TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Localidadid=function(){return this.validCliEvt("Valid_Localidadid",0,function(){try{var n=gx.util.balloon.getNew("LOCALIDADID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Provinciaid=function(){return this.validSrvEvt("Valid_Provinciaid",0).then(function(n){return n}.closure(this))};this.e120c2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e130c30_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e140c30_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56];this.GXLastCtrlId=56;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Localidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LOCALIDADID",gxz:"Z46LocalidadId",gxold:"O46LocalidadId",gxvar:"A46LocalidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A46LocalidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z46LocalidadId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("LOCALIDADID",gx.O.A46LocalidadId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A46LocalidadId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("LOCALIDADID",".")},nac:gx.falseFn};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LOCALIDADNOMBRE",gxz:"Z508LocalidadNombre",gxold:"O508LocalidadNombre",gxvar:"A508LocalidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A508LocalidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z508LocalidadNombre=n)},v2c:function(){gx.fn.setControlValue("LOCALIDADNOMBRE",gx.O.A508LocalidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A508LocalidadNombre=this.val())},val:function(){return gx.fn.getControlValue("LOCALIDADNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(26,function(){});n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"char",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LOCALIDADCODPOST",gxz:"Z509LocalidadCodPost",gxold:"O509LocalidadCodPost",gxvar:"A509LocalidadCodPost",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A509LocalidadCodPost=n)},v2z:function(n){n!==undefined&&(gx.O.Z509LocalidadCodPost=n)},v2c:function(){gx.fn.setControlValue("LOCALIDADCODPOST",gx.O.A509LocalidadCodPost,0)},c2v:function(){this.val()!==undefined&&(gx.O.A509LocalidadCodPost=this.val())},val:function(){return gx.fn.getControlValue("LOCALIDADCODPOST")},nac:gx.falseFn};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Provinciaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVINCIAID",gxz:"Z79ProvinciaId",gxold:"O79ProvinciaId",gxvar:"A79ProvinciaId",ucs:[],op:[39],ip:[39,36],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A79ProvinciaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z79ProvinciaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PROVINCIAID",gx.O.A79ProvinciaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A79ProvinciaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PROVINCIAID",".")},nac:function(){return this.Gx_mode=="INS"&&!(0==this.AV13Insert_ProvinciaId)}};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVINCIANOMBRE",gxz:"Z510ProvinciaNombre",gxold:"O510ProvinciaNombre",gxvar:"A510ProvinciaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A510ProvinciaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z510ProvinciaNombre=n)},v2c:function(){gx.fn.setControlValue("PROVINCIANOMBRE",gx.O.A510ProvinciaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A510ProvinciaNombre=this.val())},val:function(){return gx.fn.getControlValue("PROVINCIANOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(39,function(){});n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"BTNTRN_ENTER",grid:0,evt:"e130c30_client",std:"ENTER"};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"BTNTRN_CANCEL",grid:0,evt:"e140c30_client"};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"BTNTRN_DELETE",grid:0,evt:"e150c30_client",std:"DELETE"};n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[52]={id:52,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LOCALIDAD094",gxz:"Z584Localidad094",gxold:"O584Localidad094",gxvar:"A584Localidad094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A584Localidad094=n)},v2z:function(n){n!==undefined&&(gx.O.Z584Localidad094=n)},v2c:function(){gx.fn.setControlValue("LOCALIDAD094",gx.O.A584Localidad094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A584Localidad094=this.val())},val:function(){return gx.fn.getControlValue("LOCALIDAD094")},nac:gx.falseFn};this.declareDomainHdlr(52,function(){});n[53]={id:53,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LOCALIDAD095",gxz:"Z585Localidad095",gxold:"O585Localidad095",gxvar:"A585Localidad095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A585Localidad095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z585Localidad095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("LOCALIDAD095",gx.O.A585Localidad095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A585Localidad095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("LOCALIDAD095")},nac:gx.falseFn};this.declareDomainHdlr(53,function(){});n[54]={id:54,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LOCALIDAD097",gxz:"Z586Localidad097",gxold:"O586Localidad097",gxvar:"A586Localidad097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A586Localidad097=n)},v2z:function(n){n!==undefined&&(gx.O.Z586Localidad097=n)},v2c:function(){gx.fn.setControlValue("LOCALIDAD097",gx.O.A586Localidad097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A586Localidad097=this.val())},val:function(){return gx.fn.getControlValue("LOCALIDAD097")},nac:gx.falseFn};this.declareDomainHdlr(54,function(){});n[55]={id:55,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LOCALIDAD098",gxz:"Z587Localidad098",gxold:"O587Localidad098",gxvar:"A587Localidad098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A587Localidad098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z587Localidad098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("LOCALIDAD098",gx.O.A587Localidad098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A587Localidad098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("LOCALIDAD098")},nac:gx.falseFn};this.declareDomainHdlr(55,function(){});n[56]={id:56,fld:"PROMPT_79",grid:30};this.A46LocalidadId=0;this.Z46LocalidadId=0;this.O46LocalidadId=0;this.A508LocalidadNombre="";this.Z508LocalidadNombre="";this.O508LocalidadNombre="";this.A509LocalidadCodPost="";this.Z509LocalidadCodPost="";this.O509LocalidadCodPost="";this.A79ProvinciaId=0;this.Z79ProvinciaId=0;this.O79ProvinciaId=0;this.A510ProvinciaNombre="";this.Z510ProvinciaNombre="";this.O510ProvinciaNombre="";this.A584Localidad094="";this.Z584Localidad094="";this.O584Localidad094="";this.A585Localidad095=gx.date.nullDate();this.Z585Localidad095=gx.date.nullDate();this.O585Localidad095=gx.date.nullDate();this.A586Localidad097="";this.Z586Localidad097="";this.O586Localidad097="";this.A587Localidad098=gx.date.nullDate();this.Z587Localidad098=gx.date.nullDate();this.O587Localidad098=gx.date.nullDate();this.AV8WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV9TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV20GXV1=0;this.AV13Insert_ProvinciaId=0;this.AV12TrnContextAtt={AttributeName:"",AttributeValue:""};this.AV7LocalidadId=0;this.AV10WebSession={};this.A46LocalidadId=0;this.A79ProvinciaId=0;this.A585Localidad095=gx.date.nullDate();this.A584Localidad094="";this.A587Localidad098=gx.date.nullDate();this.A586Localidad097="";this.AV19Pgmname="";this.AV18Pgmdesc="";this.A508LocalidadNombre="";this.A509LocalidadCodPost="";this.A510ProvinciaNombre="";this.Gx_mode="";this.Events={e120c2_client:["AFTER TRN",!0],e130c30_client:["ENTER",!0],e140c30_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7LocalidadId",fld:"vLOCALIDADID",pic:"ZZZZZZZZ9",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV7LocalidadId",fld:"vLOCALIDADID",pic:"ZZZZZZZZ9",hsh:!0}],[]];this.EvtParms.START=[[{av:"AV19Pgmname",fld:"vPGMNAME",pic:""},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0}],[{av:"AV8WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV20GXV1",fld:"vGXV1",pic:"99999999"},{av:"AV12TrnContextAtt",fld:"vTRNCONTEXTATT",pic:""},{av:"AV13Insert_ProvinciaId",fld:"vINSERT_PROVINCIAID",pic:"ZZZ9"},{av:'gx.fn.getCtrlProperty("LOCALIDAD094","Visible")',ctrl:"LOCALIDAD094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("LOCALIDAD095","Visible")',ctrl:"LOCALIDAD095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("LOCALIDAD097","Visible")',ctrl:"LOCALIDAD097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("LOCALIDAD098","Visible")',ctrl:"LOCALIDAD098",prop:"Visible"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0}],[]];this.EvtParms.VALID_LOCALIDADID=[[],[]];this.EvtParms.VALID_PROVINCIAID=[[{av:"A79ProvinciaId",fld:"PROVINCIAID",pic:"ZZZ9"},{av:"A510ProvinciaNombre",fld:"PROVINCIANOMBRE",pic:"@!"}],[{av:"A510ProvinciaNombre",fld:"PROVINCIANOMBRE",pic:"@!"}]];this.setPrompt("PROMPT_79",[36]);this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV7LocalidadId","vLOCALIDADID",0,"int",9,0);this.setVCMap("AV18Pgmdesc","vPGMDESC",0,"char",30,0);this.setVCMap("AV13Insert_ProvinciaId","vINSERT_PROVINCIAID",0,"int",4,0);this.setVCMap("AV19Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV9TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);this.Initialize()});gx.wi(function(){gx.createParentObj(localidad)})