/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:15:39.68
*/
gx.evt.autoSkip=!1;gx.define("wwfinancieraplan",!1,function(){var n,i,u,t,r;this.ServerClass="wwfinancieraplan";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV83Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV77IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV78IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV79IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE");this.AV83Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV77IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV78IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV79IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE")};this.Valid_Financieraid=function(){var n=gx.fn.currentGridRowImpl(36);return this.validCliEvt("Valid_Financieraid",36,function(){try{if(gx.fn.currentGridRowImpl(36)===0)return!0;var n=gx.util.balloon.getNew("FINANCIERAID",gx.fn.currentGridRowImpl(36));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Financieradenominacion=function(){var n=gx.fn.currentGridRowImpl(36);return this.validCliEvt("Valid_Financieradenominacion",36,function(){try{if(gx.fn.currentGridRowImpl(36)===0)return!0;var n=gx.util.balloon.getNew("FINANCIERADENOMINACION",gx.fn.currentGridRowImpl(36));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Planid=function(){var n=gx.fn.currentGridRowImpl(36);return this.validCliEvt("Valid_Planid",36,function(){try{if(gx.fn.currentGridRowImpl(36)===0)return!0;var n=gx.util.balloon.getNew("PLANID",gx.fn.currentGridRowImpl(36));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Plannombre=function(){var n=gx.fn.currentGridRowImpl(36);return this.validCliEvt("Valid_Plannombre",36,function(){try{if(gx.fn.currentGridRowImpl(36)===0)return!0;var n=gx.util.balloon.getNew("PLANNOMBRE",gx.fn.currentGridRowImpl(36));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Financieraplancosto=function(){var n=gx.fn.currentGridRowImpl(36);return this.validCliEvt("Valid_Financieraplancosto",36,function(){try{if(gx.fn.currentGridRowImpl(36)===0)return!0;var n=gx.util.balloon.getNew("FINANCIERAPLANCOSTO",gx.fn.currentGridRowImpl(36));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Financieraplandesde=function(){var n=gx.fn.currentGridRowImpl(36);return this.validCliEvt("Valid_Financieraplandesde",36,function(){try{if(gx.fn.currentGridRowImpl(36)===0)return!0;var n=gx.util.balloon.getNew("FINANCIERAPLANDESDE",gx.fn.currentGridRowImpl(36));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Financieraplanhasta=function(){var n=gx.fn.currentGridRowImpl(36);return this.validCliEvt("Valid_Financieraplanhasta",36,function(){try{if(gx.fn.currentGridRowImpl(36)===0)return!0;var n=gx.util.balloon.getNew("FINANCIERAPLANHASTA",gx.fn.currentGridRowImpl(36));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11502_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12502_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e13502_client=function(){return this.executeServerEvent("'DOINSERT'",!1,null,!1,!1)};this.e14502_client=function(){return this.executeServerEvent("'DOEXPORT'",!1,null,!1,!1)};this.e15502_client=function(){return this.executeServerEvent("'DOEXPORTREPORT'",!1,null,!1,!1)};this.e19502_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e20502_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,29,31,32,33,34,35,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,59,60];this.GXLastCtrlId=60;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",36,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwfinancieraplan",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addSingleLineEdit("Display",37,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");i.addSingleLineEdit("Update",38,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");i.addSingleLineEdit("Delete",39,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");i.addSingleLineEdit(159,40,"FINANCIERAID","Ide.","","FinancieraId","int",0,"px",15,15,"right",null,[],159,"FinancieraId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1073,41,"FINANCIERADENOMINACION","Denominación","","FinancieraDenominacion","svchar",0,"px",64,64,"left",null,[],1073,"FinancieraDenominacion",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(203,42,"FINANCIERAPLANID","Ide.","","FinancieraPlanId","int",0,"px",8,8,"right",null,[],203,"FinancieraPlanId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(119,43,"PLANID","Ide. Plan","","PlanId","int",0,"px",4,4,"right",null,[],119,"PlanId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1040,44,"PLANNOMBRE","Plan","","PlanNombre","svchar",0,"px",64,64,"left",null,[],1040,"PlanNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2114,45,"PLANCUOTA","Cuota","","PlanCuota","int",0,"px",4,4,"right",null,[],2114,"PlanCuota",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addComboBox(1041,46,"PLANESTADO","Plan Estado","PlanEstado","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");i.addSingleLineEdit(2097,47,"FINANCIERAPLANCUOTA","Cuotas","","FinancieraPlanCuota","int",0,"px",3,3,"right",null,[],2097,"FinancieraPlanCuota",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2098,48,"FINANCIERAPLANCOSTO","%","","FinancieraPlanCosto","decimal",0,"px",6,6,"right",null,[],2098,"FinancieraPlanCosto",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2099,49,"FINANCIERAPLANDESDE","Desde","Fecha ...","FinancieraPlanDesde","date",0,"px",10,10,"right",null,[],2099,"FinancieraPlanDesde",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2100,50,"FINANCIERAPLANHASTA","Hasta","Fecha ...","FinancieraPlanHasta","date",0,"px",10,10,"right",null,[],2100,"FinancieraPlanHasta",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2101,51,"FINANCIERAPLANNOMBRE","Plan","","FinancieraPlanNombre","char",0,"px",100,80,"left",null,[],2101,"FinancieraPlanNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2325,52,"FINANCIERAPLANNOMBREABREV","Plan","","FinancieraPlanNombreAbrev","char",0,"px",100,80,"left",null,[],2325,"FinancieraPlanNombreAbrev",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addCheckBox(2102,53,"FINANCIERAPLANVIGENCIA","Vigencia","","FinancieraPlanVigencia","boolean","true","false",null,!0,!1,0,"px","WWColumn hidden-xs");i.addComboBox(2103,54,"FINANCIERAPLANEST","Estado","FinancieraPlanEst","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(i);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");u=this.DVPANEL_TABLEHEADERContainer;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("Width","Width","100%","str");u.setProp("Height","Height","100","str");u.setProp("AutoWidth","Autowidth",!1,"bool");u.setProp("AutoHeight","Autoheight",!0,"bool");u.setProp("Cls","Cls","PanelFilled_BaseColor","str");u.setProp("ShowHeader","Showheader",!0,"bool");u.setProp("Title","Title","Opciones","str");u.setProp("Collapsible","Collapsible",!0,"bool");u.setProp("Collapsed","Collapsed",!1,"bool");u.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");u.setProp("IconPosition","Iconposition","Right","str");u.setProp("AutoScroll","Autoscroll",!1,"bool");u.setProp("Visible","Visible",!0,"bool");u.setProp("Gx Control Type","Gxcontroltype","","int");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,57,37,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV69GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV69GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV69GridCurrentPage)});t.addV2CFunction("AV70GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV70GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV70GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11502_client);t.addEventHandler("ChangeRowsPerPage",this.e12502_client);this.setUserControl(t);this.INNEWWINDOW1Container=gx.uc.getNew(this,61,37,"InNewWindow","INNEWWINDOW1Container","Innewwindow1","INNEWWINDOW1");r=this.INNEWWINDOW1Container;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setDynProp("Width","Width","50","str");r.setDynProp("Height","Height","50","str");r.setProp("Name","Name","","str");r.setDynProp("Target","Target","","str");r.setProp("Fullscreen","Fullscreen",!1,"bool");r.setProp("Location","Location",!0,"bool");r.setProp("MenuBar","Menubar",!0,"bool");r.setProp("Resizable","Resizable",!0,"bool");r.setProp("Scrollbars","Scrollbars",!0,"bool");r.setProp("TitleBar","Titlebar",!0,"bool");r.setProp("ToolBar","Toolbar",!0,"bool");r.setProp("directories","Directories",!0,"bool");r.setProp("status","Status",!0,"bool");r.setProp("copyhistory","Copyhistory",!0,"bool");r.setProp("top","Top","5","str");r.setProp("left","Left","5","str");r.setProp("fitscreen","Fitscreen",!1,"bool");r.setProp("RefreshParentOnClose","Refreshparentonclose",!1,"bool");r.setProp("Targets","Targets","","str");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEACTIONS",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"BTNINSERT",grid:0,evt:"e13502_client"};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"BTNEXPORT",grid:0,evt:"e14502_client"};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"BTNEXPORTREPORT",grid:0,evt:"e15502_client"};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"TABLERIGHTHEADER",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[37]={id:37,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV73Display",gxold:"OV73Display",gxvar:"AV73Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV73Display=n)},v2z:function(n){n!==undefined&&(gx.O.ZV73Display=n)},v2c:function(n){gx.fn.setGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(36),gx.O.AV73Display,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV73Display=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};n[38]={id:38,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV72Update",gxold:"OV72Update",gxvar:"AV72Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV72Update=n)},v2z:function(n){n!==undefined&&(gx.O.ZV72Update=n)},v2c:function(n){gx.fn.setGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(36),gx.O.AV72Update,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV72Update=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};n[39]={id:39,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV71Delete",gxold:"OV71Delete",gxvar:"AV71Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV71Delete=n)},v2z:function(n){n!==undefined&&(gx.O.ZV71Delete=n)},v2c:function(n){gx.fn.setGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(36),gx.O.AV71Delete,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV71Delete=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};n[40]={id:40,lvl:2,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:this.Valid_Financieraid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FINANCIERAID",gxz:"Z159FinancieraId",gxold:"O159FinancieraId",gxvar:"A159FinancieraId",ucs:[],op:[51,52,41,44,45,46],ip:[51,52,45,46,50,49,48,44,41,40,43],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A159FinancieraId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z159FinancieraId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FINANCIERAID",n||gx.fn.currentGridRowImpl(36),gx.O.A159FinancieraId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A159FinancieraId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FINANCIERAID",n||gx.fn.currentGridRowImpl(36),".")},nac:gx.falseFn};n[41]={id:41,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:this.Valid_Financieradenominacion,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FINANCIERADENOMINACION",gxz:"Z1073FinancieraDenominacion",gxold:"O1073FinancieraDenominacion",gxvar:"A1073FinancieraDenominacion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1073FinancieraDenominacion=n)},v2z:function(n){n!==undefined&&(gx.O.Z1073FinancieraDenominacion=n)},v2c:function(n){gx.fn.setGridControlValue("FINANCIERADENOMINACION",n||gx.fn.currentGridRowImpl(36),gx.O.A1073FinancieraDenominacion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1073FinancieraDenominacion=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FINANCIERADENOMINACION",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};n[42]={id:42,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FINANCIERAPLANID",gxz:"Z203FinancieraPlanId",gxold:"O203FinancieraPlanId",gxvar:"A203FinancieraPlanId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A203FinancieraPlanId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z203FinancieraPlanId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FINANCIERAPLANID",n||gx.fn.currentGridRowImpl(36),gx.O.A203FinancieraPlanId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A203FinancieraPlanId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FINANCIERAPLANID",n||gx.fn.currentGridRowImpl(36),".")},nac:gx.falseFn};n[43]={id:43,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:this.Valid_Planid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANID",gxz:"Z119PlanId",gxold:"O119PlanId",gxvar:"A119PlanId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A119PlanId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z119PlanId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PLANID",n||gx.fn.currentGridRowImpl(36),gx.O.A119PlanId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A119PlanId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PLANID",n||gx.fn.currentGridRowImpl(36),".")},nac:gx.falseFn};n[44]={id:44,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:this.Valid_Plannombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANNOMBRE",gxz:"Z1040PlanNombre",gxold:"O1040PlanNombre",gxvar:"A1040PlanNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1040PlanNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1040PlanNombre=n)},v2c:function(n){gx.fn.setGridControlValue("PLANNOMBRE",n||gx.fn.currentGridRowImpl(36),gx.O.A1040PlanNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1040PlanNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PLANNOMBRE",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};n[45]={id:45,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANCUOTA",gxz:"Z2114PlanCuota",gxold:"O2114PlanCuota",gxvar:"A2114PlanCuota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2114PlanCuota=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2114PlanCuota=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PLANCUOTA",n||gx.fn.currentGridRowImpl(36),gx.O.A2114PlanCuota,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2114PlanCuota=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PLANCUOTA",n||gx.fn.currentGridRowImpl(36),".")},nac:gx.falseFn};n[46]={id:46,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PLANESTADO",gxz:"Z1041PlanEstado",gxold:"O1041PlanEstado",gxvar:"A1041PlanEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1041PlanEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z1041PlanEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("PLANESTADO",n||gx.fn.currentGridRowImpl(36),gx.O.A1041PlanEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1041PlanEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PLANESTADO",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};n[47]={id:47,lvl:2,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FINANCIERAPLANCUOTA",gxz:"Z2097FinancieraPlanCuota",gxold:"O2097FinancieraPlanCuota",gxvar:"A2097FinancieraPlanCuota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2097FinancieraPlanCuota=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2097FinancieraPlanCuota=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FINANCIERAPLANCUOTA",n||gx.fn.currentGridRowImpl(36),gx.O.A2097FinancieraPlanCuota,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2097FinancieraPlanCuota=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FINANCIERAPLANCUOTA",n||gx.fn.currentGridRowImpl(36),".")},nac:gx.falseFn};n[48]={id:48,lvl:2,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:this.Valid_Financieraplancosto,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FINANCIERAPLANCOSTO",gxz:"Z2098FinancieraPlanCosto",gxold:"O2098FinancieraPlanCosto",gxvar:"A2098FinancieraPlanCosto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2098FinancieraPlanCosto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2098FinancieraPlanCosto=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FINANCIERAPLANCOSTO",n||gx.fn.currentGridRowImpl(36),gx.O.A2098FinancieraPlanCosto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2098FinancieraPlanCosto=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FINANCIERAPLANCOSTO",n||gx.fn.currentGridRowImpl(36),".",",")},nac:gx.falseFn};n[49]={id:49,lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:this.Valid_Financieraplandesde,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FINANCIERAPLANDESDE",gxz:"Z2099FinancieraPlanDesde",gxold:"O2099FinancieraPlanDesde",gxvar:"A2099FinancieraPlanDesde",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2099FinancieraPlanDesde=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2099FinancieraPlanDesde=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("FINANCIERAPLANDESDE",n||gx.fn.currentGridRowImpl(36),gx.O.A2099FinancieraPlanDesde,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2099FinancieraPlanDesde=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("FINANCIERAPLANDESDE",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};n[50]={id:50,lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:this.Valid_Financieraplanhasta,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FINANCIERAPLANHASTA",gxz:"Z2100FinancieraPlanHasta",gxold:"O2100FinancieraPlanHasta",gxvar:"A2100FinancieraPlanHasta",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2100FinancieraPlanHasta=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2100FinancieraPlanHasta=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("FINANCIERAPLANHASTA",n||gx.fn.currentGridRowImpl(36),gx.O.A2100FinancieraPlanHasta,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2100FinancieraPlanHasta=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("FINANCIERAPLANHASTA",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};n[51]={id:51,lvl:2,type:"char",len:100,dec:0,sign:!1,ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FINANCIERAPLANNOMBRE",gxz:"Z2101FinancieraPlanNombre",gxold:"O2101FinancieraPlanNombre",gxvar:"A2101FinancieraPlanNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2101FinancieraPlanNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2101FinancieraPlanNombre=n)},v2c:function(n){gx.fn.setGridControlValue("FINANCIERAPLANNOMBRE",n||gx.fn.currentGridRowImpl(36),gx.O.A2101FinancieraPlanNombre,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2101FinancieraPlanNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FINANCIERAPLANNOMBRE",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};n[52]={id:52,lvl:2,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FINANCIERAPLANNOMBREABREV",gxz:"Z2325FinancieraPlanNombreAbrev",gxold:"O2325FinancieraPlanNombreAbrev",gxvar:"A2325FinancieraPlanNombreAbrev",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2325FinancieraPlanNombreAbrev=n)},v2z:function(n){n!==undefined&&(gx.O.Z2325FinancieraPlanNombreAbrev=n)},v2c:function(n){gx.fn.setGridControlValue("FINANCIERAPLANNOMBREABREV",n||gx.fn.currentGridRowImpl(36),gx.O.A2325FinancieraPlanNombreAbrev,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2325FinancieraPlanNombreAbrev=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FINANCIERAPLANNOMBREABREV",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};n[53]={id:53,lvl:2,type:"boolean",len:4,dec:0,sign:!1,ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FINANCIERAPLANVIGENCIA",gxz:"Z2102FinancieraPlanVigencia",gxold:"O2102FinancieraPlanVigencia",gxvar:"A2102FinancieraPlanVigencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2102FinancieraPlanVigencia=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2102FinancieraPlanVigencia=gx.lang.booleanValue(n))},v2c:function(n){gx.fn.setGridCheckBoxValue("FINANCIERAPLANVIGENCIA",n||gx.fn.currentGridRowImpl(36),gx.O.A2102FinancieraPlanVigencia,!0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2102FinancieraPlanVigencia=gx.lang.booleanValue(this.val(n)))},val:function(n){return gx.fn.getGridControlValue("FINANCIERAPLANVIGENCIA",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn,values:["true","false"]};n[54]={id:54,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FINANCIERAPLANEST",gxz:"Z2103FinancieraPlanEst",gxold:"O2103FinancieraPlanEst",gxvar:"A2103FinancieraPlanEst",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2103FinancieraPlanEst=n)},v2z:function(n){n!==undefined&&(gx.O.Z2103FinancieraPlanEst=n)},v2c:function(n){gx.fn.setGridComboBoxValue("FINANCIERAPLANEST",n||gx.fn.currentGridRowImpl(36),gx.O.A2103FinancieraPlanEst);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2103FinancieraPlanEst=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FINANCIERAPLANEST",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[58]={id:58,fld:"",grid:0};n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};this.ZV73Display="";this.OV73Display="";this.ZV72Update="";this.OV72Update="";this.ZV71Delete="";this.OV71Delete="";this.Z159FinancieraId=0;this.O159FinancieraId=0;this.Z1073FinancieraDenominacion="";this.O1073FinancieraDenominacion="";this.Z203FinancieraPlanId=0;this.O203FinancieraPlanId=0;this.Z119PlanId=0;this.O119PlanId=0;this.Z1040PlanNombre="";this.O1040PlanNombre="";this.Z2114PlanCuota=0;this.O2114PlanCuota=0;this.Z1041PlanEstado="";this.O1041PlanEstado="";this.Z2097FinancieraPlanCuota=0;this.O2097FinancieraPlanCuota=0;this.Z2098FinancieraPlanCosto=0;this.O2098FinancieraPlanCosto=0;this.Z2099FinancieraPlanDesde=gx.date.nullDate();this.O2099FinancieraPlanDesde=gx.date.nullDate();this.Z2100FinancieraPlanHasta=gx.date.nullDate();this.O2100FinancieraPlanHasta=gx.date.nullDate();this.Z2101FinancieraPlanNombre="";this.O2101FinancieraPlanNombre="";this.Z2325FinancieraPlanNombreAbrev="";this.O2325FinancieraPlanNombreAbrev="";this.Z2102FinancieraPlanVigencia=!1;this.O2102FinancieraPlanVigencia=!1;this.Z2103FinancieraPlanEst="";this.O2103FinancieraPlanEst="";this.AV69GridCurrentPage=0;this.AV73Display="";this.AV72Update="";this.AV71Delete="";this.A159FinancieraId=0;this.A1073FinancieraDenominacion="";this.A203FinancieraPlanId=0;this.A119PlanId=0;this.A1040PlanNombre="";this.A2114PlanCuota=0;this.A1041PlanEstado="";this.A2097FinancieraPlanCuota=0;this.A2098FinancieraPlanCosto=0;this.A2099FinancieraPlanDesde=gx.date.nullDate();this.A2100FinancieraPlanHasta=gx.date.nullDate();this.A2101FinancieraPlanNombre="";this.A2325FinancieraPlanNombreAbrev="";this.A2102FinancieraPlanVigencia=!1;this.A2103FinancieraPlanEst="";this.AV83Pgmname="";this.AV77IsAuthorized_Display=!1;this.AV78IsAuthorized_Update=!1;this.AV79IsAuthorized_Delete=!1;this.Events={e11502_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12502_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e13502_client:["'DOINSERT'",!0],e14502_client:["'DOEXPORT'",!0],e15502_client:["'DOEXPORTREPORT'",!0],e19502_client:["ENTER",!0],e20502_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV77IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV78IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV79IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"AV83Pgmname",fld:"vPGMNAME",pic:""}],[{av:"AV69GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV70GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV77IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:"AV78IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:"AV79IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"},{ctrl:"BTNEXPORTREPORT",prop:"Visible"}]];this.EvtParms.START=[[{av:"AV83Pgmname",fld:"vPGMNAME",pic:""}],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV83Pgmname",fld:"vPGMNAME",pic:""},{av:"AV77IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV78IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV79IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV83Pgmname",fld:"vPGMNAME",pic:""},{av:"AV77IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV78IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV79IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV83Pgmname",fld:"vPGMNAME",pic:""},{av:"AV77IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV78IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV79IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV77IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"A159FinancieraId",fld:"FINANCIERAID",pic:"ZZZZZZZZZZZZZZ9",hsh:!0},{av:"A203FinancieraPlanId",fld:"FINANCIERAPLANID",pic:"ZZZZZZZ9",hsh:!0},{av:"AV78IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV79IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""}],[{av:"AV73Display",fld:"vDISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:"vDISPLAY",prop:"Link"},{av:"AV72Update",fld:"vUPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:"vUPDATE",prop:"Link"},{av:"AV71Delete",fld:"vDELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:"vDELETE",prop:"Link"}]];this.EvtParms["'DOINSERT'"]=[[{av:"A159FinancieraId",fld:"FINANCIERAID",pic:"ZZZZZZZZZZZZZZ9",hsh:!0},{av:"A203FinancieraPlanId",fld:"FINANCIERAPLANID",pic:"ZZZZZZZ9",hsh:!0}],[]];this.EvtParms["'DOEXPORT'"]=[[{av:"AV83Pgmname",fld:"vPGMNAME",pic:""}],[{ctrl:"GRID",prop:"Rows"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV83Pgmname",fld:"vPGMNAME",pic:""},{av:"AV77IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV78IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV79IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""}]];this.EvtParms["'DOEXPORTREPORT'"]=[[{av:"AV83Pgmname",fld:"vPGMNAME",pic:""}],[{av:"this.INNEWWINDOW1Container.Target",ctrl:"INNEWWINDOW1",prop:"Target"},{av:"this.INNEWWINDOW1Container.Height",ctrl:"INNEWWINDOW1",prop:"Height"},{av:"this.INNEWWINDOW1Container.Width",ctrl:"INNEWWINDOW1",prop:"Width"},{ctrl:"GRID",prop:"Rows"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV83Pgmname",fld:"vPGMNAME",pic:""},{av:"AV77IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV78IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV79IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""}]];this.EvtParms.VALID_FINANCIERAID=[[{av:"A2101FinancieraPlanNombre",fld:"FINANCIERAPLANNOMBRE",pic:""},{av:"A2325FinancieraPlanNombreAbrev",fld:"FINANCIERAPLANNOMBREABREV",pic:"@!"},{av:"A2114PlanCuota",fld:"PLANCUOTA",pic:"ZZZ9"},{ctrl:"PLANESTADO"},{av:"A1041PlanEstado",fld:"PLANESTADO",pic:"@!"},{av:"A2100FinancieraPlanHasta",fld:"FINANCIERAPLANHASTA",pic:""},{av:"A2099FinancieraPlanDesde",fld:"FINANCIERAPLANDESDE",pic:""},{av:"A2098FinancieraPlanCosto",fld:"FINANCIERAPLANCOSTO",pic:"999.99"},{av:"A1040PlanNombre",fld:"PLANNOMBRE",pic:"@!"},{av:"A1073FinancieraDenominacion",fld:"FINANCIERADENOMINACION",pic:"@!"},{av:"A159FinancieraId",fld:"FINANCIERAID",pic:"ZZZZZZZZZZZZZZ9",hsh:!0},{av:"A119PlanId",fld:"PLANID",pic:"ZZZ9"}],[{av:"A2101FinancieraPlanNombre",fld:"FINANCIERAPLANNOMBRE",pic:""},{av:"A2325FinancieraPlanNombreAbrev",fld:"FINANCIERAPLANNOMBREABREV",pic:"@!"},{av:"A1073FinancieraDenominacion",fld:"FINANCIERADENOMINACION",pic:"@!"},{av:"A1040PlanNombre",fld:"PLANNOMBRE",pic:"@!"},{av:"A2114PlanCuota",fld:"PLANCUOTA",pic:"ZZZ9"},{ctrl:"PLANESTADO"},{av:"A1041PlanEstado",fld:"PLANESTADO",pic:"@!"}]];this.EvtParms.VALID_FINANCIERADENOMINACION=[[],[]];this.EvtParms.VALID_PLANID=[[],[]];this.EvtParms.VALID_PLANNOMBRE=[[],[]];this.EvtParms.VALID_FINANCIERAPLANCOSTO=[[],[]];this.EvtParms.VALID_FINANCIERAPLANDESDE=[[],[]];this.EvtParms.VALID_FINANCIERAPLANHASTA=[[],[]];this.setVCMap("AV83Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV77IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV78IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV79IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV83Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV77IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV78IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV79IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV83Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV77IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV78IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV79IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);i.addRefreshingVar({rfrVar:"AV83Pgmname"});i.addRefreshingVar({rfrVar:"AV77IsAuthorized_Display"});i.addRefreshingVar({rfrVar:"AV78IsAuthorized_Update"});i.addRefreshingVar({rfrVar:"AV79IsAuthorized_Delete"});i.addRefreshingParm({rfrVar:"AV83Pgmname"});i.addRefreshingParm({rfrVar:"AV77IsAuthorized_Display"});i.addRefreshingParm({rfrVar:"AV78IsAuthorized_Update"});i.addRefreshingParm({rfrVar:"AV79IsAuthorized_Delete"});this.Initialize()});gx.wi(function(){gx.createParentObj(wwfinancieraplan)})