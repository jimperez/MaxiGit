/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:52:52.33
*/
gx.evt.autoSkip=!1;gx.define("remitocompra_paso02",!1,function(){var n,r,t,i;this.ServerClass="remitocompra_paso02";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A359MarcaNombre=gx.fn.getControlValue("MARCANOMBRE");this.A362GrupoNombre=gx.fn.getControlValue("GRUPONOMBRE");this.A361SGrupoNombre=gx.fn.getControlValue("SGRUPONOMBRE");this.A356ArtTpo=gx.fn.getControlValue("ARTTPO");this.A804RtoCpaLinDes=gx.fn.getControlValue("RTOCPALINDES");this.AV10RtoCpaId=gx.fn.getIntegerValue("vRTOCPAID",".")};this.Valid_Artid=function(){var n=gx.fn.currentGridRowImpl(36);return this.validCliEvt("Valid_Artid",36,function(){try{if(gx.fn.currentGridRowImpl(36)===0)return!0;var n=gx.util.balloon.getNew("ARTID",gx.fn.currentGridRowImpl(36));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Artnom=function(){var n=gx.fn.currentGridRowImpl(36);return this.validCliEvt("Valid_Artnom",36,function(){try{if(gx.fn.currentGridRowImpl(36)===0)return!0;var n=gx.util.balloon.getNew("ARTNOM",gx.fn.currentGridRowImpl(36));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e11aj1_client=function(){return this.clearMessages(),this.call("remitocompra_paso01.aspx",[]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12aj2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE",!1,null,!0,!0)};this.e13aj2_client=function(){return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!1,null,!0,!0)};this.e18aj2_client=function(){return this.executeServerEvent("VREMITODETALLEELIMINAR.CLICK",!0,arguments[0],!1,!1)};this.e14aj2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e19aj2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,30,31,32,33,34,35,37,38,39,40,41,42,43,44,45,46,47,48,50,51,52,53,54,55,56,57,58,59,60];this.GXLastCtrlId=60;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",36,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"remitocompra_paso02",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!0,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);r=this.GridContainer;r.addSingleLineEdit(110,37,"RTOCPAID","Remito","","RtoCpaId","int",0,"px",9,9,"right",null,[],110,"RtoCpaId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(8,38,"ARTID","Cod. Art.","","ArtId","int",0,"px",9,9,"right",null,[],8,"ArtId",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(1534,39,"ARTDESCRIPCIONGENERAL","Descripción ","","ArtDescripcionGeneral","svchar",0,"px",300,80,"left",null,[],1534,"ArtDescripcionGeneral",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(16,40,"ARTNOM","Descripción","","ArtNom","svchar",0,"px",64,64,"left",null,[],16,"ArtNom",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(117,41,"RTOCPALINID","Ide.","","RtoCpaLinId","int",0,"px",4,4,"right",null,[],117,"RtoCpaLinId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(805,42,"RTOCPALINCNT","Cantidad","","RtoCpaLinCnt","int",0,"px",4,4,"right",null,[],805,"RtoCpaLinCnt",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit("Rtocpalincntrecibida",43,"vRTOCPALINCNTRECIBIDA","A Recibir","","RtoCpaLinCntRecibida","int",0,"px",4,4,"right",null,[],"Rtocpalincntrecibida","RtoCpaLinCntRecibida",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addSingleLineEdit(781,44,"RTOCPALINCNTRECIBIDA","Recibida","","RtoCpaLinCntRecibida","int",0,"px",4,4,"right",null,[],781,"RtoCpaLinCntRecibida",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");r.addComboBox(807,45,"RTOCPALINESTADO","Estado","RtoCpaLinEstado","char",null,0,!1,!1,0,"px","WWColumn");r.addBitmap("&Remitodetalleeliminar","vREMITODETALLEELIMINAR",46,0,"px",17,"px","e18aj2_client","","","ActionBaseColorAttribute","WWActionColumn");this.GridContainer.emptyText="";this.setGrid(r);this.GRIDPAGINATIONBARContainer=gx.uc.getNew(this,49,22,"DVelop_DVPaginationBar","GRIDPAGINATIONBARContainer","Gridpaginationbar","GRIDPAGINATIONBAR");t=this.GRIDPAGINATIONBARContainer;t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Class","Class","PaginationBar","str");t.setProp("ShowFirst","Showfirst",!1,"bool");t.setProp("ShowPrevious","Showprevious",!0,"bool");t.setProp("ShowNext","Shownext",!0,"bool");t.setProp("ShowLast","Showlast",!1,"bool");t.setProp("PagesToShow","Pagestoshow",5,"num");t.setProp("PagingButtonsPosition","Pagingbuttonsposition","Right","str");t.setProp("PagingCaptionPosition","Pagingcaptionposition","Left","str");t.setProp("EmptyGridClass","Emptygridclass","PaginationBarEmptyGrid","str");t.setProp("SelectedPage","Selectedpage","","char");t.setProp("RowsPerPageSelector","Rowsperpageselector",!0,"bool");t.setDynProp("RowsPerPageSelectedValue","Rowsperpageselectedvalue",10,"num");t.setProp("RowsPerPageOptions","Rowsperpageoptions","5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50","str");t.setProp("First","First","First","str");t.setProp("Previous","Previous","WWP_PagingPreviousCaption","str");t.setProp("Next","Next","WWP_PagingNextCaption","str");t.setProp("Last","Last","Last","str");t.setProp("Caption","Caption","Página <CURRENT_PAGE> de <TOTAL_PAGES>","str");t.setProp("EmptyGridCaption","Emptygridcaption","WWP_PagingEmptyGridCaption","str");t.setProp("RowsPerPageCaption","Rowsperpagecaption","WWP_PagingRowsPerPage","str");t.addV2CFunction("AV14GridCurrentPage","vGRIDCURRENTPAGE","SetCurrentPage");t.addC2VFunction(function(t){t.ParentObject.AV14GridCurrentPage=t.GetCurrentPage();n[60].c2v()});t.addV2CFunction("AV15GridPageCount","vGRIDPAGECOUNT","SetPageCount");t.addC2VFunction(function(n){n.ParentObject.AV15GridPageCount=n.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",n.ParentObject.AV15GridPageCount)});t.setProp("RecordCount","Recordcount","","str");t.setProp("Page","Page","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});t.addEventHandler("ChangePage",this.e12aj2_client);t.addEventHandler("ChangeRowsPerPage",this.e13aj2_client);this.setUserControl(t);this.DVPANEL_REMITOCOMPRADETALLEContainer=gx.uc.getNew(this,28,22,"BootstrapPanel","DVPANEL_REMITOCOMPRADETALLEContainer","Dvpanel_remitocompradetalle","DVPANEL_REMITOCOMPRADETALLE");i=this.DVPANEL_REMITOCOMPRADETALLEContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Width","Width","100%","str");i.setProp("Height","Height","100","str");i.setProp("AutoWidth","Autowidth",!1,"bool");i.setProp("AutoHeight","Autoheight",!0,"bool");i.setProp("Cls","Cls","PanelFilled_BaseColor","str");i.setProp("ShowHeader","Showheader",!0,"bool");i.setDynProp("Title","Title","Detalle de Articulos","str");i.setProp("Collapsible","Collapsible",!1,"bool");i.setProp("Collapsed","Collapsed",!1,"bool");i.setProp("ShowCollapseIcon","Showcollapseicon",!1,"bool");i.setProp("IconPosition","Iconposition","Right","str");i.setProp("AutoScroll","Autoscroll",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLEMAIN",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLECONTENT",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"NOTAPEDIDODATOS",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"TXTPROVEEDOR",format:0,grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,lvl:0,type:"int",len:15,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPROVEEDORID",gxz:"ZV8ProveedorId",gxold:"OV8ProveedorId",gxvar:"AV8ProveedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV8ProveedorId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV8ProveedorId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vPROVEEDORID",gx.O.AV8ProveedorId,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV8ProveedorId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vPROVEEDORID",".")},nac:gx.falseFn};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,lvl:0,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPROVEEDORNOMBRE",gxz:"ZV9ProveedorNombre",gxold:"OV9ProveedorNombre",gxvar:"AV9ProveedorNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV9ProveedorNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV9ProveedorNombre=n)},v2c:function(){gx.fn.setControlValue("vPROVEEDORNOMBRE",gx.O.AV9ProveedorNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV9ProveedorNombre=this.val())},val:function(){return gx.fn.getControlValue("vPROVEEDORNOMBRE")},nac:gx.falseFn};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[30]={id:30,fld:"REMITOCOMPRADETALLE",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[37]={id:37,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOCPAID",gxz:"Z110RtoCpaId",gxold:"O110RtoCpaId",gxvar:"A110RtoCpaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A110RtoCpaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z110RtoCpaId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("RTOCPAID",n||gx.fn.currentGridRowImpl(36),gx.O.A110RtoCpaId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A110RtoCpaId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("RTOCPAID",n||gx.fn.currentGridRowImpl(36),".")},nac:gx.falseFn};n[38]={id:38,lvl:2,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:this.Valid_Artid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTID",gxz:"Z8ArtId",gxold:"O8ArtId",gxvar:"A8ArtId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A8ArtId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z8ArtId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ARTID",n||gx.fn.currentGridRowImpl(36),gx.O.A8ArtId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A8ArtId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ARTID",n||gx.fn.currentGridRowImpl(36),".")},nac:gx.falseFn};n[39]={id:39,lvl:2,type:"svchar",len:300,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTDESCRIPCIONGENERAL",gxz:"Z1534ArtDescripcionGeneral",gxold:"O1534ArtDescripcionGeneral",gxvar:"A1534ArtDescripcionGeneral",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A1534ArtDescripcionGeneral=n)},v2z:function(n){n!==undefined&&(gx.O.Z1534ArtDescripcionGeneral=n)},v2c:function(n){gx.fn.setGridControlValue("ARTDESCRIPCIONGENERAL",n||gx.fn.currentGridRowImpl(36),gx.O.A1534ArtDescripcionGeneral,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1534ArtDescripcionGeneral=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ARTDESCRIPCIONGENERAL",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};n[40]={id:40,lvl:2,type:"svchar",len:64,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:this.Valid_Artnom,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ARTNOM",gxz:"Z16ArtNom",gxold:"O16ArtNom",gxvar:"A16ArtNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A16ArtNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z16ArtNom=n)},v2c:function(n){gx.fn.setGridControlValue("ARTNOM",n||gx.fn.currentGridRowImpl(36),gx.O.A16ArtNom,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A16ArtNom=this.val(n))},val:function(n){return gx.fn.getGridControlValue("ARTNOM",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};n[41]={id:41,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOCPALINID",gxz:"Z117RtoCpaLinId",gxold:"O117RtoCpaLinId",gxvar:"A117RtoCpaLinId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A117RtoCpaLinId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z117RtoCpaLinId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("RTOCPALINID",n||gx.fn.currentGridRowImpl(36),gx.O.A117RtoCpaLinId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A117RtoCpaLinId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("RTOCPALINID",n||gx.fn.currentGridRowImpl(36),".")},nac:gx.falseFn};n[42]={id:42,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOCPALINCNT",gxz:"Z805RtoCpaLinCnt",gxold:"O805RtoCpaLinCnt",gxvar:"A805RtoCpaLinCnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A805RtoCpaLinCnt=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z805RtoCpaLinCnt=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("RTOCPALINCNT",n||gx.fn.currentGridRowImpl(36),gx.O.A805RtoCpaLinCnt,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A805RtoCpaLinCnt=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("RTOCPALINCNT",n||gx.fn.currentGridRowImpl(36),".")},nac:gx.falseFn};n[43]={id:43,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vRTOCPALINCNTRECIBIDA",gxz:"ZV12RtoCpaLinCntRecibida",gxold:"OV12RtoCpaLinCntRecibida",gxvar:"AV12RtoCpaLinCntRecibida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.AV12RtoCpaLinCntRecibida=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV12RtoCpaLinCntRecibida=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("vRTOCPALINCNTRECIBIDA",n||gx.fn.currentGridRowImpl(36),gx.O.AV12RtoCpaLinCntRecibida,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV12RtoCpaLinCntRecibida=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("vRTOCPALINCNTRECIBIDA",n||gx.fn.currentGridRowImpl(36),".")},nac:gx.falseFn};n[44]={id:44,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOCPALINCNTRECIBIDA",gxz:"Z781RtoCpaLinCntRecibida",gxold:"O781RtoCpaLinCntRecibida",gxvar:"A781RtoCpaLinCntRecibida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A781RtoCpaLinCntRecibida=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z781RtoCpaLinCntRecibida=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("RTOCPALINCNTRECIBIDA",n||gx.fn.currentGridRowImpl(36),gx.O.A781RtoCpaLinCntRecibida,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A781RtoCpaLinCntRecibida=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("RTOCPALINCNTRECIBIDA",n||gx.fn.currentGridRowImpl(36),".")},nac:gx.falseFn};n[45]={id:45,lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RTOCPALINESTADO",gxz:"Z807RtoCpaLinEstado",gxold:"O807RtoCpaLinEstado",gxvar:"A807RtoCpaLinEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A807RtoCpaLinEstado=n)},v2z:function(n){n!==undefined&&(gx.O.Z807RtoCpaLinEstado=n)},v2c:function(n){gx.fn.setGridComboBoxValue("RTOCPALINESTADO",n||gx.fn.currentGridRowImpl(36),gx.O.A807RtoCpaLinEstado);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A807RtoCpaLinEstado=this.val(n))},val:function(n){return gx.fn.getGridControlValue("RTOCPALINESTADO",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};n[46]={id:46,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:36,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vREMITODETALLEELIMINAR",gxz:"ZV16RemitoDetalleEliminar",gxold:"OV16RemitoDetalleEliminar",gxvar:"AV16RemitoDetalleEliminar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV16RemitoDetalleEliminar=n)},v2z:function(n){n!==undefined&&(gx.O.ZV16RemitoDetalleEliminar=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vREMITODETALLEELIMINAR",n||gx.fn.currentGridRowImpl(36),gx.O.AV16RemitoDetalleEliminar,gx.O.AV25Remitodetalleeliminar_GXI)},c2v:function(n){gx.O.AV25Remitodetalleeliminar_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV16RemitoDetalleEliminar=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vREMITODETALLEELIMINAR",n||gx.fn.currentGridRowImpl(36))},val_GXI:function(n){return gx.fn.getGridControlValue("vREMITODETALLEELIMINAR_GXI",n||gx.fn.currentGridRowImpl(36))},gxvar_GXI:"AV25Remitodetalleeliminar_GXI",nac:gx.falseFn,evt:"e18aj2_client"};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"",grid:0};n[54]={id:54,fld:"BTNANTERIOR",grid:0,evt:"e11aj1_client"};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"BTNWIZARDNEXT",grid:0,evt:"e14aj2_client",std:"ENTER"};n[57]={id:57,fld:"",grid:0};n[58]={id:58,fld:"",grid:0};n[59]={id:59,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};n[60]={id:60,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGRIDCURRENTPAGE",gxz:"ZV14GridCurrentPage",gxold:"OV14GridCurrentPage",gxvar:"AV14GridCurrentPage",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV14GridCurrentPage=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV14GridCurrentPage=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vGRIDCURRENTPAGE",gx.O.AV14GridCurrentPage,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV14GridCurrentPage=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vGRIDCURRENTPAGE",".")},nac:gx.falseFn};this.AV8ProveedorId=0;this.ZV8ProveedorId=0;this.OV8ProveedorId=0;this.AV9ProveedorNombre="";this.ZV9ProveedorNombre="";this.OV9ProveedorNombre="";this.Z110RtoCpaId=0;this.O110RtoCpaId=0;this.Z8ArtId=0;this.O8ArtId=0;this.Z1534ArtDescripcionGeneral="";this.O1534ArtDescripcionGeneral="";this.Z16ArtNom="";this.O16ArtNom="";this.Z117RtoCpaLinId=0;this.O117RtoCpaLinId=0;this.Z805RtoCpaLinCnt=0;this.O805RtoCpaLinCnt=0;this.ZV12RtoCpaLinCntRecibida=0;this.OV12RtoCpaLinCntRecibida=0;this.Z781RtoCpaLinCntRecibida=0;this.O781RtoCpaLinCntRecibida=0;this.Z807RtoCpaLinEstado="";this.O807RtoCpaLinEstado="";this.ZV16RemitoDetalleEliminar="";this.OV16RemitoDetalleEliminar="";this.AV14GridCurrentPage=0;this.ZV14GridCurrentPage=0;this.OV14GridCurrentPage=0;this.AV8ProveedorId=0;this.AV9ProveedorNombre="";this.AV14GridCurrentPage=0;this.A804RtoCpaLinDes="";this.A361SGrupoNombre="";this.A362GrupoNombre="";this.A359MarcaNombre="";this.A356ArtTpo="";this.A9MarcaId=0;this.A10GrupoId=0;this.A11SGrupoId=0;this.A110RtoCpaId=0;this.A8ArtId=0;this.A1534ArtDescripcionGeneral="";this.A16ArtNom="";this.A117RtoCpaLinId=0;this.A805RtoCpaLinCnt=0;this.AV12RtoCpaLinCntRecibida=0;this.A781RtoCpaLinCntRecibida=0;this.A807RtoCpaLinEstado="";this.AV16RemitoDetalleEliminar="";this.A28ProveedorId=0;this.A354ProveedorNombre="";this.AV10RtoCpaId=0;this.Events={e12aj2_client:["GRIDPAGINATIONBAR.CHANGEPAGE",!0],e13aj2_client:["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE",!0],e18aj2_client:["VREMITODETALLEELIMINAR.CLICK",!0],e14aj2_client:["ENTER",!0],e19aj2_client:["CANCEL",!0],e11aj1_client:["'DOANTERIOR'",!1]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV10RtoCpaId",fld:"vRTOCPAID",pic:"ZZZZZZZZ9"}],[]];this.EvtParms.START=[[{av:"A110RtoCpaId",fld:"RTOCPAID",pic:"ZZZZZZZZ9"},{av:"A28ProveedorId",fld:"PROVEEDORID",pic:"ZZZZZZZZZZZZZZ9"},{av:"A354ProveedorNombre",fld:"PROVEEDORNOMBRE",pic:"@!"}],[{ctrl:"GRID",prop:"Rows"},{av:"AV14GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.Visible",ctrl:"vGRIDCURRENTPAGE",prop:"Visible"},{av:"AV15GridPageCount",fld:"vGRIDPAGECOUNT",pic:"ZZZZZZZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"},{av:'gx.fn.getCtrlProperty("NOTAPEDIDODATOS","Visible")',ctrl:"NOTAPEDIDODATOS",prop:"Visible"},{av:"AV10RtoCpaId",fld:"vRTOCPAID",pic:"ZZZZZZZZ9"},{av:"AV8ProveedorId",fld:"vPROVEEDORID",pic:"ZZZZZZZZZZZZZZ9"},{av:"AV9ProveedorNombre",fld:"vPROVEEDORNOMBRE",pic:"@!"},{av:"this.DVPANEL_REMITOCOMPRADETALLEContainer.Title",ctrl:"DVPANEL_REMITOCOMPRADETALLE",prop:"Title"}]];this.EvtParms["GRID.LOAD"]=[[{av:"A781RtoCpaLinCntRecibida",fld:"RTOCPALINCNTRECIBIDA",pic:"ZZZ9"}],[{av:"AV16RemitoDetalleEliminar",fld:"vREMITODETALLEELIMINAR",pic:""},{av:'gx.fn.getCtrlProperty("vREMITODETALLEELIMINAR","Tooltiptext")',ctrl:"vREMITODETALLEELIMINAR",prop:"Tooltiptext"},{av:"AV12RtoCpaLinCntRecibida",fld:"vRTOCPALINCNTRECIBIDA",pic:"ZZZ9"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV10RtoCpaId",fld:"vRTOCPAID",pic:"ZZZZZZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.SelectedPage",ctrl:"GRIDPAGINATIONBAR",prop:"SelectedPage"},{av:"AV14GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"}],[{av:"AV14GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"}]];this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV10RtoCpaId",fld:"vRTOCPAID",pic:"ZZZZZZZZ9"},{av:"this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue",ctrl:"GRIDPAGINATIONBAR",prop:"RowsPerPageSelectedValue"}],[{ctrl:"GRID",prop:"Rows"},{av:"AV14GridCurrentPage",fld:"vGRIDCURRENTPAGE",pic:"ZZZZZZZZZ9"}]];this.EvtParms["'DOANTERIOR'"]=[[],[]];this.EvtParms["VREMITODETALLEELIMINAR.CLICK"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV10RtoCpaId",fld:"vRTOCPAID",pic:"ZZZZZZZZ9"},{av:"A110RtoCpaId",fld:"RTOCPAID",pic:"ZZZZZZZZ9"},{av:"A117RtoCpaLinId",fld:"RTOCPALINID",pic:"ZZZ9"}],[]];this.EvtParms.ENTER=[[{av:"AV12RtoCpaLinCntRecibida",fld:"vRTOCPALINCNTRECIBIDA",grid:36,pic:"ZZZ9"},{av:"GRID_nFirstRecordOnPage"},{av:"nRC_GXsfl_36",ctrl:"GRID",grid:36,prop:"GridRC"},{av:"A804RtoCpaLinDes",fld:"RTOCPALINDES",pic:"@!"},{av:"A805RtoCpaLinCnt",fld:"RTOCPALINCNT",grid:36,pic:"ZZZ9"},{av:"A110RtoCpaId",fld:"RTOCPAID",grid:36,pic:"ZZZZZZZZ9"},{av:"A117RtoCpaLinId",fld:"RTOCPALINID",grid:36,pic:"ZZZ9"}],[{av:"AV12RtoCpaLinCntRecibida",fld:"vRTOCPALINCNTRECIBIDA",pic:"ZZZ9"}]];this.EvtParms.VALID_ARTID=[[],[]];this.EvtParms.VALID_ARTNOM=[[],[]];this.EnterCtrl=["BTNWIZARDNEXT"];this.setVCMap("A359MarcaNombre","MARCANOMBRE",0,"svchar",64,0);this.setVCMap("A362GrupoNombre","GRUPONOMBRE",0,"svchar",64,0);this.setVCMap("A361SGrupoNombre","SGRUPONOMBRE",0,"svchar",64,0);this.setVCMap("A356ArtTpo","ARTTPO",0,"char",3,0);this.setVCMap("A804RtoCpaLinDes","RTOCPALINDES",0,"svchar",64,0);this.setVCMap("AV10RtoCpaId","vRTOCPAID",0,"int",9,0);this.setVCMap("AV10RtoCpaId","vRTOCPAID",0,"int",9,0);r.addRefreshingVar({rfrVar:"AV10RtoCpaId"});r.addRefreshingParm({rfrVar:"AV10RtoCpaId"});this.Initialize()});gx.wi(function(){gx.createParentObj(remitocompra_paso02)})