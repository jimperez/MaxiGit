/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:49:19.89
*/
gx.evt.autoSkip=!1;gx.define("wwtarjetaemi",!1,function(){var n,i,u,t,r;this.ServerClass="wwtarjetaemi";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV36Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV30IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV31IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV32IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE");this.AV36Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV30IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV31IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV32IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE")};this.Valid_Trjid=function(){var n=gx.fn.currentGridRowImpl(44);return this.validCliEvt("Valid_Trjid",44,function(){try{if(gx.fn.currentGridRowImpl(44)===0)return!0;var n=gx.util.balloon.getNew("TRJID",gx.fn.currentGridRowImpl(44));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Trjnom=function(){var n=gx.fn.currentGridRowImpl(44);return this.validCliEvt("Valid_Trjnom",44,function(){try{if(gx.fn.currentGridRowImpl(44)===0)return!0;var n=gx.util.balloon.getNew("TRJNOM",gx.fn.currentGridRowImpl(44));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Emisortrjid=function(){var n=gx.fn.currentGridRowImpl(44);return this.validCliEvt("Valid_Emisortrjid",44,function(){try{if(gx.fn.currentGridRowImpl(44)===0)return!0;var n=gx.util.balloon.getNew("EMISORTRJID",gx.fn.currentGridRowImpl(44));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Emisortrjnombre=function(){var n=gx.fn.currentGridRowImpl(44);return this.validCliEvt("Valid_Emisortrjnombre",44,function(){try{if(gx.fn.currentGridRowImpl(44)===0)return!0;var n=gx.util.balloon.getNew("EMISORTRJNOMBRE",gx.fn.currentGridRowImpl(44));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Tarjetaemiplancuentaid=function(){var n=gx.fn.currentGridRowImpl(44);return this.validCliEvt("Valid_Tarjetaemiplancuentaid",44,function(){try{if(gx.fn.currentGridRowImpl(44)===0)return!0;var n=gx.util.balloon.getNew("TARJETAEMIPLANCUENTAID",gx.fn.currentGridRowImpl(44));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e113a2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e123a2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e133a2_client=function(){return this.executeServerEvent("'DOINSERT'",!1,null,!1,!1)};this.e143a2_client=function(){return this.executeServerEvent("'DOEXPORT'",!1,null,!1,!1)};this.e153a2_client=function(){return this.executeServerEvent("'DOEXPORTREPORT'",!1,null,!1,!1)};this.e193a2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e203a2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,39,40,41,42,43,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,61,62];this.GXLastCtrlId=62;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",44,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwtarjetaemi",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addSingleLineEdit("Display",45,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");i.addSingleLineEdit("Update",46,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");i.addSingleLineEdit("Delete",47,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");i.addSingleLineEdit(96,48,"TRJID","Ide. Tarjeta","","TrjId","int",0,"px",4,4,"right",null,[],96,"TrjId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(849,49,"TRJNOM","Tarjeta","","TrjNom","svchar",0,"px",64,64,"left",null,[],849,"TrjNom",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addComboBox(851,50,"TRJEST","Estado","TrjEst","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");i.addSingleLineEdit(97,51,"EMISORTRJID","Ide.","","EmisorTrjId","int",0,"px",4,4,"right",null,[],97,"EmisorTrjId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1030,52,"EMISORTRJNOMBRE","Emisor","","EmisorTrjNombre","svchar",0,"px",64,64,"left",null,[],1030,"EmisorTrjNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addComboBox(1031,53,"EMISORTRJESTADO","Emisor Estado","EmisorTrjEstado","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");i.addSingleLineEdit(1524,54,"TARJETAEMINOMBRE","Tarjeta Emisor","","TarjetaEmiNombre","svchar",0,"px",64,64,"left",null,[],1524,"TarjetaEmiNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(3021,55,"TARJETAEMIPLANCUENTAID","Cta. Cont.","","TarjetaEmiPlanCuentaId","int",0,"px",10,10,"right",null,[],3021,"TarjetaEmiPlanCuentaId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(3022,56,"TARJETAEMIPLANCUENTANOMBRE","Plan Cuenta","","TarjetaEmiPlanCuentaNombre","svchar",0,"px",64,64,"left",null,[],3022,"TarjetaEmiPlanCuentaNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(i);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");u=this.DVPANEL_TABLEHEADERContainer;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("Width","Width","100%","str");u.setProp("Height","Height","100","str");u.setProp("AutoWidth","Autowidth",!1,"bool");u.setProp("AutoHeight","Autoheight",!0,"bool");u.setProp("Cls","Cls","PanelFilled_BaseColor","str");u.setProp("ShowHeader","Showheader",!0,"bool");u.setProp("Title","Title","Opciones","str");u.setProp("Collapsible","Collapsible",!0,"bool");u.setProp("Collapsed","Collapsed",!1,"bool");u.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");u.setProp("IconPosition","Iconposition","Right","str");u.setProp("AutoScroll","Autoscroll",!1,"bool");u.setProp("Visible","Visible",!0,"bool");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,59,31,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV18GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV18GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV18GridCurrentPage)});t.addV2CFunction("AV19GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV19GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV19GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e113a2_client);t.addEventHandler("ChangeRowsPerPage",this.e123a2_client);this.setUserControl(t);this.INNEWWINDOW1Container=gx.uc.getNew(this,63,31,"InNewWindow","INNEWWINDOW1Container","Innewwindow1","INNEWWINDOW1");r=this.INNEWWINDOW1Container;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setDynProp("Width","Width","50","str");r.setDynProp("Height","Height","50","str");r.setProp("Name","Name","","str");r.setDynProp("Target","Target","","str");r.setProp("Fullscreen","Fullscreen",!1,"bool");r.setProp("Location","Location",!0,"bool");r.setProp("MenuBar","Menubar",!0,"bool");r.setProp("Resizable","Resizable",!0,"bool");r.setProp("Scrollbars","Scrollbars",!0,"bool");r.setProp("TitleBar","Titlebar",!0,"bool");r.setProp("ToolBar","Toolbar",!0,"bool");r.setProp("directories","Directories",!0,"bool");r.setProp("status","Status",!0,"bool");r.setProp("copyhistory","Copyhistory",!0,"bool");r.setProp("top","Top","5","str");r.setProp("left","Left","5","str");r.setProp("fitscreen","Fitscreen",!1,"bool");r.setProp("RefreshParentOnClose","Refreshparentonclose",!1,"bool");r.setProp("Targets","Targets","","str");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEACTIONS",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"BTNINSERT",grid:0,evt:"e133a2_client"};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"BTNEXPORT",grid:0,evt:"e143a2_client"};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"BTNEXPORTREPORT",grid:0,evt:"e153a2_client"};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"TABLEFILTERS",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTRJNOM",gxz:"ZV12TrjNom",gxold:"OV12TrjNom",gxvar:"AV12TrjNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV12TrjNom=n)},v2z:function(n){n!==undefined&&(gx.O.ZV12TrjNom=n)},v2c:function(){gx.fn.setControlValue("vTRJNOM",gx.O.AV12TrjNom,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV12TrjNom=this.val())},val:function(){return gx.fn.getControlValue("vTRJNOM")},nac:gx.falseFn};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vEMISORTRJNOMBRE",gxz:"ZV13EmisorTrjNombre",gxold:"OV13EmisorTrjNombre",gxvar:"AV13EmisorTrjNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV13EmisorTrjNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV13EmisorTrjNombre=n)},v2c:function(){gx.fn.setControlValue("vEMISORTRJNOMBRE",gx.O.AV13EmisorTrjNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV13EmisorTrjNombre=this.val())},val:function(){return gx.fn.getControlValue("vEMISORTRJNOMBRE")},nac:gx.falseFn};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[45]={id:45,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV22Display",gxold:"OV22Display",gxvar:"AV22Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV22Display=n)},v2z:function(n){n!==undefined&&(gx.O.ZV22Display=n)},v2c:function(n){gx.fn.setGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(44),gx.O.AV22Display,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV22Display=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[46]={id:46,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV21Update",gxold:"OV21Update",gxvar:"AV21Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV21Update=n)},v2z:function(n){n!==undefined&&(gx.O.ZV21Update=n)},v2c:function(n){gx.fn.setGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(44),gx.O.AV21Update,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV21Update=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[47]={id:47,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV20Delete",gxold:"OV20Delete",gxvar:"AV20Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV20Delete=n)},v2z:function(n){n!==undefined&&(gx.O.ZV20Delete=n)},v2c:function(n){gx.fn.setGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(44),gx.O.AV20Delete,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV20Delete=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[48]={id:48,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:this.Valid_Trjid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJID",gxz:"Z96TrjId",gxold:"O96TrjId",gxvar:"A96TrjId",ucs:[],op:[54,49,50,52,53,56],ip:[54,50,53,56,52,49,48,51,55],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A96TrjId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z96TrjId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("TRJID",n||gx.fn.currentGridRowImpl(44),gx.O.A96TrjId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A96TrjId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("TRJID",n||gx.fn.currentGridRowImpl(44),".")},nac:gx.falseFn};n[49]={id:49,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:this.Valid_Trjnom,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJNOM",gxz:"Z849TrjNom",gxold:"O849TrjNom",gxvar:"A849TrjNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A849TrjNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z849TrjNom=n)},v2c:function(n){gx.fn.setGridControlValue("TRJNOM",n||gx.fn.currentGridRowImpl(44),gx.O.A849TrjNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A849TrjNom=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TRJNOM",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[50]={id:50,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRJEST",gxz:"Z851TrjEst",gxold:"O851TrjEst",gxvar:"A851TrjEst",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A851TrjEst=n)},v2z:function(n){n!==undefined&&(gx.O.Z851TrjEst=n)},v2c:function(n){gx.fn.setGridComboBoxValue("TRJEST",n||gx.fn.currentGridRowImpl(44),gx.O.A851TrjEst);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A851TrjEst=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TRJEST",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[51]={id:51,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:this.Valid_Emisortrjid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMISORTRJID",gxz:"Z97EmisorTrjId",gxold:"O97EmisorTrjId",gxvar:"A97EmisorTrjId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A97EmisorTrjId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z97EmisorTrjId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("EMISORTRJID",n||gx.fn.currentGridRowImpl(44),gx.O.A97EmisorTrjId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A97EmisorTrjId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("EMISORTRJID",n||gx.fn.currentGridRowImpl(44),".")},nac:gx.falseFn};n[52]={id:52,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:this.Valid_Emisortrjnombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMISORTRJNOMBRE",gxz:"Z1030EmisorTrjNombre",gxold:"O1030EmisorTrjNombre",gxvar:"A1030EmisorTrjNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1030EmisorTrjNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1030EmisorTrjNombre=n)},v2c:function(n){gx.fn.setGridControlValue("EMISORTRJNOMBRE",n||gx.fn.currentGridRowImpl(44),gx.O.A1030EmisorTrjNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1030EmisorTrjNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("EMISORTRJNOMBRE",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[53]={id:53,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMISORTRJESTADO",gxz:"Z1031EmisorTrjEstado",gxold:"O1031EmisorTrjEstado",gxvar:"A1031EmisorTrjEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1031EmisorTrjEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z1031EmisorTrjEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("EMISORTRJESTADO",n||gx.fn.currentGridRowImpl(44),gx.O.A1031EmisorTrjEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1031EmisorTrjEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("EMISORTRJESTADO",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[54]={id:54,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARJETAEMINOMBRE",gxz:"Z1524TarjetaEmiNombre",gxold:"O1524TarjetaEmiNombre",gxvar:"A1524TarjetaEmiNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1524TarjetaEmiNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1524TarjetaEmiNombre=n)},v2c:function(n){gx.fn.setGridControlValue("TARJETAEMINOMBRE",n||gx.fn.currentGridRowImpl(44),gx.O.A1524TarjetaEmiNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1524TarjetaEmiNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TARJETAEMINOMBRE",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[55]={id:55,lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:this.Valid_Tarjetaemiplancuentaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARJETAEMIPLANCUENTAID",gxz:"Z3021TarjetaEmiPlanCuentaId",gxold:"O3021TarjetaEmiPlanCuentaId",gxvar:"A3021TarjetaEmiPlanCuentaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3021TarjetaEmiPlanCuentaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3021TarjetaEmiPlanCuentaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("TARJETAEMIPLANCUENTAID",n||gx.fn.currentGridRowImpl(44),gx.O.A3021TarjetaEmiPlanCuentaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3021TarjetaEmiPlanCuentaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("TARJETAEMIPLANCUENTAID",n||gx.fn.currentGridRowImpl(44),".")},nac:gx.falseFn};n[56]={id:56,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARJETAEMIPLANCUENTANOMBRE",gxz:"Z3022TarjetaEmiPlanCuentaNombre",gxold:"O3022TarjetaEmiPlanCuentaNombre",gxvar:"A3022TarjetaEmiPlanCuentaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3022TarjetaEmiPlanCuentaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3022TarjetaEmiPlanCuentaNombre=n)},v2c:function(n){gx.fn.setGridControlValue("TARJETAEMIPLANCUENTANOMBRE",n||gx.fn.currentGridRowImpl(44),gx.O.A3022TarjetaEmiPlanCuentaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3022TarjetaEmiPlanCuentaNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TARJETAEMIPLANCUENTANOMBRE",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[57]={id:57,fld:"",grid:0};n[58]={id:58,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};this.AV12TrjNom="";this.ZV12TrjNom="";this.OV12TrjNom="";this.AV13EmisorTrjNombre="";this.ZV13EmisorTrjNombre="";this.OV13EmisorTrjNombre="";this.ZV22Display="";this.OV22Display="";this.ZV21Update="";this.OV21Update="";this.ZV20Delete="";this.OV20Delete="";this.Z96TrjId=0;this.O96TrjId=0;this.Z849TrjNom="";this.O849TrjNom="";this.Z851TrjEst="";this.O851TrjEst="";this.Z97EmisorTrjId=0;this.O97EmisorTrjId=0;this.Z1030EmisorTrjNombre="";this.O1030EmisorTrjNombre="";this.Z1031EmisorTrjEstado="";this.O1031EmisorTrjEstado="";this.Z1524TarjetaEmiNombre="";this.O1524TarjetaEmiNombre="";this.Z3021TarjetaEmiPlanCuentaId=0;this.O3021TarjetaEmiPlanCuentaId=0;this.Z3022TarjetaEmiPlanCuentaNombre="";this.O3022TarjetaEmiPlanCuentaNombre="";this.AV12TrjNom="";this.AV13EmisorTrjNombre="";this.AV18GridCurrentPage=0;this.AV22Display="";this.AV21Update="";this.AV20Delete="";this.A96TrjId=0;this.A849TrjNom="";this.A851TrjEst="";this.A97EmisorTrjId=0;this.A1030EmisorTrjNombre="";this.A1031EmisorTrjEstado="";this.A1524TarjetaEmiNombre="";this.A3021TarjetaEmiPlanCuentaId=0;this.A3022TarjetaEmiPlanCuentaNombre="";this.AV36Pgmname="";this.AV30IsAuthorized_Display=!1;this.AV31IsAuthorized_Update=!1;this.AV32IsAuthorized_Delete=!1;this.Events={e113a2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e123a2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e133a2_client:["'DOINSERT'",!0],e143a2_client:["'DOEXPORT'",!0],e153a2_client:["'DOEXPORTREPORT'",!0],e193a2_client:["ENTER",!0],e203a2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV12TrjNom",fld:"vTRJNOM",pic:"@!"},{av:"AV13EmisorTrjNombre",fld:"vEMISORTRJNOMBRE",pic:"@!"},{av:"AV36Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV30IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV31IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV32IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0}],[{av:"AV18GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV19GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV30IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:"AV31IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:"AV32IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"},{ctrl:"BTNEXPORTREPORT",prop:"Visible"}]];this.EvtParms.START=[[{av:"AV36Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:"AV12TrjNom",fld:"vTRJNOM",pic:"@!"},{av:"AV13EmisorTrjNombre",fld:"vEMISORTRJNOMBRE",pic:"@!"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV36Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV30IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV31IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV32IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV12TrjNom",fld:"vTRJNOM",pic:"@!"},{av:"AV13EmisorTrjNombre",fld:"vEMISORTRJNOMBRE",pic:"@!"},{av:"AV36Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV30IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV31IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV32IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV12TrjNom",fld:"vTRJNOM",pic:"@!"},{av:"AV13EmisorTrjNombre",fld:"vEMISORTRJNOMBRE",pic:"@!"},{av:"AV36Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV30IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV31IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV32IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV30IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"A96TrjId",fld:"TRJID",pic:"ZZZ9",hsh:!0},{av:"A97EmisorTrjId",fld:"EMISORTRJID",pic:"ZZZ9",hsh:!0},{av:"AV31IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV32IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0}],[{av:"AV22Display",fld:"vDISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:"vDISPLAY",prop:"Link"},{av:"AV21Update",fld:"vUPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:"vUPDATE",prop:"Link"},{av:"AV20Delete",fld:"vDELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:"vDELETE",prop:"Link"}]];this.EvtParms["'DOINSERT'"]=[[{av:"A96TrjId",fld:"TRJID",pic:"ZZZ9",hsh:!0},{av:"A97EmisorTrjId",fld:"EMISORTRJID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms["'DOEXPORT'"]=[[{av:"AV36Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:"AV12TrjNom",fld:"vTRJNOM",pic:"@!"},{av:"AV13EmisorTrjNombre",fld:"vEMISORTRJNOMBRE",pic:"@!"},{ctrl:"GRID",prop:"Rows"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV36Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV30IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV31IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV32IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0}]];this.EvtParms["'DOEXPORTREPORT'"]=[[{av:"AV36Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:"this.INNEWWINDOW1Container.Target",ctrl:"INNEWWINDOW1",prop:"Target"},{av:"this.INNEWWINDOW1Container.Height",ctrl:"INNEWWINDOW1",prop:"Height"},{av:"this.INNEWWINDOW1Container.Width",ctrl:"INNEWWINDOW1",prop:"Width"},{av:"AV12TrjNom",fld:"vTRJNOM",pic:"@!"},{av:"AV13EmisorTrjNombre",fld:"vEMISORTRJNOMBRE",pic:"@!"},{ctrl:"GRID",prop:"Rows"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV36Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV30IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"AV31IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:"",hsh:!0},{av:"AV32IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:"",hsh:!0}]];this.EvtParms.VALID_TRJID=[[{av:"A1524TarjetaEmiNombre",fld:"TARJETAEMINOMBRE",pic:"@!"},{ctrl:"TRJEST"},{av:"A851TrjEst",fld:"TRJEST",pic:"@!"},{ctrl:"EMISORTRJESTADO"},{av:"A1031EmisorTrjEstado",fld:"EMISORTRJESTADO",pic:"@!"},{av:"A3022TarjetaEmiPlanCuentaNombre",fld:"TARJETAEMIPLANCUENTANOMBRE",pic:"@!"},{av:"A1030EmisorTrjNombre",fld:"EMISORTRJNOMBRE",pic:"@!"},{av:"A849TrjNom",fld:"TRJNOM",pic:"@!"},{av:"A96TrjId",fld:"TRJID",pic:"ZZZ9",hsh:!0},{av:"A97EmisorTrjId",fld:"EMISORTRJID",pic:"ZZZ9",hsh:!0},{av:"A3021TarjetaEmiPlanCuentaId",fld:"TARJETAEMIPLANCUENTAID",pic:"ZZZZZZZZZ9"}],[{av:"A1524TarjetaEmiNombre",fld:"TARJETAEMINOMBRE",pic:"@!"},{av:"A849TrjNom",fld:"TRJNOM",pic:"@!"},{ctrl:"TRJEST"},{av:"A851TrjEst",fld:"TRJEST",pic:"@!"},{av:"A1030EmisorTrjNombre",fld:"EMISORTRJNOMBRE",pic:"@!"},{ctrl:"EMISORTRJESTADO"},{av:"A1031EmisorTrjEstado",fld:"EMISORTRJESTADO",pic:"@!"},{av:"A3022TarjetaEmiPlanCuentaNombre",fld:"TARJETAEMIPLANCUENTANOMBRE",pic:"@!"}]];this.EvtParms.VALID_TRJNOM=[[],[]];this.EvtParms.VALID_EMISORTRJID=[[],[]];this.EvtParms.VALID_EMISORTRJNOMBRE=[[],[]];this.EvtParms.VALID_TARJETAEMIPLANCUENTAID=[[],[]];this.setVCMap("AV36Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV30IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV31IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV32IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV36Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV30IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV31IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV32IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV36Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV30IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV31IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV32IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);i.addRefreshingVar(this.GXValidFnc[31]);i.addRefreshingVar(this.GXValidFnc[35]);i.addRefreshingVar({rfrVar:"AV36Pgmname"});i.addRefreshingVar({rfrVar:"AV30IsAuthorized_Display"});i.addRefreshingVar({rfrVar:"AV31IsAuthorized_Update"});i.addRefreshingVar({rfrVar:"AV32IsAuthorized_Delete"});i.addRefreshingParm(this.GXValidFnc[31]);i.addRefreshingParm(this.GXValidFnc[35]);i.addRefreshingParm({rfrVar:"AV36Pgmname"});i.addRefreshingParm({rfrVar:"AV30IsAuthorized_Display"});i.addRefreshingParm({rfrVar:"AV31IsAuthorized_Update"});i.addRefreshingParm({rfrVar:"AV32IsAuthorized_Delete"});this.Initialize()});gx.wi(function(){gx.createParentObj(wwtarjetaemi)})