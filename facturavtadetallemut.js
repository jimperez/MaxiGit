/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:44:47.72
*/
gx.evt.autoSkip=!1;gx.define("facturavtadetallemut",!1,function(){this.ServerClass="facturavtadetallemut";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Facvtaid=function(){return this.validCliEvt("Valid_Facvtaid",0,function(){try{var n=gx.util.balloon.getNew("FACVTAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Facvtadetid=function(){return this.validSrvEvt("Valid_Facvtadetid",0).then(function(n){return n}.closure(this))};this.Valid_Facvtadetmutid=function(){return this.validSrvEvt("Valid_Facvtadetmutid",0).then(function(n){return n}.closure(this))};this.e113s165_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e123s165_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82];this.GXLastCtrlId=82;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"TABLEMAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TITLE",format:0,grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"BTN_FIRST",grid:0,evt:"e133s165_client",std:"FIRST"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"BTN_PREVIOUS",grid:0,evt:"e143s165_client",std:"PREVIOUS"};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"BTN_NEXT",grid:0,evt:"e153s165_client",std:"NEXT"};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"BTN_LAST",grid:0,evt:"e163s165_client",std:"LAST"};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"BTN_SELECT",grid:0,evt:"e173s165_client",std:"SELECT"};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Facvtaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTAID",gxz:"Z218FacVtaId",gxold:"O218FacVtaId",gxvar:"A218FacVtaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A218FacVtaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z218FacVtaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTAID",gx.O.A218FacVtaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A218FacVtaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTAID",".")},nac:gx.falseFn};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Facvtadetid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETID",gxz:"Z222FacVtaDetId",gxold:"O222FacVtaDetId",gxvar:"A222FacVtaDetId",ucs:[],op:[],ip:[33,28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A222FacVtaDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z222FacVtaDetId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTADETID",gx.O.A222FacVtaDetId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A222FacVtaDetId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTADETID",".")},nac:gx.falseFn};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Facvtadetmutid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETMUTID",gxz:"Z226FacVtaDetMutId",gxold:"O226FacVtaDetMutId",gxvar:"A226FacVtaDetMutId",ucs:[],op:[73,68,63,58,53,48,43],ip:[73,68,63,58,53,48,43,38,33,28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A226FacVtaDetMutId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z226FacVtaDetMutId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTADETMUTID",gx.O.A226FacVtaDetMutId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A226FacVtaDetMutId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTADETMUTID",".")},nac:gx.falseFn};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETMUTPOR",gxz:"Z1829FacVtaDetMutPor",gxold:"O1829FacVtaDetMutPor",gxvar:"A1829FacVtaDetMutPor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1829FacVtaDetMutPor=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1829FacVtaDetMutPor=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("FACVTADETMUTPOR",gx.O.A1829FacVtaDetMutPor,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1829FacVtaDetMutPor=this.val())},val:function(){return gx.fn.getDecimalValue("FACVTADETMUTPOR",".",",")},nac:gx.falseFn};this.declareDomainHdlr(43,function(){});n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETMUTCOSTO",gxz:"Z1830FacVtaDetMutCosto",gxold:"O1830FacVtaDetMutCosto",gxvar:"A1830FacVtaDetMutCosto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1830FacVtaDetMutCosto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1830FacVtaDetMutCosto=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("FACVTADETMUTCOSTO",gx.O.A1830FacVtaDetMutCosto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1830FacVtaDetMutCosto=this.val())},val:function(){return gx.fn.getDecimalValue("FACVTADETMUTCOSTO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETMUTIMPFIN",gxz:"Z1831FacVtaDetMutImpFin",gxold:"O1831FacVtaDetMutImpFin",gxvar:"A1831FacVtaDetMutImpFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1831FacVtaDetMutImpFin=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1831FacVtaDetMutImpFin=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("FACVTADETMUTIMPFIN",gx.O.A1831FacVtaDetMutImpFin,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1831FacVtaDetMutImpFin=this.val())},val:function(){return gx.fn.getDecimalValue("FACVTADETMUTIMPFIN",".",",")},nac:gx.falseFn};this.declareDomainHdlr(53,function(){});n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETMUTNETO",gxz:"Z1832FacVtaDetMutNeto",gxold:"O1832FacVtaDetMutNeto",gxvar:"A1832FacVtaDetMutNeto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1832FacVtaDetMutNeto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1832FacVtaDetMutNeto=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("FACVTADETMUTNETO",gx.O.A1832FacVtaDetMutNeto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1832FacVtaDetMutNeto=this.val())},val:function(){return gx.fn.getDecimalValue("FACVTADETMUTNETO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(58,function(){});n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETMUTIVA",gxz:"Z1833FacVtaDetMutIVA",gxold:"O1833FacVtaDetMutIVA",gxvar:"A1833FacVtaDetMutIVA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1833FacVtaDetMutIVA=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1833FacVtaDetMutIVA=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("FACVTADETMUTIVA",gx.O.A1833FacVtaDetMutIVA,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1833FacVtaDetMutIVA=this.val())},val:function(){return gx.fn.getDecimalValue("FACVTADETMUTIVA",".",",")},nac:gx.falseFn};this.declareDomainHdlr(63,function(){});n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"",grid:0};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"",grid:0};n[68]={id:68,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETMUTIMP",gxz:"Z1834FacVtaDetMutImp",gxold:"O1834FacVtaDetMutImp",gxvar:"A1834FacVtaDetMutImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1834FacVtaDetMutImp=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1834FacVtaDetMutImp=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("FACVTADETMUTIMP",gx.O.A1834FacVtaDetMutImp,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1834FacVtaDetMutImp=this.val())},val:function(){return gx.fn.getDecimalValue("FACVTADETMUTIMP",".",",")},nac:gx.falseFn};this.declareDomainHdlr(68,function(){});n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"",grid:0};n[71]={id:71,fld:"",grid:0};n[72]={id:72,fld:"",grid:0};n[73]={id:73,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTADETMUTDETID",gxz:"Z2210FacVtaDetMutDetId",gxold:"O2210FacVtaDetMutDetId",gxvar:"A2210FacVtaDetMutDetId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2210FacVtaDetMutDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2210FacVtaDetMutDetId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTADETMUTDETID",gx.O.A2210FacVtaDetMutDetId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2210FacVtaDetMutDetId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTADETMUTDETID",".")},nac:gx.falseFn};n[74]={id:74,fld:"",grid:0};n[75]={id:75,fld:"",grid:0};n[76]={id:76,fld:"",grid:0};n[77]={id:77,fld:"",grid:0};n[78]={id:78,fld:"BTN_ENTER",grid:0,evt:"e113s165_client",std:"ENTER"};n[79]={id:79,fld:"",grid:0};n[80]={id:80,fld:"BTN_CANCEL",grid:0,evt:"e123s165_client"};n[81]={id:81,fld:"",grid:0};n[82]={id:82,fld:"BTN_DELETE",grid:0,evt:"e183s165_client",std:"DELETE"};this.A218FacVtaId=0;this.Z218FacVtaId=0;this.O218FacVtaId=0;this.A222FacVtaDetId=0;this.Z222FacVtaDetId=0;this.O222FacVtaDetId=0;this.A226FacVtaDetMutId=0;this.Z226FacVtaDetMutId=0;this.O226FacVtaDetMutId=0;this.A1829FacVtaDetMutPor=0;this.Z1829FacVtaDetMutPor=0;this.O1829FacVtaDetMutPor=0;this.A1830FacVtaDetMutCosto=0;this.Z1830FacVtaDetMutCosto=0;this.O1830FacVtaDetMutCosto=0;this.A1831FacVtaDetMutImpFin=0;this.Z1831FacVtaDetMutImpFin=0;this.O1831FacVtaDetMutImpFin=0;this.A1832FacVtaDetMutNeto=0;this.Z1832FacVtaDetMutNeto=0;this.O1832FacVtaDetMutNeto=0;this.A1833FacVtaDetMutIVA=0;this.Z1833FacVtaDetMutIVA=0;this.O1833FacVtaDetMutIVA=0;this.A1834FacVtaDetMutImp=0;this.Z1834FacVtaDetMutImp=0;this.O1834FacVtaDetMutImp=0;this.A2210FacVtaDetMutDetId=0;this.Z2210FacVtaDetMutDetId=0;this.O2210FacVtaDetMutDetId=0;this.A218FacVtaId=0;this.A222FacVtaDetId=0;this.A226FacVtaDetMutId=0;this.A1829FacVtaDetMutPor=0;this.A1830FacVtaDetMutCosto=0;this.A1831FacVtaDetMutImpFin=0;this.A1832FacVtaDetMutNeto=0;this.A1833FacVtaDetMutIVA=0;this.A1834FacVtaDetMutImp=0;this.A2210FacVtaDetMutDetId=0;this.Events={e113s165_client:["ENTER",!0],e123s165_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms.VALID_FACVTAID=[[],[]];this.EvtParms.VALID_FACVTADETID=[[{av:"A218FacVtaId",fld:"FACVTAID",pic:"ZZZZZZZZ9"},{av:"A222FacVtaDetId",fld:"FACVTADETID",pic:"ZZZ9"}],[]];this.EvtParms.VALID_FACVTADETMUTID=[[{av:"A218FacVtaId",fld:"FACVTAID",pic:"ZZZZZZZZ9"},{av:"A222FacVtaDetId",fld:"FACVTADETID",pic:"ZZZ9"},{av:"A226FacVtaDetMutId",fld:"FACVTADETMUTID",pic:"Z9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[{av:"A1829FacVtaDetMutPor",fld:"FACVTADETMUTPOR",pic:"999.99"},{av:"A1830FacVtaDetMutCosto",fld:"FACVTADETMUTCOSTO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1831FacVtaDetMutImpFin",fld:"FACVTADETMUTIMPFIN",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1832FacVtaDetMutNeto",fld:"FACVTADETMUTNETO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1833FacVtaDetMutIVA",fld:"FACVTADETMUTIVA",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1834FacVtaDetMutImp",fld:"FACVTADETMUTIMP",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2210FacVtaDetMutDetId",fld:"FACVTADETMUTDETID",pic:"ZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"Z218FacVtaId"},{av:"Z222FacVtaDetId"},{av:"Z226FacVtaDetMutId"},{av:"Z1829FacVtaDetMutPor"},{av:"Z1830FacVtaDetMutCosto"},{av:"Z1831FacVtaDetMutImpFin"},{av:"Z1832FacVtaDetMutNeto"},{av:"Z1833FacVtaDetMutIVA"},{av:"Z1834FacVtaDetMutImp"},{av:"Z2210FacVtaDetMutDetId"},{ctrl:"BTN_DELETE",prop:"Enabled"},{ctrl:"BTN_ENTER",prop:"Enabled"}]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.Initialize()});gx.wi(function(){gx.createParentObj(facturavtadetallemut)})