/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:47:51.19
*/
gx.evt.autoSkip=!1;gx.define("promptarticulo",!1,function(){var n,i,r,t;this.ServerClass="promptarticulo";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A1624ArtPciCtoAct=gx.fn.getDecimalValue("ARTPCICTOACT",".",",");this.AV7InOutArtId=gx.fn.getIntegerValue("vINOUTARTID",".");this.AV8InOutArtNom=gx.fn.getControlValue("vINOUTARTNOM")};this.Valid_Artid=function(){var n=gx.fn.currentGridRowImpl(34);return this.validCliEvt("Valid_Artid",34,function(){try{if(gx.fn.currentGridRowImpl(34)===0)return!0;var n=gx.util.balloon.getNew("ARTID",gx.fn.currentGridRowImpl(34));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artpcivtalistaact=function(){var n=gx.fn.currentGridRowImpl(34);return this.validCliEvt("Valid_Artpcivtalistaact",34,function(){try{if(gx.fn.currentGridRowImpl(34)===0)return!0;var n=gx.util.balloon.getNew("ARTPCIVTALISTAACT",gx.fn.currentGridRowImpl(34));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Arttpo=function(){var n=gx.fn.currentGridRowImpl(34);return this.validCliEvt("Valid_Arttpo",34,function(){try{if(gx.fn.currentGridRowImpl(34)===0)return!0;var n=gx.util.balloon.getNew("ARTTPO",gx.fn.currentGridRowImpl(34));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e110t2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e120t2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e160t2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e170t2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,54,55,56,57];this.GXLastCtrlId=57;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",34,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptarticulo",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addBitmap("&Select","vSELECT",35,0,"px",17,"px","e160t2_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");i.addSingleLineEdit(8,36,"ARTID","Cod.","","ArtId","int",0,"px",9,9,"right",null,[],8,"ArtId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1528,37,"ARTNOMABR","Abreviatura","","ArtNomAbr","char",0,"px",20,20,"left",null,[],1528,"ArtNomAbr",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1529,38,"ARTDESCRIPCION","Detalle","","ArtDescripcion","vchar",0,"px",300,80,"left",null,[],1529,"ArtDescripcion",!1,150,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(16,39,"ARTNOM","Descripción","","ArtNom","svchar",0,"px",64,64,"left",null,[],16,"ArtNom",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(1534,40,"ARTDESCRIPCIONGENERAL","Descrip. Completa","","ArtDescripcionGeneral","svchar",0,"px",300,80,"left",null,[],1534,"ArtDescripcionGeneral",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(371,41,"ARTSTKACT","Stock Act.","","ArtStkAct","decimal",0,"px",12,12,"right",null,[],371,"ArtStkAct",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1535,42,"ARTSTKTOTAL","Stock Total","","ArtStkTotal","decimal",0,"px",12,12,"right",null,[],1535,"ArtStkTotal",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(378,43,"ARTPCIVTACTDOACT","Contado","","ArtPciVtaCtdoAct","decimal",0,"px",13,13,"right",null,[],378,"ArtPciVtaCtdoAct",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(381,44,"ARTPCIVTALISTAACT","Lista","","ArtPciVtaListaAct","decimal",0,"px",13,13,"right",null,[],381,"ArtPciVtaListaAct",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addComboBox(356,45,"ARTTPO","Tipo Artículo","ArtTpo","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");i.addComboBox(1569,46,"ARTPLANTAR","Plan Especial","ArtPlanTar","char",null,0,!1,!1,0,"px","WWColumn");i.addComboBox(2703,47,"ARTPLANCREDITO","Credito Especial","ArtPlanCredito","char",null,0,!1,!1,0,"px","WWColumn");i.addSingleLineEdit(2620,48,"ARTMARKUP","Markup","","ArtMarkup","decimal",0,"px",6,6,"right",null,[],2620,"ArtMarkup",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(379,49,"ARTPCIVTACTDOIVAACT","IVA","","ArtPciVtaCtdoIVAAct","decimal",0,"px",13,13,"right",null,[],379,"ArtPciVtaCtdoIVAAct",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(380,50,"ARTPCIVTALISTANETOACT","Neto","","ArtPciVtaListaNetoAct","decimal",0,"px",13,13,"right",null,[],380,"ArtPciVtaListaNetoAct",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(i);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");r=this.DVPANEL_TABLEHEADERContainer;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Width","Width","100%","str");r.setProp("Height","Height","100","str");r.setProp("AutoWidth","Autowidth",!1,"bool");r.setProp("AutoHeight","Autoheight",!0,"bool");r.setProp("Cls","Cls","PanelFilled_BaseColor","str");r.setProp("ShowHeader","Showheader",!0,"bool");r.setProp("Title","Title","Opciones","str");r.setProp("Collapsible","Collapsible",!0,"bool");r.setProp("Collapsed","Collapsed",!1,"bool");r.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");r.setProp("IconPosition","Iconposition","Right","str");r.setProp("AutoScroll","Autoscroll",!1,"bool");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,53,19,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV14GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV14GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV14GridCurrentPage)});t.addV2CFunction("AV15GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV15GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV15GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e110t2_client);t.addEventHandler("ChangeRowsPerPage",this.e120t2_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEFILTERS",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vARTDESCRIPCIONGENERAL",gxz:"ZV17ArtDescripcionGeneral",gxold:"OV17ArtDescripcionGeneral",gxvar:"AV17ArtDescripcionGeneral",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV17ArtDescripcionGeneral=n)},v2z:function(n){n!==undefined&&(gx.O.ZV17ArtDescripcionGeneral=n)},v2c:function(){gx.fn.setControlValue("vARTDESCRIPCIONGENERAL",gx.O.AV17ArtDescripcionGeneral,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV17ArtDescripcionGeneral=this.val())},val:function(){return gx.fn.getControlValue("vARTDESCRIPCIONGENERAL")},nac:gx.falseFn};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[23]={id:23,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vMARCANOMBRE",gxz:"ZV11MarcaNombre",gxold:"OV11MarcaNombre",gxvar:"AV11MarcaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV11MarcaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV11MarcaNombre=n)},v2c:function(){gx.fn.setControlValue("vMARCANOMBRE",gx.O.AV11MarcaNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV11MarcaNombre=this.val())},val:function(){return gx.fn.getControlValue("vMARCANOMBRE")},nac:gx.falseFn};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vSGRUPONOMBRE",gxz:"ZV12SGrupoNombre",gxold:"OV12SGrupoNombre",gxvar:"AV12SGrupoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV12SGrupoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV12SGrupoNombre=n)},v2c:function(){gx.fn.setControlValue("vSGRUPONOMBRE",gx.O.AV12SGrupoNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV12SGrupoNombre=this.val())},val:function(){return gx.fn.getControlValue("vSGRUPONOMBRE")},nac:gx.falseFn};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[35]={id:35,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV16Select",gxold:"OV16Select",gxvar:"AV16Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV16Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV16Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(34),gx.O.AV16Select,gx.O.AV24Select_GXI)},c2v:function(n){gx.O.AV24Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV16Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(34))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(34))},gxvar_GXI:"AV24Select_GXI",nac:gx.falseFn,evt:"e160t2_client",std:"ENTER"};n[36]={id:36,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:this.Valid_Artid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTID",gxz:"Z8ArtId",gxold:"O8ArtId",gxvar:"A8ArtId",ucs:[],op:[50,49,48,44,47,46,43,42,41],ip:[50,49,48,47,46,43,42,41,44,45,36],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A8ArtId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z8ArtId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ARTID",n||gx.fn.currentGridRowImpl(34),gx.O.A8ArtId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A8ArtId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ARTID",n||gx.fn.currentGridRowImpl(34),".")},nac:gx.falseFn};n[37]={id:37,lvl:2,type:"char",len:20,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTNOMABR",gxz:"Z1528ArtNomAbr",gxold:"O1528ArtNomAbr",gxvar:"A1528ArtNomAbr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1528ArtNomAbr=n)},v2z:function(n){n!==undefined&&(gx.O.Z1528ArtNomAbr=n)},v2c:function(n){gx.fn.setGridControlValue("ARTNOMABR",n||gx.fn.currentGridRowImpl(34),gx.O.A1528ArtNomAbr,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1528ArtNomAbr=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ARTNOMABR",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[38]={id:38,lvl:2,type:"vchar",len:300,dec:150,sign:!1,pic:"@!",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTDESCRIPCION",gxz:"Z1529ArtDescripcion",gxold:"O1529ArtDescripcion",gxvar:"A1529ArtDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1529ArtDescripcion=n)},v2z:function(n){n!==undefined&&(gx.O.Z1529ArtDescripcion=n)},v2c:function(n){gx.fn.setGridControlValue("ARTDESCRIPCION",n||gx.fn.currentGridRowImpl(34),gx.O.A1529ArtDescripcion,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1529ArtDescripcion=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ARTDESCRIPCION",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[39]={id:39,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTNOM",gxz:"Z16ArtNom",gxold:"O16ArtNom",gxvar:"A16ArtNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A16ArtNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z16ArtNom=n)},v2c:function(n){gx.fn.setGridControlValue("ARTNOM",n||gx.fn.currentGridRowImpl(34),gx.O.A16ArtNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A16ArtNom=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ARTNOM",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[40]={id:40,lvl:2,type:"svchar",len:300,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTDESCRIPCIONGENERAL",gxz:"Z1534ArtDescripcionGeneral",gxold:"O1534ArtDescripcionGeneral",gxvar:"A1534ArtDescripcionGeneral",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1534ArtDescripcionGeneral=n)},v2z:function(n){n!==undefined&&(gx.O.Z1534ArtDescripcionGeneral=n)},v2c:function(n){gx.fn.setGridControlValue("ARTDESCRIPCIONGENERAL",n||gx.fn.currentGridRowImpl(34),gx.O.A1534ArtDescripcionGeneral,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1534ArtDescripcionGeneral=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ARTDESCRIPCIONGENERAL",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[41]={id:41,lvl:2,type:"decimal",len:10,dec:2,sign:!0,pic:"Z,ZZZ,ZZ9.99",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTKACT",gxz:"Z371ArtStkAct",gxold:"O371ArtStkAct",gxvar:"A371ArtStkAct",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A371ArtStkAct=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z371ArtStkAct=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ARTSTKACT",n||gx.fn.currentGridRowImpl(34),gx.O.A371ArtStkAct,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A371ArtStkAct=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ARTSTKACT",n||gx.fn.currentGridRowImpl(34),".",",")},nac:gx.falseFn};n[42]={id:42,lvl:2,type:"decimal",len:10,dec:2,sign:!0,pic:"Z,ZZZ,ZZ9.99",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTSTKTOTAL",gxz:"Z1535ArtStkTotal",gxold:"O1535ArtStkTotal",gxvar:"A1535ArtStkTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1535ArtStkTotal=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z1535ArtStkTotal=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ARTSTKTOTAL",n||gx.fn.currentGridRowImpl(34),gx.O.A1535ArtStkTotal,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1535ArtStkTotal=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ARTSTKTOTAL",n||gx.fn.currentGridRowImpl(34),".",",")},nac:gx.falseFn};n[43]={id:43,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTPCIVTACTDOACT",gxz:"Z378ArtPciVtaCtdoAct",gxold:"O378ArtPciVtaCtdoAct",gxvar:"A378ArtPciVtaCtdoAct",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A378ArtPciVtaCtdoAct=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z378ArtPciVtaCtdoAct=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ARTPCIVTACTDOACT",n||gx.fn.currentGridRowImpl(34),gx.O.A378ArtPciVtaCtdoAct,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A378ArtPciVtaCtdoAct=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ARTPCIVTACTDOACT",n||gx.fn.currentGridRowImpl(34),".",",")},nac:gx.falseFn};n[44]={id:44,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:this.Valid_Artpcivtalistaact,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTPCIVTALISTAACT",gxz:"Z381ArtPciVtaListaAct",gxold:"O381ArtPciVtaListaAct",gxvar:"A381ArtPciVtaListaAct",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A381ArtPciVtaListaAct=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z381ArtPciVtaListaAct=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ARTPCIVTALISTAACT",n||gx.fn.currentGridRowImpl(34),gx.O.A381ArtPciVtaListaAct,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A381ArtPciVtaListaAct=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ARTPCIVTALISTAACT",n||gx.fn.currentGridRowImpl(34),".",",")},nac:gx.falseFn};n[45]={id:45,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:this.Valid_Arttpo,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTTPO",gxz:"Z356ArtTpo",gxold:"O356ArtTpo",gxvar:"A356ArtTpo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A356ArtTpo=n)},v2z:function(n){n!==undefined&&(gx.O.Z356ArtTpo=n)},v2c:function(n){gx.fn.setGridComboBoxValue("ARTTPO",n||gx.fn.currentGridRowImpl(34),gx.O.A356ArtTpo);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A356ArtTpo=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ARTTPO",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[46]={id:46,lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTPLANTAR",gxz:"Z1569ArtPlanTar",gxold:"O1569ArtPlanTar",gxvar:"A1569ArtPlanTar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A1569ArtPlanTar=n)},v2z:function(n){n!==undefined&&(gx.O.Z1569ArtPlanTar=n)},v2c:function(n){gx.fn.setGridComboBoxValue("ARTPLANTAR",n||gx.fn.currentGridRowImpl(34),gx.O.A1569ArtPlanTar);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1569ArtPlanTar=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ARTPLANTAR",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[47]={id:47,lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTPLANCREDITO",gxz:"Z2703ArtPlanCredito",gxold:"O2703ArtPlanCredito",gxvar:"A2703ArtPlanCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2703ArtPlanCredito=n)},v2z:function(n){n!==undefined&&(gx.O.Z2703ArtPlanCredito=n)},v2c:function(n){gx.fn.setGridComboBoxValue("ARTPLANCREDITO",n||gx.fn.currentGridRowImpl(34),gx.O.A2703ArtPlanCredito);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2703ArtPlanCredito=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ARTPLANCREDITO",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[48]={id:48,lvl:2,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTMARKUP",gxz:"Z2620ArtMarkup",gxold:"O2620ArtMarkup",gxvar:"A2620ArtMarkup",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2620ArtMarkup=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2620ArtMarkup=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ARTMARKUP",n||gx.fn.currentGridRowImpl(34),gx.O.A2620ArtMarkup,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2620ArtMarkup=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ARTMARKUP",n||gx.fn.currentGridRowImpl(34),".",",")},nac:gx.falseFn};n[49]={id:49,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTPCIVTACTDOIVAACT",gxz:"Z379ArtPciVtaCtdoIVAAct",gxold:"O379ArtPciVtaCtdoIVAAct",gxvar:"A379ArtPciVtaCtdoIVAAct",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A379ArtPciVtaCtdoIVAAct=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z379ArtPciVtaCtdoIVAAct=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ARTPCIVTACTDOIVAACT",n||gx.fn.currentGridRowImpl(34),gx.O.A379ArtPciVtaCtdoIVAAct,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A379ArtPciVtaCtdoIVAAct=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ARTPCIVTACTDOIVAACT",n||gx.fn.currentGridRowImpl(34),".",",")},nac:gx.falseFn};n[50]={id:50,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:34,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTPCIVTALISTANETOACT",gxz:"Z380ArtPciVtaListaNetoAct",gxold:"O380ArtPciVtaListaNetoAct",gxvar:"A380ArtPciVtaListaNetoAct",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A380ArtPciVtaListaNetoAct=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z380ArtPciVtaListaNetoAct=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ARTPCIVTALISTANETOACT",n||gx.fn.currentGridRowImpl(34),gx.O.A380ArtPciVtaListaNetoAct,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A380ArtPciVtaListaNetoAct=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ARTPCIVTALISTANETOACT",n||gx.fn.currentGridRowImpl(34),".",",")},nac:gx.falseFn};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[57]={id:57,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV18OrderedBy",gxold:"OV18OrderedBy",gxvar:"AV18OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV18OrderedBy=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV18OrderedBy=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV18OrderedBy,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV18OrderedBy=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};this.AV17ArtDescripcionGeneral="";this.ZV17ArtDescripcionGeneral="";this.OV17ArtDescripcionGeneral="";this.AV11MarcaNombre="";this.ZV11MarcaNombre="";this.OV11MarcaNombre="";this.AV12SGrupoNombre="";this.ZV12SGrupoNombre="";this.OV12SGrupoNombre="";this.ZV16Select="";this.OV16Select="";this.Z8ArtId=0;this.O8ArtId=0;this.Z1528ArtNomAbr="";this.O1528ArtNomAbr="";this.Z1529ArtDescripcion="";this.O1529ArtDescripcion="";this.Z16ArtNom="";this.O16ArtNom="";this.Z1534ArtDescripcionGeneral="";this.O1534ArtDescripcionGeneral="";this.Z371ArtStkAct=0;this.O371ArtStkAct=0;this.Z1535ArtStkTotal=0;this.O1535ArtStkTotal=0;this.Z378ArtPciVtaCtdoAct=0;this.O378ArtPciVtaCtdoAct=0;this.Z381ArtPciVtaListaAct=0;this.O381ArtPciVtaListaAct=0;this.Z356ArtTpo="";this.O356ArtTpo="";this.Z1569ArtPlanTar="";this.O1569ArtPlanTar="";this.Z2703ArtPlanCredito="";this.O2703ArtPlanCredito="";this.Z2620ArtMarkup=0;this.O2620ArtMarkup=0;this.Z379ArtPciVtaCtdoIVAAct=0;this.O379ArtPciVtaCtdoIVAAct=0;this.Z380ArtPciVtaListaNetoAct=0;this.O380ArtPciVtaListaNetoAct=0;this.AV18OrderedBy=0;this.ZV18OrderedBy=0;this.OV18OrderedBy=0;this.AV17ArtDescripcionGeneral="";this.AV11MarcaNombre="";this.AV12SGrupoNombre="";this.AV14GridCurrentPage=0;this.AV18OrderedBy=0;this.AV7InOutArtId=0;this.AV8InOutArtNom="";this.A359MarcaNombre="";this.A362GrupoNombre="";this.A361SGrupoNombre="";this.A1624ArtPciCtoAct=0;this.A9MarcaId=0;this.A10GrupoId=0;this.A11SGrupoId=0;this.AV16Select="";this.A8ArtId=0;this.A1528ArtNomAbr="";this.A1529ArtDescripcion="";this.A16ArtNom="";this.A1534ArtDescripcionGeneral="";this.A371ArtStkAct=0;this.A1535ArtStkTotal=0;this.A378ArtPciVtaCtdoAct=0;this.A381ArtPciVtaListaAct=0;this.A356ArtTpo="";this.A1569ArtPlanTar="";this.A2703ArtPlanCredito="";this.A2620ArtMarkup=0;this.A379ArtPciVtaCtdoIVAAct=0;this.A380ArtPciVtaListaNetoAct=0;this.Events={e110t2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e120t2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e160t2_client:["ENTER",!0],e170t2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV17ArtDescripcionGeneral",fld:"vARTDESCRIPCIONGENERAL",pic:""},{av:"AV11MarcaNombre",fld:"vMARCANOMBRE",pic:"@!"},{av:"AV12SGrupoNombre",fld:"vSGRUPONOMBRE",pic:"@!"},{av:"AV18OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"}],[{av:"AV14GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV15GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[{av:"AV18OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:"vORDEREDBY",prop:"Visible"},{av:"AV18OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV17ArtDescripcionGeneral",fld:"vARTDESCRIPCIONGENERAL",pic:""},{av:"AV11MarcaNombre",fld:"vMARCANOMBRE",pic:"@!"},{av:"AV12SGrupoNombre",fld:"vSGRUPONOMBRE",pic:"@!"},{av:"AV18OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV17ArtDescripcionGeneral",fld:"vARTDESCRIPCIONGENERAL",pic:""},{av:"AV11MarcaNombre",fld:"vMARCANOMBRE",pic:"@!"},{av:"AV12SGrupoNombre",fld:"vSGRUPONOMBRE",pic:"@!"},{av:"AV18OrderedBy",fld:"vORDEREDBY",pic:"ZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV16Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A8ArtId",fld:"ARTID",pic:"ZZZZZZZZ9",hsh:!0},{av:"A16ArtNom",fld:"ARTNOM",pic:"@!",hsh:!0}],[{av:"AV7InOutArtId",fld:"vINOUTARTID",pic:"ZZZZZZZZ9"},{av:"AV8InOutArtNom",fld:"vINOUTARTNOM",pic:"@!"}]];this.EvtParms.VALID_ARTID=[[{av:"A380ArtPciVtaListaNetoAct",fld:"ARTPCIVTALISTANETOACT",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A379ArtPciVtaCtdoIVAAct",fld:"ARTPCIVTACTDOIVAACT",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2620ArtMarkup",fld:"ARTMARKUP",pic:"999.99"},{ctrl:"ARTPLANCREDITO"},{av:"A2703ArtPlanCredito",fld:"ARTPLANCREDITO",pic:""},{ctrl:"ARTPLANTAR"},{av:"A1569ArtPlanTar",fld:"ARTPLANTAR",pic:""},{av:"A378ArtPciVtaCtdoAct",fld:"ARTPCIVTACTDOACT",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1535ArtStkTotal",fld:"ARTSTKTOTAL",pic:"Z,ZZZ,ZZ9.99"},{av:"A371ArtStkAct",fld:"ARTSTKACT",pic:"Z,ZZZ,ZZ9.99"},{av:"A381ArtPciVtaListaAct",fld:"ARTPCIVTALISTAACT",pic:"ZZ,ZZZ,ZZ9.99"},{ctrl:"ARTTPO"},{av:"A356ArtTpo",fld:"ARTTPO",pic:""},{av:"A8ArtId",fld:"ARTID",pic:"ZZZZZZZZ9",hsh:!0}],[{av:"A380ArtPciVtaListaNetoAct",fld:"ARTPCIVTALISTANETOACT",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A379ArtPciVtaCtdoIVAAct",fld:"ARTPCIVTACTDOIVAACT",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A2620ArtMarkup",fld:"ARTMARKUP",pic:"999.99"},{av:"A381ArtPciVtaListaAct",fld:"ARTPCIVTALISTAACT",pic:"ZZ,ZZZ,ZZ9.99"},{ctrl:"ARTPLANCREDITO"},{av:"A2703ArtPlanCredito",fld:"ARTPLANCREDITO",pic:""},{ctrl:"ARTPLANTAR"},{av:"A1569ArtPlanTar",fld:"ARTPLANTAR",pic:""},{av:"A378ArtPciVtaCtdoAct",fld:"ARTPCIVTACTDOACT",pic:"ZZ,ZZZ,ZZ9.99"},{av:"A1535ArtStkTotal",fld:"ARTSTKTOTAL",pic:"Z,ZZZ,ZZ9.99"},{av:"A371ArtStkAct",fld:"ARTSTKACT",pic:"Z,ZZZ,ZZ9.99"}]];this.EvtParms.VALID_ARTPCIVTALISTAACT=[[],[]];this.EvtParms.VALID_ARTTPO=[[],[]];this.EnterCtrl=["vSELECT"];this.setVCMap("A1624ArtPciCtoAct","ARTPCICTOACT",0,"decimal",12,2);this.setVCMap("AV7InOutArtId","vINOUTARTID",0,"int",9,0);this.setVCMap("AV8InOutArtNom","vINOUTARTNOM",0,"svchar",64,0);i.addRefreshingVar(this.GXValidFnc[19]);i.addRefreshingVar(this.GXValidFnc[23]);i.addRefreshingVar(this.GXValidFnc[28]);i.addRefreshingVar(this.GXValidFnc[57]);i.addRefreshingParm(this.GXValidFnc[19]);i.addRefreshingParm(this.GXValidFnc[23]);i.addRefreshingParm(this.GXValidFnc[28]);i.addRefreshingParm(this.GXValidFnc[57]);this.Initialize()});gx.wi(function(){gx.createParentObj(promptarticulo)})