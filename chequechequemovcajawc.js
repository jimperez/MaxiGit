/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:34:12.29
*/
gx.evt.autoSkip=!1;gx.define("chequechequemovcajawc",!0,function(n){var t,r,i,u;this.ServerClass="chequechequemovcajawc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV20IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY");this.AV8ChequeId=gx.fn.getIntegerValue("vCHEQUEID",".");this.AV8ChequeId=gx.fn.getIntegerValue("vCHEQUEID",".");this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV20IsAuthorized_Display=gx.fn.getControlValue("vISAUTHORIZED_DISPLAY")};this.e11vm2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12vm2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16vm2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17vm2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,14,15,16,17,18,19,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,37,38];this.GXLastCtrlId=38;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",20,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"chequechequemovcajawc",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit("Display",21,"vDISPLAY","","Visualizar","Display","char",0,"px",20,20,"left",null,[],"Display","Display",!0,0,!1,!1,"Attribute",1,"WWIconActionColumn");r.addSingleLineEdit(51,22,"CHEQUEID","Ide.","","ChequeId","int",0,"px",9,9,"right",null,[],51,"ChequeId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3301,23,"CHEQUEMOVCAJAID","Mov.","","ChequeMovCajaId","int",0,"px",2,2,"right",null,[],3301,"ChequeMovCajaId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3307,24,"CHEQUEMOVCAJAENTIDADID","Entidad","","ChequeMovCajaEntidadId","int",0,"px",2,2,"right",null,[],3307,"ChequeMovCajaEntidadId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(3309,25,"CHEQUEMOVCAJASUCID","Sucursal","","ChequeMovCajaSucId","int",0,"px",4,4,"right",null,[],3309,"ChequeMovCajaSucId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3308,26,"CHEQUEMOVCAJAFISICAID","Física","","ChequeMovCajaFisicaId","int",0,"px",4,4,"right",null,[],3308,"ChequeMovCajaFisicaId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3304,27,"CHEQUEMOVCAJAARQUEOID","Nº de Arqueo","","ChequeMovCajaArqueoId","int",0,"px",8,8,"right",null,[],3304,"ChequeMovCajaArqueoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3305,28,"CHEQUEMOVCAJAARQUEONOMBRE","Arqueo","","ChequeMovCajaArqueoNombre","svchar",0,"px",64,64,"left",null,[],3305,"ChequeMovCajaArqueoNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3306,29,"CHEQUEMOVCAJACIERRE","Cierre","","ChequeMovCajaCierre","char",0,"px",20,20,"left",null,[],3306,"ChequeMovCajaCierre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3302,30,"CHEQUEMOVCAJA094","Usuario","","ChequeMovCaja094","char",0,"px",15,15,"left",null,[],3302,"ChequeMovCaja094",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3303,31,"CHEQUEMOVCAJA095","Fecha Hora","","ChequeMovCaja095","dtime",0,"px",14,14,"right",null,[],3303,"ChequeMovCaja095",!0,5,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,34,21,"DVelop_DVPaginationBar",this.CmpContext+"GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");i=this.GRIDPAGINATIONBARContainer;i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Class","Class","PaginationBar","str");i.setProp("ShowFirst","Showfirst",!1,"bool");i.setProp("ShowPrevious","Showprevious",!0,"bool");i.setProp("ShowNext","Shownext",!0,"bool");i.setProp("ShowLast","Showlast",!1,"bool");i.setProp("PagesToShow","Pagestoshow",5,"num");i.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");i.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");i.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");i.setProp("SelectedPage","Selectedpage","","char");i.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");i.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");i.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");i.setProp("First","First","First","str");i.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");i.setProp("Next","Next","WWP_PagingNextCaption","str");i.setProp("Last","Last","Last","str");i.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");i.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");i.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");i.addV2CFunction("AV17GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");i.addC2VFunction(function(n){n.ParentObject.AV17GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV17GridCurrentPage)});i.addV2CFunction("AV18GridPageCount","vGRIDPAGECOUNT","SetPageCount");i.addC2VFunction(function(n){n.ParentObject.AV18GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV18GridPageCount)});i.setProp("RecordCount","Recordcount","","str");i.setProp("Page","Page","","str");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});i.addEventHandler("ChangePage",this.e11vm2_client);i.addEventHandler("ChangeRowsPerPage",this.e12vm2_client);this.setUserControl(i);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,12,0,"BootstrapPanel",this.CmpContext+"DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");u=this.DVPANEL_TABLEHEADERContainer;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("Width","Width","100%","str");u.setProp("Height","Height","100","str");u.setProp("AutoWidth","Autowidth",!1,"bool");u.setProp("AutoHeight","Autoheight",!0,"bool");u.setProp("Cls","Cls","PanelFilled_BaseColor","str");u.setProp("ShowHeader","Showheader",!0,"bool");u.setProp("Title","Title","Moviminentos por Arqueos","str");u.setProp("Collapsible","Collapsible",!0,"bool");u.setProp("Collapsed","Collapsed",!1,"bool");u.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");u.setProp("IconPosition","Iconposition","Right","str");u.setProp("AutoScroll","Autoscroll",!1,"bool");u.setProp("Visible","Visible",!0,"bool");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEGRIDHEADER",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[14]={id:14,fld:"TABLEHEADER",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,fld:"",grid:0};t[21]={id:21,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAY",gxz:"ZV19Display",gxold:"OV19Display",gxvar:"AV19Display",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV19Display=n)},v2z:function(n){n!==undefined&&(gx.O.ZV19Display=n)},v2c:function(n){gx.fn.setGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(20),gx.O.AV19Display,1)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV19Display=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDISPLAY",n||gx.fn.currentGridRowImpl(20))},nac:gx.falseFn};t[22]={id:22,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEID",gxz:"Z51ChequeId",gxold:"O51ChequeId",gxvar:"A51ChequeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A51ChequeId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z51ChequeId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEID",n||gx.fn.currentGridRowImpl(20),gx.O.A51ChequeId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A51ChequeId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUEID",n||gx.fn.currentGridRowImpl(20),".")},nac:gx.falseFn};t[23]={id:23,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJAID",gxz:"Z3301ChequeMovCajaId",gxold:"O3301ChequeMovCajaId",gxvar:"A3301ChequeMovCajaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3301ChequeMovCajaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3301ChequeMovCajaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJAID",n||gx.fn.currentGridRowImpl(20),gx.O.A3301ChequeMovCajaId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3301ChequeMovCajaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUEMOVCAJAID",n||gx.fn.currentGridRowImpl(20),".")},nac:gx.falseFn};t[24]={id:24,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJAENTIDADID",gxz:"Z3307ChequeMovCajaEntidadId",gxold:"O3307ChequeMovCajaEntidadId",gxvar:"A3307ChequeMovCajaEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3307ChequeMovCajaEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3307ChequeMovCajaEntidadId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJAENTIDADID",n||gx.fn.currentGridRowImpl(20),gx.O.A3307ChequeMovCajaEntidadId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3307ChequeMovCajaEntidadId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUEMOVCAJAENTIDADID",n||gx.fn.currentGridRowImpl(20),".")},nac:gx.falseFn};t[25]={id:25,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJASUCID",gxz:"Z3309ChequeMovCajaSucId",gxold:"O3309ChequeMovCajaSucId",gxvar:"A3309ChequeMovCajaSucId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3309ChequeMovCajaSucId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3309ChequeMovCajaSucId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJASUCID",n||gx.fn.currentGridRowImpl(20),gx.O.A3309ChequeMovCajaSucId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3309ChequeMovCajaSucId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUEMOVCAJASUCID",n||gx.fn.currentGridRowImpl(20),".")},nac:gx.falseFn};t[26]={id:26,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJAFISICAID",gxz:"Z3308ChequeMovCajaFisicaId",gxold:"O3308ChequeMovCajaFisicaId",gxvar:"A3308ChequeMovCajaFisicaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3308ChequeMovCajaFisicaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3308ChequeMovCajaFisicaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJAFISICAID",n||gx.fn.currentGridRowImpl(20),gx.O.A3308ChequeMovCajaFisicaId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3308ChequeMovCajaFisicaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUEMOVCAJAFISICAID",n||gx.fn.currentGridRowImpl(20),".")},nac:gx.falseFn};t[27]={id:27,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJAARQUEOID",gxz:"Z3304ChequeMovCajaArqueoId",gxold:"O3304ChequeMovCajaArqueoId",gxvar:"A3304ChequeMovCajaArqueoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3304ChequeMovCajaArqueoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3304ChequeMovCajaArqueoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJAARQUEOID",n||gx.fn.currentGridRowImpl(20),gx.O.A3304ChequeMovCajaArqueoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3304ChequeMovCajaArqueoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUEMOVCAJAARQUEOID",n||gx.fn.currentGridRowImpl(20),".")},nac:gx.falseFn};t[28]={id:28,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJAARQUEONOMBRE",gxz:"Z3305ChequeMovCajaArqueoNombre",gxold:"O3305ChequeMovCajaArqueoNombre",gxvar:"A3305ChequeMovCajaArqueoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3305ChequeMovCajaArqueoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3305ChequeMovCajaArqueoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJAARQUEONOMBRE",n||gx.fn.currentGridRowImpl(20),gx.O.A3305ChequeMovCajaArqueoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3305ChequeMovCajaArqueoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CHEQUEMOVCAJAARQUEONOMBRE",n||gx.fn.currentGridRowImpl(20))},nac:gx.falseFn};t[29]={id:29,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJACIERRE",gxz:"Z3306ChequeMovCajaCierre",gxold:"O3306ChequeMovCajaCierre",gxvar:"A3306ChequeMovCajaCierre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3306ChequeMovCajaCierre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3306ChequeMovCajaCierre=n)},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJACIERRE",n||gx.fn.currentGridRowImpl(20),gx.O.A3306ChequeMovCajaCierre,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3306ChequeMovCajaCierre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CHEQUEMOVCAJACIERRE",n||gx.fn.currentGridRowImpl(20))},nac:gx.falseFn};t[30]={id:30,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJA094",gxz:"Z3302ChequeMovCaja094",gxold:"O3302ChequeMovCaja094",gxvar:"A3302ChequeMovCaja094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3302ChequeMovCaja094=n)},v2z:function(n){n!==undefined&&(gx.O.Z3302ChequeMovCaja094=n)},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJA094",n||gx.fn.currentGridRowImpl(20),gx.O.A3302ChequeMovCaja094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3302ChequeMovCaja094=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CHEQUEMOVCAJA094",n||gx.fn.currentGridRowImpl(20))},nac:gx.falseFn};t[31]={id:31,lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:20,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJA095",gxz:"Z3303ChequeMovCaja095",gxold:"O3303ChequeMovCaja095",gxvar:"A3303ChequeMovCaja095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3303ChequeMovCaja095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z3303ChequeMovCaja095=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJA095",n||gx.fn.currentGridRowImpl(20),gx.O.A3303ChequeMovCaja095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3303ChequeMovCaja095=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("CHEQUEMOVCAJA095",n||gx.fn.currentGridRowImpl(20))},nac:gx.falseFn};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[38]={id:38,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV21OrderedBy",gxold:"OV21OrderedBy",gxvar:"AV21OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV21OrderedBy=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV21OrderedBy=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV21OrderedBy,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV21OrderedBy=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};this.ZV19Display="";this.OV19Display="";this.Z51ChequeId=0;this.O51ChequeId=0;this.Z3301ChequeMovCajaId=0;this.O3301ChequeMovCajaId=0;this.Z3307ChequeMovCajaEntidadId=0;this.O3307ChequeMovCajaEntidadId=0;this.Z3309ChequeMovCajaSucId=0;this.O3309ChequeMovCajaSucId=0;this.Z3308ChequeMovCajaFisicaId=0;this.O3308ChequeMovCajaFisicaId=0;this.Z3304ChequeMovCajaArqueoId=0;this.O3304ChequeMovCajaArqueoId=0;this.Z3305ChequeMovCajaArqueoNombre="";this.O3305ChequeMovCajaArqueoNombre="";this.Z3306ChequeMovCajaCierre="";this.O3306ChequeMovCajaCierre="";this.Z3302ChequeMovCaja094="";this.O3302ChequeMovCaja094="";this.Z3303ChequeMovCaja095=gx.date.nullDate();this.O3303ChequeMovCaja095=gx.date.nullDate();this.AV21OrderedBy=0;this.ZV21OrderedBy=0;this.OV21OrderedBy=0;this.AV17GridCurrentPage=0;this.AV21OrderedBy=0;this.AV8ChequeId=0;this.AV19Display="";this.A51ChequeId=0;this.A3301ChequeMovCajaId=0;this.A3307ChequeMovCajaEntidadId=0;this.A3309ChequeMovCajaSucId=0;this.A3308ChequeMovCajaFisicaId=0;this.A3304ChequeMovCajaArqueoId=0;this.A3305ChequeMovCajaArqueoNombre="";this.A3306ChequeMovCajaCierre="";this.A3302ChequeMovCaja094="";this.A3303ChequeMovCaja095=gx.date.nullDate();this.AV24Pgmname="";this.AV20IsAuthorized_Display=!1;this.Events={e11vm2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12vm2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16vm2_client:["ENTER",!0],e17vm2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV8ChequeId",fld:"vCHEQUEID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{av:"AV21OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV24Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV20IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0}],[{av:"AV17GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV18GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"AV20IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vDISPLAY","Visible")',ctrl:"vDISPLAY",prop:"Visible"}]];this.EvtParms.START=[[{av:"AV21OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV24Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV8ChequeId",fld:"vCHEQUEID",pic:"ZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:"vORDEREDBY",prop:"Visible"},{av:"AV21OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV21OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV8ChequeId",fld:"vCHEQUEID",pic:"ZZZZZZZZ9"},{av:"AV24Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV20IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV21OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"AV8ChequeId",fld:"vCHEQUEID",pic:"ZZZZZZZZ9"},{av:"AV24Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV20IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"sPrefix"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV20IsAuthorized_Display",fld:"vISAUTHORIZED_DISPLAY",pic:"",hsh:!0},{av:"A51ChequeId",fld:"CHEQUEID",pic:"ZZZZZZZZ9"},{av:"A3301ChequeMovCajaId",fld:"CHEQUEMOVCAJAID",pic:"Z9"}],[{av:"AV19Display",fld:"vDISPLAY",pic:""},{av:'gx.fn.getCtrlProperty("vDISPLAY","Link")',ctrl:"vDISPLAY",prop:"Link"}]];this.setVCMap("AV24Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV20IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV8ChequeId","vCHEQUEID",0,"int",9,0);this.setVCMap("AV8ChequeId","vCHEQUEID",0,"int",9,0);this.setVCMap("AV24Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV20IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);this.setVCMap("AV8ChequeId","vCHEQUEID",0,"int",9,0);this.setVCMap("AV24Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV20IsAuthorized_Display","vISAUTHORIZED_DISPLAY",0,"boolean",4,0);r.addRefreshingVar(this.GXValidFnc[38]);r.addRefreshingVar({rfrVar:"AV8ChequeId"});r.addRefreshingVar({rfrVar:"AV24Pgmname"});r.addRefreshingVar({rfrVar:"AV20IsAuthorized_Display"});r.addRefreshingParm(this.GXValidFnc[38]);r.addRefreshingParm({rfrVar:"AV8ChequeId"});r.addRefreshingParm({rfrVar:"AV24Pgmname"});r.addRefreshingParm({rfrVar:"AV20IsAuthorized_Display"});this.Initialize()})