/*!   GeneXus C# 16_0_6-136889 on 11/1/2019 15:35:27.44
*/
gx.evt.autoSkip=!1;gx.define("facturavtacreditowc",!0,function(n){var t,i;this.ServerClass="facturavtacreditowc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!0;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A2137CreditoDescripcion=gx.fn.getControlValue("CREDITODESCRIPCION");this.A1040PlanNombre=gx.fn.getControlValue("PLANNOMBRE");this.A2138CreditoCuotaCosto=gx.fn.getDecimalValue("CREDITOCUOTACOSTO",".",",");this.A2139CreditoCuotaDesde=gx.fn.getDateValue("CREDITOCUOTADESDE");this.A2140CreditoCuotaHasta=gx.fn.getDateValue("CREDITOCUOTAHASTA");this.AV73Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV7FacVtaId=gx.fn.getIntegerValue("vFACVTAID",".");this.AV7FacVtaId=gx.fn.getIntegerValue("vFACVTAID",".");this.AV73Pgmname=gx.fn.getControlValue("vPGMNAME")};this.Valid_Creditoid=function(){var n=gx.fn.currentGridRowImpl(12);return this.validCliEvt("Valid_Creditoid",12,function(){try{if(gx.fn.currentGridRowImpl(12)===0)return!0;var n=gx.util.balloon.getNew("CREDITOID",gx.fn.currentGridRowImpl(12));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Creditocuota=function(){var n=gx.fn.currentGridRowImpl(12);return this.validCliEvt("Valid_Creditocuota",12,function(){try{if(gx.fn.currentGridRowImpl(12)===0)return!0;var n=gx.util.balloon.getNew("CREDITOCUOTA",gx.fn.currentGridRowImpl(12));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e14kz2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e15kz2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];this.GXLastCtrlId=29;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",12,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"facturavtacreditowc",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addSingleLineEdit(277,13,"FACVTACREDITODETID","Det Id","","FacVtaCreditoDetId","int",0,"px",4,4,"right",null,[],277,"FacVtaCreditoDetId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(266,14,"CREDITOID","Ide.","","CreditoId","int",0,"px",8,8,"right",null,[],266,"CreditoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(267,15,"CREDITOCUOTA","Cuota","","CreditoCuota","int",0,"px",4,4,"right",null,[],267,"CreditoCuota",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2136,16,"CREDITOCUOTANOMBRE","Planes Vigentes","","CreditoCuotaNombre","char",0,"px",100,80,"left",null,[],2136,"CreditoCuotaNombre",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2182,17,"FACVTACREDITOIMPORTEORI","Imp. Fin.","","FacVtaCreditoImporteOri","decimal",0,"px",13,13,"right",null,[],2182,"FacVtaCreditoImporteOri",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2183,18,"FACVTACREDITOCOSTO","Porcentaje","","FacVtaCreditoCosto","decimal",0,"px",6,6,"right",null,[],2183,"FacVtaCreditoCosto",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2185,19,"FACVTACREDITOCUOTACANTIDAD","Cantidad","","FacVtaCreditoCuotaCantidad","int",0,"px",4,4,"right",null,[],2185,"FacVtaCreditoCuotaCantidad",!0,0,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2186,20,"FACVTACREDITOCUOTAIMPORTE","Cuota","","FacVtaCreditoCuotaImporte","decimal",0,"px",13,13,"right",null,[],2186,"FacVtaCreditoCuotaImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2184,21,"FACVTACREDITOIMPORTE","Importe","","FacVtaCreditoImporte","decimal",0,"px",13,13,"right",null,[],2184,"FacVtaCreditoImporte",!0,2,!1,!1,"AttributeRealWidth",1,"WWColumn");i.addSingleLineEdit(2187,22,"FACVTACREDITOPORCENTAJEFIN","Porc. Fin.","","FacVtaCreditoPorcentajeFin","decimal",0,"px",6,6,"right",null,[],2187,"FacVtaCreditoPorcentajeFin",!1,2,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2188,23,"FACVTACREDITO094","Vta Credito094","","FacVtaCredito094","char",0,"px",15,15,"left",null,[],2188,"FacVtaCredito094",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2189,24,"FACVTACREDITO095","Vta Credito095","","FacVtaCredito095","dtime",0,"px",14,14,"right",null,[],2189,"FacVtaCredito095",!1,5,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");i.addSingleLineEdit(2190,25,"FACVTACREDITOCONTRATOID","Contrato Id","","FacVtaCreditoContratoId","int",0,"px",8,8,"right",null,[],2190,"FacVtaCreditoContratoId",!1,0,!1,!1,"AttributeRealWidth",1,"WWColumn hidden-xs");this.GridContainer.emptyText="";this.setGrid(i);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"LAYOUTMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLEGRIDHEADER",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[13]={id:13,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACREDITODETID",gxz:"Z277FacVtaCreditoDetId",gxold:"O277FacVtaCreditoDetId",gxvar:"A277FacVtaCreditoDetId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A277FacVtaCreditoDetId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z277FacVtaCreditoDetId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTACREDITODETID",n||gx.fn.currentGridRowImpl(12),gx.O.A277FacVtaCreditoDetId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A277FacVtaCreditoDetId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FACVTACREDITODETID",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};t[14]={id:14,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:this.Valid_Creditoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOID",gxz:"Z266CreditoId",gxold:"O266CreditoId",gxvar:"A266CreditoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A266CreditoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z266CreditoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CREDITOID",n||gx.fn.currentGridRowImpl(12),gx.O.A266CreditoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A266CreditoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CREDITOID",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};t[15]={id:15,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:this.Valid_Creditocuota,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTA",gxz:"Z267CreditoCuota",gxold:"O267CreditoCuota",gxvar:"A267CreditoCuota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A267CreditoCuota=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z267CreditoCuota=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CREDITOCUOTA",n||gx.fn.currentGridRowImpl(12),gx.O.A267CreditoCuota,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A267CreditoCuota=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CREDITOCUOTA",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};t[16]={id:16,lvl:2,type:"char",len:100,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CREDITOCUOTANOMBRE",gxz:"Z2136CreditoCuotaNombre",gxold:"O2136CreditoCuotaNombre",gxvar:"A2136CreditoCuotaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2136CreditoCuotaNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2136CreditoCuotaNombre=n)},v2c:function(n){gx.fn.setGridControlValue("CREDITOCUOTANOMBRE",n||gx.fn.currentGridRowImpl(12),gx.O.A2136CreditoCuotaNombre,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2136CreditoCuotaNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CREDITOCUOTANOMBRE",n||gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};t[17]={id:17,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACREDITOIMPORTEORI",gxz:"Z2182FacVtaCreditoImporteOri",gxold:"O2182FacVtaCreditoImporteOri",gxvar:"A2182FacVtaCreditoImporteOri",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2182FacVtaCreditoImporteOri=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2182FacVtaCreditoImporteOri=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACVTACREDITOIMPORTEORI",n||gx.fn.currentGridRowImpl(12),gx.O.A2182FacVtaCreditoImporteOri,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2182FacVtaCreditoImporteOri=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACVTACREDITOIMPORTEORI",n||gx.fn.currentGridRowImpl(12),".",",")},nac:gx.falseFn};t[18]={id:18,lvl:2,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACREDITOCOSTO",gxz:"Z2183FacVtaCreditoCosto",gxold:"O2183FacVtaCreditoCosto",gxvar:"A2183FacVtaCreditoCosto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2183FacVtaCreditoCosto=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2183FacVtaCreditoCosto=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACVTACREDITOCOSTO",n||gx.fn.currentGridRowImpl(12),gx.O.A2183FacVtaCreditoCosto,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2183FacVtaCreditoCosto=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACVTACREDITOCOSTO",n||gx.fn.currentGridRowImpl(12),".",",")},nac:gx.falseFn};t[19]={id:19,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACREDITOCUOTACANTIDAD",gxz:"Z2185FacVtaCreditoCuotaCantidad",gxold:"O2185FacVtaCreditoCuotaCantidad",gxvar:"A2185FacVtaCreditoCuotaCantidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2185FacVtaCreditoCuotaCantidad=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2185FacVtaCreditoCuotaCantidad=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTACREDITOCUOTACANTIDAD",n||gx.fn.currentGridRowImpl(12),gx.O.A2185FacVtaCreditoCuotaCantidad,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2185FacVtaCreditoCuotaCantidad=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FACVTACREDITOCUOTACANTIDAD",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};t[20]={id:20,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACREDITOCUOTAIMPORTE",gxz:"Z2186FacVtaCreditoCuotaImporte",gxold:"O2186FacVtaCreditoCuotaImporte",gxvar:"A2186FacVtaCreditoCuotaImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2186FacVtaCreditoCuotaImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2186FacVtaCreditoCuotaImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACVTACREDITOCUOTAIMPORTE",n||gx.fn.currentGridRowImpl(12),gx.O.A2186FacVtaCreditoCuotaImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2186FacVtaCreditoCuotaImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACVTACREDITOCUOTAIMPORTE",n||gx.fn.currentGridRowImpl(12),".",",")},nac:gx.falseFn};t[21]={id:21,lvl:2,type:"decimal",len:12,dec:2,sign:!0,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACREDITOIMPORTE",gxz:"Z2184FacVtaCreditoImporte",gxold:"O2184FacVtaCreditoImporte",gxvar:"A2184FacVtaCreditoImporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2184FacVtaCreditoImporte=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2184FacVtaCreditoImporte=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACVTACREDITOIMPORTE",n||gx.fn.currentGridRowImpl(12),gx.O.A2184FacVtaCreditoImporte,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2184FacVtaCreditoImporte=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACVTACREDITOIMPORTE",n||gx.fn.currentGridRowImpl(12),".",",")},nac:gx.falseFn};t[22]={id:22,lvl:2,type:"decimal",len:6,dec:2,sign:!1,pic:"999.99",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACREDITOPORCENTAJEFIN",gxz:"Z2187FacVtaCreditoPorcentajeFin",gxold:"O2187FacVtaCreditoPorcentajeFin",gxvar:"A2187FacVtaCreditoPorcentajeFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2187FacVtaCreditoPorcentajeFin=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z2187FacVtaCreditoPorcentajeFin=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("FACVTACREDITOPORCENTAJEFIN",n||gx.fn.currentGridRowImpl(12),gx.O.A2187FacVtaCreditoPorcentajeFin,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2187FacVtaCreditoPorcentajeFin=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("FACVTACREDITOPORCENTAJEFIN",n||gx.fn.currentGridRowImpl(12),".",",")},nac:gx.falseFn};t[23]={id:23,lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACREDITO094",gxz:"Z2188FacVtaCredito094",gxold:"O2188FacVtaCredito094",gxvar:"A2188FacVtaCredito094",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2188FacVtaCredito094=n)},v2z:function(n){n!==undefined&&(gx.O.Z2188FacVtaCredito094=n)},v2c:function(n){gx.fn.setGridControlValue("FACVTACREDITO094",n||gx.fn.currentGridRowImpl(12),gx.O.A2188FacVtaCredito094,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2188FacVtaCredito094=this.val(n))},val:function(n){return gx.fn.getGridControlValue("FACVTACREDITO094",n||gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};t[24]={id:24,lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACREDITO095",gxz:"Z2189FacVtaCredito095",gxold:"O2189FacVtaCredito095",gxvar:"A2189FacVtaCredito095",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A2189FacVtaCredito095=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z2189FacVtaCredito095=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTACREDITO095",n||gx.fn.currentGridRowImpl(12),gx.O.A2189FacVtaCredito095,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2189FacVtaCredito095=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("FACVTACREDITO095",n||gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};t[25]={id:25,lvl:2,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTACREDITOCONTRATOID",gxz:"Z2190FacVtaCreditoContratoId",gxold:"O2190FacVtaCreditoContratoId",gxvar:"A2190FacVtaCreditoContratoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A2190FacVtaCreditoContratoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z2190FacVtaCreditoContratoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("FACVTACREDITOCONTRATOID",n||gx.fn.currentGridRowImpl(12),gx.O.A2190FacVtaCreditoContratoId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2190FacVtaCreditoContratoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("FACVTACREDITOCONTRATOID",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};t[29]={id:29,lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"FACVTAID",gxz:"Z218FacVtaId",gxold:"O218FacVtaId",gxvar:"A218FacVtaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A218FacVtaId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z218FacVtaId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("FACVTAID",gx.O.A218FacVtaId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A218FacVtaId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("FACVTAID",".")},nac:gx.falseFn};this.Z277FacVtaCreditoDetId=0;this.O277FacVtaCreditoDetId=0;this.Z266CreditoId=0;this.O266CreditoId=0;this.Z267CreditoCuota=0;this.O267CreditoCuota=0;this.Z2136CreditoCuotaNombre="";this.O2136CreditoCuotaNombre="";this.Z2182FacVtaCreditoImporteOri=0;this.O2182FacVtaCreditoImporteOri=0;this.Z2183FacVtaCreditoCosto=0;this.O2183FacVtaCreditoCosto=0;this.Z2185FacVtaCreditoCuotaCantidad=0;this.O2185FacVtaCreditoCuotaCantidad=0;this.Z2186FacVtaCreditoCuotaImporte=0;this.O2186FacVtaCreditoCuotaImporte=0;this.Z2184FacVtaCreditoImporte=0;this.O2184FacVtaCreditoImporte=0;this.Z2187FacVtaCreditoPorcentajeFin=0;this.O2187FacVtaCreditoPorcentajeFin=0;this.Z2188FacVtaCredito094="";this.O2188FacVtaCredito094="";this.Z2189FacVtaCredito095=gx.date.nullDate();this.O2189FacVtaCredito095=gx.date.nullDate();this.Z2190FacVtaCreditoContratoId=0;this.O2190FacVtaCreditoContratoId=0;this.A218FacVtaId=0;this.Z218FacVtaId=0;this.O218FacVtaId=0;this.A218FacVtaId=0;this.AV7FacVtaId=0;this.A1040PlanNombre="";this.A2137CreditoDescripcion="";this.A2140CreditoCuotaHasta=gx.date.nullDate();this.A2139CreditoCuotaDesde=gx.date.nullDate();this.A2138CreditoCuotaCosto=0;this.A119PlanId=0;this.A277FacVtaCreditoDetId=0;this.A266CreditoId=0;this.A267CreditoCuota=0;this.A2136CreditoCuotaNombre="";this.A2182FacVtaCreditoImporteOri=0;this.A2183FacVtaCreditoCosto=0;this.A2185FacVtaCreditoCuotaCantidad=0;this.A2186FacVtaCreditoCuotaImporte=0;this.A2184FacVtaCreditoImporte=0;this.A2187FacVtaCreditoPorcentajeFin=0;this.A2188FacVtaCredito094="";this.A2189FacVtaCredito095=gx.date.nullDate();this.A2190FacVtaCreditoContratoId=0;this.AV73Pgmname="";this.Events={e14kz2_client:["ENTER",!0],e15kz2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7FacVtaId",fld:"vFACVTAID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{ctrl:"GRID",prop:"Rows"},{av:"AV73Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[]];this.EvtParms.START=[[{av:"AV73Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV7FacVtaId",fld:"vFACVTAID",pic:"ZZZZZZZZ9"}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("FACVTAID","Visible")',ctrl:"FACVTAID",prop:"Visible"}]];this.EvtParms["GRID.LOAD"]=[[],[]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7FacVtaId",fld:"vFACVTAID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"AV73Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7FacVtaId",fld:"vFACVTAID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"AV73Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7FacVtaId",fld:"vFACVTAID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"AV73Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV7FacVtaId",fld:"vFACVTAID",pic:"ZZZZZZZZ9"},{av:"sPrefix"},{av:"AV73Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{ctrl:"GRID",prop:"Rows"}],[]];this.EvtParms.VALID_CREDITOID=[[],[]];this.EvtParms.VALID_CREDITOCUOTA=[[],[]];this.setVCMap("A2137CreditoDescripcion","CREDITODESCRIPCION",0,"char",30,0);this.setVCMap("A1040PlanNombre","PLANNOMBRE",0,"svchar",64,0);this.setVCMap("A2138CreditoCuotaCosto","CREDITOCUOTACOSTO",0,"decimal",6,2);this.setVCMap("A2139CreditoCuotaDesde","CREDITOCUOTADESDE",0,"date",8,0);this.setVCMap("A2140CreditoCuotaHasta","CREDITOCUOTAHASTA",0,"date",8,0);this.setVCMap("AV73Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7FacVtaId","vFACVTAID",0,"int",9,0);this.setVCMap("AV7FacVtaId","vFACVTAID",0,"int",9,0);this.setVCMap("AV73Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV7FacVtaId","vFACVTAID",0,"int",9,0);this.setVCMap("AV73Pgmname","vPGMNAME",0,"char",129,0);i.addRefreshingVar({rfrVar:"AV7FacVtaId"});i.addRefreshingVar({rfrVar:"AV73Pgmname"});i.addRefreshingParm({rfrVar:"AV7FacVtaId"});i.addRefreshingParm({rfrVar:"AV73Pgmname"});this.Initialize()})