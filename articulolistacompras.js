/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:44:13.79
*/
gx.evt.autoSkip=!1;gx.define("articulolistacompras",!1,function(){var n,t,i;this.ServerClass="articulolistacompras";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7ArtId=gx.fn.getIntegerValue("vARTID",".");this.AV13ArtListaCtoId=gx.fn.getIntegerValue("vARTLISTACTOID",".");this.AV12NumeradorId=gx.fn.getControlValue("vNUMERADORID");this.AV20Pgmdesc=gx.fn.getControlValue("vPGMDESC");this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",".");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV10TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Artid=function(){return this.validSrvEvt("Valid_Artid",0).then(function(n){return n}.closure(this))};this.Valid_Artlistactoid=function(){return this.validCliEvt("Valid_Artlistactoid",0,function(){try{var n=gx.util.balloon.getNew("ARTLISTACTOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artimpali=function(){return this.validCliEvt("Valid_Artimpali",0,function(){try{var n=gx.util.balloon.getNew("ARTIMPALI");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artlistactoestado=function(){return this.validCliEvt("Valid_Artlistactoestado",0,function(){try{var n=gx.util.balloon.getNew("ARTLISTACTOESTADO");if(this.AnyError=0,!(this.A1630ArtListaCtoEstado=="ACT"||this.A1630ArtListaCtoEstado=="INA"||""==this.A1630ArtListaCtoEstado))try{n.setError("Campo Precio Costo Estado fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artlistactodesde=function(){return this.validCliEvt("Valid_Artlistactodesde",0,function(){try{var n=gx.util.balloon.getNew("ARTLISTACTODESDE");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.A1627ArtListaCtoDesde)==0||new gx.date.gxdate(this.A1627ArtListaCtoDesde).compare(gx.date.ymdtod(1753,01,01))>=0))try{n.setError("Campo Precio Costo Desde fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}if(new gx.date.gxdate("").compare(this.A1627ArtListaCtoDesde)==0)try{n.setError("Precio Costo Desde es requerido.");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artlistactohasta=function(){return this.validCliEvt("Valid_Artlistactohasta",0,function(){try{var n=gx.util.balloon.getNew("ARTLISTACTOHASTA");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.A1628ArtListaCtoHasta)==0||new gx.date.gxdate(this.A1628ArtListaCtoHasta).compare(gx.date.ymdtod(1753,01,01))>=0))try{n.setError("Campo Precio Costo Hasta fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}if(new gx.date.gxdate(this.A1627ArtListaCtoDesde).compare(this.A1628ArtListaCtoHasta)>0&&!(new gx.date.gxdate("").compare(this.A1628ArtListaCtoHasta)==0))try{n.setError("Error! La Fecha Desde debe ser menor o igual a la Fecha Hasta...");this.AnyError=gx.num.trunc(1,0)}catch(t){}if(new gx.date.gxdate(this.A1628ArtListaCtoHasta).compare(this.A1627ArtListaCtoDesde)<0&&!(new gx.date.gxdate("").compare(this.A1628ArtListaCtoHasta)==0))try{n.setError("Error! La Fecha Hasta debe ser mayor o igual a la Fecha Desde...");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artlistapcicto=function(){return this.validCliEvt("Valid_Artlistapcicto",0,function(){try{var n=gx.util.balloon.getNew("ARTLISTAPCICTO");this.AnyError=0;try{}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artlistapcictoneto=function(){return this.validCliEvt("Valid_Artlistapcictoneto",0,function(){try{var n=gx.util.balloon.getNew("ARTLISTAPCICTONETO");this.AnyError=0;try{}catch(t){}if(0==this.A1621ArtListaPciCto&&this.Gx_mode=="UPD")try{n.setError("Error! Debe ingresar el Importe de Costo.");this.AnyError=gx.num.trunc(1,0)}catch(t){}try{(0==this.A1621ArtListaPciCto||0==this.A1619ArtListaPciCtoNeto||this.Gx_mode!="INS")&&this.Gx_mode!="UPD"||(this.A1620ArtListaPciCtoIVA=this.A1621ArtListaPciCto-this.A1619ArtListaPciCtoNeto)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artimpid=function(){return this.validCliEvt("Valid_Artimpid",0,function(){try{var n=gx.util.balloon.getNew("ARTIMPID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artlistactoalicuota=function(){return this.validCliEvt("Valid_Artlistactoalicuota",0,function(){try{var n=gx.util.balloon.getNew("ARTLISTACTOALICUOTA");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e123m2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e133m159_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e143m159_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86];this.GXLastCtrlId=86;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);this.DVPANEL_COSTOContainer=gx.uc.getNew(this,51,22,"BootstrapPanel","DVPANEL_COSTOContainer","Dvpanel_costo","DVPANEL_COSTO");i=this.DVPANEL_COSTOContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Precio de Costo","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTID",gxz:"Z8ArtId",gxold:"O8ArtId",gxvar:"A8ArtId",ucs:[],op:[81,30,80,25],ip:[81,25,30,80,22],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A8ArtId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z8ArtId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTID",gx.O.A8ArtId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A8ArtId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTID",".")},nac:gx.falseFn};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTNOM",gxz:"Z16ArtNom",gxold:"O16ArtNom",gxvar:"A16ArtNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A16ArtNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z16ArtNom=n)},v2c:function(){gx.fn.setControlValue("ARTNOM",gx.O.A16ArtNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A16ArtNom=this.val())},val:function(){return gx.fn.getControlValue("ARTNOM")},nac:gx.falseFn};this.declareDomainHdlr(25,function(){});n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artimpali,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTIMPALI",gxz:"Z367ArtImpAli",gxold:"O367ArtImpAli",gxvar:"A367ArtImpAli",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A367ArtImpAli=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z367ArtImpAli=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("ARTIMPALI",gx.O.A367ArtImpAli,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A367ArtImpAli=this.val())},val:function(){return gx.fn.getDecimalValue("ARTIMPALI",".",",")},nac:gx.falseFn};this.declareDomainHdlr(30,function(){});n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artlistactoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTACTOID",gxz:"Z221ArtListaCtoId",gxold:"O221ArtListaCtoId",gxvar:"A221ArtListaCtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A221ArtListaCtoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z221ArtListaCtoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTLISTACTOID",gx.O.A221ArtListaCtoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A221ArtListaCtoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTLISTACTOID",".")},nac:gx.falseFn};this.declareDomainHdlr(35,function(){});n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,lvl:0,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Artlistactoestado,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTACTOESTADO",gxz:"Z1630ArtListaCtoEstado",gxold:"O1630ArtListaCtoEstado",gxvar:"A1630ArtListaCtoEstado",ucs:[],op:[39],ip:[39],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A1630ArtListaCtoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z1630ArtListaCtoEstado=n)},v2c:function(){gx.fn.setComboBoxValue("ARTLISTACTOESTADO",gx.O.A1630ArtListaCtoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1630ArtListaCtoEstado=this.val())},val:function(){return gx.fn.getControlValue("ARTLISTACTOESTADO")},nac:gx.falseFn};this.declareDomainHdlr(39,function(){});n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Artlistactodesde,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTACTODESDE",gxz:"Z1627ArtListaCtoDesde",gxold:"O1627ArtListaCtoDesde",gxvar:"A1627ArtListaCtoDesde",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[44],ip:[44],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1627ArtListaCtoDesde=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1627ArtListaCtoDesde=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("ARTLISTACTODESDE",gx.O.A1627ArtListaCtoDesde,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1627ArtListaCtoDesde=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("ARTLISTACTODESDE")},nac:gx.falseFn};this.declareDomainHdlr(44,function(){});n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Artlistactohasta,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTACTOHASTA",gxz:"Z1628ArtListaCtoHasta",gxold:"O1628ArtListaCtoHasta",gxvar:"A1628ArtListaCtoHasta",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[44,48],ip:[44,48],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1628ArtListaCtoHasta=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1628ArtListaCtoHasta=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("ARTLISTACTOHASTA",gx.O.A1628ArtListaCtoHasta,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1628ArtListaCtoHasta=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("ARTLISTACTOHASTA")},nac:gx.falseFn};this.declareDomainHdlr(48,function(){});n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[53]={id:53,fld:"COSTO",grid:0};n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Artlistapcicto,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTAPCICTO",gxz:"Z1621ArtListaPciCto",gxold:"O1621ArtListaPciCto",gxvar:"A1621ArtListaPciCto",ucs:[],op:[66],ip:[66,81,58],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1621ArtListaPciCto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1621ArtListaPciCto=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("ARTLISTAPCICTO",gx.O.A1621ArtListaPciCto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1621ArtListaPciCto=this.val())},val:function(){return gx.fn.getDecimalValue("ARTLISTAPCICTO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(58,function(){});n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTAPCICTOIVA",gxz:"Z1620ArtListaPciCtoIVA",gxold:"O1620ArtListaPciCtoIVA",gxvar:"A1620ArtListaPciCtoIVA",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1620ArtListaPciCtoIVA=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1620ArtListaPciCtoIVA=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("ARTLISTAPCICTOIVA",gx.O.A1620ArtListaPciCtoIVA,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1620ArtListaPciCtoIVA=this.val())},val:function(){return gx.fn.getDecimalValue("ARTLISTAPCICTOIVA",".",",")},nac:gx.falseFn};this.declareDomainHdlr(62,function(){});n[63]={id:63,fld:"",grid:0};n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"",grid:0};n[66]={id:66,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Artlistapcictoneto,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTAPCICTONETO",gxz:"Z1619ArtListaPciCtoNeto",gxold:"O1619ArtListaPciCtoNeto",gxvar:"A1619ArtListaPciCtoNeto",ucs:[],op:[66,62,58],ip:[62,58,81,66],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1619ArtListaPciCtoNeto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1619ArtListaPciCtoNeto=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("ARTLISTAPCICTONETO",gx.O.A1619ArtListaPciCtoNeto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1619ArtListaPciCtoNeto=this.val())},val:function(){return gx.fn.getDecimalValue("ARTLISTAPCICTONETO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(66,function(){});n[67]={id:67,fld:"",grid:0};n[68]={id:68,fld:"",grid:0};n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"",grid:0};n[71]={id:71,fld:"BTNTRN_ENTER",grid:0,evt:"e133m159_client",std:"ENTER"};n[72]={id:72,fld:"",grid:0};n[73]={id:73,fld:"BTNTRN_CANCEL",grid:0,evt:"e143m159_client"};n[74]={id:74,fld:"",grid:0};n[75]={id:75,fld:"BTNTRN_DELETE",grid:0,evt:"e153m159_client",std:"DELETE"};n[76]={id:76,fld:"",grid:0};n[77]={id:77,fld:"",grid:0};n[78]={id:78,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[79]={id:79,lvl:0,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTAPCIDESCUENTO",gxz:"Z1618ArtListaPciDescuento",gxold:"O1618ArtListaPciDescuento",gxvar:"A1618ArtListaPciDescuento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1618ArtListaPciDescuento=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1618ArtListaPciDescuento=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("ARTLISTAPCIDESCUENTO",gx.O.A1618ArtListaPciDescuento,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1618ArtListaPciDescuento=this.val())},val:function(){return gx.fn.getDecimalValue("ARTLISTAPCIDESCUENTO",".",",")},nac:gx.falseFn};this.declareDomainHdlr(79,function(){});n[80]={id:80,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artimpid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTIMPID",gxz:"Z14ArtImpId",gxold:"O14ArtImpId",gxvar:"A14ArtImpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A14ArtImpId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z14ArtImpId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTIMPID",gx.O.A14ArtImpId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A14ArtImpId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTIMPID",".")},nac:gx.falseFn};n[81]={id:81,lvl:0,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artlistactoalicuota,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTACTOALICUOTA",gxz:"Z1629ArtListaCtoAlicuota",gxold:"O1629ArtListaCtoAlicuota",gxvar:"A1629ArtListaCtoAlicuota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1629ArtListaCtoAlicuota=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1629ArtListaCtoAlicuota=gx.fn.toDecimalValue(n,".",","))},v2c:function(){gx.fn.setDecimalValue("ARTLISTACTOALICUOTA",gx.O.A1629ArtListaCtoAlicuota,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1629ArtListaCtoAlicuota=this.val())},val:function(){return gx.fn.getDecimalValue("ARTLISTACTOALICUOTA",".",",")},nac:gx.falseFn};this.declareDomainHdlr(81,function(){});n[82]={id:82,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTACTO094",gxz:"Z1631ArtListaCto094",gxold:"O1631ArtListaCto094",gxvar:"A1631ArtListaCto094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1631ArtListaCto094=n)},v2z:function(n){n!==undefined&&(gx.O.Z1631ArtListaCto094=n)},v2c:function(){gx.fn.setControlValue("ARTLISTACTO094",gx.O.A1631ArtListaCto094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1631ArtListaCto094=this.val())},val:function(){return gx.fn.getControlValue("ARTLISTACTO094")},nac:gx.falseFn};this.declareDomainHdlr(82,function(){});n[83]={id:83,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTACTO095",gxz:"Z1632ArtListaCto095",gxold:"O1632ArtListaCto095",gxvar:"A1632ArtListaCto095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1632ArtListaCto095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1632ArtListaCto095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("ARTLISTACTO095",gx.O.A1632ArtListaCto095,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1632ArtListaCto095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("ARTLISTACTO095")},nac:gx.falseFn};n[84]={id:84,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTACTO097",gxz:"Z1633ArtListaCto097",gxold:"O1633ArtListaCto097",gxvar:"A1633ArtListaCto097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1633ArtListaCto097=n)},v2z:function(n){n!==undefined&&(gx.O.Z1633ArtListaCto097=n)},v2c:function(){gx.fn.setControlValue("ARTLISTACTO097",gx.O.A1633ArtListaCto097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1633ArtListaCto097=this.val())},val:function(){return gx.fn.getControlValue("ARTLISTACTO097")},nac:gx.falseFn};this.declareDomainHdlr(84,function(){});n[85]={id:85,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTLISTACTO098",gxz:"Z1634ArtListaCto098",gxold:"O1634ArtListaCto098",gxvar:"A1634ArtListaCto098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1634ArtListaCto098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1634ArtListaCto098=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("ARTLISTACTO098",gx.O.A1634ArtListaCto098,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1634ArtListaCto098=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("ARTLISTACTO098")},nac:gx.falseFn};n[86]={id:86,fld:"PROMPT_8",grid:159};this.A8ArtId=0;this.Z8ArtId=0;this.O8ArtId=0;this.A16ArtNom="";this.Z16ArtNom="";this.O16ArtNom="";this.A367ArtImpAli=0;this.Z367ArtImpAli=0;this.O367ArtImpAli=0;this.A221ArtListaCtoId=0;this.Z221ArtListaCtoId=0;this.O221ArtListaCtoId=0;this.A1630ArtListaCtoEstado="";this.Z1630ArtListaCtoEstado="";this.O1630ArtListaCtoEstado="";this.A1627ArtListaCtoDesde=gx.date.nullDate();this.Z1627ArtListaCtoDesde=gx.date.nullDate();this.O1627ArtListaCtoDesde=gx.date.nullDate();this.A1628ArtListaCtoHasta=gx.date.nullDate();this.Z1628ArtListaCtoHasta=gx.date.nullDate();this.O1628ArtListaCtoHasta=gx.date.nullDate();this.A1621ArtListaPciCto=0;this.Z1621ArtListaPciCto=0;this.O1621ArtListaPciCto=0;this.A1620ArtListaPciCtoIVA=0;this.Z1620ArtListaPciCtoIVA=0;this.O1620ArtListaPciCtoIVA=0;this.A1619ArtListaPciCtoNeto=0;this.Z1619ArtListaPciCtoNeto=0;this.O1619ArtListaPciCtoNeto=0;this.A1618ArtListaPciDescuento=0;this.Z1618ArtListaPciDescuento=0;this.O1618ArtListaPciDescuento=0;this.A14ArtImpId=0;this.Z14ArtImpId=0;this.O14ArtImpId=0;this.A1629ArtListaCtoAlicuota=0;this.Z1629ArtListaCtoAlicuota=0;this.O1629ArtListaCtoAlicuota=0;this.A1631ArtListaCto094="";this.Z1631ArtListaCto094="";this.O1631ArtListaCto094="";this.A1632ArtListaCto095=gx.date.nullDate();this.Z1632ArtListaCto095=gx.date.nullDate();this.O1632ArtListaCto095=gx.date.nullDate();this.A1633ArtListaCto097="";this.Z1633ArtListaCto097="";this.O1633ArtListaCto097="";this.A1634ArtListaCto098=gx.date.nullDate();this.Z1634ArtListaCto098=gx.date.nullDate();this.O1634ArtListaCto098=gx.date.nullDate();this.AV9WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV10TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV7ArtId=0;this.AV13ArtListaCtoId=0;this.AV11WebSession={};this.A8ArtId=0;this.A221ArtListaCtoId=0;this.A1632ArtListaCto095=gx.date.nullDate();this.A1631ArtListaCto094="";this.A1634ArtListaCto098=gx.date.nullDate();this.A1633ArtListaCto097="";this.A1629ArtListaCtoAlicuota=0;this.AV12NumeradorId="";this.A1619ArtListaPciCtoNeto=0;this.A1621ArtListaPciCto=0;this.A1620ArtListaPciCtoIVA=0;this.AV20Pgmdesc="";this.Gx_BScreen=0;this.A16ArtNom="";this.A14ArtImpId=0;this.A367ArtImpAli=0;this.A1627ArtListaCtoDesde=gx.date.nullDate();this.A1628ArtListaCtoHasta=gx.date.nullDate();this.A1618ArtListaPciDescuento=0;this.A1630ArtListaCtoEstado="";this.Gx_mode="";this.Events={e123m2_client:["AFTER TRN",!0],e133m159_client:["ENTER",!0],e143m159_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV13ArtListaCtoId",fld:"vARTLISTACTOID",pic:"ZZZZZZZ9",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV10TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV7ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV13ArtListaCtoId",fld:"vARTLISTACTOID",pic:"ZZZZZZZ9",hsh:!0}],[]];this.EvtParms.START=[[],[{av:"AV9WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV10TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("ARTLISTAPCIDESCUENTO","Visible")',ctrl:"ARTLISTAPCIDESCUENTO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTIMPID","Visible")',ctrl:"ARTIMPID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTLISTACTOALICUOTA","Visible")',ctrl:"ARTLISTACTOALICUOTA",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTLISTACTO094","Visible")',ctrl:"ARTLISTACTO094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTLISTACTO095","Visible")',ctrl:"ARTLISTACTO095",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTLISTACTO097","Visible")',ctrl:"ARTLISTACTO097",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTLISTACTO098","Visible")',ctrl:"ARTLISTACTO098",prop:"Visible"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV10TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0}],[]];this.EvtParms.VALID_ARTID=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"A8ArtId",fld:"ARTID",pic:"ZZZZZZZZ9"},{av:"A14ArtImpId",fld:"ARTIMPID",pic:"ZZZ9"},{av:"A367ArtImpAli",fld:"ARTIMPALI",pic:"999.99"},{av:"A16ArtNom",fld:"ARTNOM",pic:"@!"},{av:"A1629ArtListaCtoAlicuota",fld:"ARTLISTACTOALICUOTA",pic:"999.99"},{av:"AV12NumeradorId",fld:"vNUMERADORID",pic:""}],[{av:"A16ArtNom",fld:"ARTNOM",pic:"@!"},{av:"A14ArtImpId",fld:"ARTIMPID",pic:"ZZZ9"},{av:"A367ArtImpAli",fld:"ARTIMPALI",pic:"999.99"},{av:"A1629ArtListaCtoAlicuota",fld:"ARTLISTACTOALICUOTA",pic:"999.99"},{av:"AV12NumeradorId",fld:"vNUMERADORID",pic:""}]];this.EvtParms.VALID_ARTIMPALI=[[],[]];this.EvtParms.VALID_ARTLISTACTOID=[[],[]];this.EvtParms.VALID_ARTLISTACTOESTADO=[[{ctrl:"ARTLISTACTOESTADO"},{av:"A1630ArtListaCtoEstado",fld:"ARTLISTACTOESTADO",pic:"@!"}],[{ctrl:"ARTLISTACTOESTADO"},{av:"A1630ArtListaCtoEstado",fld:"ARTLISTACTOESTADO",pic:"@!"}]];this.EvtParms.VALID_ARTLISTACTODESDE=[[{av:"A1627ArtListaCtoDesde",fld:"ARTLISTACTODESDE",pic:""}],[{av:"A1627ArtListaCtoDesde",fld:"ARTLISTACTODESDE",pic:""}]];this.EvtParms.VALID_ARTLISTACTOHASTA=[[{av:"A1627ArtListaCtoDesde",fld:"ARTLISTACTODESDE",pic:""},{av:"A1628ArtListaCtoHasta",fld:"ARTLISTACTOHASTA",pic:""}],[{av:"A1627ArtListaCtoDesde",fld:"ARTLISTACTODESDE",pic:""},{av:"A1628ArtListaCtoHasta",fld:"ARTLISTACTOHASTA",pic:""}]];this.EvtParms.VALID_ARTLISTAPCICTO=[[{av:"A1619ArtListaPciCtoNeto",fld:"ARTLISTAPCICTONETO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1629ArtListaCtoAlicuota",fld:"ARTLISTACTOALICUOTA",pic:"999.99"},{av:"A1621ArtListaPciCto",fld:"ARTLISTAPCICTO",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"A1619ArtListaPciCtoNeto",fld:"ARTLISTAPCICTONETO",pic:"ZZ,ZZZ,ZZ9.99"}]];this.EvtParms.VALID_ARTLISTAPCICTONETO=[[{av:"A1620ArtListaPciCtoIVA",fld:"ARTLISTAPCICTOIVA",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1621ArtListaPciCto",fld:"ARTLISTAPCICTO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1629ArtListaCtoAlicuota",fld:"ARTLISTACTOALICUOTA",pic:"999.99"},{av:"A1619ArtListaPciCtoNeto",fld:"ARTLISTAPCICTONETO",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"A1619ArtListaPciCtoNeto",fld:"ARTLISTAPCICTONETO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1620ArtListaPciCtoIVA",fld:"ARTLISTAPCICTOIVA",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1621ArtListaPciCto",fld:"ARTLISTAPCICTO",pic:"ZZ,ZZZ,ZZ9.99"}]];this.EvtParms.VALID_ARTIMPID=[[],[]];this.EvtParms.VALID_ARTLISTACTOALICUOTA=[[],[]];this.setPrompt("PROMPT_8",[22]);this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("AV7ArtId","vARTID",0,"int",9,0);this.setVCMap("AV13ArtListaCtoId","vARTLISTACTOID",0,"int",8,0);this.setVCMap("AV12NumeradorId","vNUMERADORID",0,"char",25,0);this.setVCMap("AV20Pgmdesc","vPGMDESC",0,"char",30,0);this.setVCMap("Gx_BScreen","vGXBSCREEN",0,"int",1,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV10TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);this.Initialize()});gx.wi(function(){gx.createParentObj(articulolistacompras)})