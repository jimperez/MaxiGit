/*!   GeneXus C# 16_0_5-135614 on 10/2/2019 19:25:36.59
*/
gx.evt.autoSkip=!1;gx.define("promptarticulounidadmedida",!1,function(){var n,i,r,t;this.ServerClass="promptarticulounidadmedida";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV44InArtId=gx.fn.getIntegerValue("vINARTID",".");this.AV45InOutUMeId=gx.fn.getIntegerValue("vINOUTUMEID",".");this.AV50InOutArticuloUnidadMedidaValor=gx.fn.getDecimalValue("vINOUTARTICULOUNIDADMEDIDAVALOR",".",",");this.AV44InArtId=gx.fn.getIntegerValue("vINARTID",".")};this.Valid_Artid=function(){var n=gx.fn.currentGridRowImpl(37);return this.validCliEvt("Valid_Artid",37,function(){try{if(gx.fn.currentGridRowImpl(37)===0)return!0;var n=gx.util.balloon.getNew("ARTID",gx.fn.currentGridRowImpl(37));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artnom=function(){var n=gx.fn.currentGridRowImpl(37);return this.validCliEvt("Valid_Artnom",37,function(){try{if(gx.fn.currentGridRowImpl(37)===0)return!0;var n=gx.util.balloon.getNew("ARTNOM",gx.fn.currentGridRowImpl(37));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Arttpo=function(){var n=gx.fn.currentGridRowImpl(37);return this.validCliEvt("Valid_Arttpo",37,function(){try{if(gx.fn.currentGridRowImpl(37)===0)return!0;var n=gx.util.balloon.getNew("ARTTPO",gx.fn.currentGridRowImpl(37));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Marcaid=function(){var n=gx.fn.currentGridRowImpl(37);return this.validCliEvt("Valid_Marcaid",37,function(){try{if(gx.fn.currentGridRowImpl(37)===0)return!0;var n=gx.util.balloon.getNew("MARCAID",gx.fn.currentGridRowImpl(37));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Marcanombre=function(){var n=gx.fn.currentGridRowImpl(37);return this.validCliEvt("Valid_Marcanombre",37,function(){try{if(gx.fn.currentGridRowImpl(37)===0)return!0;var n=gx.util.balloon.getNew("MARCANOMBRE",gx.fn.currentGridRowImpl(37));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Grupoid=function(){var n=gx.fn.currentGridRowImpl(37);return this.validCliEvt("Valid_Grupoid",37,function(){try{if(gx.fn.currentGridRowImpl(37)===0)return!0;var n=gx.util.balloon.getNew("GRUPOID",gx.fn.currentGridRowImpl(37));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Gruponombre=function(){var n=gx.fn.currentGridRowImpl(37);return this.validCliEvt("Valid_Gruponombre",37,function(){try{if(gx.fn.currentGridRowImpl(37)===0)return!0;var n=gx.util.balloon.getNew("GRUPONOMBRE",gx.fn.currentGridRowImpl(37));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Sgrupoid=function(){var n=gx.fn.currentGridRowImpl(37);return this.validCliEvt("Valid_Sgrupoid",37,function(){try{if(gx.fn.currentGridRowImpl(37)===0)return!0;var n=gx.util.balloon.getNew("SGRUPOID",gx.fn.currentGridRowImpl(37));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Sgruponombre=function(){var n=gx.fn.currentGridRowImpl(37);return this.validCliEvt("Valid_Sgruponombre",37,function(){try{if(gx.fn.currentGridRowImpl(37)===0)return!0;var n=gx.util.balloon.getNew("SGRUPONOMBRE",gx.fn.currentGridRowImpl(37));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Umeid=function(){var n=gx.fn.currentGridRowImpl(37);return this.validCliEvt("Valid_Umeid",37,function(){try{if(gx.fn.currentGridRowImpl(37)===0)return!0;var n=gx.util.balloon.getNew("UMEID",gx.fn.currentGridRowImpl(37));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.s112_client=function(){this.AV13UMeNomOperator=gx.num.trunc(0,0);this.AV14UMeNom=""};this.e11wj2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e12wj2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e17wj2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e13wj2_client=function(){return this.executeServerEvent("'DOCLEANFILTERS'",!0,null,!1,!1)};this.e18wj2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,11,12,13,14,17,19,20,21,22,23,24,27,28,30,31,32,33,34,35,36,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54];this.GXLastCtrlId=54;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",37,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"promptarticulounidadmedida",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addBitmap("&Select","vSELECT",38,0,"px",17,"px","e17wj2_client","","","SelectAttribute ActionBaseColorAttribute","WWActionColumn");i.addSingleLineEdit(8,39,"ARTID","Ide.","","ArtId","int",0,"px",9,9,"right",null,[],8,"ArtId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(16,40,"ARTNOM","Descripción","","ArtNom","svchar",0,"px",64,64,"left",null,[],16,"ArtNom",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(1534,41,"ARTDESCRIPCIONGENERAL","Descrip. Completa","","ArtDescripcionGeneral","svchar",0,"px",300,80,"left",null,[],1534,"ArtDescripcionGeneral",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addComboBox(356,42,"ARTTPO","Tipo Artículo","ArtTpo","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");i.addSingleLineEdit(9,43,"MARCAID","Ide.","","MarcaId","int",0,"px",4,4,"right",null,[],9,"MarcaId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(359,44,"MARCANOMBRE","Marca","","MarcaNombre","svchar",0,"px",64,64,"left",null,[],359,"MarcaNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(10,45,"GRUPOID","Ide.","","GrupoId","int",0,"px",4,4,"right",null,[],10,"GrupoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(362,46,"GRUPONOMBRE","Grupo","","GrupoNombre","svchar",0,"px",64,64,"left",null,[],362,"GrupoNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(11,47,"SGRUPOID","Ide.","","SGrupoId","int",0,"px",4,4,"right",null,[],11,"SGrupoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(361,48,"SGRUPONOMBRE","SubGrupo","","SGrupoNombre","svchar",0,"px",64,64,"left",null,[],361,"SGrupoNombre",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(13,49,"UMEID","Ide.","","UMeId","int",0,"px",4,4,"right",null,[],13,"UMeId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(363,50,"UMENOM","Unidad Medida","","UMeNom","svchar",0,"px",64,64,"left",null,[],363,"UMeNom",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addComboBox(364,51,"UMEESTADO","Estado","UMeEstado","char",null,0,!1,!1,0,"px","WWColumn hidden-xs");i.addSingleLineEdit(3362,52,"ARTICULOUNIDADMEDIDAVALOR","Valor","","ArticuloUnidadMedidaValor","decimal",0,"px",6,6,"right",null,[],3362,"ArticuloUnidadMedidaValor",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(i);this.DVPANEL_TABLEHEADERContainer=gx.uc.getNew(this,9,0,"BootstrapPanel","DVPANEL_TABLEHEADERContainer","Dvpanel_tableheader","DVPANEL_TABLEHEADER");r=this.DVPANEL_TABLEHEADERContainer;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Width","Width","100%","str");r.setProp("Height","Height","100","str");r.setProp("AutoWidth","Autowidth",!1,"bool");r.setProp("AutoHeight","Autoheight",!0,"bool");r.setProp("Cls","Cls","PanelFilled_BaseColor","str");r.setProp("ShowHeader","Showheader",!0,"bool");r.setProp("Title","Title","Opciones","str");r.setProp("Collapsible","Collapsible",!0,"bool");r.setProp("Collapsed","Collapsed",!1,"bool");r.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");r.setProp("IconPosition","Iconposition","Right","str");r.setProp("AutoScroll","Autoscroll",!1,"bool");r.setProp("Visible","Visible",!0,"bool");r.setProp("Gx Control Type","Gxcontroltype","","int");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,55,28,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV41GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(n){n.ParentObject.AV41GridCurrentPage=n.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",n.ParentObject.AV41GridCurrentPage)});t.addV2CFunction("AV42GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV42GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV42GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e11wj2_client);t.addEventHandler("ChangeRowsPerPage",this.e12wj2_client);this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[11]={id:11,fld:"TABLEHEADER",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"TABLEFILTERS",grid:0};n[17]={id:17,fld:"CLEANFILTERS",grid:0,evt:"e13wj2_client"};n[19]={id:19,fld:"TABLESPLITTEDFILTERTEXTUMENOM",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"FILTERTEXTUMENOM",format:0,grid:0};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"TABLEMERGEDUMENOM",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vUMENOMOPERATOR",gxz:"ZV13UMeNomOperator",gxold:"OV13UMeNomOperator",gxvar:"AV13UMeNomOperator",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV13UMeNomOperator=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV13UMeNomOperator=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("vUMENOMOPERATOR",gx.O.AV13UMeNomOperator)},c2v:function(){this.val()!==undefined&&(gx.O.AV13UMeNomOperator=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vUMENOMOPERATOR",".")},nac:gx.falseFn};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vUMENOM",gxz:"ZV14UMeNom",gxold:"OV14UMeNom",gxvar:"AV14UMeNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV14UMeNom=n)},v2z:function(n){n!==undefined&&(gx.O.ZV14UMeNom=n)},v2c:function(){gx.fn.setControlValue("vUMENOM",gx.O.AV14UMeNom,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV14UMeNom=this.val())},val:function(){return gx.fn.getControlValue("vUMENOM")},nac:gx.falseFn};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[38]={id:38,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",gxz:"ZV43Select",gxold:"OV43Select",gxvar:"AV43Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV43Select=n)},v2z:function(n){n!==undefined&&(gx.O.ZV43Select=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vSELECT",n||gx.fn.currentGridRowImpl(37),gx.O.AV43Select,gx.O.AV53Select_GXI)},c2v:function(n){gx.O.AV53Select_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV43Select=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(37))},val_GXI:function(n){return gx.fn.getGridControlValue("vSELECT_GXI",n||gx.fn.currentGridRowImpl(37))},gxvar_GXI:"AV53Select_GXI",nac:gx.falseFn,evt:"e17wj2_client",std:"ENTER"};n[39]={id:39,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:this.Valid_Artid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTID",gxz:"Z8ArtId",gxold:"O8ArtId",gxvar:"A8ArtId",ucs:[],op:[41,44,48,46,40,42,43,45,47,50,51],ip:[41,50,51,42,48,46,44,40,43,47,45,39,49],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A8ArtId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z8ArtId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ARTID",n||gx.fn.currentGridRowImpl(37),gx.O.A8ArtId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A8ArtId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ARTID",n||gx.fn.currentGridRowImpl(37),".")},nac:gx.falseFn};n[40]={id:40,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:this.Valid_Artnom,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTNOM",gxz:"Z16ArtNom",gxold:"O16ArtNom",gxvar:"A16ArtNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A16ArtNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z16ArtNom=n)},v2c:function(n){gx.fn.setGridControlValue("ARTNOM",n||gx.fn.currentGridRowImpl(37),gx.O.A16ArtNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A16ArtNom=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ARTNOM",n||gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};n[41]={id:41,lvl:2,type:"svchar",len:300,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTDESCRIPCIONGENERAL",gxz:"Z1534ArtDescripcionGeneral",gxold:"O1534ArtDescripcionGeneral",gxvar:"A1534ArtDescripcionGeneral",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1534ArtDescripcionGeneral=n)},v2z:function(n){n!==undefined&&(gx.O.Z1534ArtDescripcionGeneral=n)},v2c:function(n){gx.fn.setGridControlValue("ARTDESCRIPCIONGENERAL",n||gx.fn.currentGridRowImpl(37),gx.O.A1534ArtDescripcionGeneral,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1534ArtDescripcionGeneral=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ARTDESCRIPCIONGENERAL",n||gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};n[42]={id:42,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:this.Valid_Arttpo,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTTPO",gxz:"Z356ArtTpo",gxold:"O356ArtTpo",gxvar:"A356ArtTpo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A356ArtTpo=n)},v2z:function(n){n!==undefined&&(gx.O.Z356ArtTpo=n)},v2c:function(n){gx.fn.setGridComboBoxValue("ARTTPO",n||gx.fn.currentGridRowImpl(37),gx.O.A356ArtTpo);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A356ArtTpo=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ARTTPO",n||gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};n[43]={id:43,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:this.Valid_Marcaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MARCAID",gxz:"Z9MarcaId",gxold:"O9MarcaId",gxvar:"A9MarcaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A9MarcaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z9MarcaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("MARCAID",n||gx.fn.currentGridRowImpl(37),gx.O.A9MarcaId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A9MarcaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("MARCAID",n||gx.fn.currentGridRowImpl(37),".")},nac:gx.falseFn};n[44]={id:44,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:this.Valid_Marcanombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MARCANOMBRE",gxz:"Z359MarcaNombre",gxold:"O359MarcaNombre",gxvar:"A359MarcaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A359MarcaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z359MarcaNombre=n)},v2c:function(n){gx.fn.setGridControlValue("MARCANOMBRE",n||gx.fn.currentGridRowImpl(37),gx.O.A359MarcaNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A359MarcaNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("MARCANOMBRE",n||gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};n[45]={id:45,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:this.Valid_Grupoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"GRUPOID",gxz:"Z10GrupoId",gxold:"O10GrupoId",gxvar:"A10GrupoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A10GrupoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z10GrupoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("GRUPOID",n||gx.fn.currentGridRowImpl(37),gx.O.A10GrupoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A10GrupoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("GRUPOID",n||gx.fn.currentGridRowImpl(37),".")},nac:gx.falseFn};n[46]={id:46,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:this.Valid_Gruponombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"GRUPONOMBRE",gxz:"Z362GrupoNombre",gxold:"O362GrupoNombre",gxvar:"A362GrupoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A362GrupoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z362GrupoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("GRUPONOMBRE",n||gx.fn.currentGridRowImpl(37),gx.O.A362GrupoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A362GrupoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("GRUPONOMBRE",n||gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};n[47]={id:47,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:this.Valid_Sgrupoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SGRUPOID",gxz:"Z11SGrupoId",gxold:"O11SGrupoId",gxvar:"A11SGrupoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A11SGrupoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z11SGrupoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("SGRUPOID",n||gx.fn.currentGridRowImpl(37),gx.O.A11SGrupoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A11SGrupoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("SGRUPOID",n||gx.fn.currentGridRowImpl(37),".")},nac:gx.falseFn};n[48]={id:48,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:this.Valid_Sgruponombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SGRUPONOMBRE",gxz:"Z361SGrupoNombre",gxold:"O361SGrupoNombre",gxvar:"A361SGrupoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A361SGrupoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z361SGrupoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("SGRUPONOMBRE",n||gx.fn.currentGridRowImpl(37),gx.O.A361SGrupoNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A361SGrupoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("SGRUPONOMBRE",n||gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};n[49]={id:49,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:this.Valid_Umeid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UMEID",gxz:"Z13UMeId",gxold:"O13UMeId",gxvar:"A13UMeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A13UMeId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z13UMeId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("UMEID",n||gx.fn.currentGridRowImpl(37),gx.O.A13UMeId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A13UMeId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("UMEID",n||gx.fn.currentGridRowImpl(37),".")},nac:gx.falseFn};n[50]={id:50,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UMENOM",gxz:"Z363UMeNom",gxold:"O363UMeNom",gxvar:"A363UMeNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A363UMeNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z363UMeNom=n)},v2c:function(n){gx.fn.setGridControlValue("UMENOM",n||gx.fn.currentGridRowImpl(37),gx.O.A363UMeNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A363UMeNom=this.val(n))},val:function(n){return gx.fn.getGridControlValue("UMENOM",n||gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};n[51]={id:51,lvl:2,type:"char",len:3,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"UMEESTADO",gxz:"Z364UMeEstado",gxold:"O364UMeEstado",gxvar:"A364UMeEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A364UMeEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z364UMeEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("UMEESTADO",n||gx.fn.currentGridRowImpl(37),gx.O.A364UMeEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A364UMeEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("UMEESTADO",n||gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};n[52]={id:52,lvl:2,type:"decimal",len:6,dec:2,sign:!1,pic:"ZZ9.99",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTICULOUNIDADMEDIDAVALOR",gxz:"Z3362ArticuloUnidadMedidaValor",gxold:"O3362ArticuloUnidadMedidaValor",gxvar:"A3362ArticuloUnidadMedidaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3362ArticuloUnidadMedidaValor=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z3362ArticuloUnidadMedidaValor=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("ARTICULOUNIDADMEDIDAVALOR",n||gx.fn.currentGridRowImpl(37),gx.O.A3362ArticuloUnidadMedidaValor,2,",")},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3362ArticuloUnidadMedidaValor=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("ARTICULOUNIDADMEDIDAVALOR",n||gx.fn.currentGridRowImpl(37),".",",")},nac:gx.falseFn};n[53]={id:53,fld:"",grid:0};n[54]={id:54,fld:"",grid:0};this.AV13UMeNomOperator=0;this.ZV13UMeNomOperator=0;this.OV13UMeNomOperator=0;this.AV14UMeNom="";this.ZV14UMeNom="";this.OV14UMeNom="";this.ZV43Select="";this.OV43Select="";this.Z8ArtId=0;this.O8ArtId=0;this.Z16ArtNom="";this.O16ArtNom="";this.Z1534ArtDescripcionGeneral="";this.O1534ArtDescripcionGeneral="";this.Z356ArtTpo="";this.O356ArtTpo="";this.Z9MarcaId=0;this.O9MarcaId=0;this.Z359MarcaNombre="";this.O359MarcaNombre="";this.Z10GrupoId=0;this.O10GrupoId=0;this.Z362GrupoNombre="";this.O362GrupoNombre="";this.Z11SGrupoId=0;this.O11SGrupoId=0;this.Z361SGrupoNombre="";this.O361SGrupoNombre="";this.Z13UMeId=0;this.O13UMeId=0;this.Z363UMeNom="";this.O363UMeNom="";this.Z364UMeEstado="";this.O364UMeEstado="";this.Z3362ArticuloUnidadMedidaValor=0;this.O3362ArticuloUnidadMedidaValor=0;this.AV13UMeNomOperator=0;this.AV14UMeNom="";this.AV41GridCurrentPage=0;this.AV44InArtId=0;this.AV45InOutUMeId=0;this.AV50InOutArticuloUnidadMedidaValor=0;this.AV43Select="";this.A8ArtId=0;this.A16ArtNom="";this.A1534ArtDescripcionGeneral="";this.A356ArtTpo="";this.A9MarcaId=0;this.A359MarcaNombre="";this.A10GrupoId=0;this.A362GrupoNombre="";this.A11SGrupoId=0;this.A361SGrupoNombre="";this.A13UMeId=0;this.A363UMeNom="";this.A364UMeEstado="";this.A3362ArticuloUnidadMedidaValor=0;this.Events={e11wj2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e12wj2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e17wj2_client:["ENTER",!0],e13wj2_client:["'DOCLEANFILTERS'",!0],e18wj2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vUMENOMOPERATOR"},{av:"AV13UMeNomOperator",fld:"vUMENOMOPERATOR",pic:"ZZZ9"},{av:"AV14UMeNom",fld:"vUMENOM",pic:"@!"},{av:"AV44InArtId",fld:"vINARTID",pic:"ZZZZZZZZ9"}],[{av:"AV41GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV42GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[],[{ctrl:"GRID",prop:"Rows"},{ctrl:"FORM",prop:"Caption"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vUMENOMOPERATOR"},{av:"AV13UMeNomOperator",fld:"vUMENOMOPERATOR",pic:"ZZZ9"},{av:"AV14UMeNom",fld:"vUMENOM",pic:"@!"},{av:"AV44InArtId",fld:"vINARTID",pic:"ZZZZZZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"}],[]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vUMENOMOPERATOR"},{av:"AV13UMeNomOperator",fld:"vUMENOMOPERATOR",pic:"ZZZ9"},{av:"AV14UMeNom",fld:"vUMENOM",pic:"@!"},{av:"AV44InArtId",fld:"vINARTID",pic:"ZZZZZZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV43Select",fld:"vSELECT",pic:""},{av:'gx.fn.getCtrlProperty("vSELECT","Tooltiptext")',ctrl:"vSELECT",prop:"Tooltiptext"}]];this.EvtParms.ENTER=[[{av:"A13UMeId",fld:"UMEID",pic:"ZZZ9",hsh:!0},{av:"A3362ArticuloUnidadMedidaValor",fld:"ARTICULOUNIDADMEDIDAVALOR",pic:"ZZ9.99",hsh:!0}],[{av:"AV45InOutUMeId",fld:"vINOUTUMEID",pic:"ZZZ9"},{av:"AV50InOutArticuloUnidadMedidaValor",fld:"vINOUTARTICULOUNIDADMEDIDAVALOR",pic:"ZZ9.99"}]];this.EvtParms["'DOCLEANFILTERS'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{ctrl:"vUMENOMOPERATOR"},{av:"AV13UMeNomOperator",fld:"vUMENOMOPERATOR",pic:"ZZZ9"},{av:"AV14UMeNom",fld:"vUMENOM",pic:"@!"},{av:"AV44InArtId",fld:"vINARTID",pic:"ZZZZZZZZ9"}],[{ctrl:"vUMENOMOPERATOR"},{av:"AV13UMeNomOperator",fld:"vUMENOMOPERATOR",pic:"ZZZ9"},{av:"AV14UMeNom",fld:"vUMENOM",pic:"@!"},{av:"AV41GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"AV42GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"}]];this.EvtParms.VALID_ARTID=[[{av:"A1534ArtDescripcionGeneral",fld:"ARTDESCRIPCIONGENERAL",pic:"@!"},{av:"A363UMeNom",fld:"UMENOM",pic:"@!"},{ctrl:"UMEESTADO"},{av:"A364UMeEstado",fld:"UMEESTADO",pic:"@!"},{ctrl:"ARTTPO"},{av:"A356ArtTpo",fld:"ARTTPO",pic:""},{av:"A361SGrupoNombre",fld:"SGRUPONOMBRE",pic:"@!"},{av:"A362GrupoNombre",fld:"GRUPONOMBRE",pic:"@!"},{av:"A359MarcaNombre",fld:"MARCANOMBRE",pic:"@!"},{av:"A16ArtNom",fld:"ARTNOM",pic:"@!"},{av:"A9MarcaId",fld:"MARCAID",pic:"ZZZ9"},{av:"A11SGrupoId",fld:"SGRUPOID",pic:"ZZZ9"},{av:"A10GrupoId",fld:"GRUPOID",pic:"ZZZ9"},{av:"A8ArtId",fld:"ARTID",pic:"ZZZZZZZZ9"},{av:"A13UMeId",fld:"UMEID",pic:"ZZZ9",hsh:!0}],[{av:"A1534ArtDescripcionGeneral",fld:"ARTDESCRIPCIONGENERAL",pic:"@!"},{av:"A359MarcaNombre",fld:"MARCANOMBRE",pic:"@!"},{av:"A361SGrupoNombre",fld:"SGRUPONOMBRE",pic:"@!"},{av:"A362GrupoNombre",fld:"GRUPONOMBRE",pic:"@!"},{av:"A16ArtNom",fld:"ARTNOM",pic:"@!"},{ctrl:"ARTTPO"},{av:"A356ArtTpo",fld:"ARTTPO",pic:""},{av:"A9MarcaId",fld:"MARCAID",pic:"ZZZ9"},{av:"A10GrupoId",fld:"GRUPOID",pic:"ZZZ9"},{av:"A11SGrupoId",fld:"SGRUPOID",pic:"ZZZ9"},{av:"A363UMeNom",fld:"UMENOM",pic:"@!"},{ctrl:"UMEESTADO"},{av:"A364UMeEstado",fld:"UMEESTADO",pic:"@!"}]];this.EvtParms.VALID_ARTNOM=[[],[]];this.EvtParms.VALID_ARTTPO=[[],[]];this.EvtParms.VALID_MARCAID=[[],[]];this.EvtParms.VALID_MARCANOMBRE=[[],[]];this.EvtParms.VALID_GRUPOID=[[],[]];this.EvtParms.VALID_GRUPONOMBRE=[[],[]];this.EvtParms.VALID_SGRUPOID=[[],[]];this.EvtParms.VALID_SGRUPONOMBRE=[[],[]];this.EvtParms.VALID_UMEID=[[],[]];this.EnterCtrl=["vSELECT"];this.setVCMap("AV44InArtId","vINARTID",0,"int",9,0);this.setVCMap("AV45InOutUMeId","vINOUTUMEID",0,"int",4,0);this.setVCMap("AV50InOutArticuloUnidadMedidaValor","vINOUTARTICULOUNIDADMEDIDAVALOR",0,"decimal",6,2);this.setVCMap("AV44InArtId","vINARTID",0,"int",9,0);this.setVCMap("AV44InArtId","vINARTID",0,"int",9,0);i.addRefreshingVar(this.GXValidFnc[28]);i.addRefreshingVar(this.GXValidFnc[31]);i.addRefreshingVar({rfrVar:"AV44InArtId"});i.addRefreshingParm(this.GXValidFnc[28]);i.addRefreshingParm(this.GXValidFnc[31]);i.addRefreshingParm({rfrVar:"AV44InArtId"});this.Initialize()});gx.wi(function(){gx.createParentObj(promptarticulounidadmedida)})