/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:35:34.49
*/
gx.evt.autoSkip=!1;gx.define("presupuestovtafondoriesgowc",!0,function(n){var i,r,t,u;this.ServerClass="presupuestovtafondoriesgowc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV18TotPreFondoImporte=gx.fn.getDecimalValue("vTOTPREFONDOIMPORTE",".",",");this.AV7PreId=gx.fn.getIntegerValue("vPREID",".");this.AV7PreId=gx.fn.getIntegerValue("vPREID",".");this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV18TotPreFondoImporte=gx.fn.getDecimalValue("vTOTPREFONDOIMPORTE",".",",")};this.Valid_Fondoid=function(){var n=gx.fn.currentGridRowImpl(15);return this.validCliEvt("Valid_Fondoid",15,function(){try{if(gx.fn.currentGridRowImpl(15)===0)return!0;var n=gx.util.balloon.getNew("FONDOID",gx.fn.currentGridRowImpl(15));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.s142_client=function(){this.AV18TotPreFondoImporte=0};this.e11kh2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12kh2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16kh2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17kh2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];i=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,16,17,18,19,20,21,22,23,24,25,33,34,35,37,38,39,40];this.GXLastCtrlId=40;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",15,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"presupuestovtafondoriesgowc",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit(38,16,"FONDOID","Ide.","","FondoId","int",0,"px",4,4,"right",null,[],38,"FondoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(345,17,"FONDONOMBRE","Fondo","","FondoNombre","svchar",0,"px",64,64,"left",null,[],345,"FondoNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addComboBox(635,18,"FONDOTIPO","Tipo de Valor","FondoTipo","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");r.addComboBox(346,19,"FONDOESTADO","Estado","FondoEstado","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");r.addSingleLineEdit(2080,20,"PREFONDOIMPORTEORIGEN","Imp. Ori.","","PreFondoImporteOrigen","decimal",0,"px",13,13,"right",null,[],2080,"PreFondoImporteOrigen",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(673,21,"PREFONDOIMPORTE","Importe","","PreFondoImporte","decimal",0,"px",13,13,"right",null,[],673,"PreFondoImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,36,33,"DVelop_DVPaginationBar",this.CmpContext+"GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV16GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV16GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV16GridCurrentPage)});t.addV2CFunction("AV17GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV17GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV17GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11kh2_client);t.addEventHandler("ChangeRowsPerPage",this.e12kh2_client);this.setUserControl(t);this.WORKWITHPLUSUTILITIES1Container=gx.uc.getNew(this,41,33,"DVelop_WorkWithPlusUtilities",this.CmpContext+"WORKWITHPLUSUTILITIES1Container","Workwithplusutilities1","WORKWITHPLUSUTILITIES1");u=this.WORKWITHPLUSUTILITIES1Container;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("EnableAutoUpdateFromDocumentTitle","Enableautoupdatefromdocumenttitle",!1,"bool");u.setProp("EnableFixObjectFitCover","Enablefixobjectfitcover",!1,"bool");u.setProp("EnableFloatingLabels","Enablefloatinglabels",!1,"bool");u.setProp("EnableConvertComboToBootstrapSelect","Enableconvertcombotobootstrapselect",!1,"bool");u.setProp("CurrentTab_ReturnUrl","Currenttab_returnurl","","char");u.setProp("Visible","Visible",!0,"bool");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);i[2]={id:2,fld:"",grid:0};i[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};i[4]={id:4,fld:"",grid:0};i[5]={id:5,fld:"",grid:0};i[6]={id:6,fld:"TABLEGRIDHEADER",grid:0};i[7]={id:7,fld:"",grid:0};i[8]={id:8,fld:"",grid:0};i[10]={id:10,fld:"",grid:0};i[11]={id:11,fld:"",grid:0};i[12]={id:12,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};i[13]={id:13,fld:"",grid:0};i[14]={id:14,fld:"",grid:0};i[16]={id:16,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:this.Valid_Fondoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOID",gxz:"Z38FondoId",gxold:"O38FondoId",gxvar:"A38FondoId",ucs:[],op:[17,18,19],ip:[17,18,19,16],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A38FondoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z38FondoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FONDOID",n||gx.fn.currentGridRowImpl(15),gx.O.A38FondoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A38FondoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FONDOID",n||gx.fn.currentGridRowImpl(15),".")},nac:gx.falseFn};i[17]={id:17,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDONOMBRE",gxz:"Z345FondoNombre",gxold:"O345FondoNombre",gxvar:"A345FondoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A345FondoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z345FondoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("FONDONOMBRE",n||gx.fn.currentGridRowImpl(15),gx.O.A345FondoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A345FondoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FONDONOMBRE",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};i[18]={id:18,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOTIPO",gxz:"Z635FondoTipo",gxold:"O635FondoTipo",gxvar:"A635FondoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A635FondoTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z635FondoTipo=n)},v2c:function(n){gx.fn.setGridComboBoxValue("FONDOTIPO",n||gx.fn.currentGridRowImpl(15),gx.O.A635FondoTipo)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A635FondoTipo=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FONDOTIPO",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};i[19]={id:19,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOESTADO",gxz:"Z346FondoEstado",gxold:"O346FondoEstado",gxvar:"A346FondoEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A346FondoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z346FondoEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("FONDOESTADO",n||gx.fn.currentGridRowImpl(15),gx.O.A346FondoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A346FondoEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FONDOESTADO",n||gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};i[20]={id:20,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREFONDOIMPORTEORIGEN",gxz:"Z2080PreFondoImporteOrigen",gxold:"O2080PreFondoImporteOrigen",gxvar:"A2080PreFondoImporteOrigen",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2080PreFondoImporteOrigen=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2080PreFondoImporteOrigen=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PREFONDOIMPORTEORIGEN",n||gx.fn.currentGridRowImpl(15),gx.O.A2080PreFondoImporteOrigen,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2080PreFondoImporteOrigen=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PREFONDOIMPORTEORIGEN",n||gx.fn.currentGridRowImpl(15),".",",")},nac:gx.falseFn};i[21]={id:21,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREFONDOIMPORTE",gxz:"Z673PreFondoImporte",gxold:"O673PreFondoImporte",gxvar:"A673PreFondoImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A673PreFondoImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z673PreFondoImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("PREFONDOIMPORTE",n||gx.fn.currentGridRowImpl(15),gx.O.A673PreFondoImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A673PreFondoImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("PREFONDOIMPORTE",n||gx.fn.currentGridRowImpl(15),".",",")},nac:gx.falseFn};i[22]={id:22,fld:"",grid:0};i[23]={id:23,fld:"",grid:0};i[24]={id:24,fld:"HTML_GRIDTOTALIZER",grid:0};i[25]={id:25,fld:"GRIDTABLETOTALIZER",grid:0};i[33]={id:33,lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOTVALUEPREFONDOIMPORTE",gxz:"ZV19TotValuePreFondoImporte",gxold:"OV19TotValuePreFondoImporte",gxvar:"AV19TotValuePreFondoImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV19TotValuePreFondoImporte=n)},v2z:function(n){n!==undefined&&(gx.O.ZV19TotValuePreFondoImporte=n)},v2c:function(){gx.fn.setControlValue("vTOTVALUEPREFONDOIMPORTE",gx.O.AV19TotValuePreFondoImporte,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV19TotValuePreFondoImporte=this.val())},val:function(){return gx.fn.getControlValue("vTOTVALUEPREFONDOIMPORTE")},nac:gx.falseFn};i[34]={id:34,fld:"",grid:0};i[35]={id:35,fld:"",grid:0};i[37]={id:37,fld:"",grid:0};i[38]={id:38,fld:"",grid:0};i[39]={id:39,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};i[40]={id:40,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PREID",gxz:"Z89PreId",gxold:"O89PreId",gxvar:"A89PreId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A89PreId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z89PreId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PREID",gx.O.A89PreId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A89PreId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PREID",".")},nac:gx.falseFn};this.Z38FondoId=0;this.O38FondoId=0;this.Z345FondoNombre="";this.O345FondoNombre="";this.Z635FondoTipo="";this.O635FondoTipo="";this.Z346FondoEstado="";this.O346FondoEstado="";this.Z2080PreFondoImporteOrigen=0;this.O2080PreFondoImporteOrigen=0;this.Z673PreFondoImporte=0;this.O673PreFondoImporte=0;this.AV19TotValuePreFondoImporte="";this.ZV19TotValuePreFondoImporte="";this.OV19TotValuePreFondoImporte="";this.A89PreId=0;this.Z89PreId=0;this.O89PreId=0;this.AV19TotValuePreFondoImporte="";this.AV16GridCurrentPage=0;this.A89PreId=0;this.AV7PreId=0;this.A38FondoId=0;this.A345FondoNombre="";this.A635FondoTipo="";this.A346FondoEstado="";this.A2080PreFondoImporteOrigen=0;this.A673PreFondoImporte=0;this.AV25Pgmname="";this.AV18TotPreFondoImporte=0;this.Events={e11kh2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12kh2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16kh2_client:["ENTER",!0],e17kh2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{av:"AV18TotPreFondoImporte",fld:"vTOTPREFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"A673PreFondoImporte",fld:"PREFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}],[{av:"AV16GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV17GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV18TotPreFondoImporte",fld:"vTOTPREFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"AV19TotValuePreFondoImporte",fld:"vTOTVALUEPREFONDOIMPORTE",pic:""}]];this.EvtParms.START=[[{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("PREID","Visible")',ctrl:"PREID",prop:"Visible"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{av:"AV18TotPreFondoImporte",fld:"vTOTPREFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV7PreId",fld:"vPREID",pic:"ZZZZZZZZ9"},{av:"AV25Pgmname",fld:"vPGMNAME",pic:""},{av:"AV18TotPreFondoImporte",fld:"vTOTPREFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A89PreId",fld:"PREID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.EvtParms.VALID_FONDOID=[[{av:"A345FondoNombre",fld:"FONDONOMBRE",pic:"@!"},{ctrl:"FONDOTIPO"},{av:"A635FondoTipo",fld:"FONDOTIPO",pic:""},{ctrl:"FONDOESTADO"},{av:"A346FondoEstado",fld:"FONDOESTADO",pic:"@!"},{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9"}],[{av:"A345FondoNombre",fld:"FONDONOMBRE",pic:"@!"},{ctrl:"FONDOTIPO"},{av:"A635FondoTipo",fld:"FONDOTIPO",pic:""},{ctrl:"FONDOESTADO"},{av:"A346FondoEstado",fld:"FONDOESTADO",pic:"@!"}]];this.setVCMap("AV25Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV18TotPreFondoImporte","vTOTPREFONDOIMPORTE",0,"decimal",18,2);this.setVCMap("AV7PreId","vPREID",0,"int",9,0);this.setVCMap("AV7PreId","vPREID",0,"int",9,0);this.setVCMap("AV25Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV18TotPreFondoImporte","vTOTPREFONDOIMPORTE",0,"decimal",18,2);this.setVCMap("AV7PreId","vPREID",0,"int",9,0);this.setVCMap("AV25Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV18TotPreFondoImporte","vTOTPREFONDOIMPORTE",0,"decimal",18,2);r.addRefreshingVar({rfrVar:"AV7PreId"});r.addRefreshingVar({rfrVar:"AV25Pgmname"});r.addRefreshingVar({rfrVar:"AV18TotPreFondoImporte"});r.addRefreshingVar(this.GXValidFnc[40]);r.addRefreshingParm({rfrVar:"AV7PreId"});r.addRefreshingParm({rfrVar:"AV25Pgmname"});r.addRefreshingParm({rfrVar:"AV18TotPreFondoImporte"});r.addRefreshingParm(this.GXValidFnc[40]);this.Initialize()})