/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:50:5.47
*/
gx.evt.autoSkip=!1;gx.define("promptcajafisica",!1,function(){var n,r,i,t;this.ServerClass="promptcajafisica";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV84InCajaFisicaEntidadId=gx.fn.getIntegerValue("vINCAJAFISICAENTIDADID",".");this.AV85InCajaFisicaSucursalId=gx.fn.getIntegerValue("vINCAJAFISICASUCURSALID",".");this.AV9InOutCajaFisicaId=gx.fn.getIntegerValue("vINOUTCAJAFISICAID",".");this.AV10InOutCajaFisicaEntidadNombre=gx.fn.getControlValue("vINOUTCAJAFISICAENTIDADNOMBRE");this.AV84InCajaFisicaEntidadId=gx.fn.getIntegerValue("vINCAJAFISICAENTIDADID",".");this.AV85InCajaFisicaSucursalId=gx.fn.getIntegerValue("vINCAJAFISICASUCURSALID",".")};this.Valid_Cajafisicasucursalid=function(){var n=gx.fn.currentGridRowImpl(25);return this.validCliEvt("Valid_Cajafisicasucursalid",25,function(){try{if(gx.fn.currentGridRowImpl(25)===0)return!0;var n=gx.util.balloon.getNew("CAJAFISICASUCURSALID",gx.fn.currentGridRowImpl(25));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Cajafisicaentidadid=function(){return this.validCliEvt("Valid_Cajafisicaentidadid",0,function(){try{var n=gx.util.balloon.getNew("CAJAFISICAENTIDADID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11472_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12472_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16472_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17472_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34,36,37,38,39,40];this.GXLastCtrlId=40;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",25,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptcajafisica",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addBitmap("&Select","vSELECT",26,0,"px",17,"px","e16472_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");r.addSingleLineEdit(32,27,"CAJAFISICASUCURSALID","Ide.","","CajaFisicaSucursalId","int",0,"px",4,4,"right",null,[],32,"CajaFisicaSucursalId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(1150,28,"CAJAFISICASUCURSALNOMBRE","Sucursal","","CajaFisicaSucursalNombre","svchar",0,"px",64,64,"left",null,[],1150,"CajaFisicaSucursalNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(33,29,"CAJAFISICAID","Ide.","","CajaFisicaId","int",0,"px",4,4,"right",null,[],33,"CajaFisicaId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(443,30,"CAJAFISICANOMBRE","Caja Fisica","","CajaFisicaNombre","svchar",0,"px",64,64,"left",null,[],443,"CajaFisicaNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addComboBox(444,31,"CAJAFISICAESTADO","Estado","CajaFisicaEstado","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");r.addComboBox(474,32,"CAJAFISICATIPO","Tipo","CajaFisicaTipo","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");i=this.DVPANEL_TABLEHEADERContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Opciones","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,35,19,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV42GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV42GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV42GridCurrentPage)});t.addV2CFunction("AV43GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV43GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV43GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11472_client);t.addEventHandler("ChangeRowsPerPage",this.e12472_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEFILTERS",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vCAJAFISICASUCURSALNOMBRE",gxz:"ZV89CajaFisicaSucursalNombre",gxold:"OV89CajaFisicaSucursalNombre",gxvar:"AV89CajaFisicaSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV89CajaFisicaSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV89CajaFisicaSucursalNombre=n)},v2c:function(){gx.fn.setControlValue("vCAJAFISICASUCURSALNOMBRE",gx.O.AV89CajaFisicaSucursalNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV89CajaFisicaSucursalNombre=this.val())},val:function(){return gx.fn.getControlValue("vCAJAFISICASUCURSALNOMBRE")},nac:gx.falseFn};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[26]={id:26,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV39Select",gxold:"OV39Select",gxvar:"AV39Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV39Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV39Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(25),gx.O.AV39Select,gx.O.AV94Select_GXI)},c2v:function(n){gx.O.AV94Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV39Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(25))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(25))},gxvar_GXI:"AV94Select_GXI",nac:gx.falseFn,evt:"e16472_client",std:"ENTER"};n[27]={id:27,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:this.Valid_Cajafisicasucursalid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICASUCURSALID",gxz:"Z32CajaFisicaSucursalId",gxold:"O32CajaFisicaSucursalId",gxvar:"A32CajaFisicaSucursalId",ucs:[],op:[28,40],ip:[28,40,27,39],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A32CajaFisicaSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z32CajaFisicaSucursalId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CAJAFISICASUCURSALID",n||gx.fn.currentGridRowImpl(25),gx.O.A32CajaFisicaSucursalId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A32CajaFisicaSucursalId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CAJAFISICASUCURSALID",n||gx.fn.currentGridRowImpl(25),".")},nac:gx.falseFn};n[28]={id:28,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICASUCURSALNOMBRE",gxz:"Z1150CajaFisicaSucursalNombre",gxold:"O1150CajaFisicaSucursalNombre",gxvar:"A1150CajaFisicaSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1150CajaFisicaSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1150CajaFisicaSucursalNombre=n)},v2c:function(n){gx.fn.setGridControlValue("CAJAFISICASUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(25),gx.O.A1150CajaFisicaSucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1150CajaFisicaSucursalNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CAJAFISICASUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};n[29]={id:29,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICAID",gxz:"Z33CajaFisicaId",gxold:"O33CajaFisicaId",gxvar:"A33CajaFisicaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A33CajaFisicaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z33CajaFisicaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CAJAFISICAID",n||gx.fn.currentGridRowImpl(25),gx.O.A33CajaFisicaId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A33CajaFisicaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CAJAFISICAID",n||gx.fn.currentGridRowImpl(25),".")},nac:gx.falseFn};n[30]={id:30,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICANOMBRE",gxz:"Z443CajaFisicaNombre",gxold:"O443CajaFisicaNombre",gxvar:"A443CajaFisicaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A443CajaFisicaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z443CajaFisicaNombre=n)},v2c:function(n){gx.fn.setGridControlValue("CAJAFISICANOMBRE",n||gx.fn.currentGridRowImpl(25),gx.O.A443CajaFisicaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A443CajaFisicaNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CAJAFISICANOMBRE",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};n[31]={id:31,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICAESTADO",gxz:"Z444CajaFisicaEstado",gxold:"O444CajaFisicaEstado",gxvar:"A444CajaFisicaEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A444CajaFisicaEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z444CajaFisicaEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("CAJAFISICAESTADO",n||gx.fn.currentGridRowImpl(25),gx.O.A444CajaFisicaEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A444CajaFisicaEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CAJAFISICAESTADO",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};n[32]={id:32,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICATIPO",gxz:"Z474CajaFisicaTipo",gxold:"O474CajaFisicaTipo",gxvar:"A474CajaFisicaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A474CajaFisicaTipo=n)},v2z:function(n){n!==undefined&&(gx.O.Z474CajaFisicaTipo=n)},v2c:function(n){gx.fn.setGridComboBoxValue("CAJAFISICATIPO",n||gx.fn.currentGridRowImpl(25),gx.O.A474CajaFisicaTipo);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A474CajaFisicaTipo=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CAJAFISICATIPO",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[39]={id:39,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cajafisicaentidadid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICAENTIDADID",gxz:"Z31CajaFisicaEntidadId",gxold:"O31CajaFisicaEntidadId",gxvar:"A31CajaFisicaEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A31CajaFisicaEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z31CajaFisicaEntidadId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CAJAFISICAENTIDADID",gx.O.A31CajaFisicaEntidadId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A31CajaFisicaEntidadId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CAJAFISICAENTIDADID",".")},nac:gx.falseFn};n[40]={id:40,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFISICAENTIDADNOMBRE",gxz:"Z1149CajaFisicaEntidadNombre",gxold:"O1149CajaFisicaEntidadNombre",gxvar:"A1149CajaFisicaEntidadNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1149CajaFisicaEntidadNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1149CajaFisicaEntidadNombre=n)},v2c:function(){gx.fn.setControlValue("CAJAFISICAENTIDADNOMBRE",gx.O.A1149CajaFisicaEntidadNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A1149CajaFisicaEntidadNombre=this.val())},val:function(){return gx.fn.getControlValue("CAJAFISICAENTIDADNOMBRE")},nac:gx.falseFn};this.declareDomainHdlr(40,function(){});this.AV89CajaFisicaSucursalNombre="";this.ZV89CajaFisicaSucursalNombre="";this.OV89CajaFisicaSucursalNombre="";this.ZV39Select="";this.OV39Select="";this.Z32CajaFisicaSucursalId=0;this.O32CajaFisicaSucursalId=0;this.Z1150CajaFisicaSucursalNombre="";this.O1150CajaFisicaSucursalNombre="";this.Z33CajaFisicaId=0;this.O33CajaFisicaId=0;this.Z443CajaFisicaNombre="";this.O443CajaFisicaNombre="";this.Z444CajaFisicaEstado="";this.O444CajaFisicaEstado="";this.Z474CajaFisicaTipo="";this.O474CajaFisicaTipo="";this.A31CajaFisicaEntidadId=0;this.Z31CajaFisicaEntidadId=0;this.O31CajaFisicaEntidadId=0;this.A1149CajaFisicaEntidadNombre="";this.Z1149CajaFisicaEntidadNombre="";this.O1149CajaFisicaEntidadNombre="";this.AV89CajaFisicaSucursalNombre="";this.AV42GridCurrentPage=0;this.A31CajaFisicaEntidadId=0;this.A1149CajaFisicaEntidadNombre="";this.AV84InCajaFisicaEntidadId=0;this.AV85InCajaFisicaSucursalId=0;this.AV9InOutCajaFisicaId=0;this.AV10InOutCajaFisicaEntidadNombre="";this.AV39Select="";this.A32CajaFisicaSucursalId=0;this.A1150CajaFisicaSucursalNombre="";this.A33CajaFisicaId=0;this.A443CajaFisicaNombre="";this.A444CajaFisicaEstado="";this.A474CajaFisicaTipo="";this.Events={e11472_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12472_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16472_client:["ENTER",!0],e17472_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV89CajaFisicaSucursalNombre",fld:"vCAJAFISICASUCURSALNOMBRE",pic:"@!"},{av:"AV84InCajaFisicaEntidadId",fld:"vINCAJAFISICAENTIDADID",pic:"Z9"},{av:"AV85InCajaFisicaSucursalId",fld:"vINCAJAFISICASUCURSALID",pic:"ZZZ9"}],[{av:"AV42GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV43GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CAJAFISICAENTIDADID","Visible")',ctrl:"CAJAFISICAENTIDADID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("CAJAFISICAENTIDADNOMBRE","Visible")',ctrl:"CAJAFISICAENTIDADNOMBRE",prop:"Visible"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV89CajaFisicaSucursalNombre",fld:"vCAJAFISICASUCURSALNOMBRE",pic:"@!"},{av:"AV84InCajaFisicaEntidadId",fld:"vINCAJAFISICAENTIDADID",pic:"Z9"},{av:"AV85InCajaFisicaSucursalId",fld:"vINCAJAFISICASUCURSALID",pic:"ZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV89CajaFisicaSucursalNombre",fld:"vCAJAFISICASUCURSALNOMBRE",pic:"@!"},{av:"AV84InCajaFisicaEntidadId",fld:"vINCAJAFISICAENTIDADID",pic:"Z9"},{av:"AV85InCajaFisicaSucursalId",fld:"vINCAJAFISICASUCURSALID",pic:"ZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV39Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A33CajaFisicaId",fld:"CAJAFISICAID",pic:"ZZZ9",hsh:!0},{av:"A1149CajaFisicaEntidadNombre",fld:"CAJAFISICAENTIDADNOMBRE",pic:"@!"}],[{av:"AV9InOutCajaFisicaId",fld:"vINOUTCAJAFISICAID",pic:"ZZZ9"},{av:"AV10InOutCajaFisicaEntidadNombre",fld:"vINOUTCAJAFISICAENTIDADNOMBRE",pic:"@!"}]];this.EvtParms.VALID_CAJAFISICAENTIDADID=[[],[]];this.EvtParms.VALID_CAJAFISICASUCURSALID=[[{av:"A1150CajaFisicaSucursalNombre",fld:"CAJAFISICASUCURSALNOMBRE",pic:"@!"},{av:"A1149CajaFisicaEntidadNombre",fld:"CAJAFISICAENTIDADNOMBRE",pic:"@!"},{av:"A32CajaFisicaSucursalId",fld:"CAJAFISICASUCURSALID",pic:"ZZZ9"},{av:"A31CajaFisicaEntidadId",fld:"CAJAFISICAENTIDADID",pic:"Z9"}],[{av:"A1150CajaFisicaSucursalNombre",fld:"CAJAFISICASUCURSALNOMBRE",pic:"@!"},{av:"A1149CajaFisicaEntidadNombre",fld:"CAJAFISICAENTIDADNOMBRE",pic:"@!"}]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV84InCajaFisicaEntidadId","vINCAJAFISICAENTIDADID",0,"int",2,0);this.setVCMap("AV85InCajaFisicaSucursalId","vINCAJAFISICASUCURSALID",0,"int",4,0);this.setVCMap("AV9InOutCajaFisicaId","vINOUTCAJAFISICAID",0,"int",4,0);this.setVCMap("AV10InOutCajaFisicaEntidadNombre","vINOUTCAJAFISICAENTIDADNOMBRE",0,"svchar",64,0);this.setVCMap("AV84InCajaFisicaEntidadId","vINCAJAFISICAENTIDADID",0,"int",2,0);this.setVCMap("AV85InCajaFisicaSucursalId","vINCAJAFISICASUCURSALID",0,"int",4,0);this.setVCMap("AV84InCajaFisicaEntidadId","vINCAJAFISICAENTIDADID",0,"int",2,0);this.setVCMap("AV85InCajaFisicaSucursalId","vINCAJAFISICASUCURSALID",0,"int",4,0);r.addRefreshingVar(this.GXValidFnc[19]);r.addRefreshingVar({rfrVar:"AV84InCajaFisicaEntidadId"});r.addRefreshingVar({rfrVar:"AV85InCajaFisicaSucursalId"});r.addRefreshingParm(this.GXValidFnc[19]);r.addRefreshingParm({rfrVar:"AV84InCajaFisicaEntidadId"});r.addRefreshingParm({rfrVar:"AV85InCajaFisicaSucursalId"});this.Initialize()});gx.wi(function(){gx.createParentObj(promptcajafisica)})