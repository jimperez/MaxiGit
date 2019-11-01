/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:43:43.18
*/
gx.evt.autoSkip=!1;gx.define("conceptocta",!1,function(){this.ServerClass="conceptocta";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Conceptoctaid=function(){return this.validSrvEvt("Valid_Conceptoctaid",0).then(function(n){return n}.closure(this))};this.Valid_Conceptoctatipo=function(){return this.validCliEvt("Valid_Conceptoctatipo",0,function(){try{var n=gx.util.balloon.getNew("CONCEPTOCTATIPO");if(this.AnyError=0,!(this.A1292ConceptoCtaTipo=="DEB"||this.A1292ConceptoCtaTipo=="CRE"||""==this.A1292ConceptoCtaTipo))try{n.setError("Campo Concepto Cta Tipo fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Conceptocta095=function(){return this.validCliEvt("Valid_Conceptocta095",0,function(){try{var n=gx.util.balloon.getNew("CONCEPTOCTA095");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.A1295ConceptoCta095)==0||new gx.date.gxdate(this.A1295ConceptoCta095).compare(gx.date.ymdhmstot(1753,01,01,00,00,00))>=0))try{n.setError("Campo Concepto Cta095 fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Conceptocta098=function(){return this.validCliEvt("Valid_Conceptocta098",0,function(){try{var n=gx.util.balloon.getNew("CONCEPTOCTA098");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.A1297ConceptoCta098)==0||new gx.date.gxdate(this.A1297ConceptoCta098).compare(gx.date.ymdhmstot(1753,01,01,00,00,00))>=0))try{n.setError("Campo Concepto Cta098 fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e1131139_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e1231139_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72];this.GXLastCtrlId=72;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"TABLEMAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TITLE",format:0,grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"BTN_FIRST",grid:0,evt:"e1331139_client",std:"FIRST"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"BTN_PREVIOUS",grid:0,evt:"e1431139_client",std:"PREVIOUS"};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"BTN_NEXT",grid:0,evt:"e1531139_client",std:"NEXT"};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"BTN_LAST",grid:0,evt:"e1631139_client",std:"LAST"};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"BTN_SELECT",grid:0,evt:"e1731139_client",std:"SELECT"};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conceptoctaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONCEPTOCTAID",gxz:"Z195ConceptoCtaId",gxold:"O195ConceptoCtaId",gxvar:"A195ConceptoCtaId",ucs:[],op:[63,58,53,48,43,38,33],ip:[63,58,53,48,43,38,33,28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A195ConceptoCtaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z195ConceptoCtaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONCEPTOCTAID",gx.O.A195ConceptoCtaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A195ConceptoCtaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONCEPTOCTAID",".")},nac:gx.falseFn};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONCEPTOCTANOMBRE",gxz:"Z1291ConceptoCtaNombre",gxold:"O1291ConceptoCtaNombre",gxvar:"A1291ConceptoCtaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1291ConceptoCtaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1291ConceptoCtaNombre=n)},v2c:function(){gx.fn.setControlValue("CONCEPTOCTANOMBRE",gx.O.A1291ConceptoCtaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1291ConceptoCtaNombre=this.val())},val:function(){return gx.fn.getControlValue("CONCEPTOCTANOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(33,function(){});n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conceptoctatipo,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONCEPTOCTATIPO",gxz:"Z1292ConceptoCtaTipo",gxold:"O1292ConceptoCtaTipo",gxvar:"A1292ConceptoCtaTipo",ucs:[],op:[38],ip:[38],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A1292ConceptoCtaTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z1292ConceptoCtaTipo=n)},v2c:function(){gx.fn.setComboBoxValue("CONCEPTOCTATIPO",gx.O.A1292ConceptoCtaTipo);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1292ConceptoCtaTipo=this.val())},val:function(){return gx.fn.getControlValue("CONCEPTOCTATIPO")},nac:gx.falseFn};this.declareDomainHdlr(38,function(){});n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONCEPTOCTAESTADO",gxz:"Z1293ConceptoCtaEstado",gxold:"O1293ConceptoCtaEstado",gxvar:"A1293ConceptoCtaEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A1293ConceptoCtaEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z1293ConceptoCtaEstado=n)},v2c:function(){gx.fn.setComboBoxValue("CONCEPTOCTAESTADO",gx.O.A1293ConceptoCtaEstado)},c2v:function(){this.val()!==undefined&&(gx.O.A1293ConceptoCtaEstado=this.val())},val:function(){return gx.fn.getControlValue("CONCEPTOCTAESTADO")},nac:gx.falseFn};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONCEPTOCTA094",gxz:"Z1294ConceptoCta094",gxold:"O1294ConceptoCta094",gxvar:"A1294ConceptoCta094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1294ConceptoCta094=n)},v2z:function(n){n!==undefined&&(gx.O.Z1294ConceptoCta094=n)},v2c:function(){gx.fn.setControlValue("CONCEPTOCTA094",gx.O.A1294ConceptoCta094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1294ConceptoCta094=this.val())},val:function(){return gx.fn.getControlValue("CONCEPTOCTA094")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conceptocta095,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONCEPTOCTA095",gxz:"Z1295ConceptoCta095",gxold:"O1295ConceptoCta095",gxvar:"A1295ConceptoCta095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[53],ip:[53],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1295ConceptoCta095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1295ConceptoCta095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("CONCEPTOCTA095",gx.O.A1295ConceptoCta095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1295ConceptoCta095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("CONCEPTOCTA095")},nac:gx.falseFn};this.declareDomainHdlr(53,function(){});n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONCEPTOCTA097",gxz:"Z1296ConceptoCta097",gxold:"O1296ConceptoCta097",gxvar:"A1296ConceptoCta097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1296ConceptoCta097=n)},v2z:function(n){n!==undefined&&(gx.O.Z1296ConceptoCta097=n)},v2c:function(){gx.fn.setControlValue("CONCEPTOCTA097",gx.O.A1296ConceptoCta097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1296ConceptoCta097=this.val())},val:function(){return gx.fn.getControlValue("CONCEPTOCTA097")},nac:gx.falseFn};this.declareDomainHdlr(58,function(){});n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Conceptocta098,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONCEPTOCTA098",gxz:"Z1297ConceptoCta098",gxold:"O1297ConceptoCta098",gxvar:"A1297ConceptoCta098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[63],ip:[63],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1297ConceptoCta098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1297ConceptoCta098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("CONCEPTOCTA098",gx.O.A1297ConceptoCta098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1297ConceptoCta098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("CONCEPTOCTA098")},nac:gx.falseFn};this.declareDomainHdlr(63,function(){});n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"",grid:0};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"",grid:0};n[68]={id:68,fld:"BTN_ENTER",grid:0,evt:"e1131139_client",std:"ENTER"};n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"BTN_CANCEL",grid:0,evt:"e1231139_client"};n[71]={id:71,fld:"",grid:0};n[72]={id:72,fld:"BTN_DELETE",grid:0,evt:"e1831139_client",std:"DELETE"};this.A195ConceptoCtaId=0;this.Z195ConceptoCtaId=0;this.O195ConceptoCtaId=0;this.A1291ConceptoCtaNombre="";this.Z1291ConceptoCtaNombre="";this.O1291ConceptoCtaNombre="";this.A1292ConceptoCtaTipo="";this.Z1292ConceptoCtaTipo="";this.O1292ConceptoCtaTipo="";this.A1293ConceptoCtaEstado="";this.Z1293ConceptoCtaEstado="";this.O1293ConceptoCtaEstado="";this.A1294ConceptoCta094="";this.Z1294ConceptoCta094="";this.O1294ConceptoCta094="";this.A1295ConceptoCta095=gx.date.nullDate();this.Z1295ConceptoCta095=gx.date.nullDate();this.O1295ConceptoCta095=gx.date.nullDate();this.A1296ConceptoCta097="";this.Z1296ConceptoCta097="";this.O1296ConceptoCta097="";this.A1297ConceptoCta098=gx.date.nullDate();this.Z1297ConceptoCta098=gx.date.nullDate();this.O1297ConceptoCta098=gx.date.nullDate();this.A195ConceptoCtaId=0;this.A1291ConceptoCtaNombre="";this.A1292ConceptoCtaTipo="";this.A1293ConceptoCtaEstado="";this.A1294ConceptoCta094="";this.A1295ConceptoCta095=gx.date.nullDate();this.A1296ConceptoCta097="";this.A1297ConceptoCta098=gx.date.nullDate();this.Events={e1131139_client:["ENTER",!0],e1231139_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms.VALID_CONCEPTOCTAID=[[{ctrl:"CONCEPTOCTAESTADO"},{av:"A1293ConceptoCtaEstado",fld:"CONCEPTOCTAESTADO",pic:""},{ctrl:"CONCEPTOCTATIPO"},{av:"A1292ConceptoCtaTipo",fld:"CONCEPTOCTATIPO",pic:""},{av:"A195ConceptoCtaId",fld:"CONCEPTOCTAID",pic:"ZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[{av:"A1291ConceptoCtaNombre",fld:"CONCEPTOCTANOMBRE",pic:"@!"},{ctrl:"CONCEPTOCTATIPO"},{av:"A1292ConceptoCtaTipo",fld:"CONCEPTOCTATIPO",pic:""},{ctrl:"CONCEPTOCTAESTADO"},{av:"A1293ConceptoCtaEstado",fld:"CONCEPTOCTAESTADO",pic:""},{av:"A1294ConceptoCta094",fld:"CONCEPTOCTA094",pic:""},{av:"A1295ConceptoCta095",fld:"CONCEPTOCTA095",pic:"99/99/99 99:99"},{av:"A1296ConceptoCta097",fld:"CONCEPTOCTA097",pic:""},{av:"A1297ConceptoCta098",fld:"CONCEPTOCTA098",pic:"99/99/99 99:99"},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"Z195ConceptoCtaId"},{av:"Z1291ConceptoCtaNombre"},{av:"Z1292ConceptoCtaTipo"},{av:"Z1293ConceptoCtaEstado"},{av:"Z1294ConceptoCta094"},{av:"Z1295ConceptoCta095"},{av:"Z1296ConceptoCta097"},{av:"Z1297ConceptoCta098"},{ctrl:"BTN_DELETE",prop:"Enabled"},{ctrl:"BTN_ENTER",prop:"Enabled"}]];this.EvtParms.VALID_CONCEPTOCTATIPO=[[{ctrl:"CONCEPTOCTATIPO"},{av:"A1292ConceptoCtaTipo",fld:"CONCEPTOCTATIPO",pic:""}],[{ctrl:"CONCEPTOCTATIPO"},{av:"A1292ConceptoCtaTipo",fld:"CONCEPTOCTATIPO",pic:""}]];this.EvtParms.VALID_CONCEPTOCTA095=[[{av:"A1295ConceptoCta095",fld:"CONCEPTOCTA095",pic:"99/99/99 99:99"}],[{av:"A1295ConceptoCta095",fld:"CONCEPTOCTA095",pic:"99/99/99 99:99"}]];this.EvtParms.VALID_CONCEPTOCTA098=[[{av:"A1297ConceptoCta098",fld:"CONCEPTOCTA098",pic:"99/99/99 99:99"}],[{av:"A1297ConceptoCta098",fld:"CONCEPTOCTA098",pic:"99/99/99 99:99"}]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.Initialize()});gx.wi(function(){gx.createParentObj(conceptocta)})