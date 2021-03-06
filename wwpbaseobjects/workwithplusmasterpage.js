/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:48:9.67
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.workwithplusmasterpage', false, function () {
   this.ServerClass =  "wwpbaseobjects.workwithplusmasterpage" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.setObjectType("web");
   this.IsMasterPage=true;
   this.hasEnterEvent = false;
   this.skipOnEnter = true;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
   };
   this.e150l1_client=function()
   {
      this.clearMessages();
      this.UCMENU_MPAGEContainer.CollapseExpand() ;
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e110l2_client=function()
   {
      return this.executeServerEvent("DDO_ADMINAG_MPAGE.ONOPTIONCLICKED_MPAGE", false, null, true, true);
   };
   this.e160l2_client=function()
   {
      return this.executeServerEvent("ENTER_MPAGE", true, null, false, false);
   };
   this.e170l2_client=function()
   {
      return this.executeServerEvent("CANCEL_MPAGE", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,15,17,18,19,22,24,25,26,30,31,32,33,34,36,37,38,39,40,42,43,44,45,46,47,48,49,51,52,54,55];
   this.GXLastCtrlId =55;
   this.UCMENU_MPAGEContainer = gx.uc.getNew(this, 35, 0, "BootstrapSidebarMenu", "UCMENU_MPAGEContainer", "Ucmenu", "UCMENU_MPAGE");
   var UCMENU_MPAGEContainer = this.UCMENU_MPAGEContainer;
   UCMENU_MPAGEContainer.setProp("Class", "Class", "", "char");
   UCMENU_MPAGEContainer.setProp("Enabled", "Enabled", true, "boolean");
   UCMENU_MPAGEContainer.setProp("SelectedItem", "Selecteditem", "", "char");
   UCMENU_MPAGEContainer.setProp("SearchServiceUrl", "Searchserviceurl", "xxx", "str");
   UCMENU_MPAGEContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   UCMENU_MPAGEContainer.setProp("SearchMinChars", "Searchminchars", 0, "num");
   UCMENU_MPAGEContainer.setProp("SearchHelperDescription", "Searchhelperdescription", "WWP_SearchMenuOption", "str");
   UCMENU_MPAGEContainer.setProp("SidebarMainClass", "Sidebarmainclass", "page-sidebar sidebar-fixed sidebar-back-image", "str");
   UCMENU_MPAGEContainer.setProp("HeaderClass", "Headerclass", "sidebar-header-wrapper", "str");
   UCMENU_MPAGEContainer.setProp("SearchInputClass", "Searchinputclass", "searchinput", "str");
   UCMENU_MPAGEContainer.setProp("SearchIconClass", "Searchiconclass", "searchicon fa fa-search", "str");
   UCMENU_MPAGEContainer.setProp("SearchHelperClass", "Searchhelperclass", "searchhelper", "str");
   UCMENU_MPAGEContainer.setProp("SidebarMenuClass", "Sidebarmenuclass", "nav sidebar-menu", "str");
   UCMENU_MPAGEContainer.setProp("ScrollWidth", "Scrollwidth", 5, "num");
   UCMENU_MPAGEContainer.setProp("ScrollAlwaysVisible", "Scrollalwaysvisible", true, "bool");
   UCMENU_MPAGEContainer.setProp("HideScrollInCompactMenu", "Hidescrollincompactmenu", false, "bool");
   UCMENU_MPAGEContainer.setProp("FirstLevelIsGrouping", "Firstlevelisgrouping", false, "bool");
   UCMENU_MPAGEContainer.addV2CFunction('AV8DVelop_Menu', "vDVELOP_MENU_MPAGE", 'SetSidebarMenuOptionsDataOptionsData');
   UCMENU_MPAGEContainer.addC2VFunction(function(UC) { UC.ParentObject.AV8DVelop_Menu=UC.GetSidebarMenuOptionsDataOptionsData();gx.fn.setControlValue("vDVELOP_MENU_MPAGE",UC.ParentObject.AV8DVelop_Menu); });
   UCMENU_MPAGEContainer.addV2CFunction('AV33DVelop_Menu_UserData', "vDVELOP_MENU_USERDATA_MPAGE", 'SetSidebarMenuUserData');
   UCMENU_MPAGEContainer.addC2VFunction(function(UC) { UC.ParentObject.AV33DVelop_Menu_UserData=UC.GetSidebarMenuUserData();gx.fn.setControlValue("vDVELOP_MENU_USERDATA_MPAGE",UC.ParentObject.AV33DVelop_Menu_UserData); });
   UCMENU_MPAGEContainer.setProp("AllMenuItemsVisibleAtLoad", "Allmenuitemsvisibleatload", false, "bool");
   UCMENU_MPAGEContainer.setProp("Visible", "Visible", true, "bool");
   UCMENU_MPAGEContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(UCMENU_MPAGEContainer);
   this.UCMESSAGE_MPAGEContainer = gx.uc.getNew(this, 50, 0, "DVelop_DVMessage", "UCMESSAGE_MPAGEContainer", "Ucmessage", "UCMESSAGE_MPAGE");
   var UCMESSAGE_MPAGEContainer = this.UCMESSAGE_MPAGEContainer;
   UCMESSAGE_MPAGEContainer.setProp("Class", "Class", "", "char");
   UCMESSAGE_MPAGEContainer.setProp("Enabled", "Enabled", true, "boolean");
   UCMESSAGE_MPAGEContainer.setProp("Width", "Width", "300", "str");
   UCMESSAGE_MPAGEContainer.setProp("MinHeight", "Minheight", "16", "str");
   UCMESSAGE_MPAGEContainer.setProp("StylingType", "Stylingtype", "fontawesome", "str");
   UCMESSAGE_MPAGEContainer.setProp("DefaultMessageType", "Defaultmessagetype", "notice", "str");
   UCMESSAGE_MPAGEContainer.setProp("TitleEscape", "Titleescape", false, "bool");
   UCMESSAGE_MPAGEContainer.setProp("TextEscape", "Textescape", false, "bool");
   UCMESSAGE_MPAGEContainer.setProp("ChangeNewLinesToBRs", "Changenewlinestobrs", true, "bool");
   UCMESSAGE_MPAGEContainer.setProp("Hide", "Hide", true, "bool");
   UCMESSAGE_MPAGEContainer.setProp("DelayUntilHide", "Delayuntilhide", 8000, "num");
   UCMESSAGE_MPAGEContainer.setProp("MouseHideReset", "Mousehidereset", true, "bool");
   UCMESSAGE_MPAGEContainer.setProp("MessageAdditionalClasses", "Messageadditionalclasses", "", "str");
   UCMESSAGE_MPAGEContainer.setProp("MessageCornerClass", "Messagecornerclass", "", "str");
   UCMESSAGE_MPAGEContainer.setProp("Shadow", "Shadow", true, "bool");
   UCMESSAGE_MPAGEContainer.setProp("Opacity", "Opacity", "1", "str");
   UCMESSAGE_MPAGEContainer.setProp("StackVerticalFirstPos", "Stackverticalfirstpos", 15, "num");
   UCMESSAGE_MPAGEContainer.setProp("StackHorizontalFirstPos", "Stackhorizontalfirstpos", 15, "num");
   UCMESSAGE_MPAGEContainer.setProp("StackVerticalSpacing", "Stackverticalspacing", 15, "num");
   UCMESSAGE_MPAGEContainer.setProp("StackHorizontalSpacing", "Stackhorizontalspacing", 15, "num");
   UCMESSAGE_MPAGEContainer.setProp("EffectIn", "Effectin", "fade", "str");
   UCMESSAGE_MPAGEContainer.setProp("EffectOut", "Effectout", "fade", "str");
   UCMESSAGE_MPAGEContainer.setProp("AnimationSpeed", "Animationspeed", 600, "num");
   UCMESSAGE_MPAGEContainer.setProp("StartPosition", "Startposition", "TopRight", "str");
   UCMESSAGE_MPAGEContainer.setProp("NextMessagePosition", "Nextmessageposition", "down", "str");
   UCMESSAGE_MPAGEContainer.setProp("Closer", "Closer", true, "bool");
   UCMESSAGE_MPAGEContainer.setProp("CloserHover", "Closerhover", true, "bool");
   UCMESSAGE_MPAGEContainer.setProp("Sticker", "Sticker", false, "bool");
   UCMESSAGE_MPAGEContainer.setProp("StickerHover", "Stickerhover", true, "bool");
   UCMESSAGE_MPAGEContainer.setProp("LabelCloseButton", "Labelclosebutton", "Close", "str");
   UCMESSAGE_MPAGEContainer.setProp("LabelStickButton", "Labelstickbutton", "Stick", "str");
   UCMESSAGE_MPAGEContainer.setProp("showEvenOnNonblock", "Showevenonnonblock", false, "bool");
   UCMESSAGE_MPAGEContainer.setProp("NonBlock", "Nonblock", false, "bool");
   UCMESSAGE_MPAGEContainer.setProp("NonBlockOpacity", "Nonblockopacity", ".2", "str");
   UCMESSAGE_MPAGEContainer.setProp("EnableHistory", "Enablehistory", true, "bool");
   UCMESSAGE_MPAGEContainer.setProp("Menu", "Menu", false, "bool");
   UCMESSAGE_MPAGEContainer.setProp("FixedMenu", "Fixedmenu", true, "bool");
   UCMESSAGE_MPAGEContainer.setProp("MaxOnScreen", "Maxonscreen", "Infinity", "str");
   UCMESSAGE_MPAGEContainer.setProp("LabelRedisplay", "Labelredisplay", "Redisplay", "str");
   UCMESSAGE_MPAGEContainer.setProp("LabelAll", "Labelall", "All", "str");
   UCMESSAGE_MPAGEContainer.setProp("LabelLast", "Labellast", "Last", "str");
   UCMESSAGE_MPAGEContainer.setProp("Visible", "Visible", true, "bool");
   UCMESSAGE_MPAGEContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(UCMESSAGE_MPAGEContainer);
   this.UCTOOLTIP_MPAGEContainer = gx.uc.getNew(this, 53, 0, "BootstrapTooltip", "UCTOOLTIP_MPAGEContainer", "Uctooltip", "UCTOOLTIP_MPAGE");
   var UCTOOLTIP_MPAGEContainer = this.UCTOOLTIP_MPAGEContainer;
   UCTOOLTIP_MPAGEContainer.setProp("Class", "Class", "", "char");
   UCTOOLTIP_MPAGEContainer.setProp("Enabled", "Enabled", true, "boolean");
   UCTOOLTIP_MPAGEContainer.setProp("ClassSelector", "Classselector", "BootstrapTooltip", "str");
   UCTOOLTIP_MPAGEContainer.setProp("DefaultPosition", "Defaultposition", "bottom", "str");
   UCTOOLTIP_MPAGEContainer.setProp("LabelsShowDelay", "Labelsshowdelay", 300, "num");
   UCTOOLTIP_MPAGEContainer.setProp("ButtonsShowDelay", "Buttonsshowdelay", 300, "num");
   UCTOOLTIP_MPAGEContainer.setProp("InputsShowDelay", "Inputsshowdelay", 300, "num");
   UCTOOLTIP_MPAGEContainer.setProp("ImagesShowDelay", "Imagesshowdelay", 0, "num");
   UCTOOLTIP_MPAGEContainer.setProp("HideDelay", "Hidedelay", 0, "num");
   UCTOOLTIP_MPAGEContainer.setProp("Visible", "Visible", true, "bool");
   UCTOOLTIP_MPAGEContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(UCTOOLTIP_MPAGEContainer);
   this.WWPUTILITIES_MPAGEContainer = gx.uc.getNew(this, 56, 0, "DVelop_WorkWithPlusUtilities", "WWPUTILITIES_MPAGEContainer", "Wwputilities", "WWPUTILITIES_MPAGE");
   var WWPUTILITIES_MPAGEContainer = this.WWPUTILITIES_MPAGEContainer;
   WWPUTILITIES_MPAGEContainer.setProp("Class", "Class", "", "char");
   WWPUTILITIES_MPAGEContainer.setProp("Enabled", "Enabled", true, "boolean");
   WWPUTILITIES_MPAGEContainer.setProp("EnableAutoUpdateFromDocumentTitle", "Enableautoupdatefromdocumenttitle", false, "bool");
   WWPUTILITIES_MPAGEContainer.setProp("EnableFixObjectFitCover", "Enablefixobjectfitcover", true, "bool");
   WWPUTILITIES_MPAGEContainer.setProp("EnableFloatingLabels", "Enablefloatinglabels", false, "bool");
   WWPUTILITIES_MPAGEContainer.setProp("EnableConvertComboToBootstrapSelect", "Enableconvertcombotobootstrapselect", true, "bool");
   WWPUTILITIES_MPAGEContainer.setProp("CurrentTab_ReturnUrl", "Currenttab_returnurl", "", "char");
   WWPUTILITIES_MPAGEContainer.setProp("Visible", "Visible", true, "bool");
   WWPUTILITIES_MPAGEContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(WWPUTILITIES_MPAGEContainer);
   this.DDO_ADMINAG_MPAGEContainer = gx.uc.getNew(this, 29, 0, "BootstrapDropDownOptions", "DDO_ADMINAG_MPAGEContainer", "Ddo_adminag", "DDO_ADMINAG_MPAGE");
   var DDO_ADMINAG_MPAGEContainer = this.DDO_ADMINAG_MPAGEContainer;
   DDO_ADMINAG_MPAGEContainer.setProp("Class", "Class", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_ADMINAG_MPAGEContainer.setDynProp("Icon", "Icon", "", "str");
   DDO_ADMINAG_MPAGEContainer.setProp("Caption", "Caption", "", "str");
   DDO_ADMINAG_MPAGEContainer.setProp("Tooltip", "Tooltip", "", "str");
   DDO_ADMINAG_MPAGEContainer.setProp("Cls", "Cls", "ActionGroupHeader", "str");
   DDO_ADMINAG_MPAGEContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_ADMINAG_MPAGEContainer.setDynProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_ADMINAG_MPAGEContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "Regular", "str");
   DDO_ADMINAG_MPAGEContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_ADMINAG_MPAGEContainer.setProp("Visible", "Visible", true, "bool");
   DDO_ADMINAG_MPAGEContainer.setProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_ADMINAG_MPAGEContainer.setProp("IncludeSortASC", "Includesortasc", false, "boolean");
   DDO_ADMINAG_MPAGEContainer.setProp("IncludeSortDSC", "Includesortdsc", false, "boolean");
   DDO_ADMINAG_MPAGEContainer.setProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("IncludeFilter", "Includefilter", false, "boolean");
   DDO_ADMINAG_MPAGEContainer.setProp("FilterType", "Filtertype", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("FilterIsRange", "Filterisrange", false, "boolean");
   DDO_ADMINAG_MPAGEContainer.setProp("IncludeDataList", "Includedatalist", false, "boolean");
   DDO_ADMINAG_MPAGEContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_ADMINAG_MPAGEContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_ADMINAG_MPAGEContainer.setProp("FixedFilters", "Fixedfilters", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_ADMINAG_MPAGEContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_ADMINAG_MPAGEContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_ADMINAG_MPAGEContainer.setProp("SortASC", "Sortasc", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("SortDSC", "Sortdsc", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("CleanFilter", "Cleanfilter", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("SearchButtonText", "Searchbuttontext", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("UpdateButtonText", "Updatebuttontext", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_ADMINAG_MPAGEContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_ADMINAG_MPAGEContainer.DropDownOptionsTitleSettingsIcons = '';
   DDO_ADMINAG_MPAGEContainer.addV2CFunction('AV5AdminAGData', "vADMINAGDATA_MPAGE", 'SetDropDownOptionsData');
   DDO_ADMINAG_MPAGEContainer.addC2VFunction(function(UC) { UC.ParentObject.AV5AdminAGData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vADMINAGDATA_MPAGE",UC.ParentObject.AV5AdminAGData); });
   DDO_ADMINAG_MPAGEContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_ADMINAG_MPAGEContainer.addEventHandler("OnOptionClicked", this.e110l2_client);
   this.setUserControl(DDO_ADMINAG_MPAGEContainer);
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLEMAIN",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"TABLEHEADER",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"UNNAMEDTABLE2",grid:0};
   GXValidFnc[15]={ id: 15, fld:"HEADER",grid:0};
   GXValidFnc[17]={ id: 17, fld:"LOGODSC", format:0,grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id: 19, fld:"UNNAMEDTABLE3",grid:0};
   GXValidFnc[22]={ id: 22, fld:"SHOWMENU",grid:0,evt:"e150l1_client"};
   GXValidFnc[24]={ id: 24, fld:"TEXTBLOCKTITLE", format:0,grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"TABLEUSERROLE",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"UNNAMEDTABLE1",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"TABLECONTENT",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"TABLEFOOTER",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"TEXTBLOCKFOOTER", format:0,grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   this.AV5AdminAGData = [ ] ;
   this.AV8DVelop_Menu = [ ] ;
   this.A40000UsuFoto_GXI = "" ;
   this.A41UsuID = 0 ;
   this.A992UsuFoto = "" ;
   this.Events = {"e110l2_client": ["DDO_ADMINAG_MPAGE.ONOPTIONCLICKED_MPAGE", true] ,"e160l2_client": ["ENTER_MPAGE", true] ,"e170l2_client": ["CANCEL_MPAGE", true] ,"e150l1_client": ["DOSHOWMENU_MPAGE", false]};
   this.EvtParms["REFRESH_MPAGE"] = [[{ctrl:'FORM_MPAGE',prop:'Caption'}],[{av:'gx.fn.getCtrlProperty("TEXTBLOCKTITLE_MPAGE","Caption")',ctrl:'TEXTBLOCKTITLE_MPAGE',prop:'Caption'}]];
   this.EvtParms["START_MPAGE"] = [[{av:'A41UsuID',fld:'USUID_MPAGE',pic:'ZZZZZZZZZZ9'},{av:'A992UsuFoto',fld:'USUFOTO_MPAGE',pic:''},{av:'A40000UsuFoto_GXI',fld:'USUFOTO_GXI_MPAGE',pic:''},{av:'AV16RolesDescriptions',fld:'vROLESDESCRIPTIONS_MPAGE',pic:''},{av:'AV33DVelop_Menu_UserData',fld:'vDVELOP_MENU_USERDATA_MPAGE',pic:''},{av:'AV42Usufoto_GXI',fld:'vUSUFOTO_GXI_MPAGE',pic:''}],[{ctrl:'FORM_MPAGE',prop:'Headerrawhtml'},{av:'gx.fn.getCtrlProperty("LAYOUTMAINTABLE_MPAGE","Class")',ctrl:'LAYOUTMAINTABLE_MPAGE',prop:'Class'},{av:'AV8DVelop_Menu',fld:'vDVELOP_MENU_MPAGE',pic:''},{av:'this.DDO_ADMINAG_MPAGEContainer.Icon',ctrl:'DDO_ADMINAG_MPAGE',prop:'Icon'},{av:'AV5AdminAGData',fld:'vADMINAGDATA_MPAGE',pic:''},{av:'AV37WWPContext',fld:'vWWPCONTEXT_MPAGE',pic:''},{av:'AV16RolesDescriptions',fld:'vROLESDESCRIPTIONS_MPAGE',pic:''},{av:'AV33DVelop_Menu_UserData',fld:'vDVELOP_MENU_USERDATA_MPAGE',pic:''},{av:'this.DDO_ADMINAG_MPAGEContainer.TitleControlAlign',ctrl:'DDO_ADMINAG_MPAGE',prop:'TitleControlAlign'}]];
   this.EvtParms["DDO_ADMINAG_MPAGE.ONOPTIONCLICKED_MPAGE"] = [[{av:'this.DDO_ADMINAG_MPAGEContainer.ActiveEventKey',ctrl:'DDO_ADMINAG_MPAGE',prop:'ActiveEventKey'}],[]];
   this.EvtParms["DOSHOWMENU_MPAGE"] = [[],[]];
   this.Initialize( );
});
gx.wi( function() { gx.createMasterPage(wwpbaseobjects.workwithplusmasterpage);});
