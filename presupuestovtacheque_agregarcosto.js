/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:54:37.74
*/
gx.evt.autoSkip=!1;gx.define("presupuestovtacheque_agregarcosto",!1,function(){var n,t;this.ServerClass="presupuestovtacheque_agregarcosto";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Validv_Preid=function(){return this.validCliEvt("Validv_Preid",0,function(){try{var n=gx.util.balloon.getNew("vPREID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Validv_Chequeid=function(){return this.validCliEvt("Validv_Chequeid",0,function(){try{var n=gx.util.balloon.getNew("vCHEQUEID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Validv_Chequefechaemision=function(){return this.validCliEvt("Validv_Chequefechaemision",0,function(){try{var n=gx.util.balloon.getNew("vCHEQUEFECHAEMISION");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Validv_Chequefechavencimiento=function(){return this.validCliEvt("Validv_Chequefechavencimiento",0,function(){try{var n=gx.util.balloon.getNew("vCHEQUEFECHAVENCIMIENTO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11lq1_client=function(){return this.clearMessages(),this.AV17PreChequeImporte=this.AV15PreChequeImporteOri+this.AV15PreChequeImporteOri*this.AV16PreChequeCosto/100,this.refreshOutputs([{av:"AV17PreChequeImporte",fld:"vPRECHEQUEIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}]),gx.$.Deferred().resolve()};this.e13lq2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e15lq1_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72];this.GXLastCtrlId=72;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setDynProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Preid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPREID",gxz:"ZV5PreId",gxold:"OV5PreId",gxvar:"AV5PreId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV5PreId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV5PreId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vPREID",gx.O.AV5PreId,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV5PreId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vPREID",".")},nac:gx.falseFn};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Chequeid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCHEQUEID",gxz:"ZV6ChequeId",gxold:"OV6ChequeId",gxvar:"AV6ChequeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV6ChequeId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV6ChequeId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCHEQUEID",gx.O.AV6ChequeId,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV6ChequeId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCHEQUEID",".")},nac:gx.falseFn};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"date",len:8,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Chequefechaemision,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCHEQUEFECHAEMISION",gxz:"ZV10ChequeFechaEmision",gxold:"OV10ChequeFechaEmision",gxvar:"AV10ChequeFechaEmision",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV10ChequeFechaEmision=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV10ChequeFechaEmision=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("vCHEQUEFECHAEMISION",gx.O.AV10ChequeFechaEmision,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV10ChequeFechaEmision=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("vCHEQUEFECHAEMISION")},nac:gx.falseFn};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,lvl:0,type:"date",len:8,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Chequefechavencimiento,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCHEQUEFECHAVENCIMIENTO",gxz:"ZV11ChequeFechaVencimiento",gxold:"OV11ChequeFechaVencimiento",gxvar:"AV11ChequeFechaVencimiento",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV11ChequeFechaVencimiento=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV11ChequeFechaVencimiento=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("vCHEQUEFECHAVENCIMIENTO",gx.O.AV11ChequeFechaVencimiento,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV11ChequeFechaVencimiento=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("vCHEQUEFECHAVENCIMIENTO")},nac:gx.falseFn};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vBANCOSUCURSALNOMBRECOMPLETO",gxz:"ZV12BancoSucursalNombreCompleto",gxold:"OV12BancoSucursalNombreCompleto",gxvar:"AV12BancoSucursalNombreCompleto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV12BancoSucursalNombreCompleto=n)},v2z:function(n){n!==undefined&&(gx.O.ZV12BancoSucursalNombreCompleto=n)},v2c:function(){gx.fn.setControlValue("vBANCOSUCURSALNOMBRECOMPLETO",gx.O.AV12BancoSucursalNombreCompleto,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV12BancoSucursalNombreCompleto=this.val())},val:function(){return gx.fn.getControlValue("vBANCOSUCURSALNOMBRECOMPLETO")},nac:gx.falseFn};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"",grid:0};n[45]={id:45,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCHEQUENUMERO",gxz:"ZV13ChequeNumero",gxold:"OV13ChequeNumero",gxvar:"AV13ChequeNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV13ChequeNumero=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV13ChequeNumero=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCHEQUENUMERO",gx.O.AV13ChequeNumero,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV13ChequeNumero=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCHEQUENUMERO",".")},nac:gx.falseFn};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCHEQUEIMPORTE",gxz:"ZV14ChequeImporte",gxold:"OV14ChequeImporte",gxvar:"AV14ChequeImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV14ChequeImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.ZV14ChequeImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("vCHEQUEIMPORTE",gx.O.AV14ChequeImporte,2,",")},c2v:function(){this.val()!==undefined&&(gx.O.AV14ChequeImporte=this.val())},val:function(){return gx.fn.getDecimalValue("vCHEQUEIMPORTE",".",",")},nac:gx.falseFn};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"",grid:0};n[54]={id:54,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPRECHEQUEIMPORTEORI",gxz:"ZV15PreChequeImporteOri",gxold:"OV15PreChequeImporteOri",gxvar:"AV15PreChequeImporteOri",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV15PreChequeImporteOri=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.ZV15PreChequeImporteOri=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("vPRECHEQUEIMPORTEORI",gx.O.AV15PreChequeImporteOri,2,",")},c2v:function(){this.val()!==undefined&&(gx.O.AV15PreChequeImporteOri=this.val())},val:function(){return gx.fn.getDecimalValue("vPRECHEQUEIMPORTEORI",".",",")},nac:gx.falseFn};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPRECHEQUECOSTO",gxz:"ZV16PreChequeCosto",gxold:"OV16PreChequeCosto",gxvar:"AV16PreChequeCosto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV16PreChequeCosto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.ZV16PreChequeCosto=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("vPRECHEQUECOSTO",gx.O.AV16PreChequeCosto,2,",")},c2v:function(){this.val()!==undefined&&(gx.O.AV16PreChequeCosto=this.val())},val:function(){return gx.fn.getDecimalValue("vPRECHEQUECOSTO",".",",")},nac:gx.falseFn};n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"BTNCALCULAR",grid:0,evt:"e11lq1_client"};n[62]={id:62,fld:"",grid:0};n[63]={id:63,fld:"",grid:0};n[64]={id:64,fld:"",grid:0};n[65]={id:65,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPRECHEQUEIMPORTE",gxz:"ZV17PreChequeImporte",gxold:"OV17PreChequeImporte",gxvar:"AV17PreChequeImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV17PreChequeImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.ZV17PreChequeImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("vPRECHEQUEIMPORTE",gx.O.AV17PreChequeImporte,2,",")},c2v:function(){this.val()!==undefined&&(gx.O.AV17PreChequeImporte=this.val())},val:function(){return gx.fn.getDecimalValue("vPRECHEQUEIMPORTE",".",",")},nac:gx.falseFn};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"",grid:0};n[68]={id:68,fld:"",grid:0};n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"BTNENTER",grid:0,evt:"e13lq2_client",std:"ENTER"};n[71]={id:71,fld:"",grid:0};n[72]={id:72,fld:"BTNCANCEL",grid:0,evt:"e15lq1_client"};this.AV5PreId=0;this.ZV5PreId=0;this.OV5PreId=0;this.AV6ChequeId=0;this.ZV6ChequeId=0;this.OV6ChequeId=0;this.AV10ChequeFechaEmision=gx.date.nullDate();this.ZV10ChequeFechaEmision=gx.date.nullDate();this.OV10ChequeFechaEmision=gx.date.nullDate();this.AV11ChequeFechaVencimiento=gx.date.nullDate();this.ZV11ChequeFechaVencimiento=gx.date.nullDate();this.OV11ChequeFechaVencimiento=gx.date.nullDate();this.AV12BancoSucursalNombreCompleto="";this.ZV12BancoSucursalNombreCompleto="";this.OV12BancoSucursalNombreCompleto="";this.AV13ChequeNumero=0;this.ZV13ChequeNumero=0;this.OV13ChequeNumero=0;this.AV14ChequeImporte=0;this.ZV14ChequeImporte=0;this.OV14ChequeImporte=0;this.AV15PreChequeImporteOri=0;this.ZV15PreChequeImporteOri=0;this.OV15PreChequeImporteOri=0;this.AV16PreChequeCosto=0;this.ZV16PreChequeCosto=0;this.OV16PreChequeCosto=0;this.AV17PreChequeImporte=0;this.ZV17PreChequeImporte=0;this.OV17PreChequeImporte=0;this.AV5PreId=0;this.AV6ChequeId=0;this.AV10ChequeFechaEmision=gx.date.nullDate();this.AV11ChequeFechaVencimiento=gx.date.nullDate();this.AV12BancoSucursalNombreCompleto="";this.AV13ChequeNumero=0;this.AV14ChequeImporte=0;this.AV15PreChequeImporteOri=0;this.AV16PreChequeCosto=0;this.AV17PreChequeImporte=0;this.A51ChequeId=0;this.A89PreId=0;this.A491ChequeFechaEmision=gx.date.nullDate();this.A492ChequeFechaVencimiento=gx.date.nullDate();this.A60ChequeNumero=0;this.A493ChequeImporte=0;this.A1347PreChequeImporte=0;this.A1345PreChequeNeto=0;this.A432BancoNombre="";this.A1522BancoSucursalNombre="";this.A2180BancoSucursalNombreCompleto="";this.A54CBUNumero="";this.A29BancoId=0;this.A165BancoSucursalId=0;this.Events={e13lq2_client:["ENTER",!0],e15lq1_client:["CANCEL",!0],e11lq1_client:["'DOCALCULAR'",!1]};this.EvtParms.REFRESH=[[{av:"AV5PreId",fld:"vPREID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV6ChequeId",fld:"vCHEQUEID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV15PreChequeImporteOri",fld:"vPRECHEQUEIMPORTEORI",pic:"ZZ,ZZZ,ZZ9.99"}],[]];this.EvtParms.START=[[{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"AV5PreId",fld:"vPREID",pic:"ZZZZZZZZ9",hsh:!0},{av:"A51ChequeId",fld:"CHEQUEID",pic:"ZZZZZZZZ9"},{av:"AV6ChequeId",fld:"vCHEQUEID",pic:"ZZZZZZZZ9",hsh:!0},{av:"A491ChequeFechaEmision",fld:"CHEQUEFECHAEMISION",pic:""},{av:"A492ChequeFechaVencimiento",fld:"CHEQUEFECHAVENCIMIENTO",pic:""},{av:"A60ChequeNumero",fld:"CHEQUENUMERO",pic:"ZZZZZZZZZ9"},{av:"A493ChequeImporte",fld:"CHEQUEIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1347PreChequeImporte",fld:"PRECHEQUEIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1345PreChequeNeto",fld:"PRECHEQUENETO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2180BancoSucursalNombreCompleto",fld:"BANCOSUCURSALNOMBRECOMPLETO",pic:"@!"}],[{av:"AV10ChequeFechaEmision",fld:"vCHEQUEFECHAEMISION",pic:""},{av:"AV11ChequeFechaVencimiento",fld:"vCHEQUEFECHAVENCIMIENTO",pic:""},{av:"AV13ChequeNumero",fld:"vCHEQUENUMERO",pic:"ZZZZZZZZZ9"},{av:"AV14ChequeImporte",fld:"vCHEQUEIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV17PreChequeImporte",fld:"vPRECHEQUEIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV15PreChequeImporteOri",fld:"vPRECHEQUEIMPORTEORI",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV12BancoSucursalNombreCompleto",fld:"vBANCOSUCURSALNOMBRECOMPLETO",pic:"@!"},{av:"this.DVPANEL_TABLEATTRIBUTESContainer.Title",ctrl:"DVPANEL_TABLEATTRIBUTES",prop:"Title"}]];this.EvtParms["'DOCALCULAR'"]=[[{av:"AV15PreChequeImporteOri",fld:"vPRECHEQUEIMPORTEORI",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV16PreChequeCosto",fld:"vPRECHEQUECOSTO",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV17PreChequeImporte",fld:"vPRECHEQUEIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}]];this.EvtParms.ENTER=[[{av:"AV5PreId",fld:"vPREID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV6ChequeId",fld:"vCHEQUEID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV16PreChequeCosto",fld:"vPRECHEQUECOSTO",pic:"ZZ,ZZZ,ZZ9.99"}],[]];this.EvtParms.VALIDV_PREID=[[],[]];this.EvtParms.VALIDV_CHEQUEID=[[],[]];this.EvtParms.VALIDV_CHEQUEFECHAEMISION=[[],[]];this.EvtParms.VALIDV_CHEQUEFECHAVENCIMIENTO=[[],[]];this.EnterCtrl=["BTNENTER"];this.Initialize()});gx.wi(function(){gx.createParentObj(presupuestovtacheque_agregarcosto)})