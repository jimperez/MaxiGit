/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:9:54.46
*/
gx.evt.autoSkip=!1;gx.define("puestomenuobjetos",!1,function(){var n,t;this.ServerClass="puestomenuobjetos";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7PuestoId=gx.fn.getIntegerValue("vPUESTOID",".");this.AV8MenuID=gx.fn.getIntegerValue("vMENUID",".");this.AV9ObjID=gx.fn.getControlValue("vOBJID");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV11TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Puestoid=function(){return this.validSrvEvt("Valid_Puestoid",0).then(function(n){return n}.closure(this))};this.Valid_Menuid=function(){return this.validSrvEvt("Valid_Menuid",0).then(function(n){return n}.closure(this))};this.Valid_Objid=function(){return this.validSrvEvt("Valid_Objid",0).then(function(n){return n}.closure(this))};this.e122g2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e132g110_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e142g110_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57];this.GXLastCtrlId=57;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Puestoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PUESTOID",gxz:"Z150PuestoId",gxold:"O150PuestoId",gxvar:"A150PuestoId",ucs:[],op:[25],ip:[25,22],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A150PuestoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z150PuestoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PUESTOID",gx.O.A150PuestoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A150PuestoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PUESTOID",".")},nac:function(){return!(0==this.AV7PuestoId)}};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,lvl:0,type:"svchar",len:130,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PUESTONOMBRE",gxz:"Z351PuestoNombre",gxold:"O351PuestoNombre",gxvar:"A351PuestoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A351PuestoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z351PuestoNombre=n)},v2c:function(){gx.fn.setControlValue("PUESTONOMBRE",gx.O.A351PuestoNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.A351PuestoNombre=this.val())},val:function(){return gx.fn.getControlValue("PUESTONOMBRE")},nac:gx.falseFn};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Menuid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MENUID",gxz:"Z154MenuID",gxold:"O154MenuID",gxvar:"A154MenuID",ucs:[],op:[33],ip:[33,22,30],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A154MenuID=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z154MenuID=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("MENUID",gx.O.A154MenuID,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A154MenuID=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("MENUID",".")},nac:function(){return!(0==this.AV8MenuID)}};this.declareDomainHdlr(30,function(){});n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"char",len:40,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MENUDES",gxz:"Z981MenuDes",gxold:"O981MenuDes",gxvar:"A981MenuDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A981MenuDes=n)},v2z:function(n){n!==undefined&&(gx.O.Z981MenuDes=n)},v2c:function(){gx.fn.setControlValue("MENUDES",gx.O.A981MenuDes,0)},c2v:function(){this.val()!==undefined&&(gx.O.A981MenuDes=this.val())},val:function(){return gx.fn.getControlValue("MENUDES")},nac:gx.falseFn};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,lvl:0,type:"char",len:50,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Objid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"OBJID",gxz:"Z153ObjID",gxold:"O153ObjID",gxvar:"A153ObjID",ucs:[],op:[41],ip:[41,38],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A153ObjID=n)},v2z:function(n){n!==undefined&&(gx.O.Z153ObjID=n)},v2c:function(){gx.fn.setControlValue("OBJID",gx.O.A153ObjID,0)},c2v:function(){this.val()!==undefined&&(gx.O.A153ObjID=this.val())},val:function(){return gx.fn.getControlValue("OBJID")},nac:function(){return!(""==this.AV9ObjID)}};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,lvl:0,type:"svchar",len:130,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"OBJDES",gxz:"Z994ObjDes",gxold:"O994ObjDes",gxvar:"A994ObjDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A994ObjDes=n)},v2z:function(n){n!==undefined&&(gx.O.Z994ObjDes=n)},v2c:function(){gx.fn.setControlValue("OBJDES",gx.O.A994ObjDes,0)},c2v:function(){this.val()!==undefined&&(gx.O.A994ObjDes=this.val())},val:function(){return gx.fn.getControlValue("OBJDES")},nac:gx.falseFn};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"OBJETOSMENUORDEN",gxz:"Z348ObjetosMenuOrden",gxold:"O348ObjetosMenuOrden",gxvar:"A348ObjetosMenuOrden",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A348ObjetosMenuOrden=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z348ObjetosMenuOrden=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("OBJETOSMENUORDEN",gx.O.A348ObjetosMenuOrden,0)},c2v:function(){this.val()!==undefined&&(gx.O.A348ObjetosMenuOrden=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("OBJETOSMENUORDEN",".")},nac:gx.falseFn};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"BTNTRN_ENTER",grid:0,evt:"e132g110_client",std:"ENTER"};n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"BTNTRN_CANCEL",grid:0,evt:"e142g110_client"};n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"BTNTRN_DELETE",grid:0,evt:"e152g110_client",std:"DELETE"};n[56]={id:56,fld:"PROMPT_150",grid:110};n[57]={id:57,fld:"PROMPT_153",grid:110};this.A150PuestoId=0;this.Z150PuestoId=0;this.O150PuestoId=0;this.A351PuestoNombre="";this.Z351PuestoNombre="";this.O351PuestoNombre="";this.A154MenuID=0;this.Z154MenuID=0;this.O154MenuID=0;this.A981MenuDes="";this.Z981MenuDes="";this.O981MenuDes="";this.A153ObjID="";this.Z153ObjID="";this.O153ObjID="";this.A994ObjDes="";this.Z994ObjDes="";this.O994ObjDes="";this.A348ObjetosMenuOrden=0;this.Z348ObjetosMenuOrden=0;this.O348ObjetosMenuOrden=0;this.AV10WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV11TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV7PuestoId=0;this.AV8MenuID=0;this.AV9ObjID="";this.AV12WebSession={};this.A150PuestoId=0;this.A154MenuID=0;this.A153ObjID="";this.A351PuestoNombre="";this.A981MenuDes="";this.A994ObjDes="";this.A348ObjetosMenuOrden=0;this.Gx_mode="";this.Events={e122g2_client:["AFTER TRN",!0],e132g110_client:["ENTER",!0],e142g110_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7PuestoId",fld:"vPUESTOID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV8MenuID",fld:"vMENUID",pic:"ZZZZZZZ9",hsh:!0},{av:"AV9ObjID",fld:"vOBJID",pic:"",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7PuestoId",fld:"vPUESTOID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV8MenuID",fld:"vMENUID",pic:"ZZZZZZZ9",hsh:!0},{av:"AV9ObjID",fld:"vOBJID",pic:"",hsh:!0}],[]];this.EvtParms.START=[[],[{av:"AV10WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV11TrnContext",fld:"vTRNCONTEXT",pic:""}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV11TrnContext",fld:"vTRNCONTEXT",pic:""}],[]];this.EvtParms.VALID_PUESTOID=[[{av:"A150PuestoId",fld:"PUESTOID",pic:"ZZZZZZZZ9"},{av:"A351PuestoNombre",fld:"PUESTONOMBRE",pic:""}],[{av:"A351PuestoNombre",fld:"PUESTONOMBRE",pic:""}]];this.EvtParms.VALID_MENUID=[[{av:"A154MenuID",fld:"MENUID",pic:"ZZZZZZZ9"},{av:"A150PuestoId",fld:"PUESTOID",pic:"ZZZZZZZZ9"},{av:"A981MenuDes",fld:"MENUDES",pic:""}],[{av:"A981MenuDes",fld:"MENUDES",pic:""}]];this.EvtParms.VALID_OBJID=[[{av:"A153ObjID",fld:"OBJID",pic:""},{av:"A994ObjDes",fld:"OBJDES",pic:""}],[{av:"A994ObjDes",fld:"OBJDES",pic:""}]];this.setPrompt("PROMPT_150",[22]);this.setPrompt("PROMPT_153",[38]);this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV7PuestoId","vPUESTOID",0,"int",9,0);this.setVCMap("AV8MenuID","vMENUID",0,"int",8,0);this.setVCMap("AV9ObjID","vOBJID",0,"char",50,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV11TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);this.Initialize()});gx.wi(function(){gx.createParentObj(puestomenuobjetos)})