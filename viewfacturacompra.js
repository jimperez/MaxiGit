/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:48:56.68
*/
gx.evt.autoSkip=!1;gx.define("viewfacturacompra",!1,function(){var n,t;this.ServerClass="viewfacturacompra";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV10LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS");this.AV11SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE");this.AV9FacCpaId=gx.fn.getIntegerValue("vFACCPAID",".");this.AV7TabCode=gx.fn.getControlValue("vTABCODE");this.AV9FacCpaId=gx.fn.getIntegerValue("vFACCPAID",".");this.AV10LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS");this.AV11SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE")};this.s112_client=function(){gx.fn.setCtrlProperty("CELL_GENERAL","Visible",!0);(this.AV10LoadAllTabs||this.AV11SelectedTabCode==""||this.AV11SelectedTabCode=="General")&&(this.createWebComponent("Generalwc","FacturaCompraGeneral",[this.AV9FacCpaId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","General"),(this.AV11SelectedTabCode==""||this.AV11SelectedTabCode=="General")&&gx.fn.setCtrlProperty("CELL_GENERAL","Visible",!1));gx.fn.setCtrlProperty("CELL_NOTAPEDIDO","Visible",!0);(this.AV10LoadAllTabs||this.AV11SelectedTabCode=="NotaPedido")&&(this.createWebComponent("Notapedidowc","FacturaCompraNotaPedidoWC",[this.AV9FacCpaId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","Nota Pedido"),this.AV11SelectedTabCode=="NotaPedido"&&gx.fn.setCtrlProperty("CELL_NOTAPEDIDO","Visible",!1));gx.fn.setCtrlProperty("CELL_FACTURACOMPRAESTADO","Visible",!0);(this.AV10LoadAllTabs||this.AV11SelectedTabCode=="FacturaCompraEstado")&&(this.createWebComponent("Facturacompraestadowc","FacturaCompraFacturaCompraEstadoWC",[this.AV9FacCpaId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","Estados"),this.AV11SelectedTabCode=="FacturaCompraEstado"&&gx.fn.setCtrlProperty("CELL_FACTURACOMPRAESTADO","Visible",!1));gx.fn.setCtrlProperty("CELL_FACTURACOMPRAPAGO","Visible",!0);(this.AV10LoadAllTabs||this.AV11SelectedTabCode=="FacturaCompraPago")&&(this.createWebComponent("Facturacomprapagowc","FacturaCompraFacturaCompraPagoWC",[this.AV9FacCpaId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","Compromisos de Pagos"),this.AV11SelectedTabCode=="FacturaCompraPago"&&gx.fn.setCtrlProperty("CELL_FACTURACOMPRAPAGO","Visible",!1));gx.fn.setCtrlProperty("CELL_FACTURACOMPRA_SIMULARASIENTO","Visible",!0);(this.AV10LoadAllTabs||this.AV11SelectedTabCode=="FacturaCompra_SimularAsiento")&&(this.createWebComponent("Facturacompra_simularasientowc","FacturaCompra_SimularAsiento",[this.AV9FacCpaId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","Asiento Simulado"),this.AV11SelectedTabCode=="FacturaCompra_SimularAsiento"&&gx.fn.setCtrlProperty("CELL_FACTURACOMPRA_SIMULARASIENTO","Visible",!1))};this.e182k1_client=function(){return this.clearMessages(),this.AV11SelectedTabCode=this.TABSContainer.ActivePageControlName,this.AV10LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_NOTAPEDIDO","Visible")',ctrl:"CELL_NOTAPEDIDO",prop:"Visible"},{ctrl:"NOTAPEDIDOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAESTADO","Visible")',ctrl:"CELL_FACTURACOMPRAESTADO",prop:"Visible"},{ctrl:"FACTURACOMPRAESTADOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAPAGO","Visible")',ctrl:"CELL_FACTURACOMPRAPAGO",prop:"Visible"},{ctrl:"FACTURACOMPRAPAGOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRA_SIMULARASIENTO","Visible")',ctrl:"CELL_FACTURACOMPRA_SIMULARASIENTO",prop:"Visible"},{ctrl:"FACTURACOMPRA_SIMULARASIENTOWC"}]),gx.$.Deferred().resolve()};this.e112k1_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(1),this.AV11SelectedTabCode="General",this.AV10LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_NOTAPEDIDO","Visible")',ctrl:"CELL_NOTAPEDIDO",prop:"Visible"},{ctrl:"NOTAPEDIDOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAESTADO","Visible")',ctrl:"CELL_FACTURACOMPRAESTADO",prop:"Visible"},{ctrl:"FACTURACOMPRAESTADOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAPAGO","Visible")',ctrl:"CELL_FACTURACOMPRAPAGO",prop:"Visible"},{ctrl:"FACTURACOMPRAPAGOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRA_SIMULARASIENTO","Visible")',ctrl:"CELL_FACTURACOMPRA_SIMULARASIENTO",prop:"Visible"},{ctrl:"FACTURACOMPRA_SIMULARASIENTOWC"}]),gx.$.Deferred().resolve()};this.e122k1_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(2),this.AV11SelectedTabCode="NotaPedido",this.AV10LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_NOTAPEDIDO","Visible")',ctrl:"CELL_NOTAPEDIDO",prop:"Visible"},{ctrl:"NOTAPEDIDOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAESTADO","Visible")',ctrl:"CELL_FACTURACOMPRAESTADO",prop:"Visible"},{ctrl:"FACTURACOMPRAESTADOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAPAGO","Visible")',ctrl:"CELL_FACTURACOMPRAPAGO",prop:"Visible"},{ctrl:"FACTURACOMPRAPAGOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRA_SIMULARASIENTO","Visible")',ctrl:"CELL_FACTURACOMPRA_SIMULARASIENTO",prop:"Visible"},{ctrl:"FACTURACOMPRA_SIMULARASIENTOWC"}]),gx.$.Deferred().resolve()};this.e132k1_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(3),this.AV11SelectedTabCode="FacturaCompraEstado",this.AV10LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_NOTAPEDIDO","Visible")',ctrl:"CELL_NOTAPEDIDO",prop:"Visible"},{ctrl:"NOTAPEDIDOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAESTADO","Visible")',ctrl:"CELL_FACTURACOMPRAESTADO",prop:"Visible"},{ctrl:"FACTURACOMPRAESTADOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAPAGO","Visible")',ctrl:"CELL_FACTURACOMPRAPAGO",prop:"Visible"},{ctrl:"FACTURACOMPRAPAGOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRA_SIMULARASIENTO","Visible")',ctrl:"CELL_FACTURACOMPRA_SIMULARASIENTO",prop:"Visible"},{ctrl:"FACTURACOMPRA_SIMULARASIENTOWC"}]),gx.$.Deferred().resolve()};this.e142k1_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(4),this.AV11SelectedTabCode="FacturaCompraPago",this.AV10LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_NOTAPEDIDO","Visible")',ctrl:"CELL_NOTAPEDIDO",prop:"Visible"},{ctrl:"NOTAPEDIDOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAESTADO","Visible")',ctrl:"CELL_FACTURACOMPRAESTADO",prop:"Visible"},{ctrl:"FACTURACOMPRAESTADOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAPAGO","Visible")',ctrl:"CELL_FACTURACOMPRAPAGO",prop:"Visible"},{ctrl:"FACTURACOMPRAPAGOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRA_SIMULARASIENTO","Visible")',ctrl:"CELL_FACTURACOMPRA_SIMULARASIENTO",prop:"Visible"},{ctrl:"FACTURACOMPRA_SIMULARASIENTOWC"}]),gx.$.Deferred().resolve()};this.e152k1_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(5),this.AV11SelectedTabCode="FacturaCompra_SimularAsiento",this.AV10LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_NOTAPEDIDO","Visible")',ctrl:"CELL_NOTAPEDIDO",prop:"Visible"},{ctrl:"NOTAPEDIDOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAESTADO","Visible")',ctrl:"CELL_FACTURACOMPRAESTADO",prop:"Visible"},{ctrl:"FACTURACOMPRAESTADOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAPAGO","Visible")',ctrl:"CELL_FACTURACOMPRAPAGO",prop:"Visible"},{ctrl:"FACTURACOMPRAPAGOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRA_SIMULARASIENTO","Visible")',ctrl:"CELL_FACTURACOMPRA_SIMULARASIENTO",prop:"Visible"},{ctrl:"FACTURACOMPRA_SIMULARASIENTOWC"}]),gx.$.Deferred().resolve()};this.e192k2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e202k2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,20,21,23,24,25,28,29,31,32,33,36,37,39,40,41,44,45,47,48,49,52,53,55,56,57,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76];this.GXLastCtrlId=76;this.TABSContainer=gx.uc.getNew(this,18,0,"gx.ui.controls.Tab","TABSContainer","Tabs","TABS");t=this.TABSContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("ActivePage","Activepage","","int");t.setDynProp("ActivePageControlName","Activepagecontrolname","","char");t.setProp("PageCount","Pagecount",5,"num");t.setProp("Class","Class","ViewTab Tab","str");t.setProp("HistoryManagement","Historymanagement",!0,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("TabChanged",this.e182k1_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"WORKWITHLINK",format:0,grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"UNNAMEDTABLEVIEWCONTAINER",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"TXTTABTITLE",format:0,grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[20]={id:20,fld:"GENERAL_TITLE",format:0,grid:0};n[21]={id:21,fld:"",grid:0};n[23]={id:23,fld:"UNNAMEDTABLEGENERAL",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[28]={id:28,fld:"NOTAPEDIDO_TITLE",format:0,grid:0};n[29]={id:29,fld:"",grid:0};n[31]={id:31,fld:"UNNAMEDTABLENOTAPEDIDO",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[36]={id:36,fld:"FACTURACOMPRAESTADO_TITLE",format:0,grid:0};n[37]={id:37,fld:"",grid:0};n[39]={id:39,fld:"UNNAMEDTABLEFACTURACOMPRAESTADO",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[44]={id:44,fld:"FACTURACOMPRAPAGO_TITLE",format:0,grid:0};n[45]={id:45,fld:"",grid:0};n[47]={id:47,fld:"UNNAMEDTABLEFACTURACOMPRAPAGO",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"",grid:0};n[52]={id:52,fld:"FACTURACOMPRA_SIMULARASIENTO_TITLE",format:0,grid:0};n[53]={id:53,fld:"",grid:0};n[55]={id:55,fld:"UNNAMEDTABLEFACTURACOMPRA_SIMULARASIENTO",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"UNNAMEDTABLETABSCONTAINER",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,fld:"CELL_GENERAL",grid:0};n[64]={id:64,fld:"BTNGENERAL",grid:0,evt:"e112k1_client"};n[65]={id:65,fld:"",grid:0};n[66]={id:66,fld:"CELL_NOTAPEDIDO",grid:0};n[67]={id:67,fld:"BTNNOTAPEDIDO",grid:0,evt:"e122k1_client"};n[68]={id:68,fld:"",grid:0};n[69]={id:69,fld:"CELL_FACTURACOMPRAESTADO",grid:0};n[70]={id:70,fld:"BTNFACTURACOMPRAESTADO",grid:0,evt:"e132k1_client"};n[71]={id:71,fld:"",grid:0};n[72]={id:72,fld:"CELL_FACTURACOMPRAPAGO",grid:0};n[73]={id:73,fld:"BTNFACTURACOMPRAPAGO",grid:0,evt:"e142k1_client"};n[74]={id:74,fld:"",grid:0};n[75]={id:75,fld:"CELL_FACTURACOMPRA_SIMULARASIENTO",grid:0};n[76]={id:76,fld:"BTNFACTURACOMPRA_SIMULARASIENTO",grid:0,evt:"e152k1_client"};this.AV9FacCpaId=0;this.AV7TabCode="";this.A69FacCpaId=0;this.A538FacCpaProvNom="";this.A74FacCpaNro=0;this.A73FacCpaPto=0;this.A72FacCpaLetra="";this.A536FacCpaFactura="";this.A71FacCpaProvId=0;this.AV10LoadAllTabs=!1;this.AV11SelectedTabCode="";this.Events={e192k2_client:["ENTER",!0],e202k2_client:["CANCEL",!0],e182k1_client:["TABS.TABCHANGED",!1],e112k1_client:["'GENERAL'",!1],e122k1_client:["'NOTAPEDIDO'",!1],e132k1_client:["'FACTURACOMPRAESTADO'",!1],e142k1_client:["'FACTURACOMPRAPAGO'",!1],e152k1_client:["'FACTURACOMPRA_SIMULARASIENTO'",!1]};this.EvtParms.REFRESH=[[{av:"AV9FacCpaId",fld:"vFACCPAID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV7TabCode",fld:"vTABCODE",pic:"",hsh:!0}],[]];this.EvtParms.START=[[{av:"A69FacCpaId",fld:"FACCPAID",pic:"ZZZZZZZZ9"},{av:"AV9FacCpaId",fld:"vFACCPAID",pic:"ZZZZZZZZ9",hsh:!0},{av:"A538FacCpaProvNom",fld:"FACCPAPROVNOM",pic:"@!"},{av:"A536FacCpaFactura",fld:"FACCPAFACTURA",pic:""},{av:"AV7TabCode",fld:"vTABCODE",pic:"",hsh:!0},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""}],[{av:'gx.fn.getCtrlProperty("WORKWITHLINK","Link")',ctrl:"WORKWITHLINK",prop:"Link"},{ctrl:"FORM",prop:"Caption"},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"this.TABSContainer.ActivePageControlName",ctrl:"TABS",prop:"ActivePageControlName"},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_NOTAPEDIDO","Visible")',ctrl:"CELL_NOTAPEDIDO",prop:"Visible"},{ctrl:"NOTAPEDIDOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAESTADO","Visible")',ctrl:"CELL_FACTURACOMPRAESTADO",prop:"Visible"},{ctrl:"FACTURACOMPRAESTADOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAPAGO","Visible")',ctrl:"CELL_FACTURACOMPRAPAGO",prop:"Visible"},{ctrl:"FACTURACOMPRAPAGOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRA_SIMULARASIENTO","Visible")',ctrl:"CELL_FACTURACOMPRA_SIMULARASIENTO",prop:"Visible"},{ctrl:"FACTURACOMPRA_SIMULARASIENTOWC"}]];this.EvtParms.LOAD=[[],[]];this.EvtParms["TABS.TABCHANGED"]=[[{av:"this.TABSContainer.ActivePageControlName",ctrl:"TABS",prop:"ActivePageControlName"},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9FacCpaId",fld:"vFACCPAID",pic:"ZZZZZZZZ9",hsh:!0}],[{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_NOTAPEDIDO","Visible")',ctrl:"CELL_NOTAPEDIDO",prop:"Visible"},{ctrl:"NOTAPEDIDOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAESTADO","Visible")',ctrl:"CELL_FACTURACOMPRAESTADO",prop:"Visible"},{ctrl:"FACTURACOMPRAESTADOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAPAGO","Visible")',ctrl:"CELL_FACTURACOMPRAPAGO",prop:"Visible"},{ctrl:"FACTURACOMPRAPAGOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRA_SIMULARASIENTO","Visible")',ctrl:"CELL_FACTURACOMPRA_SIMULARASIENTO",prop:"Visible"},{ctrl:"FACTURACOMPRA_SIMULARASIENTOWC"}]];this.EvtParms["'GENERAL'"]=[[{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9FacCpaId",fld:"vFACCPAID",pic:"ZZZZZZZZ9",hsh:!0}],[{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_NOTAPEDIDO","Visible")',ctrl:"CELL_NOTAPEDIDO",prop:"Visible"},{ctrl:"NOTAPEDIDOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAESTADO","Visible")',ctrl:"CELL_FACTURACOMPRAESTADO",prop:"Visible"},{ctrl:"FACTURACOMPRAESTADOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAPAGO","Visible")',ctrl:"CELL_FACTURACOMPRAPAGO",prop:"Visible"},{ctrl:"FACTURACOMPRAPAGOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRA_SIMULARASIENTO","Visible")',ctrl:"CELL_FACTURACOMPRA_SIMULARASIENTO",prop:"Visible"},{ctrl:"FACTURACOMPRA_SIMULARASIENTOWC"}]];this.EvtParms["'NOTAPEDIDO'"]=[[{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9FacCpaId",fld:"vFACCPAID",pic:"ZZZZZZZZ9",hsh:!0}],[{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_NOTAPEDIDO","Visible")',ctrl:"CELL_NOTAPEDIDO",prop:"Visible"},{ctrl:"NOTAPEDIDOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAESTADO","Visible")',ctrl:"CELL_FACTURACOMPRAESTADO",prop:"Visible"},{ctrl:"FACTURACOMPRAESTADOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAPAGO","Visible")',ctrl:"CELL_FACTURACOMPRAPAGO",prop:"Visible"},{ctrl:"FACTURACOMPRAPAGOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRA_SIMULARASIENTO","Visible")',ctrl:"CELL_FACTURACOMPRA_SIMULARASIENTO",prop:"Visible"},{ctrl:"FACTURACOMPRA_SIMULARASIENTOWC"}]];this.EvtParms["'FACTURACOMPRAESTADO'"]=[[{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9FacCpaId",fld:"vFACCPAID",pic:"ZZZZZZZZ9",hsh:!0}],[{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_NOTAPEDIDO","Visible")',ctrl:"CELL_NOTAPEDIDO",prop:"Visible"},{ctrl:"NOTAPEDIDOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAESTADO","Visible")',ctrl:"CELL_FACTURACOMPRAESTADO",prop:"Visible"},{ctrl:"FACTURACOMPRAESTADOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAPAGO","Visible")',ctrl:"CELL_FACTURACOMPRAPAGO",prop:"Visible"},{ctrl:"FACTURACOMPRAPAGOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRA_SIMULARASIENTO","Visible")',ctrl:"CELL_FACTURACOMPRA_SIMULARASIENTO",prop:"Visible"},{ctrl:"FACTURACOMPRA_SIMULARASIENTOWC"}]];this.EvtParms["'FACTURACOMPRAPAGO'"]=[[{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9FacCpaId",fld:"vFACCPAID",pic:"ZZZZZZZZ9",hsh:!0}],[{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_NOTAPEDIDO","Visible")',ctrl:"CELL_NOTAPEDIDO",prop:"Visible"},{ctrl:"NOTAPEDIDOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAESTADO","Visible")',ctrl:"CELL_FACTURACOMPRAESTADO",prop:"Visible"},{ctrl:"FACTURACOMPRAESTADOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAPAGO","Visible")',ctrl:"CELL_FACTURACOMPRAPAGO",prop:"Visible"},{ctrl:"FACTURACOMPRAPAGOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRA_SIMULARASIENTO","Visible")',ctrl:"CELL_FACTURACOMPRA_SIMULARASIENTO",prop:"Visible"},{ctrl:"FACTURACOMPRA_SIMULARASIENTOWC"}]];this.EvtParms["'FACTURACOMPRA_SIMULARASIENTO'"]=[[{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9FacCpaId",fld:"vFACCPAID",pic:"ZZZZZZZZ9",hsh:!0}],[{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_NOTAPEDIDO","Visible")',ctrl:"CELL_NOTAPEDIDO",prop:"Visible"},{ctrl:"NOTAPEDIDOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAESTADO","Visible")',ctrl:"CELL_FACTURACOMPRAESTADO",prop:"Visible"},{ctrl:"FACTURACOMPRAESTADOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRAPAGO","Visible")',ctrl:"CELL_FACTURACOMPRAPAGO",prop:"Visible"},{ctrl:"FACTURACOMPRAPAGOWC"},{av:'gx.fn.getCtrlProperty("CELL_FACTURACOMPRA_SIMULARASIENTO","Visible")',ctrl:"CELL_FACTURACOMPRA_SIMULARASIENTO",prop:"Visible"},{ctrl:"FACTURACOMPRA_SIMULARASIENTOWC"}]];this.setVCMap("AV10LoadAllTabs","vLOADALLTABS",0,"boolean",4,0);this.setVCMap("AV11SelectedTabCode","vSELECTEDTABCODE",0,"char",50,0);this.setVCMap("AV9FacCpaId","vFACCPAID",0,"int",9,0);this.setVCMap("AV7TabCode","vTABCODE",0,"char",50,0);this.setVCMap("AV9FacCpaId","vFACCPAID",0,"int",9,0);this.setVCMap("AV10LoadAllTabs","vLOADALLTABS",0,"boolean",4,0);this.setVCMap("AV11SelectedTabCode","vSELECTEDTABCODE",0,"char",50,0);this.Initialize();this.setComponent({id:"GENERALWC",GXClass:null,Prefix:"W0026",lvl:1});this.setComponent({id:"NOTAPEDIDOWC",GXClass:null,Prefix:"W0034",lvl:1});this.setComponent({id:"FACTURACOMPRAESTADOWC",GXClass:null,Prefix:"W0042",lvl:1});this.setComponent({id:"FACTURACOMPRAPAGOWC",GXClass:null,Prefix:"W0050",lvl:1});this.setComponent({id:"FACTURACOMPRA_SIMULARASIENTOWC",GXClass:null,Prefix:"W0058",lvl:1})});gx.wi(function(){gx.createParentObj(viewfacturacompra)})