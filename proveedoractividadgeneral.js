/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:46:4.27
*/
gx.evt.autoSkip=!1;gx.define("proveedoractividadgeneral",!0,function(n){this.ServerClass="proveedoractividadgeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Proveedorid=function(){return this.validCliEvt("Valid_Proveedorid",0,function(){try{var n=gx.util.balloon.getNew("PROVEEDORID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Actividadid=function(){return this.validCliEvt("Valid_Actividadid",0,function(){try{var n=gx.util.balloon.getNew("ACTIVIDADID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11i51_client=function(){return this.clearMessages(),this.call("proveedoractividad.aspx",["UPD",this.A28ProveedorId,this.A104ActividadId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12i51_client=function(){return this.clearMessages(),this.call("proveedoractividad.aspx",["DLT",this.A28ProveedorId,this.A104ActividadId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15i52_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16i52_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];this.GXLastCtrlId=36;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Proveedorid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORID",gxz:"Z28ProveedorId",gxold:"O28ProveedorId",gxvar:"A28ProveedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A28ProveedorId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z28ProveedorId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PROVEEDORID",gx.O.A28ProveedorId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A28ProveedorId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PROVEEDORID",".")},nac:gx.falseFn};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORNOMBRE",gxz:"Z354ProveedorNombre",gxold:"O354ProveedorNombre",gxvar:"A354ProveedorNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A354ProveedorNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z354ProveedorNombre=n)},v2c:function(){gx.fn.setControlValue("PROVEEDORNOMBRE",gx.O.A354ProveedorNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A354ProveedorNombre=this.val())},val:function(){return gx.fn.getControlValue("PROVEEDORNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(17,function(){});t[18]={id:18,fld:"",grid:0};t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,lvl:0,type:"char",len:6,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Actividadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ACTIVIDADID",gxz:"Z104ActividadId",gxold:"O104ActividadId",gxvar:"A104ActividadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A104ActividadId=n)},v2z:function(n){n!==undefined&&(gx.O.Z104ActividadId=n)},v2c:function(){gx.fn.setControlValue("ACTIVIDADID",gx.O.A104ActividadId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A104ActividadId=this.val())},val:function(){return gx.fn.getControlValue("ACTIVIDADID")},nac:gx.falseFn};t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"",grid:0};t[25]={id:25,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ACTIVIDADNOMBRE",gxz:"Z2562ActividadNombre",gxold:"O2562ActividadNombre",gxvar:"A2562ActividadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2562ActividadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2562ActividadNombre=n)},v2c:function(){gx.fn.setControlValue("ACTIVIDADNOMBRE",gx.O.A2562ActividadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2562ActividadNombre=this.val())},val:function(){return gx.fn.getControlValue("ACTIVIDADNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(25,function(){});t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"BTNUPDATE",grid:0,evt:"e11i51_client"};t[31]={id:31,fld:"",grid:0};t[32]={id:32,fld:"BTNDELETE",grid:0,evt:"e12i51_client"};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[36]={id:36,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORPERSONATIPO",gxz:"Z1544ProveedorPersonaTipo",gxold:"O1544ProveedorPersonaTipo",gxvar:"A1544ProveedorPersonaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A1544ProveedorPersonaTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z1544ProveedorPersonaTipo=n)},v2c:function(){gx.fn.setComboBoxValue("PROVEEDORPERSONATIPO",gx.O.A1544ProveedorPersonaTipo);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1544ProveedorPersonaTipo=this.val())},val:function(){return gx.fn.getControlValue("PROVEEDORPERSONATIPO")},nac:gx.falseFn};this.declareDomainHdlr(36,function(){});this.A28ProveedorId=0;this.Z28ProveedorId=0;this.O28ProveedorId=0;this.A354ProveedorNombre="";this.Z354ProveedorNombre="";this.O354ProveedorNombre="";this.A104ActividadId="";this.Z104ActividadId="";this.O104ActividadId="";this.A2562ActividadNombre="";this.Z2562ActividadNombre="";this.O2562ActividadNombre="";this.A1544ProveedorPersonaTipo="";this.Z1544ProveedorPersonaTipo="";this.O1544ProveedorPersonaTipo="";this.A28ProveedorId=0;this.A354ProveedorNombre="";this.A104ActividadId="";this.A2562ActividadNombre="";this.A1544ProveedorPersonaTipo="";this.Events={e15i52_client:["ENTER",!0],e16i52_client:["CANCEL",!0],e11i51_client:["'DOUPDATE'",!1],e12i51_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A28ProveedorId",fld:"PROVEEDORID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A104ActividadId",fld:"ACTIVIDADID",pic:""}],[]];this.EvtParms.START=[[{av:"AV19Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{ctrl:"PROVEEDORPERSONATIPO"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A28ProveedorId",fld:"PROVEEDORID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A104ActividadId",fld:"ACTIVIDADID",pic:""}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A28ProveedorId",fld:"PROVEEDORID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A104ActividadId",fld:"ACTIVIDADID",pic:""}],[]];this.EvtParms.VALID_PROVEEDORID=[[],[]];this.EvtParms.VALID_ACTIVIDADID=[[],[]];this.Initialize()})