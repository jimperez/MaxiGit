/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:3:42.64
*/
gx.evt.autoSkip=!1;gx.define("presupuestovtafondofacturarwc",!0,function(n){var t,r,i,u;this.ServerClass="presupuestovtafondofacturarwc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV44Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV37TotPreFondoImporte=gx.fn.getDecimalValue("vTOTPREFONDOIMPORTE",".",",");this.AV7PreId=gx.fn.getIntegerValue("vPREID",".");this.AV7PreId=gx.fn.getIntegerValue("vPREID",".");this.AV44Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV37TotPreFondoImporte=gx.fn.getDecimalValue("vTOTPREFONDOIMPORTE",".",",")};this.Valid_Fondoid=function(){var n=gx.fn.currentGridRowImpl(17);return this.validCliEvt("Valid_Fondoid",17,function(){try{if(gx.fn.currentGridRowImpl(17)===0)return!0;var n=gx.util.balloon.getNew("FONDOID",gx.fn.currentGridRowImpl(17));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.s142_client=function(){this.AV37TotPreFondoImporte=0};this.e14jx2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e15jx2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,8,9,10,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,35,36,37,38,39];this.GXLastCtrlId=39;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",17,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"presupuestovtafondofacturarwc",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit(38,18,"FONDOID","Ide.","","FondoId","int",0,"px",4,4,"right",null,[],38,"FondoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(345,19,"FONDONOMBRE","Fondo","","FondoNombre","svchar",0,"px",64,64,"left",null,[],345,"FondoNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addComboBox(635,20,"FONDOTIPO","Tipo de Valor","FondoTipo","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");r.addComboBox(346,21,"FONDOESTADO","Estado","FondoEstado","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");r.addSingleLineEdit(2080,22,"PREFONDOIMPORTEORIGEN","Imp. Ori.","","PreFondoImporteOrigen","decimal",0,"px",13,13,"right",null,[],2080,"PreFondoImporteOrigen",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(673,23,"PREFONDOIMPORTE","Importe","","PreFondoImporte","decimal",0,"px",13,13,"right",null,[],673,"PreFondoImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEGRIDHEADERContainer=gx.uc.getNew(this,6,0,"BootstrapPanel",this.CmpContext+"DVPANEL_TABLEGRIDHEADERContainer","Dvpanel_tablegridheader","DVPANEL_TABLEGRIDHEADER");i=this.DVPANEL_TABLEGRIDHEADERContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Fondos","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setProp("Gx Control Type","Gxcontroltype","","int");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);this.WORKWITHPLUSUTILITIES1Container=gx.uc.getNew(this,40,35,"DVelop_WorkWithPlusUtilities",this.CmpContext+"WORKWITHPLUSUTILITIES1Container","Workwithplusutilities1","WORKWITHPLUSUTILITIES1");u=this.WORKWITHPLUSUTILITIES1Container;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("EnableAutoUpdateFromDocumentTitle","Enableautoupdatefromdocumenttitle",!1,"bool");u.setProp("EnableFixObjectFitCover","Enablefixobjectfitcover",!1,"bool");u.setProp("EnableFloatingLabels","Enablefloatinglabels",!1,"bool");u.setProp("EnableConvertComboToBootstrapSelect","Enableconvertcombotobootstrapselect",!1,"bool");u.setProp("CurrentTab_ReturnUrl","Currenttab_returnurl","","char");u.setProp("Visible","Visible",!0,"bool");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[8]={id:8,fld:"TABLEGRIDHEADER",grid:0};t[9]={id:9,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"GRIDTABLEWITHTOTALIZERS",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[18]={id:18,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:this.Valid_Fondoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOID",gxz:"Z38FondoId",gxold:"O38FondoId",gxvar:"A38FondoId",ucs:[],op:[19,20,21],ip:[19,20,21,18],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A38FondoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z38FondoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FONDOID",n||gx.fn.currentGridRowImpl(17),gx.O.A38FondoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A38FondoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FONDOID",n||gx.fn.currentGridRowImpl(17),".")},nac:gx.falseFn};t[19]={id:19,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDONOMBRE",gxz:"Z345FondoNombre",gxold:"O345FondoNombre",gxvar:"A345FondoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A345FondoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z345FondoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("FONDONOMBRE",n||gx.fn.currentGridRowImpl(17),gx.O.A345FondoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A345FondoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FONDONOMBRE",n||gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};t[20]={id:20,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOTIPO",gxz:"Z635FondoTipo",gxold:"O635FondoTipo",gxvar:"A635FondoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A635FondoTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z635FondoTipo=n)},v2c:function(n){gx.fn.setGridComboBoxValue("FONDOTIPO",n||gx.fn.currentGridRowImpl(17),gx.O.A635FondoTipo)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A635FondoTipo=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FONDOTIPO",n||gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};t[21]={id:21,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOESTADO",gxz:"Z346FondoEstado",gxold:"O346FondoEstado",gxvar:"A346FondoEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A346FondoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z346FondoEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("FONDOESTADO",n||gx.fn.currentGridRowImpl(17),gx.O.A346FondoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A346FondoEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FONDOESTADO",n||gx.fn.currentGridRowImpl(17))},nac:gx.falseFn};t[22]={id:22,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREFONDOIMPORTEORIGEN",gxz:"Z2080PreFondoImporteOrigen",gxold:"O2080PreFondoImporteOrigen",gxvar:"A2080PreFondoImporteOrigen",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2080PreFondoImporteOrigen=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2080PreFondoImporteOrigen=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PREFONDOIMPORTEORIGEN",n||gx.fn.currentGridRowImpl(17),gx.O.A2080PreFondoImporteOrigen,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2080PreFondoImporteOrigen=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PREFONDOIMPORTEORIGEN",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[23]={id:23,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:17,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREFONDOIMPORTE",gxz:"Z673PreFondoImporte",gxold:"O673PreFondoImporte",gxvar:"A673PreFondoImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A673PreFondoImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z673PreFondoImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PREFONDOIMPORTE",n||gx.fn.currentGridRowImpl(17),gx.O.A673PreFondoImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A673PreFondoImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PREFONDOIMPORTE",n||gx.fn.currentGridRowImpl(17),".",",")},nac:gx.falseFn};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"HTML_GRIDTOTALIZER",grid:0};t[27]={id:27,fld:"GRIDTABLETOTALIZER",grid:0};t[35]={id:35,lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOTVALUEPREFONDOIMPORTE",gxz:"ZV38TotValuePreFondoImporte",gxold:"OV38TotValuePreFondoImporte",gxvar:"AV38TotValuePreFondoImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV38TotValuePreFondoImporte=n)},v2z:function(n){n!==undefined&&(gx.O.ZV38TotValuePreFondoImporte=n)},v2c:function(){gx.fn.setControlValue("vTOTVALUEPREFONDOIMPORTE",gx.O.AV38TotValuePreFondoImporte,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV38TotValuePreFondoImporte=this.val())},val:function(){return gx.fn.getControlValue("vTOTVALUEPREFONDOIMPORTE")},nac:gx.falseFn};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[39]={id:39,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREID",gxz:"Z89PreId",gxold:"O89PreId",gxvar:"A89PreId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A89PreId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z89PreId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREID",gx.O.A89PreId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A89PreId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREID",".")},nac:gx.falseFn};this.Z38FondoId=0;this.O38FondoId=0;this.Z345FondoNombre="";this.O345FondoNombre="";this.Z635FondoTipo="";this.O635FondoTipo="";this.Z346FondoEstado="";this.O346FondoEstado="";this.Z2080PreFondoImporteOrigen=0;this.O2080PreFondoImporteOrigen=0;this.Z673PreFondoImporte=0;this.O673PreFondoImporte=0;this.AV38TotValuePreFondoImporte="";this.ZV38TotValuePreFondoImporte="";this.OV38TotValuePreFondoImporte="";this.A89PreId=0;this.Z89PreId=0;this.O89PreId=0;this.AV38TotValuePreFondoImporte="";this.A89PreId=0;this.AV7PreId=0;this.A38FondoId=0;this.A345FondoNombre="";this.A635FondoTipo="";this.A346FondoEstado="";this.A2080PreFondoImporteOrigen=0;this.A673PreFondoImporte=0;this.AV44Pgmname="";this.AV37TotPreFondoImporte=0;this.Events={e14jx2_client:["ENTER",!0],e15jx2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV44Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"AV37TotPreFondoImporte",fld:"vTOTPREFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"A673PreFondoImporte",fld:"PREFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"}],[{av:"AV37TotPreFondoImporte",fld:"vTOTPREFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV38TotValuePreFondoImporte",fld:"vTOTVALUEPREFONDOIMPORTE",pic:""}]];this.EvtParms.START=[[{av:"AV44Pgmname",fld:"vPGMNAME",pic:""},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("PREID","Visible")',ctrl:"PREID",prop:"Visible"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV44Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"AV37TotPreFondoImporte",fld:"vTOTPREFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"A673PreFondoImporte",fld:"PREFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV37TotPreFondoImporte",fld:"vTOTPREFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV38TotValuePreFondoImporte",fld:"vTOTVALUEPREFONDOIMPORTE",pic:""}]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV44Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"AV37TotPreFondoImporte",fld:"vTOTPREFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"A673PreFondoImporte",fld:"PREFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV37TotPreFondoImporte",fld:"vTOTPREFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV38TotValuePreFondoImporte",fld:"vTOTVALUEPREFONDOIMPORTE",pic:""}]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV44Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"AV37TotPreFondoImporte",fld:"vTOTPREFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"A673PreFondoImporte",fld:"PREFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV37TotPreFondoImporte",fld:"vTOTPREFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV38TotValuePreFondoImporte",fld:"vTOTVALUEPREFONDOIMPORTE",pic:""}]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{av:"AV44Pgmname",fld:"vPGMNAME",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"AV37TotPreFondoImporte",fld:"vTOTPREFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"A673PreFondoImporte",fld:"PREFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV37TotPreFondoImporte",fld:"vTOTPREFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV38TotValuePreFondoImporte",fld:"vTOTVALUEPREFONDOIMPORTE",pic:""}]];this.EvtParms.VALID_FONDOID=[[{av:"A345FondoNombre",fld:"FONDONOMBRE",pic:"@!"},{ctrl:"FONDOTIPO"},{av:"A635FondoTipo",fld:"FONDOTIPO",pic:""},{ctrl:"FONDOESTADO"},{av:"A346FondoEstado",fld:"FONDOESTADO",pic:"@!"},{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9"}],[{av:"A345FondoNombre",fld:"FONDONOMBRE",pic:"@!"},{ctrl:"FONDOTIPO"},{av:"A635FondoTipo",fld:"FONDOTIPO",pic:""},{ctrl:"FONDOESTADO"},{av:"A346FondoEstado",fld:"FONDOESTADO",pic:"@!"}]];this.setVCMap("AV44Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV37TotPreFondoImporte","vTOTPREFONDOIMPORTE",0,"decimal",18,2);this.setVCMap("AV7PreId","vPREID",0,"int",9,0);this.setVCMap("AV7PreId","vPREID",0,"int",9,0);this.setVCMap("AV44Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV37TotPreFondoImporte","vTOTPREFONDOIMPORTE",0,"decimal",18,2);this.setVCMap("AV7PreId","vPREID",0,"int",9,0);this.setVCMap("AV44Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV37TotPreFondoImporte","vTOTPREFONDOIMPORTE",0,"decimal",18,2);r.addRefreshingVar({rfrVar:"AV7PreId"});r.addRefreshingVar({rfrVar:"AV44Pgmname"});r.addRefreshingVar({rfrVar:"AV37TotPreFondoImporte"});r.addRefreshingVar(this.GXValidFnc[39]);r.addRefreshingParm({rfrVar:"AV7PreId"});r.addRefreshingParm({rfrVar:"AV44Pgmname"});r.addRefreshingParm({rfrVar:"AV37TotPreFondoImporte"});r.addRefreshingParm(this.GXValidFnc[39]);this.Initialize()})