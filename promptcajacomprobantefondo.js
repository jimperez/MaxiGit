/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:53:24.75
*/
gx.evt.autoSkip=!1;gx.define("promptcajacomprobantefondo",!1,function(){var r,f,u,i,n,t,e;this.ServerClass="promptcajacomprobantefondo";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7InCajaComprobanteId=gx.fn.getIntegerValue("vINCAJACOMPROBANTEID",".");this.AV8InOutFondoId=gx.fn.getIntegerValue("vINOUTFONDOID",".");this.AV9InOutCajaComprobanteFondoImporte=gx.fn.getDecimalValue("vINOUTCAJACOMPROBANTEFONDOIMPORTE",".",",");this.AV7InCajaComprobanteId=gx.fn.getIntegerValue("vINCAJACOMPROBANTEID",".")};this.Valid_Fondoid=function(){var n=gx.fn.currentGridRowImpl(19);return this.validCliEvt("Valid_Fondoid",19,function(){try{if(gx.fn.currentGridRowImpl(19)===0)return!0;var n=gx.util.balloon.getNew("FONDOID",gx.fn.currentGridRowImpl(19));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.s112_client=function(){this.s122_client();this.AV10OrderedBy==2?this.DDO_FONDONOMBREContainer.SortedStatus=this.AV11OrderedDsc?"DSC":"ASC":this.AV10OrderedBy==3&&(this.DDO_CAJACOMPROBANTEFONDOIMPORTEContainer.SortedStatus=this.AV11OrderedDsc?"DSC":"ASC")};this.s122_client=function(){this.DDO_FONDONOMBREContainer.SortedStatus="";this.DDO_CAJACOMPROBANTEFONDOIMPORTEContainer.SortedStatus=""};this.e11eu2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12eu2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e13eu2_client=function(){return this.executeServerEvent("DDO_FONDONOMBRE.ONOPTIONCLICKED",!1,null,!0,!0)};this.e14eu2_client=function(){return this.executeServerEvent("DDO_CAJACOMPROBANTEFONDOIMPORTE.ONOPTIONCLICKED",!1,null,!0,!0)};this.e18eu2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e19eu2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];r=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,20,21,22,23,24,25,27,28,29,31,33,35,36];this.GXLastCtrlId=36;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",19,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptcajacomprobantefondo",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);f=this.GridContainer;f.addBitmap("&Select","vSELECT",20,0,"px",17,"px","e18eu2_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");f.addSingleLineEdit(38,21,"FONDOID","Ide.","","FondoId","int",0,"px",4,4,"right",null,[],38,"FondoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");f.addSingleLineEdit(345,22,"FONDONOMBRE","","","FondoNombre","svchar",0,"px",64,64,"left",null,[],345,"FondoNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");f.addSingleLineEdit(465,23,"CAJACOMPROBANTEFONDOIMPORTE","","","CajaComprobanteFondoImporte","decimal",0,"px",13,13,"right",null,[],465,"CajaComprobanteFondoImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(f);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");u=this.DVPANEL_TABLEHEADERContainer;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("Width","Width","100%","str");u.setProp("Height","Height","100","str");u.setProp("AutoWidth","Autowidth",!1,"bool");u.setProp("AutoHeight","Autoheight",!0,"bool");u.setProp("Cls","Cls","PanelFilled_BaseColor","str");u.setProp("ShowHeader","Showheader",!0,"bool");u.setProp("Title","Title","Opciones","str");u.setProp("Collapsible","Collapsible",!0,"bool");u.setProp("Collapsed","Collapsed",!1,"bool");u.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");u.setProp("IconPosition","Iconposition","Right","str");u.setProp("AutoScroll","Autoscroll",!1,"bool");u.setProp("Visible","Visible",!0,"bool");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,26,20,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");i=this.GRIDPAGINATIONBARContainer;i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Class","Class","PaginationBar","str");i.setProp("ShowFirst","Showfirst",!1,"bool");i.setProp("ShowPrevious","Showprevious",!0,"bool");i.setProp("ShowNext","Shownext",!0,"bool");i.setProp("ShowLast","Showlast",!1,"bool");i.setProp("PagesToShow","Pagestoshow",5,"num");i.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");i.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");i.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");i.setProp("SelectedPage","Selectedpage","","char");i.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");i.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");i.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");i.setProp("First","First","First","str");i.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");i.setProp("Next","Next","WWP_PagingNextCaption","str");i.setProp("Last","Last","Last","str");i.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");i.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");i.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");i.addV2CFunction("AV27GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");i.addC2VFunction(function(n){n.ParentObject.AV27GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV27GridCurrentPage)});i.addV2CFunction("AV28GridPageCount","vGRIDPAGECOUNT","SetPageCount");i.addC2VFunction(function(n){n.ParentObject.AV28GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV28GridPageCount)});i.setProp("RecordCount","Recordcount","","str");i.setProp("Page","Page","","str");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});i.addEventHandler("ChangePage",this.e11eu2_client);i.addEventHandler("ChangeRowsPerPage",this.e12eu2_client);this.setUserControl(i);this.DDO_FONDONOMBREContainer=gx.uc.getNew(this,30,20,"BootstrapDropDownOptions","DDO_FONDONOMBREContainer","Ddo_fondonombre","DDO_FONDONOMBRE");n=this.DDO_FONDONOMBREContainer;n.setProp("Class","Class","","char");n.setProp("IconType","Icontype","Image","str");n.setProp("Icon","Icon","","str");n.setProp("Caption","Caption","","str");n.setProp("Tooltip","Tooltip","WWP_TSColumnOptions","str");n.setProp("Cls","Cls","ColumnSettings","str");n.setProp("ActiveEventKey","Activeeventkey","","char");n.setProp("FilteredText_set","Filteredtext_set","","char");n.setProp("FilteredText_get","Filteredtext_get","","char");n.setProp("FilteredTextTo_set","Filteredtextto_set","","char");n.setProp("FilteredTextTo_get","Filteredtextto_get","","char");n.setProp("SelectedValue_set","Selectedvalue_set","","char");n.setProp("SelectedValue_get","Selectedvalue_get","","char");n.setProp("SelectedText_set","Selectedtext_set","","char");n.setProp("SelectedText_get","Selectedtext_get","","char");n.setProp("GAMOAuthToken","Gamoauthtoken","","char");n.setProp("TitleControlAlign","Titlecontrolalign","Automatic","str");n.setProp("DropDownOptionsType","Dropdownoptionstype","GridTitleSettings","str");n.setProp("Enabled","Enabled",!0,"bool");n.setProp("Visible","Visible",!0,"bool");n.setDynProp("TitleControlIdToReplace","Titlecontrolidtoreplace","","str");n.setProp("IncludeSortASC","Includesortasc",!0,"bool");n.setProp("IncludeSortDSC","Includesortdsc",!0,"bool");n.setDynProp("SortedStatus","Sortedstatus","","char");n.setProp("IncludeFilter","Includefilter",!1,"bool");n.setProp("FilterType","Filtertype","","char");n.setProp("FilterIsRange","Filterisrange",!1,"boolean");n.setProp("IncludeDataList","Includedatalist",!1,"bool");n.setProp("DataListType","Datalisttype","","char");n.setProp("AllowMultipleSelection","Allowmultipleselection",!1,"boolean");n.setProp("DataListFixedValues","Datalistfixedvalues","","char");n.setProp("DataListProc","Datalistproc","","char");n.setProp("DataListProcParametersPrefix","Datalistprocparametersprefix","","char");n.setProp("DataListUpdateMinimumCharacters","Datalistupdateminimumcharacters","","int");n.setProp("FixedFilters","Fixedfilters","","str");n.setProp("SelectedFixedFilter","Selectedfixedfilter","","char");n.setProp("ColumnsSelectorValues","Columnsselectorvalues","","char");n.setProp("IncludeOnlySelectedOption","Includeonlyselectedoption",!1,"boolean");n.setProp("IncludeSelectAllOption","Includeselectalloption",!1,"boolean");n.setProp("CategoryFilteredBehaviour","Categoryfilteredbehaviour","ShowFilteredChildren","str");n.setProp("EmptyItem","Emptyitem",!1,"boolean");n.setProp("SortASC","Sortasc","WWP_TSSortASC","str");n.setProp("SortDSC","Sortdsc","WWP_TSSortDSC","str");n.setProp("LoadingData","Loadingdata","","char");n.setProp("CleanFilter","Cleanfilter","WWP_TSCleanFilter","str");n.setProp("RangeFilterFrom","Rangefilterfrom","","char");n.setProp("RangeFilterTo","Rangefilterto","","char");n.setProp("NoResultsFound","Noresultsfound","","char");n.setProp("SearchButtonText","Searchbuttontext","WWP_TSSearchButtonCaption","str");n.setProp("UpdateButtonText","Updatebuttontext","Update","str");n.setProp("EmptyItemText","Emptyitemtext","","char");n.setProp("OnlySelectedValues","Onlyselectedvalues","","char");n.setProp("SelectAllText","Selectalltext","","char");n.setProp("MultipleValuesSeparator","Multiplevaluesseparator","","char");n.addV2CFunction("AV25DDO_TitleSettingsIcons","vDDO_TITLESETTINGSICONS","SetDropDownOptionsTitleSettingsIcons");n.addC2VFunction(function(n){n.ParentObject.AV25DDO_TitleSettingsIcons=n.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",n.ParentObject.AV25DDO_TitleSettingsIcons)});n.addV2CFunction("AV13FondoNombreTitleFilterData","vFONDONOMBRETITLEFILTERDATA","SetDropDownOptionsData");n.addC2VFunction(function(n){n.ParentObject.AV13FondoNombreTitleFilterData=n.GetDropDownOptionsData();gx.fn.setControlValue("vFONDONOMBRETITLEFILTERDATA",n.ParentObject.AV13FondoNombreTitleFilterData)});n.setC2ShowFunction(function(n){n.show()});n.addEventHandler("OnOptionClicked",this.e13eu2_client);this.setUserControl(n);this.DDO_CAJACOMPROBANTEFONDOIMPORTEContainer=gx.uc.getNew(this,32,31,"BootstrapDropDownOptions","DDO_CAJACOMPROBANTEFONDOIMPORTEContainer","Ddo_cajacomprobantefondoimporte","DDO_CAJACOMPROBANTEFONDOIMPORTE");t=this.DDO_CAJACOMPROBANTEFONDOIMPORTEContainer;t.setProp("Class","Class","","char");t.setProp("IconType","Icontype","Image","str");t.setProp("Icon","Icon","","str");t.setProp("Caption","Caption","","str");t.setProp("Tooltip","Tooltip","WWP_TSColumnOptions","str");t.setProp("Cls","Cls","ColumnSettings","str");t.setProp("ActiveEventKey","Activeeventkey","","char");t.setProp("FilteredText_set","Filteredtext_set","","char");t.setProp("FilteredText_get","Filteredtext_get","","char");t.setProp("FilteredTextTo_set","Filteredtextto_set","","char");t.setProp("FilteredTextTo_get","Filteredtextto_get","","char");t.setProp("SelectedValue_set","Selectedvalue_set","","char");t.setProp("SelectedValue_get","Selectedvalue_get","","char");t.setProp("SelectedText_set","Selectedtext_set","","char");t.setProp("SelectedText_get","Selectedtext_get","","char");t.setProp("GAMOAuthToken","Gamoauthtoken","","char");t.setProp("TitleControlAlign","Titlecontrolalign","Automatic","str");t.setProp("DropDownOptionsType","Dropdownoptionstype","GridTitleSettings","str");t.setProp("Enabled","Enabled",!0,"bool");t.setProp("Visible","Visible",!0,"bool");t.setDynProp("TitleControlIdToReplace","Titlecontrolidtoreplace","","str");t.setProp("IncludeSortASC","Includesortasc",!0,"bool");t.setProp("IncludeSortDSC","Includesortdsc",!0,"bool");t.setDynProp("SortedStatus","Sortedstatus","","char");t.setProp("IncludeFilter","Includefilter",!1,"bool");t.setProp("FilterType","Filtertype","","char");t.setProp("FilterIsRange","Filterisrange",!1,"boolean");t.setProp("IncludeDataList","Includedatalist",!1,"bool");t.setProp("DataListType","Datalisttype","","char");t.setProp("AllowMultipleSelection","Allowmultipleselection",!1,"boolean");t.setProp("DataListFixedValues","Datalistfixedvalues","","char");t.setProp("DataListProc","Datalistproc","","char");t.setProp("DataListProcParametersPrefix","Datalistprocparametersprefix","","char");t.setProp("DataListUpdateMinimumCharacters","Datalistupdateminimumcharacters","","int");t.setProp("FixedFilters","Fixedfilters","","str");t.setProp("SelectedFixedFilter","Selectedfixedfilter","","char");t.setProp("ColumnsSelectorValues","Columnsselectorvalues","","char");t.setProp("IncludeOnlySelectedOption","Includeonlyselectedoption",!1,"boolean");t.setProp("IncludeSelectAllOption","Includeselectalloption",!1,"boolean");t.setProp("CategoryFilteredBehaviour","Categoryfilteredbehaviour","ShowFilteredChildren","str");t.setProp("EmptyItem","Emptyitem",!1,"boolean");t.setProp("SortASC","Sortasc","WWP_TSSortASC","str");t.setProp("SortDSC","Sortdsc","WWP_TSSortDSC","str");t.setProp("LoadingData","Loadingdata","","char");t.setProp("CleanFilter","Cleanfilter","WWP_TSCleanFilter","str");t.setProp("RangeFilterFrom","Rangefilterfrom","","char");t.setProp("RangeFilterTo","Rangefilterto","","char");t.setProp("NoResultsFound","Noresultsfound","","char");t.setProp("SearchButtonText","Searchbuttontext","WWP_TSSearchButtonCaption","str");t.setProp("UpdateButtonText","Updatebuttontext","Update","str");t.setProp("EmptyItemText","Emptyitemtext","","char");t.setProp("OnlySelectedValues","Onlyselectedvalues","","char");t.setProp("SelectAllText","Selectalltext","","char");t.setProp("MultipleValuesSeparator","Multiplevaluesseparator","","char");t.addV2CFunction("AV25DDO_TitleSettingsIcons","vDDO_TITLESETTINGSICONS","SetDropDownOptionsTitleSettingsIcons");t.addC2VFunction(function(n){n.ParentObject.AV25DDO_TitleSettingsIcons=n.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",n.ParentObject.AV25DDO_TitleSettingsIcons)});t.addV2CFunction("AV15CajaComprobanteFondoImporteTitleFilterData","vCAJACOMPROBANTEFONDOIMPORTETITLEFILTERDATA","SetDropDownOptionsData");t.addC2VFunction(function(n){n.ParentObject.AV15CajaComprobanteFondoImporteTitleFilterData=n.GetDropDownOptionsData();gx.fn.setControlValue("vCAJACOMPROBANTEFONDOIMPORTETITLEFILTERDATA",n.ParentObject.AV15CajaComprobanteFondoImporteTitleFilterData)});t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("OnOptionClicked",this.e14eu2_client);this.setUserControl(t);this.WORKWITHPLUSUTILITIES1Container=gx.uc.getNew(this,34,31,"DVelop_WorkWithPlusUtilities","WORKWITHPLUSUTILITIES1Container","Workwithplusutilities1","WORKWITHPLUSUTILITIES1");e=this.WORKWITHPLUSUTILITIES1Container;e.setProp("Class","Class","","char");e.setProp("Enabled","Enabled",!0,"boolean");e.setProp("EnableAutoUpdateFromDocumentTitle","Enableautoupdatefromdocumenttitle",!1,"bool");e.setProp("EnableFixObjectFitCover","Enablefixobjectfitcover",!1,"bool");e.setProp("EnableFloatingLabels","Enablefloatinglabels",!1,"bool");e.setProp("EnableConvertComboToBootstrapSelect","Enableconvertcombotobootstrapselect",!1,"bool");e.setProp("CurrentTab_ReturnUrl","Currenttab_returnurl","","char");e.setProp("Visible","Visible",!0,"bool");e.setC2ShowFunction(function(n){n.show()});this.setUserControl(e);r[2]={id:2,fld:"",grid:0};r[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};r[4]={id:4,fld:"",grid:0};r[5]={id:5,fld:"",grid:0};r[6]={id:6,fld:"TABLEMAIN",grid:0};r[7]={id:7,fld:"",grid:0};r[8]={id:8,fld:"",grid:0};r[11]={id:11,fld:"TABLEHEADER",grid:0};r[12]={id:12,fld:"",grid:0};r[13]={id:13,fld:"",grid:0};r[14]={id:14,fld:"",grid:0};r[15]={id:15,fld:"",grid:0};r[16]={id:16,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};r[17]={id:17,fld:"",grid:0};r[18]={id:18,fld:"",grid:0};r[20]={id:20,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV12Select",gxold:"OV12Select",gxvar:"AV12Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV12Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV12Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(19),gx.O.AV12Select,gx.O.AV39Select_GXI)},c2v:function(n){gx.O.AV39Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV12Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(19))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(19))},gxvar_GXI:"AV39Select_GXI",nac:gx.falseFn,evt:"e18eu2_client",std:"ENTER"};r[21]={id:21,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:this.Valid_Fondoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDOID",gxz:"Z38FondoId",gxold:"O38FondoId",gxvar:"A38FondoId",ucs:[],op:[22],ip:[22,21],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A38FondoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z38FondoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FONDOID",n||gx.fn.currentGridRowImpl(19),gx.O.A38FondoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A38FondoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FONDOID",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};r[22]={id:22,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FONDONOMBRE",gxz:"Z345FondoNombre",gxold:"O345FondoNombre",gxvar:"A345FondoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A345FondoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z345FondoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("FONDONOMBRE",n||gx.fn.currentGridRowImpl(19),gx.O.A345FondoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A345FondoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FONDONOMBRE",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};r[23]={id:23,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJACOMPROBANTEFONDOIMPORTE",gxz:"Z465CajaComprobanteFondoImporte",gxold:"O465CajaComprobanteFondoImporte",gxvar:"A465CajaComprobanteFondoImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A465CajaComprobanteFondoImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z465CajaComprobanteFondoImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CAJACOMPROBANTEFONDOIMPORTE",n||gx.fn.currentGridRowImpl(19),gx.O.A465CajaComprobanteFondoImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A465CajaComprobanteFondoImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CAJACOMPROBANTEFONDOIMPORTE",n||gx.fn.currentGridRowImpl(19),".",",")},nac:gx.falseFn};r[24]={id:24,fld:"",grid:0};r[25]={id:25,fld:"",grid:0};r[27]={id:27,fld:"",grid:0};r[28]={id:28,fld:"",grid:0};r[29]={id:29,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};r[31]={id:31,lvl:0,type:"svchar",len:300,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_FONDONOMBRETITLECONTROLIDTOREPLACE",gxz:"ZV14ddo_FondoNombreTitleControlIdToReplace",gxold:"OV14ddo_FondoNombreTitleControlIdToReplace",gxvar:"AV14ddo_FondoNombreTitleControlIdToReplace",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV14ddo_FondoNombreTitleControlIdToReplace=n)},v2z:function(n){n!==undefined&&(gx.O.ZV14ddo_FondoNombreTitleControlIdToReplace=n)},v2c:function(){gx.fn.setControlValue("vDDO_FONDONOMBRETITLECONTROLIDTOREPLACE",gx.O.AV14ddo_FondoNombreTitleControlIdToReplace,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV14ddo_FondoNombreTitleControlIdToReplace=this.val())},val:function(){return gx.fn.getControlValue("vDDO_FONDONOMBRETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};r[33]={id:33,lvl:0,type:"svchar",len:300,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_CAJACOMPROBANTEFONDOIMPORTETITLECONTROLIDTOREPLACE",gxz:"ZV16ddo_CajaComprobanteFondoImporteTitleControlIdToReplace",gxold:"OV16ddo_CajaComprobanteFondoImporteTitleControlIdToReplace",gxvar:"AV16ddo_CajaComprobanteFondoImporteTitleControlIdToReplace",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV16ddo_CajaComprobanteFondoImporteTitleControlIdToReplace=n)},v2z:function(n){n!==undefined&&(gx.O.ZV16ddo_CajaComprobanteFondoImporteTitleControlIdToReplace=n)},v2c:function(){gx.fn.setControlValue("vDDO_CAJACOMPROBANTEFONDOIMPORTETITLECONTROLIDTOREPLACE",gx.O.AV16ddo_CajaComprobanteFondoImporteTitleControlIdToReplace,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV16ddo_CajaComprobanteFondoImporteTitleControlIdToReplace=this.val())},val:function(){return gx.fn.getControlValue("vDDO_CAJACOMPROBANTEFONDOIMPORTETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};r[35]={id:35,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV10OrderedBy",gxold:"OV10OrderedBy",gxvar:"AV10OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV10OrderedBy=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV10OrderedBy=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV10OrderedBy,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV10OrderedBy=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};r[36]={id:36,lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDDSC",gxz:"ZV11OrderedDsc",gxold:"OV11OrderedDsc",gxvar:"AV11OrderedDsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV11OrderedDsc=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV11OrderedDsc=gx.lang.booleanValue(n))},v2c:function(){gx.fn.setControlValue("vORDEREDDSC",gx.O.AV11OrderedDsc,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV11OrderedDsc=gx.lang.booleanValue(this.val()))},val:function(){return gx.fn.getControlValue("vORDEREDDSC")},nac:gx.falseFn};this.ZV12Select="";this.OV12Select="";this.Z38FondoId=0;this.O38FondoId=0;this.Z345FondoNombre="";this.O345FondoNombre="";this.Z465CajaComprobanteFondoImporte=0;this.O465CajaComprobanteFondoImporte=0;this.AV14ddo_FondoNombreTitleControlIdToReplace="";this.ZV14ddo_FondoNombreTitleControlIdToReplace="";this.OV14ddo_FondoNombreTitleControlIdToReplace="";this.AV16ddo_CajaComprobanteFondoImporteTitleControlIdToReplace="";this.ZV16ddo_CajaComprobanteFondoImporteTitleControlIdToReplace="";this.OV16ddo_CajaComprobanteFondoImporteTitleControlIdToReplace="";this.AV10OrderedBy=0;this.ZV10OrderedBy=0;this.OV10OrderedBy=0;this.AV11OrderedDsc=!1;this.ZV11OrderedDsc=!1;this.OV11OrderedDsc=!1;this.AV27GridCurrentPage=0;this.AV25DDO_TitleSettingsIcons={Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""};this.AV14ddo_FondoNombreTitleControlIdToReplace="";this.AV16ddo_CajaComprobanteFondoImporteTitleControlIdToReplace="";this.AV10OrderedBy=0;this.AV11OrderedDsc=!1;this.AV7InCajaComprobanteId=0;this.AV8InOutFondoId=0;this.AV9InOutCajaComprobanteFondoImporte=0;this.A36CajaComprobanteId=0;this.A461CajaComprobanteMov="";this.AV12Select="";this.A38FondoId=0;this.A345FondoNombre="";this.A465CajaComprobanteFondoImporte=0;this.Events={e11eu2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12eu2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e13eu2_client:["DDO_FONDONOMBRE.ONOPTIONCLICKED",!0],e14eu2_client:["DDO_CAJACOMPROBANTEFONDOIMPORTE.ONOPTIONCLICKED",!0],e18eu2_client:["ENTER",!0],e19eu2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV10OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV11OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"AV7InCajaComprobanteId",fld:"vINCAJACOMPROBANTEID",pic:"ZZZZZZZ9"},{av:"AV14ddo_FondoNombreTitleControlIdToReplace",fld:"vDDO_FONDONOMBRETITLECONTROLIDTOREPLACE",pic:""},{av:"AV16ddo_CajaComprobanteFondoImporteTitleControlIdToReplace",fld:"vDDO_CAJACOMPROBANTEFONDOIMPORTETITLECONTROLIDTOREPLACE",pic:""}],[{av:"AV13FondoNombreTitleFilterData",fld:"vFONDONOMBRETITLEFILTERDATA",pic:""},{av:"AV15CajaComprobanteFondoImporteTitleFilterData",fld:"vCAJACOMPROBANTEFONDOIMPORTETITLEFILTERDATA",pic:""},{ctrl:"FONDONOMBRE",prop:"Titleformat"},{av:'gx.fn.getCtrlProperty("FONDONOMBRE","Title")',ctrl:"FONDONOMBRE",prop:"Title"},{ctrl:"CAJACOMPROBANTEFONDOIMPORTE",prop:"Titleformat",hsh:!0},{av:'gx.fn.getCtrlProperty("CAJACOMPROBANTEFONDOIMPORTE","Title")',ctrl:"CAJACOMPROBANTEFONDOIMPORTE",prop:"Title"},{av:"AV27GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV28GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[{av:"AV10OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV11OrderedDsc",fld:"vORDEREDDSC",pic:""}],[{ctrl:"GRID",prop:"Rows"},{av:"this.DDO_FONDONOMBREContainer.TitleControlIdToReplace",ctrl:"DDO_FONDONOMBRE",prop:"TitleControlIdToReplace"},{av:"AV14ddo_FondoNombreTitleControlIdToReplace",fld:"vDDO_FONDONOMBRETITLECONTROLIDTOREPLACE",pic:""},{av:'gx.fn.getCtrlProperty("vDDO_FONDONOMBRETITLECONTROLIDTOREPLACE","Visible")',ctrl:"vDDO_FONDONOMBRETITLECONTROLIDTOREPLACE",prop:"Visible"},{av:"this.DDO_CAJACOMPROBANTEFONDOIMPORTEContainer.TitleControlIdToReplace",ctrl:"DDO_CAJACOMPROBANTEFONDOIMPORTE",prop:"TitleControlIdToReplace"},{av:"AV16ddo_CajaComprobanteFondoImporteTitleControlIdToReplace",fld:"vDDO_CAJACOMPROBANTEFONDOIMPORTETITLECONTROLIDTOREPLACE",pic:""},{av:'gx.fn.getCtrlProperty("vDDO_CAJACOMPROBANTEFONDOIMPORTETITLECONTROLIDTOREPLACE","Visible")',ctrl:"vDDO_CAJACOMPROBANTEFONDOIMPORTETITLECONTROLIDTOREPLACE",prop:"Visible"},{ctrl:"FORM",prop:"Caption"},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:"vORDEREDBY",prop:"Visible"},{av:"AV10OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:'gx.fn.getCtrlProperty("vORDEREDDSC","Visible")',ctrl:"vORDEREDDSC",prop:"Visible"},{av:"AV25DDO_TitleSettingsIcons",fld:"vDDO_TITLESETTINGSICONS",pic:""},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:"this.DDO_FONDONOMBREContainer.SortedStatus",ctrl:"DDO_FONDONOMBRE",prop:"SortedStatus"},{av:"this.DDO_CAJACOMPROBANTEFONDOIMPORTEContainer.SortedStatus",ctrl:"DDO_CAJACOMPROBANTEFONDOIMPORTE",prop:"SortedStatus"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV10OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV11OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"AV7InCajaComprobanteId",fld:"vINCAJACOMPROBANTEID",pic:"ZZZZZZZ9"},{av:"AV14ddo_FondoNombreTitleControlIdToReplace",fld:"vDDO_FONDONOMBRETITLECONTROLIDTOREPLACE",pic:""},{av:"AV16ddo_CajaComprobanteFondoImporteTitleControlIdToReplace",fld:"vDDO_CAJACOMPROBANTEFONDOIMPORTETITLECONTROLIDTOREPLACE",pic:""},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV10OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV11OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"AV7InCajaComprobanteId",fld:"vINCAJACOMPROBANTEID",pic:"ZZZZZZZ9"},{av:"AV14ddo_FondoNombreTitleControlIdToReplace",fld:"vDDO_FONDONOMBRETITLECONTROLIDTOREPLACE",pic:""},{av:"AV16ddo_CajaComprobanteFondoImporteTitleControlIdToReplace",fld:"vDDO_CAJACOMPROBANTEFONDOIMPORTETITLECONTROLIDTOREPLACE",pic:""},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["DDO_FONDONOMBRE.ONOPTIONCLICKED"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV10OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV11OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"AV7InCajaComprobanteId",fld:"vINCAJACOMPROBANTEID",pic:"ZZZZZZZ9"},{av:"AV14ddo_FondoNombreTitleControlIdToReplace",fld:"vDDO_FONDONOMBRETITLECONTROLIDTOREPLACE",pic:""},{av:"AV16ddo_CajaComprobanteFondoImporteTitleControlIdToReplace",fld:"vDDO_CAJACOMPROBANTEFONDOIMPORTETITLECONTROLIDTOREPLACE",pic:""},{av:"this.DDO_FONDONOMBREContainer.ActiveEventKey",ctrl:"DDO_FONDONOMBRE",prop:"ActiveEventKey"}],[{av:"AV10OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV11OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"this.DDO_FONDONOMBREContainer.SortedStatus",ctrl:"DDO_FONDONOMBRE",prop:"SortedStatus"},{av:"this.DDO_CAJACOMPROBANTEFONDOIMPORTEContainer.SortedStatus",ctrl:"DDO_CAJACOMPROBANTEFONDOIMPORTE",prop:"SortedStatus"},{av:"AV13FondoNombreTitleFilterData",fld:"vFONDONOMBRETITLEFILTERDATA",pic:""},{av:"AV15CajaComprobanteFondoImporteTitleFilterData",fld:"vCAJACOMPROBANTEFONDOIMPORTETITLEFILTERDATA",pic:""},{ctrl:"FONDONOMBRE",prop:"Titleformat"},{av:'gx.fn.getCtrlProperty("FONDONOMBRE","Title")',ctrl:"FONDONOMBRE",prop:"Title"},{ctrl:"CAJACOMPROBANTEFONDOIMPORTE",prop:"Titleformat",hsh:!0},{av:'gx.fn.getCtrlProperty("CAJACOMPROBANTEFONDOIMPORTE","Title")',ctrl:"CAJACOMPROBANTEFONDOIMPORTE",prop:"Title"},{av:"AV27GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV28GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms["DDO_CAJACOMPROBANTEFONDOIMPORTE.ONOPTIONCLICKED"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV10OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV11OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"AV7InCajaComprobanteId",fld:"vINCAJACOMPROBANTEID",pic:"ZZZZZZZ9"},{av:"AV14ddo_FondoNombreTitleControlIdToReplace",fld:"vDDO_FONDONOMBRETITLECONTROLIDTOREPLACE",pic:""},{av:"AV16ddo_CajaComprobanteFondoImporteTitleControlIdToReplace",fld:"vDDO_CAJACOMPROBANTEFONDOIMPORTETITLECONTROLIDTOREPLACE",pic:""},{av:"this.DDO_CAJACOMPROBANTEFONDOIMPORTEContainer.ActiveEventKey",ctrl:"DDO_CAJACOMPROBANTEFONDOIMPORTE",prop:"ActiveEventKey"}],[{av:"AV10OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV11OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"this.DDO_CAJACOMPROBANTEFONDOIMPORTEContainer.SortedStatus",ctrl:"DDO_CAJACOMPROBANTEFONDOIMPORTE",prop:"SortedStatus"},{av:"this.DDO_FONDONOMBREContainer.SortedStatus",ctrl:"DDO_FONDONOMBRE",prop:"SortedStatus"},{av:"AV13FondoNombreTitleFilterData",fld:"vFONDONOMBRETITLEFILTERDATA",pic:""},{av:"AV15CajaComprobanteFondoImporteTitleFilterData",fld:"vCAJACOMPROBANTEFONDOIMPORTETITLEFILTERDATA",pic:""},{ctrl:"FONDONOMBRE",prop:"Titleformat"},{av:'gx.fn.getCtrlProperty("FONDONOMBRE","Title")',ctrl:"FONDONOMBRE",prop:"Title"},{ctrl:"CAJACOMPROBANTEFONDOIMPORTE",prop:"Titleformat",hsh:!0},{av:'gx.fn.getCtrlProperty("CAJACOMPROBANTEFONDOIMPORTE","Title")',ctrl:"CAJACOMPROBANTEFONDOIMPORTE",prop:"Title"},{av:"AV27GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV28GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV12Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9",hsh:!0},{av:"A465CajaComprobanteFondoImporte",fld:"CAJACOMPROBANTEFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99",hsh:!0}],[{av:"AV8InOutFondoId",fld:"vINOUTFONDOID",pic:"ZZZ9"},{av:"AV9InOutCajaComprobanteFondoImporte",fld:"vINOUTCAJACOMPROBANTEFONDOIMPORTE",pic:"ZZ,ZZZ,ZZ9.99"}]];this.EvtParms.VALID_FONDOID=[[{av:"A345FondoNombre",fld:"FONDONOMBRE",pic:"@!"},{av:"A38FondoId",fld:"FONDOID",pic:"ZZZ9",hsh:!0}],[{av:"A345FondoNombre",fld:"FONDONOMBRE",pic:"@!"}]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV7InCajaComprobanteId","vINCAJACOMPROBANTEID",0,"int",8,0);this.setVCMap("AV8InOutFondoId","vINOUTFONDOID",0,"int",4,0);this.setVCMap("AV9InOutCajaComprobanteFondoImporte","vINOUTCAJACOMPROBANTEFONDOIMPORTE",0,"decimal",12,2);this.setVCMap("AV7InCajaComprobanteId","vINCAJACOMPROBANTEID",0,"int",8,0);this.setVCMap("AV7InCajaComprobanteId","vINCAJACOMPROBANTEID",0,"int",8,0);f.addRefreshingVar(this.GXValidFnc[35]);f.addRefreshingVar(this.GXValidFnc[36]);f.addRefreshingVar({rfrVar:"AV7InCajaComprobanteId"});f.addRefreshingVar(this.GXValidFnc[31]);f.addRefreshingVar(this.GXValidFnc[33]);f.addRefreshingParm(this.GXValidFnc[35]);f.addRefreshingParm(this.GXValidFnc[36]);f.addRefreshingParm({rfrVar:"AV7InCajaComprobanteId"});f.addRefreshingParm(this.GXValidFnc[31]);f.addRefreshingParm(this.GXValidFnc[33]);this.Initialize()});gx.wi(function(){gx.createParentObj(promptcajacomprobantefondo)})