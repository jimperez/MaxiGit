/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:46:11.7
*/
gx.evt.autoSkip=!1;gx.define("iibbalicuota",!1,function(){var n,t;this.ServerClass="iibbalicuota";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7IIBBAlicuotaProvinciaId=gx.fn.getIntegerValue("vIIBBALICUOTAPROVINCIAID",".");this.AV8IIBBAlicuotaTipo=gx.fn.getControlValue("vIIBBALICUOTATIPO");this.AV9IIBBAlicuotaDesde=gx.fn.getDateValue("vIIBBALICUOTADESDE");this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",".");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV11TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Iibbalicuotaprovinciaid=function(){return this.validSrvEvt("Valid_Iibbalicuotaprovinciaid",0).then(function(n){return n}.closure(this))};this.Valid_Iibbalicuotatipo=function(){return this.validCliEvt("Valid_Iibbalicuotatipo",0,function(){try{var n=gx.util.balloon.getNew("IIBBALICUOTATIPO");if(this.AnyError=0,!(this.A316IIBBAlicuotaTipo=="CL"||this.A316IIBBAlicuotaTipo=="CM"||this.A316IIBBAlicuotaTipo=="E"))try{n.setError("Campo Tipo fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Iibbalicuotadesde=function(){return this.validCliEvt("Valid_Iibbalicuotadesde",0,function(){try{var n=gx.util.balloon.getNew("IIBBALICUOTADESDE");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.A317IIBBAlicuotaDesde)==0||new gx.date.gxdate(this.A317IIBBAlicuotaDesde).compare(gx.date.ymdtod(1753,01,01))>=0))try{n.setError("Campo Desde fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Iibbalicuotahasta=function(){return this.validCliEvt("Valid_Iibbalicuotahasta",0,function(){try{var n=gx.util.balloon.getNew("IIBBALICUOTAHASTA");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.A2676IIBBAlicuotaHasta)==0||new gx.date.gxdate(this.A2676IIBBAlicuotaHasta).compare(gx.date.ymdtod(1753,01,01))>=0))try{n.setError("Campo Hasta fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e125h2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e135h233_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e145h233_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65];this.GXLastCtrlId=65;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Iibbalicuotaprovinciaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IIBBALICUOTAPROVINCIAID",gxz:"Z315IIBBAlicuotaProvinciaId",gxold:"O315IIBBAlicuotaProvinciaId",gxvar:"A315IIBBAlicuotaProvinciaId",ucs:[],op:[25],ip:[25,22],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A315IIBBAlicuotaProvinciaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z315IIBBAlicuotaProvinciaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("IIBBALICUOTAPROVINCIAID",gx.O.A315IIBBAlicuotaProvinciaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A315IIBBAlicuotaProvinciaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("IIBBALICUOTAPROVINCIAID",".")},nac:function(){return!(0==this.AV7IIBBAlicuotaProvinciaId)}};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IIBBALICUOTAPROVINCIANOMBRE",gxz:"Z2675IIBBAlicuotaProvinciaNombre",gxold:"O2675IIBBAlicuotaProvinciaNombre",gxvar:"A2675IIBBAlicuotaProvinciaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2675IIBBAlicuotaProvinciaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2675IIBBAlicuotaProvinciaNombre=n)},v2c:function(){gx.fn.setControlValue("IIBBALICUOTAPROVINCIANOMBRE",gx.O.A2675IIBBAlicuotaProvinciaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2675IIBBAlicuotaProvinciaNombre=this.val())},val:function(){return gx.fn.getControlValue("IIBBALICUOTAPROVINCIANOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(25,function(){});n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,lvl:0,type:"char",len:3,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Iibbalicuotatipo,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IIBBALICUOTATIPO",gxz:"Z316IIBBAlicuotaTipo",gxold:"O316IIBBAlicuotaTipo",gxvar:"A316IIBBAlicuotaTipo",ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A316IIBBAlicuotaTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z316IIBBAlicuotaTipo=n)},v2c:function(){gx.fn.setComboBoxValue("IIBBALICUOTATIPO",gx.O.A316IIBBAlicuotaTipo);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A316IIBBAlicuotaTipo=this.val())},val:function(){return gx.fn.getControlValue("IIBBALICUOTATIPO")},nac:function(){return!(""==this.AV8IIBBAlicuotaTipo)}};this.declareDomainHdlr(30,function(){});n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Iibbalicuotadesde,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IIBBALICUOTADESDE",gxz:"Z317IIBBAlicuotaDesde",gxold:"O317IIBBAlicuotaDesde",gxvar:"A317IIBBAlicuotaDesde",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[35],ip:[35],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A317IIBBAlicuotaDesde=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z317IIBBAlicuotaDesde=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("IIBBALICUOTADESDE",gx.O.A317IIBBAlicuotaDesde,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A317IIBBAlicuotaDesde=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("IIBBALICUOTADESDE")},nac:function(){return!(new gx.date.gxdate("").compare(this.AV9IIBBAlicuotaDesde)==0)}};this.declareDomainHdlr(35,function(){});n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Iibbalicuotahasta,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IIBBALICUOTAHASTA",gxz:"Z2676IIBBAlicuotaHasta",gxold:"O2676IIBBAlicuotaHasta",gxvar:"A2676IIBBAlicuotaHasta",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[39],ip:[39],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2676IIBBAlicuotaHasta=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2676IIBBAlicuotaHasta=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("IIBBALICUOTAHASTA",gx.O.A2676IIBBAlicuotaHasta,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2676IIBBAlicuotaHasta=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("IIBBALICUOTAHASTA")},nac:gx.falseFn};this.declareDomainHdlr(39,function(){});n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IIBBALICUOTAVALOR",gxz:"Z2677IIBBAlicuotaValor",gxold:"O2677IIBBAlicuotaValor",gxvar:"A2677IIBBAlicuotaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2677IIBBAlicuotaValor=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2677IIBBAlicuotaValor=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("IIBBALICUOTAVALOR",gx.O.A2677IIBBAlicuotaValor,2,",")},c2v:function(){this.val()!==undefined&&(gx.O.A2677IIBBAlicuotaValor=this.val())},val:function(){return gx.fn.getDecimalValue("IIBBALICUOTAVALOR",".",",")},nac:gx.falseFn};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IIBBALICUOTAMINIMO",gxz:"Z2892IIBBAlicuotaMinimo",gxold:"O2892IIBBAlicuotaMinimo",gxvar:"A2892IIBBAlicuotaMinimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2892IIBBAlicuotaMinimo=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2892IIBBAlicuotaMinimo=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("IIBBALICUOTAMINIMO",gx.O.A2892IIBBAlicuotaMinimo,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2892IIBBAlicuotaMinimo=this.val())},val:function(){return gx.fn.getDecimalValue("IIBBALICUOTAMINIMO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"BTNTRN_ENTER",grid:0,evt:"e135h233_client",std:"ENTER"};n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"BTNTRN_CANCEL",grid:0,evt:"e145h233_client"};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"BTNTRN_DELETE",grid:0,evt:"e155h233_client",std:"DELETE"};n[58]={id:58,fld:"",grid:0};n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[61]={id:61,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IIBBALICUOTA094",gxz:"Z2679IIBBAlicuota094",gxold:"O2679IIBBAlicuota094",gxvar:"A2679IIBBAlicuota094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2679IIBBAlicuota094=n)},v2z:function(n){n!==undefined&&(gx.O.Z2679IIBBAlicuota094=n)},v2c:function(){gx.fn.setControlValue("IIBBALICUOTA094",gx.O.A2679IIBBAlicuota094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2679IIBBAlicuota094=this.val())},val:function(){return gx.fn.getControlValue("IIBBALICUOTA094")},nac:gx.falseFn};this.declareDomainHdlr(61,function(){});n[62]={id:62,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IIBBALICUOTA095",gxz:"Z2680IIBBAlicuota095",gxold:"O2680IIBBAlicuota095",gxvar:"A2680IIBBAlicuota095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2680IIBBAlicuota095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2680IIBBAlicuota095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("IIBBALICUOTA095",gx.O.A2680IIBBAlicuota095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2680IIBBAlicuota095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("IIBBALICUOTA095")},nac:gx.falseFn};this.declareDomainHdlr(62,function(){});n[63]={id:63,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IIBBALICUOTA097",gxz:"Z2681IIBBAlicuota097",gxold:"O2681IIBBAlicuota097",gxvar:"A2681IIBBAlicuota097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2681IIBBAlicuota097=n)},v2z:function(n){n!==undefined&&(gx.O.Z2681IIBBAlicuota097=n)},v2c:function(){gx.fn.setControlValue("IIBBALICUOTA097",gx.O.A2681IIBBAlicuota097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2681IIBBAlicuota097=this.val())},val:function(){return gx.fn.getControlValue("IIBBALICUOTA097")},nac:gx.falseFn};this.declareDomainHdlr(63,function(){});n[64]={id:64,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"IIBBALICUOTA098",gxz:"Z2682IIBBAlicuota098",gxold:"O2682IIBBAlicuota098",gxvar:"A2682IIBBAlicuota098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2682IIBBAlicuota098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2682IIBBAlicuota098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("IIBBALICUOTA098",gx.O.A2682IIBBAlicuota098,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2682IIBBAlicuota098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("IIBBALICUOTA098")},nac:gx.falseFn};this.declareDomainHdlr(64,function(){});n[65]={id:65,fld:"PROMPT_315",grid:233};this.A315IIBBAlicuotaProvinciaId=0;this.Z315IIBBAlicuotaProvinciaId=0;this.O315IIBBAlicuotaProvinciaId=0;this.A2675IIBBAlicuotaProvinciaNombre="";this.Z2675IIBBAlicuotaProvinciaNombre="";this.O2675IIBBAlicuotaProvinciaNombre="";this.A316IIBBAlicuotaTipo="";this.Z316IIBBAlicuotaTipo="";this.O316IIBBAlicuotaTipo="";this.A317IIBBAlicuotaDesde=gx.date.nullDate();this.Z317IIBBAlicuotaDesde=gx.date.nullDate();this.O317IIBBAlicuotaDesde=gx.date.nullDate();this.A2676IIBBAlicuotaHasta=gx.date.nullDate();this.Z2676IIBBAlicuotaHasta=gx.date.nullDate();this.O2676IIBBAlicuotaHasta=gx.date.nullDate();this.A2677IIBBAlicuotaValor=0;this.Z2677IIBBAlicuotaValor=0;this.O2677IIBBAlicuotaValor=0;this.A2892IIBBAlicuotaMinimo=0;this.Z2892IIBBAlicuotaMinimo=0;this.O2892IIBBAlicuotaMinimo=0;this.A2679IIBBAlicuota094="";this.Z2679IIBBAlicuota094="";this.O2679IIBBAlicuota094="";this.A2680IIBBAlicuota095=gx.date.nullDate();this.Z2680IIBBAlicuota095=gx.date.nullDate();this.O2680IIBBAlicuota095=gx.date.nullDate();this.A2681IIBBAlicuota097="";this.Z2681IIBBAlicuota097="";this.O2681IIBBAlicuota097="";this.A2682IIBBAlicuota098=gx.date.nullDate();this.Z2682IIBBAlicuota098=gx.date.nullDate();this.O2682IIBBAlicuota098=gx.date.nullDate();this.AV10WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV11TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV7IIBBAlicuotaProvinciaId=0;this.AV8IIBBAlicuotaTipo="";this.AV9IIBBAlicuotaDesde=gx.date.nullDate();this.AV12WebSession={};this.A315IIBBAlicuotaProvinciaId=0;this.A316IIBBAlicuotaTipo="";this.A317IIBBAlicuotaDesde=gx.date.nullDate();this.A2680IIBBAlicuota095=gx.date.nullDate();this.A2679IIBBAlicuota094="";this.A2682IIBBAlicuota098=gx.date.nullDate();this.A2681IIBBAlicuota097="";this.Gx_BScreen=0;this.A2675IIBBAlicuotaProvinciaNombre="";this.A2676IIBBAlicuotaHasta=gx.date.nullDate();this.A2677IIBBAlicuotaValor=0;this.A2892IIBBAlicuotaMinimo=0;this.Gx_mode="";this.Events={e125h2_client:["AFTER TRN",!0],e135h233_client:["ENTER",!0],e145h233_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7IIBBAlicuotaProvinciaId",fld:"vIIBBALICUOTAPROVINCIAID",pic:"ZZZ9",hsh:!0},{av:"AV8IIBBAlicuotaTipo",fld:"vIIBBALICUOTATIPO",pic:"",hsh:!0},{av:"AV9IIBBAlicuotaDesde",fld:"vIIBBALICUOTADESDE",pic:"",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV11TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV7IIBBAlicuotaProvinciaId",fld:"vIIBBALICUOTAPROVINCIAID",pic:"ZZZ9",hsh:!0},{av:"AV8IIBBAlicuotaTipo",fld:"vIIBBALICUOTATIPO",pic:"",hsh:!0},{av:"AV9IIBBAlicuotaDesde",fld:"vIIBBALICUOTADESDE",pic:"",hsh:!0}],[]];this.EvtParms.START=[[],[{av:"AV10WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV11TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("IIBBALICUOTA094","Visible")',ctrl:"IIBBALICUOTA094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("IIBBALICUOTA095","Visible")',ctrl:"IIBBALICUOTA095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("IIBBALICUOTA097","Visible")',ctrl:"IIBBALICUOTA097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("IIBBALICUOTA098","Visible")',ctrl:"IIBBALICUOTA098",prop:"Visible"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV11TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0}],[]];this.EvtParms.VALID_IIBBALICUOTAPROVINCIAID=[[{av:"A315IIBBAlicuotaProvinciaId",fld:"IIBBALICUOTAPROVINCIAID",pic:"ZZZ9"},{av:"A2675IIBBAlicuotaProvinciaNombre",fld:"IIBBALICUOTAPROVINCIANOMBRE",pic:"@!"}],[{av:"A2675IIBBAlicuotaProvinciaNombre",fld:"IIBBALICUOTAPROVINCIANOMBRE",pic:"@!"}]];this.EvtParms.VALID_IIBBALICUOTATIPO=[[{ctrl:"IIBBALICUOTATIPO"},{av:"A316IIBBAlicuotaTipo",fld:"IIBBALICUOTATIPO",pic:""}],[{ctrl:"IIBBALICUOTATIPO"},{av:"A316IIBBAlicuotaTipo",fld:"IIBBALICUOTATIPO",pic:""}]];this.EvtParms.VALID_IIBBALICUOTADESDE=[[{av:"A317IIBBAlicuotaDesde",fld:"IIBBALICUOTADESDE",pic:""}],[{av:"A317IIBBAlicuotaDesde",fld:"IIBBALICUOTADESDE",pic:""}]];this.EvtParms.VALID_IIBBALICUOTAHASTA=[[{av:"A2676IIBBAlicuotaHasta",fld:"IIBBALICUOTAHASTA",pic:""}],[{av:"A2676IIBBAlicuotaHasta",fld:"IIBBALICUOTAHASTA",pic:""}]];this.setPrompt("PROMPT_315",[22]);this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV7IIBBAlicuotaProvinciaId","vIIBBALICUOTAPROVINCIAID",0,"int",4,0);this.setVCMap("AV8IIBBAlicuotaTipo","vIIBBALICUOTATIPO",0,"char",3,0);this.setVCMap("AV9IIBBAlicuotaDesde","vIIBBALICUOTADESDE",0,"date",8,0);this.setVCMap("Gx_BScreen","vGXBSCREEN",0,"int",1,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV11TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);this.Initialize()});gx.wi(function(){gx.createParentObj(iibbalicuota)})