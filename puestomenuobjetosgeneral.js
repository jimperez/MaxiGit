/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:43:21.66
*/
gx.evt.autoSkip=!1;gx.define("puestomenuobjetosgeneral",!0,function(n){this.ServerClass="puestomenuobjetosgeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Puestoid=function(){return this.validCliEvt("Valid_Puestoid",0,function(){try{var n=gx.util.balloon.getNew("PUESTOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Menuid=function(){return this.validCliEvt("Valid_Menuid",0,function(){try{var n=gx.util.balloon.getNew("MENUID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Objid=function(){return this.validCliEvt("Valid_Objid",0,function(){try{var n=gx.util.balloon.getNew("OBJID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11hv1_client=function(){return this.clearMessages(),this.call("puestomenuobjetos.aspx",["UPD",this.A150PuestoId,this.A154MenuID,this.A153ObjID]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12hv1_client=function(){return this.clearMessages(),this.call("puestomenuobjetos.aspx",["DLT",this.A150PuestoId,this.A154MenuID,this.A153ObjID]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15hv2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16hv2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];this.GXLastCtrlId=45;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Puestoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PUESTOID",gxz:"Z150PuestoId",gxold:"O150PuestoId",gxvar:"A150PuestoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A150PuestoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z150PuestoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PUESTOID",gx.O.A150PuestoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A150PuestoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PUESTOID",".")},nac:gx.falseFn};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,lvl:0,type:"svchar",len:130,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PUESTONOMBRE",gxz:"Z351PuestoNombre",gxold:"O351PuestoNombre",gxvar:"A351PuestoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A351PuestoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z351PuestoNombre=n)},v2c:function(){gx.fn.setControlValue("PUESTONOMBRE",gx.O.A351PuestoNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.A351PuestoNombre=this.val())},val:function(){return gx.fn.getControlValue("PUESTONOMBRE")},nac:gx.falseFn};t[18]={id:18,fld:"",grid:0};t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Menuid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MENUID",gxz:"Z154MenuID",gxold:"O154MenuID",gxvar:"A154MenuID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A154MenuID=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z154MenuID=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("MENUID",gx.O.A154MenuID,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A154MenuID=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("MENUID",".")},nac:gx.falseFn};this.declareDomainHdlr(22,function(){});t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"",grid:0};t[25]={id:25,lvl:0,type:"char",len:40,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MENUDES",gxz:"Z981MenuDes",gxold:"O981MenuDes",gxvar:"A981MenuDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A981MenuDes=n)},v2z:function(n){n!==undefined&&(gx.O.Z981MenuDes=n)},v2c:function(){gx.fn.setControlValue("MENUDES",gx.O.A981MenuDes,0)},c2v:function(){this.val()!==undefined&&(gx.O.A981MenuDes=this.val())},val:function(){return gx.fn.getControlValue("MENUDES")},nac:gx.falseFn};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,lvl:0,type:"char",len:50,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Objid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"OBJID",gxz:"Z153ObjID",gxold:"O153ObjID",gxvar:"A153ObjID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A153ObjID=n)},v2z:function(n){n!==undefined&&(gx.O.Z153ObjID=n)},v2c:function(){gx.fn.setControlValue("OBJID",gx.O.A153ObjID,0)},c2v:function(){this.val()!==undefined&&(gx.O.A153ObjID=this.val())},val:function(){return gx.fn.getControlValue("OBJID")},nac:gx.falseFn};t[31]={id:31,fld:"",grid:0};t[32]={id:32,fld:"",grid:0};t[33]={id:33,lvl:0,type:"svchar",len:130,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"OBJDES",gxz:"Z994ObjDes",gxold:"O994ObjDes",gxvar:"A994ObjDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A994ObjDes=n)},v2z:function(n){n!==undefined&&(gx.O.Z994ObjDes=n)},v2c:function(){gx.fn.setControlValue("OBJDES",gx.O.A994ObjDes,0)},c2v:function(){this.val()!==undefined&&(gx.O.A994ObjDes=this.val())},val:function(){return gx.fn.getControlValue("OBJDES")},nac:gx.falseFn};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"",grid:0};t[38]={id:38,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"OBJETOSMENUORDEN",gxz:"Z348ObjetosMenuOrden",gxold:"O348ObjetosMenuOrden",gxvar:"A348ObjetosMenuOrden",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A348ObjetosMenuOrden=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z348ObjetosMenuOrden=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("OBJETOSMENUORDEN",gx.O.A348ObjetosMenuOrden,0)},c2v:function(){this.val()!==undefined&&(gx.O.A348ObjetosMenuOrden=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("OBJETOSMENUORDEN",".")},nac:gx.falseFn};t[39]={id:39,fld:"",grid:0};t[40]={id:40,fld:"",grid:0};t[41]={id:41,fld:"",grid:0};t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"BTNUPDATE",grid:0,evt:"e11hv1_client"};t[44]={id:44,fld:"",grid:0};t[45]={id:45,fld:"BTNDELETE",grid:0,evt:"e12hv1_client"};this.A150PuestoId=0;this.Z150PuestoId=0;this.O150PuestoId=0;this.A351PuestoNombre="";this.Z351PuestoNombre="";this.O351PuestoNombre="";this.A154MenuID=0;this.Z154MenuID=0;this.O154MenuID=0;this.A981MenuDes="";this.Z981MenuDes="";this.O981MenuDes="";this.A153ObjID="";this.Z153ObjID="";this.O153ObjID="";this.A994ObjDes="";this.Z994ObjDes="";this.O994ObjDes="";this.A348ObjetosMenuOrden=0;this.Z348ObjetosMenuOrden=0;this.O348ObjetosMenuOrden=0;this.A150PuestoId=0;this.A351PuestoNombre="";this.A154MenuID=0;this.A981MenuDes="";this.A153ObjID="";this.A994ObjDes="";this.A348ObjetosMenuOrden=0;this.Events={e15hv2_client:["ENTER",!0],e16hv2_client:["CANCEL",!0],e11hv1_client:["'DOUPDATE'",!1],e12hv1_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A150PuestoId",fld:"PUESTOID",pic:"ZZZZZZZZ9"},{av:"A154MenuID",fld:"MENUID",pic:"ZZZZZZZ9"},{av:"A153ObjID",fld:"OBJID",pic:""}],[]];this.EvtParms.START=[[{av:"AV20Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A150PuestoId",fld:"PUESTOID",pic:"ZZZZZZZZ9"},{av:"A154MenuID",fld:"MENUID",pic:"ZZZZZZZ9"},{av:"A153ObjID",fld:"OBJID",pic:""}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A150PuestoId",fld:"PUESTOID",pic:"ZZZZZZZZ9"},{av:"A154MenuID",fld:"MENUID",pic:"ZZZZZZZ9"},{av:"A153ObjID",fld:"OBJID",pic:""}],[]];this.EvtParms.VALID_PUESTOID=[[],[]];this.EvtParms.VALID_MENUID=[[],[]];this.EvtParms.VALID_OBJID=[[],[]];this.Initialize()})