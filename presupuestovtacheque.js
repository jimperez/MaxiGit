/*!   GeneXus C# 16_0_5-135614 on 10/21/2019 11:43:18.32
*/
gx.evt.autoSkip=!1;gx.define("presupuestovtacheque",!1,function(){this.ServerClass="presupuestovtacheque";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Preid=function(){return this.validSrvEvt("Valid_Preid",0).then(function(n){return n}.closure(this))};this.Valid_Chequeid=function(){return this.validSrvEvt("Valid_Chequeid",0).then(function(n){return n}.closure(this))};this.Valid_Precheque095=function(){return this.validCliEvt("Valid_Precheque095",0,function(){try{var n=gx.util.balloon.getNew("PRECHEQUE095");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.A1349PreCheque095)==0||new gx.date.gxdate(this.A1349PreCheque095).compare(gx.date.ymdhmstot(1753,01,01,00,00,00))>=0))try{n.setError("Campo Pre Cheque095 fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e1138146_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e1238146_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72];this.GXLastCtrlId=72;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"TABLEMAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TITLE",format:0,grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"BTN_FIRST",grid:0,evt:"e1338146_client",std:"FIRST"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"BTN_PREVIOUS",grid:0,evt:"e1438146_client",std:"PREVIOUS"};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"BTN_NEXT",grid:0,evt:"e1538146_client",std:"NEXT"};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"BTN_LAST",grid:0,evt:"e1638146_client",std:"LAST"};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"BTN_SELECT",grid:0,evt:"e1738146_client",std:"SELECT"};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Preid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREID",gxz:"Z89PreId",gxold:"O89PreId",gxvar:"A89PreId",ucs:[],op:[],ip:[28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A89PreId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z89PreId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREID",gx.O.A89PreId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A89PreId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREID",".")},nac:gx.falseFn};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Chequeid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEID",gxz:"Z51ChequeId",gxold:"O51ChequeId",gxvar:"A51ChequeId",ucs:[],op:[63,58,53,48,43,38],ip:[63,58,53,48,43,38,33,28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A51ChequeId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z51ChequeId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CHEQUEID",gx.O.A51ChequeId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A51ChequeId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CHEQUEID",".")},nac:gx.falseFn};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRECHEQUENETO",gxz:"Z1345PreChequeNeto",gxold:"O1345PreChequeNeto",gxvar:"A1345PreChequeNeto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1345PreChequeNeto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1345PreChequeNeto=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PRECHEQUENETO",gx.O.A1345PreChequeNeto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1345PreChequeNeto=this.val())},val:function(){return gx.fn.getDecimalValue("PRECHEQUENETO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(38,function(){});n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRECHEQUECOSTO",gxz:"Z1346PreChequeCosto",gxold:"O1346PreChequeCosto",gxvar:"A1346PreChequeCosto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1346PreChequeCosto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1346PreChequeCosto=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PRECHEQUECOSTO",gx.O.A1346PreChequeCosto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1346PreChequeCosto=this.val())},val:function(){return gx.fn.getDecimalValue("PRECHEQUECOSTO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(43,function(){});n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRECHEQUEPORCENTAJEFIN",gxz:"Z2582PreChequePorcentajeFin",gxold:"O2582PreChequePorcentajeFin",gxvar:"A2582PreChequePorcentajeFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2582PreChequePorcentajeFin=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2582PreChequePorcentajeFin=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PRECHEQUEPORCENTAJEFIN",gx.O.A2582PreChequePorcentajeFin,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2582PreChequePorcentajeFin=this.val())},val:function(){return gx.fn.getDecimalValue("PRECHEQUEPORCENTAJEFIN",".",",")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRECHEQUEIMPORTE",gxz:"Z1347PreChequeImporte",gxold:"O1347PreChequeImporte",gxvar:"A1347PreChequeImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1347PreChequeImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1347PreChequeImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PRECHEQUEIMPORTE",gx.O.A1347PreChequeImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1347PreChequeImporte=this.val())},val:function(){return gx.fn.getDecimalValue("PRECHEQUEIMPORTE",".",",")},nac:gx.falseFn};this.declareDomainHdlr(53,function(){});n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRECHEQUE094",gxz:"Z1348PreCheque094",gxold:"O1348PreCheque094",gxvar:"A1348PreCheque094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1348PreCheque094=n)},v2z:function(n){n!==undefined&&(gx.O.Z1348PreCheque094=n)},v2c:function(){gx.fn.setControlValue("PRECHEQUE094",gx.O.A1348PreCheque094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1348PreCheque094=this.val())},val:function(){return gx.fn.getControlValue("PRECHEQUE094")},nac:gx.falseFn};this.declareDomainHdlr(58,function(){});n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Precheque095,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PRECHEQUE095",gxz:"Z1349PreCheque095",gxold:"O1349PreCheque095",gxvar:"A1349PreCheque095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[63],ip:[63],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1349PreCheque095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1349PreCheque095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PRECHEQUE095",gx.O.A1349PreCheque095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1349PreCheque095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("PRECHEQUE095")},nac:gx.falseFn};this.declareDomainHdlr(63,function(){});n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"",grid:0};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"",grid:0};n[68]={id:68,fld:"BTN_ENTER",grid:0,evt:"e1138146_client",std:"ENTER"};n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"BTN_CANCEL",grid:0,evt:"e1238146_client"};n[71]={id:71,fld:"",grid:0};n[72]={id:72,fld:"BTN_DELETE",grid:0,evt:"e1838146_client",std:"DELETE"};this.A89PreId=0;this.Z89PreId=0;this.O89PreId=0;this.A51ChequeId=0;this.Z51ChequeId=0;this.O51ChequeId=0;this.A1345PreChequeNeto=0;this.Z1345PreChequeNeto=0;this.O1345PreChequeNeto=0;this.A1346PreChequeCosto=0;this.Z1346PreChequeCosto=0;this.O1346PreChequeCosto=0;this.A2582PreChequePorcentajeFin=0;this.Z2582PreChequePorcentajeFin=0;this.O2582PreChequePorcentajeFin=0;this.A1347PreChequeImporte=0;this.Z1347PreChequeImporte=0;this.O1347PreChequeImporte=0;this.A1348PreCheque094="";this.Z1348PreCheque094="";this.O1348PreCheque094="";this.A1349PreCheque095=gx.date.nullDate();this.Z1349PreCheque095=gx.date.nullDate();this.O1349PreCheque095=gx.date.nullDate();this.A89PreId=0;this.A51ChequeId=0;this.A1345PreChequeNeto=0;this.A1346PreChequeCosto=0;this.A2582PreChequePorcentajeFin=0;this.A1347PreChequeImporte=0;this.A1348PreCheque094="";this.A1349PreCheque095=gx.date.nullDate();this.Events={e1138146_client:["ENTER",!0],e1238146_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms.VALID_PREID=[[{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.VALID_CHEQUEID=[[{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"A51ChequeId",fld:"CHEQUEID",pic:"ZZZZZZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[{av:"A1345PreChequeNeto",fld:"PRECHEQUENETO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1346PreChequeCosto",fld:"PRECHEQUECOSTO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2582PreChequePorcentajeFin",fld:"PRECHEQUEPORCENTAJEFIN",pic:"999.99"},{av:"A1347PreChequeImporte",fld:"PRECHEQUEIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1348PreCheque094",fld:"PRECHEQUE094",pic:""},{av:"A1349PreCheque095",fld:"PRECHEQUE095",pic:"99/99/99 99:99"},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"Z89PreId"},{av:"Z51ChequeId"},{av:"Z1345PreChequeNeto"},{av:"Z1346PreChequeCosto"},{av:"Z2582PreChequePorcentajeFin"},{av:"Z1347PreChequeImporte"},{av:"Z1348PreCheque094"},{av:"Z1349PreCheque095"},{ctrl:"BTN_DELETE",prop:"Enabled"},{ctrl:"BTN_ENTER",prop:"Enabled"}]];this.EvtParms.VALID_PRECHEQUE095=[[{av:"A1349PreCheque095",fld:"PRECHEQUE095",pic:"99/99/99 99:99"}],[{av:"A1349PreCheque095",fld:"PRECHEQUE095",pic:"99/99/99 99:99"}]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.Initialize()});gx.wi(function(){gx.createParentObj(presupuestovtacheque)})