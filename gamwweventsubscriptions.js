/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:23:58.72
*/
gx.evt.autoSkip=!1;gx.define("gamwweventsubscriptions",!1,function(){var n,i,r,t;this.ServerClass="gamwweventsubscriptions";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV69Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV63IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV64IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV65IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE");this.AV31IsAuthorized_Description=gx.fn.getControlValue("vISAUTHORIZED_DESCRIPTION");this.AV69Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV63IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV64IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV65IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE");this.AV31IsAuthorized_Description=gx.fn.getControlValue("vISAUTHORIZED_DESCRIPTION")};this.Validv_Status=function(){var n=gx.fn.currentGridRowImpl(32);return this.validCliEvt("Validv_Status",32,function(){try{var n=gx.util.balloon.getNew("vSTATUS");if(this.AnyError=0,!(this.AV17Status=="u"||this.AV17Status=="s"))try{n.setError("Campo Status fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Validv_Event=function(){var n=gx.fn.currentGridRowImpl(32);return this.validCliEvt("Validv_Event",32,function(){try{var n=gx.util.balloon.getNew("vEVENT");if(this.AnyError=0,!(this.AV10Event=="user-update"||this.AV10Event=="user-insert"||this.AV10Event=="user-delete"||this.AV10Event=="user-updateroles"||this.AV10Event=="user-getcustominfo"||this.AV10Event=="user-savecustominfo"||this.AV10Event=="role-insert"||this.AV10Event=="role-update"||this.AV10Event=="role-delete"||this.AV10Event=="repository-login"||this.AV10Event=="repository-logout"||this.AV10Event=="application-checkprmfail"||this.AV10Event=="externalauthentication-response"))try{n.setError("Campo Event fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11tp1_client=function(){return this.clearMessages(),this.call("gameventsubscriptionentry.aspx",["INS",""]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12tp2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e13tp2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e17tp2_client=function(){return this.executeServerEvent("VSUBSCRIBE.CLICK",!0,arguments[0],!1,!1)};this.e18tp2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e19tp2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,24,25,27,28,29,30,31,33,34,35,36,37,38,39,40,41,42,43,44,45];this.GXLastCtrlId=45;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",32,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"gamwweventsubscriptions",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addSingleLineEdit("Display",33,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");i.addSingleLineEdit("Update",34,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");i.addSingleLineEdit("Delete",35,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");i.addSingleLineEdit("Description",36,"vDESCRIPTION","Event Description","","Description","char",410,"px",254,80,"left",null,[],"Description","Description",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addComboBox("Status",37,"vSTATUS","Status","Status","char",null,0,!0,!1,0,"px","WWColumn");i.addSingleLineEdit("Subscribe",38,"vSUBSCRIBE","","","Subscribe","char",0,"px",20,20,"left","e17tp2_client",[],"Subscribe","Subscribe",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");i.addComboBox("Event",39,"vEVENT","Entity","Event","char",null,0,!0,!1,0,"px","WWColumn");i.addSingleLineEdit("Filename",40,"vFILENAME","File Name","","FileName","char",410,"px",254,80,"left",null,[],"Filename","FileName",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit("Classname",41,"vCLASSNAME","Class Name","","ClassName","char",0,"px",60,60,"left",null,[],"Classname","ClassName",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit("Methodname",42,"vMETHODNAME","Method Name","","MethodName","char",0,"px",60,60,"left",null,[],"Methodname","MethodName",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit("Id",43,"vID","GUID","","Id","char",0,"px",40,40,"left",null,[],"Id","Id",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(i);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");r=this.DVPANEL_TABLEHEADERContainer;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Width","Width","100%","str");r.setProp("Height","Height","100","str");r.setProp("AutoWidth","Autowidth",!1,"bool");r.setProp("AutoHeight","Autoheight",!0,"bool");r.setProp("Cls","Cls","PanelFilled_BaseColor","str");r.setProp("ShowHeader","Showheader",!0,"bool");r.setProp("Title","Title","Opciones","str");r.setProp("Collapsible","Collapsible",!0,"bool");r.setProp("Collapsed","Collapsed",!1,"bool");r.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");r.setProp("IconPosition","Iconposition","Right","str");r.setProp("AutoScroll","Autoscroll",!1,"bool");r.setProp("Visible","Visible",!0,"bool");r.setProp("Gx Control Type","Gxcontroltype","","int");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,46,33,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV58GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV58GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV58GridCurrentPage)});t.addV2CFunction("AV59GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV59GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV59GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e12tp2_client);t.addEventHandler("ChangeRowsPerPage",this.e13tp2_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEACTIONS",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"BTNINSERT",grid:0,evt:"e11tp1_client"};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"TABLERIGHTHEADER",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[33]={id:33,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:0,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV61Display",gxold:"OV61Display",gxvar:"AV61Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV61Display=n)},v2z:function(n){n!==undefined&&(gx.O.ZV61Display=n)},v2c:function(n){gx.fn.setGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(32),gx.O.AV61Display,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV61Display=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};n[34]={id:34,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:0,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV62Update",gxold:"OV62Update",gxvar:"AV62Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV62Update=n)},v2z:function(n){n!==undefined&&(gx.O.ZV62Update=n)},v2c:function(n){gx.fn.setGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(32),gx.O.AV62Update,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV62Update=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};n[35]={id:35,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:0,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV18Delete",gxold:"OV18Delete",gxvar:"AV18Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV18Delete=n)},v2z:function(n){n!==undefined&&(gx.O.ZV18Delete=n)},v2c:function(n){gx.fn.setGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(32),gx.O.AV18Delete,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV18Delete=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};n[36]={id:36,lvl:2,type:"char",len:254,dec:0,sign:!1,ro:0,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDESCRIPTION",gxz:"ZV8Description",gxold:"OV8Description",gxvar:"AV8Description",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV8Description=n)},v2z:function(n){n!==undefined&&(gx.O.ZV8Description=n)},v2c:function(n){gx.fn.setGridControlValue("vDESCRIPTION",n||gx.fn.currentGridRowImpl(32),gx.O.AV8Description,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV8Description=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDESCRIPTION",n||gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};n[37]={id:37,lvl:2,type:"char",len:1,dec:0,sign:!1,ro:0,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:this.Validv_Status,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSTATUS",gxz:"ZV17Status",gxold:"OV17Status",gxvar:"AV17Status",ucs:[],op:[37],ip:[37],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV17Status=n)},v2z:function(n){n!==undefined&&(gx.O.ZV17Status=n)},v2c:function(n){gx.fn.setGridComboBoxValue("vSTATUS",n||gx.fn.currentGridRowImpl(32),gx.O.AV17Status);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV17Status=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSTATUS",n||gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};n[38]={id:38,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:0,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSUBSCRIBE",gxz:"ZV26Subscribe",gxold:"OV26Subscribe",gxvar:"AV26Subscribe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV26Subscribe=n)},v2z:function(n){n!==undefined&&(gx.O.ZV26Subscribe=n)},v2c:function(n){gx.fn.setGridControlValue("vSUBSCRIBE",n||gx.fn.currentGridRowImpl(32),gx.O.AV26Subscribe,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV26Subscribe=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSUBSCRIBE",n||gx.fn.currentGridRowImpl(32))},nac:gx.falseFn,evt:"e17tp2_client"};n[39]={id:39,lvl:2,type:"char",len:60,dec:0,sign:!1,ro:0,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:this.Validv_Event,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vEVENT",gxz:"ZV10Event",gxold:"OV10Event",gxvar:"AV10Event",ucs:[],op:[39],ip:[39],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV10Event=n)},v2z:function(n){n!==undefined&&(gx.O.ZV10Event=n)},v2c:function(n){gx.fn.setGridComboBoxValue("vEVENT",n||gx.fn.currentGridRowImpl(32),gx.O.AV10Event);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV10Event=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vEVENT",n||gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};n[40]={id:40,lvl:2,type:"char",len:254,dec:0,sign:!1,ro:0,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFILENAME",gxz:"ZV13FileName",gxold:"OV13FileName",gxvar:"AV13FileName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV13FileName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV13FileName=n)},v2c:function(n){gx.fn.setGridControlValue("vFILENAME",n||gx.fn.currentGridRowImpl(32),gx.O.AV13FileName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV13FileName=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vFILENAME",n||gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};n[41]={id:41,lvl:2,type:"char",len:60,dec:0,sign:!1,ro:0,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCLASSNAME",gxz:"ZV6ClassName",gxold:"OV6ClassName",gxvar:"AV6ClassName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV6ClassName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV6ClassName=n)},v2c:function(n){gx.fn.setGridControlValue("vCLASSNAME",n||gx.fn.currentGridRowImpl(32),gx.O.AV6ClassName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV6ClassName=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vCLASSNAME",n||gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};n[42]={id:42,lvl:2,type:"char",len:60,dec:0,sign:!1,ro:0,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMETHODNAME",gxz:"ZV15MethodName",gxold:"OV15MethodName",gxvar:"AV15MethodName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV15MethodName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV15MethodName=n)},v2c:function(n){gx.fn.setGridControlValue("vMETHODNAME",n||gx.fn.currentGridRowImpl(32),gx.O.AV15MethodName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV15MethodName=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vMETHODNAME",n||gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};n[43]={id:43,lvl:2,type:"char",len:40,dec:0,sign:!1,ro:0,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vID",gxz:"ZV14Id",gxold:"OV14Id",gxvar:"AV14Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV14Id=n)},v2z:function(n){n!==undefined&&(gx.O.ZV14Id=n)},v2c:function(n){gx.fn.setGridControlValue("vID",n||gx.fn.currentGridRowImpl(32),gx.O.AV14Id,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV14Id=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vID",n||gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};this.ZV61Display="";this.OV61Display="";this.ZV62Update="";this.OV62Update="";this.ZV18Delete="";this.OV18Delete="";this.ZV8Description="";this.OV8Description="";this.ZV17Status="";this.OV17Status="";this.ZV26Subscribe="";this.OV26Subscribe="";this.ZV10Event="";this.OV10Event="";this.ZV13FileName="";this.OV13FileName="";this.ZV6ClassName="";this.OV6ClassName="";this.ZV15MethodName="";this.OV15MethodName="";this.ZV14Id="";this.OV14Id="";this.AV58GridCurrentPage=0;this.AV61Display="";this.AV62Update="";this.AV18Delete="";this.AV8Description="";this.AV17Status="";this.AV26Subscribe="";this.AV10Event="";this.AV13FileName="";this.AV6ClassName="";this.AV15MethodName="";this.AV14Id="";this.AV69Pgmname="";this.AV63IsAuthorized_Display=!1;this.AV64IsAuthorized_Update=!1;this.AV65IsAuthorized_Delete=!1;this.AV31IsAuthorized_Description=!1;this.Events={e12tp2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e13tp2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e17tp2_client:["VSUBSCRIBE.CLICK",!0],e18tp2_client:["ENTER",!0],e19tp2_client:["CANCEL",!0],e11tp1_client:["'DOINSERT'",!1]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV63IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV64IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV65IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"AV69Pgmname",fld:"vPGMNAME",pic:""},{av:"AV31IsAuthorized_Description",fld:"vISAUTHORIZED_DESCRIPTION",pic:"",hsh:!0}],[{av:"AV58GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV63IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:"AV64IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:"AV65IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"}]];this.EvtParms.START=[[{av:"AV69Pgmname",fld:"vPGMNAME",pic:""}],[{ctrl:"GRID",prop:"Rows"},{av:"AV31IsAuthorized_Description",fld:"vISAUTHORIZED_DESCRIPTION",pic:"",hsh:!0},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV69Pgmname",fld:"vPGMNAME",pic:""},{av:"AV63IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV64IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV65IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV69Pgmname",fld:"vPGMNAME",pic:""},{av:"AV63IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV64IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV65IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"AV31IsAuthorized_Description",fld:"vISAUTHORIZED_DESCRIPTION",pic:"",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV69Pgmname",fld:"vPGMNAME",pic:""},{av:"AV63IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV64IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV65IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"AV31IsAuthorized_Description",fld:"vISAUTHORIZED_DESCRIPTION",pic:"",hsh:!0},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV63IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV64IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV65IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"AV31IsAuthorized_Description",fld:"vISAUTHORIZED_DESCRIPTION",pic:"",hsh:!0}],[{av:"AV59GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV14Id",fld:"vID",pic:"",hsh:!0},{av:"AV8Description",fld:"vDESCRIPTION",pic:"",hsh:!0},{ctrl:"vSTATUS"},{av:"AV17Status",fld:"vSTATUS",pic:""},{ctrl:"vEVENT"},{av:"AV10Event",fld:"vEVENT",pic:""},{av:"AV13FileName",fld:"vFILENAME",pic:""},{av:"AV6ClassName",fld:"vCLASSNAME",pic:""},{av:"AV15MethodName",fld:"vMETHODNAME",pic:""},{av:"AV61Display",fld:"vDISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:"vDISPLAY",prop:"Link"},{av:"AV62Update",fld:"vUPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:"vUPDATE",prop:"Link"},{av:"AV18Delete",fld:"vDELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:"vDELETE",prop:"Link"},{av:"AV26Subscribe",fld:"vSUBSCRIBE",pic:""},{av:'gx.fn.getCtrlProperty("vDESCRIPTION","Link")',ctrl:"vDESCRIPTION",prop:"Link"},{av:'gx.fn.getCtrlProperty("vSUBSCRIBE","Tooltiptext")',ctrl:"vSUBSCRIBE",prop:"Tooltiptext"}]];this.EvtParms["'DOINSERT'"]=[[],[]];this.EvtParms["VSUBSCRIBE.CLICK"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV69Pgmname",fld:"vPGMNAME",pic:""},{av:"AV63IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV64IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV65IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"AV31IsAuthorized_Description",fld:"vISAUTHORIZED_DESCRIPTION",pic:"",hsh:!0},{ctrl:"vSTATUS"},{av:"AV17Status",fld:"vSTATUS",pic:""},{av:"AV14Id",fld:"vID",pic:"",hsh:!0},{av:"AV8Description",fld:"vDESCRIPTION",pic:"",hsh:!0}],[{ctrl:"vSTATUS"},{av:"AV17Status",fld:"vSTATUS",pic:""},{av:"AV58GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV63IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:"AV64IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:"AV65IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"}]];this.EvtParms.VALIDV_STATUS=[[{ctrl:"vSTATUS"},{av:"AV17Status",fld:"vSTATUS",pic:""}],[{ctrl:"vSTATUS"},{av:"AV17Status",fld:"vSTATUS",pic:""}]];this.EvtParms.VALIDV_EVENT=[[{ctrl:"vEVENT"},{av:"AV10Event",fld:"vEVENT",pic:""}],[{ctrl:"vEVENT"},{av:"AV10Event",fld:"vEVENT",pic:""}]];this.setVCMap("AV69Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV63IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV64IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV65IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV31IsAuthorized_Description","vISAUTHORIZED_DESCRIPTION",0,"boolean",4,0);this.setVCMap("AV69Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV63IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV64IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV65IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV31IsAuthorized_Description","vISAUTHORIZED_DESCRIPTION",0,"boolean",4,0);this.setVCMap("AV69Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV63IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV64IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV65IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV31IsAuthorized_Description","vISAUTHORIZED_DESCRIPTION",0,"boolean",4,0);i.addRefreshingVar({rfrVar:"AV69Pgmname"});i.addRefreshingVar({rfrVar:"AV63IsAuthorized_Display"});i.addRefreshingVar({rfrVar:"AV64IsAuthorized_Update"});i.addRefreshingVar({rfrVar:"AV65IsAuthorized_Delete"});i.addRefreshingVar({rfrVar:"AV31IsAuthorized_Description"});i.addRefreshingParm({rfrVar:"AV69Pgmname"});i.addRefreshingParm({rfrVar:"AV63IsAuthorized_Display"});i.addRefreshingParm({rfrVar:"AV64IsAuthorized_Update"});i.addRefreshingParm({rfrVar:"AV65IsAuthorized_Delete"});i.addRefreshingParm({rfrVar:"AV31IsAuthorized_Description"});this.Initialize()});gx.wi(function(){gx.createParentObj(gamwweventsubscriptions)})