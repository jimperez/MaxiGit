/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:42:32.3
*/
gx.evt.autoSkip=!1;gx.define("plangeneral",!0,function(n){this.ServerClass="plangeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Planid=function(){return this.validCliEvt("Valid_Planid",0,function(){try{var n=gx.util.balloon.getNew("PLANID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11dr1_client=function(){return this.clearMessages(),this.call("plan.aspx",["UPD",this.A119PlanId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12dr1_client=function(){return this.clearMessages(),this.call("plan.aspx",["DLT",this.A119PlanId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15dr2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16dr2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];this.GXLastCtrlId=36;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Planid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANID",gxz:"Z119PlanId",gxold:"O119PlanId",gxvar:"A119PlanId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A119PlanId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z119PlanId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PLANID",gx.O.A119PlanId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A119PlanId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PLANID",".")},nac:gx.falseFn};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANNOMBRE",gxz:"Z1040PlanNombre",gxold:"O1040PlanNombre",gxvar:"A1040PlanNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1040PlanNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1040PlanNombre=n)},v2c:function(){gx.fn.setControlValue("PLANNOMBRE",gx.O.A1040PlanNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1040PlanNombre=this.val())},val:function(){return gx.fn.getControlValue("PLANNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(19,function(){});t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANCUOTA",gxz:"Z2114PlanCuota",gxold:"O2114PlanCuota",gxvar:"A2114PlanCuota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2114PlanCuota=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2114PlanCuota=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PLANCUOTA",gx.O.A2114PlanCuota,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2114PlanCuota=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PLANCUOTA",".")},nac:gx.falseFn};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANESTADO",gxz:"Z1041PlanEstado",gxold:"O1041PlanEstado",gxvar:"A1041PlanEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A1041PlanEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z1041PlanEstado=n)},v2c:function(){gx.fn.setComboBoxValue("PLANESTADO",gx.O.A1041PlanEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1041PlanEstado=this.val())},val:function(){return gx.fn.getControlValue("PLANESTADO")},nac:gx.falseFn};this.declareDomainHdlr(29,function(){});t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"BTNUPDATE",grid:0,evt:"e11dr1_client"};t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"BTNDELETE",grid:0,evt:"e12dr1_client"};this.A119PlanId=0;this.Z119PlanId=0;this.O119PlanId=0;this.A1040PlanNombre="";this.Z1040PlanNombre="";this.O1040PlanNombre="";this.A2114PlanCuota=0;this.Z2114PlanCuota=0;this.O2114PlanCuota=0;this.A1041PlanEstado="";this.Z1041PlanEstado="";this.O1041PlanEstado="";this.A119PlanId=0;this.A1040PlanNombre="";this.A2114PlanCuota=0;this.A1041PlanEstado="";this.Events={e15dr2_client:["ENTER",!0],e16dr2_client:["CANCEL",!0],e11dr1_client:["'DOUPDATE'",!1],e12dr1_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A119PlanId",fld:"PLANID",pic:"ZZZ9"}],[]];this.EvtParms.START=[[{av:"AV18Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A119PlanId",fld:"PLANID",pic:"ZZZ9"}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A119PlanId",fld:"PLANID",pic:"ZZZ9"}],[]];this.EvtParms.VALID_PLANID=[[],[]];this.Initialize()})