/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 16:0:5.58
*/
gx.evt.autoSkip=!1;gx.define("viewremitoajuste",!1,function(){var n,t;this.ServerClass="viewremitoajuste";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV11LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS");this.AV12SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE");this.AV10RtoAjusteId=gx.fn.getIntegerValue("vRTOAJUSTEID",".");this.AV8TabCode=gx.fn.getControlValue("vTABCODE");this.AV10RtoAjusteId=gx.fn.getIntegerValue("vRTOAJUSTEID",".");this.AV11LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS");this.AV12SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE")};this.s112_client=function(){gx.fn.setCtrlProperty("CELL_GENERAL","Visible",!0);(this.AV11LoadAllTabs||this.AV12SelectedTabCode==""||this.AV12SelectedTabCode=="General")&&(this.createWebComponent("Generalwc","RemitoAjusteGeneral",[this.AV10RtoAjusteId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","General"),(this.AV12SelectedTabCode==""||this.AV12SelectedTabCode=="General")&&gx.fn.setCtrlProperty("CELL_GENERAL","Visible",!1));gx.fn.setCtrlProperty("CELL_DETALLE","Visible",!0);(this.AV11LoadAllTabs||this.AV12SelectedTabCode=="Detalle")&&(this.createWebComponent("Detallewc","RemitoAjusteDetalleWC",[this.AV10RtoAjusteId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","Detalle"),this.AV12SelectedTabCode=="Detalle"&&gx.fn.setCtrlProperty("CELL_DETALLE","Visible",!1));gx.fn.setCtrlProperty("CELL_REMITOAJUSTEESTADO","Visible",!0);(this.AV11LoadAllTabs||this.AV12SelectedTabCode=="RemitoAjusteEstado")&&(this.createWebComponent("Remitoajusteestadowc","RemitoAjusteRemitoAjusteEstadoWC",[this.AV10RtoAjusteId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","Remito Ajuste Estado"),this.AV12SelectedTabCode=="RemitoAjusteEstado"&&gx.fn.setCtrlProperty("CELL_REMITOAJUSTEESTADO","Visible",!1))};this.e16x91_client=function(){return this.clearMessages(),this.AV12SelectedTabCode=this.TABSContainer.ActivePageControlName,this.AV11LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_DETALLE","Visible")',ctrl:"CELL_DETALLE",prop:"Visible"},{ctrl:"DETALLEWC"},{av:'gx.fn.getCtrlProperty("CELL_REMITOAJUSTEESTADO","Visible")',ctrl:"CELL_REMITOAJUSTEESTADO",prop:"Visible"},{ctrl:"REMITOAJUSTEESTADOWC"}]),gx.$.Deferred().resolve()};this.e11x91_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(1),this.AV12SelectedTabCode="General",this.AV11LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_DETALLE","Visible")',ctrl:"CELL_DETALLE",prop:"Visible"},{ctrl:"DETALLEWC"},{av:'gx.fn.getCtrlProperty("CELL_REMITOAJUSTEESTADO","Visible")',ctrl:"CELL_REMITOAJUSTEESTADO",prop:"Visible"},{ctrl:"REMITOAJUSTEESTADOWC"}]),gx.$.Deferred().resolve()};this.e12x91_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(2),this.AV12SelectedTabCode="Detalle",this.AV11LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_DETALLE","Visible")',ctrl:"CELL_DETALLE",prop:"Visible"},{ctrl:"DETALLEWC"},{av:'gx.fn.getCtrlProperty("CELL_REMITOAJUSTEESTADO","Visible")',ctrl:"CELL_REMITOAJUSTEESTADO",prop:"Visible"},{ctrl:"REMITOAJUSTEESTADOWC"}]),gx.$.Deferred().resolve()};this.e13x91_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(3),this.AV12SelectedTabCode="RemitoAjusteEstado",this.AV11LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_DETALLE","Visible")',ctrl:"CELL_DETALLE",prop:"Visible"},{ctrl:"DETALLEWC"},{av:'gx.fn.getCtrlProperty("CELL_REMITOAJUSTEESTADO","Visible")',ctrl:"CELL_REMITOAJUSTEESTADO",prop:"Visible"},{ctrl:"REMITOAJUSTEESTADOWC"}]),gx.$.Deferred().resolve()};this.e17x92_client=function(){return this.clearMessages(),this.call("wwextraremitoajusteautorizar.aspx",[]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e18x92_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e19x92_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,20,21,23,24,25,28,29,31,32,33,36,37,39,40,41,43,44,45,46,47,48,49,50,51,52,53,54];this.GXLastCtrlId=54;this.TABSContainer=gx.uc.getNew(this,18,0,"gx.ui.controls.Tab","TABSContainer","Tabs","TABS");t=this.TABSContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("ActivePage","Activepage","","int");t.setDynProp("ActivePageControlName","Activepagecontrolname","","char");t.setProp("PageCount","Pagecount",3,"num");t.setProp("Class","Class","ViewTab Tab","str");t.setProp("HistoryManagement","Historymanagement",!0,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("TabChanged",this.e16x91_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"WORKWITHLINK",format:0,grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"UNNAMEDTABLEVIEWCONTAINER",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"TXTTABTITLE",format:0,grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[20]={id:20,fld:"GENERAL_TITLE",format:0,grid:0};n[21]={id:21,fld:"",grid:0};n[23]={id:23,fld:"UNNAMEDTABLEGENERAL",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[28]={id:28,fld:"DETALLE_TITLE",format:0,grid:0};n[29]={id:29,fld:"",grid:0};n[31]={id:31,fld:"UNNAMEDTABLEDETALLE",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[36]={id:36,fld:"REMITOAJUSTEESTADO_TITLE",format:0,grid:0};n[37]={id:37,fld:"",grid:0};n[39]={id:39,fld:"UNNAMEDTABLEREMITOAJUSTEESTADO",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"UNNAMEDTABLETABSCONTAINER",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"CELL_GENERAL",grid:0};n[48]={id:48,fld:"BTNGENERAL",grid:0,evt:"e11x91_client"};n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"CELL_DETALLE",grid:0};n[51]={id:51,fld:"BTNDETALLE",grid:0,evt:"e12x91_client"};n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"CELL_REMITOAJUSTEESTADO",grid:0};n[54]={id:54,fld:"BTNREMITOAJUSTEESTADO",grid:0,evt:"e13x91_client"};this.AV10RtoAjusteId=0;this.AV8TabCode="";this.A3381RtoAjusteId=0;this.A3399RtoAjusteFecha=gx.date.nullDate();this.AV11LoadAllTabs=!1;this.AV12SelectedTabCode="";this.Events={e18x92_client:["ENTER",!0],e19x92_client:["CANCEL",!0],e16x91_client:["TABS.TABCHANGED",!1],e11x91_client:["'GENERAL'",!1],e12x91_client:["'DETALLE'",!1],e13x91_client:["'REMITOAJUSTEESTADO'",!1],e17x92_client:["'DOVOLVER'",!1]};this.EvtParms.REFRESH=[[{av:"AV10RtoAjusteId",fld:"vRTOAJUSTEID",pic:"ZZZZZZZ9",hsh:!0},{av:"AV8TabCode",fld:"vTABCODE",pic:"",hsh:!0}],[]];this.EvtParms.START=[[{av:"A3381RtoAjusteId",fld:"RTOAJUSTEID",pic:"ZZZZZZZ9"},{av:"AV10RtoAjusteId",fld:"vRTOAJUSTEID",pic:"ZZZZZZZ9",hsh:!0},{av:"A3399RtoAjusteFecha",fld:"RTOAJUSTEFECHA",pic:""},{av:"AV8TabCode",fld:"vTABCODE",pic:"",hsh:!0},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""}],[{av:'gx.fn.getCtrlProperty("WORKWITHLINK","Link")',ctrl:"WORKWITHLINK",prop:"Link"},{ctrl:"FORM",prop:"Caption"},{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"this.TABSContainer.ActivePageControlName",ctrl:"TABS",prop:"ActivePageControlName"},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_DETALLE","Visible")',ctrl:"CELL_DETALLE",prop:"Visible"},{ctrl:"DETALLEWC"},{av:'gx.fn.getCtrlProperty("CELL_REMITOAJUSTEESTADO","Visible")',ctrl:"CELL_REMITOAJUSTEESTADO",prop:"Visible"},{ctrl:"REMITOAJUSTEESTADOWC"}]];this.EvtParms.LOAD=[[],[]];this.EvtParms["TABS.TABCHANGED"]=[[{av:"this.TABSContainer.ActivePageControlName",ctrl:"TABS",prop:"ActivePageControlName"},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10RtoAjusteId",fld:"vRTOAJUSTEID",pic:"ZZZZZZZ9",hsh:!0}],[{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_DETALLE","Visible")',ctrl:"CELL_DETALLE",prop:"Visible"},{ctrl:"DETALLEWC"},{av:'gx.fn.getCtrlProperty("CELL_REMITOAJUSTEESTADO","Visible")',ctrl:"CELL_REMITOAJUSTEESTADO",prop:"Visible"},{ctrl:"REMITOAJUSTEESTADOWC"}]];this.EvtParms["'GENERAL'"]=[[{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10RtoAjusteId",fld:"vRTOAJUSTEID",pic:"ZZZZZZZ9",hsh:!0}],[{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_DETALLE","Visible")',ctrl:"CELL_DETALLE",prop:"Visible"},{ctrl:"DETALLEWC"},{av:'gx.fn.getCtrlProperty("CELL_REMITOAJUSTEESTADO","Visible")',ctrl:"CELL_REMITOAJUSTEESTADO",prop:"Visible"},{ctrl:"REMITOAJUSTEESTADOWC"}]];this.EvtParms["'DETALLE'"]=[[{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10RtoAjusteId",fld:"vRTOAJUSTEID",pic:"ZZZZZZZ9",hsh:!0}],[{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_DETALLE","Visible")',ctrl:"CELL_DETALLE",prop:"Visible"},{ctrl:"DETALLEWC"},{av:'gx.fn.getCtrlProperty("CELL_REMITOAJUSTEESTADO","Visible")',ctrl:"CELL_REMITOAJUSTEESTADO",prop:"Visible"},{ctrl:"REMITOAJUSTEESTADOWC"}]];this.EvtParms["'REMITOAJUSTEESTADO'"]=[[{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV10RtoAjusteId",fld:"vRTOAJUSTEID",pic:"ZZZZZZZ9",hsh:!0}],[{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_DETALLE","Visible")',ctrl:"CELL_DETALLE",prop:"Visible"},{ctrl:"DETALLEWC"},{av:'gx.fn.getCtrlProperty("CELL_REMITOAJUSTEESTADO","Visible")',ctrl:"CELL_REMITOAJUSTEESTADO",prop:"Visible"},{ctrl:"REMITOAJUSTEESTADOWC"}]];this.EvtParms["'DOVOLVER'"]=[[],[]];this.setVCMap("AV11LoadAllTabs","vLOADALLTABS",0,"boolean",4,0);this.setVCMap("AV12SelectedTabCode","vSELECTEDTABCODE",0,"char",50,0);this.setVCMap("AV10RtoAjusteId","vRTOAJUSTEID",0,"int",8,0);this.setVCMap("AV8TabCode","vTABCODE",0,"char",50,0);this.setVCMap("AV10RtoAjusteId","vRTOAJUSTEID",0,"int",8,0);this.setVCMap("AV11LoadAllTabs","vLOADALLTABS",0,"boolean",4,0);this.setVCMap("AV12SelectedTabCode","vSELECTEDTABCODE",0,"char",50,0);this.Initialize();this.setComponent({id:"GENERALWC",GXClass:null,Prefix:"W0026",lvl:1});this.setComponent({id:"DETALLEWC",GXClass:null,Prefix:"W0034",lvl:1});this.setComponent({id:"REMITOAJUSTEESTADOWC",GXClass:null,Prefix:"W0042",lvl:1})});gx.wi(function(){gx.createParentObj(viewremitoajuste)})