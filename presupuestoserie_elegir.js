/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:20:14.14
*/
gx.evt.autoSkip=!1;gx.define("presupuestoserie_elegir",!1,function(){var n,t,i;this.ServerClass="presupuestoserie_elegir";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV5ArtGarantia=gx.fn.getControlValue("vARTGARANTIA");this.AV16PreId=gx.fn.getIntegerValue("vPREID",".");this.AV6ArtId=gx.fn.getIntegerValue("vARTID",".");this.AV12Contado=gx.fn.getControlValue("vCONTADO");this.AV15PopupName=gx.fn.getControlValue("vPOPUPNAME");this.AV14Modo=gx.fn.getControlValue("vMODO");this.AV6ArtId=gx.fn.getIntegerValue("vARTID",".")};this.Valid_Artid=function(){var n=gx.fn.currentGridRowImpl(38);return this.validCliEvt("Valid_Artid",38,function(){try{if(gx.fn.currentGridRowImpl(38)===0)return!0;var n=gx.util.balloon.getNew("ARTID",gx.fn.currentGridRowImpl(38));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artstockid=function(){var n=gx.fn.currentGridRowImpl(38);return this.validCliEvt("Valid_Artstockid",38,function(){try{if(gx.fn.currentGridRowImpl(38)===0)return!0;var n=gx.util.balloon.getNew("ARTSTOCKID",gx.fn.currentGridRowImpl(38));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artentidadid=function(){var n=gx.fn.currentGridRowImpl(38);return this.validCliEvt("Valid_Artentidadid",38,function(){try{if(gx.fn.currentGridRowImpl(38)===0)return!0;var n=gx.util.balloon.getNew("ARTENTIDADID",gx.fn.currentGridRowImpl(38));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artsucid=function(){var n=gx.fn.currentGridRowImpl(38);return this.validCliEvt("Valid_Artsucid",38,function(){try{if(gx.fn.currentGridRowImpl(38)===0)return!0;var n=gx.util.balloon.getNew("ARTSUCID",gx.fn.currentGridRowImpl(38));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artstockcolor=function(){var n=gx.fn.currentGridRowImpl(38);return this.validCliEvt("Valid_Artstockcolor",38,function(){try{if(gx.fn.currentGridRowImpl(38)===0)return!0;var n=gx.util.balloon.getNew("ARTSTOCKCOLOR",gx.fn.currentGridRowImpl(38));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artstockchasis=function(){var n=gx.fn.currentGridRowImpl(38);return this.validCliEvt("Valid_Artstockchasis",38,function(){try{if(gx.fn.currentGridRowImpl(38)===0)return!0;var n=gx.util.balloon.getNew("ARTSTOCKCHASIS",gx.fn.currentGridRowImpl(38));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artid=function(){var n=gx.fn.currentGridRowImpl(38);return this.validCliEvt("Valid_Artid",38,function(){try{if(gx.fn.currentGridRowImpl(38)===0)return!0;var n=gx.util.balloon.getNew("ARTID",gx.fn.currentGridRowImpl(38));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e14n92_client=function(){return this.executeServerEvent("VELEGIR.CLICK",!0,arguments[0],!1,!1)};this.e11n92_client=function(){return this.setEventParameters([["PopupName","vPOPUPNAME","AV15PopupName"]],arguments[2]),this.executeServerEvent("GX.EXTENSIONS.WEB.POPUP.ONPOPUPCLOSED",!0,null,!0,!1)};this.e15n92_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e16n92_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,39,40,41,42,43,44,45,46,47,48,49,50];this.GXLastCtrlId=50;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",38,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"presupuestoserie_elegir",[],!1,1,!0,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.GridContainer;t.addSingleLineEdit(8,39,"ARTID","Ide.","","ArtId","int",0,"px",9,9,"right",null,[],8,"ArtId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addSingleLineEdit(21,40,"ARTSTOCKID","Ide.","","ArtStockId","int",0,"px",9,9,"right",null,[],21,"ArtStockId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addSingleLineEdit(22,41,"ARTENTIDADID","Ide.","","ArtEntidadId","int",0,"px",2,2,"right",null,[],22,"ArtEntidadId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addSingleLineEdit(23,42,"ARTSUCID","Ide.","","ArtSucId","int",0,"px",4,4,"right",null,[],23,"ArtSucId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addSingleLineEdit(24,43,"ARTDEPOSITOID","Ide.","","ArtDepositoId","int",0,"px",4,4,"right",null,[],24,"ArtDepositoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addSingleLineEdit(431,44,"ARTSUCNOM","Sucursal","","ArtSucNom","svchar",0,"px",64,64,"left",null,[],431,"ArtSucNom",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addSingleLineEdit(1020,45,"ARTSTOCKSERIAL","Serial","","ArtStockSerial","svchar",0,"px",64,64,"left",null,[],1020,"ArtStockSerial",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addSingleLineEdit(2900,46,"ARTSTOCKCOLOR","Color ","","ArtStockColor","svchar",0,"px",64,64,"left",null,[],2900,"ArtStockColor",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addSingleLineEdit(2901,47,"ARTSTOCKCHASIS","Chasis","","ArtStockChasis","svchar",0,"px",64,64,"left",null,[],2901,"ArtStockChasis",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addSingleLineEdit(2902,48,"ARTSTOCKMOTOR","Motor","","ArtStockMotor","svchar",0,"px",64,64,"left",null,[],2902,"ArtStockMotor",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addSingleLineEdit(404,49,"ARTSTOCKUSADO","Usado","","ArtStockUsado","char",0,"px",1,1,"left",null,[],404,"ArtStockUsado",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addBitmap("&Elegir","vELEGIR",50,0,"px",17,"px","e14n92_client","","","ActionBaseColorAttribute","WWActionColumn");this.GridContainer.emptyText="";this.setGrid(t);this.DVPANEL_UNNAMEDTABLE1Container=gx.uc.getNew(this,15,0,"BootstrapPanel","DVPANEL_UNNAMEDTABLE1Container","Dvpanel_unnamedtable1","DVPANEL_UNNAMEDTABLE1");i=this.DVPANEL_UNNAMEDTABLE1Container;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setDynProp("Title","Title","","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setProp("Gx Control Type","Gxcontroltype","","int");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[17]={id:17,fld:"UNNAMEDTABLE1",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vARTSUCNOM",gxz:"ZV11ArtSucNom",gxold:"OV11ArtSucNom",gxvar:"AV11ArtSucNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV11ArtSucNom=n)},v2z:function(n){n!==undefined&&(gx.O.ZV11ArtSucNom=n)},v2c:function(){gx.fn.setControlValue("vARTSUCNOM",gx.O.AV11ArtSucNom,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV11ArtSucNom=this.val())},val:function(){return gx.fn.getControlValue("vARTSUCNOM")},nac:gx.falseFn};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vARTSTOCKCOLOR",gxz:"ZV8ArtStockColor",gxold:"OV8ArtStockColor",gxvar:"AV8ArtStockColor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV8ArtStockColor=n)},v2z:function(n){n!==undefined&&(gx.O.ZV8ArtStockColor=n)},v2c:function(){gx.fn.setControlValue("vARTSTOCKCOLOR",gx.O.AV8ArtStockColor,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV8ArtStockColor=this.val())},val:function(){return gx.fn.getControlValue("vARTSTOCKCOLOR")},nac:gx.falseFn};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vARTSTOCKCHASIS",gxz:"ZV7ArtStockChasis",gxold:"OV7ArtStockChasis",gxvar:"AV7ArtStockChasis",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV7ArtStockChasis=n)},v2z:function(n){n!==undefined&&(gx.O.ZV7ArtStockChasis=n)},v2c:function(){gx.fn.setControlValue("vARTSTOCKCHASIS",gx.O.AV7ArtStockChasis,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV7ArtStockChasis=this.val())},val:function(){return gx.fn.getControlValue("vARTSTOCKCHASIS")},nac:gx.falseFn};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,lvl:0,type:"svchar",len:64,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vARTSTOCKSERIAL",gxz:"ZV10ArtStockSerial",gxold:"OV10ArtStockSerial",gxvar:"AV10ArtStockSerial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV10ArtStockSerial=n)},v2z:function(n){n!==undefined&&(gx.O.ZV10ArtStockSerial=n)},v2c:function(){gx.fn.setControlValue("vARTSTOCKSERIAL",gx.O.AV10ArtStockSerial,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV10ArtStockSerial=this.val())},val:function(){return gx.fn.getControlValue("vARTSTOCKSERIAL")},nac:gx.falseFn};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[39]={id:39,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:this.Valid_Artid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTID",gxz:"Z8ArtId",gxold:"O8ArtId",gxvar:"A8ArtId",ucs:[],op:[48,47,46,44],ip:[48,44,47,46,40,39,42,41],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A8ArtId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z8ArtId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ARTID",n||gx.fn.currentGridRowImpl(38),gx.O.A8ArtId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A8ArtId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ARTID",n||gx.fn.currentGridRowImpl(38),".")},nac:gx.falseFn};n[40]={id:40,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:this.Valid_Artstockid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKID",gxz:"Z21ArtStockId",gxold:"O21ArtStockId",gxvar:"A21ArtStockId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A21ArtStockId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z21ArtStockId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ARTSTOCKID",n||gx.fn.currentGridRowImpl(38),gx.O.A21ArtStockId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A21ArtStockId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ARTSTOCKID",n||gx.fn.currentGridRowImpl(38),".")},nac:gx.falseFn};n[41]={id:41,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:this.Valid_Artentidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTENTIDADID",gxz:"Z22ArtEntidadId",gxold:"O22ArtEntidadId",gxvar:"A22ArtEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A22ArtEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z22ArtEntidadId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ARTENTIDADID",n||gx.fn.currentGridRowImpl(38),gx.O.A22ArtEntidadId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A22ArtEntidadId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ARTENTIDADID",n||gx.fn.currentGridRowImpl(38),".")},nac:gx.falseFn};n[42]={id:42,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:this.Valid_Artsucid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSUCID",gxz:"Z23ArtSucId",gxold:"O23ArtSucId",gxvar:"A23ArtSucId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A23ArtSucId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z23ArtSucId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ARTSUCID",n||gx.fn.currentGridRowImpl(38),gx.O.A23ArtSucId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A23ArtSucId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ARTSUCID",n||gx.fn.currentGridRowImpl(38),".")},nac:gx.falseFn};n[43]={id:43,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTDEPOSITOID",gxz:"Z24ArtDepositoId",gxold:"O24ArtDepositoId",gxvar:"A24ArtDepositoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A24ArtDepositoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z24ArtDepositoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ARTDEPOSITOID",n||gx.fn.currentGridRowImpl(38),gx.O.A24ArtDepositoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A24ArtDepositoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ARTDEPOSITOID",n||gx.fn.currentGridRowImpl(38),".")},nac:gx.falseFn};n[44]={id:44,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSUCNOM",gxz:"Z431ArtSucNom",gxold:"O431ArtSucNom",gxvar:"A431ArtSucNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A431ArtSucNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z431ArtSucNom=n)},v2c:function(n){gx.fn.setGridControlValue("ARTSUCNOM",n||gx.fn.currentGridRowImpl(38),gx.O.A431ArtSucNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A431ArtSucNom=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ARTSUCNOM",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};n[45]={id:45,lvl:2,type:"svchar",len:64,dec:0,sign:!1,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKSERIAL",gxz:"Z1020ArtStockSerial",gxold:"O1020ArtStockSerial",gxvar:"A1020ArtStockSerial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1020ArtStockSerial=n)},v2z:function(n){n!==undefined&&(gx.O.Z1020ArtStockSerial=n)},v2c:function(n){gx.fn.setGridControlValue("ARTSTOCKSERIAL",n||gx.fn.currentGridRowImpl(38),gx.O.A1020ArtStockSerial,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1020ArtStockSerial=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ARTSTOCKSERIAL",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};n[46]={id:46,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:this.Valid_Artstockcolor,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKCOLOR",gxz:"Z2900ArtStockColor",gxold:"O2900ArtStockColor",gxvar:"A2900ArtStockColor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2900ArtStockColor=n)},v2z:function(n){n!==undefined&&(gx.O.Z2900ArtStockColor=n)},v2c:function(n){gx.fn.setGridControlValue("ARTSTOCKCOLOR",n||gx.fn.currentGridRowImpl(38),gx.O.A2900ArtStockColor,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2900ArtStockColor=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ARTSTOCKCOLOR",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};n[47]={id:47,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:this.Valid_Artstockchasis,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKCHASIS",gxz:"Z2901ArtStockChasis",gxold:"O2901ArtStockChasis",gxvar:"A2901ArtStockChasis",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2901ArtStockChasis=n)},v2z:function(n){n!==undefined&&(gx.O.Z2901ArtStockChasis=n)},v2c:function(n){gx.fn.setGridControlValue("ARTSTOCKCHASIS",n||gx.fn.currentGridRowImpl(38),gx.O.A2901ArtStockChasis,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2901ArtStockChasis=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ARTSTOCKCHASIS",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};n[48]={id:48,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKMOTOR",gxz:"Z2902ArtStockMotor",gxold:"O2902ArtStockMotor",gxvar:"A2902ArtStockMotor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2902ArtStockMotor=n)},v2z:function(n){n!==undefined&&(gx.O.Z2902ArtStockMotor=n)},v2c:function(n){gx.fn.setGridControlValue("ARTSTOCKMOTOR",n||gx.fn.currentGridRowImpl(38),gx.O.A2902ArtStockMotor,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2902ArtStockMotor=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ARTSTOCKMOTOR",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};n[49]={id:49,lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTOCKUSADO",gxz:"Z404ArtStockUsado",gxold:"O404ArtStockUsado",gxvar:"A404ArtStockUsado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A404ArtStockUsado=n)},v2z:function(n){n!==undefined&&(gx.O.Z404ArtStockUsado=n)},v2c:function(n){gx.fn.setGridControlValue("ARTSTOCKUSADO",n||gx.fn.currentGridRowImpl(38),gx.O.A404ArtStockUsado,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A404ArtStockUsado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ARTSTOCKUSADO",n||gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};n[50]={id:50,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vELEGIR",gxz:"ZV13Elegir",gxold:"OV13Elegir",gxvar:"AV13Elegir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV13Elegir=n)},v2z:function(n){n!==undefined&&(gx.O.ZV13Elegir=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vELEGIR",n||gx.fn.currentGridRowImpl(38),gx.O.AV13Elegir,gx.O.AV24Elegir_GXI)},c2v:function(n){gx.O.AV24Elegir_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV13Elegir=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vELEGIR",n||gx.fn.currentGridRowImpl(38))},val_GXI:function(n){return gx.fn.getGridControlValue("vELEGIR_GXI",n||gx.fn.currentGridRowImpl(38))},gxvar_GXI:"AV24Elegir_GXI",nac:gx.falseFn,evt:"e14n92_client"};this.AV11ArtSucNom="";this.ZV11ArtSucNom="";this.OV11ArtSucNom="";this.AV8ArtStockColor="";this.ZV8ArtStockColor="";this.OV8ArtStockColor="";this.AV7ArtStockChasis="";this.ZV7ArtStockChasis="";this.OV7ArtStockChasis="";this.AV10ArtStockSerial="";this.ZV10ArtStockSerial="";this.OV10ArtStockSerial="";this.Z8ArtId=0;this.O8ArtId=0;this.Z21ArtStockId=0;this.O21ArtStockId=0;this.Z22ArtEntidadId=0;this.O22ArtEntidadId=0;this.Z23ArtSucId=0;this.O23ArtSucId=0;this.Z24ArtDepositoId=0;this.O24ArtDepositoId=0;this.Z431ArtSucNom="";this.O431ArtSucNom="";this.Z1020ArtStockSerial="";this.O1020ArtStockSerial="";this.Z2900ArtStockColor="";this.O2900ArtStockColor="";this.Z2901ArtStockChasis="";this.O2901ArtStockChasis="";this.Z2902ArtStockMotor="";this.O2902ArtStockMotor="";this.Z404ArtStockUsado="";this.O404ArtStockUsado="";this.ZV13Elegir="";this.OV13Elegir="";this.AV11ArtSucNom="";this.AV8ArtStockColor="";this.AV7ArtStockChasis="";this.AV10ArtStockSerial="";this.AV16PreId=0;this.AV6ArtId=0;this.AV12Contado="";this.AV14Modo="";this.A356ArtTpo="";this.A8ArtId=0;this.A21ArtStockId=0;this.A22ArtEntidadId=0;this.A23ArtSucId=0;this.A24ArtDepositoId=0;this.A431ArtSucNom="";this.A1020ArtStockSerial="";this.A2900ArtStockColor="";this.A2901ArtStockChasis="";this.A2902ArtStockMotor="";this.A404ArtStockUsado="";this.AV13Elegir="";this.A2314ArtGarantia="";this.A361SGrupoNombre="";this.A362GrupoNombre="";this.A359MarcaNombre="";this.A16ArtNom="";this.A1534ArtDescripcionGeneral="";this.A371ArtStkAct=0;this.A1535ArtStkTotal=0;this.A9MarcaId=0;this.A10GrupoId=0;this.A11SGrupoId=0;this.AV5ArtGarantia="";this.AV15PopupName="";this.Events={e14n92_client:["VELEGIR.CLICK",!0],e11n92_client:["GX.EXTENSIONS.WEB.POPUP.ONPOPUPCLOSED",!0],e15n92_client:["ENTER",!0],e16n92_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11ArtSucNom",fld:"vARTSUCNOM",pic:"@!"},{av:"AV8ArtStockColor",fld:"vARTSTOCKCOLOR",pic:"@!"},{av:"AV7ArtStockChasis",fld:"vARTSTOCKCHASIS",pic:"@!"},{av:"AV10ArtStockSerial",fld:"vARTSTOCKSERIAL",pic:""},{av:"AV16PreId",fld:"vPREID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV6ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV12Contado",fld:"vCONTADO",pic:"",hsh:!0}],[]];this.EvtParms.START=[[{ctrl:"FORM",prop:"Headerrawhtml"},{av:"A8ArtId",fld:"ARTID",pic:"ZZZZZZZZ9"},{av:"AV6ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"A2314ArtGarantia",fld:"ARTGARANTIA",pic:""},{av:"A1534ArtDescripcionGeneral",fld:"ARTDESCRIPCIONGENERAL",pic:"@!"},{av:"A371ArtStkAct",fld:"ARTSTKACT",pic:"Z,ZZZ,ZZ9.99"},{av:"A1535ArtStkTotal",fld:"ARTSTKTOTAL",pic:"Z,ZZZ,ZZ9.99"}],[{ctrl:"FORM",prop:"Headerrawhtml"},{ctrl:"GRID",prop:"Rows"},{av:"AV5ArtGarantia",fld:"vARTGARANTIA",pic:""},{av:"this.DVPANEL_UNNAMEDTABLE1Container.Title",ctrl:"DVPANEL_UNNAMEDTABLE1",prop:"Title"}]];this.EvtParms["GRID.LOAD"]=[[{av:"A2900ArtStockColor",fld:"ARTSTOCKCOLOR",pic:"@!"}],[{av:'gx.fn.getCtrlProperty("ARTSTOCKCOLOR","Fontbold")',ctrl:"ARTSTOCKCOLOR",prop:"Fontbold"},{av:'gx.fn.getCtrlProperty("ARTSTOCKCOLOR","Backcolor")',ctrl:"ARTSTOCKCOLOR",prop:"Backcolor"},{av:'gx.fn.getCtrlProperty("ARTSTOCKCOLOR","Forecolor")',ctrl:"ARTSTOCKCOLOR",prop:"Forecolor"},{av:"AV13Elegir",fld:"vELEGIR",pic:""},{av:'gx.fn.getCtrlProperty("vELEGIR","Tooltiptext")',ctrl:"vELEGIR",prop:"Tooltiptext"}]];this.EvtParms["VELEGIR.CLICK"]=[[{av:"A21ArtStockId",fld:"ARTSTOCKID",pic:"ZZZZZZZZ9"},{av:"AV5ArtGarantia",fld:"vARTGARANTIA",pic:""},{av:"AV16PreId",fld:"vPREID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV6ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"A22ArtEntidadId",fld:"ARTENTIDADID",pic:"Z9"},{av:"A23ArtSucId",fld:"ARTSUCID",pic:"ZZZ9"},{av:"AV12Contado",fld:"vCONTADO",pic:"",hsh:!0}],[]];this.EvtParms["GX.EXTENSIONS.WEB.POPUP.ONPOPUPCLOSED"]=[[{av:"AV15PopupName",fld:"vPOPUPNAME",pic:""}],[]];this.addExoEventHandler("extensions.web.popup.onpopupclosed",this.e11n92_client);this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11ArtSucNom",fld:"vARTSUCNOM",pic:"@!"},{av:"AV8ArtStockColor",fld:"vARTSTOCKCOLOR",pic:"@!"},{av:"AV7ArtStockChasis",fld:"vARTSTOCKCHASIS",pic:"@!"},{av:"AV10ArtStockSerial",fld:"vARTSTOCKSERIAL",pic:""},{av:"AV6ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV16PreId",fld:"vPREID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV12Contado",fld:"vCONTADO",pic:"",hsh:!0}],[]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11ArtSucNom",fld:"vARTSUCNOM",pic:"@!"},{av:"AV8ArtStockColor",fld:"vARTSTOCKCOLOR",pic:"@!"},{av:"AV7ArtStockChasis",fld:"vARTSTOCKCHASIS",pic:"@!"},{av:"AV10ArtStockSerial",fld:"vARTSTOCKSERIAL",pic:""},{av:"AV6ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV16PreId",fld:"vPREID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV12Contado",fld:"vCONTADO",pic:"",hsh:!0}],[]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11ArtSucNom",fld:"vARTSUCNOM",pic:"@!"},{av:"AV8ArtStockColor",fld:"vARTSTOCKCOLOR",pic:"@!"},{av:"AV7ArtStockChasis",fld:"vARTSTOCKCHASIS",pic:"@!"},{av:"AV10ArtStockSerial",fld:"vARTSTOCKSERIAL",pic:""},{av:"AV6ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV16PreId",fld:"vPREID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV12Contado",fld:"vCONTADO",pic:"",hsh:!0}],[]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11ArtSucNom",fld:"vARTSUCNOM",pic:"@!"},{av:"AV8ArtStockColor",fld:"vARTSTOCKCOLOR",pic:"@!"},{av:"AV7ArtStockChasis",fld:"vARTSTOCKCHASIS",pic:"@!"},{av:"AV10ArtStockSerial",fld:"vARTSTOCKSERIAL",pic:""},{av:"AV6ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV16PreId",fld:"vPREID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV12Contado",fld:"vCONTADO",pic:"",hsh:!0}],[]];this.EvtParms.VALID_ARTID=[[{av:"A2902ArtStockMotor",fld:"ARTSTOCKMOTOR",pic:"@!"},{av:"A431ArtSucNom",fld:"ARTSUCNOM",pic:"@!"},{av:"A2901ArtStockChasis",fld:"ARTSTOCKCHASIS",pic:"@!"},{av:"A2900ArtStockColor",fld:"ARTSTOCKCOLOR",pic:"@!"},{av:"A21ArtStockId",fld:"ARTSTOCKID",pic:"ZZZZZZZZ9"},{av:"A8ArtId",fld:"ARTID",pic:"ZZZZZZZZ9"},{av:"A23ArtSucId",fld:"ARTSUCID",pic:"ZZZ9"},{av:"A22ArtEntidadId",fld:"ARTENTIDADID",pic:"Z9"}],[{av:"A2902ArtStockMotor",fld:"ARTSTOCKMOTOR",pic:"@!"},{av:"A2901ArtStockChasis",fld:"ARTSTOCKCHASIS",pic:"@!"},{av:"A2900ArtStockColor",fld:"ARTSTOCKCOLOR",pic:"@!"},{av:"A431ArtSucNom",fld:"ARTSUCNOM",pic:"@!"}]];this.EvtParms.VALID_ARTSTOCKID=[[],[]];this.EvtParms.VALID_ARTENTIDADID=[[],[]];this.EvtParms.VALID_ARTSUCID=[[],[]];this.EvtParms.VALID_ARTSTOCKCOLOR=[[],[]];this.EvtParms.VALID_ARTSTOCKCHASIS=[[],[]];this.setVCMap("A16ArtNom","ARTNOM",0,"svchar",64,0);this.setVCMap("A359MarcaNombre","MARCANOMBRE",0,"svchar",64,0);this.setVCMap("A362GrupoNombre","GRUPONOMBRE",0,"svchar",64,0);this.setVCMap("A361SGrupoNombre","SGRUPONOMBRE",0,"svchar",64,0);this.setVCMap("A356ArtTpo","ARTTPO",0,"char",3,0);this.setVCMap("A1534ArtDescripcionGeneral","ARTDESCRIPCIONGENERAL",0,"svchar",300,0);this.setVCMap("A371ArtStkAct","ARTSTKACT",0,"decimal",10,2);this.setVCMap("A1535ArtStkTotal","ARTSTKTOTAL",0,"decimal",10,2);this.setVCMap("AV5ArtGarantia","vARTGARANTIA",0,"char",1,0);this.setVCMap("AV16PreId","vPREID",0,"int",9,0);this.setVCMap("AV6ArtId","vARTID",0,"int",9,0);this.setVCMap("AV12Contado","vCONTADO",0,"char",1,0);this.setVCMap("AV15PopupName","vPOPUPNAME",0,"char",20,0);this.setVCMap("AV14Modo","vMODO",0,"char",3,0);this.setVCMap("AV6ArtId","vARTID",0,"int",9,0);this.setVCMap("AV6ArtId","vARTID",0,"int",9,0);t.addRefreshingVar(this.GXValidFnc[22]);t.addRefreshingVar(this.GXValidFnc[26]);t.addRefreshingVar(this.GXValidFnc[31]);t.addRefreshingVar(this.GXValidFnc[35]);t.addRefreshingVar({rfrVar:"AV6ArtId"});t.addRefreshingVar({rfrVar:"AV16PreId"});t.addRefreshingVar({rfrVar:"AV12Contado"});t.addRefreshingParm(this.GXValidFnc[22]);t.addRefreshingParm(this.GXValidFnc[26]);t.addRefreshingParm(this.GXValidFnc[31]);t.addRefreshingParm(this.GXValidFnc[35]);t.addRefreshingParm({rfrVar:"AV6ArtId"});t.addRefreshingParm({rfrVar:"AV16PreId"});t.addRefreshingParm({rfrVar:"AV12Contado"});this.Initialize()});gx.wi(function(){gx.createParentObj(presupuestoserie_elegir)})