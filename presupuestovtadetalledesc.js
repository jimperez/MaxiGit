/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:43:45.68
*/
gx.evt.autoSkip=!1;gx.define("presupuestovtadetalledesc",!1,function(){this.ServerClass="presupuestovtadetalledesc";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Preid=function(){return this.validCliEvt("Valid_Preid",0,function(){try{var n=gx.util.balloon.getNew("PREID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Predetid=function(){return this.validSrvEvt("Valid_Predetid",0).then(function(n){return n}.closure(this))};this.Valid_Predetdesid=function(){return this.validSrvEvt("Valid_Predetdesid",0).then(function(n){return n}.closure(this))};this.e1134142_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e1234142_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82];this.GXLastCtrlId=82;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"TABLEMAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TITLE",format:0,grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"BTN_FIRST",grid:0,evt:"e1334142_client",std:"FIRST"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"BTN_PREVIOUS",grid:0,evt:"e1434142_client",std:"PREVIOUS"};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"BTN_NEXT",grid:0,evt:"e1534142_client",std:"NEXT"};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"BTN_LAST",grid:0,evt:"e1634142_client",std:"LAST"};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"BTN_SELECT",grid:0,evt:"e1734142_client",std:"SELECT"};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Preid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREID",gxz:"Z89PreId",gxold:"O89PreId",gxvar:"A89PreId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A89PreId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z89PreId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREID",gx.O.A89PreId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A89PreId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREID",".")},nac:gx.falseFn};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Predetid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETID",gxz:"Z94PreDetId",gxold:"O94PreDetId",gxvar:"A94PreDetId",ucs:[],op:[],ip:[33,28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A94PreDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z94PreDetId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREDETID",gx.O.A94PreDetId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A94PreDetId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREDETID",".")},nac:gx.falseFn};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Predetdesid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETDESID",gxz:"Z198PreDetDesId",gxold:"O198PreDetDesId",gxvar:"A198PreDetDesId",ucs:[],op:[73,68,63,58,53,48,43],ip:[73,68,63,58,53,48,43,38,33,28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A198PreDetDesId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z198PreDetDesId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREDETDESID",gx.O.A198PreDetDesId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A198PreDetDesId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREDETDESID",".")},nac:gx.falseFn};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETDESTIPO",gxz:"Z1320PreDetDesTipo",gxold:"O1320PreDetDesTipo",gxvar:"A1320PreDetDesTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1320PreDetDesTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z1320PreDetDesTipo=n)},v2c:function(){gx.fn.setControlValue("PREDETDESTIPO",gx.O.A1320PreDetDesTipo,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1320PreDetDesTipo=this.val())},val:function(){return gx.fn.getControlValue("PREDETDESTIPO")},nac:gx.falseFn};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETDESPOR",gxz:"Z1321PreDetDesPor",gxold:"O1321PreDetDesPor",gxvar:"A1321PreDetDesPor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1321PreDetDesPor=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1321PreDetDesPor=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PREDETDESPOR",gx.O.A1321PreDetDesPor,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1321PreDetDesPor=this.val())},val:function(){return gx.fn.getDecimalValue("PREDETDESPOR",".",",")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETDESIMPINI",gxz:"Z1322PreDetDesImpIni",gxold:"O1322PreDetDesImpIni",gxvar:"A1322PreDetDesImpIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1322PreDetDesImpIni=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1322PreDetDesImpIni=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PREDETDESIMPINI",gx.O.A1322PreDetDesImpIni,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1322PreDetDesImpIni=this.val())},val:function(){return gx.fn.getDecimalValue("PREDETDESIMPINI",".",",")},nac:gx.falseFn};this.declareDomainHdlr(53,function(){});n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETDESIMPFIN",gxz:"Z1323PreDetDesImpFin",gxold:"O1323PreDetDesImpFin",gxvar:"A1323PreDetDesImpFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1323PreDetDesImpFin=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1323PreDetDesImpFin=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PREDETDESIMPFIN",gx.O.A1323PreDetDesImpFin,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1323PreDetDesImpFin=this.val())},val:function(){return gx.fn.getDecimalValue("PREDETDESIMPFIN",".",",")},nac:gx.falseFn};this.declareDomainHdlr(58,function(){});n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETDESNETO",gxz:"Z1324PreDetDesNeto",gxold:"O1324PreDetDesNeto",gxvar:"A1324PreDetDesNeto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1324PreDetDesNeto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1324PreDetDesNeto=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PREDETDESNETO",gx.O.A1324PreDetDesNeto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1324PreDetDesNeto=this.val())},val:function(){return gx.fn.getDecimalValue("PREDETDESNETO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(63,function(){});n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"",grid:0};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"",grid:0};n[68]={id:68,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETDESIVA",gxz:"Z1325PreDetDesIVA",gxold:"O1325PreDetDesIVA",gxvar:"A1325PreDetDesIVA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1325PreDetDesIVA=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1325PreDetDesIVA=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PREDETDESIVA",gx.O.A1325PreDetDesIVA,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1325PreDetDesIVA=this.val())},val:function(){return gx.fn.getDecimalValue("PREDETDESIVA",".",",")},nac:gx.falseFn};this.declareDomainHdlr(68,function(){});n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"",grid:0};n[71]={id:71,fld:"",grid:0};n[72]={id:72,fld:"",grid:0};n[73]={id:73,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREDETDESIMP",gxz:"Z1326PreDetDesImp",gxold:"O1326PreDetDesImp",gxvar:"A1326PreDetDesImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1326PreDetDesImp=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1326PreDetDesImp=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PREDETDESIMP",gx.O.A1326PreDetDesImp,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1326PreDetDesImp=this.val())},val:function(){return gx.fn.getDecimalValue("PREDETDESIMP",".",",")},nac:gx.falseFn};this.declareDomainHdlr(73,function(){});n[74]={id:74,fld:"",grid:0};n[75]={id:75,fld:"",grid:0};n[76]={id:76,fld:"",grid:0};n[77]={id:77,fld:"",grid:0};n[78]={id:78,fld:"BTN_ENTER",grid:0,evt:"e1134142_client",std:"ENTER"};n[79]={id:79,fld:"",grid:0};n[80]={id:80,fld:"BTN_CANCEL",grid:0,evt:"e1234142_client"};n[81]={id:81,fld:"",grid:0};n[82]={id:82,fld:"BTN_DELETE",grid:0,evt:"e1834142_client",std:"DELETE"};this.A89PreId=0;this.Z89PreId=0;this.O89PreId=0;this.A94PreDetId=0;this.Z94PreDetId=0;this.O94PreDetId=0;this.A198PreDetDesId=0;this.Z198PreDetDesId=0;this.O198PreDetDesId=0;this.A1320PreDetDesTipo="";this.Z1320PreDetDesTipo="";this.O1320PreDetDesTipo="";this.A1321PreDetDesPor=0;this.Z1321PreDetDesPor=0;this.O1321PreDetDesPor=0;this.A1322PreDetDesImpIni=0;this.Z1322PreDetDesImpIni=0;this.O1322PreDetDesImpIni=0;this.A1323PreDetDesImpFin=0;this.Z1323PreDetDesImpFin=0;this.O1323PreDetDesImpFin=0;this.A1324PreDetDesNeto=0;this.Z1324PreDetDesNeto=0;this.O1324PreDetDesNeto=0;this.A1325PreDetDesIVA=0;this.Z1325PreDetDesIVA=0;this.O1325PreDetDesIVA=0;this.A1326PreDetDesImp=0;this.Z1326PreDetDesImp=0;this.O1326PreDetDesImp=0;this.A89PreId=0;this.A94PreDetId=0;this.A198PreDetDesId=0;this.A1320PreDetDesTipo="";this.A1321PreDetDesPor=0;this.A1322PreDetDesImpIni=0;this.A1323PreDetDesImpFin=0;this.A1324PreDetDesNeto=0;this.A1325PreDetDesIVA=0;this.A1326PreDetDesImp=0;this.Events={e1134142_client:["ENTER",!0],e1234142_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms.VALID_PREID=[[],[]];this.EvtParms.VALID_PREDETID=[[{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"A94PreDetId",fld:"PREDETID",pic:"ZZZ9"}],[]];this.EvtParms.VALID_PREDETDESID=[[{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"A94PreDetId",fld:"PREDETID",pic:"ZZZ9"},{av:"A198PreDetDesId",fld:"PREDETDESID",pic:"Z9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[{av:"A1320PreDetDesTipo",fld:"PREDETDESTIPO",pic:""},{av:"A1321PreDetDesPor",fld:"PREDETDESPOR",pic:"999.99"},{av:"A1322PreDetDesImpIni",fld:"PREDETDESIMPINI",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1323PreDetDesImpFin",fld:"PREDETDESIMPFIN",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1324PreDetDesNeto",fld:"PREDETDESNETO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1325PreDetDesIVA",fld:"PREDETDESIVA",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1326PreDetDesImp",fld:"PREDETDESIMP",pic:"ZZ,ZZZ,ZZ9.99"},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"Z89PreId"},{av:"Z94PreDetId"},{av:"Z198PreDetDesId"},{av:"Z1320PreDetDesTipo"},{av:"Z1321PreDetDesPor"},{av:"Z1322PreDetDesImpIni"},{av:"Z1323PreDetDesImpFin"},{av:"Z1324PreDetDesNeto"},{av:"Z1325PreDetDesIVA"},{av:"Z1326PreDetDesImp"},{ctrl:"BTN_DELETE",prop:"Enabled"},{ctrl:"BTN_ENTER",prop:"Enabled"}]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.Initialize()});gx.wi(function(){gx.createParentObj(presupuestovtadetalledesc)})