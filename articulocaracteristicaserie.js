/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:46:33.3
*/
gx.evt.autoSkip=!1;gx.define("articulocaracteristicaserie",!1,function(){var n,t;this.ServerClass="articulocaracteristicaserie";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A16ArtNom=gx.fn.getControlValue("ARTNOM");this.A359MarcaNombre=gx.fn.getControlValue("MARCANOMBRE");this.A362GrupoNombre=gx.fn.getControlValue("GRUPONOMBRE");this.A361SGrupoNombre=gx.fn.getControlValue("SGRUPONOMBRE");this.A356ArtTpo=gx.fn.getControlValue("ARTTPO");this.AV7ArtId=gx.fn.getIntegerValue("vARTID",".");this.AV8ArtStockId=gx.fn.getIntegerValue("vARTSTOCKID",".");this.AV9CaracteristicaId=gx.fn.getIntegerValue("vCARACTERISTICAID",".");this.A9MarcaId=gx.fn.getIntegerValue("MARCAID",".");this.A10GrupoId=gx.fn.getIntegerValue("GRUPOID",".");this.A11SGrupoId=gx.fn.getIntegerValue("SGRUPOID",".");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV11TrnContext=gx.fn.getControlValue("vTRNCONTEXT")};this.Valid_Artid=function(){return this.validSrvEvt("Valid_Artid",0).then(function(n){return n}.closure(this))};this.Valid_Artstockid=function(){return this.validSrvEvt("Valid_Artstockid",0).then(function(n){return n}.closure(this))};this.Valid_Caracteristicaid=function(){return this.validSrvEvt("Valid_Caracteristicaid",0).then(function(n){return n}.closure(this))};this.Valid_Artsucid=function(){return this.validCliEvt("Valid_Artsucid",0,function(){try{var n=gx.util.balloon.getNew("ARTSUCID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artdepositoid=function(){return this.validCliEvt("Valid_Artdepositoid",0,function(){try{var n=gx.util.balloon.getNew("ARTDEPOSITOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artentidadid=function(){return this.validCliEvt("Valid_Artentidadid",0,function(){try{var n=gx.util.balloon.getNew("ARTENTIDADID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artstockingcmptpoid=function(){return this.validCliEvt("Valid_Artstockingcmptpoid",0,function(){try{var n=gx.util.balloon.getNew("ARTSTOCKINGCMPTPOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artstockingcmptponom=function(){return this.validCliEvt("Valid_Artstockingcmptponom",0,function(){try{var n=gx.util.balloon.getNew("ARTSTOCKINGCMPTPONOM");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artstockingcmpid=function(){return this.validCliEvt("Valid_Artstockingcmpid",0,function(){try{var n=gx.util.balloon.getNew("ARTSTOCKINGCMPID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artstockingcmplinid=function(){return this.validCliEvt("Valid_Artstockingcmplinid",0,function(){try{var n=gx.util.balloon.getNew("ARTSTOCKINGCMPLINID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artstockegrcmptpoid=function(){return this.validCliEvt("Valid_Artstockegrcmptpoid",0,function(){try{var n=gx.util.balloon.getNew("ARTSTOCKEGRCMPTPOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artstockegrcmptponom=function(){return this.validCliEvt("Valid_Artstockegrcmptponom",0,function(){try{var n=gx.util.balloon.getNew("ARTSTOCKEGRCMPTPONOM");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artstockegrcmpid=function(){return this.validCliEvt("Valid_Artstockegrcmpid",0,function(){try{var n=gx.util.balloon.getNew("ARTSTOCKEGRCMPID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artstockegrcmplinid=function(){return this.validCliEvt("Valid_Artstockegrcmplinid",0,function(){try{var n=gx.util.balloon.getNew("ARTSTOCKEGRCMPLINID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e125l2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e135l11_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e145l11_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103];this.GXLastCtrlId=103;this.DVPANEL_TABLEATTRIBUTESContainer=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_TABLEATTRIBUTESContainer","Dvpanel_tableattributes","DVPANEL_TABLEATTRIBUTES");t=this.DVPANEL_TABLEATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Width","Width","100%","str");t.setProp("Height","Height","100","str");t.setProp("AutoWidth","Autowidth",!1,"bool");t.setProp("AutoHeight","Autoheight",!0,"bool");t.setProp("Cls","Cls","PanelFilled_BaseColor","str");t.setProp("ShowHeader","Showheader",!0,"bool");t.setProp("Title","Title","Información General","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Collapsed","Collapsed",!1,"bool");t.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");t.setProp("IconPosition","Iconposition","Right","str");t.setProp("AutoScroll","Autoscroll",!1,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"TABLEATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Artid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTID",gxz:"Z8ArtId",gxold:"O8ArtId",gxvar:"A8ArtId",ucs:[],op:[25],ip:[25,22],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A8ArtId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z8ArtId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTID",gx.O.A8ArtId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A8ArtId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTID",".")},nac:function(){return!(0==this.AV7ArtId)}};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,lvl:0,type:"svchar",len:300,dec:0,sign:!1,pic:"@!",ro:1,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTDESCRIPCIONGENERAL",gxz:"Z1534ArtDescripcionGeneral",gxold:"O1534ArtDescripcionGeneral",gxvar:"A1534ArtDescripcionGeneral",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1534ArtDescripcionGeneral=n)},v2z:function(n){n!==undefined&&(gx.O.Z1534ArtDescripcionGeneral=n)},v2c:function(){gx.fn.setControlValue("ARTDESCRIPCIONGENERAL",gx.O.A1534ArtDescripcionGeneral,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1534ArtDescripcionGeneral=this.val())},val:function(){return gx.fn.getControlValue("ARTDESCRIPCIONGENERAL")},nac:gx.falseFn};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Artstockid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKID",gxz:"Z21ArtStockId",gxold:"O21ArtStockId",gxvar:"A21ArtStockId",ucs:[],op:[55,97,51,93,46,38,91,96,92,43,35,90,64,60,99,98,95,94],ip:[55,51,46,38,91,64,60,99,98,97,96,95,94,93,92,43,35,90,30,22],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A21ArtStockId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z21ArtStockId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTSTOCKID",gx.O.A21ArtStockId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A21ArtStockId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTSTOCKID",".")},nac:function(){return!(0==this.AV8ArtStockId)}};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artsucid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSUCID",gxz:"Z23ArtSucId",gxold:"O23ArtSucId",gxvar:"A23ArtSucId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A23ArtSucId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z23ArtSucId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTSUCID",gx.O.A23ArtSucId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A23ArtSucId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTSUCID",".")},nac:gx.falseFn};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSUCNOM",gxz:"Z431ArtSucNom",gxold:"O431ArtSucNom",gxvar:"A431ArtSucNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A431ArtSucNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z431ArtSucNom=n)},v2c:function(){gx.fn.setControlValue("ARTSUCNOM",gx.O.A431ArtSucNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A431ArtSucNom=this.val())},val:function(){return gx.fn.getControlValue("ARTSUCNOM")},nac:gx.falseFn};this.declareDomainHdlr(38,function(){});n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artdepositoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTDEPOSITOID",gxz:"Z24ArtDepositoId",gxold:"O24ArtDepositoId",gxvar:"A24ArtDepositoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A24ArtDepositoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z24ArtDepositoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTDEPOSITOID",gx.O.A24ArtDepositoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A24ArtDepositoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTDEPOSITOID",".")},nac:gx.falseFn};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTDEPOSITONOMBRE",gxz:"Z978ArtDepositoNombre",gxold:"O978ArtDepositoNombre",gxvar:"A978ArtDepositoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A978ArtDepositoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z978ArtDepositoNombre=n)},v2c:function(){gx.fn.setControlValue("ARTDEPOSITONOMBRE",gx.O.A978ArtDepositoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A978ArtDepositoNombre=this.val())},val:function(){return gx.fn.getControlValue("ARTDEPOSITONOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(46,function(){});n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,lvl:0,type:"char",len:50,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKINGCOMPROBANTE",gxz:"Z2312ArtStockIngComprobante",gxold:"O2312ArtStockIngComprobante",gxvar:"A2312ArtStockIngComprobante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2312ArtStockIngComprobante=n)},v2z:function(n){n!==undefined&&(gx.O.Z2312ArtStockIngComprobante=n)},v2c:function(){gx.fn.setControlValue("ARTSTOCKINGCOMPROBANTE",gx.O.A2312ArtStockIngComprobante,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2312ArtStockIngComprobante=this.val())},val:function(){return gx.fn.getControlValue("ARTSTOCKINGCOMPROBANTE")},nac:gx.falseFn};this.declareDomainHdlr(51,function(){});n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"",grid:0};n[54]={id:54,fld:"",grid:0};n[55]={id:55,lvl:0,type:"char",len:50,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKEGRCOMPROBANTE",gxz:"Z2311ArtStockEgrComprobante",gxold:"O2311ArtStockEgrComprobante",gxvar:"A2311ArtStockEgrComprobante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2311ArtStockEgrComprobante=n)},v2z:function(n){n!==undefined&&(gx.O.Z2311ArtStockEgrComprobante=n)},v2c:function(){gx.fn.setControlValue("ARTSTOCKEGRCOMPROBANTE",gx.O.A2311ArtStockEgrComprobante,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2311ArtStockEgrComprobante=this.val())},val:function(){return gx.fn.getControlValue("ARTSTOCKEGRCOMPROBANTE")},nac:gx.falseFn};this.declareDomainHdlr(55,function(){});n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,fld:"",grid:0};n[59]={id:59,fld:"",grid:0};n[60]={id:60,lvl:0,type:"svchar",len:64,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKSERIAL",gxz:"Z1020ArtStockSerial",gxold:"O1020ArtStockSerial",gxvar:"A1020ArtStockSerial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1020ArtStockSerial=n)},v2z:function(n){n!==undefined&&(gx.O.Z1020ArtStockSerial=n)},v2c:function(){gx.fn.setControlValue("ARTSTOCKSERIAL",gx.O.A1020ArtStockSerial,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1020ArtStockSerial=this.val())},val:function(){return gx.fn.getControlValue("ARTSTOCKSERIAL")},nac:gx.falseFn};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,fld:"",grid:0};n[64]={id:64,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKUSADO",gxz:"Z404ArtStockUsado",gxold:"O404ArtStockUsado",gxvar:"A404ArtStockUsado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A404ArtStockUsado=n)},v2z:function(n){n!==undefined&&(gx.O.Z404ArtStockUsado=n)},v2c:function(){gx.fn.setControlValue("ARTSTOCKUSADO",gx.O.A404ArtStockUsado,0)},c2v:function(){this.val()!==undefined&&(gx.O.A404ArtStockUsado=this.val())},val:function(){return gx.fn.getControlValue("ARTSTOCKUSADO")},nac:gx.falseFn};n[65]={id:65,fld:"",grid:0};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"",grid:0};n[68]={id:68,fld:"",grid:0};n[69]={id:69,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Caracteristicaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CARACTERISTICAID",gxz:"Z318CaracteristicaId",gxold:"O318CaracteristicaId",gxvar:"A318CaracteristicaId",ucs:[],op:[72],ip:[72,22,69],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A318CaracteristicaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z318CaracteristicaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CARACTERISTICAID",gx.O.A318CaracteristicaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A318CaracteristicaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CARACTERISTICAID",".")},nac:function(){return!(0==this.AV9CaracteristicaId)}};n[70]={id:70,fld:"",grid:0};n[71]={id:71,fld:"",grid:0};n[72]={id:72,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CARACTERISTICANOMBRE",gxz:"Z2705CaracteristicaNombre",gxold:"O2705CaracteristicaNombre",gxvar:"A2705CaracteristicaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2705CaracteristicaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2705CaracteristicaNombre=n)},v2c:function(){gx.fn.setControlValue("CARACTERISTICANOMBRE",gx.O.A2705CaracteristicaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2705CaracteristicaNombre=this.val())},val:function(){return gx.fn.getControlValue("CARACTERISTICANOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(72,function(){});n[73]={id:73,fld:"",grid:0};n[74]={id:74,fld:"",grid:0};n[75]={id:75,fld:"",grid:0};n[76]={id:76,fld:"",grid:0};n[77]={id:77,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTICULOCARACTERISTICASERIEVALOR",gxz:"Z2716ArticuloCaracteristicaSerieValor",gxold:"O2716ArticuloCaracteristicaSerieValor",gxvar:"A2716ArticuloCaracteristicaSerieValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2716ArticuloCaracteristicaSerieValor=n)},v2z:function(n){n!==undefined&&(gx.O.Z2716ArticuloCaracteristicaSerieValor=n)},v2c:function(){gx.fn.setControlValue("ARTICULOCARACTERISTICASERIEVALOR",gx.O.A2716ArticuloCaracteristicaSerieValor,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2716ArticuloCaracteristicaSerieValor=this.val())},val:function(){return gx.fn.getControlValue("ARTICULOCARACTERISTICASERIEVALOR")},nac:gx.falseFn};this.declareDomainHdlr(77,function(){});n[78]={id:78,fld:"",grid:0};n[79]={id:79,fld:"",grid:0};n[80]={id:80,fld:"",grid:0};n[81]={id:81,fld:"",grid:0};n[82]={id:82,fld:"BTNTRN_ENTER",grid:0,evt:"e135l11_client",std:"ENTER"};n[83]={id:83,fld:"",grid:0};n[84]={id:84,fld:"BTNTRN_CANCEL",grid:0,evt:"e145l11_client"};n[85]={id:85,fld:"",grid:0};n[86]={id:86,fld:"BTNTRN_DELETE",grid:0,evt:"e155l11_client",std:"DELETE"};n[87]={id:87,fld:"",grid:0};n[88]={id:88,fld:"",grid:0};n[89]={id:89,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[90]={id:90,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artentidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTENTIDADID",gxz:"Z22ArtEntidadId",gxold:"O22ArtEntidadId",gxvar:"A22ArtEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A22ArtEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z22ArtEntidadId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTENTIDADID",gx.O.A22ArtEntidadId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A22ArtEntidadId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTENTIDADID",".")},nac:gx.falseFn};n[91]={id:91,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTENTIDADNOMBRE",gxz:"Z977ArtEntidadNombre",gxold:"O977ArtEntidadNombre",gxvar:"A977ArtEntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A977ArtEntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z977ArtEntidadNombre=n)},v2c:function(){gx.fn.setControlValue("ARTENTIDADNOMBRE",gx.O.A977ArtEntidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A977ArtEntidadNombre=this.val())},val:function(){return gx.fn.getControlValue("ARTENTIDADNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(91,function(){});n[92]={id:92,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artstockingcmptpoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKINGCMPTPOID",gxz:"Z25ArtStockIngCmpTpoId",gxold:"O25ArtStockIngCmpTpoId",gxvar:"A25ArtStockIngCmpTpoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A25ArtStockIngCmpTpoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z25ArtStockIngCmpTpoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTSTOCKINGCMPTPOID",gx.O.A25ArtStockIngCmpTpoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A25ArtStockIngCmpTpoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTSTOCKINGCMPTPOID",".")},nac:gx.falseFn};n[93]={id:93,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artstockingcmptponom,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKINGCMPTPONOM",gxz:"Z1021ArtStockIngCmpTpoNom",gxold:"O1021ArtStockIngCmpTpoNom",gxvar:"A1021ArtStockIngCmpTpoNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1021ArtStockIngCmpTpoNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z1021ArtStockIngCmpTpoNom=n)},v2c:function(){gx.fn.setControlValue("ARTSTOCKINGCMPTPONOM",gx.O.A1021ArtStockIngCmpTpoNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1021ArtStockIngCmpTpoNom=this.val())},val:function(){return gx.fn.getControlValue("ARTSTOCKINGCMPTPONOM")},nac:gx.falseFn};this.declareDomainHdlr(93,function(){});n[94]={id:94,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artstockingcmpid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKINGCMPID",gxz:"Z400ArtStockIngCmpId",gxold:"O400ArtStockIngCmpId",gxvar:"A400ArtStockIngCmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A400ArtStockIngCmpId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z400ArtStockIngCmpId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTSTOCKINGCMPID",gx.O.A400ArtStockIngCmpId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A400ArtStockIngCmpId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTSTOCKINGCMPID",".")},nac:gx.falseFn};n[95]={id:95,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artstockingcmplinid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKINGCMPLINID",gxz:"Z401ArtStockIngCmpLinId",gxold:"O401ArtStockIngCmpLinId",gxvar:"A401ArtStockIngCmpLinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A401ArtStockIngCmpLinId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z401ArtStockIngCmpLinId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTSTOCKINGCMPLINID",gx.O.A401ArtStockIngCmpLinId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A401ArtStockIngCmpLinId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTSTOCKINGCMPLINID",".")},nac:gx.falseFn};n[96]={id:96,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artstockegrcmptpoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKEGRCMPTPOID",gxz:"Z26ArtStockEgrCmpTpoId",gxold:"O26ArtStockEgrCmpTpoId",gxvar:"A26ArtStockEgrCmpTpoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A26ArtStockEgrCmpTpoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z26ArtStockEgrCmpTpoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTSTOCKEGRCMPTPOID",gx.O.A26ArtStockEgrCmpTpoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A26ArtStockEgrCmpTpoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTSTOCKEGRCMPTPOID",".")},nac:gx.falseFn};n[97]={id:97,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artstockegrcmptponom,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKEGRCMPTPONOM",gxz:"Z1022ArtStockEgrCmpTpoNom",gxold:"O1022ArtStockEgrCmpTpoNom",gxvar:"A1022ArtStockEgrCmpTpoNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1022ArtStockEgrCmpTpoNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z1022ArtStockEgrCmpTpoNom=n)},v2c:function(){gx.fn.setControlValue("ARTSTOCKEGRCMPTPONOM",gx.O.A1022ArtStockEgrCmpTpoNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1022ArtStockEgrCmpTpoNom=this.val())},val:function(){return gx.fn.getControlValue("ARTSTOCKEGRCMPTPONOM")},nac:gx.falseFn};this.declareDomainHdlr(97,function(){});n[98]={id:98,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artstockegrcmpid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKEGRCMPID",gxz:"Z402ArtStockEgrCmpId",gxold:"O402ArtStockEgrCmpId",gxvar:"A402ArtStockEgrCmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A402ArtStockEgrCmpId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z402ArtStockEgrCmpId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTSTOCKEGRCMPID",gx.O.A402ArtStockEgrCmpId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A402ArtStockEgrCmpId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTSTOCKEGRCMPID",".")},nac:gx.falseFn};n[99]={id:99,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Artstockegrcmplinid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKEGRCMPLINID",gxz:"Z403ArtStockEgrCmpLinId",gxold:"O403ArtStockEgrCmpLinId",gxvar:"A403ArtStockEgrCmpLinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A403ArtStockEgrCmpLinId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z403ArtStockEgrCmpLinId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ARTSTOCKEGRCMPLINID",gx.O.A403ArtStockEgrCmpLinId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A403ArtStockEgrCmpLinId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ARTSTOCKEGRCMPLINID",".")},nac:gx.falseFn};n[100]={id:100,lvl:0,type:"char",len:15,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTICULOCARACTERISTICASERIE094",gxz:"Z2717ArticuloCaracteristicaSerie094",gxold:"O2717ArticuloCaracteristicaSerie094",gxvar:"A2717ArticuloCaracteristicaSerie094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2717ArticuloCaracteristicaSerie094=n)},v2z:function(n){n!==undefined&&(gx.O.Z2717ArticuloCaracteristicaSerie094=n)},v2c:function(){gx.fn.setControlValue("ARTICULOCARACTERISTICASERIE094",gx.O.A2717ArticuloCaracteristicaSerie094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2717ArticuloCaracteristicaSerie094=this.val())},val:function(){return gx.fn.getControlValue("ARTICULOCARACTERISTICASERIE094")},nac:gx.falseFn};this.declareDomainHdlr(100,function(){});n[101]={id:101,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTICULOCARACTERISTICASERIE095",gxz:"Z2718ArticuloCaracteristicaSerie095",gxold:"O2718ArticuloCaracteristicaSerie095",gxvar:"A2718ArticuloCaracteristicaSerie095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2718ArticuloCaracteristicaSerie095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2718ArticuloCaracteristicaSerie095=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("ARTICULOCARACTERISTICASERIE095",gx.O.A2718ArticuloCaracteristicaSerie095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A2718ArticuloCaracteristicaSerie095=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("ARTICULOCARACTERISTICASERIE095")},nac:gx.falseFn};this.declareDomainHdlr(101,function(){});n[102]={id:102,fld:"PROMPT_8",grid:11};n[103]={id:103,fld:"PROMPT_21",grid:11};this.A8ArtId=0;this.Z8ArtId=0;this.O8ArtId=0;this.A1534ArtDescripcionGeneral="";this.Z1534ArtDescripcionGeneral="";this.O1534ArtDescripcionGeneral="";this.A21ArtStockId=0;this.Z21ArtStockId=0;this.O21ArtStockId=0;this.A23ArtSucId=0;this.Z23ArtSucId=0;this.O23ArtSucId=0;this.A431ArtSucNom="";this.Z431ArtSucNom="";this.O431ArtSucNom="";this.A24ArtDepositoId=0;this.Z24ArtDepositoId=0;this.O24ArtDepositoId=0;this.A978ArtDepositoNombre="";this.Z978ArtDepositoNombre="";this.O978ArtDepositoNombre="";this.A2312ArtStockIngComprobante="";this.Z2312ArtStockIngComprobante="";this.O2312ArtStockIngComprobante="";this.A2311ArtStockEgrComprobante="";this.Z2311ArtStockEgrComprobante="";this.O2311ArtStockEgrComprobante="";this.A1020ArtStockSerial="";this.Z1020ArtStockSerial="";this.O1020ArtStockSerial="";this.A404ArtStockUsado="";this.Z404ArtStockUsado="";this.O404ArtStockUsado="";this.A318CaracteristicaId=0;this.Z318CaracteristicaId=0;this.O318CaracteristicaId=0;this.A2705CaracteristicaNombre="";this.Z2705CaracteristicaNombre="";this.O2705CaracteristicaNombre="";this.A2716ArticuloCaracteristicaSerieValor="";this.Z2716ArticuloCaracteristicaSerieValor="";this.O2716ArticuloCaracteristicaSerieValor="";this.A22ArtEntidadId=0;this.Z22ArtEntidadId=0;this.O22ArtEntidadId=0;this.A977ArtEntidadNombre="";this.Z977ArtEntidadNombre="";this.O977ArtEntidadNombre="";this.A25ArtStockIngCmpTpoId=0;this.Z25ArtStockIngCmpTpoId=0;this.O25ArtStockIngCmpTpoId=0;this.A1021ArtStockIngCmpTpoNom="";this.Z1021ArtStockIngCmpTpoNom="";this.O1021ArtStockIngCmpTpoNom="";this.A400ArtStockIngCmpId=0;this.Z400ArtStockIngCmpId=0;this.O400ArtStockIngCmpId=0;this.A401ArtStockIngCmpLinId=0;this.Z401ArtStockIngCmpLinId=0;this.O401ArtStockIngCmpLinId=0;this.A26ArtStockEgrCmpTpoId=0;this.Z26ArtStockEgrCmpTpoId=0;this.O26ArtStockEgrCmpTpoId=0;this.A1022ArtStockEgrCmpTpoNom="";this.Z1022ArtStockEgrCmpTpoNom="";this.O1022ArtStockEgrCmpTpoNom="";this.A402ArtStockEgrCmpId=0;this.Z402ArtStockEgrCmpId=0;this.O402ArtStockEgrCmpId=0;this.A403ArtStockEgrCmpLinId=0;this.Z403ArtStockEgrCmpLinId=0;this.O403ArtStockEgrCmpLinId=0;this.A2717ArticuloCaracteristicaSerie094="";this.Z2717ArticuloCaracteristicaSerie094="";this.O2717ArticuloCaracteristicaSerie094="";this.A2718ArticuloCaracteristicaSerie095=gx.date.nullDate();this.Z2718ArticuloCaracteristicaSerie095=gx.date.nullDate();this.O2718ArticuloCaracteristicaSerie095=gx.date.nullDate();this.A11SGrupoId=0;this.A10GrupoId=0;this.A9MarcaId=0;this.AV10WWPContext={User:0,UsuNombre:"",System:"",Puesto:0,PuestoNombre:"",Rol:0,Ingreso:"",Opcion:"",EntidadId:0,EntidadNombre:"",SucursalId:0,SucursalNombre:"",ProvinciaId:0,ProvinciaNombre:"",UsuPwdMar:"",EmpleadoId:0};this.AV11TrnContext={CallerObject:"",CallerOnDelete:!1,CallerURL:"",TransactionName:"",Attributes:[]};this.AV7ArtId=0;this.AV8ArtStockId=0;this.AV9CaracteristicaId=0;this.AV12WebSession={};this.A8ArtId=0;this.A21ArtStockId=0;this.A318CaracteristicaId=0;this.A2718ArticuloCaracteristicaSerie095=gx.date.nullDate();this.A2717ArticuloCaracteristicaSerie094="";this.A2311ArtStockEgrComprobante="";this.A2312ArtStockIngComprobante="";this.A1534ArtDescripcionGeneral="";this.A22ArtEntidadId=0;this.A977ArtEntidadNombre="";this.A23ArtSucId=0;this.A431ArtSucNom="";this.A24ArtDepositoId=0;this.A978ArtDepositoNombre="";this.A25ArtStockIngCmpTpoId=0;this.A1021ArtStockIngCmpTpoNom="";this.A400ArtStockIngCmpId=0;this.A401ArtStockIngCmpLinId=0;this.A26ArtStockEgrCmpTpoId=0;this.A1022ArtStockEgrCmpTpoNom="";this.A402ArtStockEgrCmpId=0;this.A403ArtStockEgrCmpLinId=0;this.A1020ArtStockSerial="";this.A404ArtStockUsado="";this.A2705CaracteristicaNombre="";this.A2716ArticuloCaracteristicaSerieValor="";this.A16ArtNom="";this.A359MarcaNombre="";this.A362GrupoNombre="";this.A361SGrupoNombre="";this.A356ArtTpo="";this.Gx_mode="";this.Events={e125l2_client:["AFTER TRN",!0],e135l11_client:["ENTER",!0],e145l11_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV7ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV8ArtStockId",fld:"vARTSTOCKID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV9CaracteristicaId",fld:"vCARACTERISTICAID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV11TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV7ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV8ArtStockId",fld:"vARTSTOCKID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV9CaracteristicaId",fld:"vCARACTERISTICAID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.START=[[],[{av:"AV10WWPContext",fld:"vWWPCONTEXT",pic:""},{av:"AV11TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("ARTENTIDADID","Visible")',ctrl:"ARTENTIDADID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTENTIDADNOMBRE","Visible")',ctrl:"ARTENTIDADNOMBRE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTSTOCKINGCMPTPOID","Visible")',ctrl:"ARTSTOCKINGCMPTPOID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTSTOCKINGCMPTPONOM","Visible")',ctrl:"ARTSTOCKINGCMPTPONOM",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTSTOCKINGCMPID","Visible")',ctrl:"ARTSTOCKINGCMPID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTSTOCKINGCMPLINID","Visible")',ctrl:"ARTSTOCKINGCMPLINID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTSTOCKEGRCMPTPOID","Visible")',ctrl:"ARTSTOCKEGRCMPTPOID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTSTOCKEGRCMPTPONOM","Visible")',ctrl:"ARTSTOCKEGRCMPTPONOM",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTSTOCKEGRCMPID","Visible")',ctrl:"ARTSTOCKEGRCMPID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTSTOCKEGRCMPLINID","Visible")',ctrl:"ARTSTOCKEGRCMPLINID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTICULOCARACTERISTICASERIE094","Visible")',ctrl:"ARTICULOCARACTERISTICASERIE094",prop:"Visible"},{av:'gx.fn.getCtrlProperty("ARTICULOCARACTERISTICASERIE095","Visible")',ctrl:"ARTICULOCARACTERISTICASERIE095",prop:"Visible"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV11TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0}],[]];this.EvtParms.VALID_ARTID=[[{av:"A8ArtId",fld:"ARTID",pic:"ZZZZZZZZ9"},{av:"A9MarcaId",fld:"MARCAID",pic:"ZZZ9"},{av:"A10GrupoId",fld:"GRUPOID",pic:"ZZZ9"},{av:"A11SGrupoId",fld:"SGRUPOID",pic:"ZZZ9"},{av:"A16ArtNom",fld:"ARTNOM",pic:"@!"},{av:"A359MarcaNombre",fld:"MARCANOMBRE",pic:"@!"},{av:"A362GrupoNombre",fld:"GRUPONOMBRE",pic:"@!"},{av:"A361SGrupoNombre",fld:"SGRUPONOMBRE",pic:"@!"},{av:"A356ArtTpo",fld:"ARTTPO",pic:""},{av:"A1534ArtDescripcionGeneral",fld:"ARTDESCRIPCIONGENERAL",pic:"@!"}],[{av:"A9MarcaId",fld:"MARCAID",pic:"ZZZ9"},{av:"A10GrupoId",fld:"GRUPOID",pic:"ZZZ9"},{av:"A11SGrupoId",fld:"SGRUPOID",pic:"ZZZ9"},{av:"A16ArtNom",fld:"ARTNOM",pic:"@!"},{av:"A356ArtTpo",fld:"ARTTPO",pic:""},{av:"A359MarcaNombre",fld:"MARCANOMBRE",pic:"@!"},{av:"A362GrupoNombre",fld:"GRUPONOMBRE",pic:"@!"},{av:"A361SGrupoNombre",fld:"SGRUPONOMBRE",pic:"@!"},{av:"A1534ArtDescripcionGeneral",fld:"ARTDESCRIPCIONGENERAL",pic:"@!"}]];this.EvtParms.VALID_ARTSTOCKID=[[{av:"A8ArtId",fld:"ARTID",pic:"ZZZZZZZZ9"},{av:"A21ArtStockId",fld:"ARTSTOCKID",pic:"ZZZZZZZZ9"},{av:"A22ArtEntidadId",fld:"ARTENTIDADID",pic:"Z9"},{av:"A23ArtSucId",fld:"ARTSUCID",pic:"ZZZ9"},{av:"A24ArtDepositoId",fld:"ARTDEPOSITOID",pic:"ZZZ9"},{av:"A25ArtStockIngCmpTpoId",fld:"ARTSTOCKINGCMPTPOID",pic:"ZZZ9"},{av:"A1021ArtStockIngCmpTpoNom",fld:"ARTSTOCKINGCMPTPONOM",pic:"@!"},{av:"A400ArtStockIngCmpId",fld:"ARTSTOCKINGCMPID",pic:"ZZZZZZZZ9"},{av:"A401ArtStockIngCmpLinId",fld:"ARTSTOCKINGCMPLINID",pic:"ZZZ9"},{av:"A26ArtStockEgrCmpTpoId",fld:"ARTSTOCKEGRCMPTPOID",pic:"ZZZ9"},{av:"A1022ArtStockEgrCmpTpoNom",fld:"ARTSTOCKEGRCMPTPONOM",pic:"@!"},{av:"A402ArtStockEgrCmpId",fld:"ARTSTOCKEGRCMPID",pic:"ZZZZZZZZ9"},{av:"A403ArtStockEgrCmpLinId",fld:"ARTSTOCKEGRCMPLINID",pic:"ZZZ9"},{av:"A1020ArtStockSerial",fld:"ARTSTOCKSERIAL",pic:""},{av:"A404ArtStockUsado",fld:"ARTSTOCKUSADO",pic:""},{av:"A977ArtEntidadNombre",fld:"ARTENTIDADNOMBRE",pic:"@!"},{av:"A431ArtSucNom",fld:"ARTSUCNOM",pic:"@!"},{av:"A978ArtDepositoNombre",fld:"ARTDEPOSITONOMBRE",pic:"@!"},{av:"A2312ArtStockIngComprobante",fld:"ARTSTOCKINGCOMPROBANTE",pic:"@!"},{av:"A2311ArtStockEgrComprobante",fld:"ARTSTOCKEGRCOMPROBANTE",pic:"@!"}],[{av:"A400ArtStockIngCmpId",fld:"ARTSTOCKINGCMPID",pic:"ZZZZZZZZ9"},{av:"A401ArtStockIngCmpLinId",fld:"ARTSTOCKINGCMPLINID",pic:"ZZZ9"},{av:"A402ArtStockEgrCmpId",fld:"ARTSTOCKEGRCMPID",pic:"ZZZZZZZZ9"},{av:"A403ArtStockEgrCmpLinId",fld:"ARTSTOCKEGRCMPLINID",pic:"ZZZ9"},{av:"A1020ArtStockSerial",fld:"ARTSTOCKSERIAL",pic:""},{av:"A404ArtStockUsado",fld:"ARTSTOCKUSADO",pic:""},{av:"A22ArtEntidadId",fld:"ARTENTIDADID",pic:"Z9"},{av:"A23ArtSucId",fld:"ARTSUCID",pic:"ZZZ9"},{av:"A24ArtDepositoId",fld:"ARTDEPOSITOID",pic:"ZZZ9"},{av:"A25ArtStockIngCmpTpoId",fld:"ARTSTOCKINGCMPTPOID",pic:"ZZZ9"},{av:"A26ArtStockEgrCmpTpoId",fld:"ARTSTOCKEGRCMPTPOID",pic:"ZZZ9"},{av:"A977ArtEntidadNombre",fld:"ARTENTIDADNOMBRE",pic:"@!"},{av:"A431ArtSucNom",fld:"ARTSUCNOM",pic:"@!"},{av:"A978ArtDepositoNombre",fld:"ARTDEPOSITONOMBRE",pic:"@!"},{av:"A1021ArtStockIngCmpTpoNom",fld:"ARTSTOCKINGCMPTPONOM",pic:"@!"},{av:"A2312ArtStockIngComprobante",fld:"ARTSTOCKINGCOMPROBANTE",pic:"@!"},{av:"A1022ArtStockEgrCmpTpoNom",fld:"ARTSTOCKEGRCMPTPONOM",pic:"@!"},{av:"A2311ArtStockEgrComprobante",fld:"ARTSTOCKEGRCOMPROBANTE",pic:"@!"}]];this.EvtParms.VALID_ARTSUCID=[[],[]];this.EvtParms.VALID_ARTDEPOSITOID=[[],[]];this.EvtParms.VALID_CARACTERISTICAID=[[{av:"A318CaracteristicaId",fld:"CARACTERISTICAID",pic:"ZZZ9"},{av:"A8ArtId",fld:"ARTID",pic:"ZZZZZZZZ9"},{av:"A2705CaracteristicaNombre",fld:"CARACTERISTICANOMBRE",pic:"@!"}],[{av:"A2705CaracteristicaNombre",fld:"CARACTERISTICANOMBRE",pic:"@!"}]];this.EvtParms.VALID_ARTENTIDADID=[[],[]];this.EvtParms.VALID_ARTSTOCKINGCMPTPOID=[[],[]];this.EvtParms.VALID_ARTSTOCKINGCMPTPONOM=[[],[]];this.EvtParms.VALID_ARTSTOCKINGCMPID=[[],[]];this.EvtParms.VALID_ARTSTOCKINGCMPLINID=[[],[]];this.EvtParms.VALID_ARTSTOCKEGRCMPTPOID=[[],[]];this.EvtParms.VALID_ARTSTOCKEGRCMPTPONOM=[[],[]];this.EvtParms.VALID_ARTSTOCKEGRCMPID=[[],[]];this.EvtParms.VALID_ARTSTOCKEGRCMPLINID=[[],[]];this.setPrompt("PROMPT_8",[22]);this.setPrompt("PROMPT_21",[30]);this.EnterCtrl=["BTNTRN_ENTER"];this.setVCMap("A16ArtNom","ARTNOM",0,"svchar",64,0);this.setVCMap("A359MarcaNombre","MARCANOMBRE",0,"svchar",64,0);this.setVCMap("A362GrupoNombre","GRUPONOMBRE",0,"svchar",64,0);this.setVCMap("A361SGrupoNombre","SGRUPONOMBRE",0,"svchar",64,0);this.setVCMap("A356ArtTpo","ARTTPO",0,"char",3,0);this.setVCMap("AV7ArtId","vARTID",0,"int",9,0);this.setVCMap("AV8ArtStockId","vARTSTOCKID",0,"int",9,0);this.setVCMap("AV9CaracteristicaId","vCARACTERISTICAID",0,"int",4,0);this.setVCMap("A9MarcaId","MARCAID",0,"int",4,0);this.setVCMap("A10GrupoId","GRUPOID",0,"int",4,0);this.setVCMap("A11SGrupoId","SGRUPOID",0,"int",4,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV11TrnContext","vTRNCONTEXT",0,"WWPBaseObjectsWWPTransactionContext",0,0);this.Initialize()});gx.wi(function(){gx.createParentObj(articulocaracteristicaserie)})