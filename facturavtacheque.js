/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:44:22.4
*/
gx.evt.autoSkip=!1;gx.define("facturavtacheque",!1,function(){this.ServerClass="facturavtacheque";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Facvtaid=function(){return this.validSrvEvt("Valid_Facvtaid",0).then(function(n){return n}.closure(this))};this.Valid_Chequeid=function(){return this.validSrvEvt("Valid_Chequeid",0).then(function(n){return n}.closure(this))};this.Valid_Facvtacheque095=function(){return this.validCliEvt("Valid_Facvtacheque095",0,function(){try{var n=gx.util.balloon.getNew("FACVTACHEQUE095");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.A1761FacVtaCheque095)==0||new gx.date.gxdate(this.A1761FacVtaCheque095).compare(gx.date.ymdhmstot(1753,01,01,00,00,00))>=0))try{n.setError("Campo Fac Vta Cheque095 fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e113n160_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e123n160_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72];this.GXLastCtrlId=72;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"TABLEMAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TITLE",format:0,grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"BTN_FIRST",grid:0,evt:"e133n160_client",std:"FIRST"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"BTN_PREVIOUS",grid:0,evt:"e143n160_client",std:"PREVIOUS"};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"BTN_NEXT",grid:0,evt:"e153n160_client",std:"NEXT"};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"BTN_LAST",grid:0,evt:"e163n160_client",std:"LAST"};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"BTN_SELECT",grid:0,evt:"e173n160_client",std:"SELECT"};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Facvtaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTAID",gxz:"Z218FacVtaId",gxold:"O218FacVtaId",gxvar:"A218FacVtaId",ucs:[],op:[],ip:[28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A218FacVtaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z218FacVtaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTAID",gx.O.A218FacVtaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A218FacVtaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTAID",".")},nac:gx.falseFn};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Chequeid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEID",gxz:"Z51ChequeId",gxold:"O51ChequeId",gxvar:"A51ChequeId",ucs:[],op:[63,58,53,48,43,38],ip:[63,58,53,48,43,38,33,28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A51ChequeId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z51ChequeId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CHEQUEID",gx.O.A51ChequeId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A51ChequeId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CHEQUEID",".")},nac:gx.falseFn};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACHEQUEIMPORTEORI",gxz:"Z1757FacVtaChequeImporteOri",gxold:"O1757FacVtaChequeImporteOri",gxvar:"A1757FacVtaChequeImporteOri",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1757FacVtaChequeImporteOri=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1757FacVtaChequeImporteOri=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("FACVTACHEQUEIMPORTEORI",gx.O.A1757FacVtaChequeImporteOri,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1757FacVtaChequeImporteOri=this.val())},val:function(){return gx.fn.getDecimalValue("FACVTACHEQUEIMPORTEORI",".",",")},nac:gx.falseFn};this.declareDomainHdlr(38,function(){});n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,lvl:0,type:"decimal",len:5,dec:2,sign:!1,pic:"99.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACHEQUECOSTO",gxz:"Z1758FacVtaChequeCosto",gxold:"O1758FacVtaChequeCosto",gxvar:"A1758FacVtaChequeCosto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1758FacVtaChequeCosto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1758FacVtaChequeCosto=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("FACVTACHEQUECOSTO",gx.O.A1758FacVtaChequeCosto,2,",")},c2v:function(){this.val()!==undefined&&(gx.O.A1758FacVtaChequeCosto=this.val())},val:function(){return gx.fn.getDecimalValue("FACVTACHEQUECOSTO",".",",")},nac:gx.falseFn};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACHEQUEPORCENTAJEFIN",gxz:"Z2585FacVtaChequePorcentajeFin",gxold:"O2585FacVtaChequePorcentajeFin",gxvar:"A2585FacVtaChequePorcentajeFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2585FacVtaChequePorcentajeFin=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2585FacVtaChequePorcentajeFin=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("FACVTACHEQUEPORCENTAJEFIN",gx.O.A2585FacVtaChequePorcentajeFin,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2585FacVtaChequePorcentajeFin=this.val())},val:function(){return gx.fn.getDecimalValue("FACVTACHEQUEPORCENTAJEFIN",".",",")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACHEQUEIMPORTE",gxz:"Z1759FacVtaChequeImporte",gxold:"O1759FacVtaChequeImporte",gxvar:"A1759FacVtaChequeImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1759FacVtaChequeImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1759FacVtaChequeImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("FACVTACHEQUEIMPORTE",gx.O.A1759FacVtaChequeImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1759FacVtaChequeImporte=this.val())},val:function(){return gx.fn.getDecimalValue("FACVTACHEQUEIMPORTE",".",",")},nac:gx.falseFn};this.declareDomainHdlr(53,function(){});n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACHEQUE094",gxz:"Z1760FacVtaCheque094",gxold:"O1760FacVtaCheque094",gxvar:"A1760FacVtaCheque094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1760FacVtaCheque094=n)},v2z:function(n){n!==undefined&&(gx.O.Z1760FacVtaCheque094=n)},v2c:function(){gx.fn.setControlValue("FACVTACHEQUE094",gx.O.A1760FacVtaCheque094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1760FacVtaCheque094=this.val())},val:function(){return gx.fn.getControlValue("FACVTACHEQUE094")},nac:gx.falseFn};this.declareDomainHdlr(58,function(){});n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Facvtacheque095,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACHEQUE095",gxz:"Z1761FacVtaCheque095",gxold:"O1761FacVtaCheque095",gxvar:"A1761FacVtaCheque095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[63],ip:[63],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1761FacVtaCheque095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1761FacVtaCheque095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("FACVTACHEQUE095",gx.O.A1761FacVtaCheque095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1761FacVtaCheque095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("FACVTACHEQUE095")},nac:gx.falseFn};this.declareDomainHdlr(63,function(){});n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"",grid:0};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"",grid:0};n[68]={id:68,fld:"BTN_ENTER",grid:0,evt:"e113n160_client",std:"ENTER"};n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"BTN_CANCEL",grid:0,evt:"e123n160_client"};n[71]={id:71,fld:"",grid:0};n[72]={id:72,fld:"BTN_DELETE",grid:0,evt:"e183n160_client",std:"DELETE"};this.A218FacVtaId=0;this.Z218FacVtaId=0;this.O218FacVtaId=0;this.A51ChequeId=0;this.Z51ChequeId=0;this.O51ChequeId=0;this.A1757FacVtaChequeImporteOri=0;this.Z1757FacVtaChequeImporteOri=0;this.O1757FacVtaChequeImporteOri=0;this.A1758FacVtaChequeCosto=0;this.Z1758FacVtaChequeCosto=0;this.O1758FacVtaChequeCosto=0;this.A2585FacVtaChequePorcentajeFin=0;this.Z2585FacVtaChequePorcentajeFin=0;this.O2585FacVtaChequePorcentajeFin=0;this.A1759FacVtaChequeImporte=0;this.Z1759FacVtaChequeImporte=0;this.O1759FacVtaChequeImporte=0;this.A1760FacVtaCheque094="";this.Z1760FacVtaCheque094="";this.O1760FacVtaCheque094="";this.A1761FacVtaCheque095=gx.date.nullDate();this.Z1761FacVtaCheque095=gx.date.nullDate();this.O1761FacVtaCheque095=gx.date.nullDate();this.A218FacVtaId=0;this.A51ChequeId=0;this.A1757FacVtaChequeImporteOri=0;this.A1758FacVtaChequeCosto=0;this.A2585FacVtaChequePorcentajeFin=0;this.A1759FacVtaChequeImporte=0;this.A1760FacVtaCheque094="";this.A1761FacVtaCheque095=gx.date.nullDate();this.Events={e113n160_client:["ENTER",!0],e123n160_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms.VALID_FACVTAID=[[{av:"A218FacVtaId",fld:"FACVTAID",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.VALID_CHEQUEID=[[{av:"A218FacVtaId",fld:"FACVTAID",pic:"ZZZZZZZZ9"},{av:"A51ChequeId",fld:"CHEQUEID",pic:"ZZZZZZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[{av:"A1757FacVtaChequeImporteOri",fld:"FACVTACHEQUEIMPORTEORI",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1758FacVtaChequeCosto",fld:"FACVTACHEQUECOSTO",pic:"99.99"},{av:"A2585FacVtaChequePorcentajeFin",fld:"FACVTACHEQUEPORCENTAJEFIN",pic:"999.99"},{av:"A1759FacVtaChequeImporte",fld:"FACVTACHEQUEIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1760FacVtaCheque094",fld:"FACVTACHEQUE094",pic:""},{av:"A1761FacVtaCheque095",fld:"FACVTACHEQUE095",pic:"99/99/99 99:99"},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"Z218FacVtaId"},{av:"Z51ChequeId"},{av:"Z1757FacVtaChequeImporteOri"},{av:"Z1758FacVtaChequeCosto"},{av:"Z2585FacVtaChequePorcentajeFin"},{av:"Z1759FacVtaChequeImporte"},{av:"Z1760FacVtaCheque094"},{av:"Z1761FacVtaCheque095"},{ctrl:"BTN_DELETE",prop:"Enabled"},{ctrl:"BTN_ENTER",prop:"Enabled"}]];this.EvtParms.VALID_FACVTACHEQUE095=[[{av:"A1761FacVtaCheque095",fld:"FACVTACHEQUE095",pic:"99/99/99 99:99"}],[{av:"A1761FacVtaCheque095",fld:"FACVTACHEQUE095",pic:"99/99/99 99:99"}]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.Initialize()});gx.wi(function(){gx.createParentObj(facturavtacheque)})