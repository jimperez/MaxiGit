/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:57:48.47
*/
gx.evt.autoSkip=!1;gx.define("gamwwconnections",!1,function(){var t,r,u,i,n;this.ServerClass="gamwwconnections";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV126Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV120IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV121IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV122IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE");this.AV75IsAuthorized_BtnGenFile=gx.fn.getControlValue("vISAUTHORIZED_BTNGENFILE");this.AV77IsAuthorized_Name=gx.fn.getControlValue("vISAUTHORIZED_NAME");this.AV88GridState=gx.fn.getControlValue("vGRIDSTATE");this.AV126Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV120IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV121IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV122IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE");this.AV75IsAuthorized_BtnGenFile=gx.fn.getControlValue("vISAUTHORIZED_BTNGENFILE");this.AV77IsAuthorized_Name=gx.fn.getControlValue("vISAUTHORIZED_NAME")};this.s152_client=function(){this.AV72FilName=""};this.e11t31_client=function(){return this.clearMessages(),this.call("gamconnectionentry.aspx",["INS",""]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e13t32_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e14t32_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e12t32_client=function(){return this.executeServerEvent("DDO_MANAGEFILTERS.ONOPTIONCLICKED",!1,null,!0,!0)};this.e18t32_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e19t32_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,26,29,30,31,32,33,35,36,37,38,39,41,42,43,44,45,46,47,48,50,51,52,53];this.GXLastCtrlId=53;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",40,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"gamwwconnections",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit("Display",41,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit("Update",42,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit("Delete",43,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit("Btngenfile",44,"vBTNGENFILE","","File","BtnGenFile","char",0,"px",20,20,"left",null,[],"Btngenfile","BtnGenFile",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn hidden-xs");r.addSingleLineEdit("Name",45,"vNAME","Name","","Name","char",410,"px",254,80,"left",null,[],"Name","Name",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit("Username",46,"vUSERNAME","User Name","","UserName","char",410,"px",254,80,"left",null,[],"Username","UserName",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");u=this.DVPANEL_TABLEHEADERContainer;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("Width","Width","100%","str");u.setProp("Height","Height","100","str");u.setProp("AutoWidth","Autowidth",!1,"bool");u.setProp("AutoHeight","Autoheight",!0,"bool");u.setProp("Cls","Cls","PanelFilled_BaseColor","str");u.setProp("ShowHeader","Showheader",!0,"bool");u.setProp("Title","Title","Opciones","str");u.setProp("Collapsible","Collapsible",!0,"bool");u.setProp("Collapsed","Collapsed",!1,"bool");u.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");u.setProp("IconPosition","Iconposition","Right","str");u.setProp("AutoScroll","Autoscroll",!1,"bool");u.setProp("Visible","Visible",!0,"bool");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,49,31,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");i=this.GRIDPAGINATIONBARContainer;i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Class","Class","PaginationBar","str");i.setProp("ShowFirst","Showfirst",!1,"bool");i.setProp("ShowPrevious","Showprevious",!0,"bool");i.setProp("ShowNext","Shownext",!0,"bool");i.setProp("ShowLast","Showlast",!1,"bool");i.setProp("PagesToShow","Pagestoshow",5,"num");i.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");i.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");i.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");i.setProp("SelectedPage","Selectedpage","","char");i.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");i.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");i.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");i.setProp("First","First","First","str");i.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");i.setProp("Next","Next","WWP_PagingNextCaption","str");i.setProp("Last","Last","Last","str");i.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");i.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");i.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");i.addV2CFunction("AV115GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");i.addC2VFunction(function(n){n.ParentObject.AV115GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV115GridCurrentPage)});i.addV2CFunction("AV73GridPageCount","vGRIDPAGECOUNT","SetPageCount");i.addC2VFunction(function(n){n.ParentObject.AV73GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV73GridPageCount)});i.setProp("RecordCount","Recordcount","","str");i.setProp("Page","Page","","str");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});i.addEventHandler("ChangePage",this.e13t32_client);i.addEventHandler("ChangeRowsPerPage",this.e14t32_client);this.setUserControl(i);this.DDO_MANAGEFILTERSContainer=gx.uc.getNew(this,24,0,"BootstrapDropDownOptions","DDO_MANAGEFILTERSContainer","Ddo_managefilters","DDO_MANAGEFILTERS");n=this.DDO_MANAGEFILTERSContainer;n.setProp("Class","Class","","char");n.setProp("IconType","Icontype","Image","str");n.setDynProp("Icon","Icon","","str");n.setProp("Caption","Caption","","str");n.setProp("Tooltip","Tooltip","WWP_ManageFiltersTooltip","str");n.setProp("Cls","Cls","ManageFilters","str");n.setProp("ActiveEventKey","Activeeventkey","","char");n.setProp("FilteredText_set","Filteredtext_set","","char");n.setProp("FilteredText_get","Filteredtext_get","","char");n.setProp("FilteredTextTo_set","Filteredtextto_set","","char");n.setProp("FilteredTextTo_get","Filteredtextto_get","","char");n.setProp("SelectedValue_set","Selectedvalue_set","","char");n.setProp("SelectedValue_get","Selectedvalue_get","","char");n.setProp("SelectedText_set","Selectedtext_set","","char");n.setProp("SelectedText_get","Selectedtext_get","","char");n.setProp("GAMOAuthToken","Gamoauthtoken","","char");n.setProp("TitleControlAlign","Titlecontrolalign","Automatic","str");n.setProp("DropDownOptionsType","Dropdownoptionstype","Regular","str");n.setProp("Enabled","Enabled",!0,"bool");n.setProp("Visible","Visible",!0,"bool");n.setProp("TitleControlIdToReplace","Titlecontrolidtoreplace","","str");n.setProp("IncludeSortASC","Includesortasc",!1,"boolean");n.setProp("IncludeSortDSC","Includesortdsc",!1,"boolean");n.setProp("SortedStatus","Sortedstatus","","char");n.setProp("IncludeFilter","Includefilter",!1,"boolean");n.setProp("FilterType","Filtertype","","char");n.setProp("FilterIsRange","Filterisrange",!1,"boolean");n.setProp("IncludeDataList","Includedatalist",!1,"boolean");n.setProp("DataListType","Datalisttype","","char");n.setProp("AllowMultipleSelection","Allowmultipleselection",!1,"boolean");n.setProp("DataListFixedValues","Datalistfixedvalues","","char");n.setProp("DataListProc","Datalistproc","","char");n.setProp("DataListProcParametersPrefix","Datalistprocparametersprefix","","char");n.setProp("DataListUpdateMinimumCharacters","Datalistupdateminimumcharacters","","int");n.setProp("FixedFilters","Fixedfilters","","char");n.setProp("SelectedFixedFilter","Selectedfixedfilter","","char");n.setProp("ColumnsSelectorValues","Columnsselectorvalues","","char");n.setProp("IncludeOnlySelectedOption","Includeonlyselectedoption",!1,"boolean");n.setProp("IncludeSelectAllOption","Includeselectalloption",!1,"boolean");n.setProp("CategoryFilteredBehaviour","Categoryfilteredbehaviour","","char");n.setProp("EmptyItem","Emptyitem",!1,"boolean");n.setProp("SortASC","Sortasc","","char");n.setProp("SortDSC","Sortdsc","","char");n.setProp("LoadingData","Loadingdata","","char");n.setProp("CleanFilter","Cleanfilter","","char");n.setProp("RangeFilterFrom","Rangefilterfrom","","char");n.setProp("RangeFilterTo","Rangefilterto","","char");n.setProp("NoResultsFound","Noresultsfound","","char");n.setProp("SearchButtonText","Searchbuttontext","","char");n.setProp("UpdateButtonText","Updatebuttontext","","char");n.setProp("EmptyItemText","Emptyitemtext","","char");n.setProp("OnlySelectedValues","Onlyselectedvalues","","char");n.setProp("SelectAllText","Selectalltext","","char");n.setProp("MultipleValuesSeparator","Multiplevaluesseparator","","char");n.DropDownOptionsTitleSettingsIcons="";n.addV2CFunction("AV112ManageFiltersData","vMANAGEFILTERSDATA","SetDropDownOptionsData");n.addC2VFunction(function(n){n.ParentObject.AV112ManageFiltersData=n.GetDropDownOptionsData();gx.fn.setControlValue("vMANAGEFILTERSDATA",n.ParentObject.AV112ManageFiltersData)});n.setC2ShowFunction(function(n){n.show()});n.addEventHandler("OnOptionClicked",this.e12t32_client);this.setUserControl(n);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEMAIN",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[11]={id:11,fld:"TABLEHEADER",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"TABLEACTIONS",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,fld:"BTNINSERT",grid:0,evt:"e11t31_client"};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"TABLERIGHTHEADER",grid:0};t[26]={id:26,fld:"TABLEFILTERS",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,lvl:0,type:"char",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFILNAME",gxz:"ZV72FilName",gxold:"OV72FilName",gxvar:"AV72FilName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV72FilName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV72FilName=n)},v2c:function(){gx.fn.setControlValue("vFILNAME",gx.O.AV72FilName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV72FilName=this.val())},val:function(){return gx.fn.getControlValue("vFILNAME")},nac:gx.falseFn};this.declareDomainHdlr(31,function(){});t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"",grid:0};t[41]={id:41,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV118Display",gxold:"OV118Display",gxvar:"AV118Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV118Display=n)},v2z:function(n){n!==undefined&&(gx.O.ZV118Display=n)},v2c:function(n){gx.fn.setGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(40),gx.O.AV118Display,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV118Display=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};t[42]={id:42,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV119Update",gxold:"OV119Update",gxvar:"AV119Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV119Update=n)},v2z:function(n){n!==undefined&&(gx.O.ZV119Update=n)},v2c:function(n){gx.fn.setGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(40),gx.O.AV119Update,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV119Update=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};t[43]={id:43,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV68Delete",gxold:"OV68Delete",gxvar:"AV68Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV68Delete=n)},v2z:function(n){n!==undefined&&(gx.O.ZV68Delete=n)},v2c:function(n){gx.fn.setGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(40),gx.O.AV68Delete,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV68Delete=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};t[44]={id:44,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vBTNGENFILE",gxz:"ZV70BtnGenFile",gxold:"OV70BtnGenFile",gxvar:"AV70BtnGenFile",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV70BtnGenFile=n)},v2z:function(n){n!==undefined&&(gx.O.ZV70BtnGenFile=n)},v2c:function(n){gx.fn.setGridControlValue("vBTNGENFILE",n||gx.fn.currentGridRowImpl(40),gx.O.AV70BtnGenFile,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV70BtnGenFile=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vBTNGENFILE",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};t[45]={id:45,lvl:2,type:"char",len:254,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV8Name",gxold:"OV8Name",gxvar:"AV8Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV8Name=n)},v2z:function(n){n!==undefined&&(gx.O.ZV8Name=n)},v2c:function(n){gx.fn.setGridControlValue("vNAME",n||gx.fn.currentGridRowImpl(40),gx.O.AV8Name,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV8Name=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vNAME",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};t[46]={id:46,lvl:2,type:"char",len:254,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV11UserName",gxold:"OV11UserName",gxvar:"AV11UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV11UserName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV11UserName=n)},v2c:function(n){gx.fn.setGridControlValue("vUSERNAME",n||gx.fn.currentGridRowImpl(40),gx.O.AV11UserName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV11UserName=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUSERNAME",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};t[47]={id:47,fld:"",grid:0};t[48]={id:48,fld:"",grid:0};t[50]={id:50,fld:"",grid:0};t[51]={id:51,fld:"",grid:0};t[52]={id:52,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[53]={id:53,lvl:0,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMANAGEFILTERSEXECUTIONSTEP",gxz:"ZV108ManageFiltersExecutionStep",gxold:"OV108ManageFiltersExecutionStep",gxvar:"AV108ManageFiltersExecutionStep",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV108ManageFiltersExecutionStep=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV108ManageFiltersExecutionStep=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vMANAGEFILTERSEXECUTIONSTEP",gx.O.AV108ManageFiltersExecutionStep,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV108ManageFiltersExecutionStep=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",".")},nac:gx.falseFn};this.AV72FilName="";this.ZV72FilName="";this.OV72FilName="";this.ZV118Display="";this.OV118Display="";this.ZV119Update="";this.OV119Update="";this.ZV68Delete="";this.OV68Delete="";this.ZV70BtnGenFile="";this.OV70BtnGenFile="";this.ZV8Name="";this.OV8Name="";this.ZV11UserName="";this.OV11UserName="";this.AV108ManageFiltersExecutionStep=0;this.ZV108ManageFiltersExecutionStep=0;this.OV108ManageFiltersExecutionStep=0;this.AV112ManageFiltersData=[];this.AV72FilName="";this.AV115GridCurrentPage=0;this.AV108ManageFiltersExecutionStep=0;this.AV118Display="";this.AV119Update="";this.AV68Delete="";this.AV70BtnGenFile="";this.AV8Name="";this.AV11UserName="";this.AV126Pgmname="";this.AV120IsAuthorized_Display=!1;this.AV121IsAuthorized_Update=!1;this.AV122IsAuthorized_Delete=!1;this.AV75IsAuthorized_BtnGenFile=!1;this.AV77IsAuthorized_Name=!1;this.AV88GridState={CurrentPage:0,OrderedBy:0,OrderedDsc:!1,HidingSearch:0,PageSize:"",FilterValues:[],DynamicFilters:[]};this.Events={e13t32_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e14t32_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e12t32_client:["DDO_MANAGEFILTERS.ONOPTIONCLICKED",!0],e18t32_client:["ENTER",!0],e19t32_client:["CANCEL",!0],e11t31_client:["'DOINSERT'",!1]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:'gx.fn.getCtrlProperty("vBTNGENFILE","Title")',ctrl:"vBTNGENFILE",prop:"Title"},{av:"AV108ManageFiltersExecutionStep",fld:"vMANAGEFILTERSEXECUTIONSTEP",pic:"9"},{ctrl:"GRID",prop:"Rows"},{av:"AV126Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV72FilName",fld:"vFILNAME",pic:""},{av:"AV120IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV121IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV122IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"AV75IsAuthorized_BtnGenFile",fld:"vISAUTHORIZED_BTNGENFILE",pic:"",hsh:!0},{av:"AV77IsAuthorized_Name",fld:"vISAUTHORIZED_NAME",pic:"",hsh:!0}],[{av:"AV108ManageFiltersExecutionStep",fld:"vMANAGEFILTERSEXECUTIONSTEP",pic:"9"},{av:"AV115GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV120IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:"AV121IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:"AV122IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{av:"AV75IsAuthorized_BtnGenFile",fld:"vISAUTHORIZED_BTNGENFILE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vBTNGENFILE","Visible")',ctrl:"vBTNGENFILE",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"},{av:"AV112ManageFiltersData",fld:"vMANAGEFILTERSDATA",pic:""},{av:"AV88GridState",fld:"vGRIDSTATE",pic:""}]];this.EvtParms.START=[[{av:"AV126Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV88GridState",fld:"vGRIDSTATE",pic:""}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("vMANAGEFILTERSEXECUTIONSTEP","Visible")',ctrl:"vMANAGEFILTERSEXECUTIONSTEP",prop:"Visible"},{av:"AV77IsAuthorized_Name",fld:"vISAUTHORIZED_NAME",pic:"",hsh:!0},{ctrl:"FORM",prop:"Caption"},{av:"this.DDO_MANAGEFILTERSContainer.Icon",ctrl:"DDO_MANAGEFILTERS",prop:"Icon"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:'gx.fn.getCtrlProperty("vBTNGENFILE","Title")',ctrl:"vBTNGENFILE",prop:"Title"},{av:"AV112ManageFiltersData",fld:"vMANAGEFILTERSDATA",pic:""},{av:"AV88GridState",fld:"vGRIDSTATE",pic:""},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV108ManageFiltersExecutionStep",fld:"vMANAGEFILTERSEXECUTIONSTEP",pic:"9"},{av:"AV126Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV72FilName",fld:"vFILNAME",pic:""},{av:"AV120IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV121IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV122IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"AV75IsAuthorized_BtnGenFile",fld:"vISAUTHORIZED_BTNGENFILE",pic:"",hsh:!0}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV108ManageFiltersExecutionStep",fld:"vMANAGEFILTERSEXECUTIONSTEP",pic:"9"},{av:"AV126Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV72FilName",fld:"vFILNAME",pic:""},{av:'gx.fn.getCtrlProperty("vBTNGENFILE","Title")',ctrl:"vBTNGENFILE",prop:"Title"},{av:"AV120IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV121IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV122IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"AV75IsAuthorized_BtnGenFile",fld:"vISAUTHORIZED_BTNGENFILE",pic:"",hsh:!0},{av:"AV77IsAuthorized_Name",fld:"vISAUTHORIZED_NAME",pic:"",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV108ManageFiltersExecutionStep",fld:"vMANAGEFILTERSEXECUTIONSTEP",pic:"9"},{av:"AV126Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV72FilName",fld:"vFILNAME",pic:""},{av:'gx.fn.getCtrlProperty("vBTNGENFILE","Title")',ctrl:"vBTNGENFILE",prop:"Title"},{av:"AV120IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV121IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV122IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"AV75IsAuthorized_BtnGenFile",fld:"vISAUTHORIZED_BTNGENFILE",pic:"",hsh:!0},{av:"AV77IsAuthorized_Name",fld:"vISAUTHORIZED_NAME",pic:"",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV72FilName",fld:"vFILNAME",pic:""},{av:"AV120IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV121IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV122IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"AV75IsAuthorized_BtnGenFile",fld:"vISAUTHORIZED_BTNGENFILE",pic:"",hsh:!0},{av:"AV77IsAuthorized_Name",fld:"vISAUTHORIZED_NAME",pic:"",hsh:!0}],[{av:"AV73GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV11UserName",fld:"vUSERNAME",pic:""},{av:"AV8Name",fld:"vNAME",pic:""},{av:"AV118Display",fld:"vDISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:"vDISPLAY",prop:"Link"},{av:"AV119Update",fld:"vUPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:"vUPDATE",prop:"Link"},{av:"AV68Delete",fld:"vDELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:"vDELETE",prop:"Link"},{av:"AV70BtnGenFile",fld:"vBTNGENFILE",pic:""},{av:'gx.fn.getCtrlProperty("vBTNGENFILE","Link")',ctrl:"vBTNGENFILE",prop:"Link"},{av:'gx.fn.getCtrlProperty("vNAME","Link")',ctrl:"vNAME",prop:"Link"}]];this.EvtParms["DDO_MANAGEFILTERS.ONOPTIONCLICKED"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV108ManageFiltersExecutionStep",fld:"vMANAGEFILTERSEXECUTIONSTEP",pic:"9"},{av:"AV126Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV72FilName",fld:"vFILNAME",pic:""},{av:'gx.fn.getCtrlProperty("vBTNGENFILE","Title")',ctrl:"vBTNGENFILE",prop:"Title"},{av:"AV120IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV121IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV122IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"AV75IsAuthorized_BtnGenFile",fld:"vISAUTHORIZED_BTNGENFILE",pic:"",hsh:!0},{av:"AV77IsAuthorized_Name",fld:"vISAUTHORIZED_NAME",pic:"",hsh:!0},{av:"this.DDO_MANAGEFILTERSContainer.ActiveEventKey",ctrl:"DDO_MANAGEFILTERS",prop:"ActiveEventKey"},{av:"AV88GridState",fld:"vGRIDSTATE",pic:""}],[{av:"AV108ManageFiltersExecutionStep",fld:"vMANAGEFILTERSEXECUTIONSTEP",pic:"9"},{av:"AV88GridState",fld:"vGRIDSTATE",pic:""},{av:"AV72FilName",fld:"vFILNAME",pic:""},{av:"AV115GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV120IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:"AV121IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:"AV122IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{av:"AV75IsAuthorized_BtnGenFile",fld:"vISAUTHORIZED_BTNGENFILE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vBTNGENFILE","Visible")',ctrl:"vBTNGENFILE",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"},{av:"AV112ManageFiltersData",fld:"vMANAGEFILTERSDATA",pic:""}]];this.EvtParms["'DOINSERT'"]=[[],[]];this.setVCMap("AV126Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV120IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV121IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV122IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV75IsAuthorized_BtnGenFile","vISAUTHORIZED_BTNGENFILE",0,"boolean",4,0);this.setVCMap("AV77IsAuthorized_Name","vISAUTHORIZED_NAME",0,"boolean",4,0);this.setVCMap("AV88GridState","vGRIDSTATE",0,"WWPBaseObjectsWWPGridState",0,0);this.setVCMap("AV126Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV120IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV121IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV122IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV75IsAuthorized_BtnGenFile","vISAUTHORIZED_BTNGENFILE",0,"boolean",4,0);this.setVCMap("AV77IsAuthorized_Name","vISAUTHORIZED_NAME",0,"boolean",4,0);this.setVCMap("AV126Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV120IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV121IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV122IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV75IsAuthorized_BtnGenFile","vISAUTHORIZED_BTNGENFILE",0,"boolean",4,0);this.setVCMap("AV77IsAuthorized_Name","vISAUTHORIZED_NAME",0,"boolean",4,0);r.addRefreshingVar(this.GXValidFnc[53]);r.addRefreshingVar({rfrVar:"AV126Pgmname"});r.addRefreshingVar(this.GXValidFnc[31]);r.addRefreshingVar({rfrVar:"AV70BtnGenFile",rfrProp:"Title",gxAttId:"Btngenfile"});r.addRefreshingVar({rfrVar:"AV120IsAuthorized_Display"});r.addRefreshingVar({rfrVar:"AV121IsAuthorized_Update"});r.addRefreshingVar({rfrVar:"AV122IsAuthorized_Delete"});r.addRefreshingVar({rfrVar:"AV75IsAuthorized_BtnGenFile"});r.addRefreshingVar({rfrVar:"AV77IsAuthorized_Name"});r.addRefreshingParm(this.GXValidFnc[53]);r.addRefreshingParm({rfrVar:"AV126Pgmname"});r.addRefreshingParm(this.GXValidFnc[31]);r.addRefreshingParm({rfrVar:"AV70BtnGenFile",rfrProp:"Title",gxAttId:"Btngenfile"});r.addRefreshingParm({rfrVar:"AV120IsAuthorized_Display"});r.addRefreshingParm({rfrVar:"AV121IsAuthorized_Update"});r.addRefreshingParm({rfrVar:"AV122IsAuthorized_Delete"});r.addRefreshingParm({rfrVar:"AV75IsAuthorized_BtnGenFile"});r.addRefreshingParm({rfrVar:"AV77IsAuthorized_Name"});this.Initialize()});gx.wi(function(){gx.createParentObj(gamwwconnections)})