/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:54:32.49
*/
gx.evt.autoSkip=!1;gx.define("promptfacturavta",!1,function(){var n,t,i;this.ServerClass="promptfacturavta";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7InOutFacVtaId=gx.fn.getIntegerValue("vINOUTFACVTAID",".");this.AV8InOutFacVtaFecha=gx.fn.getDateValue("vINOUTFACVTAFECHA")};this.Valid_Facvtaletra=function(){var n=gx.fn.currentGridRowImpl(16);return this.validCliEvt("Valid_Facvtaletra",16,function(){try{if(gx.fn.currentGridRowImpl(16)===0)return!0;var n=gx.util.balloon.getNew("FACVTALETRA",gx.fn.currentGridRowImpl(16));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Facvtapuntoventa=function(){var n=gx.fn.currentGridRowImpl(16);return this.validCliEvt("Valid_Facvtapuntoventa",16,function(){try{if(gx.fn.currentGridRowImpl(16)===0)return!0;var n=gx.util.balloon.getNew("FACVTAPUNTOVENTA",gx.fn.currentGridRowImpl(16));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Facvtanumero=function(){var n=gx.fn.currentGridRowImpl(16);return this.validCliEvt("Valid_Facvtanumero",16,function(){try{if(gx.fn.currentGridRowImpl(16)===0)return!0;var n=gx.util.balloon.getNew("FACVTANUMERO",gx.fn.currentGridRowImpl(16));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Clienteid=function(){var n=gx.fn.currentGridRowImpl(16);return this.validCliEvt("Valid_Clienteid",16,function(){try{if(gx.fn.currentGridRowImpl(16)===0)return!0;var n=gx.util.balloon.getNew("CLIENTEID",gx.fn.currentGridRowImpl(16));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Clienteivcid=function(){var n=gx.fn.currentGridRowImpl(16);return this.validCliEvt("Valid_Clienteivcid",16,function(){try{if(gx.fn.currentGridRowImpl(16)===0)return!0;var n=gx.util.balloon.getNew("CLIENTEIVCID",gx.fn.currentGridRowImpl(16));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e14l32_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e15l32_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38];this.GXLastCtrlId=38;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",16,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptfacturavta",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.GridContainer;t.addBitmap("&Select","vSELECT",17,0,"px",17,"px","e14l32_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");t.addSingleLineEdit(218,18,"FACVTAID","Fac. Ide.","","FacVtaId","int",0,"px",9,9,"right",null,[],218,"FacVtaId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addSingleLineEdit(2031,19,"FACVTAPREID","Pre Id","","FacVtaPreId","int",0,"px",8,8,"right",null,[],2031,"FacVtaPreId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addSingleLineEdit(219,20,"FACVTAENTIDADID","Empresa","","FacVtaEntidadId","int",0,"px",2,2,"right",null,[],219,"FacVtaEntidadId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addSingleLineEdit(220,21,"FACVTASUCURSALID","Sucursal","","FacVtaSucursalId","int",0,"px",4,4,"right",null,[],220,"FacVtaSucursalId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addSingleLineEdit(1585,22,"FACVTAFECHA","Fecha","Fecha ...","FacVtaFecha","date",0,"px",10,10,"right",null,[],1585,"FacVtaFecha",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addComboBox(1586,23,"FACVTALETRA","Letra","FacVtaLetra","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");t.addSingleLineEdit(1587,24,"FACVTAPUNTOVENTA","Pto Venta","","FacVtaPuntoVenta","int",0,"px",4,4,"right",null,[],1587,"FacVtaPuntoVenta",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addSingleLineEdit(1588,25,"FACVTANUMERO","Nº","","FacVtaNumero","int",0,"px",8,8,"right",null,[],1588,"FacVtaNumero",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addSingleLineEdit(2022,26,"FACVTACOMPROBANTE","Nº Fact.","","FacVtaComprobante","char",0,"px",11,11,"left",null,[],2022,"FacVtaComprobante",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addSingleLineEdit(1589,27,"FACVTAFECHAAFIP","Fecha Afip","Fecha ...","FacVtaFechaAfip","date",0,"px",10,10,"right",null,[],1589,"FacVtaFechaAfip",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addSingleLineEdit(1590,28,"FACVTACAENRO","CAE Nº","","FacVtaCAENro","svchar",0,"px",15,15,"left",null,[],1590,"FacVtaCAENro",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addSingleLineEdit(1591,29,"FACVTACAEVTO","CAE Vto","Fecha ...","FacVtaCAEVto","date",0,"px",10,10,"right",null,[],1591,"FacVtaCAEVto",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addComboBox(2913,30,"FACVTAFISCAL","Vta Fiscal","FacVtaFiscal","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");t.addSingleLineEdit(53,31,"CLIENTEID","Cuil/Cuit","","ClienteId","int",0,"px",15,15,"right",null,[],53,"ClienteId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addSingleLineEdit(3165,32,"CLIENTEIVCID","Cond. IVA Ide.","","ClienteIVCID","int",0,"px",9,9,"right",null,[],3165,"ClienteIVCID",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addSingleLineEdit(3166,33,"CLIENTEIVCNOM","Condicion IVA","","ClienteIVCNom","svchar",0,"px",64,64,"left",null,[],3166,"ClienteIVCNom",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");t.addSingleLineEdit(1593,34,"FACVTACLINOM","Cliente","","FacVtaCliNom","svchar",0,"px",64,64,"left",null,[],1593,"FacVtaCliNom",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addComboBox(1595,35,"FACVTAESTADO","Estado","FacVtaEstado","char",null,0,!0,!1,0,"px","WWColumn");t.addSingleLineEdit(1752,36,"FACVTAFINALIVA21","IVA 21","","FacVtaFinalIVA21","decimal",0,"px",13,13,"right",null,[],1752,"FacVtaFinalIVA21",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addSingleLineEdit(1748,37,"FACVTAFINALNETO21","Neto 21","","FacVtaFinalNeto21","decimal",0,"px",13,13,"right",null,[],1748,"FacVtaFinalNeto21",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn");t.addSingleLineEdit(1756,38,"FACVTAFINALIMPORTE","Total","","FacVtaFinalImporte","decimal",0,"px",13,13,"right",null,[],1756,"FacVtaFinalImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(t);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");i=this.DVPANEL_TABLEHEADERContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Opciones","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"",grid:0};n[17]={id:17,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:16,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV11Select",gxold:"OV11Select",gxvar:"AV11Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV11Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV11Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(16),gx.O.AV11Select,gx.O.AV111Select_GXI)},c2v:function(n){gx.O.AV111Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV11Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(16))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(16))},gxvar_GXI:"AV111Select_GXI",nac:gx.falseFn,evt:"e14l32_client",std:"ENTER"};n[18]={id:18,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:16,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTAID",gxz:"Z218FacVtaId",gxold:"O218FacVtaId",gxvar:"A218FacVtaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A218FacVtaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z218FacVtaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTAID",n||gx.fn.currentGridRowImpl(16),gx.O.A218FacVtaId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A218FacVtaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FACVTAID",n||gx.fn.currentGridRowImpl(16),".")},nac:gx.falseFn};n[19]={id:19,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:16,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTAPREID",gxz:"Z2031FacVtaPreId",gxold:"O2031FacVtaPreId",gxvar:"A2031FacVtaPreId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2031FacVtaPreId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2031FacVtaPreId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTAPREID",n||gx.fn.currentGridRowImpl(16),gx.O.A2031FacVtaPreId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2031FacVtaPreId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FACVTAPREID",n||gx.fn.currentGridRowImpl(16),".")},nac:gx.falseFn};n[20]={id:20,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:16,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTAENTIDADID",gxz:"Z219FacVtaEntidadId",gxold:"O219FacVtaEntidadId",gxvar:"A219FacVtaEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A219FacVtaEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z219FacVtaEntidadId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTAENTIDADID",n||gx.fn.currentGridRowImpl(16),gx.O.A219FacVtaEntidadId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A219FacVtaEntidadId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FACVTAENTIDADID",n||gx.fn.currentGridRowImpl(16),".")},nac:gx.falseFn};n[21]={id:21,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:16,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTASUCURSALID",gxz:"Z220FacVtaSucursalId",gxold:"O220FacVtaSucursalId",gxvar:"A220FacVtaSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A220FacVtaSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z220FacVtaSucursalId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTASUCURSALID",n||gx.fn.currentGridRowImpl(16),gx.O.A220FacVtaSucursalId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A220FacVtaSucursalId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FACVTASUCURSALID",n||gx.fn.currentGridRowImpl(16),".")},nac:gx.falseFn};n[22]={id:22,lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:16,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTAFECHA",gxz:"Z1585FacVtaFecha",gxold:"O1585FacVtaFecha",gxvar:"A1585FacVtaFecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1585FacVtaFecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1585FacVtaFecha=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTAFECHA",n||gx.fn.currentGridRowImpl(16),gx.O.A1585FacVtaFecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1585FacVtaFecha=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("FACVTAFECHA",n||gx.fn.currentGridRowImpl(16))},nac:gx.falseFn};n[23]={id:23,lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:16,gxgrid:this.GridContainer,fnc:this.Valid_Facvtaletra,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTALETRA",gxz:"Z1586FacVtaLetra",gxold:"O1586FacVtaLetra",gxvar:"A1586FacVtaLetra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1586FacVtaLetra=n)},v2z:function(n){n!==undefined&&(gx.O.Z1586FacVtaLetra=n)},v2c:function(n){gx.fn.setGridComboBoxValue("FACVTALETRA",n||gx.fn.currentGridRowImpl(16),gx.O.A1586FacVtaLetra);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1586FacVtaLetra=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FACVTALETRA",n||gx.fn.currentGridRowImpl(16))},nac:gx.falseFn};n[24]={id:24,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"9999",ro:1,isacc:0,grid:16,gxgrid:this.GridContainer,fnc:this.Valid_Facvtapuntoventa,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTAPUNTOVENTA",gxz:"Z1587FacVtaPuntoVenta",gxold:"O1587FacVtaPuntoVenta",gxvar:"A1587FacVtaPuntoVenta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A1587FacVtaPuntoVenta=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1587FacVtaPuntoVenta=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTAPUNTOVENTA",n||gx.fn.currentGridRowImpl(16),gx.O.A1587FacVtaPuntoVenta,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1587FacVtaPuntoVenta=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FACVTAPUNTOVENTA",n||gx.fn.currentGridRowImpl(16),".")},nac:gx.falseFn};n[25]={id:25,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:16,gxgrid:this.GridContainer,fnc:this.Valid_Facvtanumero,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTANUMERO",gxz:"Z1588FacVtaNumero",gxold:"O1588FacVtaNumero",gxvar:"A1588FacVtaNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A1588FacVtaNumero=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1588FacVtaNumero=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTANUMERO",n||gx.fn.currentGridRowImpl(16),gx.O.A1588FacVtaNumero,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1588FacVtaNumero=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FACVTANUMERO",n||gx.fn.currentGridRowImpl(16),".")},nac:gx.falseFn};n[26]={id:26,lvl:2,type:"char",len:11,dec:0,sign:!1,ro:1,isacc:0,grid:16,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACOMPROBANTE",gxz:"Z2022FacVtaComprobante",gxold:"O2022FacVtaComprobante",gxvar:"A2022FacVtaComprobante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2022FacVtaComprobante=n)},v2z:function(n){n!==undefined&&(gx.O.Z2022FacVtaComprobante=n)},v2c:function(n){gx.fn.setGridControlValue("FACVTACOMPROBANTE",n||gx.fn.currentGridRowImpl(16),gx.O.A2022FacVtaComprobante,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2022FacVtaComprobante=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FACVTACOMPROBANTE",n||gx.fn.currentGridRowImpl(16))},nac:gx.falseFn};n[27]={id:27,lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:16,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTAFECHAAFIP",gxz:"Z1589FacVtaFechaAfip",gxold:"O1589FacVtaFechaAfip",gxvar:"A1589FacVtaFechaAfip",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1589FacVtaFechaAfip=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1589FacVtaFechaAfip=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTAFECHAAFIP",n||gx.fn.currentGridRowImpl(16),gx.O.A1589FacVtaFechaAfip,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1589FacVtaFechaAfip=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("FACVTAFECHAAFIP",n||gx.fn.currentGridRowImpl(16))},nac:gx.falseFn};n[28]={id:28,lvl:2,type:"svchar",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:16,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACAENRO",gxz:"Z1590FacVtaCAENro",gxold:"O1590FacVtaCAENro",gxvar:"A1590FacVtaCAENro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1590FacVtaCAENro=n)},v2z:function(n){n!==undefined&&(gx.O.Z1590FacVtaCAENro=n)},v2c:function(n){gx.fn.setGridControlValue("FACVTACAENRO",n||gx.fn.currentGridRowImpl(16),gx.O.A1590FacVtaCAENro,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1590FacVtaCAENro=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FACVTACAENRO",n||gx.fn.currentGridRowImpl(16))},nac:gx.falseFn};n[29]={id:29,lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:16,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACAEVTO",gxz:"Z1591FacVtaCAEVto",gxold:"O1591FacVtaCAEVto",gxvar:"A1591FacVtaCAEVto",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1591FacVtaCAEVto=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z1591FacVtaCAEVto=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTACAEVTO",n||gx.fn.currentGridRowImpl(16),gx.O.A1591FacVtaCAEVto,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1591FacVtaCAEVto=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("FACVTACAEVTO",n||gx.fn.currentGridRowImpl(16))},nac:gx.falseFn};n[30]={id:30,lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:16,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTAFISCAL",gxz:"Z2913FacVtaFiscal",gxold:"O2913FacVtaFiscal",gxvar:"A2913FacVtaFiscal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2913FacVtaFiscal=n)},v2z:function(n){n!==undefined&&(gx.O.Z2913FacVtaFiscal=n)},v2c:function(n){gx.fn.setGridComboBoxValue("FACVTAFISCAL",n||gx.fn.currentGridRowImpl(16),gx.O.A2913FacVtaFiscal);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2913FacVtaFiscal=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FACVTAFISCAL",n||gx.fn.currentGridRowImpl(16))},nac:gx.falseFn};n[31]={id:31,lvl:2,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:16,gxgrid:this.GridContainer,fnc:this.Valid_Clienteid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEID",gxz:"Z53ClienteId",gxold:"O53ClienteId",gxvar:"A53ClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A53ClienteId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z53ClienteId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CLIENTEID",n||gx.fn.currentGridRowImpl(16),gx.O.A53ClienteId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A53ClienteId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CLIENTEID",n||gx.fn.currentGridRowImpl(16),".")},nac:gx.falseFn};n[32]={id:32,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:16,gxgrid:this.GridContainer,fnc:this.Valid_Clienteivcid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEIVCID",gxz:"Z3165ClienteIVCID",gxold:"O3165ClienteIVCID",gxvar:"A3165ClienteIVCID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3165ClienteIVCID=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3165ClienteIVCID=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CLIENTEIVCID",n||gx.fn.currentGridRowImpl(16),gx.O.A3165ClienteIVCID,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3165ClienteIVCID=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CLIENTEIVCID",n||gx.fn.currentGridRowImpl(16),".")},nac:gx.falseFn};n[33]={id:33,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:16,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CLIENTEIVCNOM",gxz:"Z3166ClienteIVCNom",gxold:"O3166ClienteIVCNom",gxvar:"A3166ClienteIVCNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3166ClienteIVCNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z3166ClienteIVCNom=n)},v2c:function(n){gx.fn.setGridControlValue("CLIENTEIVCNOM",n||gx.fn.currentGridRowImpl(16),gx.O.A3166ClienteIVCNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3166ClienteIVCNom=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CLIENTEIVCNOM",n||gx.fn.currentGridRowImpl(16))},nac:gx.falseFn};n[34]={id:34,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:16,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACLINOM",gxz:"Z1593FacVtaCliNom",gxold:"O1593FacVtaCliNom",gxvar:"A1593FacVtaCliNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1593FacVtaCliNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z1593FacVtaCliNom=n)},v2c:function(n){gx.fn.setGridControlValue("FACVTACLINOM",n||gx.fn.currentGridRowImpl(16),gx.O.A1593FacVtaCliNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1593FacVtaCliNom=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FACVTACLINOM",n||gx.fn.currentGridRowImpl(16))},nac:gx.falseFn};n[35]={id:35,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:16,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTAESTADO",gxz:"Z1595FacVtaEstado",gxold:"O1595FacVtaEstado",gxvar:"A1595FacVtaEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1595FacVtaEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z1595FacVtaEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("FACVTAESTADO",n||gx.fn.currentGridRowImpl(16),gx.O.A1595FacVtaEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1595FacVtaEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FACVTAESTADO",n||gx.fn.currentGridRowImpl(16))},nac:gx.falseFn};n[36]={id:36,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:16,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTAFINALIVA21",gxz:"Z1752FacVtaFinalIVA21",gxold:"O1752FacVtaFinalIVA21",gxvar:"A1752FacVtaFinalIVA21",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1752FacVtaFinalIVA21=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1752FacVtaFinalIVA21=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACVTAFINALIVA21",n||gx.fn.currentGridRowImpl(16),gx.O.A1752FacVtaFinalIVA21,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1752FacVtaFinalIVA21=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACVTAFINALIVA21",n||gx.fn.currentGridRowImpl(16),".",",")},nac:gx.falseFn};n[37]={id:37,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:16,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTAFINALNETO21",gxz:"Z1748FacVtaFinalNeto21",gxold:"O1748FacVtaFinalNeto21",gxvar:"A1748FacVtaFinalNeto21",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1748FacVtaFinalNeto21=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1748FacVtaFinalNeto21=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACVTAFINALNETO21",n||gx.fn.currentGridRowImpl(16),gx.O.A1748FacVtaFinalNeto21,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1748FacVtaFinalNeto21=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACVTAFINALNETO21",n||gx.fn.currentGridRowImpl(16),".",",")},nac:gx.falseFn};n[38]={id:38,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:16,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTAFINALIMPORTE",gxz:"Z1756FacVtaFinalImporte",gxold:"O1756FacVtaFinalImporte",gxvar:"A1756FacVtaFinalImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1756FacVtaFinalImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1756FacVtaFinalImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACVTAFINALIMPORTE",n||gx.fn.currentGridRowImpl(16),gx.O.A1756FacVtaFinalImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1756FacVtaFinalImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACVTAFINALIMPORTE",n||gx.fn.currentGridRowImpl(16),".",",")},nac:gx.falseFn};this.ZV11Select="";this.OV11Select="";this.Z218FacVtaId=0;this.O218FacVtaId=0;this.Z2031FacVtaPreId=0;this.O2031FacVtaPreId=0;this.Z219FacVtaEntidadId=0;this.O219FacVtaEntidadId=0;this.Z220FacVtaSucursalId=0;this.O220FacVtaSucursalId=0;this.Z1585FacVtaFecha=gx.date.nullDate();this.O1585FacVtaFecha=gx.date.nullDate();this.Z1586FacVtaLetra="";this.O1586FacVtaLetra="";this.Z1587FacVtaPuntoVenta=0;this.O1587FacVtaPuntoVenta=0;this.Z1588FacVtaNumero=0;this.O1588FacVtaNumero=0;this.Z2022FacVtaComprobante="";this.O2022FacVtaComprobante="";this.Z1589FacVtaFechaAfip=gx.date.nullDate();this.O1589FacVtaFechaAfip=gx.date.nullDate();this.Z1590FacVtaCAENro="";this.O1590FacVtaCAENro="";this.Z1591FacVtaCAEVto=gx.date.nullDate();this.O1591FacVtaCAEVto=gx.date.nullDate();this.Z2913FacVtaFiscal="";this.O2913FacVtaFiscal="";this.Z53ClienteId=0;this.O53ClienteId=0;this.Z3165ClienteIVCID=0;this.O3165ClienteIVCID=0;this.Z3166ClienteIVCNom="";this.O3166ClienteIVCNom="";this.Z1593FacVtaCliNom="";this.O1593FacVtaCliNom="";this.Z1595FacVtaEstado="";this.O1595FacVtaEstado="";this.Z1752FacVtaFinalIVA21=0;this.O1752FacVtaFinalIVA21=0;this.Z1748FacVtaFinalNeto21=0;this.O1748FacVtaFinalNeto21=0;this.Z1756FacVtaFinalImporte=0;this.O1756FacVtaFinalImporte=0;this.AV7InOutFacVtaId=0;this.AV8InOutFacVtaFecha=gx.date.nullDate();this.AV11Select="";this.A218FacVtaId=0;this.A2031FacVtaPreId=0;this.A219FacVtaEntidadId=0;this.A220FacVtaSucursalId=0;this.A1585FacVtaFecha=gx.date.nullDate();this.A1586FacVtaLetra="";this.A1587FacVtaPuntoVenta=0;this.A1588FacVtaNumero=0;this.A2022FacVtaComprobante="";this.A1589FacVtaFechaAfip=gx.date.nullDate();this.A1590FacVtaCAENro="";this.A1591FacVtaCAEVto=gx.date.nullDate();this.A2913FacVtaFiscal="";this.A53ClienteId=0;this.A3165ClienteIVCID=0;this.A3166ClienteIVCNom="";this.A1593FacVtaCliNom="";this.A1595FacVtaEstado="";this.A1752FacVtaFinalIVA21=0;this.A1748FacVtaFinalNeto21=0;this.A1756FacVtaFinalImporte=0;this.Events={e14l32_client:["ENTER",!0],e15l32_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.START=[[],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV11Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A218FacVtaId",fld:"FACVTAID",pic:"ZZZZZZZZ9",hsh:!0},{av:"A1585FacVtaFecha",fld:"FACVTAFECHA",pic:"",hsh:!0}],[{av:"AV7InOutFacVtaId",fld:"vINOUTFACVTAID",pic:"ZZZZZZZZ9"},{av:"AV8InOutFacVtaFecha",fld:"vINOUTFACVTAFECHA",pic:""}]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.VALID_FACVTALETRA=[[],[]];this.EvtParms.VALID_FACVTAPUNTOVENTA=[[],[]];this.EvtParms.VALID_FACVTANUMERO=[[],[]];this.EvtParms.VALID_CLIENTEID=[[],[]];this.EvtParms.VALID_CLIENTEIVCID=[[],[]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV7InOutFacVtaId","vINOUTFACVTAID",0,"int",9,0);this.setVCMap("AV8InOutFacVtaFecha","vINOUTFACVTAFECHA",0,"date",8,0);this.Initialize()});gx.wi(function(){gx.createParentObj(promptfacturavta)})