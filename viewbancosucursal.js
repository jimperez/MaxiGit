/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:52:50.32
*/
gx.evt.autoSkip=!1;gx.define("viewbancosucursal",!1,function(){var n,t;this.ServerClass="viewbancosucursal";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV11LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS");this.AV12SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE");this.AV9BancoId=gx.fn.getIntegerValue("vBANCOID",".");this.AV10BancoSucursalId=gx.fn.getIntegerValue("vBANCOSUCURSALID",".");this.AV7TabCode=gx.fn.getControlValue("vTABCODE");this.AV9BancoId=gx.fn.getIntegerValue("vBANCOID",".");this.AV10BancoSucursalId=gx.fn.getIntegerValue("vBANCOSUCURSALID",".");this.AV11LoadAllTabs=gx.fn.getControlValue("vLOADALLTABS");this.AV12SelectedTabCode=gx.fn.getControlValue("vSELECTEDTABCODE")};this.s112_client=function(){gx.fn.setCtrlProperty("CELL_GENERAL","Visible",!0);(this.AV11LoadAllTabs||this.AV12SelectedTabCode==""||this.AV12SelectedTabCode=="General")&&(this.createWebComponent("Generalwc","BancoSucursalGeneral",[this.AV9BancoId,this.AV10BancoSucursalId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","General"),(this.AV12SelectedTabCode==""||this.AV12SelectedTabCode=="General")&&gx.fn.setCtrlProperty("CELL_GENERAL","Visible",!1));gx.fn.setCtrlProperty("CELL_BANCOSUCURSALCONTACTO","Visible",!0);(this.AV11LoadAllTabs||this.AV12SelectedTabCode=="BancoSucursalContacto")&&(this.createWebComponent("Bancosucursalcontactowc","BancoSucursalBancoSucursalContactoWC",[this.AV9BancoId,this.AV10BancoSucursalId]),gx.fn.setCtrlProperty("TXTTABTITLE","Caption","Banco Sucursal Contacto"),this.AV12SelectedTabCode=="BancoSucursalContacto"&&gx.fn.setCtrlProperty("CELL_BANCOSUCURSALCONTACTO","Visible",!1))};this.e15ac1_client=function(){return this.clearMessages(),this.AV12SelectedTabCode=this.TABSContainer.ActivePageControlName,this.AV11LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_BANCOSUCURSALCONTACTO","Visible")',ctrl:"CELL_BANCOSUCURSALCONTACTO",prop:"Visible"},{ctrl:"BANCOSUCURSALCONTACTOWC"}]),gx.$.Deferred().resolve()};this.e11ac1_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(1),this.AV12SelectedTabCode="General",this.AV11LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_BANCOSUCURSALCONTACTO","Visible")',ctrl:"CELL_BANCOSUCURSALCONTACTO",prop:"Visible"},{ctrl:"BANCOSUCURSALCONTACTOWC"}]),gx.$.Deferred().resolve()};this.e12ac1_client=function(){return this.clearMessages(),this.TABSContainer.SelectTab(2),this.AV12SelectedTabCode="BancoSucursalContacto",this.AV11LoadAllTabs=!1,this.s112_client(),this.refreshOutputs([{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_BANCOSUCURSALCONTACTO","Visible")',ctrl:"CELL_BANCOSUCURSALCONTACTO",prop:"Visible"},{ctrl:"BANCOSUCURSALCONTACTOWC"}]),gx.$.Deferred().resolve()};this.e16ac2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e17ac2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,20,21,23,24,25,28,29,31,32,33,35,36,37,38,39,40,41,42,43];this.GXLastCtrlId=43;this.TABSContainer=gx.uc.getNew(this,18,0,"gx.ui.controls.Tab","TABSContainer","Tabs","TABS");t=this.TABSContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("ActivePage","Activepage","","int");t.setDynProp("ActivePageControlName","Activepagecontrolname","","char");t.setProp("PageCount","Pagecount",2,"num");t.setProp("Class","Class","ViewTab Tab","str");t.setProp("HistoryManagement","Historymanagement",!0,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("TabChanged",this.e15ac1_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"WORKWITHLINK",format:0,grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"UNNAMEDTABLEVIEWCONTAINER",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"TXTTABTITLE",format:0,grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[20]={id:20,fld:"GENERAL_TITLE",format:0,grid:0};n[21]={id:21,fld:"",grid:0};n[23]={id:23,fld:"UNNAMEDTABLEGENERAL",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[28]={id:28,fld:"BANCOSUCURSALCONTACTO_TITLE",format:0,grid:0};n[29]={id:29,fld:"",grid:0};n[31]={id:31,fld:"UNNAMEDTABLEBANCOSUCURSALCONTACTO",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"UNNAMEDTABLETABSCONTAINER",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"CELL_GENERAL",grid:0};n[40]={id:40,fld:"BTNGENERAL",grid:0,evt:"e11ac1_client"};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"CELL_BANCOSUCURSALCONTACTO",grid:0};n[43]={id:43,fld:"BTNBANCOSUCURSALCONTACTO",grid:0,evt:"e12ac1_client"};this.AV9BancoId=0;this.AV10BancoSucursalId=0;this.AV7TabCode="";this.A165BancoSucursalId=0;this.A29BancoId=0;this.A1522BancoSucursalNombre="";this.AV11LoadAllTabs=!1;this.AV12SelectedTabCode="";this.Events={e16ac2_client:["ENTER",!0],e17ac2_client:["CANCEL",!0],e15ac1_client:["TABS.TABCHANGED",!1],e11ac1_client:["'GENERAL'",!1],e12ac1_client:["'BANCOSUCURSALCONTACTO'",!1]};this.EvtParms.REFRESH=[[{av:"AV9BancoId",fld:"vBANCOID",pic:"ZZ9",hsh:!0},{av:"AV10BancoSucursalId",fld:"vBANCOSUCURSALID",pic:"999",hsh:!0},{av:"AV7TabCode",fld:"vTABCODE",pic:"",hsh:!0}],[]];this.EvtParms.START=[[{av:"A29BancoId",fld:"BANCOID",pic:"ZZ9"},{av:"AV9BancoId",fld:"vBANCOID",pic:"ZZ9",hsh:!0},{av:"A165BancoSucursalId",fld:"BANCOSUCURSALID",pic:"999"},{av:"AV10BancoSucursalId",fld:"vBANCOSUCURSALID",pic:"999",hsh:!0},{av:"A1522BancoSucursalNombre",fld:"BANCOSUCURSALNOMBRE",pic:"@!"},{av:"AV7TabCode",fld:"vTABCODE",pic:"",hsh:!0},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""}],[{av:'gx.fn.getCtrlProperty("WORKWITHLINK","Link")',ctrl:"WORKWITHLINK",prop:"Link"},{ctrl:"FORM",prop:"Caption"},{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"this.TABSContainer.ActivePageControlName",ctrl:"TABS",prop:"ActivePageControlName"},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_BANCOSUCURSALCONTACTO","Visible")',ctrl:"CELL_BANCOSUCURSALCONTACTO",prop:"Visible"},{ctrl:"BANCOSUCURSALCONTACTOWC"}]];this.EvtParms.LOAD=[[],[]];this.EvtParms["TABS.TABCHANGED"]=[[{av:"this.TABSContainer.ActivePageControlName",ctrl:"TABS",prop:"ActivePageControlName"},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9BancoId",fld:"vBANCOID",pic:"ZZ9",hsh:!0},{av:"AV10BancoSucursalId",fld:"vBANCOSUCURSALID",pic:"999",hsh:!0}],[{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_BANCOSUCURSALCONTACTO","Visible")',ctrl:"CELL_BANCOSUCURSALCONTACTO",prop:"Visible"},{ctrl:"BANCOSUCURSALCONTACTOWC"}]];this.EvtParms["'GENERAL'"]=[[{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9BancoId",fld:"vBANCOID",pic:"ZZ9",hsh:!0},{av:"AV10BancoSucursalId",fld:"vBANCOSUCURSALID",pic:"999",hsh:!0}],[{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_BANCOSUCURSALCONTACTO","Visible")',ctrl:"CELL_BANCOSUCURSALCONTACTO",prop:"Visible"},{ctrl:"BANCOSUCURSALCONTACTOWC"}]];this.EvtParms["'BANCOSUCURSALCONTACTO'"]=[[{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV9BancoId",fld:"vBANCOID",pic:"ZZ9",hsh:!0},{av:"AV10BancoSucursalId",fld:"vBANCOSUCURSALID",pic:"999",hsh:!0}],[{av:"AV12SelectedTabCode",fld:"vSELECTEDTABCODE",pic:""},{av:"AV11LoadAllTabs",fld:"vLOADALLTABS",pic:""},{av:'gx.fn.getCtrlProperty("CELL_GENERAL","Visible")',ctrl:"CELL_GENERAL",prop:"Visible"},{ctrl:"GENERALWC"},{av:'gx.fn.getCtrlProperty("TXTTABTITLE","Caption")',ctrl:"TXTTABTITLE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CELL_BANCOSUCURSALCONTACTO","Visible")',ctrl:"CELL_BANCOSUCURSALCONTACTO",prop:"Visible"},{ctrl:"BANCOSUCURSALCONTACTOWC"}]];this.setVCMap("AV11LoadAllTabs","vLOADALLTABS",0,"boolean",4,0);this.setVCMap("AV12SelectedTabCode","vSELECTEDTABCODE",0,"char",50,0);this.setVCMap("AV9BancoId","vBANCOID",0,"int",3,0);this.setVCMap("AV10BancoSucursalId","vBANCOSUCURSALID",0,"int",3,0);this.setVCMap("AV7TabCode","vTABCODE",0,"char",50,0);this.setVCMap("AV9BancoId","vBANCOID",0,"int",3,0);this.setVCMap("AV10BancoSucursalId","vBANCOSUCURSALID",0,"int",3,0);this.setVCMap("AV11LoadAllTabs","vLOADALLTABS",0,"boolean",4,0);this.setVCMap("AV12SelectedTabCode","vSELECTEDTABCODE",0,"char",50,0);this.Initialize();this.setComponent({id:"GENERALWC",GXClass:null,Prefix:"W0026",lvl:1});this.setComponent({id:"BANCOSUCURSALCONTACTOWC",GXClass:null,Prefix:"W0034",lvl:1})});gx.wi(function(){gx.createParentObj(viewbancosucursal)})