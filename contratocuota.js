/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:45:36.67
*/
gx.evt.autoSkip=!1;gx.define("contratocuota",!1,function(){var n,t;this.ServerClass="contratocuota";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7ContratoId=gx.fn.getIntegerValue("vCONTRATOID",".");this.AV8ContratoCuotaNro=gx.fn.getIntegerValue("vCONTRATOCUOTANRO",".");this.AV12Insert_CuentaId=gx.fn.getIntegerValue("vINSERT_CUENTAID",".");this.AV16Insert_CuentaMovId=gx.fn.getIntegerValue("vINSERT_CUENTAMOVID",".");this.AV19Pgmname=gx.fn.getControlValue("vPGMNAME");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV10TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Contratoid=function(){return this.validSrvEvt("Valid_Contratoid",0).then(function(n){return n}.closure(this))};this.Valid_Contratocuotanro=function(){return this.validCliEvt("Valid_Contratocuotanro",0,function(){try{var n=gx.util.balloon.getNew("CONTRATOCUOTANRO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Contratocuotafechavto=function(){return this.validCliEvt("Valid_Contratocuotafechavto",0,function(){try{var n=gx.util.balloon.getNew("CONTRATOCUOTAFECHAVTO");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.A2158ContratoCuotaFechaVto)==0||new gx.date.gxdate(this.A2158ContratoCuotaFechaVto).compare(gx.date.ymdtod(1753,01,01))>=0))try{n.setError("Campo Fecha Vto fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Cuentaid=function(){return this.validSrvEvt("Valid_Cuentaid",0).then(function(n){return n}.closure(this))};this.Valid_Cuentamovid=function(){return this.validSrvEvt("Valid_Cuentamovid",0).then(function(n){return n}.closure(this))};this.e124n2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e134n198_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e144n198_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71];this.GXLastCtrlId=71;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contratoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOID",gxz:"Z269ContratoId",gxold:"O269ContratoId",gxvar:"A269ContratoId",ucs:[],op:[],ip:[22],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A269ContratoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z269ContratoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONTRATOID",gx.O.A269ContratoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A269ContratoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONTRATOID",".")},nac:function(){return!(0==this.AV7ContratoId)}};this.declareDomainHdlr(22,function(){});n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contratocuotanro,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOCUOTANRO",gxz:"Z271ContratoCuotaNro",gxold:"O271ContratoCuotaNro",gxvar:"A271ContratoCuotaNro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A271ContratoCuotaNro=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z271ContratoCuotaNro=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONTRATOCUOTANRO",gx.O.A271ContratoCuotaNro,0)},c2v:function(){this.val()!==undefined&&(gx.O.A271ContratoCuotaNro=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONTRATOCUOTANRO",".")},nac:function(){return!(0==this.AV8ContratoCuotaNro)}};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Contratocuotafechavto,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOCUOTAFECHAVTO",gxz:"Z2158ContratoCuotaFechaVto",gxold:"O2158ContratoCuotaFechaVto",gxvar:"A2158ContratoCuotaFechaVto",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[31],ip:[31],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2158ContratoCuotaFechaVto=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2158ContratoCuotaFechaVto=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("CONTRATOCUOTAFECHAVTO",gx.O.A2158ContratoCuotaFechaVto,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2158ContratoCuotaFechaVto=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("CONTRATOCUOTAFECHAVTO")},nac:gx.falseFn};this.declareDomainHdlr(31,function(){});n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOCUOTACAPITAL",gxz:"Z2159ContratoCuotaCapital",gxold:"O2159ContratoCuotaCapital",gxvar:"A2159ContratoCuotaCapital",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2159ContratoCuotaCapital=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2159ContratoCuotaCapital=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("CONTRATOCUOTACAPITAL",gx.O.A2159ContratoCuotaCapital,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2159ContratoCuotaCapital=this.val())},val:function(){return gx.fn.getDecimalValue("CONTRATOCUOTACAPITAL",".",",")},nac:gx.falseFn};this.declareDomainHdlr(35,function(){});n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOCUOTAINTERES",gxz:"Z2160ContratoCuotaInteres",gxold:"O2160ContratoCuotaInteres",gxvar:"A2160ContratoCuotaInteres",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2160ContratoCuotaInteres=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2160ContratoCuotaInteres=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("CONTRATOCUOTAINTERES",gx.O.A2160ContratoCuotaInteres,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2160ContratoCuotaInteres=this.val())},val:function(){return gx.fn.getDecimalValue("CONTRATOCUOTAINTERES",".",",")},nac:gx.falseFn};this.declareDomainHdlr(40,function(){});n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOCUOTAIMPORTE",gxz:"Z2161ContratoCuotaImporte",gxold:"O2161ContratoCuotaImporte",gxvar:"A2161ContratoCuotaImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2161ContratoCuotaImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2161ContratoCuotaImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("CONTRATOCUOTAIMPORTE",gx.O.A2161ContratoCuotaImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2161ContratoCuotaImporte=this.val())},val:function(){return gx.fn.getDecimalValue("CONTRATOCUOTAIMPORTE",".",",")},nac:gx.falseFn};this.declareDomainHdlr(44,function(){});n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,lvl:0,type:"decimal",len:15,dec:10,sign:!1,pic:"ZZZ9.9999999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOCUOTACOEFCANCELACION",gxz:"Z2162ContratoCuotaCoefCancelacion",gxold:"O2162ContratoCuotaCoefCancelacion",gxvar:"A2162ContratoCuotaCoefCancelacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2162ContratoCuotaCoefCancelacion=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2162ContratoCuotaCoefCancelacion=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("CONTRATOCUOTACOEFCANCELACION",gx.O.A2162ContratoCuotaCoefCancelacion,10,",")},c2v:function(){this.val()!==undefined&&(gx.O.A2162ContratoCuotaCoefCancelacion=this.val())},val:function(){return gx.fn.getDecimalValue("CONTRATOCUOTACOEFCANCELACION",".",",")},nac:gx.falseFn};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cuentaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTAID",gxz:"Z88CuentaId",gxold:"O88CuentaId",gxvar:"A88CuentaId",ucs:[],op:[],ip:[53],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A88CuentaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z88CuentaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CUENTAID",gx.O.A88CuentaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A88CuentaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CUENTAID",".")},nac:function(){return this.Gx_mode=="INS"&&!(0==this.AV12Insert_CuentaId)}};n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cuentamovid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTAMOVID",gxz:"Z197CuentaMovId",gxold:"O197CuentaMovId",gxvar:"A197CuentaMovId",ucs:[],op:[],ip:[58,53],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A197CuentaMovId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z197CuentaMovId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CUENTAMOVID",gx.O.A197CuentaMovId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A197CuentaMovId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CUENTAMOVID",".")},nac:function(){return this.Gx_mode=="INS"&&!(0==this.AV16Insert_CuentaMovId)}};n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,fld:"BTNTRN_ENTER",grid:0,evt:"e134n198_client",std:"ENTER"};n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"BTNTRN_CANCEL",grid:0,evt:"e144n198_client"};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"",grid:0};n[68]={id:68,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[69]={id:69,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOCUOTA094",gxz:"Z2163ContratoCuota094",gxold:"O2163ContratoCuota094",gxvar:"A2163ContratoCuota094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2163ContratoCuota094=n)},v2z:function(n){n!==undefined&&(gx.O.Z2163ContratoCuota094=n)},v2c:function(){gx.fn.setControlValue("CONTRATOCUOTA094",gx.O.A2163ContratoCuota094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2163ContratoCuota094=this.val())},val:function(){return gx.fn.getControlValue("CONTRATOCUOTA094")},nac:gx.falseFn};this.declareDomainHdlr(69,function(){});n[70]={id:70,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONTRATOCUOTA095",gxz:"Z2164ContratoCuota095",gxold:"O2164ContratoCuota095",gxvar:"A2164ContratoCuota095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2164ContratoCuota095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2164ContratoCuota095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("CONTRATOCUOTA095",gx.O.A2164ContratoCuota095,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2164ContratoCuota095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("CONTRATOCUOTA095")},nac:gx.falseFn};n[71]={id:71,fld:"PROMPT_88",grid:198};this.A269ContratoId=0;this.Z269ContratoId=0;this.O269ContratoId=0;this.A271ContratoCuotaNro=0;this.Z271ContratoCuotaNro=0;this.O271ContratoCuotaNro=0;this.A2158ContratoCuotaFechaVto=gx.date.nullDate();this.Z2158ContratoCuotaFechaVto=gx.date.nullDate();this.O2158ContratoCuotaFechaVto=gx.date.nullDate();this.A2159ContratoCuotaCapital=0;this.Z2159ContratoCuotaCapital=0;this.O2159ContratoCuotaCapital=0;this.A2160ContratoCuotaInteres=0;this.Z2160ContratoCuotaInteres=0;this.O2160ContratoCuotaInteres=0;this.A2161ContratoCuotaImporte=0;this.Z2161ContratoCuotaImporte=0;this.O2161ContratoCuotaImporte=0;this.A2162ContratoCuotaCoefCancelacion=0;this.Z2162ContratoCuotaCoefCancelacion=0;this.O2162ContratoCuotaCoefCancelacion=0;this.A88CuentaId=0;this.Z88CuentaId=0;this.O88CuentaId=0;this.A197CuentaMovId=0;this.Z197CuentaMovId=0;this.O197CuentaMovId=0;this.A2163ContratoCuota094="";this.Z2163ContratoCuota094="";this.O2163ContratoCuota094="";this.A2164ContratoCuota095=gx.date.nullDate();this.Z2164ContratoCuota095=gx.date.nullDate();this.O2164ContratoCuota095=gx.date.nullDate();this.AV9WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV10TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV20GXV1=0;this.AV12Insert_CuentaId=0;this.AV16Insert_CuentaMovId=0;this.AV13TrnContextAtt={AttributeName:"",AttributeValue:""};this.AV7ContratoId=0;this.AV8ContratoCuotaNro=0;this.AV11WebSession={};this.A269ContratoId=0;this.A271ContratoCuotaNro=0;this.A88CuentaId=0;this.A197CuentaMovId=0;this.A2164ContratoCuota095=gx.date.nullDate();this.A2163ContratoCuota094="";this.AV19Pgmname="";this.A2158ContratoCuotaFechaVto=gx.date.nullDate();this.A2159ContratoCuotaCapital=0;this.A2160ContratoCuotaInteres=0;this.A2161ContratoCuotaImporte=0;this.A2162ContratoCuotaCoefCancelacion=0;this.Gx_mode="";this.Events={e124n2_client:["AFTER TRN",!0],e134n198_client:["ENTER",!0],e144n198_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7ContratoId",fld:"vCONTRATOID",pic:"ZZZZZZZ9",hsh:!0},{av:"AV8ContratoCuotaNro",fld:"vCONTRATOCUOTANRO",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV10TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV7ContratoId",fld:"vCONTRATOID",pic:"ZZZZZZZ9",hsh:!0},{av:"AV8ContratoCuotaNro",fld:"vCONTRATOCUOTANRO",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.START=[[{av:"AV19Pgmname",fld:"vPGMNAME",pic:""},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0}],[{av:"AV9WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV10TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV20GXV1",fld:"vGXV1",pic:"99999999"},{av:"AV13TrnContextAtt",fld:"vTRNCONTEXTATT",pic:""},{av:"AV12Insert_CuentaId",fld:"vINSERT_CUENTAID",pic:"ZZZZZZZ9"},{av:"AV16Insert_CuentaMovId",fld:"vINSERT_CUENTAMOVID",pic:"ZZZ9"},{av:'gx.fn.getCtrlProperty("CONTRATOCUOTA094","Visible")',ctrl:"CONTRATOCUOTA094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("CONTRATOCUOTA095","Visible")',ctrl:"CONTRATOCUOTA095",prop:"Visible"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV10TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0}],[]];this.EvtParms.VALID_CONTRATOID=[[{av:"A269ContratoId",fld:"CONTRATOID",pic:"ZZZZZZZ9"}],[]];this.EvtParms.VALID_CONTRATOCUOTANRO=[[],[]];this.EvtParms.VALID_CONTRATOCUOTAFECHAVTO=[[{av:"A2158ContratoCuotaFechaVto",fld:"CONTRATOCUOTAFECHAVTO",pic:""}],[{av:"A2158ContratoCuotaFechaVto",fld:"CONTRATOCUOTAFECHAVTO",pic:""}]];this.EvtParms.VALID_CUENTAID=[[{av:"A88CuentaId",fld:"CUENTAID",pic:"ZZZZZZZ9"}],[]];this.EvtParms.VALID_CUENTAMOVID=[[{av:"A88CuentaId",fld:"CUENTAID",pic:"ZZZZZZZ9"},{av:"A197CuentaMovId",fld:"CUENTAMOVID",pic:"ZZZ9"}],[]];this.setPrompt("PROMPT_88",[53]);this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV7ContratoId","vCONTRATOID",0,"int",8,0);this.setVCMap("AV8ContratoCuotaNro","vCONTRATOCUOTANRO",0,"int",4,0);this.setVCMap("AV12Insert_CuentaId","vINSERT_CUENTAID",0,"int",8,0);this.setVCMap("AV16Insert_CuentaMovId","vINSERT_CUENTAMOVID",0,"int",4,0);this.setVCMap("AV19Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV10TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);this.Initialize()});gx.wi(function(){gx.createParentObj(contratocuota)})