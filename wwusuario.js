/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:13:49.22
*/
gx.evt.autoSkip=!1;gx.define("wwusuario",!1,function(){var n,i,u,t,r;this.ServerClass="wwusuario";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV69Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV63IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV64IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV65IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE");this.AV69Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV63IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV64IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV65IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE")};this.e111x2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e121x2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e131x2_client=function(){return this.executeServerEvent("'DOINSERT'",!1,null,!1,!1)};this.e141x2_client=function(){return this.executeServerEvent("'DOEXPORT'",!1,null,!1,!1)};this.e151x2_client=function(){return this.executeServerEvent("'DOEXPORTREPORT'",!1,null,!1,!1)};this.e191x2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e201x2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,37,38,39,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,61,62];this.GXLastCtrlId=62;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",40,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwusuario",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addSingleLineEdit("Display",41,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");i.addSingleLineEdit("Update",42,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");i.addSingleLineEdit("Delete",43,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");i.addSingleLineEdit(41,44,"USUID","Usuario","","UsuID","int",0,"px",11,11,"right",null,[],41,"UsuID",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(372,45,"USUNOM","Nombre Usuario","","UsuNom","svchar",0,"px",130,80,"left",null,[],372,"UsuNom",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(985,46,"USUPWD","Clave","","UsuPwd","char",0,"px",32,32,"left",null,[],985,"UsuPwd",!1,0,!1,!0,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(988,47,"USUPWDCONF","Clave Conf.","","UsuPwdConf","char",0,"px",32,32,"left",null,[],988,"UsuPwdConf",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(375,48,"USUPWDMAR","Clave Marca","","UsuPwdMar","char",0,"px",1,1,"left",null,[],375,"UsuPwdMar",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addComboBox(984,49,"USUEST","Estado","UsuEst","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");i.addSingleLineEdit(989,50,"USUMAIL","E-Mail","","UsuMail","svchar",0,"px",100,80,"left",null,[],989,"UsuMail",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(993,51,"USUPWDCLA","Clave Encrip","","UsuPwdCla","char",0,"px",32,32,"left",null,[],993,"UsuPwdCla",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addBitmap(992,"USUFOTO",52,0,"px",17,"px",null,"","Foto","AttributeRealWidth","WWColumn hidden-xs");i.addSingleLineEdit(986,53,"USU094","Usu094","","Usu094","char",0,"px",15,15,"left",null,[],986,"Usu094",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(987,54,"USU095","Usu095","","Usu095","dtime",0,"px",19,19,"right",null,[],987,"Usu095",!1,8,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(990,55,"USU097","Usu097","","Usu097","char",0,"px",15,15,"left",null,[],990,"Usu097",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(991,56,"USU098","Usu098","","Usu098","dtime",0,"px",19,19,"right",null,[],991,"Usu098",!1,8,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(i);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");u=this.DVPANEL_TABLEHEADERContainer;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("Width","Width","100%","str");u.setProp("Height","Height","100","str");u.setProp("AutoWidth","Autowidth",!1,"bool");u.setProp("AutoHeight","Autoheight",!0,"bool");u.setProp("Cls","Cls","PanelFilled_BaseColor","str");u.setProp("ShowHeader","Showheader",!0,"bool");u.setProp("Title","Title","Opciones","str");u.setProp("Collapsible","Collapsible",!0,"bool");u.setProp("Collapsed","Collapsed",!1,"bool");u.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");u.setProp("IconPosition","Iconposition","Right","str");u.setProp("AutoScroll","Autoscroll",!1,"bool");u.setProp("Visible","Visible",!0,"bool");u.setProp("Gx Control Type","Gxcontroltype","","int");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,59,31,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV55GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV55GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV55GridCurrentPage)});t.addV2CFunction("AV56GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV56GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV56GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e111x2_client);t.addEventHandler("ChangeRowsPerPage",this.e121x2_client);this.setUserControl(t);this.INNEWWINDOW1Container=gx.uc.getNew(this,63,31,"InNewWindow","INNEWWINDOW1Container","Innewwindow1","INNEWWINDOW1");r=this.INNEWWINDOW1Container;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setDynProp("Width","Width","50","str");r.setDynProp("Height","Height","50","str");r.setProp("Name","Name","","str");r.setDynProp("Target","Target","","str");r.setProp("Fullscreen","Fullscreen",!1,"bool");r.setProp("Location","Location",!0,"bool");r.setProp("MenuBar","Menubar",!0,"bool");r.setProp("Resizable","Resizable",!0,"bool");r.setProp("Scrollbars","Scrollbars",!0,"bool");r.setProp("TitleBar","Titlebar",!0,"bool");r.setProp("ToolBar","Toolbar",!0,"bool");r.setProp("directories","Directories",!0,"bool");r.setProp("status","Status",!0,"bool");r.setProp("copyhistory","Copyhistory",!0,"bool");r.setProp("top","Top","5","str");r.setProp("left","Left","5","str");r.setProp("fitscreen","Fitscreen",!1,"bool");r.setProp("RefreshParentOnClose","Refreshparentonclose",!1,"bool");r.setProp("Targets","Targets","","str");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEACTIONS",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"BTNINSERT",grid:0,evt:"e131x2_client"};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"BTNEXPORT",grid:0,evt:"e141x2_client"};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"BTNEXPORTREPORT",grid:0,evt:"e151x2_client"};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"TABLEFILTERS",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"svchar",len:130,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vUSUNOM",gxz:"ZV15UsuNom",gxold:"OV15UsuNom",gxvar:"AV15UsuNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV15UsuNom=n)},v2z:function(n){n!==undefined&&(gx.O.ZV15UsuNom=n)},v2c:function(){gx.fn.setControlValue("vUSUNOM",gx.O.AV15UsuNom,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV15UsuNom=this.val())},val:function(){return gx.fn.getControlValue("vUSUNOM")},nac:gx.falseFn};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"",grid:0};n[41]={id:41,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV57Display",gxold:"OV57Display",gxvar:"AV57Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV57Display=n)},v2z:function(n){n!==undefined&&(gx.O.ZV57Display=n)},v2c:function(n){gx.fn.setGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(40),gx.O.AV57Display,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV57Display=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[42]={id:42,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV58Update",gxold:"OV58Update",gxvar:"AV58Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV58Update=n)},v2z:function(n){n!==undefined&&(gx.O.ZV58Update=n)},v2c:function(n){gx.fn.setGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(40),gx.O.AV58Update,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV58Update=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[43]={id:43,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV59Delete",gxold:"OV59Delete",gxvar:"AV59Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV59Delete=n)},v2z:function(n){n!==undefined&&(gx.O.ZV59Delete=n)},v2c:function(n){gx.fn.setGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(40),gx.O.AV59Delete,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV59Delete=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[44]={id:44,lvl:2,type:"int",len:11,dec:0,sign:!1,pic:"ZZZZZZZZZZ9",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUID",gxz:"Z41UsuID",gxold:"O41UsuID",gxvar:"A41UsuID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A41UsuID=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z41UsuID=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("USUID",n||gx.fn.currentGridRowImpl(40),gx.O.A41UsuID,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A41UsuID=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("USUID",n||gx.fn.currentGridRowImpl(40),".")},nac:gx.falseFn};n[45]={id:45,lvl:2,type:"svchar",len:130,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUNOM",gxz:"Z372UsuNom",gxold:"O372UsuNom",gxvar:"A372UsuNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A372UsuNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z372UsuNom=n)},v2c:function(n){gx.fn.setGridControlValue("USUNOM",n||gx.fn.currentGridRowImpl(40),gx.O.A372UsuNom,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A372UsuNom=this.val(n))},val:function(n){return gx.fn.getGridControlValue("USUNOM",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[46]={id:46,lvl:2,type:"char",len:32,dec:0,sign:!1,isPwd:!0,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUPWD",gxz:"Z985UsuPwd",gxold:"O985UsuPwd",gxvar:"A985UsuPwd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A985UsuPwd=n)},v2z:function(n){n!==undefined&&(gx.O.Z985UsuPwd=n)},v2c:function(n){gx.fn.setGridControlValue("USUPWD",n||gx.fn.currentGridRowImpl(40),gx.O.A985UsuPwd,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A985UsuPwd=this.val(n))},val:function(n){return gx.fn.getGridControlValue("USUPWD",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[47]={id:47,lvl:2,type:"char",len:32,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUPWDCONF",gxz:"Z988UsuPwdConf",gxold:"O988UsuPwdConf",gxvar:"A988UsuPwdConf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A988UsuPwdConf=n)},v2z:function(n){n!==undefined&&(gx.O.Z988UsuPwdConf=n)},v2c:function(n){gx.fn.setGridControlValue("USUPWDCONF",n||gx.fn.currentGridRowImpl(40),gx.O.A988UsuPwdConf,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A988UsuPwdConf=this.val(n))},val:function(n){return gx.fn.getGridControlValue("USUPWDCONF",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[48]={id:48,lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUPWDMAR",gxz:"Z375UsuPwdMar",gxold:"O375UsuPwdMar",gxvar:"A375UsuPwdMar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A375UsuPwdMar=n)},v2z:function(n){n!==undefined&&(gx.O.Z375UsuPwdMar=n)},v2c:function(n){gx.fn.setGridControlValue("USUPWDMAR",n||gx.fn.currentGridRowImpl(40),gx.O.A375UsuPwdMar,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A375UsuPwdMar=this.val(n))},val:function(n){return gx.fn.getGridControlValue("USUPWDMAR",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[49]={id:49,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUEST",gxz:"Z984UsuEst",gxold:"O984UsuEst",gxvar:"A984UsuEst",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A984UsuEst=n)},v2z:function(n){n!==undefined&&(gx.O.Z984UsuEst=n)},v2c:function(n){gx.fn.setGridComboBoxValue("USUEST",n||gx.fn.currentGridRowImpl(40),gx.O.A984UsuEst);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A984UsuEst=this.val(n))},val:function(n){return gx.fn.getGridControlValue("USUEST",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[50]={id:50,lvl:2,type:"svchar",len:100,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUMAIL",gxz:"Z989UsuMail",gxold:"O989UsuMail",gxvar:"A989UsuMail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A989UsuMail=n)},v2z:function(n){n!==undefined&&(gx.O.Z989UsuMail=n)},v2c:function(n){gx.fn.setGridControlValue("USUMAIL",n||gx.fn.currentGridRowImpl(40),gx.O.A989UsuMail,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A989UsuMail=this.val(n))},val:function(n){return gx.fn.getGridControlValue("USUMAIL",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[51]={id:51,lvl:2,type:"char",len:32,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUPWDCLA",gxz:"Z993UsuPwdCla",gxold:"O993UsuPwdCla",gxvar:"A993UsuPwdCla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A993UsuPwdCla=n)},v2z:function(n){n!==undefined&&(gx.O.Z993UsuPwdCla=n)},v2c:function(n){gx.fn.setGridControlValue("USUPWDCLA",n||gx.fn.currentGridRowImpl(40),gx.O.A993UsuPwdCla,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A993UsuPwdCla=this.val(n))},val:function(n){return gx.fn.getGridControlValue("USUPWDCLA",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[52]={id:52,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUFOTO",gxz:"Z992UsuFoto",gxold:"O992UsuFoto",gxvar:"A992UsuFoto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A992UsuFoto=n)},v2z:function(n){n!==undefined&&(gx.O.Z992UsuFoto=n)},v2c:function(n){gx.fn.setGridMultimediaValue("USUFOTO",n||gx.fn.currentGridRowImpl(40),gx.O.A992UsuFoto,gx.O.A40000UsuFoto_GXI)},c2v:function(n){gx.O.A40000UsuFoto_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.A992UsuFoto=this.val(n))},val:function(n){return gx.fn.getGridControlValue("USUFOTO",n||gx.fn.currentGridRowImpl(40))},val_GXI:function(n){return gx.fn.getGridControlValue("USUFOTO_GXI",n||gx.fn.currentGridRowImpl(40))},gxvar_GXI:"A40000UsuFoto_GXI",nac:gx.falseFn};n[53]={id:53,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USU094",gxz:"Z986Usu094",gxold:"O986Usu094",gxvar:"A986Usu094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A986Usu094=n)},v2z:function(n){n!==undefined&&(gx.O.Z986Usu094=n)},v2c:function(n){gx.fn.setGridControlValue("USU094",n||gx.fn.currentGridRowImpl(40),gx.O.A986Usu094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A986Usu094=this.val(n))},val:function(n){return gx.fn.getGridControlValue("USU094",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[54]={id:54,lvl:2,type:"dtime",len:10,dec:8,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USU095",gxz:"Z987Usu095",gxold:"O987Usu095",gxvar:"A987Usu095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99:99",dec:8},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A987Usu095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z987Usu095=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("USU095",n||gx.fn.currentGridRowImpl(40),gx.O.A987Usu095,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A987Usu095=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("USU095",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[55]={id:55,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USU097",gxz:"Z990Usu097",gxold:"O990Usu097",gxvar:"A990Usu097",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A990Usu097=n)},v2z:function(n){n!==undefined&&(gx.O.Z990Usu097=n)},v2c:function(n){gx.fn.setGridControlValue("USU097",n||gx.fn.currentGridRowImpl(40),gx.O.A990Usu097,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A990Usu097=this.val(n))},val:function(n){return gx.fn.getGridControlValue("USU097",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[56]={id:56,lvl:2,type:"dtime",len:10,dec:8,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USU098",gxz:"Z991Usu098",gxold:"O991Usu098",gxvar:"A991Usu098",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99:99",dec:8},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A991Usu098=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z991Usu098=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("USU098",n||gx.fn.currentGridRowImpl(40),gx.O.A991Usu098,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A991Usu098=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("USU098",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[57]={id:57,fld:"",grid:0};n[58]={id:58,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};this.AV15UsuNom="";this.ZV15UsuNom="";this.OV15UsuNom="";this.ZV57Display="";this.OV57Display="";this.ZV58Update="";this.OV58Update="";this.ZV59Delete="";this.OV59Delete="";this.Z41UsuID=0;this.O41UsuID=0;this.Z372UsuNom="";this.O372UsuNom="";this.Z985UsuPwd="";this.O985UsuPwd="";this.Z988UsuPwdConf="";this.O988UsuPwdConf="";this.Z375UsuPwdMar="";this.O375UsuPwdMar="";this.Z984UsuEst="";this.O984UsuEst="";this.Z989UsuMail="";this.O989UsuMail="";this.Z993UsuPwdCla="";this.O993UsuPwdCla="";this.Z992UsuFoto="";this.O992UsuFoto="";this.Z986Usu094="";this.O986Usu094="";this.Z987Usu095=gx.date.nullDate();this.O987Usu095=gx.date.nullDate();this.Z990Usu097="";this.O990Usu097="";this.Z991Usu098=gx.date.nullDate();this.O991Usu098=gx.date.nullDate();this.AV15UsuNom="";this.AV55GridCurrentPage=0;this.A40000UsuFoto_GXI="";this.AV57Display="";this.AV58Update="";this.AV59Delete="";this.A41UsuID=0;this.A372UsuNom="";this.A985UsuPwd="";this.A988UsuPwdConf="";this.A375UsuPwdMar="";this.A984UsuEst="";this.A989UsuMail="";this.A993UsuPwdCla="";this.A992UsuFoto="";this.A986Usu094="";this.A987Usu095=gx.date.nullDate();this.A990Usu097="";this.A991Usu098=gx.date.nullDate();this.AV69Pgmname="";this.AV63IsAuthorized_Display=!1;this.AV64IsAuthorized_Update=!1;this.AV65IsAuthorized_Delete=!1;this.Events={e111x2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e121x2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e131x2_client:["'DOINSERT'",!0],e141x2_client:["'DOEXPORT'",!0],e151x2_client:["'DOEXPORTREPORT'",!0],e191x2_client:["ENTER",!0],e201x2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV63IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV64IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV65IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"AV15UsuNom",fld:"vUSUNOM",pic:""},{av:"AV69Pgmname",fld:"vPGMNAME",pic:""}],[{av:"AV55GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV56GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV63IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:"AV64IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:"AV65IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"},{ctrl:"BTNEXPORTREPORT",prop:"Visible"}]];this.EvtParms.START=[[{av:"AV69Pgmname",fld:"vPGMNAME",pic:""}],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:"AV15UsuNom",fld:"vUSUNOM",pic:""},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV69Pgmname",fld:"vPGMNAME",pic:""},{av:"AV63IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV64IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV65IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV15UsuNom",fld:"vUSUNOM",pic:""},{av:"AV69Pgmname",fld:"vPGMNAME",pic:""},{av:"AV63IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV64IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV65IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV15UsuNom",fld:"vUSUNOM",pic:""},{av:"AV69Pgmname",fld:"vPGMNAME",pic:""},{av:"AV63IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV64IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV65IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV63IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"A41UsuID",fld:"USUID",pic:"ZZZZZZZZZZ9",hsh:!0},{av:"AV64IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV65IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""}],[{av:"AV57Display",fld:"vDISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:"vDISPLAY",prop:"Link"},{av:"AV58Update",fld:"vUPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:"vUPDATE",prop:"Link"},{av:"AV59Delete",fld:"vDELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:"vDELETE",prop:"Link"}]];this.EvtParms["'DOINSERT'"]=[[{av:"A41UsuID",fld:"USUID",pic:"ZZZZZZZZZZ9",hsh:!0}],[]];this.EvtParms["'DOEXPORT'"]=[[{av:"AV69Pgmname",fld:"vPGMNAME",pic:""}],[{av:"AV15UsuNom",fld:"vUSUNOM",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV69Pgmname",fld:"vPGMNAME",pic:""},{av:"AV63IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV64IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV65IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""}]];this.EvtParms["'DOEXPORTREPORT'"]=[[{av:"AV69Pgmname",fld:"vPGMNAME",pic:""}],[{av:"this.INNEWWINDOW1Container.Target",ctrl:"INNEWWINDOW1",prop:"Target"},{av:"this.INNEWWINDOW1Container.Height",ctrl:"INNEWWINDOW1",prop:"Height"},{av:"this.INNEWWINDOW1Container.Width",ctrl:"INNEWWINDOW1",prop:"Width"},{av:"AV15UsuNom",fld:"vUSUNOM",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV69Pgmname",fld:"vPGMNAME",pic:""},{av:"AV63IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV64IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV65IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""}]];this.setVCMap("AV69Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV63IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV64IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV65IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV69Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV63IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV64IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV65IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV69Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV63IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV64IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV65IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);i.addRefreshingVar(this.GXValidFnc[31]);i.addRefreshingVar({rfrVar:"AV69Pgmname"});i.addRefreshingVar({rfrVar:"AV63IsAuthorized_Display"});i.addRefreshingVar({rfrVar:"AV64IsAuthorized_Update"});i.addRefreshingVar({rfrVar:"AV65IsAuthorized_Delete"});i.addRefreshingParm(this.GXValidFnc[31]);i.addRefreshingParm({rfrVar:"AV69Pgmname"});i.addRefreshingParm({rfrVar:"AV63IsAuthorized_Display"});i.addRefreshingParm({rfrVar:"AV64IsAuthorized_Update"});i.addRefreshingParm({rfrVar:"AV65IsAuthorized_Delete"});this.Initialize()});gx.wi(function(){gx.createParentObj(wwusuario)})