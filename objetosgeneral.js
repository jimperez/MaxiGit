/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:43:11.12
*/
gx.evt.autoSkip=!1;gx.define("objetosgeneral",!0,function(n){this.ServerClass="objetosgeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Objid=function(){return this.validCliEvt("Valid_Objid",0,function(){try{var n=gx.util.balloon.getNew("OBJID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11hm1_client=function(){return this.clearMessages(),this.call("objetos.aspx",["UPD",this.A153ObjID]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12hm1_client=function(){return this.clearMessages(),this.call("objetos.aspx",["DLT",this.A153ObjID]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15hm2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16hm2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];this.GXLastCtrlId=26;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"char",len:50,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Objid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"OBJID",gxz:"Z153ObjID",gxold:"O153ObjID",gxvar:"A153ObjID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A153ObjID=n)},v2z:function(n){n!==undefined&&(gx.O.Z153ObjID=n)},v2c:function(){gx.fn.setControlValue("OBJID",gx.O.A153ObjID,0)},c2v:function(){this.val()!==undefined&&(gx.O.A153ObjID=this.val())},val:function(){return gx.fn.getControlValue("OBJID")},nac:gx.falseFn};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,lvl:0,type:"svchar",len:130,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"OBJDES",gxz:"Z994ObjDes",gxold:"O994ObjDes",gxvar:"A994ObjDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A994ObjDes=n)},v2z:function(n){n!==undefined&&(gx.O.Z994ObjDes=n)},v2c:function(){gx.fn.setControlValue("OBJDES",gx.O.A994ObjDes,0)},c2v:function(){this.val()!==undefined&&(gx.O.A994ObjDes=this.val())},val:function(){return gx.fn.getControlValue("OBJDES")},nac:gx.falseFn};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"BTNUPDATE",grid:0,evt:"e11hm1_client"};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"BTNDELETE",grid:0,evt:"e12hm1_client"};this.A153ObjID="";this.Z153ObjID="";this.O153ObjID="";this.A994ObjDes="";this.Z994ObjDes="";this.O994ObjDes="";this.A153ObjID="";this.A994ObjDes="";this.Events={e15hm2_client:["ENTER",!0],e16hm2_client:["CANCEL",!0],e11hm1_client:["'DOUPDATE'",!1],e12hm1_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A153ObjID",fld:"OBJID",pic:""}],[]];this.EvtParms.START=[[{av:"AV18Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A153ObjID",fld:"OBJID",pic:""}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A153ObjID",fld:"OBJID",pic:""}],[]];this.EvtParms.VALID_OBJID=[[],[]];this.Initialize()})