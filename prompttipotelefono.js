/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:52:59.31
*/
gx.evt.autoSkip=!1;gx.define("prompttipotelefono",!1,function(){var i,f,u,r,n,t,e;this.ServerClass="prompttipotelefono";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7InOutTipTelId=gx.fn.getIntegerValue("vINOUTTIPTELID",".");this.AV8InOutTipTelNom=gx.fn.getControlValue("vINOUTTIPTELNOM")};this.s112_client=function(){this.s122_client();this.AV13OrderedBy==2?this.DDO_TIPTELIDContainer.SortedStatus=this.AV14OrderedDsc?"DSC":"ASC":this.AV13OrderedBy==1&&(this.DDO_TIPTELNOMContainer.SortedStatus=this.AV14OrderedDsc?"DSC":"ASC")};this.s122_client=function(){this.DDO_TIPTELIDContainer.SortedStatus="";this.DDO_TIPTELNOMContainer.SortedStatus=""};this.s132_client=function(){this.AV39TipTelNomOperator=gx.num.trunc(0,0);this.AV40TipTelNom=""};this.e11bn2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12bn2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e13bn2_client=function(){return this.executeServerEvent("DDO_TIPTELID.ONOPTIONCLICKED",!1,null,!0,!0)};this.e14bn2_client=function(){return this.executeServerEvent("DDO_TIPTELNOM.ONOPTIONCLICKED",!1,null,!0,!0)};this.e19bn2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e15bn2_client=function(){return this.executeServerEvent("'DOCLEANFILTERS'",!0,null,!1,!1)};this.e20bn2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];i=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,17,19,20,21,22,23,24,27,28,30,31,32,33,34,35,36,38,39,40,41,42,44,45,46,48,50,52,53];this.GXLastCtrlId=53;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",37,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"prompttipotelefono",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);f=this.GridContainer;f.addBitmap("&Select","vSELECT",38,0,"px",17,"px","e19bn2_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");f.addSingleLineEdit(125,39,"TIPTELID","","","TipTelId","int",0,"px",9,9,"right",null,[],125,"TipTelId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");f.addSingleLineEdit(515,40,"TIPTELNOM","","","TipTelNom","char",0,"px",20,20,"left",null,[],515,"TipTelNom",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(f);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");u=this.DVPANEL_TABLEHEADERContainer;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("Width","Width","100%","str");u.setProp("Height","Height","100","str");u.setProp("AutoWidth","Autowidth",!1,"bool");u.setProp("AutoHeight","Autoheight",!0,"bool");u.setProp("Cls","Cls","PanelFilled_BaseColor","str");u.setProp("ShowHeader","Showheader",!0,"bool");u.setProp("Title","Title","Opciones","str");u.setProp("Collapsible","Collapsible",!0,"bool");u.setProp("Collapsed","Collapsed",!1,"bool");u.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");u.setProp("IconPosition","Iconposition","Right","str");u.setProp("AutoScroll","Autoscroll",!1,"bool");u.setProp("Visible","Visible",!0,"bool");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,43,28,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");r=this.GRIDPAGINATIONBARContainer;r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Class","Class","PaginationBar","str");r.setProp("ShowFirst","Showfirst",!1,"bool");r.setProp("ShowPrevious","Showprevious",!0,"bool");r.setProp("ShowNext","Shownext",!0,"bool");r.setProp("ShowLast","Showlast",!1,"bool");r.setProp("PagesToShow","Pagestoshow",5,"num");r.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");r.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");r.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");r.setProp("SelectedPage","Selectedpage","","char");r.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");r.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");r.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");r.setProp("First","First","First","str");r.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");r.setProp("Next","Next","WWP_PagingNextCaption","str");r.setProp("Last","Last","Last","str");r.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");r.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");r.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");r.addV2CFunction("AV31GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");r.addC2VFunction(function(n){n.ParentObject.AV31GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV31GridCurrentPage)});r.addV2CFunction("AV32GridPageCount","vGRIDPAGECOUNT","SetPageCount");r.addC2VFunction(function(n){n.ParentObject.AV32GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV32GridPageCount)});r.setProp("RecordCount","Recordcount","","str");r.setProp("Page","Page","","str");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});r.addEventHandler("ChangePage",this.e11bn2_client);r.addEventHandler("ChangeRowsPerPage",this.e12bn2_client);this.setUserControl(r);this.DDO_TIPTELIDContainer=gx.uc.getNew(this,47,28,"BootstrapDropDownOptions","DDO_TIPTELIDContainer","Ddo_tiptelid","DDO_TIPTELID");n=this.DDO_TIPTELIDContainer;n.setProp("Class","Class","","char");n.setProp("IconType","Icontype","Image","str");n.setProp("Icon","Icon","","str");n.setProp("Caption","Caption","","str");n.setProp("Tooltip","Tooltip","WWP_TSColumnOptions","str");n.setProp("Cls","Cls","ColumnSettings","str");n.setProp("ActiveEventKey","Activeeventkey","","char");n.setProp("FilteredText_set","Filteredtext_set","","char");n.setProp("FilteredText_get","Filteredtext_get","","char");n.setProp("FilteredTextTo_set","Filteredtextto_set","","char");n.setProp("FilteredTextTo_get","Filteredtextto_get","","char");n.setProp("SelectedValue_set","Selectedvalue_set","","char");n.setProp("SelectedValue_get","Selectedvalue_get","","char");n.setProp("SelectedText_set","Selectedtext_set","","char");n.setProp("SelectedText_get","Selectedtext_get","","char");n.setProp("GAMOAuthToken","Gamoauthtoken","","char");n.setProp("TitleControlAlign","Titlecontrolalign","Automatic","str");n.setProp("DropDownOptionsType","Dropdownoptionstype","GridTitleSettings","str");n.setProp("Enabled","Enabled",!0,"bool");n.setProp("Visible","Visible",!0,"bool");n.setDynProp("TitleControlIdToReplace","Titlecontrolidtoreplace","","str");n.setProp("IncludeSortASC","Includesortasc",!0,"bool");n.setProp("IncludeSortDSC","Includesortdsc",!0,"bool");n.setDynProp("SortedStatus","Sortedstatus","","char");n.setProp("IncludeFilter","Includefilter",!1,"bool");n.setProp("FilterType","Filtertype","","char");n.setProp("FilterIsRange","Filterisrange",!1,"boolean");n.setProp("IncludeDataList","Includedatalist",!1,"bool");n.setProp("DataListType","Datalisttype","","char");n.setProp("AllowMultipleSelection","Allowmultipleselection",!1,"boolean");n.setProp("DataListFixedValues","Datalistfixedvalues","","char");n.setProp("DataListProc","Datalistproc","","char");n.setProp("DataListProcParametersPrefix","Datalistprocparametersprefix","","char");n.setProp("DataListUpdateMinimumCharacters","Datalistupdateminimumcharacters","","int");n.setProp("FixedFilters","Fixedfilters","","str");n.setProp("SelectedFixedFilter","Selectedfixedfilter","","char");n.setProp("ColumnsSelectorValues","Columnsselectorvalues","","char");n.setProp("IncludeOnlySelectedOption","Includeonlyselectedoption",!1,"boolean");n.setProp("IncludeSelectAllOption","Includeselectalloption",!1,"boolean");n.setProp("CategoryFilteredBehaviour","Categoryfilteredbehaviour","ShowFilteredChildren","str");n.setProp("EmptyItem","Emptyitem",!1,"boolean");n.setProp("SortASC","Sortasc","WWP_TSSortASC","str");n.setProp("SortDSC","Sortdsc","WWP_TSSortDSC","str");n.setProp("LoadingData","Loadingdata","","char");n.setProp("CleanFilter","Cleanfilter","WWP_TSCleanFilter","str");n.setProp("RangeFilterFrom","Rangefilterfrom","","char");n.setProp("RangeFilterTo","Rangefilterto","","char");n.setProp("NoResultsFound","Noresultsfound","","char");n.setProp("SearchButtonText","Searchbuttontext","WWP_TSSearchButtonCaption","str");n.setProp("UpdateButtonText","Updatebuttontext","Update","str");n.setProp("EmptyItemText","Emptyitemtext","","char");n.setProp("OnlySelectedValues","Onlyselectedvalues","","char");n.setProp("SelectAllText","Selectalltext","","char");n.setProp("MultipleValuesSeparator","Multiplevaluesseparator","","char");n.addV2CFunction("AV37DDO_TitleSettingsIcons","vDDO_TITLESETTINGSICONS","SetDropDownOptionsTitleSettingsIcons");n.addC2VFunction(function(n){n.ParentObject.AV37DDO_TitleSettingsIcons=n.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",n.ParentObject.AV37DDO_TitleSettingsIcons)});n.addV2CFunction("AV33TipTelIdTitleFilterData","vTIPTELIDTITLEFILTERDATA","SetDropDownOptionsData");n.addC2VFunction(function(n){n.ParentObject.AV33TipTelIdTitleFilterData=n.GetDropDownOptionsData();gx.fn.setControlValue("vTIPTELIDTITLEFILTERDATA",n.ParentObject.AV33TipTelIdTitleFilterData)});n.setC2ShowFunction(function(n){n.show()});n.addEventHandler("OnOptionClicked",this.e13bn2_client);this.setUserControl(n);this.DDO_TIPTELNOMContainer=gx.uc.getNew(this,49,28,"BootstrapDropDownOptions","DDO_TIPTELNOMContainer","Ddo_tiptelnom","DDO_TIPTELNOM");t=this.DDO_TIPTELNOMContainer;t.setProp("Class","Class","","char");t.setProp("IconType","Icontype","Image","str");t.setProp("Icon","Icon","","str");t.setProp("Caption","Caption","","str");t.setProp("Tooltip","Tooltip","WWP_TSColumnOptions","str");t.setProp("Cls","Cls","ColumnSettings","str");t.setProp("ActiveEventKey","Activeeventkey","","char");t.setProp("FilteredText_set","Filteredtext_set","","char");t.setProp("FilteredText_get","Filteredtext_get","","char");t.setProp("FilteredTextTo_set","Filteredtextto_set","","char");t.setProp("FilteredTextTo_get","Filteredtextto_get","","char");t.setProp("SelectedValue_set","Selectedvalue_set","","char");t.setProp("SelectedValue_get","Selectedvalue_get","","char");t.setProp("SelectedText_set","Selectedtext_set","","char");t.setProp("SelectedText_get","Selectedtext_get","","char");t.setProp("GAMOAuthToken","Gamoauthtoken","","char");t.setProp("TitleControlAlign","Titlecontrolalign","Automatic","str");t.setProp("DropDownOptionsType","Dropdownoptionstype","GridTitleSettings","str");t.setProp("Enabled","Enabled",!0,"bool");t.setProp("Visible","Visible",!0,"bool");t.setDynProp("TitleControlIdToReplace","Titlecontrolidtoreplace","","str");t.setProp("IncludeSortASC","Includesortasc",!0,"bool");t.setProp("IncludeSortDSC","Includesortdsc",!0,"bool");t.setDynProp("SortedStatus","Sortedstatus","","char");t.setProp("IncludeFilter","Includefilter",!1,"bool");t.setProp("FilterType","Filtertype","","char");t.setProp("FilterIsRange","Filterisrange",!1,"boolean");t.setProp("IncludeDataList","Includedatalist",!1,"bool");t.setProp("DataListType","Datalisttype","","char");t.setProp("AllowMultipleSelection","Allowmultipleselection",!1,"boolean");t.setProp("DataListFixedValues","Datalistfixedvalues","","char");t.setProp("DataListProc","Datalistproc","","char");t.setProp("DataListProcParametersPrefix","Datalistprocparametersprefix","","char");t.setProp("DataListUpdateMinimumCharacters","Datalistupdateminimumcharacters","","int");t.setProp("FixedFilters","Fixedfilters","","str");t.setProp("SelectedFixedFilter","Selectedfixedfilter","","char");t.setProp("ColumnsSelectorValues","Columnsselectorvalues","","char");t.setProp("IncludeOnlySelectedOption","Includeonlyselectedoption",!1,"boolean");t.setProp("IncludeSelectAllOption","Includeselectalloption",!1,"boolean");t.setProp("CategoryFilteredBehaviour","Categoryfilteredbehaviour","ShowFilteredChildren","str");t.setProp("EmptyItem","Emptyitem",!1,"boolean");t.setProp("SortASC","Sortasc","WWP_TSSortASC","str");t.setProp("SortDSC","Sortdsc","WWP_TSSortDSC","str");t.setProp("LoadingData","Loadingdata","","char");t.setProp("CleanFilter","Cleanfilter","WWP_TSCleanFilter","str");t.setProp("RangeFilterFrom","Rangefilterfrom","","char");t.setProp("RangeFilterTo","Rangefilterto","","char");t.setProp("NoResultsFound","Noresultsfound","","char");t.setProp("SearchButtonText","Searchbuttontext","WWP_TSSearchButtonCaption","str");t.setProp("UpdateButtonText","Updatebuttontext","Update","str");t.setProp("EmptyItemText","Emptyitemtext","","char");t.setProp("OnlySelectedValues","Onlyselectedvalues","","char");t.setProp("SelectAllText","Selectalltext","","char");t.setProp("MultipleValuesSeparator","Multiplevaluesseparator","","char");t.addV2CFunction("AV37DDO_TitleSettingsIcons","vDDO_TITLESETTINGSICONS","SetDropDownOptionsTitleSettingsIcons");t.addC2VFunction(function(n){n.ParentObject.AV37DDO_TitleSettingsIcons=n.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",n.ParentObject.AV37DDO_TitleSettingsIcons)});t.addV2CFunction("AV35TipTelNomTitleFilterData","vTIPTELNOMTITLEFILTERDATA","SetDropDownOptionsData");t.addC2VFunction(function(n){n.ParentObject.AV35TipTelNomTitleFilterData=n.GetDropDownOptionsData();gx.fn.setControlValue("vTIPTELNOMTITLEFILTERDATA",n.ParentObject.AV35TipTelNomTitleFilterData)});t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("OnOptionClicked",this.e14bn2_client);this.setUserControl(t);this.WORKWITHPLUSUTILITIES1Container=gx.uc.getNew(this,51,28,"DVelop_WorkWithPlusUtilities","WORKWITHPLUSUTILITIES1Container","Workwithplusutilities1","WORKWITHPLUSUTILITIES1");e=this.WORKWITHPLUSUTILITIES1Container;e.setProp("Class","Class","","char");e.setProp("Enabled","Enabled",!0,"boolean");e.setProp("EnableAutoUpdateFromDocumentTitle","Enableautoupdatefromdocumenttitle",!1,"bool");e.setProp("EnableFixObjectFitCover","Enablefixobjectfitcover",!1,"bool");e.setProp("EnableFloatingLabels","Enablefloatinglabels",!1,"bool");e.setProp("EnableConvertComboToBootstrapSelect","Enableconvertcombotobootstrapselect",!1,"bool");e.setProp("CurrentTab_ReturnUrl","Currenttab_returnurl","","char");e.setProp("Visible","Visible",!0,"bool");e.setC2ShowFunction(function(n){n.show()});this.setUserControl(e);i[2]={id:2,fld:"",grid:0};i[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};i[4]={id:4,fld:"",grid:0};i[5]={id:5,fld:"",grid:0};i[6]={id:6,fld:"TABLEMAIN",grid:0};i[7]={id:7,fld:"",grid:0};i[8]={id:8,fld:"",grid:0};i[11]={id:11,fld:"TABLEHEADER",grid:0};i[12]={id:12,fld:"",grid:0};i[13]={id:13,fld:"",grid:0};i[14]={id:14,fld:"TABLEFILTERS",grid:0};i[17]={id:17,fld:"CLEANFILTERS",grid:0,evt:"e15bn2_client"};i[19]={id:19,fld:"TABLESPLITTEDFILTERTEXTTIPTELNOM",grid:0};i[20]={id:20,fld:"",grid:0};i[21]={id:21,fld:"",grid:0};i[22]={id:22,fld:"FILTERTEXTTIPTELNOM",format:0,grid:0};i[23]={id:23,fld:"",grid:0};i[24]={id:24,fld:"TABLEMERGEDTIPTELNOM",grid:0};i[27]={id:27,fld:"",grid:0};i[28]={id:28,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTIPTELNOMOPERATOR",gxz:"ZV39TipTelNomOperator",gxold:"OV39TipTelNomOperator",gxvar:"AV39TipTelNomOperator",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV39TipTelNomOperator=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV39TipTelNomOperator=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("vTIPTELNOMOPERATOR",gx.O.AV39TipTelNomOperator)},c2v:function(){this.val()!==undefined&&(gx.O.AV39TipTelNomOperator=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vTIPTELNOMOPERATOR",".")},nac:gx.falseFn};i[30]={id:30,fld:"",grid:0};i[31]={id:31,lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTIPTELNOM",gxz:"ZV40TipTelNom",gxold:"OV40TipTelNom",gxvar:"AV40TipTelNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV40TipTelNom=n)},v2z:function(n){n!==undefined&&(gx.O.ZV40TipTelNom=n)},v2c:function(){gx.fn.setControlValue("vTIPTELNOM",gx.O.AV40TipTelNom,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV40TipTelNom=this.val())},val:function(){return gx.fn.getControlValue("vTIPTELNOM")},nac:gx.falseFn};i[32]={id:32,fld:"",grid:0};i[33]={id:33,fld:"",grid:0};i[34]={id:34,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};i[35]={id:35,fld:"",grid:0};i[36]={id:36,fld:"",grid:0};i[38]={id:38,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV28Select",gxold:"OV28Select",gxvar:"AV28Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV28Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV28Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(37),gx.O.AV28Select,gx.O.AV45Select_GXI)},c2v:function(n){gx.O.AV45Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV28Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(37))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(37))},gxvar_GXI:"AV45Select_GXI",nac:gx.falseFn,evt:"e19bn2_client",std:"ENTER"};i[39]={id:39,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TIPTELID",gxz:"Z125TipTelId",gxold:"O125TipTelId",gxvar:"A125TipTelId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A125TipTelId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z125TipTelId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("TIPTELID",n||gx.fn.currentGridRowImpl(37),gx.O.A125TipTelId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A125TipTelId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("TIPTELID",n||gx.fn.currentGridRowImpl(37),".")},nac:gx.falseFn};i[40]={id:40,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TIPTELNOM",gxz:"Z515TipTelNom",gxold:"O515TipTelNom",gxvar:"A515TipTelNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A515TipTelNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z515TipTelNom=n)},v2c:function(n){gx.fn.setGridControlValue("TIPTELNOM",n||gx.fn.currentGridRowImpl(37),gx.O.A515TipTelNom,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A515TipTelNom=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TIPTELNOM",n||gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};i[41]={id:41,fld:"",grid:0};i[42]={id:42,fld:"",grid:0};i[44]={id:44,fld:"",grid:0};i[45]={id:45,fld:"",grid:0};i[46]={id:46,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};i[48]={id:48,lvl:0,type:"svchar",len:300,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_TIPTELIDTITLECONTROLIDTOREPLACE",gxz:"ZV34ddo_TipTelIdTitleControlIdToReplace",gxold:"OV34ddo_TipTelIdTitleControlIdToReplace",gxvar:"AV34ddo_TipTelIdTitleControlIdToReplace",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV34ddo_TipTelIdTitleControlIdToReplace=n)},v2z:function(n){n!==undefined&&(gx.O.ZV34ddo_TipTelIdTitleControlIdToReplace=n)},v2c:function(){gx.fn.setControlValue("vDDO_TIPTELIDTITLECONTROLIDTOREPLACE",gx.O.AV34ddo_TipTelIdTitleControlIdToReplace,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV34ddo_TipTelIdTitleControlIdToReplace=this.val())},val:function(){return gx.fn.getControlValue("vDDO_TIPTELIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};i[50]={id:50,lvl:0,type:"svchar",len:300,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE",gxz:"ZV36ddo_TipTelNomTitleControlIdToReplace",gxold:"OV36ddo_TipTelNomTitleControlIdToReplace",gxvar:"AV36ddo_TipTelNomTitleControlIdToReplace",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV36ddo_TipTelNomTitleControlIdToReplace=n)},v2z:function(n){n!==undefined&&(gx.O.ZV36ddo_TipTelNomTitleControlIdToReplace=n)},v2c:function(){gx.fn.setControlValue("vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE",gx.O.AV36ddo_TipTelNomTitleControlIdToReplace,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV36ddo_TipTelNomTitleControlIdToReplace=this.val())},val:function(){return gx.fn.getControlValue("vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};i[52]={id:52,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV13OrderedBy",gxold:"OV13OrderedBy",gxvar:"AV13OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV13OrderedBy=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV13OrderedBy=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV13OrderedBy,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV13OrderedBy=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};i[53]={id:53,lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDDSC",gxz:"ZV14OrderedDsc",gxold:"OV14OrderedDsc",gxvar:"AV14OrderedDsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV14OrderedDsc=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV14OrderedDsc=gx.lang.booleanValue(n))},v2c:function(){gx.fn.setControlValue("vORDEREDDSC",gx.O.AV14OrderedDsc,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV14OrderedDsc=gx.lang.booleanValue(this.val()))},val:function(){return gx.fn.getControlValue("vORDEREDDSC")},nac:gx.falseFn};this.AV39TipTelNomOperator=0;this.ZV39TipTelNomOperator=0;this.OV39TipTelNomOperator=0;this.AV40TipTelNom="";this.ZV40TipTelNom="";this.OV40TipTelNom="";this.ZV28Select="";this.OV28Select="";this.Z125TipTelId=0;this.O125TipTelId=0;this.Z515TipTelNom="";this.O515TipTelNom="";this.AV34ddo_TipTelIdTitleControlIdToReplace="";this.ZV34ddo_TipTelIdTitleControlIdToReplace="";this.OV34ddo_TipTelIdTitleControlIdToReplace="";this.AV36ddo_TipTelNomTitleControlIdToReplace="";this.ZV36ddo_TipTelNomTitleControlIdToReplace="";this.OV36ddo_TipTelNomTitleControlIdToReplace="";this.AV13OrderedBy=0;this.ZV13OrderedBy=0;this.OV13OrderedBy=0;this.AV14OrderedDsc=!1;this.ZV14OrderedDsc=!1;this.OV14OrderedDsc=!1;this.AV39TipTelNomOperator=0;this.AV40TipTelNom="";this.AV31GridCurrentPage=0;this.AV37DDO_TitleSettingsIcons={Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""};this.AV34ddo_TipTelIdTitleControlIdToReplace="";this.AV36ddo_TipTelNomTitleControlIdToReplace="";this.AV13OrderedBy=0;this.AV14OrderedDsc=!1;this.AV7InOutTipTelId=0;this.AV8InOutTipTelNom="";this.AV28Select="";this.A125TipTelId=0;this.A515TipTelNom="";this.Events={e11bn2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12bn2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e13bn2_client:["DDO_TIPTELID.ONOPTIONCLICKED",!0],e14bn2_client:["DDO_TIPTELNOM.ONOPTIONCLICKED",!0],e19bn2_client:["ENTER",!0],e15bn2_client:["'DOCLEANFILTERS'",!0],e20bn2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vTIPTELNOMOPERATOR"},{av:"AV39TipTelNomOperator",fld:"vTIPTELNOMOPERATOR",pic:"ZZZ9"},{av:"AV40TipTelNom",fld:"vTIPTELNOM",pic:""},{av:"AV13OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV14OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"AV34ddo_TipTelIdTitleControlIdToReplace",fld:"vDDO_TIPTELIDTITLECONTROLIDTOREPLACE",pic:""},{av:"AV36ddo_TipTelNomTitleControlIdToReplace",fld:"vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE",pic:""}],[{av:"AV33TipTelIdTitleFilterData",fld:"vTIPTELIDTITLEFILTERDATA",pic:""},{av:"AV35TipTelNomTitleFilterData",fld:"vTIPTELNOMTITLEFILTERDATA",pic:""},{ctrl:"TIPTELID",prop:"Titleformat",hsh:!0},{av:'gx.fn.getCtrlProperty("TIPTELID","Title")',ctrl:"TIPTELID",prop:"Title"},{ctrl:"TIPTELNOM",prop:"Titleformat",hsh:!0},{av:'gx.fn.getCtrlProperty("TIPTELNOM","Title")',ctrl:"TIPTELNOM",prop:"Title"},{av:"AV31GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV32GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[{av:"AV13OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV14OrderedDsc",fld:"vORDEREDDSC",pic:""}],[{ctrl:"GRID",prop:"Rows"},{av:"this.DDO_TIPTELIDContainer.TitleControlIdToReplace",ctrl:"DDO_TIPTELID",prop:"TitleControlIdToReplace"},{av:"AV34ddo_TipTelIdTitleControlIdToReplace",fld:"vDDO_TIPTELIDTITLECONTROLIDTOREPLACE",pic:""},{av:'gx.fn.getCtrlProperty("vDDO_TIPTELIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:"vDDO_TIPTELIDTITLECONTROLIDTOREPLACE",prop:"Visible"},{av:"this.DDO_TIPTELNOMContainer.TitleControlIdToReplace",ctrl:"DDO_TIPTELNOM",prop:"TitleControlIdToReplace"},{av:"AV36ddo_TipTelNomTitleControlIdToReplace",fld:"vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE",pic:""},{av:'gx.fn.getCtrlProperty("vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE","Visible")',ctrl:"vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE",prop:"Visible"},{ctrl:"FORM",prop:"Caption"},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:"vORDEREDBY",prop:"Visible"},{av:"AV13OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:'gx.fn.getCtrlProperty("vORDEREDDSC","Visible")',ctrl:"vORDEREDDSC",prop:"Visible"},{av:"AV37DDO_TitleSettingsIcons",fld:"vDDO_TITLESETTINGSICONS",pic:""},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:"this.DDO_TIPTELIDContainer.SortedStatus",ctrl:"DDO_TIPTELID",prop:"SortedStatus"},{av:"this.DDO_TIPTELNOMContainer.SortedStatus",ctrl:"DDO_TIPTELNOM",prop:"SortedStatus"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vTIPTELNOMOPERATOR"},{av:"AV39TipTelNomOperator",fld:"vTIPTELNOMOPERATOR",pic:"ZZZ9"},{av:"AV40TipTelNom",fld:"vTIPTELNOM",pic:""},{av:"AV13OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV14OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"AV34ddo_TipTelIdTitleControlIdToReplace",fld:"vDDO_TIPTELIDTITLECONTROLIDTOREPLACE",pic:""},{av:"AV36ddo_TipTelNomTitleControlIdToReplace",fld:"vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE",pic:""},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vTIPTELNOMOPERATOR"},{av:"AV39TipTelNomOperator",fld:"vTIPTELNOMOPERATOR",pic:"ZZZ9"},{av:"AV40TipTelNom",fld:"vTIPTELNOM",pic:""},{av:"AV13OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV14OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"AV34ddo_TipTelIdTitleControlIdToReplace",fld:"vDDO_TIPTELIDTITLECONTROLIDTOREPLACE",pic:""},{av:"AV36ddo_TipTelNomTitleControlIdToReplace",fld:"vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE",pic:""},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["DDO_TIPTELID.ONOPTIONCLICKED"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vTIPTELNOMOPERATOR"},{av:"AV39TipTelNomOperator",fld:"vTIPTELNOMOPERATOR",pic:"ZZZ9"},{av:"AV40TipTelNom",fld:"vTIPTELNOM",pic:""},{av:"AV13OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV14OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"AV34ddo_TipTelIdTitleControlIdToReplace",fld:"vDDO_TIPTELIDTITLECONTROLIDTOREPLACE",pic:""},{av:"AV36ddo_TipTelNomTitleControlIdToReplace",fld:"vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE",pic:""},{av:"this.DDO_TIPTELIDContainer.ActiveEventKey",ctrl:"DDO_TIPTELID",prop:"ActiveEventKey"}],[{av:"AV13OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV14OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"this.DDO_TIPTELIDContainer.SortedStatus",ctrl:"DDO_TIPTELID",prop:"SortedStatus"},{av:"this.DDO_TIPTELNOMContainer.SortedStatus",ctrl:"DDO_TIPTELNOM",prop:"SortedStatus"},{av:"AV33TipTelIdTitleFilterData",fld:"vTIPTELIDTITLEFILTERDATA",pic:""},{av:"AV35TipTelNomTitleFilterData",fld:"vTIPTELNOMTITLEFILTERDATA",pic:""},{ctrl:"TIPTELID",prop:"Titleformat",hsh:!0},{av:'gx.fn.getCtrlProperty("TIPTELID","Title")',ctrl:"TIPTELID",prop:"Title"},{ctrl:"TIPTELNOM",prop:"Titleformat",hsh:!0},{av:'gx.fn.getCtrlProperty("TIPTELNOM","Title")',ctrl:"TIPTELNOM",prop:"Title"},{av:"AV31GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV32GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms["DDO_TIPTELNOM.ONOPTIONCLICKED"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vTIPTELNOMOPERATOR"},{av:"AV39TipTelNomOperator",fld:"vTIPTELNOMOPERATOR",pic:"ZZZ9"},{av:"AV40TipTelNom",fld:"vTIPTELNOM",pic:""},{av:"AV13OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV14OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"AV34ddo_TipTelIdTitleControlIdToReplace",fld:"vDDO_TIPTELIDTITLECONTROLIDTOREPLACE",pic:""},{av:"AV36ddo_TipTelNomTitleControlIdToReplace",fld:"vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE",pic:""},{av:"this.DDO_TIPTELNOMContainer.ActiveEventKey",ctrl:"DDO_TIPTELNOM",prop:"ActiveEventKey"}],[{av:"AV13OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV14OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"this.DDO_TIPTELNOMContainer.SortedStatus",ctrl:"DDO_TIPTELNOM",prop:"SortedStatus"},{av:"this.DDO_TIPTELIDContainer.SortedStatus",ctrl:"DDO_TIPTELID",prop:"SortedStatus"},{av:"AV33TipTelIdTitleFilterData",fld:"vTIPTELIDTITLEFILTERDATA",pic:""},{av:"AV35TipTelNomTitleFilterData",fld:"vTIPTELNOMTITLEFILTERDATA",pic:""},{ctrl:"TIPTELID",prop:"Titleformat",hsh:!0},{av:'gx.fn.getCtrlProperty("TIPTELID","Title")',ctrl:"TIPTELID",prop:"Title"},{ctrl:"TIPTELNOM",prop:"Titleformat",hsh:!0},{av:'gx.fn.getCtrlProperty("TIPTELNOM","Title")',ctrl:"TIPTELNOM",prop:"Title"},{av:"AV31GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV32GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV28Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A125TipTelId",fld:"TIPTELID",pic:"ZZZZZZZZ9",hsh:!0},{av:"A515TipTelNom",fld:"TIPTELNOM",pic:"",hsh:!0}],[{av:"AV7InOutTipTelId",fld:"vINOUTTIPTELID",pic:"ZZZZZZZZ9"},{av:"AV8InOutTipTelNom",fld:"vINOUTTIPTELNOM",pic:""}]];this.EvtParms["'DOCLEANFILTERS'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vTIPTELNOMOPERATOR"},{av:"AV39TipTelNomOperator",fld:"vTIPTELNOMOPERATOR",pic:"ZZZ9"},{av:"AV40TipTelNom",fld:"vTIPTELNOM",pic:""},{av:"AV13OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV14OrderedDsc",fld:"vORDEREDDSC",pic:""},{av:"AV34ddo_TipTelIdTitleControlIdToReplace",fld:"vDDO_TIPTELIDTITLECONTROLIDTOREPLACE",pic:""},{av:"AV36ddo_TipTelNomTitleControlIdToReplace",fld:"vDDO_TIPTELNOMTITLECONTROLIDTOREPLACE",pic:""}],[{ctrl:"vTIPTELNOMOPERATOR"},{av:"AV39TipTelNomOperator",fld:"vTIPTELNOMOPERATOR",pic:"ZZZ9"},{av:"AV40TipTelNom",fld:"vTIPTELNOM",pic:""},{av:"AV33TipTelIdTitleFilterData",fld:"vTIPTELIDTITLEFILTERDATA",pic:""},{av:"AV35TipTelNomTitleFilterData",fld:"vTIPTELNOMTITLEFILTERDATA",pic:""},{ctrl:"TIPTELID",prop:"Titleformat",hsh:!0},{av:'gx.fn.getCtrlProperty("TIPTELID","Title")',ctrl:"TIPTELID",prop:"Title"},{ctrl:"TIPTELNOM",prop:"Titleformat",hsh:!0},{av:'gx.fn.getCtrlProperty("TIPTELNOM","Title")',ctrl:"TIPTELNOM",prop:"Title"},{av:"AV31GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV32GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV7InOutTipTelId","vINOUTTIPTELID",0,"int",9,0);this.setVCMap("AV8InOutTipTelNom","vINOUTTIPTELNOM",0,"char",20,0);f.addRefreshingVar(this.GXValidFnc[28]);f.addRefreshingVar(this.GXValidFnc[31]);f.addRefreshingVar(this.GXValidFnc[52]);f.addRefreshingVar(this.GXValidFnc[53]);f.addRefreshingVar(this.GXValidFnc[48]);f.addRefreshingVar(this.GXValidFnc[50]);f.addRefreshingParm(this.GXValidFnc[28]);f.addRefreshingParm(this.GXValidFnc[31]);f.addRefreshingParm(this.GXValidFnc[52]);f.addRefreshingParm(this.GXValidFnc[53]);f.addRefreshingParm(this.GXValidFnc[48]);f.addRefreshingParm(this.GXValidFnc[50]);this.Initialize()});gx.wi(function(){gx.createParentObj(prompttipotelefono)})