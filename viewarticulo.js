/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:47:44.89
*/
gx.evt.autoSkip=!1;gx.define("viewarticulo",!1,function(){var n,t;this.ServerClass="viewarticulo";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV10LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS");this.AV11SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE");this.AV9ArtId=gx.fn.getIntegerValue("vARTID",".");this.AV7TabCode=gx.fn.getControlValue("vTABCODE");this.AV9ArtId=gx.fn.getIntegerValue("vARTID",".");this.AV10LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS");this.AV11SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE")};this.s112_client=function(){gx.fn.setCtrlProperty("CELL_GENERAL","Visible",!0);(this.AV10LoadAllTabs||this.AV11SelectedTabCode==""||this.AV11SelectedTabCode=="General")&&(this.createWebComponent("Generalwc","ArticuloGeneral",[this.AV9ArtId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","General"),(this.AV11SelectedTabCode==""||this.AV11SelectedTabCode=="General")&&gx.fn.setCtrlProperty("CELL_GENERAL","Visible",!1));gx.fn.setCtrlProperty("CELL_PRECIOS","Visible",!0);(this.AV10LoadAllTabs||this.AV11SelectedTabCode=="Precios")&&(this.createWebComponent("Precioswc","ArticuloPreciosWC",[this.AV9ArtId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","Precios"),this.AV11SelectedTabCode=="Precios"&&gx.fn.setCtrlProperty("CELL_PRECIOS","Visible",!1));gx.fn.setCtrlProperty("CELL_ARTICULOLISTA","Visible",!0);(this.AV10LoadAllTabs||this.AV11SelectedTabCode=="ArticuloLista")&&(this.createWebComponent("Articulolistawc","ArticuloArticuloListaWC",[this.AV9ArtId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","Precios de Venta"),this.AV11SelectedTabCode=="ArticuloLista"&&gx.fn.setCtrlProperty("CELL_ARTICULOLISTA","Visible",!1));gx.fn.setCtrlProperty("CELL_ARTICULOLISTACOMPRAS","Visible",!0);(this.AV10LoadAllTabs||this.AV11SelectedTabCode=="ArticuloListaCompras")&&(this.createWebComponent("Articulolistacompraswc","ArticuloArticuloListaComprasWC",[this.AV9ArtId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","Precios de Costo"),this.AV11SelectedTabCode=="ArticuloListaCompras"&&gx.fn.setCtrlProperty("CELL_ARTICULOLISTACOMPRAS","Visible",!1));gx.fn.setCtrlProperty("CELL_ARTICULOSTOCK","Visible",!0);(this.AV10LoadAllTabs||this.AV11SelectedTabCode=="ArticuloStock")&&(this.createWebComponent("Articulostockwc","ArticuloArticuloStockWC",[this.AV9ArtId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","Movimientos"),this.AV11SelectedTabCode=="ArticuloStock"&&gx.fn.setCtrlProperty("CELL_ARTICULOSTOCK","Visible",!1));gx.fn.setCtrlProperty("CELL_GARANTIA","Visible",!0);(this.AV10LoadAllTabs||this.AV11SelectedTabCode=="Garantia")&&(this.createWebComponent("Garantiawc","ArticuloGarantiaWC",[this.AV9ArtId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","Garantia"),this.AV11SelectedTabCode=="Garantia"&&gx.fn.setCtrlProperty("CELL_GARANTIA","Visible",!1));gx.fn.setCtrlProperty("CELL_ARTICULOCARACTERISTICA","Visible",!0);(this.AV10LoadAllTabs||this.AV11SelectedTabCode=="ArticuloCaracteristica")&&(this.createWebComponent("Articulocaracteristicawc","CaracteristicaArticuloCaracteristicaWC",[this.AV9ArtId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","Caracteristicas"),this.AV11SelectedTabCode=="ArticuloCaracteristica"&&gx.fn.setCtrlProperty("CELL_ARTICULOCARACTERISTICA","Visible",!1));gx.fn.setCtrlProperty("CELL_UNIDADMEDIDA","Visible",!0);(this.AV10LoadAllTabs||this.AV11SelectedTabCode=="UnidadMedida")&&(this.createWebComponent("Unidadmedidawc","ArticuloArticuloUnidadMedidaWC",[this.AV9ArtId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","Unidad Medida"),this.AV11SelectedTabCode=="UnidadMedida"&&gx.fn.setCtrlProperty("CELL_UNIDADMEDIDA","Visible",!1))};this.e210n1_client=function(){return this.clearMessages(),this.AV11SelectedTabCode=this.TABSContainer.ActivePageControlName,this.AV10LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_PRECIOS","Visible")',ctrl:"CELL_PRECIOS",prop:"Visible"},{ctrl:"PRECIOSWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTA","Visible")',ctrl:"CELL_ARTICULOLISTA",prop:"Visible"},{ctrl:"ARTICULOLISTAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTACOMPRAS","Visible")',ctrl:"CELL_ARTICULOLISTACOMPRAS",prop:"Visible"},{ctrl:"ARTICULOLISTACOMPRASWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOSTOCK","Visible")',ctrl:"CELL_ARTICULOSTOCK",prop:"Visible"},{ctrl:"ARTICULOSTOCKWC"},{av:'gx.fn.getCtrlProperty("CELL_GARANTIA","Visible")',ctrl:"CELL_GARANTIA",prop:"Visible"},{ctrl:"GARANTIAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOCARACTERISTICA","Visible")',ctrl:"CELL_ARTICULOCARACTERISTICA",prop:"Visible"},{ctrl:"ARTICULOCARACTERISTICAWC"},{av:'gx.fn.getCtrlProperty("CELL_UNIDADMEDIDA","Visible")',ctrl:"CELL_UNIDADMEDIDA",prop:"Visible"},{ctrl:"UNIDADMEDIDAWC"}]),gx.$.Deferred().resolve()};this.e110n1_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(1),this.AV11SelectedTabCode="General",this.AV10LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_PRECIOS","Visible")',ctrl:"CELL_PRECIOS",prop:"Visible"},{ctrl:"PRECIOSWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTA","Visible")',ctrl:"CELL_ARTICULOLISTA",prop:"Visible"},{ctrl:"ARTICULOLISTAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTACOMPRAS","Visible")',ctrl:"CELL_ARTICULOLISTACOMPRAS",prop:"Visible"},{ctrl:"ARTICULOLISTACOMPRASWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOSTOCK","Visible")',ctrl:"CELL_ARTICULOSTOCK",prop:"Visible"},{ctrl:"ARTICULOSTOCKWC"},{av:'gx.fn.getCtrlProperty("CELL_GARANTIA","Visible")',ctrl:"CELL_GARANTIA",prop:"Visible"},{ctrl:"GARANTIAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOCARACTERISTICA","Visible")',ctrl:"CELL_ARTICULOCARACTERISTICA",prop:"Visible"},{ctrl:"ARTICULOCARACTERISTICAWC"},{av:'gx.fn.getCtrlProperty("CELL_UNIDADMEDIDA","Visible")',ctrl:"CELL_UNIDADMEDIDA",prop:"Visible"},{ctrl:"UNIDADMEDIDAWC"}]),gx.$.Deferred().resolve()};this.e120n1_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(2),this.AV11SelectedTabCode="Precios",this.AV10LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_PRECIOS","Visible")',ctrl:"CELL_PRECIOS",prop:"Visible"},{ctrl:"PRECIOSWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTA","Visible")',ctrl:"CELL_ARTICULOLISTA",prop:"Visible"},{ctrl:"ARTICULOLISTAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTACOMPRAS","Visible")',ctrl:"CELL_ARTICULOLISTACOMPRAS",prop:"Visible"},{ctrl:"ARTICULOLISTACOMPRASWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOSTOCK","Visible")',ctrl:"CELL_ARTICULOSTOCK",prop:"Visible"},{ctrl:"ARTICULOSTOCKWC"},{av:'gx.fn.getCtrlProperty("CELL_GARANTIA","Visible")',ctrl:"CELL_GARANTIA",prop:"Visible"},{ctrl:"GARANTIAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOCARACTERISTICA","Visible")',ctrl:"CELL_ARTICULOCARACTERISTICA",prop:"Visible"},{ctrl:"ARTICULOCARACTERISTICAWC"},{av:'gx.fn.getCtrlProperty("CELL_UNIDADMEDIDA","Visible")',ctrl:"CELL_UNIDADMEDIDA",prop:"Visible"},{ctrl:"UNIDADMEDIDAWC"}]),gx.$.Deferred().resolve()};this.e130n1_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(3),this.AV11SelectedTabCode="ArticuloLista",this.AV10LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_PRECIOS","Visible")',ctrl:"CELL_PRECIOS",prop:"Visible"},{ctrl:"PRECIOSWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTA","Visible")',ctrl:"CELL_ARTICULOLISTA",prop:"Visible"},{ctrl:"ARTICULOLISTAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTACOMPRAS","Visible")',ctrl:"CELL_ARTICULOLISTACOMPRAS",prop:"Visible"},{ctrl:"ARTICULOLISTACOMPRASWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOSTOCK","Visible")',ctrl:"CELL_ARTICULOSTOCK",prop:"Visible"},{ctrl:"ARTICULOSTOCKWC"},{av:'gx.fn.getCtrlProperty("CELL_GARANTIA","Visible")',ctrl:"CELL_GARANTIA",prop:"Visible"},{ctrl:"GARANTIAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOCARACTERISTICA","Visible")',ctrl:"CELL_ARTICULOCARACTERISTICA",prop:"Visible"},{ctrl:"ARTICULOCARACTERISTICAWC"},{av:'gx.fn.getCtrlProperty("CELL_UNIDADMEDIDA","Visible")',ctrl:"CELL_UNIDADMEDIDA",prop:"Visible"},{ctrl:"UNIDADMEDIDAWC"}]),gx.$.Deferred().resolve()};this.e140n1_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(4),this.AV11SelectedTabCode="ArticuloListaCompras",this.AV10LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_PRECIOS","Visible")',ctrl:"CELL_PRECIOS",prop:"Visible"},{ctrl:"PRECIOSWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTA","Visible")',ctrl:"CELL_ARTICULOLISTA",prop:"Visible"},{ctrl:"ARTICULOLISTAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTACOMPRAS","Visible")',ctrl:"CELL_ARTICULOLISTACOMPRAS",prop:"Visible"},{ctrl:"ARTICULOLISTACOMPRASWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOSTOCK","Visible")',ctrl:"CELL_ARTICULOSTOCK",prop:"Visible"},{ctrl:"ARTICULOSTOCKWC"},{av:'gx.fn.getCtrlProperty("CELL_GARANTIA","Visible")',ctrl:"CELL_GARANTIA",prop:"Visible"},{ctrl:"GARANTIAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOCARACTERISTICA","Visible")',ctrl:"CELL_ARTICULOCARACTERISTICA",prop:"Visible"},{ctrl:"ARTICULOCARACTERISTICAWC"},{av:'gx.fn.getCtrlProperty("CELL_UNIDADMEDIDA","Visible")',ctrl:"CELL_UNIDADMEDIDA",prop:"Visible"},{ctrl:"UNIDADMEDIDAWC"}]),gx.$.Deferred().resolve()};this.e150n1_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(5),this.AV11SelectedTabCode="ArticuloStock",this.AV10LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_PRECIOS","Visible")',ctrl:"CELL_PRECIOS",prop:"Visible"},{ctrl:"PRECIOSWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTA","Visible")',ctrl:"CELL_ARTICULOLISTA",prop:"Visible"},{ctrl:"ARTICULOLISTAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTACOMPRAS","Visible")',ctrl:"CELL_ARTICULOLISTACOMPRAS",prop:"Visible"},{ctrl:"ARTICULOLISTACOMPRASWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOSTOCK","Visible")',ctrl:"CELL_ARTICULOSTOCK",prop:"Visible"},{ctrl:"ARTICULOSTOCKWC"},{av:'gx.fn.getCtrlProperty("CELL_GARANTIA","Visible")',ctrl:"CELL_GARANTIA",prop:"Visible"},{ctrl:"GARANTIAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOCARACTERISTICA","Visible")',ctrl:"CELL_ARTICULOCARACTERISTICA",prop:"Visible"},{ctrl:"ARTICULOCARACTERISTICAWC"},{av:'gx.fn.getCtrlProperty("CELL_UNIDADMEDIDA","Visible")',ctrl:"CELL_UNIDADMEDIDA",prop:"Visible"},{ctrl:"UNIDADMEDIDAWC"}]),gx.$.Deferred().resolve()};this.e160n1_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(6),this.AV11SelectedTabCode="Garantia",this.AV10LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_PRECIOS","Visible")',ctrl:"CELL_PRECIOS",prop:"Visible"},{ctrl:"PRECIOSWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTA","Visible")',ctrl:"CELL_ARTICULOLISTA",prop:"Visible"},{ctrl:"ARTICULOLISTAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTACOMPRAS","Visible")',ctrl:"CELL_ARTICULOLISTACOMPRAS",prop:"Visible"},{ctrl:"ARTICULOLISTACOMPRASWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOSTOCK","Visible")',ctrl:"CELL_ARTICULOSTOCK",prop:"Visible"},{ctrl:"ARTICULOSTOCKWC"},{av:'gx.fn.getCtrlProperty("CELL_GARANTIA","Visible")',ctrl:"CELL_GARANTIA",prop:"Visible"},{ctrl:"GARANTIAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOCARACTERISTICA","Visible")',ctrl:"CELL_ARTICULOCARACTERISTICA",prop:"Visible"},{ctrl:"ARTICULOCARACTERISTICAWC"},{av:'gx.fn.getCtrlProperty("CELL_UNIDADMEDIDA","Visible")',ctrl:"CELL_UNIDADMEDIDA",prop:"Visible"},{ctrl:"UNIDADMEDIDAWC"}]),gx.$.Deferred().resolve()};this.e170n1_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(7),this.AV11SelectedTabCode="ArticuloCaracteristica",this.AV10LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_PRECIOS","Visible")',ctrl:"CELL_PRECIOS",prop:"Visible"},{ctrl:"PRECIOSWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTA","Visible")',ctrl:"CELL_ARTICULOLISTA",prop:"Visible"},{ctrl:"ARTICULOLISTAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTACOMPRAS","Visible")',ctrl:"CELL_ARTICULOLISTACOMPRAS",prop:"Visible"},{ctrl:"ARTICULOLISTACOMPRASWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOSTOCK","Visible")',ctrl:"CELL_ARTICULOSTOCK",prop:"Visible"},{ctrl:"ARTICULOSTOCKWC"},{av:'gx.fn.getCtrlProperty("CELL_GARANTIA","Visible")',ctrl:"CELL_GARANTIA",prop:"Visible"},{ctrl:"GARANTIAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOCARACTERISTICA","Visible")',ctrl:"CELL_ARTICULOCARACTERISTICA",prop:"Visible"},{ctrl:"ARTICULOCARACTERISTICAWC"},{av:'gx.fn.getCtrlProperty("CELL_UNIDADMEDIDA","Visible")',ctrl:"CELL_UNIDADMEDIDA",prop:"Visible"},{ctrl:"UNIDADMEDIDAWC"}]),gx.$.Deferred().resolve()};this.e180n1_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(8),this.AV11SelectedTabCode="UnidadMedida",this.AV10LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_PRECIOS","Visible")',ctrl:"CELL_PRECIOS",prop:"Visible"},{ctrl:"PRECIOSWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTA","Visible")',ctrl:"CELL_ARTICULOLISTA",prop:"Visible"},{ctrl:"ARTICULOLISTAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTACOMPRAS","Visible")',ctrl:"CELL_ARTICULOLISTACOMPRAS",prop:"Visible"},{ctrl:"ARTICULOLISTACOMPRASWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOSTOCK","Visible")',ctrl:"CELL_ARTICULOSTOCK",prop:"Visible"},{ctrl:"ARTICULOSTOCKWC"},{av:'gx.fn.getCtrlProperty("CELL_GARANTIA","Visible")',ctrl:"CELL_GARANTIA",prop:"Visible"},{ctrl:"GARANTIAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOCARACTERISTICA","Visible")',ctrl:"CELL_ARTICULOCARACTERISTICA",prop:"Visible"},{ctrl:"ARTICULOCARACTERISTICAWC"},{av:'gx.fn.getCtrlProperty("CELL_UNIDADMEDIDA","Visible")',ctrl:"CELL_UNIDADMEDIDA",prop:"Visible"},{ctrl:"UNIDADMEDIDAWC"}]),gx.$.Deferred().resolve()};this.e220n2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e230n2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,20,21,23,24,25,28,29,31,32,33,36,37,39,40,41,44,45,47,48,49,52,53,55,56,57,60,61,63,64,65,68,69,71,72,73,76,77,79,80,81,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109];this.GXLastCtrlId=109;this.TABSContainer=gx.uc.getNew(this,18,0,"gx.ui.controls.Tab","TABSContainer","Tabs","TABS");t=this.TABSContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("ActivePage","Activepage","","int");t.setDynProp("ActivePageControlName","Activepagecontrolname","","char");t.setProp("PageCount","Pagecount",8,"num");t.setProp("Class","Class","ViewTab Tab","str");t.setProp("HistoryManagement","Historymanagement",!0,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("TabChanged",this.e210n1_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"WORKWITHLINK",format:0,grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"UNNAMEDTABLEVIEWCONTAINER",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"TXTTABTITLE",format:0,grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[20]={id:20,fld:"GENERAL_TITLE",format:0,grid:0};n[21]={id:21,fld:"",grid:0};n[23]={id:23,fld:"UNNAMEDTABLEGENERAL",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[28]={id:28,fld:"PRECIOS_TITLE",format:0,grid:0};n[29]={id:29,fld:"",grid:0};n[31]={id:31,fld:"UNNAMEDTABLEPRECIOS",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[36]={id:36,fld:"ARTICULOLISTA_TITLE",format:0,grid:0};n[37]={id:37,fld:"",grid:0};n[39]={id:39,fld:"UNNAMEDTABLEARTICULOLISTA",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[44]={id:44,fld:"ARTICULOLISTACOMPRAS_TITLE",format:0,grid:0};n[45]={id:45,fld:"",grid:0};n[47]={id:47,fld:"UNNAMEDTABLEARTICULOLISTACOMPRAS",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"",grid:0};n[52]={id:52,fld:"ARTICULOSTOCK_TITLE",format:0,grid:0};n[53]={id:53,fld:"",grid:0};n[55]={id:55,fld:"UNNAMEDTABLEARTICULOSTOCK",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[60]={id:60,fld:"GARANTIA_TITLE",format:0,grid:0};n[61]={id:61,fld:"",grid:0};n[63]={id:63,fld:"UNNAMEDTABLEGARANTIA",grid:0};n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"",grid:0};n[68]={id:68,fld:"ARTICULOCARACTERISTICA_TITLE",format:0,grid:0};n[69]={id:69,fld:"",grid:0};n[71]={id:71,fld:"UNNAMEDTABLEARTICULOCARACTERISTICA",grid:0};n[72]={id:72,fld:"",grid:0};n[73]={id:73,fld:"",grid:0};n[76]={id:76,fld:"UNIDADMEDIDA_TITLE",format:0,grid:0};n[77]={id:77,fld:"",grid:0};n[79]={id:79,fld:"UNNAMEDTABLEUNIDADMEDIDA",grid:0};n[80]={id:80,fld:"",grid:0};n[81]={id:81,fld:"",grid:0};n[83]={id:83,fld:"",grid:0};n[84]={id:84,fld:"",grid:0};n[85]={id:85,fld:"UNNAMEDTABLETABSCONTAINER",grid:0};n[86]={id:86,fld:"",grid:0};n[87]={id:87,fld:"CELL_GENERAL",grid:0};n[88]={id:88,fld:"BTNGENERAL",grid:0,evt:"e110n1_client"};n[89]={id:89,fld:"",grid:0};n[90]={id:90,fld:"CELL_PRECIOS",grid:0};n[91]={id:91,fld:"BTNPRECIOS",grid:0,evt:"e120n1_client"};n[92]={id:92,fld:"",grid:0};n[93]={id:93,fld:"CELL_ARTICULOLISTA",grid:0};n[94]={id:94,fld:"BTNARTICULOLISTA",grid:0,evt:"e130n1_client"};n[95]={id:95,fld:"",grid:0};n[96]={id:96,fld:"CELL_ARTICULOLISTACOMPRAS",grid:0};n[97]={id:97,fld:"BTNARTICULOLISTACOMPRAS",grid:0,evt:"e140n1_client"};n[98]={id:98,fld:"",grid:0};n[99]={id:99,fld:"CELL_ARTICULOSTOCK",grid:0};n[100]={id:100,fld:"BTNARTICULOSTOCK",grid:0,evt:"e150n1_client"};n[101]={id:101,fld:"",grid:0};n[102]={id:102,fld:"CELL_GARANTIA",grid:0};n[103]={id:103,fld:"BTNGARANTIA",grid:0,evt:"e160n1_client"};n[104]={id:104,fld:"",grid:0};n[105]={id:105,fld:"CELL_ARTICULOCARACTERISTICA",grid:0};n[106]={id:106,fld:"BTNARTICULOCARACTERISTICA",grid:0,evt:"e170n1_client"};n[107]={id:107,fld:"",grid:0};n[108]={id:108,fld:"CELL_UNIDADMEDIDA",grid:0};n[109]={id:109,fld:"BTNUNIDADMEDIDA",grid:0,evt:"e180n1_client"};this.AV9ArtId=0;this.AV7TabCode="";this.A8ArtId=0;this.A16ArtNom="";this.AV10LoadAllTabs=!1;this.AV11SelectedTabCode="";this.Events={e220n2_client:["ENTER",!0],e230n2_client:["CANCEL",!0],e210n1_client:["TABS.TABCHANGED",!1],e110n1_client:["'GENERAL'",!1],e120n1_client:["'PRECIOS'",!1],e130n1_client:["'ARTICULOLISTA'",!1],e140n1_client:["'ARTICULOLISTACOMPRAS'",!1],e150n1_client:["'ARTICULOSTOCK'",!1],e160n1_client:["'GARANTIA'",!1],e170n1_client:["'ARTICULOCARACTERISTICA'",!1],e180n1_client:["'UNIDADMEDIDA'",!1]};this.EvtParms.REFRESH=[[{av:"AV9ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"AV7TabCode",fld:"vTABCODE",pic:"",hsh:!0}],[]];this.EvtParms.START=[[{av:"A8ArtId",fld:"ARTID",pic:"ZZZZZZZZ9"},{av:"AV9ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"A16ArtNom",fld:"ARTNOM",pic:"@!"},{av:"AV7TabCode",fld:"vTABCODE",pic:"",hsh:!0},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""}],[{av:'gx.fn.getCtrlProperty("WORKWITHLINK","Link")',ctrl:"WORKWITHLINK",prop:"Link"},{ctrl:"FORM",prop:"Caption"},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"this.TABSContainer.ActivePageControlName",ctrl:"TABS",prop:"ActivePageControlName"},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_PRECIOS","Visible")',ctrl:"CELL_PRECIOS",prop:"Visible"},{ctrl:"PRECIOSWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTA","Visible")',ctrl:"CELL_ARTICULOLISTA",prop:"Visible"},{ctrl:"ARTICULOLISTAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTACOMPRAS","Visible")',ctrl:"CELL_ARTICULOLISTACOMPRAS",prop:"Visible"},{ctrl:"ARTICULOLISTACOMPRASWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOSTOCK","Visible")',ctrl:"CELL_ARTICULOSTOCK",prop:"Visible"},{ctrl:"ARTICULOSTOCKWC"},{av:'gx.fn.getCtrlProperty("CELL_GARANTIA","Visible")',ctrl:"CELL_GARANTIA",prop:"Visible"},{ctrl:"GARANTIAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOCARACTERISTICA","Visible")',ctrl:"CELL_ARTICULOCARACTERISTICA",prop:"Visible"},{ctrl:"ARTICULOCARACTERISTICAWC"},{av:'gx.fn.getCtrlProperty("CELL_UNIDADMEDIDA","Visible")',ctrl:"CELL_UNIDADMEDIDA",prop:"Visible"},{ctrl:"UNIDADMEDIDAWC"}]];this.EvtParms.LOAD=[[],[]];this.EvtParms["TABS.TABCHANGED"]=[[{av:"this.TABSContainer.ActivePageControlName",ctrl:"TABS",prop:"ActivePageControlName"},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0}],[{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_PRECIOS","Visible")',ctrl:"CELL_PRECIOS",prop:"Visible"},{ctrl:"PRECIOSWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTA","Visible")',ctrl:"CELL_ARTICULOLISTA",prop:"Visible"},{ctrl:"ARTICULOLISTAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTACOMPRAS","Visible")',ctrl:"CELL_ARTICULOLISTACOMPRAS",prop:"Visible"},{ctrl:"ARTICULOLISTACOMPRASWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOSTOCK","Visible")',ctrl:"CELL_ARTICULOSTOCK",prop:"Visible"},{ctrl:"ARTICULOSTOCKWC"},{av:'gx.fn.getCtrlProperty("CELL_GARANTIA","Visible")',ctrl:"CELL_GARANTIA",prop:"Visible"},{ctrl:"GARANTIAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOCARACTERISTICA","Visible")',ctrl:"CELL_ARTICULOCARACTERISTICA",prop:"Visible"},{ctrl:"ARTICULOCARACTERISTICAWC"},{av:'gx.fn.getCtrlProperty("CELL_UNIDADMEDIDA","Visible")',ctrl:"CELL_UNIDADMEDIDA",prop:"Visible"},{ctrl:"UNIDADMEDIDAWC"}]];this.EvtParms["'GENERAL'"]=[[{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0}],[{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_PRECIOS","Visible")',ctrl:"CELL_PRECIOS",prop:"Visible"},{ctrl:"PRECIOSWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTA","Visible")',ctrl:"CELL_ARTICULOLISTA",prop:"Visible"},{ctrl:"ARTICULOLISTAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTACOMPRAS","Visible")',ctrl:"CELL_ARTICULOLISTACOMPRAS",prop:"Visible"},{ctrl:"ARTICULOLISTACOMPRASWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOSTOCK","Visible")',ctrl:"CELL_ARTICULOSTOCK",prop:"Visible"},{ctrl:"ARTICULOSTOCKWC"},{av:'gx.fn.getCtrlProperty("CELL_GARANTIA","Visible")',ctrl:"CELL_GARANTIA",prop:"Visible"},{ctrl:"GARANTIAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOCARACTERISTICA","Visible")',ctrl:"CELL_ARTICULOCARACTERISTICA",prop:"Visible"},{ctrl:"ARTICULOCARACTERISTICAWC"},{av:'gx.fn.getCtrlProperty("CELL_UNIDADMEDIDA","Visible")',ctrl:"CELL_UNIDADMEDIDA",prop:"Visible"},{ctrl:"UNIDADMEDIDAWC"}]];this.EvtParms["'PRECIOS'"]=[[{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0}],[{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_PRECIOS","Visible")',ctrl:"CELL_PRECIOS",prop:"Visible"},{ctrl:"PRECIOSWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTA","Visible")',ctrl:"CELL_ARTICULOLISTA",prop:"Visible"},{ctrl:"ARTICULOLISTAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTACOMPRAS","Visible")',ctrl:"CELL_ARTICULOLISTACOMPRAS",prop:"Visible"},{ctrl:"ARTICULOLISTACOMPRASWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOSTOCK","Visible")',ctrl:"CELL_ARTICULOSTOCK",prop:"Visible"},{ctrl:"ARTICULOSTOCKWC"},{av:'gx.fn.getCtrlProperty("CELL_GARANTIA","Visible")',ctrl:"CELL_GARANTIA",prop:"Visible"},{ctrl:"GARANTIAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOCARACTERISTICA","Visible")',ctrl:"CELL_ARTICULOCARACTERISTICA",prop:"Visible"},{ctrl:"ARTICULOCARACTERISTICAWC"},{av:'gx.fn.getCtrlProperty("CELL_UNIDADMEDIDA","Visible")',ctrl:"CELL_UNIDADMEDIDA",prop:"Visible"},{ctrl:"UNIDADMEDIDAWC"}]];this.EvtParms["'ARTICULOLISTA'"]=[[{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0}],[{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_PRECIOS","Visible")',ctrl:"CELL_PRECIOS",prop:"Visible"},{ctrl:"PRECIOSWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTA","Visible")',ctrl:"CELL_ARTICULOLISTA",prop:"Visible"},{ctrl:"ARTICULOLISTAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTACOMPRAS","Visible")',ctrl:"CELL_ARTICULOLISTACOMPRAS",prop:"Visible"},{ctrl:"ARTICULOLISTACOMPRASWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOSTOCK","Visible")',ctrl:"CELL_ARTICULOSTOCK",prop:"Visible"},{ctrl:"ARTICULOSTOCKWC"},{av:'gx.fn.getCtrlProperty("CELL_GARANTIA","Visible")',ctrl:"CELL_GARANTIA",prop:"Visible"},{ctrl:"GARANTIAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOCARACTERISTICA","Visible")',ctrl:"CELL_ARTICULOCARACTERISTICA",prop:"Visible"},{ctrl:"ARTICULOCARACTERISTICAWC"},{av:'gx.fn.getCtrlProperty("CELL_UNIDADMEDIDA","Visible")',ctrl:"CELL_UNIDADMEDIDA",prop:"Visible"},{ctrl:"UNIDADMEDIDAWC"}]];this.EvtParms["'ARTICULOLISTACOMPRAS'"]=[[{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0}],[{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_PRECIOS","Visible")',ctrl:"CELL_PRECIOS",prop:"Visible"},{ctrl:"PRECIOSWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTA","Visible")',ctrl:"CELL_ARTICULOLISTA",prop:"Visible"},{ctrl:"ARTICULOLISTAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTACOMPRAS","Visible")',ctrl:"CELL_ARTICULOLISTACOMPRAS",prop:"Visible"},{ctrl:"ARTICULOLISTACOMPRASWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOSTOCK","Visible")',ctrl:"CELL_ARTICULOSTOCK",prop:"Visible"},{ctrl:"ARTICULOSTOCKWC"},{av:'gx.fn.getCtrlProperty("CELL_GARANTIA","Visible")',ctrl:"CELL_GARANTIA",prop:"Visible"},{ctrl:"GARANTIAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOCARACTERISTICA","Visible")',ctrl:"CELL_ARTICULOCARACTERISTICA",prop:"Visible"},{ctrl:"ARTICULOCARACTERISTICAWC"},{av:'gx.fn.getCtrlProperty("CELL_UNIDADMEDIDA","Visible")',ctrl:"CELL_UNIDADMEDIDA",prop:"Visible"},{ctrl:"UNIDADMEDIDAWC"}]];this.EvtParms["'ARTICULOSTOCK'"]=[[{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0}],[{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_PRECIOS","Visible")',ctrl:"CELL_PRECIOS",prop:"Visible"},{ctrl:"PRECIOSWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTA","Visible")',ctrl:"CELL_ARTICULOLISTA",prop:"Visible"},{ctrl:"ARTICULOLISTAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTACOMPRAS","Visible")',ctrl:"CELL_ARTICULOLISTACOMPRAS",prop:"Visible"},{ctrl:"ARTICULOLISTACOMPRASWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOSTOCK","Visible")',ctrl:"CELL_ARTICULOSTOCK",prop:"Visible"},{ctrl:"ARTICULOSTOCKWC"},{av:'gx.fn.getCtrlProperty("CELL_GARANTIA","Visible")',ctrl:"CELL_GARANTIA",prop:"Visible"},{ctrl:"GARANTIAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOCARACTERISTICA","Visible")',ctrl:"CELL_ARTICULOCARACTERISTICA",prop:"Visible"},{ctrl:"ARTICULOCARACTERISTICAWC"},{av:'gx.fn.getCtrlProperty("CELL_UNIDADMEDIDA","Visible")',ctrl:"CELL_UNIDADMEDIDA",prop:"Visible"},{ctrl:"UNIDADMEDIDAWC"}]];this.EvtParms["'GARANTIA'"]=[[{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0}],[{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_PRECIOS","Visible")',ctrl:"CELL_PRECIOS",prop:"Visible"},{ctrl:"PRECIOSWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTA","Visible")',ctrl:"CELL_ARTICULOLISTA",prop:"Visible"},{ctrl:"ARTICULOLISTAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTACOMPRAS","Visible")',ctrl:"CELL_ARTICULOLISTACOMPRAS",prop:"Visible"},{ctrl:"ARTICULOLISTACOMPRASWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOSTOCK","Visible")',ctrl:"CELL_ARTICULOSTOCK",prop:"Visible"},{ctrl:"ARTICULOSTOCKWC"},{av:'gx.fn.getCtrlProperty("CELL_GARANTIA","Visible")',ctrl:"CELL_GARANTIA",prop:"Visible"},{ctrl:"GARANTIAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOCARACTERISTICA","Visible")',ctrl:"CELL_ARTICULOCARACTERISTICA",prop:"Visible"},{ctrl:"ARTICULOCARACTERISTICAWC"},{av:'gx.fn.getCtrlProperty("CELL_UNIDADMEDIDA","Visible")',ctrl:"CELL_UNIDADMEDIDA",prop:"Visible"},{ctrl:"UNIDADMEDIDAWC"}]];this.EvtParms["'ARTICULOCARACTERISTICA'"]=[[{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0}],[{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_PRECIOS","Visible")',ctrl:"CELL_PRECIOS",prop:"Visible"},{ctrl:"PRECIOSWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTA","Visible")',ctrl:"CELL_ARTICULOLISTA",prop:"Visible"},{ctrl:"ARTICULOLISTAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTACOMPRAS","Visible")',ctrl:"CELL_ARTICULOLISTACOMPRAS",prop:"Visible"},{ctrl:"ARTICULOLISTACOMPRASWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOSTOCK","Visible")',ctrl:"CELL_ARTICULOSTOCK",prop:"Visible"},{ctrl:"ARTICULOSTOCKWC"},{av:'gx.fn.getCtrlProperty("CELL_GARANTIA","Visible")',ctrl:"CELL_GARANTIA",prop:"Visible"},{ctrl:"GARANTIAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOCARACTERISTICA","Visible")',ctrl:"CELL_ARTICULOCARACTERISTICA",prop:"Visible"},{ctrl:"ARTICULOCARACTERISTICAWC"},{av:'gx.fn.getCtrlProperty("CELL_UNIDADMEDIDA","Visible")',ctrl:"CELL_UNIDADMEDIDA",prop:"Visible"},{ctrl:"UNIDADMEDIDAWC"}]];this.EvtParms["'UNIDADMEDIDA'"]=[[{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9ArtId",fld:"vARTID",pic:"ZZZZZZZZ9",hsh:!0}],[{av:"AV11SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_PRECIOS","Visible")',ctrl:"CELL_PRECIOS",prop:"Visible"},{ctrl:"PRECIOSWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTA","Visible")',ctrl:"CELL_ARTICULOLISTA",prop:"Visible"},{ctrl:"ARTICULOLISTAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOLISTACOMPRAS","Visible")',ctrl:"CELL_ARTICULOLISTACOMPRAS",prop:"Visible"},{ctrl:"ARTICULOLISTACOMPRASWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOSTOCK","Visible")',ctrl:"CELL_ARTICULOSTOCK",prop:"Visible"},{ctrl:"ARTICULOSTOCKWC"},{av:'gx.fn.getCtrlProperty("CELL_GARANTIA","Visible")',ctrl:"CELL_GARANTIA",prop:"Visible"},{ctrl:"GARANTIAWC"},{av:'gx.fn.getCtrlProperty("CELL_ARTICULOCARACTERISTICA","Visible")',ctrl:"CELL_ARTICULOCARACTERISTICA",prop:"Visible"},{ctrl:"ARTICULOCARACTERISTICAWC"},{av:'gx.fn.getCtrlProperty("CELL_UNIDADMEDIDA","Visible")',ctrl:"CELL_UNIDADMEDIDA",prop:"Visible"},{ctrl:"UNIDADMEDIDAWC"}]];this.setVCMap("AV10LoadAllTabs","vLOADALLTABS",0,"boolean",4,0);this.setVCMap("AV11SelectedTabCode","vSELECTEDTABCODE",0,"char",50,0);this.setVCMap("AV9ArtId","vARTID",0,"int",9,0);this.setVCMap("AV7TabCode","vTABCODE",0,"char",50,0);this.setVCMap("AV9ArtId","vARTID",0,"int",9,0);this.setVCMap("AV10LoadAllTabs","vLOADALLTABS",0,"boolean",4,0);this.setVCMap("AV11SelectedTabCode","vSELECTEDTABCODE",0,"char",50,0);this.Initialize();this.setComponent({id:"GENERALWC",GXClass:null,Prefix:"W0026",lvl:1});this.setComponent({id:"PRECIOSWC",GXClass:null,Prefix:"W0034",lvl:1});this.setComponent({id:"ARTICULOLISTAWC",GXClass:null,Prefix:"W0042",lvl:1});this.setComponent({id:"ARTICULOLISTACOMPRASWC",GXClass:null,Prefix:"W0050",lvl:1});this.setComponent({id:"ARTICULOSTOCKWC",GXClass:null,Prefix:"W0058",lvl:1});this.setComponent({id:"GARANTIAWC",GXClass:null,Prefix:"W0066",lvl:1});this.setComponent({id:"ARTICULOCARACTERISTICAWC",GXClass:null,Prefix:"W0074",lvl:1});this.setComponent({id:"UNIDADMEDIDAWC",GXClass:null,Prefix:"W0082",lvl:1})});gx.wi(function(){gx.createParentObj(viewarticulo)})