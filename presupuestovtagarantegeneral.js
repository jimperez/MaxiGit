/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:47:51.58
*/
gx.evt.autoSkip=!1;gx.define("presupuestovtagarantegeneral",!0,function(n){this.ServerClass="presupuestovtagarantegeneral";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Preid=function(){return this.validCliEvt("Valid_Preid",0,function(){try{var n=gx.util.balloon.getNew("PREID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Pregaranteid=function(){return this.validCliEvt("Valid_Pregaranteid",0,function(){try{var n=gx.util.balloon.getNew("PREGARANTEID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11x01_client=function(){return this.clearMessages(),this.call("presupuestovtagarante.aspx",["UPD",this.A89PreId,this.A3374PreGaranteId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12x01_client=function(){return this.clearMessages(),this.call("presupuestovtagarante.aspx",["DLT",this.A89PreId,this.A3374PreGaranteId]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15x02_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16x02_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34];this.GXLastCtrlId=34;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Preid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREID",gxz:"Z89PreId",gxold:"O89PreId",gxvar:"A89PreId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A89PreId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z89PreId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREID",gx.O.A89PreId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A89PreId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREID",".")},nac:gx.falseFn};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Pregaranteid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREGARANTEID",gxz:"Z3374PreGaranteId",gxold:"O3374PreGaranteId",gxvar:"A3374PreGaranteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3374PreGaranteId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3374PreGaranteId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREGARANTEID",gx.O.A3374PreGaranteId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3374PreGaranteId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREGARANTEID",".")},nac:gx.falseFn};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREGARANTENOMBRE",gxz:"Z3380PreGaranteNombre",gxold:"O3380PreGaranteNombre",gxvar:"A3380PreGaranteNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3380PreGaranteNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3380PreGaranteNombre=n)},v2c:function(){gx.fn.setControlValue("PREGARANTENOMBRE",gx.O.A3380PreGaranteNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3380PreGaranteNombre=this.val())},val:function(){return gx.fn.getControlValue("PREGARANTENOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(22,function(){});t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"BTNUPDATE",grid:0,evt:"e11x01_client"};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"BTNDELETE",grid:0,evt:"e12x01_client"};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[33]={id:33,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREGARANTE094",gxz:"Z3378PreGarante094",gxold:"O3378PreGarante094",gxvar:"A3378PreGarante094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3378PreGarante094=n)},v2z:function(n){n!==undefined&&(gx.O.Z3378PreGarante094=n)},v2c:function(){gx.fn.setControlValue("PREGARANTE094",gx.O.A3378PreGarante094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3378PreGarante094=this.val())},val:function(){return gx.fn.getControlValue("PREGARANTE094")},nac:gx.falseFn};this.declareDomainHdlr(33,function(){});t[34]={id:34,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREGARANTE095",gxz:"Z3379PreGarante095",gxold:"O3379PreGarante095",gxvar:"A3379PreGarante095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3379PreGarante095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z3379PreGarante095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PREGARANTE095",gx.O.A3379PreGarante095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3379PreGarante095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("PREGARANTE095")},nac:gx.falseFn};this.declareDomainHdlr(34,function(){});this.A89PreId=0;this.Z89PreId=0;this.O89PreId=0;this.A3374PreGaranteId=0;this.Z3374PreGaranteId=0;this.O3374PreGaranteId=0;this.A3380PreGaranteNombre="";this.Z3380PreGaranteNombre="";this.O3380PreGaranteNombre="";this.A3378PreGarante094="";this.Z3378PreGarante094="";this.O3378PreGarante094="";this.A3379PreGarante095=gx.date.nullDate();this.Z3379PreGarante095=gx.date.nullDate();this.O3379PreGarante095=gx.date.nullDate();this.A89PreId=0;this.A3374PreGaranteId=0;this.A3380PreGaranteNombre="";this.A3378PreGarante094="";this.A3379PreGarante095=gx.date.nullDate();this.Events={e15x02_client:["ENTER",!0],e16x02_client:["CANCEL",!0],e11x01_client:["'DOUPDATE'",!1],e12x01_client:["'DODELETE'",!1]};this.EvtParms.REFRESH=[[{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"A3374PreGaranteId",fld:"PREGARANTEID",pic:"ZZZZZZZZZZZZZZ9"}],[]];this.EvtParms.START=[[{av:"AV15Pgmname",fld:"vPGMNAME",pic:""}],[]];this.EvtParms.LOAD=[[],[{av:'gx.fn.getCtrlProperty("PREGARANTE094","Visible")',ctrl:"PREGARANTE094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PREGARANTE095","Visible")',ctrl:"PREGARANTE095",prop:"Visible"},{ctrl:"BTNUPDATE",prop:"Visible"},{ctrl:"BTNDELETE",prop:"Visible"}]];this.EvtParms["'DOUPDATE'"]=[[{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"A3374PreGaranteId",fld:"PREGARANTEID",pic:"ZZZZZZZZZZZZZZ9"}],[]];this.EvtParms["'DODELETE'"]=[[{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"A3374PreGaranteId",fld:"PREGARANTEID",pic:"ZZZZZZZZZZZZZZ9"}],[]];this.EvtParms.VALID_PREID=[[],[]];this.EvtParms.VALID_PREGARANTEID=[[],[]];this.Initialize()})