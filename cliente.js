/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:40:56.0
*/
gx.evt.autoSkip=!1;gx.define("cliente",!1,function(){var n,t;this.ServerClass="cliente";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7ClienteId=gx.fn.getIntegerValue("vCLIENTEID",".");this.AV18Insert_ClienteIVCID=gx.fn.getIntegerValue("vINSERT_CLIENTEIVCID",".");this.A1152Cliente095=gx.fn.getDateTimeValue("CLIENTE095");this.A1151Cliente094=gx.fn.getControlValue("CLIENTE094");this.A1154Cliente098=gx.fn.getDateTimeValue("CLIENTE098");this.A1153Cliente097=gx.fn.getControlValue("CLIENTE097");this.AV19Pgmname=gx.fn.getControlValue("vPGMNAME");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV9TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Clienteid=function(){return this.validSrvEvt("Valid_Clienteid",0).then(function(n){return n}.closure(this))};this.Valid_Clientetipo=function(){return this.validCliEvt("Valid_Clientetipo",0,function(){try{var n=gx.util.balloon.getNew("CLIENTETIPO");this.AnyError=0;this.refreshOutputs([{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Clientedenominacion=function(){return this.validCliEvt("Valid_Clientedenominacion",0,function(){try{var n=gx.util.balloon.getNew("CLIENTEDENOMINACION");this.AnyError=0;this.refreshOutputs([{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Clientesaldo=function(){return this.validCliEvt("Valid_Clientesaldo",0,function(){try{var n=gx.util.balloon.getNew("CLIENTESALDO");this.AnyError=0;this.refreshOutputs([{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Clientelimite=function(){return this.validCliEvt("Valid_Clientelimite",0,function(){try{var n=gx.util.balloon.getNew("CLIENTELIMITE");this.AnyError=0;try{this.A2545ClienteLimiteDisponible=this.A2544ClienteLimite-this.A2543ClienteSaldo}catch(t){}this.refreshOutputs([{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Clienteivcid=function(){return this.validSrvEvt("Valid_Clienteivcid",0).then(function(n){return n}.closure(this))};this.e120k2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e130k38_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e140k38_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96];this.GXLastCtrlId=96;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Clienteid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEID",gxz:"Z53ClienteId",gxold:"O53ClienteId",gxvar:"A53ClienteId",ucs:[],op:[91,35,89,58,44,49,53,62,90,40,31,26],ip:[91,35,89,58,44,49,53,62,90,40,26,31,22],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A53ClienteId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z53ClienteId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CLIENTEID",gx.O.A53ClienteId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A53ClienteId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CLIENTEID",".")},nac:function(){return!(0==this.AV7ClienteId)}};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Clientetipo,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTETIPO",gxz:"Z1158ClienteTipo",gxold:"O1158ClienteTipo",gxvar:"A1158ClienteTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A1158ClienteTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z1158ClienteTipo=n)},v2c:function(){gx.fn.setComboBoxValue("CLIENTETIPO",gx.O.A1158ClienteTipo);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1158ClienteTipo=this.val())},val:function(){return gx.fn.getControlValue("CLIENTETIPO")},nac:gx.falseFn};this.declareDomainHdlr(26,function(){});n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Clientedenominacion,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEDENOMINACION",gxz:"Z1156ClienteDenominacion",gxold:"O1156ClienteDenominacion",gxvar:"A1156ClienteDenominacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1156ClienteDenominacion=n)},v2z:function(n){n!==undefined&&(gx.O.Z1156ClienteDenominacion=n)},v2c:function(){gx.fn.setControlValue("CLIENTEDENOMINACION",gx.O.A1156ClienteDenominacion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1156ClienteDenominacion=this.val())},val:function(){return gx.fn.getControlValue("CLIENTEDENOMINACION")},nac:gx.falseFn};this.declareDomainHdlr(31,function(){});n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTENRODOCUMENTO",gxz:"Z1935ClienteNroDocumento",gxold:"O1935ClienteNroDocumento",gxvar:"A1935ClienteNroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1935ClienteNroDocumento=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1935ClienteNroDocumento=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CLIENTENRODOCUMENTO",gx.O.A1935ClienteNroDocumento,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1935ClienteNroDocumento=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CLIENTENRODOCUMENTO",".")},nac:gx.falseFn};this.declareDomainHdlr(35,function(){});n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEESTADO",gxz:"Z1157ClienteEstado",gxold:"O1157ClienteEstado",gxvar:"A1157ClienteEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A1157ClienteEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z1157ClienteEstado=n)},v2c:function(){gx.fn.setComboBoxValue("CLIENTEESTADO",gx.O.A1157ClienteEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1157ClienteEstado=this.val())},val:function(){return gx.fn.getControlValue("CLIENTEESTADO")},nac:gx.falseFn};this.declareDomainHdlr(40,function(){});n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTECUENTAID",gxz:"Z3010ClienteCuentaId",gxold:"O3010ClienteCuentaId",gxvar:"A3010ClienteCuentaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3010ClienteCuentaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3010ClienteCuentaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CLIENTECUENTAID",gx.O.A3010ClienteCuentaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3010ClienteCuentaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CLIENTECUENTAID",".")},nac:gx.falseFn};this.declareDomainHdlr(44,function(){});n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEDEBITOS",gxz:"Z3014ClienteDebitos",gxold:"O3014ClienteDebitos",gxvar:"A3014ClienteDebitos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3014ClienteDebitos=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z3014ClienteDebitos=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("CLIENTEDEBITOS",gx.O.A3014ClienteDebitos,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3014ClienteDebitos=this.val())},val:function(){return gx.fn.getDecimalValue("CLIENTEDEBITOS",".",",")},nac:gx.falseFn};this.declareDomainHdlr(49,function(){});n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTECREDITOS",gxz:"Z3015ClienteCreditos",gxold:"O3015ClienteCreditos",gxvar:"A3015ClienteCreditos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3015ClienteCreditos=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z3015ClienteCreditos=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("CLIENTECREDITOS",gx.O.A3015ClienteCreditos,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3015ClienteCreditos=this.val())},val:function(){return gx.fn.getDecimalValue("CLIENTECREDITOS",".",",")},nac:gx.falseFn};this.declareDomainHdlr(53,function(){});n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Clientesaldo,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTESALDO",gxz:"Z2543ClienteSaldo",gxold:"O2543ClienteSaldo",gxvar:"A2543ClienteSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2543ClienteSaldo=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2543ClienteSaldo=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("CLIENTESALDO",gx.O.A2543ClienteSaldo,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2543ClienteSaldo=this.val())},val:function(){return gx.fn.getDecimalValue("CLIENTESALDO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(58,function(){});n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTESALDOVENCIDO",gxz:"Z3023ClienteSaldoVencido",gxold:"O3023ClienteSaldoVencido",gxvar:"A3023ClienteSaldoVencido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3023ClienteSaldoVencido=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z3023ClienteSaldoVencido=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("CLIENTESALDOVENCIDO",gx.O.A3023ClienteSaldoVencido,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3023ClienteSaldoVencido=this.val())},val:function(){return gx.fn.getDecimalValue("CLIENTESALDOVENCIDO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(62,function(){});n[63]={id:63,fld:"",grid:0};n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"",grid:0};n[66]={id:66,fld:"",grid:0};n[67]={id:67,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Clientelimite,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTELIMITE",gxz:"Z2544ClienteLimite",gxold:"O2544ClienteLimite",gxvar:"A2544ClienteLimite",ucs:[],op:[71],ip:[71,58,67],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2544ClienteLimite=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2544ClienteLimite=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("CLIENTELIMITE",gx.O.A2544ClienteLimite,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2544ClienteLimite=this.val())},val:function(){return gx.fn.getDecimalValue("CLIENTELIMITE",".",",")},nac:gx.falseFn};this.declareDomainHdlr(67,function(){});n[68]={id:68,fld:"",grid:0};n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"",grid:0};n[71]={id:71,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTELIMITEDISPONIBLE",gxz:"Z2545ClienteLimiteDisponible",gxold:"O2545ClienteLimiteDisponible",gxvar:"A2545ClienteLimiteDisponible",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2545ClienteLimiteDisponible=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2545ClienteLimiteDisponible=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("CLIENTELIMITEDISPONIBLE",gx.O.A2545ClienteLimiteDisponible,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2545ClienteLimiteDisponible=this.val())},val:function(){return gx.fn.getDecimalValue("CLIENTELIMITEDISPONIBLE",".",",")},nac:gx.falseFn};this.declareDomainHdlr(71,function(){});n[72]={id:72,fld:"",grid:0};n[73]={id:73,fld:"",grid:0};n[74]={id:74,fld:"",grid:0};n[75]={id:75,fld:"",grid:0};n[76]={id:76,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Clienteivcid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEIVCID",gxz:"Z3165ClienteIVCID",gxold:"O3165ClienteIVCID",gxvar:"A3165ClienteIVCID",ucs:[],op:[95,94,93,92],ip:[95,94,93,92,76],nacdep:[],ctrltype:"dyncombo",v2v:function(n){n!==undefined&&(gx.O.A3165ClienteIVCID=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3165ClienteIVCID=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("CLIENTEIVCID",gx.O.A3165ClienteIVCID);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3165ClienteIVCID=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CLIENTEIVCID",".")},nac:function(){return this.Gx_mode=="INS"&&!(0==this.AV18Insert_ClienteIVCID)}};this.declareDomainHdlr(76,function(){});n[77]={id:77,fld:"",grid:0};n[78]={id:78,fld:"",grid:0};n[79]={id:79,fld:"",grid:0};n[80]={id:80,fld:"",grid:0};n[81]={id:81,fld:"BTNTRN_ENTER",grid:0,evt:"e130k38_client",std:"ENTER"};n[82]={id:82,fld:"",grid:0};n[83]={id:83,fld:"BTNTRN_CANCEL",grid:0,evt:"e140k38_client"};n[84]={id:84,fld:"",grid:0};n[85]={id:85,fld:"BTNTRN_DELETE",grid:0,evt:"e150k38_client",std:"DELETE"};n[86]={id:86,fld:"",grid:0};n[87]={id:87,fld:"",grid:0};n[88]={id:88,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[89]={id:89,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEDENOMINACIONCOMPLETA",gxz:"Z2542ClienteDenominacionCompleta",gxold:"O2542ClienteDenominacionCompleta",gxvar:"A2542ClienteDenominacionCompleta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2542ClienteDenominacionCompleta=n)},v2z:function(n){n!==undefined&&(gx.O.Z2542ClienteDenominacionCompleta=n)},v2c:function(){gx.fn.setControlValue("CLIENTEDENOMINACIONCOMPLETA",gx.O.A2542ClienteDenominacionCompleta,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2542ClienteDenominacionCompleta=this.val())},val:function(){return gx.fn.getControlValue("CLIENTEDENOMINACIONCOMPLETA")},nac:gx.falseFn};this.declareDomainHdlr(89,function(){});n[90]={id:90,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTECLICOD",gxz:"Z1155ClienteCliCod",gxold:"O1155ClienteCliCod",gxvar:"A1155ClienteCliCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1155ClienteCliCod=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1155ClienteCliCod=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CLIENTECLICOD",gx.O.A1155ClienteCliCod,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1155ClienteCliCod=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CLIENTECLICOD",".")},nac:gx.falseFn};n[91]={id:91,lvl:0,type:"svchar",len:256,dec:0,sign:!1,ro:1,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEDOMICILIO",gxz:"Z513ClienteDomicilio",gxold:"O513ClienteDomicilio",gxvar:"A513ClienteDomicilio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A513ClienteDomicilio=n)},v2z:function(n){n!==undefined&&(gx.O.Z513ClienteDomicilio=n)},v2c:function(){gx.fn.setControlValue("CLIENTEDOMICILIO",gx.O.A513ClienteDomicilio,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A513ClienteDomicilio=this.val())},val:function(){return gx.fn.getControlValue("CLIENTEDOMICILIO")},nac:gx.falseFn};this.declareDomainHdlr(91,function(){});n[92]={id:92,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEIVCNOM",gxz:"Z3166ClienteIVCNom",gxold:"O3166ClienteIVCNom",gxvar:"A3166ClienteIVCNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3166ClienteIVCNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z3166ClienteIVCNom=n)},v2c:function(){gx.fn.setControlValue("CLIENTEIVCNOM",gx.O.A3166ClienteIVCNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3166ClienteIVCNom=this.val())},val:function(){return gx.fn.getControlValue("CLIENTEIVCNOM")},nac:gx.falseFn};this.declareDomainHdlr(92,function(){});n[93]={id:93,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEIVCCODFIS",gxz:"Z3164ClienteIVCCodFis",gxold:"O3164ClienteIVCCodFis",gxvar:"A3164ClienteIVCCodFis",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A3164ClienteIVCCodFis=n)},v2z:function(n){n!==undefined&&(gx.O.Z3164ClienteIVCCodFis=n)},v2c:function(){gx.fn.setComboBoxValue("CLIENTEIVCCODFIS",gx.O.A3164ClienteIVCCodFis);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3164ClienteIVCCodFis=this.val())},val:function(){return gx.fn.getControlValue("CLIENTEIVCCODFIS")},nac:gx.falseFn};this.declareDomainHdlr(93,function(){});n[94]={id:94,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEIVCCOD",gxz:"Z3193ClienteIVCCod",gxold:"O3193ClienteIVCCod",gxvar:"A3193ClienteIVCCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A3193ClienteIVCCod=n)},v2z:function(n){n!==undefined&&(gx.O.Z3193ClienteIVCCod=n)},v2c:function(){gx.fn.setComboBoxValue("CLIENTEIVCCOD",gx.O.A3193ClienteIVCCod);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A3193ClienteIVCCod=this.val())},val:function(){return gx.fn.getControlValue("CLIENTEIVCCOD")},nac:gx.falseFn};this.declareDomainHdlr(94,function(){});n[95]={id:95,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEIVCCODIGO",gxz:"Z3403ClienteIVCCodigo",gxold:"O3403ClienteIVCCodigo",gxvar:"A3403ClienteIVCCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3403ClienteIVCCodigo=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3403ClienteIVCCodigo=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CLIENTEIVCCODIGO",gx.O.A3403ClienteIVCCodigo,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3403ClienteIVCCodigo=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CLIENTEIVCCODIGO",".")},nac:gx.falseFn};n[96]={id:96,fld:"PROMPT_53",grid:38};this.A53ClienteId=0;this.Z53ClienteId=0;this.O53ClienteId=0;this.A1158ClienteTipo="";this.Z1158ClienteTipo="";this.O1158ClienteTipo="";this.A1156ClienteDenominacion="";this.Z1156ClienteDenominacion="";this.O1156ClienteDenominacion="";this.A1935ClienteNroDocumento=0;this.Z1935ClienteNroDocumento=0;this.O1935ClienteNroDocumento=0;this.A1157ClienteEstado="";this.Z1157ClienteEstado="";this.O1157ClienteEstado="";this.A3010ClienteCuentaId=0;this.Z3010ClienteCuentaId=0;this.O3010ClienteCuentaId=0;this.A3014ClienteDebitos=0;this.Z3014ClienteDebitos=0;this.O3014ClienteDebitos=0;this.A3015ClienteCreditos=0;this.Z3015ClienteCreditos=0;this.O3015ClienteCreditos=0;this.A2543ClienteSaldo=0;this.Z2543ClienteSaldo=0;this.O2543ClienteSaldo=0;this.A3023ClienteSaldoVencido=0;this.Z3023ClienteSaldoVencido=0;this.O3023ClienteSaldoVencido=0;this.A2544ClienteLimite=0;this.Z2544ClienteLimite=0;this.O2544ClienteLimite=0;this.A2545ClienteLimiteDisponible=0;this.Z2545ClienteLimiteDisponible=0;this.O2545ClienteLimiteDisponible=0;this.A3165ClienteIVCID=0;this.Z3165ClienteIVCID=0;this.O3165ClienteIVCID=0;this.A2542ClienteDenominacionCompleta="";this.Z2542ClienteDenominacionCompleta="";this.O2542ClienteDenominacionCompleta="";this.A1155ClienteCliCod=0;this.Z1155ClienteCliCod=0;this.O1155ClienteCliCod=0;this.A513ClienteDomicilio="";this.Z513ClienteDomicilio="";this.O513ClienteDomicilio="";this.A3166ClienteIVCNom="";this.Z3166ClienteIVCNom="";this.O3166ClienteIVCNom="";this.A3164ClienteIVCCodFis="";this.Z3164ClienteIVCCodFis="";this.O3164ClienteIVCCodFis="";this.A3193ClienteIVCCod="";this.Z3193ClienteIVCCod="";this.O3193ClienteIVCCod="";this.A3403ClienteIVCCodigo=0;this.Z3403ClienteIVCCodigo=0;this.O3403ClienteIVCCodigo=0;this.AV8WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV9TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV20GXV1=0;this.AV18Insert_ClienteIVCID=0;this.AV12TrnContextAtt={AttributeName:"",AttributeValue:""};this.AV7ClienteId=0;this.AV10WebSession={};this.A53ClienteId=0;this.A3165ClienteIVCID=0;this.A1152Cliente095=gx.date.nullDate();this.A1151Cliente094="";this.A1154Cliente098=gx.date.nullDate();this.A1153Cliente097="";this.AV19Pgmname="";this.A2545ClienteLimiteDisponible=0;this.A513ClienteDomicilio="";this.A1935ClienteNroDocumento=0;this.A2542ClienteDenominacionCompleta="";this.A2543ClienteSaldo=0;this.A3010ClienteCuentaId=0;this.A3014ClienteDebitos=0;this.A3015ClienteCreditos=0;this.A3023ClienteSaldoVencido=0;this.A1158ClienteTipo="";this.A1156ClienteDenominacion="";this.A1157ClienteEstado="";this.A1155ClienteCliCod=0;this.A2544ClienteLimite=0;this.A3166ClienteIVCNom="";this.A3164ClienteIVCCodFis="";this.A3193ClienteIVCCod="";this.A3403ClienteIVCCodigo=0;this.Gx_mode="";this.Events={e120k2_client:["AFTER TRN",!0],e130k38_client:["ENTER",!0],e140k38_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7ClienteId",fld:"vCLIENTEID",pic:"ZZZZZZZZZZZZZZ9",hsh:!0},{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}],[{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV7ClienteId",fld:"vCLIENTEID",pic:"ZZZZZZZZZZZZZZ9",hsh:!0},{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}],[{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}]];this.EvtParms.START=[[{av:"AV19Pgmname",fld:"vPGMNAME",pic:""},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}],[{av:"AV8WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV20GXV1",fld:"vGXV1",pic:"99999999"},{av:"AV12TrnContextAtt",fld:"vTRNCONTEXTATT",pic:""},{av:"AV18Insert_ClienteIVCID",fld:"vINSERT_CLIENTEIVCID",pic:"ZZZZZZZZ9"},{av:'gx.fn.getCtrlProperty("CLIENTEDENOMINACIONCOMPLETA","Visible")',ctrl:"CLIENTEDENOMINACIONCOMPLETA",prop:"Visible"},{av:'gx.fn.getCtrlProperty("CLIENTECLICOD","Visible")',ctrl:"CLIENTECLICOD",prop:"Visible"},{av:'gx.fn.getCtrlProperty("CLIENTEDOMICILIO","Visible")',ctrl:"CLIENTEDOMICILIO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("CLIENTEIVCNOM","Visible")',ctrl:"CLIENTEIVCNOM",prop:"Visible"},{ctrl:"CLIENTEIVCCODFIS"},{ctrl:"CLIENTEIVCCOD"},{av:'gx.fn.getCtrlProperty("CLIENTEIVCCODIGO","Visible")',ctrl:"CLIENTEIVCCODIGO",prop:"Visible"},{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}],[{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}]];this.EvtParms.VALID_CLIENTEID=[[{av:"A53ClienteId",fld:"CLIENTEID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A1156ClienteDenominacion",fld:"CLIENTEDENOMINACION",pic:"@!"},{ctrl:"CLIENTETIPO"},{av:"A1158ClienteTipo",fld:"CLIENTETIPO",pic:""},{ctrl:"CLIENTEESTADO"},{av:"A1157ClienteEstado",fld:"CLIENTEESTADO",pic:""},{av:"A1155ClienteCliCod",fld:"CLIENTECLICOD",pic:"ZZZZZZZ9"},{av:"A3023ClienteSaldoVencido",fld:"CLIENTESALDOVENCIDO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A3015ClienteCreditos",fld:"CLIENTECREDITOS",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A3014ClienteDebitos",fld:"CLIENTEDEBITOS",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A3010ClienteCuentaId",fld:"CLIENTECUENTAID",pic:"ZZZZZZZ9"},{av:"A2543ClienteSaldo",fld:"CLIENTESALDO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2542ClienteDenominacionCompleta",fld:"CLIENTEDENOMINACIONCOMPLETA",pic:"@!"},{av:"A1935ClienteNroDocumento",fld:"CLIENTENRODOCUMENTO",pic:"ZZZZZZZ9"},{av:"A513ClienteDomicilio",fld:"CLIENTEDOMICILIO",pic:""},{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}],[{ctrl:"CLIENTETIPO"},{av:"A1158ClienteTipo",fld:"CLIENTETIPO",pic:""},{av:"A1156ClienteDenominacion",fld:"CLIENTEDENOMINACION",pic:"@!"},{ctrl:"CLIENTEESTADO"},{av:"A1157ClienteEstado",fld:"CLIENTEESTADO",pic:""},{av:"A1155ClienteCliCod",fld:"CLIENTECLICOD",pic:"ZZZZZZZ9"},{av:"A3023ClienteSaldoVencido",fld:"CLIENTESALDOVENCIDO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A3015ClienteCreditos",fld:"CLIENTECREDITOS",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A3014ClienteDebitos",fld:"CLIENTEDEBITOS",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A3010ClienteCuentaId",fld:"CLIENTECUENTAID",pic:"ZZZZZZZ9"},{av:"A2543ClienteSaldo",fld:"CLIENTESALDO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2542ClienteDenominacionCompleta",fld:"CLIENTEDENOMINACIONCOMPLETA",pic:"@!"},{av:"A1935ClienteNroDocumento",fld:"CLIENTENRODOCUMENTO",pic:"ZZZZZZZ9"},{av:"A513ClienteDomicilio",fld:"CLIENTEDOMICILIO",pic:""},{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}]];this.EvtParms.VALID_CLIENTETIPO=[[{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}],[{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}]];this.EvtParms.VALID_CLIENTEDENOMINACION=[[{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}],[{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}]];this.EvtParms.VALID_CLIENTESALDO=[[{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}],[{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}]];this.EvtParms.VALID_CLIENTELIMITE=[[{av:"A2545ClienteLimiteDisponible",fld:"CLIENTELIMITEDISPONIBLE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2543ClienteSaldo",fld:"CLIENTESALDO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2544ClienteLimite",fld:"CLIENTELIMITE",pic:"ZZ,ZZZ,ZZ9.99"},{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}],[{av:"A2545ClienteLimiteDisponible",fld:"CLIENTELIMITEDISPONIBLE",pic:"ZZ,ZZZ,ZZ9.99"},{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}]];this.EvtParms.VALID_CLIENTEIVCID=[[{av:"A3166ClienteIVCNom",fld:"CLIENTEIVCNOM",pic:"@!"},{ctrl:"CLIENTEIVCCODFIS"},{av:"A3164ClienteIVCCodFis",fld:"CLIENTEIVCCODFIS",pic:""},{ctrl:"CLIENTEIVCCOD"},{av:"A3193ClienteIVCCod",fld:"CLIENTEIVCCOD",pic:""},{av:"A3403ClienteIVCCodigo",fld:"CLIENTEIVCCODIGO",pic:"ZZZ9"},{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}],[{av:"A3166ClienteIVCNom",fld:"CLIENTEIVCNOM",pic:"@!"},{ctrl:"CLIENTEIVCCODFIS"},{av:"A3164ClienteIVCCodFis",fld:"CLIENTEIVCCODFIS",pic:""},{ctrl:"CLIENTEIVCCOD"},{av:"A3193ClienteIVCCod",fld:"CLIENTEIVCCOD",pic:""},{av:"A3403ClienteIVCCodigo",fld:"CLIENTEIVCCODIGO",pic:"ZZZ9"},{ctrl:"CLIENTEIVCID"},{av:"A3165ClienteIVCID",fld:"CLIENTEIVCID",pic:"ZZZZZZZZ9"}]];this.setPrompt("PROMPT_53",[22]);this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV7ClienteId","vCLIENTEID",0,"int",15,0);this.setVCMap("AV18Insert_ClienteIVCID","vINSERT_CLIENTEIVCID",0,"int",9,0);this.setVCMap("A1152Cliente095","CLIENTE095",0,"dtime",8,5);this.setVCMap("A1151Cliente094","CLIENTE094",0,"char",15,0);this.setVCMap("A1154Cliente098","CLIENTE098",0,"dtime",8,5);this.setVCMap("A1153Cliente097","CLIENTE097",0,"char",15,0);this.setVCMap("AV19Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV9TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);this.Initialize()});gx.wi(function(){gx.createParentObj(cliente)})