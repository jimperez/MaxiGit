/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:59:29.8
*/
gx.evt.autoSkip=!1;gx.define("promptchequemovcaja",!1,function(){var t,r,i,n;this.ServerClass="promptchequemovcaja";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV42InChequeId=gx.fn.getIntegerValue("vINCHEQUEID",".");this.AV43InOutChequeMovCajaId=gx.fn.getIntegerValue("vINOUTCHEQUEMOVCAJAID",".");this.AV49InOutChequeMovCajaEntidadId=gx.fn.getIntegerValue("vINOUTCHEQUEMOVCAJAENTIDADID",".");this.AV42InChequeId=gx.fn.getIntegerValue("vINCHEQUEID",".")};this.e11vp2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12vp2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16vp2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17vp2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,32];this.GXLastCtrlId=32;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",19,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptchequemovcaja",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addBitmap("&Select","vSELECT",20,0,"px",17,"px","e16vp2_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");r.addSingleLineEdit(51,21,"CHEQUEID","Ide.","","ChequeId","int",0,"px",9,9,"right",null,[],51,"ChequeId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3301,22,"CHEQUEMOVCAJAID","Mov.","","ChequeMovCajaId","int",0,"px",2,2,"right",null,[],3301,"ChequeMovCajaId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3307,23,"CHEQUEMOVCAJAENTIDADID","Entidad","","ChequeMovCajaEntidadId","int",0,"px",2,2,"right",null,[],3307,"ChequeMovCajaEntidadId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(3309,24,"CHEQUEMOVCAJASUCID","Sucursal","","ChequeMovCajaSucId","int",0,"px",4,4,"right",null,[],3309,"ChequeMovCajaSucId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3308,25,"CHEQUEMOVCAJAFISICAID","Física","","ChequeMovCajaFisicaId","int",0,"px",4,4,"right",null,[],3308,"ChequeMovCajaFisicaId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3304,26,"CHEQUEMOVCAJAARQUEOID","Nº de Arqueo","","ChequeMovCajaArqueoId","int",0,"px",8,8,"right",null,[],3304,"ChequeMovCajaArqueoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3305,27,"CHEQUEMOVCAJAARQUEONOMBRE","Arqueo","","ChequeMovCajaArqueoNombre","svchar",0,"px",64,64,"left",null,[],3305,"ChequeMovCajaArqueoNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3306,28,"CHEQUEMOVCAJACIERRE","Cierre","","ChequeMovCajaCierre","char",0,"px",20,20,"left",null,[],3306,"ChequeMovCajaCierre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3302,29,"CHEQUEMOVCAJA094","Usuario","","ChequeMovCaja094","char",0,"px",15,15,"left",null,[],3302,"ChequeMovCaja094",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(3303,30,"CHEQUEMOVCAJA095","Fecha Hora","","ChequeMovCaja095","dtime",0,"px",14,14,"right",null,[],3303,"ChequeMovCaja095",!0,5,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");i=this.DVPANEL_TABLEHEADERContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Opciones","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,33,20,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");n=this.GRIDPAGINATIONBARContainer;n.setProp("Enabled","Enabled",!0,"boolean");n.setProp("Class","Class","PaginationBar","str");n.setProp("ShowFirst","Showfirst",!1,"bool");n.setProp("ShowPrevious","Showprevious",!0,"bool");n.setProp("ShowNext","Shownext",!0,"bool");n.setProp("ShowLast","Showlast",!1,"bool");n.setProp("PagesToShow","Pagestoshow",5,"num");n.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");n.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");n.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");n.setProp("SelectedPage","Selectedpage","","char");n.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");n.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");n.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");n.setProp("First","First","First","str");n.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");n.setProp("Next","Next","WWP_PagingNextCaption","str");n.setProp("Last","Last","Last","str");n.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");n.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");n.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");n.addV2CFunction("AV39GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");n.addC2VFunction(function(n){n.ParentObject.AV39GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV39GridCurrentPage)});n.addV2CFunction("AV40GridPageCount","vGRIDPAGECOUNT","SetPageCount");n.addC2VFunction(function(n){n.ParentObject.AV40GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV40GridPageCount)});n.setProp("RecordCount","Recordcount","","str");n.setProp("Page","Page","","str");n.setProp("Visible","Visible",!0,"bool");n.setC2ShowFunction(function(n){n.show()});n.addEventHandler("ChangePage",this.e11vp2_client);n.addEventHandler("ChangeRowsPerPage",this.e12vp2_client);this.setUserControl(n);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEMAIN",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[11]={id:11,fld:"TABLEHEADER",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[20]={id:20,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV41Select",gxold:"OV41Select",gxvar:"AV41Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV41Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV41Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(19),gx.O.AV41Select,gx.O.AV52Select_GXI)},c2v:function(n){gx.O.AV52Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV41Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(19))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(19))},gxvar_GXI:"AV52Select_GXI",nac:gx.falseFn,evt:"e16vp2_client",std:"ENTER"};t[21]={id:21,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEID",gxz:"Z51ChequeId",gxold:"O51ChequeId",gxvar:"A51ChequeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A51ChequeId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z51ChequeId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEID",n||gx.fn.currentGridRowImpl(19),gx.O.A51ChequeId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A51ChequeId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUEID",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};t[22]={id:22,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJAID",gxz:"Z3301ChequeMovCajaId",gxold:"O3301ChequeMovCajaId",gxvar:"A3301ChequeMovCajaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3301ChequeMovCajaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3301ChequeMovCajaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJAID",n||gx.fn.currentGridRowImpl(19),gx.O.A3301ChequeMovCajaId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3301ChequeMovCajaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUEMOVCAJAID",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};t[23]={id:23,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJAENTIDADID",gxz:"Z3307ChequeMovCajaEntidadId",gxold:"O3307ChequeMovCajaEntidadId",gxvar:"A3307ChequeMovCajaEntidadId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3307ChequeMovCajaEntidadId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3307ChequeMovCajaEntidadId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJAENTIDADID",n||gx.fn.currentGridRowImpl(19),gx.O.A3307ChequeMovCajaEntidadId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3307ChequeMovCajaEntidadId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUEMOVCAJAENTIDADID",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};t[24]={id:24,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJASUCID",gxz:"Z3309ChequeMovCajaSucId",gxold:"O3309ChequeMovCajaSucId",gxvar:"A3309ChequeMovCajaSucId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3309ChequeMovCajaSucId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3309ChequeMovCajaSucId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJASUCID",n||gx.fn.currentGridRowImpl(19),gx.O.A3309ChequeMovCajaSucId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3309ChequeMovCajaSucId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUEMOVCAJASUCID",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};t[25]={id:25,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJAFISICAID",gxz:"Z3308ChequeMovCajaFisicaId",gxold:"O3308ChequeMovCajaFisicaId",gxvar:"A3308ChequeMovCajaFisicaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3308ChequeMovCajaFisicaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3308ChequeMovCajaFisicaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJAFISICAID",n||gx.fn.currentGridRowImpl(19),gx.O.A3308ChequeMovCajaFisicaId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3308ChequeMovCajaFisicaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUEMOVCAJAFISICAID",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};t[26]={id:26,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJAARQUEOID",gxz:"Z3304ChequeMovCajaArqueoId",gxold:"O3304ChequeMovCajaArqueoId",gxvar:"A3304ChequeMovCajaArqueoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A3304ChequeMovCajaArqueoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z3304ChequeMovCajaArqueoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJAARQUEOID",n||gx.fn.currentGridRowImpl(19),gx.O.A3304ChequeMovCajaArqueoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3304ChequeMovCajaArqueoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CHEQUEMOVCAJAARQUEOID",n||gx.fn.currentGridRowImpl(19),".")},nac:gx.falseFn};t[27]={id:27,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJAARQUEONOMBRE",gxz:"Z3305ChequeMovCajaArqueoNombre",gxold:"O3305ChequeMovCajaArqueoNombre",gxvar:"A3305ChequeMovCajaArqueoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3305ChequeMovCajaArqueoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3305ChequeMovCajaArqueoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJAARQUEONOMBRE",n||gx.fn.currentGridRowImpl(19),gx.O.A3305ChequeMovCajaArqueoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3305ChequeMovCajaArqueoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CHEQUEMOVCAJAARQUEONOMBRE",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};t[28]={id:28,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJACIERRE",gxz:"Z3306ChequeMovCajaCierre",gxold:"O3306ChequeMovCajaCierre",gxvar:"A3306ChequeMovCajaCierre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3306ChequeMovCajaCierre=n)},v2z:function(n){n!==undefined&&(gx.O.Z3306ChequeMovCajaCierre=n)},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJACIERRE",n||gx.fn.currentGridRowImpl(19),gx.O.A3306ChequeMovCajaCierre,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3306ChequeMovCajaCierre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CHEQUEMOVCAJACIERRE",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};t[29]={id:29,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJA094",gxz:"Z3302ChequeMovCaja094",gxold:"O3302ChequeMovCaja094",gxvar:"A3302ChequeMovCaja094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A3302ChequeMovCaja094=n)},v2z:function(n){n!==undefined&&(gx.O.Z3302ChequeMovCaja094=n)},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJA094",n||gx.fn.currentGridRowImpl(19),gx.O.A3302ChequeMovCaja094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3302ChequeMovCaja094=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CHEQUEMOVCAJA094",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};t[30]={id:30,lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CHEQUEMOVCAJA095",gxz:"Z3303ChequeMovCaja095",gxold:"O3303ChequeMovCaja095",gxvar:"A3303ChequeMovCaja095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3303ChequeMovCaja095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z3303ChequeMovCaja095=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("CHEQUEMOVCAJA095",n||gx.fn.currentGridRowImpl(19),gx.O.A3303ChequeMovCaja095,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3303ChequeMovCaja095=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("CHEQUEMOVCAJA095",n||gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};t[31]={id:31,fld:"",grid:0};t[32]={id:32,fld:"",grid:0};this.ZV41Select="";this.OV41Select="";this.Z51ChequeId=0;this.O51ChequeId=0;this.Z3301ChequeMovCajaId=0;this.O3301ChequeMovCajaId=0;this.Z3307ChequeMovCajaEntidadId=0;this.O3307ChequeMovCajaEntidadId=0;this.Z3309ChequeMovCajaSucId=0;this.O3309ChequeMovCajaSucId=0;this.Z3308ChequeMovCajaFisicaId=0;this.O3308ChequeMovCajaFisicaId=0;this.Z3304ChequeMovCajaArqueoId=0;this.O3304ChequeMovCajaArqueoId=0;this.Z3305ChequeMovCajaArqueoNombre="";this.O3305ChequeMovCajaArqueoNombre="";this.Z3306ChequeMovCajaCierre="";this.O3306ChequeMovCajaCierre="";this.Z3302ChequeMovCaja094="";this.O3302ChequeMovCaja094="";this.Z3303ChequeMovCaja095=gx.date.nullDate();this.O3303ChequeMovCaja095=gx.date.nullDate();this.AV39GridCurrentPage=0;this.AV42InChequeId=0;this.AV43InOutChequeMovCajaId=0;this.AV49InOutChequeMovCajaEntidadId=0;this.AV41Select="";this.A51ChequeId=0;this.A3301ChequeMovCajaId=0;this.A3307ChequeMovCajaEntidadId=0;this.A3309ChequeMovCajaSucId=0;this.A3308ChequeMovCajaFisicaId=0;this.A3304ChequeMovCajaArqueoId=0;this.A3305ChequeMovCajaArqueoNombre="";this.A3306ChequeMovCajaCierre="";this.A3302ChequeMovCaja094="";this.A3303ChequeMovCaja095=gx.date.nullDate();this.Events={e11vp2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12vp2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16vp2_client:["ENTER",!0],e17vp2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV42InChequeId",fld:"vINCHEQUEID",pic:"ZZZZZZZZ9"}],[{av:"AV39GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV40GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV42InChequeId",fld:"vINCHEQUEID",pic:"ZZZZZZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV42InChequeId",fld:"vINCHEQUEID",pic:"ZZZZZZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV41Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A3301ChequeMovCajaId",fld:"CHEQUEMOVCAJAID",pic:"Z9",hsh:!0},{av:"A3307ChequeMovCajaEntidadId",fld:"CHEQUEMOVCAJAENTIDADID",pic:"Z9",hsh:!0}],[{av:"AV43InOutChequeMovCajaId",fld:"vINOUTCHEQUEMOVCAJAID",pic:"Z9"},{av:"AV49InOutChequeMovCajaEntidadId",fld:"vINOUTCHEQUEMOVCAJAENTIDADID",pic:"Z9"}]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV42InChequeId","vINCHEQUEID",0,"int",9,0);this.setVCMap("AV43InOutChequeMovCajaId","vINOUTCHEQUEMOVCAJAID",0,"int",2,0);this.setVCMap("AV49InOutChequeMovCajaEntidadId","vINOUTCHEQUEMOVCAJAENTIDADID",0,"int",2,0);this.setVCMap("AV42InChequeId","vINCHEQUEID",0,"int",9,0);this.setVCMap("AV42InChequeId","vINCHEQUEID",0,"int",9,0);r.addRefreshingVar({rfrVar:"AV42InChequeId"});r.addRefreshingParm({rfrVar:"AV42InChequeId"});this.Initialize()});gx.wi(function(){gx.createParentObj(promptchequemovcaja)})