/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:48:44.76
*/
gx.evt.autoSkip=!1;gx.define("promptbancosucursal",!1,function(){var t,r,i,n;this.ServerClass="promptbancosucursal";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV58InBancoId=gx.fn.getIntegerValue("vINBANCOID",".");this.AV8InOutBancoSucursalId=gx.fn.getIntegerValue("vINOUTBANCOSUCURSALID",".");this.AV9InOutBancoSucursalNombre=gx.fn.getControlValue("vINOUTBANCOSUCURSALNOMBRE");this.AV58InBancoId=gx.fn.getIntegerValue("vINBANCOID",".")};this.Valid_Bancoid=function(){var n=gx.fn.currentGridRowImpl(29);return this.validCliEvt("Valid_Bancoid",29,function(){try{if(gx.fn.currentGridRowImpl(29)===0)return!0;var n=gx.util.balloon.getNew("BANCOID",gx.fn.currentGridRowImpl(29));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11232_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12232_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16232_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17232_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,17,18,19,21,22,23,24,25,26,27,28,30,31,32,33,34,35,36,37];this.GXLastCtrlId=37;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",29,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptbancosucursal",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addBitmap("&Select","vSELECT",30,0,"px",17,"px","e16232_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");r.addSingleLineEdit(29,31,"BANCOID","Banco","","BancoId","int",0,"px",3,3,"right",null,[],29,"BancoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(432,32,"BANCONOMBRE","Banco","","BancoNombre","svchar",0,"px",64,64,"left",null,[],432,"BancoNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(165,33,"BANCOSUCURSALID","Sucursal","","BancoSucursalId","int",0,"px",3,3,"right",null,[],165,"BancoSucursalId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(1522,34,"BANCOSUCURSALNOMBRE","Sucursal Banco","","BancoSucursalNombre","svchar",0,"px",64,64,"left",null,[],1522,"BancoSucursalNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(1090,35,"BANCOSUCURSALDIRECCION","Dirección","","BancoSucursalDireccion","svchar",0,"px",64,64,"left",null,[],1090,"BancoSucursalDireccion",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");i=this.DVPANEL_TABLEHEADERContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Opciones","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,38,19,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");n=this.GRIDPAGINATIONBARContainer;n.setProp("Enabled","Enabled",!0,"boolean");n.setProp("Class","Class","PaginationBar","str");n.setProp("ShowFirst","Showfirst",!1,"bool");n.setProp("ShowPrevious","Showprevious",!0,"bool");n.setProp("ShowNext","Shownext",!0,"bool");n.setProp("ShowLast","Showlast",!1,"bool");n.setProp("PagesToShow","Pagestoshow",5,"num");n.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");n.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");n.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");n.setProp("SelectedPage","Selectedpage","","char");n.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");n.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");n.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");n.setProp("First","First","First","str");n.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");n.setProp("Next","Next","WWP_PagingNextCaption","str");n.setProp("Last","Last","Last","str");n.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");n.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");n.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");n.addV2CFunction("AV37GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");n.addC2VFunction(function(n){n.ParentObject.AV37GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV37GridCurrentPage)});n.addV2CFunction("AV38GridPageCount","vGRIDPAGECOUNT","SetPageCount");n.addC2VFunction(function(n){n.ParentObject.AV38GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV38GridPageCount)});n.setProp("RecordCount","Recordcount","","str");n.setProp("Page","Page","","str");n.setProp("Visible","Visible",!0,"bool");n.setC2ShowFunction(function(n){n.show()});n.addEventHandler("ChangePage",this.e11232_client);n.addEventHandler("ChangeRowsPerPage",this.e12232_client);this.setUserControl(n);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEMAIN",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[11]={id:11,fld:"TABLEHEADER",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"TABLEFILTERS",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vBANCOSUCURSALID",gxz:"ZV57BancoSucursalId",gxold:"OV57BancoSucursalId",gxvar:"AV57BancoSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV57BancoSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV57BancoSucursalId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vBANCOSUCURSALID",gx.O.AV57BancoSucursalId,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV57BancoSucursalId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vBANCOSUCURSALID",".")},nac:gx.falseFn};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vBANCOSUCURSALNOMBRE",gxz:"ZV35BancoSucursalNombre",gxold:"OV35BancoSucursalNombre",gxvar:"AV35BancoSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV35BancoSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV35BancoSucursalNombre=n)},v2c:function(){gx.fn.setControlValue("vBANCOSUCURSALNOMBRE",gx.O.AV35BancoSucursalNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV35BancoSucursalNombre=this.val())},val:function(){return gx.fn.getControlValue("vBANCOSUCURSALNOMBRE")},nac:gx.falseFn};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[30]={id:30,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV32Select",gxold:"OV32Select",gxvar:"AV32Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV32Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV32Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(29),gx.O.AV32Select,gx.O.AV65Select_GXI)},c2v:function(n){gx.O.AV65Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV32Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(29))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(29))},gxvar_GXI:"AV65Select_GXI",nac:gx.falseFn,evt:"e16232_client",std:"ENTER"};t[31]={id:31,lvl:2,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:this.Valid_Bancoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BANCOID",gxz:"Z29BancoId",gxold:"O29BancoId",gxvar:"A29BancoId",ucs:[],op:[32],ip:[32,31],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A29BancoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z29BancoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("BANCOID",n||gx.fn.currentGridRowImpl(29),gx.O.A29BancoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A29BancoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("BANCOID",n||gx.fn.currentGridRowImpl(29),".")},nac:gx.falseFn};t[32]={id:32,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BANCONOMBRE",gxz:"Z432BancoNombre",gxold:"O432BancoNombre",gxvar:"A432BancoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A432BancoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z432BancoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("BANCONOMBRE",n||gx.fn.currentGridRowImpl(29),gx.O.A432BancoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A432BancoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("BANCONOMBRE",n||gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};t[33]={id:33,lvl:2,type:"int",len:3,dec:0,sign:!1,pic:"999",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BANCOSUCURSALID",gxz:"Z165BancoSucursalId",gxold:"O165BancoSucursalId",gxvar:"A165BancoSucursalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A165BancoSucursalId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z165BancoSucursalId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("BANCOSUCURSALID",n||gx.fn.currentGridRowImpl(29),gx.O.A165BancoSucursalId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A165BancoSucursalId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("BANCOSUCURSALID",n||gx.fn.currentGridRowImpl(29),".")},nac:gx.falseFn};t[34]={id:34,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BANCOSUCURSALNOMBRE",gxz:"Z1522BancoSucursalNombre",gxold:"O1522BancoSucursalNombre",gxvar:"A1522BancoSucursalNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1522BancoSucursalNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1522BancoSucursalNombre=n)},v2c:function(n){gx.fn.setGridControlValue("BANCOSUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(29),gx.O.A1522BancoSucursalNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1522BancoSucursalNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("BANCOSUCURSALNOMBRE",n||gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};t[35]={id:35,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"BANCOSUCURSALDIRECCION",gxz:"Z1090BancoSucursalDireccion",gxold:"O1090BancoSucursalDireccion",gxvar:"A1090BancoSucursalDireccion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1090BancoSucursalDireccion=n)},v2z:function(n){n!==undefined&&(gx.O.Z1090BancoSucursalDireccion=n)},v2c:function(n){gx.fn.setGridControlValue("BANCOSUCURSALDIRECCION",n||gx.fn.currentGridRowImpl(29),gx.O.A1090BancoSucursalDireccion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1090BancoSucursalDireccion=this.val(n))},val:function(n){return gx.fn.getGridControlValue("BANCOSUCURSALDIRECCION",n||gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"",grid:0};this.AV57BancoSucursalId=0;this.ZV57BancoSucursalId=0;this.OV57BancoSucursalId=0;this.AV35BancoSucursalNombre="";this.ZV35BancoSucursalNombre="";this.OV35BancoSucursalNombre="";this.ZV32Select="";this.OV32Select="";this.Z29BancoId=0;this.O29BancoId=0;this.Z432BancoNombre="";this.O432BancoNombre="";this.Z165BancoSucursalId=0;this.O165BancoSucursalId=0;this.Z1522BancoSucursalNombre="";this.O1522BancoSucursalNombre="";this.Z1090BancoSucursalDireccion="";this.O1090BancoSucursalDireccion="";this.AV57BancoSucursalId=0;this.AV35BancoSucursalNombre="";this.AV37GridCurrentPage=0;this.AV58InBancoId=0;this.AV8InOutBancoSucursalId=0;this.AV9InOutBancoSucursalNombre="";this.A1094BancoSucursalEstado="";this.AV32Select="";this.A29BancoId=0;this.A432BancoNombre="";this.A165BancoSucursalId=0;this.A1522BancoSucursalNombre="";this.A1090BancoSucursalDireccion="";this.Events={e11232_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12232_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16232_client:["ENTER",!0],e17232_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV57BancoSucursalId",fld:"vBANCOSUCURSALID",pic:"999"},{av:"AV35BancoSucursalNombre",fld:"vBANCOSUCURSALNOMBRE",pic:"@!"},{av:"AV58InBancoId",fld:"vINBANCOID",pic:"ZZ9"}],[{av:"AV37GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV38GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV57BancoSucursalId",fld:"vBANCOSUCURSALID",pic:"999"},{av:"AV35BancoSucursalNombre",fld:"vBANCOSUCURSALNOMBRE",pic:"@!"},{av:"AV58InBancoId",fld:"vINBANCOID",pic:"ZZ9"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV57BancoSucursalId",fld:"vBANCOSUCURSALID",pic:"999"},{av:"AV35BancoSucursalNombre",fld:"vBANCOSUCURSALNOMBRE",pic:"@!"},{av:"AV58InBancoId",fld:"vINBANCOID",pic:"ZZ9"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV32Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A165BancoSucursalId",fld:"BANCOSUCURSALID",pic:"999",hsh:!0},{av:"A1522BancoSucursalNombre",fld:"BANCOSUCURSALNOMBRE",pic:"@!",hsh:!0}],[{av:"AV8InOutBancoSucursalId",fld:"vINOUTBANCOSUCURSALID",pic:"999"},{av:"AV9InOutBancoSucursalNombre",fld:"vINOUTBANCOSUCURSALNOMBRE",pic:"@!"}]];this.EvtParms.VALID_BANCOID=[[{av:"A432BancoNombre",fld:"BANCONOMBRE",pic:"@!"},{av:"A29BancoId",fld:"BANCOID",pic:"ZZ9"}],[{av:"A432BancoNombre",fld:"BANCONOMBRE",pic:"@!"}]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV58InBancoId","vINBANCOID",0,"int",3,0);this.setVCMap("AV8InOutBancoSucursalId","vINOUTBANCOSUCURSALID",0,"int",3,0);this.setVCMap("AV9InOutBancoSucursalNombre","vINOUTBANCOSUCURSALNOMBRE",0,"svchar",64,0);this.setVCMap("AV58InBancoId","vINBANCOID",0,"int",3,0);this.setVCMap("AV58InBancoId","vINBANCOID",0,"int",3,0);r.addRefreshingVar(this.GXValidFnc[19]);r.addRefreshingVar(this.GXValidFnc[23]);r.addRefreshingVar({rfrVar:"AV58InBancoId"});r.addRefreshingParm(this.GXValidFnc[19]);r.addRefreshingParm(this.GXValidFnc[23]);r.addRefreshingParm({rfrVar:"AV58InBancoId"});this.Initialize()});gx.wi(function(){gx.createParentObj(promptbancosucursal)})