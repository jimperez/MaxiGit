/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:36:39.59
*/
gx.evt.autoSkip=!1;gx.define("personarolcuentawc",!0,function(n){var i,u,f,r,t,e;this.ServerClass="personarolcuentawc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A1214RolNombre=gx.fn.getControlValue("ROLNOMBRE");this.A913PersonaDenominacion=gx.fn.getControlValue("PERSONADENOMINACION");this.AV64Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV61IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV7PersonaId=gx.fn.getIntegerValue("vPERSONAID",".");this.AV8EntidadId=gx.fn.getIntegerValue("vENTIDADID",".");this.AV9RolId=gx.fn.getIntegerValue("vROLID",".");this.AV7PersonaId=gx.fn.getIntegerValue("vPERSONAID",".");this.AV8EntidadId=gx.fn.getIntegerValue("vENTIDADID",".");this.AV9RolId=gx.fn.getIntegerValue("vROLID",".");this.AV64Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV61IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY")};this.Valid_Cuentaid=function(){var n=gx.fn.currentGridRowImpl(23);return this.validCliEvt("Valid_Cuentaid",23,function(){try{if(gx.fn.currentGridRowImpl(23)===0)return!0;var n=gx.util.balloon.getNew("CUENTAID",gx.fn.currentGridRowImpl(23));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Personaid=function(){var n=gx.fn.currentGridRowImpl(23);return this.validCliEvt("Valid_Personaid",23,function(){try{if(gx.fn.currentGridRowImpl(23)===0)return!0;var n=gx.util.balloon.getNew("PERSONAID",gx.fn.currentGridRowImpl(23));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Rolid=function(){var n=gx.fn.currentGridRowImpl(23);return this.validCliEvt("Valid_Rolid",23,function(){try{if(gx.fn.currentGridRowImpl(23)===0)return!0;var n=gx.util.balloon.getNew("ROLID",gx.fn.currentGridRowImpl(23));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Cuentatotalcredito=function(){var n=gx.fn.currentGridRowImpl(23);return this.validCliEvt("Valid_Cuentatotalcredito",23,function(){try{if(gx.fn.currentGridRowImpl(23)===0)return!0;var n=gx.util.balloon.getNew("CUENTATOTALCREDITO",gx.fn.currentGridRowImpl(23));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Cuentatotaldebito=function(){var n=gx.fn.currentGridRowImpl(23);return this.validCliEvt("Valid_Cuentatotaldebito",23,function(){try{if(gx.fn.currentGridRowImpl(23)===0)return!0;var n=gx.util.balloon.getNew("CUENTATOTALDEBITO",gx.fn.currentGridRowImpl(23));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.s132_client=function(){this.s162_client();this.AV22OrderedBy==2&&(this.DDO_CUENTAESTADOContainer.SortedStatus=this.AV23OrderedDsc?"DSC":"ASC")};this.s162_client=function(){this.DDO_CUENTAESTADOContainer.SortedStatus=""};this.e11fd2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12fd2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e13fd2_client=function(){return this.executeServerEvent("DDO_CUENTAESTADO.ONOPTIONCLICKED",!1,null,!0,!0)};this.e17fd2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e18fd2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];i=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,38,39,40,42,44,45];this.GXLastCtrlId=45;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"personarolcuentawc",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);u=this.GridContainer;u.addSingleLineEdit("Display",24,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");u.addSingleLineEdit(88,25,"CUENTAID","Cuenta","","CuentaId","int",0,"px",8,8,"right",null,[],88,"CuentaId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");u.addSingleLineEdit(3001,26,"CUENTANOMBRE","Cuenta","","CuentaNombre","svchar",0,"px",64,64,"left",null,[],3001,"CuentaNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");u.addSingleLineEdit(63,27,"PERSONAID","Cuil/Cuit","","PersonaId","int",0,"px",15,15,"right",null,[],63,"PersonaId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");u.addSingleLineEdit(44,28,"ENTIDADID","Ide.","","EntidadId","int",0,"px",2,2,"right",null,[],44,"EntidadId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");u.addSingleLineEdit(177,29,"ROLID","Ide.","","RolId","int",0,"px",4,4,"right",null,[],177,"RolId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");u.addSingleLineEdit(196,30,"CUENTADESCRIPTOR","Descriptor","","CuentaDescriptor","svchar",0,"px",64,64,"left",null,[],196,"CuentaDescriptor",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");u.addSingleLineEdit(2225,31,"CUENTATOTALCREDITO","Creditos","","CuentaTotalCredito","decimal",0,"px",13,13,"right",null,[],2225,"CuentaTotalCredito",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");u.addSingleLineEdit(2226,32,"CUENTATOTALDEBITO","Debitos","","CuentaTotalDebito","decimal",0,"px",13,13,"right",null,[],2226,"CuentaTotalDebito",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");u.addSingleLineEdit(2227,33,"CUENTASALDO","Saldo","","CuentaSaldo","decimal",0,"px",13,13,"right",null,[],2227,"CuentaSaldo",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");u.addComboBox(3002,34,"CUENTAESTADO","","CuentaEstado","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(u);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,12,0,"BootstrapPanel",this.CmpContext+"DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");f=this.DVPANEL_TABLEHEADERContainer;f.setProp("Class","Class","","char");f.setProp("Enabled","Enabled",!0,"boolean");f.setProp("Width","Width","100%","str");f.setProp("Height","Height","100","str");f.setProp("AutoWidth","Autowidth",!1,"bool");f.setProp("AutoHeight","Autoheight",!0,"bool");f.setProp("Cls","Cls","PanelFilled_BaseColor","str");f.setProp("ShowHeader","Showheader",!0,"bool");f.setProp("Title","Title","Opciones","str");f.setProp("Collapsible","Collapsible",!0,"bool");f.setProp("Collapsed","Collapsed",!1,"bool");f.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");f.setProp("IconPosition","Iconposition","Right","str");f.setProp("AutoScroll","Autoscroll",!1,"bool");f.setProp("Visible","Visible",!0,"bool");f.setC2ShowFunction(function(n){n.show()});this.setUserControl(f);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,37,24,"DVelop_DVPaginationBar",this.CmpContext+"GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");r=this.GRIDPAGINATIONBARContainer;r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Class","Class","PaginationBar","str");r.setProp("ShowFirst","Showfirst",!1,"bool");r.setProp("ShowPrevious","Showprevious",!0,"bool");r.setProp("ShowNext","Shownext",!0,"bool");r.setProp("ShowLast","Showlast",!1,"bool");r.setProp("PagesToShow","Pagestoshow",5,"num");r.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");r.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");r.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");r.setProp("SelectedPage","Selectedpage","","char");r.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");r.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");r.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");r.setProp("First","First","First","str");r.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");r.setProp("Next","Next","WWP_PagingNextCaption","str");r.setProp("Last","Last","Last","str");r.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");r.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");r.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");r.addV2CFunction("AV18GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");r.addC2VFunction(function(n){n.ParentObject.AV18GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV18GridCurrentPage)});r.addV2CFunction("AV19GridPageCount","vGRIDPAGECOUNT","SetPageCount");r.addC2VFunction(function(n){n.ParentObject.AV19GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV19GridPageCount)});r.setProp("RecordCount","Recordcount","","str");r.setProp("Page","Page","","str");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});r.addEventHandler("ChangePage",this.e11fd2_client);r.addEventHandler("ChangeRowsPerPage",this.e12fd2_client);this.setUserControl(r);this.DDO_CUENTAESTADOContainer=gx.uc.getNew(this,41,24,"BootstrapDropDownOptions",this.CmpContext+"DDO_CUENTAESTADOContainer","Ddo_cuentaestado","DDO_CUENTAESTADO");t=this.DDO_CUENTAESTADOContainer;t.setProp("Class","Class","","char");t.setProp("IconType","Icontype","Image","str");t.setProp("Icon","Icon","","str");t.setProp("Caption","Caption","","str");t.setProp("Tooltip","Tooltip","WWP_TSColumnOptions","str");t.setProp("Cls","Cls","ColumnSettings","str");t.setProp("ActiveEventKey","Activeeventkey","","char");t.setProp("FilteredText_set","Filteredtext_set","","char");t.setProp("FilteredText_get","Filteredtext_get","","char");t.setProp("FilteredTextTo_set","Filteredtextto_set","","char");t.setProp("FilteredTextTo_get","Filteredtextto_get","","char");t.setProp("SelectedValue_set","Selectedvalue_set","","char");t.setProp("SelectedValue_get","Selectedvalue_get","","char");t.setProp("SelectedText_set","Selectedtext_set","","char");t.setProp("SelectedText_get","Selectedtext_get","","char");t.setProp("GAMOAuthToken","Gamoauthtoken","","char");t.setProp("TitleControlAlign","Titlecontrolalign","Automatic","str");t.setProp("DropDownOptionsType","Dropdownoptionstype","GridTitleSettings","str");t.setProp("Enabled","Enabled",!0,"bool");t.setProp("Visible","Visible",!0,"bool");t.setDynProp("TitleControlIdToReplace","Titlecontrolidtoreplace","","str");t.setProp("IncludeSortASC","Includesortasc",!0,"bool");t.setProp("IncludeSortDSC","Includesortdsc",!0,"bool");t.setDynProp("SortedStatus","Sortedstatus","","char");t.setProp("IncludeFilter","Includefilter",!1,"bool");t.setProp("FilterType","Filtertype","","char");t.setProp("FilterIsRange","Filterisrange",!1,"boolean");t.setProp("IncludeDataList","Includedatalist",!1,"bool");t.setProp("DataListType","Datalisttype","","char");t.setProp("AllowMultipleSelection","Allowmultipleselection",!1,"boolean");t.setProp("DataListFixedValues","Datalistfixedvalues","","char");t.setProp("DataListProc","Datalistproc","","char");t.setProp("DataListProcParametersPrefix","Datalistprocparametersprefix","","char");t.setProp("DataListUpdateMinimumCharacters","Datalistupdateminimumcharacters","","int");t.setProp("FixedFilters","Fixedfilters","","str");t.setProp("SelectedFixedFilter","Selectedfixedfilter","","char");t.setProp("ColumnsSelectorValues","Columnsselectorvalues","","char");t.setProp("IncludeOnlySelectedOption","Includeonlyselectedoption",!1,"boolean");t.setProp("IncludeSelectAllOption","Includeselectalloption",!1,"boolean");t.setProp("CategoryFilteredBehaviour","Categoryfilteredbehaviour","ShowFilteredChildren","str");t.setProp("EmptyItem","Emptyitem",!1,"boolean");t.setProp("SortASC","Sortasc","WWP_TSSortASC","str");t.setProp("SortDSC","Sortdsc","WWP_TSSortDSC","str");t.setProp("LoadingData","Loadingdata","","char");t.setProp("CleanFilter","Cleanfilter","WWP_TSCleanFilter","str");t.setProp("RangeFilterFrom","Rangefilterfrom","","char");t.setProp("RangeFilterTo","Rangefilterto","","char");t.setProp("NoResultsFound","Noresultsfound","","char");t.setProp("SearchButtonText","Searchbuttontext","WWP_TSSearchButtonCaption","str");t.setProp("UpdateButtonText","Updatebuttontext","Update","str");t.setProp("EmptyItemText","Emptyitemtext","","char");t.setProp("OnlySelectedValues","Onlyselectedvalues","","char");t.setProp("SelectAllText","Selectalltext","","char");t.setProp("MultipleValuesSeparator","Multiplevaluesseparator","","char");t.addV2CFunction("AV51DDO_TitleSettingsIcons","vDDO_TITLESETTINGSICONS","SetDropDownOptionsTitleSettingsIcons");t.addC2VFunction(function(n){n.ParentObject.AV51DDO_TitleSettingsIcons=n.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",n.ParentObject.AV51DDO_TitleSettingsIcons)});t.addV2CFunction("AV58CuentaEstadoTitleFilterData","vCUENTAESTADOTITLEFILTERDATA","SetDropDownOptionsData");t.addC2VFunction(function(n){n.ParentObject.AV58CuentaEstadoTitleFilterData=n.GetDropDownOptionsData();gx.fn.setControlValue("vCUENTAESTADOTITLEFILTERDATA",n.ParentObject.AV58CuentaEstadoTitleFilterData)});t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("OnOptionClicked",this.e13fd2_client);this.setUserControl(t);this.WORKWITHPLUSUTILITIES1Container=gx.uc.getNew(this,43,42,"DVelop_WorkWithPlusUtilities",this.CmpContext+"WORKWITHPLUSUTILITIES1Container","Workwithplusutilities1","WORKWITHPLUSUTILITIES1");e=this.WORKWITHPLUSUTILITIES1Container;e.setProp("Class","Class","","char");e.setProp("Enabled","Enabled",!0,"boolean");e.setProp("EnableAutoUpdateFromDocumentTitle","Enableautoupdatefromdocumenttitle",!1,"bool");e.setProp("EnableFixObjectFitCover","Enablefixobjectfitcover",!1,"bool");e.setProp("EnableFloatingLabels","Enablefloatinglabels",!1,"bool");e.setProp("EnableConvertComboToBootstrapSelect","Enableconvertcombotobootstrapselect",!1,"bool");e.setProp("CurrentTab_ReturnUrl","Currenttab_returnurl","","char");e.setProp("Visible","Visible",!0,"bool");e.setC2ShowFunction(function(n){n.show()});this.setUserControl(e);i[2]={id:2,fld:"",grid:0};i[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};i[4]={id:4,fld:"",grid:0};i[5]={id:5,fld:"",grid:0};i[6]={id:6,fld:"TABLEGRIDHEADER",grid:0};i[7]={id:7,fld:"",grid:0};i[8]={id:8,fld:"",grid:0};i[10]={id:10,fld:"",grid:0};i[11]={id:11,fld:"",grid:0};i[14]={id:14,fld:"TABLEHEADER",grid:0};i[15]={id:15,fld:"",grid:0};i[16]={id:16,fld:"",grid:0};i[17]={id:17,fld:"TABLEFILTERS",grid:0};i[18]={id:18,fld:"",grid:0};i[19]={id:19,fld:"",grid:0};i[20]={id:20,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};i[21]={id:21,fld:"",grid:0};i[22]={id:22,fld:"",grid:0};i[24]={id:24,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV20Display",gxold:"OV20Display",gxvar:"AV20Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV20Display=n)},v2z:function(n){n!==undefined&&(gx.O.ZV20Display=n)},v2c:function(n){gx.fn.setGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(23),gx.O.AV20Display,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV20Display=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};i[25]={id:25,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:this.Valid_Cuentaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTAID",gxz:"Z88CuentaId",gxold:"O88CuentaId",gxvar:"A88CuentaId",ucs:[],op:[26,33,31,32],ip:[26,33,31,32,25,27,29],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A88CuentaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z88CuentaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CUENTAID",n||gx.fn.currentGridRowImpl(23),gx.O.A88CuentaId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A88CuentaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CUENTAID",n||gx.fn.currentGridRowImpl(23),".")},nac:gx.falseFn};i[26]={id:26,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTANOMBRE",gxz:"Z3001CuentaNombre",gxold:"O3001CuentaNombre",gxvar:"A3001CuentaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3001CuentaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3001CuentaNombre=n)},v2c:function(n){gx.fn.setGridControlValue("CUENTANOMBRE",n||gx.fn.currentGridRowImpl(23),gx.O.A3001CuentaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3001CuentaNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CUENTANOMBRE",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};i[27]={id:27,lvl:2,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:this.Valid_Personaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERSONAID",gxz:"Z63PersonaId",gxold:"O63PersonaId",gxvar:"A63PersonaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A63PersonaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z63PersonaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PERSONAID",n||gx.fn.currentGridRowImpl(23),gx.O.A63PersonaId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A63PersonaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PERSONAID",n||gx.fn.currentGridRowImpl(23),".")},nac:gx.falseFn};i[28]={id:28,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ENTIDADID",gxz:"Z44EntidadId",gxold:"O44EntidadId",gxvar:"A44EntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A44EntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z44EntidadId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ENTIDADID",n||gx.fn.currentGridRowImpl(23),gx.O.A44EntidadId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A44EntidadId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ENTIDADID",n||gx.fn.currentGridRowImpl(23),".")},nac:gx.falseFn};i[29]={id:29,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:this.Valid_Rolid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ROLID",gxz:"Z177RolId",gxold:"O177RolId",gxvar:"A177RolId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A177RolId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z177RolId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ROLID",n||gx.fn.currentGridRowImpl(23),gx.O.A177RolId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A177RolId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ROLID",n||gx.fn.currentGridRowImpl(23),".")},nac:gx.falseFn};i[30]={id:30,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTADESCRIPTOR",gxz:"Z196CuentaDescriptor",gxold:"O196CuentaDescriptor",gxvar:"A196CuentaDescriptor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A196CuentaDescriptor=n)},v2z:function(n){n!==undefined&&(gx.O.Z196CuentaDescriptor=n)},v2c:function(n){gx.fn.setGridControlValue("CUENTADESCRIPTOR",n||gx.fn.currentGridRowImpl(23),gx.O.A196CuentaDescriptor,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A196CuentaDescriptor=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CUENTADESCRIPTOR",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};i[31]={id:31,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:this.Valid_Cuentatotalcredito,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTATOTALCREDITO",gxz:"Z2225CuentaTotalCredito",gxold:"O2225CuentaTotalCredito",gxvar:"A2225CuentaTotalCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2225CuentaTotalCredito=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2225CuentaTotalCredito=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CUENTATOTALCREDITO",n||gx.fn.currentGridRowImpl(23),gx.O.A2225CuentaTotalCredito,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2225CuentaTotalCredito=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CUENTATOTALCREDITO",n||gx.fn.currentGridRowImpl(23),".",",")},nac:gx.falseFn};i[32]={id:32,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:this.Valid_Cuentatotaldebito,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTATOTALDEBITO",gxz:"Z2226CuentaTotalDebito",gxold:"O2226CuentaTotalDebito",gxvar:"A2226CuentaTotalDebito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2226CuentaTotalDebito=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2226CuentaTotalDebito=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CUENTATOTALDEBITO",n||gx.fn.currentGridRowImpl(23),gx.O.A2226CuentaTotalDebito,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2226CuentaTotalDebito=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CUENTATOTALDEBITO",n||gx.fn.currentGridRowImpl(23),".",",")},nac:gx.falseFn};i[33]={id:33,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTASALDO",gxz:"Z2227CuentaSaldo",gxold:"O2227CuentaSaldo",gxvar:"A2227CuentaSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2227CuentaSaldo=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2227CuentaSaldo=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CUENTASALDO",n||gx.fn.currentGridRowImpl(23),gx.O.A2227CuentaSaldo,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2227CuentaSaldo=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CUENTASALDO",n||gx.fn.currentGridRowImpl(23),".",",")},nac:gx.falseFn};i[34]={id:34,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CUENTAESTADO",gxz:"Z3002CuentaEstado",gxold:"O3002CuentaEstado",gxvar:"A3002CuentaEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3002CuentaEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z3002CuentaEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("CUENTAESTADO",n||gx.fn.currentGridRowImpl(23),gx.O.A3002CuentaEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3002CuentaEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CUENTAESTADO",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};i[35]={id:35,fld:"",grid:0};i[36]={id:36,fld:"",grid:0};i[38]={id:38,fld:"",grid:0};i[39]={id:39,fld:"",grid:0};i[40]={id:40,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};i[42]={id:42,lvl:0,type:"svchar",len:300,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_CUENTAESTADOTITLECONTROLIDTOREPLACE",gxz:"ZV59ddo_CuentaEstadoTitleControlIdToReplace",gxold:"OV59ddo_CuentaEstadoTitleControlIdToReplace",gxvar:"AV59ddo_CuentaEstadoTitleControlIdToReplace",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV59ddo_CuentaEstadoTitleControlIdToReplace=n)},v2z:function(n){n!==undefined&&(gx.O.ZV59ddo_CuentaEstadoTitleControlIdToReplace=n)},v2c:function(){gx.fn.setControlValue("vDDO_CUENTAESTADOTITLECONTROLIDTOREPLACE",gx.O.AV59ddo_CuentaEstadoTitleControlIdToReplace,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV59ddo_CuentaEstadoTitleControlIdToReplace=this.val())},val:function(){return gx.fn.getControlValue("vDDO_CUENTAESTADOTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};i[44]={id:44,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV22OrderedBy",gxold:"OV22OrderedBy",gxvar:"AV22OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV22OrderedBy=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV22OrderedBy=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV22OrderedBy,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV22OrderedBy=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};i[45]={id:45,lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDDSC",gxz:"ZV23OrderedDsc",gxold:"OV23OrderedDsc",gxvar:"AV23OrderedDsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV23OrderedDsc=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV23OrderedDsc=gx.lang.booleanValue(n))},v2c:function(){gx.fn.setControlValue("vORDEREDDSC",gx.O.AV23OrderedDsc,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV23OrderedDsc=gx.lang.booleanValue(this.val()))},val:function(){return gx.fn.getControlValue("vORDEREDDSC")},nac:gx.falseFn};this.ZV20Display="";this.OV20Display="";this.Z88CuentaId=0;this.O88CuentaId=0;this.Z3001CuentaNombre="";this.O3001CuentaNombre="";this.Z63PersonaId=0;this.O63PersonaId=0;this.Z44EntidadId=0;this.O44EntidadId=0;this.Z177RolId=0;this.O177RolId=0;this.Z196CuentaDescriptor="";this.O196CuentaDescriptor="";this.Z2225CuentaTotalCredito=0;this.O2225CuentaTotalCredito=0;this.Z2226CuentaTotalDebito=0;this.O2226CuentaTotalDebito=0;this.Z2227CuentaSaldo=0;this.O2227CuentaSaldo=0;this.Z3002CuentaEstado="";this.O3002CuentaEstado="";this.AV59ddo_CuentaEstadoTitleControlIdToReplace="";this.ZV59ddo_CuentaEstadoTitleControlIdToReplace="";this.OV59ddo_CuentaEstadoTitleControlIdToReplace="";this.AV22OrderedBy=0;this.ZV22OrderedBy=0;this.OV22OrderedBy=0;this.AV23OrderedDsc=!1;this.ZV23OrderedDsc=!1;this.OV23OrderedDsc=!1;this.AV18GridCurrentPage=0;this.AV51DDO_TitleSettingsIcons={Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""};this.AV59ddo_CuentaEstadoTitleControlIdToReplace="";this.AV22OrderedBy=0;this.AV23OrderedDsc=!1;this.AV7PersonaId=0;this.AV8EntidadId=0;this.AV9RolId=0;this.A913PersonaDenominacion="";this.A1214RolNombre="";this.AV20Display="";this.A88CuentaId=0;this.A3001CuentaNombre="";this.A63PersonaId=0;this.A44EntidadId=0;this.A177RolId=0;this.A196CuentaDescriptor="";this.A2225CuentaTotalCredito=0;this.A2226CuentaTotalDebito=0;this.A2227CuentaSaldo=0;this.A3002CuentaEstado="";this.AV64Pgmname="";this.AV61IsAuthorized_Display=!1;this.Events={e11fd2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12fd2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e13fd2_client:["DDO_CUENTAESTADO.ONOPTIONCLICKED",!0],e17fd2_client:["ENTER",!0],e18fd2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7PersonaId",fld:"vPERSONAID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV8EntidadId",fld:"vENTIDADID",pic:"Z9"},{av:"AV9RolId",fld:"vROLID",pic:"ZZZ9"},{av:"sPrefix"},{av:"AV59ddo_CuentaEstadoTitleControlIdToReplace",fld:"vDDO_CUENTAESTADOTITLECONTROLIDTOREPLACE",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"AV22OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV23OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"AV64Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV61IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0}],[{av:"AV58CuentaEstadoTitleFilterData",fld:"vCUENTAESTADOTITLEFILTERDATA",pic:""},{ctrl:"CUENTAESTADO"},{av:"AV18GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV19GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV61IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"}]];this.EvtParms.START=[[{av:"AV22OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV64Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV7PersonaId",fld:"vPERSONAID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV8EntidadId",fld:"vENTIDADID",pic:"Z9"},{av:"AV9RolId",fld:"vROLID",pic:"ZZZ9"},{av:"AV23OrderedDsc",fld:"vORDEREDDSC",pic:""}],[{ctrl:"GRID",prop:"Rows"},{av:"this.DDO_CUENTAESTADOContainer.TitleControlIdToReplace",ctrl:"DDO_CUENTAESTADO",prop:"TitleControlIdToReplace"},{av:"AV59ddo_CuentaEstadoTitleControlIdToReplace",fld:"vDDO_CUENTAESTADOTITLECONTROLIDTOREPLACE",pic:""},{av:'gx.fn.getCtrlProperty("vDDO_CUENTAESTADOTITLECONTROLIDTOREPLACE","Visible")',ctrl:"vDDO_CUENTAESTADOTITLECONTROLIDTOREPLACE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:"vORDEREDBY",prop:"Visible"},{av:"AV22OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:'gx.fn.getCtrlProperty("vORDEREDDSC","Visible")',ctrl:"vORDEREDDSC",prop:"Visible"},{av:"AV51DDO_TitleSettingsIcons",fld:"vDDO_TITLESETTINGSICONS",pic:""},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:"AV23OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"this.DDO_CUENTAESTADOContainer.SortedStatus",ctrl:"DDO_CUENTAESTADO",prop:"SortedStatus"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV22OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV23OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"AV7PersonaId",fld:"vPERSONAID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV8EntidadId",fld:"vENTIDADID",pic:"Z9"},{av:"AV9RolId",fld:"vROLID",pic:"ZZZ9"},{av:"AV59ddo_CuentaEstadoTitleControlIdToReplace",fld:"vDDO_CUENTAESTADOTITLECONTROLIDTOREPLACE",pic:""},{av:"AV64Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV61IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV22OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV23OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"AV7PersonaId",fld:"vPERSONAID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV8EntidadId",fld:"vENTIDADID",pic:"Z9"},{av:"AV9RolId",fld:"vROLID",pic:"ZZZ9"},{av:"AV59ddo_CuentaEstadoTitleControlIdToReplace",fld:"vDDO_CUENTAESTADOTITLECONTROLIDTOREPLACE",pic:""},{av:"AV64Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV61IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["DDO_CUENTAESTADO.ONOPTIONCLICKED"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV22OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV23OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"AV7PersonaId",fld:"vPERSONAID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV8EntidadId",fld:"vENTIDADID",pic:"Z9"},{av:"AV9RolId",fld:"vROLID",pic:"ZZZ9"},{av:"AV59ddo_CuentaEstadoTitleControlIdToReplace",fld:"vDDO_CUENTAESTADOTITLECONTROLIDTOREPLACE",pic:""},{av:"AV64Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV61IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"sPrefix"},{av:"this.DDO_CUENTAESTADOContainer.ActiveEventKey",ctrl:"DDO_CUENTAESTADO",prop:"ActiveEventKey"}],[{av:"AV22OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV23OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"this.DDO_CUENTAESTADOContainer.SortedStatus",ctrl:"DDO_CUENTAESTADO",prop:"SortedStatus"},{av:"AV58CuentaEstadoTitleFilterData",fld:"vCUENTAESTADOTITLEFILTERDATA",pic:""},{ctrl:"CUENTAESTADO"},{av:"AV18GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV19GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV61IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV61IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"A88CuentaId",fld:"CUENTAID",pic:"ZZZZZZZ9"}],[{av:"AV20Display",fld:"vDISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:"vDISPLAY",prop:"Link"}]];this.EvtParms.VALID_CUENTAID=[[{av:"A3001CuentaNombre",fld:"CUENTANOMBRE",pic:"@!"},{av:"A2227CuentaSaldo",fld:"CUENTASALDO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2225CuentaTotalCredito",fld:"CUENTATOTALCREDITO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2226CuentaTotalDebito",fld:"CUENTATOTALDEBITO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A88CuentaId",fld:"CUENTAID",pic:"ZZZZZZZ9"},{av:"A63PersonaId",fld:"PERSONAID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A177RolId",fld:"ROLID",pic:"ZZZ9"}],[{av:"A3001CuentaNombre",fld:"CUENTANOMBRE",pic:"@!"},{av:"A2227CuentaSaldo",fld:"CUENTASALDO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2225CuentaTotalCredito",fld:"CUENTATOTALCREDITO",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2226CuentaTotalDebito",fld:"CUENTATOTALDEBITO",pic:"ZZ,ZZZ,ZZ9.99"}]];this.EvtParms.VALID_PERSONAID=[[],[]];this.EvtParms.VALID_ROLID=[[],[]];this.EvtParms.VALID_CUENTATOTALCREDITO=[[],[]];this.EvtParms.VALID_CUENTATOTALDEBITO=[[],[]];this.setVCMap("A1214RolNombre","ROLNOMBRE",0,"svchar",64,0);this.setVCMap("A913PersonaDenominacion","PERSONADENOMINACION",0,"svchar",64,0);this.setVCMap("AV64Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV61IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV7PersonaId","vPERSONAID",0,"int",15,0);this.setVCMap("AV8EntidadId","vENTIDADID",0,"int",2,0);this.setVCMap("AV9RolId","vROLID",0,"int",4,0);this.setVCMap("AV7PersonaId","vPERSONAID",0,"int",15,0);this.setVCMap("AV8EntidadId","vENTIDADID",0,"int",2,0);this.setVCMap("AV9RolId","vROLID",0,"int",4,0);this.setVCMap("AV64Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV61IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV7PersonaId","vPERSONAID",0,"int",15,0);this.setVCMap("AV8EntidadId","vENTIDADID",0,"int",2,0);this.setVCMap("AV9RolId","vROLID",0,"int",4,0);this.setVCMap("AV64Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV61IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);u.addRefreshingVar(this.GXValidFnc[44]);u.addRefreshingVar(this.GXValidFnc[45]);u.addRefreshingVar({rfrVar:"AV7PersonaId"});u.addRefreshingVar({rfrVar:"AV8EntidadId"});u.addRefreshingVar({rfrVar:"AV9RolId"});u.addRefreshingVar(this.GXValidFnc[42]);u.addRefreshingVar({rfrVar:"AV64Pgmname"});u.addRefreshingVar({rfrVar:"AV61IsAuthorized_Display"});u.addRefreshingParm(this.GXValidFnc[44]);u.addRefreshingParm(this.GXValidFnc[45]);u.addRefreshingParm({rfrVar:"AV7PersonaId"});u.addRefreshingParm({rfrVar:"AV8EntidadId"});u.addRefreshingParm({rfrVar:"AV9RolId"});u.addRefreshingParm(this.GXValidFnc[42]);u.addRefreshingParm({rfrVar:"AV64Pgmname"});u.addRefreshingParm({rfrVar:"AV61IsAuthorized_Display"});this.Initialize()})