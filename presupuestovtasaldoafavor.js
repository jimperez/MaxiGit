/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:45:48.27
*/
gx.evt.autoSkip=!1;gx.define("presupuestovtasaldoafavor",!1,function(){this.ServerClass="presupuestovtasaldoafavor";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Preid=function(){return this.validSrvEvt("Valid_Preid",0).then(function(n){return n}.closure(this))};this.Valid_Presdofavdetid=function(){return this.validSrvEvt("Valid_Presdofavdetid",0).then(function(n){return n}.closure(this))};this.Valid_Saldoafavorid=function(){return this.validSrvEvt("Valid_Saldoafavorid",0).then(function(n){return n}.closure(this))};this.Valid_Presdofav095=function(){return this.validCliEvt("Valid_Presdofav095",0,function(){try{var n=gx.util.balloon.getNew("PRESDOFAV095");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.A2394PreSdoFav095)==0||new gx.date.gxdate(this.A2394PreSdoFav095).compare(gx.date.ymdhmstot(1753,01,01,00,00,00))>=0))try{n.setError("Campo Pre Sdo Fav095 fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e1152220_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e1252220_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67];this.GXLastCtrlId=67;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"TABLEMAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TITLE",format:0,grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"BTN_FIRST",grid:0,evt:"e1352220_client",std:"FIRST"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"BTN_PREVIOUS",grid:0,evt:"e1452220_client",std:"PREVIOUS"};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"BTN_NEXT",grid:0,evt:"e1552220_client",std:"NEXT"};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"BTN_LAST",grid:0,evt:"e1652220_client",std:"LAST"};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"BTN_SELECT",grid:0,evt:"e1752220_client",std:"SELECT"};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Preid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREID",gxz:"Z89PreId",gxold:"O89PreId",gxvar:"A89PreId",ucs:[],op:[],ip:[28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A89PreId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z89PreId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREID",gx.O.A89PreId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A89PreId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREID",".")},nac:gx.falseFn};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Presdofavdetid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRESDOFAVDETID",gxz:"Z297PreSdoFavDetId",gxold:"O297PreSdoFavDetId",gxvar:"A297PreSdoFavDetId",ucs:[],op:[38,58,53,48],ip:[38,58,53,48,33,28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A297PreSdoFavDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z297PreSdoFavDetId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PRESDOFAVDETID",gx.O.A297PreSdoFavDetId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A297PreSdoFavDetId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PRESDOFAVDETID",".")},nac:gx.falseFn};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saldoafavorid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SALDOAFAVORID",gxz:"Z296SaldoAFavorId",gxold:"O296SaldoAFavorId",gxvar:"A296SaldoAFavorId",ucs:[],op:[43],ip:[43,38],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A296SaldoAFavorId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z296SaldoAFavorId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("SALDOAFAVORID",gx.O.A296SaldoAFavorId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A296SaldoAFavorId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("SALDOAFAVORID",".")},nac:gx.falseFn};this.declareDomainHdlr(38,function(){});n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SALDOAFAVORIMPORTE",gxz:"Z2386SaldoAFavorImporte",gxold:"O2386SaldoAFavorImporte",gxvar:"A2386SaldoAFavorImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2386SaldoAFavorImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2386SaldoAFavorImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("SALDOAFAVORIMPORTE",gx.O.A2386SaldoAFavorImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2386SaldoAFavorImporte=this.val())},val:function(){return gx.fn.getDecimalValue("SALDOAFAVORIMPORTE",".",",")},nac:gx.falseFn};this.declareDomainHdlr(43,function(){});n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRESDOFAVIMPORTE",gxz:"Z2392PreSdoFavImporte",gxold:"O2392PreSdoFavImporte",gxvar:"A2392PreSdoFavImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2392PreSdoFavImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2392PreSdoFavImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PRESDOFAVIMPORTE",gx.O.A2392PreSdoFavImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2392PreSdoFavImporte=this.val())},val:function(){return gx.fn.getDecimalValue("PRESDOFAVIMPORTE",".",",")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRESDOFAV094",gxz:"Z2393PreSdoFav094",gxold:"O2393PreSdoFav094",gxvar:"A2393PreSdoFav094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2393PreSdoFav094=n)},v2z:function(n){n!==undefined&&(gx.O.Z2393PreSdoFav094=n)},v2c:function(){gx.fn.setControlValue("PRESDOFAV094",gx.O.A2393PreSdoFav094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2393PreSdoFav094=this.val())},val:function(){return gx.fn.getControlValue("PRESDOFAV094")},nac:gx.falseFn};this.declareDomainHdlr(53,function(){});n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Presdofav095,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRESDOFAV095",gxz:"Z2394PreSdoFav095",gxold:"O2394PreSdoFav095",gxvar:"A2394PreSdoFav095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[58],ip:[58],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2394PreSdoFav095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2394PreSdoFav095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PRESDOFAV095",gx.O.A2394PreSdoFav095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2394PreSdoFav095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("PRESDOFAV095")},nac:gx.falseFn};this.declareDomainHdlr(58,function(){});n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,fld:"BTN_ENTER",grid:0,evt:"e1152220_client",std:"ENTER"};n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"BTN_CANCEL",grid:0,evt:"e1252220_client"};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"BTN_DELETE",grid:0,evt:"e1852220_client",std:"DELETE"};this.A89PreId=0;this.Z89PreId=0;this.O89PreId=0;this.A297PreSdoFavDetId=0;this.Z297PreSdoFavDetId=0;this.O297PreSdoFavDetId=0;this.A296SaldoAFavorId=0;this.Z296SaldoAFavorId=0;this.O296SaldoAFavorId=0;this.A2386SaldoAFavorImporte=0;this.Z2386SaldoAFavorImporte=0;this.O2386SaldoAFavorImporte=0;this.A2392PreSdoFavImporte=0;this.Z2392PreSdoFavImporte=0;this.O2392PreSdoFavImporte=0;this.A2393PreSdoFav094="";this.Z2393PreSdoFav094="";this.O2393PreSdoFav094="";this.A2394PreSdoFav095=gx.date.nullDate();this.Z2394PreSdoFav095=gx.date.nullDate();this.O2394PreSdoFav095=gx.date.nullDate();this.A89PreId=0;this.A297PreSdoFavDetId=0;this.A296SaldoAFavorId=0;this.A2386SaldoAFavorImporte=0;this.A2392PreSdoFavImporte=0;this.A2393PreSdoFav094="";this.A2394PreSdoFav095=gx.date.nullDate();this.Events={e1152220_client:["ENTER",!0],e1252220_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms.VALID_PREID=[[{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.VALID_PRESDOFAVDETID=[[{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"A297PreSdoFavDetId",fld:"PRESDOFAVDETID",pic:"ZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[{av:"A296SaldoAFavorId",fld:"SALDOAFAVORID",pic:"ZZZZZZZ9"},{av:"A2392PreSdoFavImporte",fld:"PRESDOFAVIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2393PreSdoFav094",fld:"PRESDOFAV094",pic:""},{av:"A2394PreSdoFav095",fld:"PRESDOFAV095",pic:"99/99/99 99:99"},{av:"A2386SaldoAFavorImporte",fld:"SALDOAFAVORIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"Z89PreId"},{av:"Z297PreSdoFavDetId"},{av:"Z296SaldoAFavorId"},{av:"Z2392PreSdoFavImporte"},{av:"Z2393PreSdoFav094"},{av:"Z2394PreSdoFav095"},{av:"Z2386SaldoAFavorImporte"},{ctrl:"BTN_DELETE",prop:"Enabled"},{ctrl:"BTN_ENTER",prop:"Enabled"}]];this.EvtParms.VALID_SALDOAFAVORID=[[{av:"A296SaldoAFavorId",fld:"SALDOAFAVORID",pic:"ZZZZZZZ9"},{av:"A2386SaldoAFavorImporte",fld:"SALDOAFAVORIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"A2386SaldoAFavorImporte",fld:"SALDOAFAVORIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}]];this.EvtParms.VALID_PRESDOFAV095=[[{av:"A2394PreSdoFav095",fld:"PRESDOFAV095",pic:"99/99/99 99:99"}],[{av:"A2394PreSdoFav095",fld:"PRESDOFAV095",pic:"99/99/99 99:99"}]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.Initialize()});gx.wi(function(){gx.createParentObj(presupuestovtasaldoafavor)})