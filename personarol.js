/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:43:38.58
*/
gx.evt.autoSkip=!1;gx.define("personarol",!1,function(){var n,t;this.ServerClass="personarol";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7PersonaId=gx.fn.getIntegerValue("vPERSONAID",".");this.AV8EntidadId=gx.fn.getIntegerValue("vENTIDADID",".");this.AV9RolId=gx.fn.getIntegerValue("vROLID",".");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV11TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Personaid=function(){return this.validSrvEvt("Valid_Personaid",0).then(function(n){return n}.closure(this))};this.Valid_Rolid=function(){return this.validSrvEvt("Valid_Rolid",0).then(function(n){return n}.closure(this))};this.Valid_Entidadid=function(){return this.validSrvEvt("Valid_Entidadid",0).then(function(n){return n}.closure(this))};this.Valid_Personaroldesde=function(){return this.validCliEvt("Valid_Personaroldesde",0,function(){try{var n=gx.util.balloon.getNew("PERSONAROLDESDE");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.A1206PersonaRolDesde)==0||new gx.date.gxdate(this.A1206PersonaRolDesde).compare(gx.date.ymdtod(1753,01,01))>=0))try{n.setError("Campo Desde fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Personarolhasta=function(){return this.validCliEvt("Valid_Personarolhasta",0,function(){try{var n=gx.util.balloon.getNew("PERSONAROLHASTA");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.A1208PersonaRolHasta)==0||new gx.date.gxdate(this.A1208PersonaRolHasta).compare(gx.date.ymdtod(1753,01,01))>=0))try{n.setError("Campo Hasta fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Personaroltotalcredito=function(){return this.validCliEvt("Valid_Personaroltotalcredito",0,function(){try{var n=gx.util.balloon.getNew("PERSONAROLTOTALCREDITO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Personaroltotaldebito=function(){return this.validCliEvt("Valid_Personaroltotaldebito",0,function(){try{var n=gx.util.balloon.getNew("PERSONAROLTOTALDEBITO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Personarolestado=function(){return this.validCliEvt("Valid_Personarolestado",0,function(){try{var n=gx.util.balloon.getNew("PERSONAROLESTADO");if(this.AnyError=0,!(this.A1207PersonaRolEstado=="ACT"||this.A1207PersonaRolEstado=="INA"||""==this.A1207PersonaRolEstado))try{n.setError("Campo Estado fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e122p2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e132p121_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e142p121_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80];this.GXLastCtrlId=80;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Personaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAID",gxz:"Z63PersonaId",gxold:"O63PersonaId",gxvar:"A63PersonaId",ucs:[],op:[25],ip:[25,22],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A63PersonaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z63PersonaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PERSONAID",gx.O.A63PersonaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A63PersonaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PERSONAID",".")},nac:function(){return!(0==this.AV7PersonaId)}};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONADENOMINACION",gxz:"Z913PersonaDenominacion",gxold:"O913PersonaDenominacion",gxvar:"A913PersonaDenominacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A913PersonaDenominacion=n)},v2z:function(n){n!==undefined&&(gx.O.Z913PersonaDenominacion=n)},v2c:function(){gx.fn.setControlValue("PERSONADENOMINACION",gx.O.A913PersonaDenominacion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A913PersonaDenominacion=this.val())},val:function(){return gx.fn.getControlValue("PERSONADENOMINACION")},nac:gx.falseFn};this.declareDomainHdlr(25,function(){});n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Rolid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ROLID",gxz:"Z177RolId",gxold:"O177RolId",gxvar:"A177RolId",ucs:[],op:[33],ip:[33,30],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A177RolId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z177RolId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ROLID",gx.O.A177RolId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A177RolId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ROLID",".")},nac:function(){return!(0==this.AV9RolId)}};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ROLNOMBRE",gxz:"Z1214RolNombre",gxold:"O1214RolNombre",gxvar:"A1214RolNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1214RolNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1214RolNombre=n)},v2c:function(){gx.fn.setControlValue("ROLNOMBRE",gx.O.A1214RolNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1214RolNombre=this.val())},val:function(){return gx.fn.getControlValue("ROLNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(33,function(){});n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Personaroldesde,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAROLDESDE",gxz:"Z1206PersonaRolDesde",gxold:"O1206PersonaRolDesde",gxvar:"A1206PersonaRolDesde",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[38],ip:[38],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1206PersonaRolDesde=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1206PersonaRolDesde=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PERSONAROLDESDE",gx.O.A1206PersonaRolDesde,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1206PersonaRolDesde=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("PERSONAROLDESDE")},nac:gx.falseFn};this.declareDomainHdlr(38,function(){});n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Personarolhasta,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAROLHASTA",gxz:"Z1208PersonaRolHasta",gxold:"O1208PersonaRolHasta",gxvar:"A1208PersonaRolHasta",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[42],ip:[42],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1208PersonaRolHasta=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1208PersonaRolHasta=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PERSONAROLHASTA",gx.O.A1208PersonaRolHasta,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1208PersonaRolHasta=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("PERSONAROLHASTA")},nac:gx.falseFn};this.declareDomainHdlr(42,function(){});n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Personaroltotalcredito,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAROLTOTALCREDITO",gxz:"Z2546PersonaRolTotalCredito",gxold:"O2546PersonaRolTotalCredito",gxvar:"A2546PersonaRolTotalCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2546PersonaRolTotalCredito=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2546PersonaRolTotalCredito=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PERSONAROLTOTALCREDITO",gx.O.A2546PersonaRolTotalCredito,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2546PersonaRolTotalCredito=this.val())},val:function(){return gx.fn.getDecimalValue("PERSONAROLTOTALCREDITO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(47,function(){});n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Personaroltotaldebito,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAROLTOTALDEBITO",gxz:"Z2547PersonaRolTotalDebito",gxold:"O2547PersonaRolTotalDebito",gxvar:"A2547PersonaRolTotalDebito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2547PersonaRolTotalDebito=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2547PersonaRolTotalDebito=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PERSONAROLTOTALDEBITO",gx.O.A2547PersonaRolTotalDebito,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2547PersonaRolTotalDebito=this.val())},val:function(){return gx.fn.getDecimalValue("PERSONAROLTOTALDEBITO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(51,function(){});n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"",grid:0};n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAROLSALDO",gxz:"Z2548PersonaRolSaldo",gxold:"O2548PersonaRolSaldo",gxvar:"A2548PersonaRolSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2548PersonaRolSaldo=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2548PersonaRolSaldo=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("PERSONAROLSALDO",gx.O.A2548PersonaRolSaldo,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2548PersonaRolSaldo=this.val())},val:function(){return gx.fn.getDecimalValue("PERSONAROLSALDO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(56,function(){});n[57]={id:57,fld:"",grid:0};n[58]={id:58,fld:"",grid:0};n[59]={id:59,fld:"",grid:0};n[60]={id:60,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Personarolestado,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAROLESTADO",gxz:"Z1207PersonaRolEstado",gxold:"O1207PersonaRolEstado",gxvar:"A1207PersonaRolEstado",ucs:[],op:[60],ip:[60],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A1207PersonaRolEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z1207PersonaRolEstado=n)},v2c:function(){gx.fn.setComboBoxValue("PERSONAROLESTADO",gx.O.A1207PersonaRolEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1207PersonaRolEstado=this.val())},val:function(){return gx.fn.getControlValue("PERSONAROLESTADO")},nac:gx.falseFn};this.declareDomainHdlr(60,function(){});n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,fld:"",grid:0};n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"BTNTRN_ENTER",grid:0,evt:"e132p121_client",std:"ENTER"};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"BTNTRN_CANCEL",grid:0,evt:"e142p121_client"};n[68]={id:68,fld:"",grid:0};n[69]={id:69,fld:"BTNTRN_DELETE",grid:0,evt:"e152p121_client",std:"DELETE"};n[70]={id:70,fld:"",grid:0};n[71]={id:71,fld:"",grid:0};n[72]={id:72,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[73]={id:73,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ENTIDADID",gxz:"Z44EntidadId",gxold:"O44EntidadId",gxvar:"A44EntidadId",ucs:[],op:[56,51,47,74],ip:[56,74,47,51,30,22,73],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A44EntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z44EntidadId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ENTIDADID",gx.O.A44EntidadId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A44EntidadId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ENTIDADID",".")},nac:function(){return!(0==this.AV8EntidadId)}};n[74]={id:74,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ENTIDADNOMBRE",gxz:"Z373EntidadNombre",gxold:"O373EntidadNombre",gxvar:"A373EntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A373EntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z373EntidadNombre=n)},v2c:function(){gx.fn.setControlValue("ENTIDADNOMBRE",gx.O.A373EntidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A373EntidadNombre=this.val())},val:function(){return gx.fn.getControlValue("ENTIDADNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(74,function(){});n[75]={id:75,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAROL094",gxz:"Z1202PersonaRol094",gxold:"O1202PersonaRol094",gxvar:"A1202PersonaRol094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1202PersonaRol094=n)},v2z:function(n){n!==undefined&&(gx.O.Z1202PersonaRol094=n)},v2c:function(){gx.fn.setControlValue("PERSONAROL094",gx.O.A1202PersonaRol094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1202PersonaRol094=this.val())},val:function(){return gx.fn.getControlValue("PERSONAROL094")},nac:gx.falseFn};this.declareDomainHdlr(75,function(){});n[76]={id:76,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAROL095",gxz:"Z1203PersonaRol095",gxold:"O1203PersonaRol095",gxvar:"A1203PersonaRol095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1203PersonaRol095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1203PersonaRol095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PERSONAROL095",gx.O.A1203PersonaRol095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1203PersonaRol095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("PERSONAROL095")},nac:gx.falseFn};this.declareDomainHdlr(76,function(){});n[77]={id:77,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAROL097",gxz:"Z1204PersonaRol097",gxold:"O1204PersonaRol097",gxvar:"A1204PersonaRol097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1204PersonaRol097=n)},v2z:function(n){n!==undefined&&(gx.O.Z1204PersonaRol097=n)},v2c:function(){gx.fn.setControlValue("PERSONAROL097",gx.O.A1204PersonaRol097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1204PersonaRol097=this.val())},val:function(){return gx.fn.getControlValue("PERSONAROL097")},nac:gx.falseFn};this.declareDomainHdlr(77,function(){});n[78]={id:78,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAROL098",gxz:"Z1205PersonaRol098",gxold:"O1205PersonaRol098",gxvar:"A1205PersonaRol098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1205PersonaRol098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1205PersonaRol098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("PERSONAROL098",gx.O.A1205PersonaRol098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1205PersonaRol098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("PERSONAROL098")},nac:gx.falseFn};this.declareDomainHdlr(78,function(){});n[79]={id:79,fld:"PROMPT_63",grid:121};n[80]={id:80,fld:"PROMPT_177",grid:121};this.A63PersonaId=0;this.Z63PersonaId=0;this.O63PersonaId=0;this.A913PersonaDenominacion="";this.Z913PersonaDenominacion="";this.O913PersonaDenominacion="";this.A177RolId=0;this.Z177RolId=0;this.O177RolId=0;this.A1214RolNombre="";this.Z1214RolNombre="";this.O1214RolNombre="";this.A1206PersonaRolDesde=gx.date.nullDate();this.Z1206PersonaRolDesde=gx.date.nullDate();this.O1206PersonaRolDesde=gx.date.nullDate();this.A1208PersonaRolHasta=gx.date.nullDate();this.Z1208PersonaRolHasta=gx.date.nullDate();this.O1208PersonaRolHasta=gx.date.nullDate();this.A2546PersonaRolTotalCredito=0;this.Z2546PersonaRolTotalCredito=0;this.O2546PersonaRolTotalCredito=0;this.A2547PersonaRolTotalDebito=0;this.Z2547PersonaRolTotalDebito=0;this.O2547PersonaRolTotalDebito=0;this.A2548PersonaRolSaldo=0;this.Z2548PersonaRolSaldo=0;this.O2548PersonaRolSaldo=0;this.A1207PersonaRolEstado="";this.Z1207PersonaRolEstado="";this.O1207PersonaRolEstado="";this.A44EntidadId=0;this.Z44EntidadId=0;this.O44EntidadId=0;this.A373EntidadNombre="";this.Z373EntidadNombre="";this.O373EntidadNombre="";this.A1202PersonaRol094="";this.Z1202PersonaRol094="";this.O1202PersonaRol094="";this.A1203PersonaRol095=gx.date.nullDate();this.Z1203PersonaRol095=gx.date.nullDate();this.O1203PersonaRol095=gx.date.nullDate();this.A1204PersonaRol097="";this.Z1204PersonaRol097="";this.O1204PersonaRol097="";this.A1205PersonaRol098=gx.date.nullDate();this.Z1205PersonaRol098=gx.date.nullDate();this.O1205PersonaRol098=gx.date.nullDate();this.AV10WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV11TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV7PersonaId=0;this.AV8EntidadId=0;this.AV9RolId=0;this.AV12WebSession={};this.A63PersonaId=0;this.A44EntidadId=0;this.A177RolId=0;this.A1203PersonaRol095=gx.date.nullDate();this.A1202PersonaRol094="";this.A1205PersonaRol098=gx.date.nullDate();this.A1204PersonaRol097="";this.A2548PersonaRolSaldo=0;this.A913PersonaDenominacion="";this.A373EntidadNombre="";this.A1214RolNombre="";this.A1206PersonaRolDesde=gx.date.nullDate();this.A1208PersonaRolHasta=gx.date.nullDate();this.A2546PersonaRolTotalCredito=0;this.A2547PersonaRolTotalDebito=0;this.A1207PersonaRolEstado="";this.Gx_mode="";this.Events={e122p2_client:["AFTER TRN",!0],e132p121_client:["ENTER",!0],e142p121_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7PersonaId",fld:"vPERSONAID",pic:"ZZZZZZZZZZZZZZ9",hsh:!0},{av:"AV8EntidadId",fld:"vENTIDADID",pic:"Z9",hsh:!0},{av:"AV9RolId",fld:"vROLID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV11TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV7PersonaId",fld:"vPERSONAID",pic:"ZZZZZZZZZZZZZZ9",hsh:!0},{av:"AV8EntidadId",fld:"vENTIDADID",pic:"Z9",hsh:!0},{av:"AV9RolId",fld:"vROLID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.START=[[],[{av:"AV10WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV11TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("ENTIDADID","Visible")',ctrl:"ENTIDADID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ENTIDADNOMBRE","Visible")',ctrl:"ENTIDADNOMBRE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PERSONAROL094","Visible")',ctrl:"PERSONAROL094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PERSONAROL095","Visible")',ctrl:"PERSONAROL095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PERSONAROL097","Visible")',ctrl:"PERSONAROL097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PERSONAROL098","Visible")',ctrl:"PERSONAROL098",prop:"Visible"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV11TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0}],[]];this.EvtParms.VALID_PERSONAID=[[{av:"A63PersonaId",fld:"PERSONAID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A913PersonaDenominacion",fld:"PERSONADENOMINACION",pic:"@!"}],[{av:"A913PersonaDenominacion",fld:"PERSONADENOMINACION",pic:"@!"}]];this.EvtParms.VALID_ROLID=[[{av:"A177RolId",fld:"ROLID",pic:"ZZZ9"},{av:"A1214RolNombre",fld:"ROLNOMBRE",pic:"@!"}],[{av:"A1214RolNombre",fld:"ROLNOMBRE",pic:"@!"}]];this.EvtParms.VALID_PERSONAROLDESDE=[[{av:"A1206PersonaRolDesde",fld:"PERSONAROLDESDE",pic:""}],[{av:"A1206PersonaRolDesde",fld:"PERSONAROLDESDE",pic:""}]];this.EvtParms.VALID_PERSONAROLHASTA=[[{av:"A1208PersonaRolHasta",fld:"PERSONAROLHASTA",pic:""}],[{av:"A1208PersonaRolHasta",fld:"PERSONAROLHASTA",pic:""}]];this.EvtParms.VALID_PERSONAROLTOTALCREDITO=[[],[]];this.EvtParms.VALID_PERSONAROLTOTALDEBITO=[[],[]];this.EvtParms.VALID_PERSONAROLESTADO=[[{ctrl:"PERSONAROLESTADO"},{av:"A1207PersonaRolEstado",fld:"PERSONAROLESTADO",pic:"@!"}],[{ctrl:"PERSONAROLESTADO"},{av:"A1207PersonaRolEstado",fld:"PERSONAROLESTADO",pic:"@!"}]];this.EvtParms.VALID_ENTIDADID=[[{av:"A44EntidadId",fld:"ENTIDADID",pic:"Z9"},{av:"A63PersonaId",fld:"PERSONAID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A177RolId",fld:"ROLID",pic:"ZZZ9"},{av:"A2547PersonaRolTotalDebito",fld:"PERSONAROLTOTALDEBITO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2546PersonaRolTotalCredito",fld:"PERSONAROLTOTALCREDITO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A373EntidadNombre",fld:"ENTIDADNOMBRE",pic:"@!"},{av:"A2548PersonaRolSaldo",fld:"PERSONAROLSALDO",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"A373EntidadNombre",fld:"ENTIDADNOMBRE",pic:"@!"},{av:"A2546PersonaRolTotalCredito",fld:"PERSONAROLTOTALCREDITO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2547PersonaRolTotalDebito",fld:"PERSONAROLTOTALDEBITO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2548PersonaRolSaldo",fld:"PERSONAROLSALDO",pic:"ZZ,ZZZ,ZZ9.99"}]];this.setPrompt("PROMPT_63",[22]);this.setPrompt("PROMPT_177",[30]);this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV7PersonaId","vPERSONAID",0,"int",15,0);this.setVCMap("AV8EntidadId","vENTIDADID",0,"int",2,0);this.setVCMap("AV9RolId","vROLID",0,"int",4,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV11TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);this.Initialize()});gx.wi(function(){gx.createParentObj(personarol)})