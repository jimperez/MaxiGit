/*!   GeneXus C# 16_0_5-135614 on 10/3/2019 15:46:15.99
*/
gx.evt.autoSkip=!1;gx.define("promptvendedor",!1,function(){var t,r,i,n;this.ServerClass="promptvendedor";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7InOutVendedorId=gx.fn.getIntegerValue("vINOUTVENDEDORID",".");this.AV50InOutVendedorApellidoNombre=gx.fn.getControlValue("vINOUTVENDEDORAPELLIDONOMBRE")};this.Valid_Vendedorid=function(){var n=gx.fn.currentGridRowImpl(25);return this.validCliEvt("Valid_Vendedorid",25,function(){try{if(gx.fn.currentGridRowImpl(25)===0)return!0;var n=gx.util.balloon.getNew("VENDEDORID",gx.fn.currentGridRowImpl(25));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Vendedorapellido=function(){var n=gx.fn.currentGridRowImpl(25);return this.validCliEvt("Valid_Vendedorapellido",25,function(){try{if(gx.fn.currentGridRowImpl(25)===0)return!0;var n=gx.util.balloon.getNew("VENDEDORAPELLIDO",gx.fn.currentGridRowImpl(25));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Vendedornombre=function(){var n=gx.fn.currentGridRowImpl(25);return this.validCliEvt("Valid_Vendedornombre",25,function(){try{if(gx.fn.currentGridRowImpl(25)===0)return!0;var n=gx.util.balloon.getNew("VENDEDORNOMBRE",gx.fn.currentGridRowImpl(25));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11ek2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12ek2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e16ek2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17ek2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33];this.GXLastCtrlId=33;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",25,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptvendedor",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addBitmap("&Select","vSELECT",26,0,"px",17,"px","e16ek2_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");r.addSingleLineEdit(249,27,"VENDEDORID","Cuil","","VendedorId","int",0,"px",15,15,"right",null,[],249,"VendedorId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(1971,28,"VENDEDORAPELLIDO","Apellido","","VendedorApellido","char",0,"px",60,60,"left",null,[],1971,"VendedorApellido",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(1972,29,"VENDEDORNOMBRE","Nombre","","VendedorNombre","char",0,"px",60,60,"left",null,[],1972,"VendedorNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addSingleLineEdit(1973,30,"VENDEDORAPELLIDONOMBRE","Vendedor","","VendedorApellidoNombre","svchar",0,"px",64,64,"left",null,[],1973,"VendedorApellidoNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");r.addComboBox(1983,31,"VENDEDORESTADO","Estado","VendedorEstado","char",null,0,!0,!1,0,"px","WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(r);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");i=this.DVPANEL_TABLEHEADERContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setProp("Title","Title","Opciones","str");i.setProp("Collapsible","Collapsible",!0,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setProp("Gx Control Type","Gxcontroltype","","int");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,34,19,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");n=this.GRIDPAGINATIONBARContainer;n.setProp("Enabled","Enabled",!0,"boolean");n.setProp("Class","Class","PaginationBar","str");n.setProp("ShowFirst","Showfirst",!1,"bool");n.setProp("ShowPrevious","Showprevious",!0,"bool");n.setProp("ShowNext","Shownext",!0,"bool");n.setProp("ShowLast","Showlast",!1,"bool");n.setProp("PagesToShow","Pagestoshow",5,"num");n.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");n.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");n.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");n.setProp("SelectedPage","Selectedpage","","char");n.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");n.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");n.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");n.setProp("First","First","First","str");n.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");n.setProp("Next","Next","WWP_PagingNextCaption","str");n.setProp("Last","Last","Last","str");n.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");n.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");n.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");n.addV2CFunction("AV48GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");n.addC2VFunction(function(n){n.ParentObject.AV48GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV48GridCurrentPage)});n.addV2CFunction("AV49GridPageCount","vGRIDPAGECOUNT","SetPageCount");n.addC2VFunction(function(n){n.ParentObject.AV49GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV49GridPageCount)});n.setProp("RecordCount","Recordcount","","str");n.setProp("Page","Page","","str");n.setProp("Visible","Visible",!0,"bool");n.setProp("Gx Control Type","Gxcontroltype","","int");n.setC2ShowFunction(function(n){n.show()});n.addEventHandler("ChangePage",this.e11ek2_client);n.addEventHandler("ChangeRowsPerPage",this.e12ek2_client);this.setUserControl(n);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEMAIN",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[11]={id:11,fld:"TABLEHEADER",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"TABLEFILTERS",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vVENDEDORAPELLIDONOMBRE",gxz:"ZV55VendedorApellidoNombre",gxold:"OV55VendedorApellidoNombre",gxvar:"AV55VendedorApellidoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV55VendedorApellidoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV55VendedorApellidoNombre=n)},v2c:function(){gx.fn.setControlValue("vVENDEDORAPELLIDONOMBRE",gx.O.AV55VendedorApellidoNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV55VendedorApellidoNombre=this.val())},val:function(){return gx.fn.getControlValue("vVENDEDORAPELLIDONOMBRE")},nac:gx.falseFn};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"",grid:0};t[26]={id:26,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV11Select",gxold:"OV11Select",gxvar:"AV11Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV11Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV11Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(25),gx.O.AV11Select,gx.O.AV60Select_GXI)},c2v:function(n){gx.O.AV60Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV11Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(25))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(25))},gxvar_GXI:"AV60Select_GXI",nac:gx.falseFn,evt:"e16ek2_client",std:"ENTER"};t[27]={id:27,lvl:2,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:this.Valid_Vendedorid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VENDEDORID",gxz:"Z249VendedorId",gxold:"O249VendedorId",gxvar:"A249VendedorId",ucs:[],op:[30,28,29],ip:[30,29,28,27],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A249VendedorId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z249VendedorId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("VENDEDORID",n||gx.fn.currentGridRowImpl(25),gx.O.A249VendedorId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A249VendedorId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("VENDEDORID",n||gx.fn.currentGridRowImpl(25),".")},nac:gx.falseFn};t[28]={id:28,lvl:2,type:"char",len:60,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:this.Valid_Vendedorapellido,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VENDEDORAPELLIDO",gxz:"Z1971VendedorApellido",gxold:"O1971VendedorApellido",gxvar:"A1971VendedorApellido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1971VendedorApellido=n)},v2z:function(n){n!==undefined&&(gx.O.Z1971VendedorApellido=n)},v2c:function(n){gx.fn.setGridControlValue("VENDEDORAPELLIDO",n||gx.fn.currentGridRowImpl(25),gx.O.A1971VendedorApellido,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1971VendedorApellido=this.val(n))},val:function(n){return gx.fn.getGridControlValue("VENDEDORAPELLIDO",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};t[29]={id:29,lvl:2,type:"char",len:60,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:this.Valid_Vendedornombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VENDEDORNOMBRE",gxz:"Z1972VendedorNombre",gxold:"O1972VendedorNombre",gxvar:"A1972VendedorNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1972VendedorNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1972VendedorNombre=n)},v2c:function(n){gx.fn.setGridControlValue("VENDEDORNOMBRE",n||gx.fn.currentGridRowImpl(25),gx.O.A1972VendedorNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1972VendedorNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("VENDEDORNOMBRE",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};t[30]={id:30,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VENDEDORAPELLIDONOMBRE",gxz:"Z1973VendedorApellidoNombre",gxold:"O1973VendedorApellidoNombre",gxvar:"A1973VendedorApellidoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1973VendedorApellidoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z1973VendedorApellidoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("VENDEDORAPELLIDONOMBRE",n||gx.fn.currentGridRowImpl(25),gx.O.A1973VendedorApellidoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1973VendedorApellidoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("VENDEDORAPELLIDONOMBRE",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};t[31]={id:31,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VENDEDORESTADO",gxz:"Z1983VendedorEstado",gxold:"O1983VendedorEstado",gxvar:"A1983VendedorEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1983VendedorEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z1983VendedorEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("VENDEDORESTADO",n||gx.fn.currentGridRowImpl(25),gx.O.A1983VendedorEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1983VendedorEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("VENDEDORESTADO",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};this.AV55VendedorApellidoNombre="";this.ZV55VendedorApellidoNombre="";this.OV55VendedorApellidoNombre="";this.ZV11Select="";this.OV11Select="";this.Z249VendedorId=0;this.O249VendedorId=0;this.Z1971VendedorApellido="";this.O1971VendedorApellido="";this.Z1972VendedorNombre="";this.O1972VendedorNombre="";this.Z1973VendedorApellidoNombre="";this.O1973VendedorApellidoNombre="";this.Z1983VendedorEstado="";this.O1983VendedorEstado="";this.AV55VendedorApellidoNombre="";this.AV48GridCurrentPage=0;this.AV7InOutVendedorId=0;this.AV50InOutVendedorApellidoNombre="";this.AV11Select="";this.A249VendedorId=0;this.A1971VendedorApellido="";this.A1972VendedorNombre="";this.A1973VendedorApellidoNombre="";this.A1983VendedorEstado="";this.Events={e11ek2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12ek2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e16ek2_client:["ENTER",!0],e17ek2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV55VendedorApellidoNombre",fld:"vVENDEDORAPELLIDONOMBRE",pic:"@!"}],[{av:"AV48GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV49GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV55VendedorApellidoNombre",fld:"vVENDEDORAPELLIDONOMBRE",pic:"@!"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV55VendedorApellidoNombre",fld:"vVENDEDORAPELLIDONOMBRE",pic:"@!"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV11Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A249VendedorId",fld:"VENDEDORID",pic:"ZZZZZZZZZZZZZZ9",hsh:!0},{av:"A1973VendedorApellidoNombre",fld:"VENDEDORAPELLIDONOMBRE",pic:"@!",hsh:!0}],[{av:"AV7InOutVendedorId",fld:"vINOUTVENDEDORID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV50InOutVendedorApellidoNombre",fld:"vINOUTVENDEDORAPELLIDONOMBRE",pic:"@!"}]];this.EvtParms.VALID_VENDEDORID=[[{av:"A1973VendedorApellidoNombre",fld:"VENDEDORAPELLIDONOMBRE",pic:"@!",hsh:!0},{av:"A1972VendedorNombre",fld:"VENDEDORNOMBRE",pic:"@!"},{av:"A1971VendedorApellido",fld:"VENDEDORAPELLIDO",pic:"@!"},{av:"A249VendedorId",fld:"VENDEDORID",pic:"ZZZZZZZZZZZZZZ9",hsh:!0}],[{av:"A1973VendedorApellidoNombre",fld:"VENDEDORAPELLIDONOMBRE",pic:"@!",hsh:!0},{av:"A1971VendedorApellido",fld:"VENDEDORAPELLIDO",pic:"@!"},{av:"A1972VendedorNombre",fld:"VENDEDORNOMBRE",pic:"@!"}]];this.EvtParms.VALID_VENDEDORAPELLIDO=[[],[]];this.EvtParms.VALID_VENDEDORNOMBRE=[[],[]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV7InOutVendedorId","vINOUTVENDEDORID",0,"int",15,0);this.setVCMap("AV50InOutVendedorApellidoNombre","vINOUTVENDEDORAPELLIDONOMBRE",0,"svchar",64,0);r.addRefreshingVar(this.GXValidFnc[19]);r.addRefreshingParm(this.GXValidFnc[19]);this.Initialize()});gx.wi(function(){gx.createParentObj(promptvendedor)})