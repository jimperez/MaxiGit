/*!   GeneXus C# 16_0_5-135614 on 10/21/2019 11:44:26.68
*/
gx.evt.autoSkip=!1;gx.define("wwdeposito",!1,function(){var n,i,r,t;this.ServerClass="wwdeposito";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV56Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV50IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV51IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV52IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE");this.AV56Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV50IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV51IsAuthorized_Update=gx.fn.getControlValue("vISAUTHORIZED_UPDATE");this.AV52IsAuthorized_Delete=gx.fn.getControlValue("vISAUTHORIZED_DELETE")};this.Valid_Entidadid=function(){var n=gx.fn.currentGridRowImpl(40);return this.validCliEvt("Valid_Entidadid",40,function(){try{if(gx.fn.currentGridRowImpl(40)===0)return!0;var n=gx.util.balloon.getNew("ENTIDADID",gx.fn.currentGridRowImpl(40));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Sucursalid=function(){var n=gx.fn.currentGridRowImpl(40);return this.validCliEvt("Valid_Sucursalid",40,function(){try{if(gx.fn.currentGridRowImpl(40)===0)return!0;var n=gx.util.balloon.getNew("SUCURSALID",gx.fn.currentGridRowImpl(40));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Tipodepositoid=function(){var n=gx.fn.currentGridRowImpl(40);return this.validCliEvt("Valid_Tipodepositoid",40,function(){try{if(gx.fn.currentGridRowImpl(40)===0)return!0;var n=gx.util.balloon.getNew("TIPODEPOSITOID",gx.fn.currentGridRowImpl(40));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11182_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12182_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e13182_client=function(){return this.executeServerEvent("'DOINSERT'",!1,null,!1,!1)};this.e17182_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e18182_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,37,38,39,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57];this.GXLastCtrlId=57;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",40,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwdeposito",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addSingleLineEdit("Display",41,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");i.addSingleLineEdit("Update",42,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");i.addSingleLineEdit("Delete",43,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");i.addSingleLineEdit(44,44,"ENTIDADID","Ide.","","EntidadId","int",0,"px",2,2,"right",null,[],44,"EntidadId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(373,45,"ENTIDADNOMBRE","Empresa","","EntidadNombre","svchar",0,"px",64,64,"left",null,[],373,"EntidadNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(45,46,"SUCURSALID","Ide.","","SucursalId","int",0,"px",4,4,"right",null,[],45,"SucursalId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(374,47,"SUCURSALNOMBRE","Sucursal","","SucursalNombre","svchar",0,"px",64,64,"left",null,[],374,"SucursalNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(121,48,"DEPOSITOID","Ide.","","DepositoId","int",0,"px",4,4,"right",null,[],121,"DepositoId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(876,49,"DEPOSITONOMBRE","Depósito","","DepositoNombre","svchar",0,"px",64,64,"left",null,[],876,"DepositoNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(122,50,"TIPODEPOSITOID","Ide.","","TipoDepositoId","int",0,"px",4,4,"right",null,[],122,"TipoDepositoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(877,51,"TIPODEPOSITONOMBRE","Tipo","","TipoDepositoNombre","svchar",0,"px",64,64,"left",null,[],877,"TipoDepositoNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addComboBox(911,52,"TIPODEPOSITOESTADO","Estado","TipoDepositoEstado","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");i.addComboBox(1531,53,"DEPOSITOFACTURABLE","Facturable","DepositoFacturable","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");i.addComboBox(1533,54,"DEPOSITOSTOCK","Stock","DepositoStock","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");i.addComboBox(910,55,"DEPOSITOESTADO","Estado","DepositoEstado","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(i);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");r=this.DVPANEL_TABLEHEADERContainer;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Width","Width","100%","str");r.setProp("Height","Height","100","str");r.setProp("AutoWidth","Autowidth",!1,"bool");r.setProp("AutoHeight","Autoheight",!0,"bool");r.setProp("Cls","Cls","PanelFilled_BaseColor","str");r.setProp("ShowHeader","Showheader",!0,"bool");r.setProp("Title","Title","Opciones","str");r.setProp("Collapsible","Collapsible",!0,"bool");r.setProp("Collapsed","Collapsed",!1,"bool");r.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");r.setProp("IconPosition","Iconposition","Right","str");r.setProp("AutoScroll","Autoscroll",!1,"bool");r.setProp("Visible","Visible",!0,"bool");r.setProp("Gx Control Type","Gxcontroltype","","int");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,58,27,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV38GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV38GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV38GridCurrentPage)});t.addV2CFunction("AV39GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV39GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV39GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11182_client);t.addEventHandler("ChangeRowsPerPage",this.e12182_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEACTIONS",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"BTNINSERT",grid:0,evt:"e13182_client"};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"TABLEFILTERS",grid:0};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vDEPOSITONOMBRE",gxz:"ZV14DepositoNombre",gxold:"OV14DepositoNombre",gxvar:"AV14DepositoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV14DepositoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV14DepositoNombre=n)},v2c:function(){gx.fn.setControlValue("vDEPOSITONOMBRE",gx.O.AV14DepositoNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV14DepositoNombre=this.val())},val:function(){return gx.fn.getControlValue("vDEPOSITONOMBRE")},nac:gx.falseFn};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSUCURSALNOMBRE",gxz:"ZV15SucursalNombre",gxold:"OV15SucursalNombre",gxvar:"AV15SucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV15SucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV15SucursalNombre=n)},v2c:function(){gx.fn.setControlValue("vSUCURSALNOMBRE",gx.O.AV15SucursalNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV15SucursalNombre=this.val())},val:function(){return gx.fn.getControlValue("vSUCURSALNOMBRE")},nac:gx.falseFn};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"",grid:0};n[41]={id:41,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV42Display",gxold:"OV42Display",gxvar:"AV42Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV42Display=n)},v2z:function(n){n!==undefined&&(gx.O.ZV42Display=n)},v2c:function(n){gx.fn.setGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(40),gx.O.AV42Display,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV42Display=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[42]={id:42,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV41Update",gxold:"OV41Update",gxvar:"AV41Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV41Update=n)},v2z:function(n){n!==undefined&&(gx.O.ZV41Update=n)},v2c:function(n){gx.fn.setGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(40),gx.O.AV41Update,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV41Update=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[43]={id:43,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV40Delete",gxold:"OV40Delete",gxvar:"AV40Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV40Delete=n)},v2z:function(n){n!==undefined&&(gx.O.ZV40Delete=n)},v2c:function(n){gx.fn.setGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(40),gx.O.AV40Delete,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV40Delete=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[44]={id:44,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:this.Valid_Entidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ENTIDADID",gxz:"Z44EntidadId",gxold:"O44EntidadId",gxvar:"A44EntidadId",ucs:[],op:[47,45,51,52],ip:[47,45,51,52,46,44,50],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A44EntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z44EntidadId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ENTIDADID",n||gx.fn.currentGridRowImpl(40),gx.O.A44EntidadId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A44EntidadId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ENTIDADID",n||gx.fn.currentGridRowImpl(40),".")},nac:gx.falseFn};n[45]={id:45,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ENTIDADNOMBRE",gxz:"Z373EntidadNombre",gxold:"O373EntidadNombre",gxvar:"A373EntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A373EntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z373EntidadNombre=n)},v2c:function(n){gx.fn.setGridControlValue("ENTIDADNOMBRE",n||gx.fn.currentGridRowImpl(40),gx.O.A373EntidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A373EntidadNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ENTIDADNOMBRE",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[46]={id:46,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:this.Valid_Sucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SUCURSALID",gxz:"Z45SucursalId",gxold:"O45SucursalId",gxvar:"A45SucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A45SucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z45SucursalId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("SUCURSALID",n||gx.fn.currentGridRowImpl(40),gx.O.A45SucursalId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A45SucursalId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("SUCURSALID",n||gx.fn.currentGridRowImpl(40),".")},nac:gx.falseFn};n[47]={id:47,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SUCURSALNOMBRE",gxz:"Z374SucursalNombre",gxold:"O374SucursalNombre",gxvar:"A374SucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A374SucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z374SucursalNombre=n)},v2c:function(n){gx.fn.setGridControlValue("SUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(40),gx.O.A374SucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A374SucursalNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("SUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[48]={id:48,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DEPOSITOID",gxz:"Z121DepositoId",gxold:"O121DepositoId",gxvar:"A121DepositoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A121DepositoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z121DepositoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("DEPOSITOID",n||gx.fn.currentGridRowImpl(40),gx.O.A121DepositoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A121DepositoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("DEPOSITOID",n||gx.fn.currentGridRowImpl(40),".")},nac:gx.falseFn};n[49]={id:49,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DEPOSITONOMBRE",gxz:"Z876DepositoNombre",gxold:"O876DepositoNombre",gxvar:"A876DepositoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A876DepositoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z876DepositoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("DEPOSITONOMBRE",n||gx.fn.currentGridRowImpl(40),gx.O.A876DepositoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A876DepositoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("DEPOSITONOMBRE",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[50]={id:50,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:this.Valid_Tipodepositoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TIPODEPOSITOID",gxz:"Z122TipoDepositoId",gxold:"O122TipoDepositoId",gxvar:"A122TipoDepositoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A122TipoDepositoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z122TipoDepositoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("TIPODEPOSITOID",n||gx.fn.currentGridRowImpl(40),gx.O.A122TipoDepositoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A122TipoDepositoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("TIPODEPOSITOID",n||gx.fn.currentGridRowImpl(40),".")},nac:gx.falseFn};n[51]={id:51,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TIPODEPOSITONOMBRE",gxz:"Z877TipoDepositoNombre",gxold:"O877TipoDepositoNombre",gxvar:"A877TipoDepositoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A877TipoDepositoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z877TipoDepositoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("TIPODEPOSITONOMBRE",n||gx.fn.currentGridRowImpl(40),gx.O.A877TipoDepositoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A877TipoDepositoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TIPODEPOSITONOMBRE",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[52]={id:52,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TIPODEPOSITOESTADO",gxz:"Z911TipoDepositoEstado",gxold:"O911TipoDepositoEstado",gxvar:"A911TipoDepositoEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A911TipoDepositoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z911TipoDepositoEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("TIPODEPOSITOESTADO",n||gx.fn.currentGridRowImpl(40),gx.O.A911TipoDepositoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A911TipoDepositoEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TIPODEPOSITOESTADO",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[53]={id:53,lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DEPOSITOFACTURABLE",gxz:"Z1531DepositoFacturable",gxold:"O1531DepositoFacturable",gxvar:"A1531DepositoFacturable",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1531DepositoFacturable=n)},v2z:function(n){n!==undefined&&(gx.O.Z1531DepositoFacturable=n)},v2c:function(n){gx.fn.setGridComboBoxValue("DEPOSITOFACTURABLE",n||gx.fn.currentGridRowImpl(40),gx.O.A1531DepositoFacturable)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1531DepositoFacturable=this.val(n))},val:function(n){return gx.fn.getGridControlValue("DEPOSITOFACTURABLE",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[54]={id:54,lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DEPOSITOSTOCK",gxz:"Z1533DepositoStock",gxold:"O1533DepositoStock",gxvar:"A1533DepositoStock",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1533DepositoStock=n)},v2z:function(n){n!==undefined&&(gx.O.Z1533DepositoStock=n)},v2c:function(n){gx.fn.setGridComboBoxValue("DEPOSITOSTOCK",n||gx.fn.currentGridRowImpl(40),gx.O.A1533DepositoStock)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1533DepositoStock=this.val(n))},val:function(n){return gx.fn.getGridControlValue("DEPOSITOSTOCK",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[55]={id:55,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DEPOSITOESTADO",gxz:"Z910DepositoEstado",gxold:"O910DepositoEstado",gxvar:"A910DepositoEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A910DepositoEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z910DepositoEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("DEPOSITOESTADO",n||gx.fn.currentGridRowImpl(40),gx.O.A910DepositoEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A910DepositoEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("DEPOSITOESTADO",n||gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};this.AV14DepositoNombre="";this.ZV14DepositoNombre="";this.OV14DepositoNombre="";this.AV15SucursalNombre="";this.ZV15SucursalNombre="";this.OV15SucursalNombre="";this.ZV42Display="";this.OV42Display="";this.ZV41Update="";this.OV41Update="";this.ZV40Delete="";this.OV40Delete="";this.Z44EntidadId=0;this.O44EntidadId=0;this.Z373EntidadNombre="";this.O373EntidadNombre="";this.Z45SucursalId=0;this.O45SucursalId=0;this.Z374SucursalNombre="";this.O374SucursalNombre="";this.Z121DepositoId=0;this.O121DepositoId=0;this.Z876DepositoNombre="";this.O876DepositoNombre="";this.Z122TipoDepositoId=0;this.O122TipoDepositoId=0;this.Z877TipoDepositoNombre="";this.O877TipoDepositoNombre="";this.Z911TipoDepositoEstado="";this.O911TipoDepositoEstado="";this.Z1531DepositoFacturable="";this.O1531DepositoFacturable="";this.Z1533DepositoStock="";this.O1533DepositoStock="";this.Z910DepositoEstado="";this.O910DepositoEstado="";this.AV14DepositoNombre="";this.AV15SucursalNombre="";this.AV38GridCurrentPage=0;this.AV42Display="";this.AV41Update="";this.AV40Delete="";this.A44EntidadId=0;this.A373EntidadNombre="";this.A45SucursalId=0;this.A374SucursalNombre="";this.A121DepositoId=0;this.A876DepositoNombre="";this.A122TipoDepositoId=0;this.A877TipoDepositoNombre="";this.A911TipoDepositoEstado="";this.A1531DepositoFacturable="";this.A1533DepositoStock="";this.A910DepositoEstado="";this.AV56Pgmname="";this.AV50IsAuthorized_Display=!1;this.AV51IsAuthorized_Update=!1;this.AV52IsAuthorized_Delete=!1;this.Events={e11182_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12182_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e13182_client:["'DOINSERT'",!0],e17182_client:["ENTER",!0],e18182_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV50IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV51IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV52IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{ctrl:"GRID",prop:"Rows"},{av:"AV14DepositoNombre",fld:"vDEPOSITONOMBRE",pic:"@!"},{av:"AV15SucursalNombre",fld:"vSUCURSALNOMBRE",pic:"@!"},{av:"AV56Pgmname",fld:"vPGMNAME",pic:""}],[{av:"AV38GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV39GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV50IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"},{av:"AV51IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Visible")',ctrl:"vUPDATE",prop:"Visible"},{av:"AV52IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Visible")',ctrl:"vDELETE",prop:"Visible"},{ctrl:"BTNINSERT",prop:"Visible"}]];this.EvtParms.START=[[{av:"AV56Pgmname",fld:"vPGMNAME",pic:""}],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:"AV14DepositoNombre",fld:"vDEPOSITONOMBRE",pic:"@!"},{av:"AV15SucursalNombre",fld:"vSUCURSALNOMBRE",pic:"@!"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV56Pgmname",fld:"vPGMNAME",pic:""},{av:"AV50IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV51IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV52IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV14DepositoNombre",fld:"vDEPOSITONOMBRE",pic:"@!"},{av:"AV15SucursalNombre",fld:"vSUCURSALNOMBRE",pic:"@!"},{av:"AV56Pgmname",fld:"vPGMNAME",pic:""},{av:"AV50IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV51IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV52IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV14DepositoNombre",fld:"vDEPOSITONOMBRE",pic:"@!"},{av:"AV15SucursalNombre",fld:"vSUCURSALNOMBRE",pic:"@!"},{av:"AV56Pgmname",fld:"vPGMNAME",pic:""},{av:"AV50IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"AV51IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV52IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV50IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:""},{av:"A44EntidadId",fld:"ENTIDADID",pic:"Z9",hsh:!0},{av:"A45SucursalId",fld:"SUCURSALID",pic:"ZZZ9",hsh:!0},{av:"A121DepositoId",fld:"DEPOSITOID",pic:"ZZZ9",hsh:!0},{av:"AV51IsAuthorized_Update",fld:"vISAUTHORIZED_UPDATE",pic:""},{av:"AV52IsAuthorized_Delete",fld:"vISAUTHORIZED_DELETE",pic:""}],[{av:"AV42Display",fld:"vDISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:"vDISPLAY",prop:"Link"},{av:"AV41Update",fld:"vUPDATE",pic:""},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:"vUPDATE",prop:"Link"},{av:"AV40Delete",fld:"vDELETE",pic:""},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:"vDELETE",prop:"Link"}]];this.EvtParms["'DOINSERT'"]=[[{av:"A44EntidadId",fld:"ENTIDADID",pic:"Z9",hsh:!0},{av:"A45SucursalId",fld:"SUCURSALID",pic:"ZZZ9",hsh:!0},{av:"A121DepositoId",fld:"DEPOSITOID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.VALID_ENTIDADID=[[{av:"A374SucursalNombre",fld:"SUCURSALNOMBRE",pic:"@!"},{av:"A373EntidadNombre",fld:"ENTIDADNOMBRE",pic:"@!"},{av:"A877TipoDepositoNombre",fld:"TIPODEPOSITONOMBRE",pic:"@!"},{ctrl:"TIPODEPOSITOESTADO"},{av:"A911TipoDepositoEstado",fld:"TIPODEPOSITOESTADO",pic:"@!"},{av:"A45SucursalId",fld:"SUCURSALID",pic:"ZZZ9",hsh:!0},{av:"A44EntidadId",fld:"ENTIDADID",pic:"Z9",hsh:!0},{av:"A122TipoDepositoId",fld:"TIPODEPOSITOID",pic:"ZZZ9"}],[{av:"A374SucursalNombre",fld:"SUCURSALNOMBRE",pic:"@!"},{av:"A373EntidadNombre",fld:"ENTIDADNOMBRE",pic:"@!"},{av:"A877TipoDepositoNombre",fld:"TIPODEPOSITONOMBRE",pic:"@!"},{ctrl:"TIPODEPOSITOESTADO"},{av:"A911TipoDepositoEstado",fld:"TIPODEPOSITOESTADO",pic:"@!"}]];this.EvtParms.VALID_SUCURSALID=[[],[]];this.EvtParms.VALID_TIPODEPOSITOID=[[],[]];this.setVCMap("AV56Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV50IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV51IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV52IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV56Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV50IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV51IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV52IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);this.setVCMap("AV56Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV50IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV51IsAuthorized_Update","vISAUTHORIZED_UPDATE",0,"boolean",4,0);this.setVCMap("AV52IsAuthorized_Delete","vISAUTHORIZED_DELETE",0,"boolean",4,0);i.addRefreshingVar(this.GXValidFnc[27]);i.addRefreshingVar(this.GXValidFnc[31]);i.addRefreshingVar({rfrVar:"AV56Pgmname"});i.addRefreshingVar({rfrVar:"AV50IsAuthorized_Display"});i.addRefreshingVar({rfrVar:"AV51IsAuthorized_Update"});i.addRefreshingVar({rfrVar:"AV52IsAuthorized_Delete"});i.addRefreshingParm(this.GXValidFnc[27]);i.addRefreshingParm(this.GXValidFnc[31]);i.addRefreshingParm({rfrVar:"AV56Pgmname"});i.addRefreshingParm({rfrVar:"AV50IsAuthorized_Display"});i.addRefreshingParm({rfrVar:"AV51IsAuthorized_Update"});i.addRefreshingParm({rfrVar:"AV52IsAuthorized_Delete"});this.Initialize()});gx.wi(function(){gx.createParentObj(wwdeposito)})