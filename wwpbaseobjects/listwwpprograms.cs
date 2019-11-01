/*
               File: WWPBaseObjects.ListWWPPrograms
        Description: List Work With Plus Programs
             Author: GeneXus C# Generator version 16_0_6-136889
       Generated on: 11/1/2019 15:36:54.26
       Program type: Callable routine
          Main DBMS: SQL Server
*/
using System;
using System.Collections;
using GeneXus.Utils;
using GeneXus.Resources;
using GeneXus.Application;
using GeneXus.Metadata;
using GeneXus.Cryptography;
using com.genexus;
using GeneXus.Data.ADO;
using GeneXus.Data.NTier;
using GeneXus.Data.NTier.ADO;
using GeneXus.WebControls;
using GeneXus.Http;
using GeneXus.Procedure;
using GeneXus.XML;
using GeneXus.Search;
using GeneXus.Encryption;
using GeneXus.Http.Client;
using System.Threading;
using System.Xml.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.Runtime.Serialization;
namespace GeneXus.Programs.wwpbaseobjects {
   public class listwwpprograms : GXProcedure
   {
      public listwwpprograms( )
      {
         context = new GxContext(  );
         DataStoreUtil.LoadDataStores( context);
         IsMain = true;
         context.SetDefaultTheme("WorkWithPlusTheme");
      }

      public listwwpprograms( IGxContext context )
      {
         this.context = context;
         IsMain = false;
      }

      public void release( )
      {
      }

      public void execute( out GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName> aP0_ProgramNames )
      {
         this.AV10ProgramNames = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName>( context, "ProgramName", "SIGMA") ;
         initialize();
         executePrivate();
         aP0_ProgramNames=this.AV10ProgramNames;
      }

      public GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName> executeUdp( )
      {
         this.AV10ProgramNames = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName>( context, "ProgramName", "SIGMA") ;
         initialize();
         executePrivate();
         aP0_ProgramNames=this.AV10ProgramNames;
         return AV10ProgramNames ;
      }

      public void executeSubmit( out GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName> aP0_ProgramNames )
      {
         listwwpprograms objlistwwpprograms;
         objlistwwpprograms = new listwwpprograms();
         objlistwwpprograms.AV10ProgramNames = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName>( context, "ProgramName", "SIGMA") ;
         objlistwwpprograms.context.SetSubmitInitialConfig(context);
         objlistwwpprograms.initialize();
         ThreadPool.QueueUserWorkItem( PropagateCulture(new WaitCallback( executePrivateCatch )),objlistwwpprograms);
         aP0_ProgramNames=this.AV10ProgramNames;
      }

      void executePrivateCatch( object stateInfo )
      {
         try
         {
            ((listwwpprograms)stateInfo).executePrivate();
         }
         catch ( Exception e )
         {
            GXUtil.SaveToEventLog( "Design", e);
            throw e ;
         }
      }

      void executePrivate( )
      {
         /* GeneXus formulas */
         /* Output device settings */
         AV10ProgramNames = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName>( context, "ProgramName", "SIGMA");
         new GeneXus.Programs.wwpbaseobjects.loadwwpcontext(context ).execute( out  AV9WWPContext) ;
         AV14name = "WWEstadoCheque";
         AV15description = " Estado Cheque";
         AV16link = "wwestadocheque.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWCondicionIVA";
         AV15description = " Condicion IVA";
         AV16link = "wwcondicioniva.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWCBUChequeraNro";
         AV15description = " Chequera Serie";
         AV16link = "wwcbuchequeranro.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWConEstadoResultadoSucComp";
         AV15description = " Estado de Resultado por Sucursal Comparativo";
         AV16link = "wwconestadoresultadosuccomp.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWContratoCuota";
         AV15description = " Contrato Cuota";
         AV16link = "wwcontratocuota.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWPeriodo";
         AV15description = " Periodo";
         AV16link = "wwperiodo.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWCuenta";
         AV15description = " Cuenta";
         AV16link = "wwcuenta.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWArticuloListaCompras";
         AV15description = " Lista de Precios Costo";
         AV16link = "wwarticulolistacompras.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWChequeMovCaja";
         AV15description = " Trazabilidad de Cheque por Cajas";
         AV16link = "wwchequemovcaja.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWCaja";
         AV15description = "Arqueos";
         AV16link = "wwcaja.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraCajaTodas";
         AV15description = " Arqueos";
         AV16link = "wwextracajatodas.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWLocalidad";
         AV15description = " Localidad";
         AV16link = "wwlocalidad.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWMenues";
         AV15description = " Menues";
         AV16link = "wwmenues.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "GAMWWAuthTypes";
         AV15description = "Authentication Types";
         AV16link = "gamwwauthtypes.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWPuestoMenuObjetos";
         AV15description = " Puesto Menu Objetos";
         AV16link = "wwpuestomenuobjetos.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWPersonaTelefono";
         AV15description = " Persona Telefono";
         AV16link = "wwpersonatelefono.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWTipoMovBancario";
         AV15description = " Tipo Mov Bancario";
         AV16link = "wwtipomovbancario.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWOrdenPago";
         AV15description = " Orden Pago";
         AV16link = "wwordenpago.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraOrdenPagoAutorizar";
         AV15description = "Autorizar Orden Pago";
         AV16link = "wwextraordenpagoautorizar.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraOrdenPagoConfirmar";
         AV15description = " Confirmar Orden Pago";
         AV16link = "wwextraordenpagoconfirmar.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraOrdenPagoPreOrden";
         AV15description = " Confirmar PreOrden";
         AV16link = "wwextraordenpagopreorden.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWTarjeta";
         AV15description = " Tarjetas";
         AV16link = "wwtarjeta.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWTarjetaEmiPlanVig";
         AV15description = " Tarjeta Emisor Plan Vigencia";
         AV16link = "wwtarjetaemiplanvig.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWFinancieraPlanVig";
         AV15description = " Financiera Plan Vig";
         AV16link = "wwfinancieraplanvig.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWCajaArqueo";
         AV15description = " Caja Arqueo";
         AV16link = "wwcajaarqueo.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWPresupuestoVtaTarjeta";
         AV15description = " Presupuesto -Tarjeta";
         AV16link = "wwpresupuestovtatarjeta.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWComprobanteTipo";
         AV15description = " Comprobante Tipo";
         AV16link = "wwcomprobantetipo.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWArticuloLista";
         AV15description = " Lista de Precios";
         AV16link = "wwarticulolista.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWConEstadoPatrimonial";
         AV15description = "Estado Patrimonial Comparativo";
         AV16link = "wwconestadopatrimonial.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWConEstadoResultadoSuc";
         AV15description = " Estado de Resultado por Sucursal";
         AV16link = "wwconestadoresultadosuc.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWCBU";
         AV15description = " CBU";
         AV16link = "wwcbu.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWChofer";
         AV15description = " Chofer";
         AV16link = "wwchofer.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWCupon";
         AV15description = " Cupon";
         AV16link = "wwcupon.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWCreditoCuotaVig";
         AV15description = " Credito Vigencia";
         AV16link = "wwcreditocuotavig.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWSaldoAFavor";
         AV15description = " Saldo A Favor";
         AV16link = "wwsaldoafavor.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWFacturaVtaDetalleSuc";
         AV15description = "Entrega de Productos";
         AV16link = "wwfacturavtadetallesuc.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWFinanciera";
         AV15description = " Financieras";
         AV16link = "wwfinanciera.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWTransferenciaCheque";
         AV15description = " Transferencia Cheque";
         AV16link = "wwtransferenciacheque.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraTransferenciaChequeRecibir";
         AV15description = " Transferencia Cheque";
         AV16link = "wwextratransferenciachequerecibir.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWEmisorTarjeta";
         AV15description = " Emisor Tarjeta";
         AV16link = "wwemisortarjeta.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWTipoTelefono";
         AV15description = " Tipo Telefono";
         AV16link = "wwtipotelefono.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWProvincia";
         AV15description = " Provincia";
         AV16link = "wwprovincia.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWPersonaFisica";
         AV15description = " Persona Fisica";
         AV16link = "wwpersonafisica.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWRemitoCompra_General";
         AV15description = " Remito de Compra";
         AV16link = "wwremitocompra_general.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWPresupuestoVta";
         AV15description = "Mis Presupuestos";
         AV16link = "wwpresupuestovta.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraPresupuestoVtaFacturar";
         AV15description = "Facturar Presupuestos";
         AV16link = "wwextrapresupuestovtafacturar.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraPresupuestoVtaDescuento";
         AV15description = "Aprobación de Descuentos de Presupuestos";
         AV16link = "wwextrapresupuestovtadescuento.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraPresupuestoVtaRiesgo";
         AV15description = "Aprobación de Créditos de Presupuestos";
         AV16link = "wwextrapresupuestovtariesgo.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraPresupuestoVtaTodos";
         AV15description = "Listar Presupuestos";
         AV16link = "wwextrapresupuestovtatodos.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraPresupuestoVtaSuc";
         AV15description = "Presupuestos de Sucursal";
         AV16link = "wwextrapresupuestovtasuc.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWRemitoInterno";
         AV15description = " Envío - Remito Interno";
         AV16link = "wwremitointerno.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraRemitoInternoRecepcion";
         AV15description = "Recepción - Remito Interno";
         AV16link = "wwextraremitointernorecepcion.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWSubGrupo";
         AV15description = " SubGrupo";
         AV16link = "wwsubgrupo.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWAsiento";
         AV15description = " Asiento";
         AV16link = "wwasiento.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWFacturaCompraPago";
         AV15description = " Factura Compra Pago";
         AV16link = "wwfacturacomprapago.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWChequeEstado";
         AV15description = " Cheque Cambio Estado";
         AV16link = "wwchequeestado.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWArticuloPlanCredito";
         AV15description = " Articulo Plan Credito";
         AV16link = "wwarticuloplancredito.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWCaracteristica";
         AV15description = " Caracteristica";
         AV16link = "wwcaracteristica.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWEstFacturacionVendedor";
         AV15description = " Est Facturacion Vendedor";
         AV16link = "wwestfacturacionvendedor.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWCliente";
         AV15description = " Cliente";
         AV16link = "wwcliente.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "GAMWWSecurityPolicy";
         AV15description = "Security policies";
         AV16link = "gamwwsecuritypolicy.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWPlanCuenta";
         AV15description = " Plan Cuenta";
         AV16link = "wwplancuenta.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "GAMWWConnections";
         AV15description = "Connections";
         AV16link = "gamwwconnections.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWPuestoMenu";
         AV15description = " Puesto Menu";
         AV16link = "wwpuestomenu.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWCajaFisica";
         AV15description = " Caja Fisica";
         AV16link = "wwcajafisica.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWTipoDomicilio";
         AV15description = " Tipo Domicilio";
         AV16link = "wwtipodomicilio.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWTarjetaEmiPlanSucursal";
         AV15description = " Tarjeta Emi Plan Sucursal";
         AV16link = "wwtarjetaemiplansucursal.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWFacturaVta";
         AV15description = " Factura Vta";
         AV16link = "wwfacturavta.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWFinancieraPlan";
         AV15description = " Financiera Plan";
         AV16link = "wwfinancieraplan.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWNotaPedidoPago";
         AV15description = " Nota Pedido Pago";
         AV16link = "wwnotapedidopago.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWRubro";
         AV15description = " Rubro";
         AV16link = "wwrubro.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWOrdenPagoChequeP";
         AV15description = " Orden Pago Cheque Propio";
         AV16link = "wwordenpagochequep.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWOrdenPagoDeposito";
         AV15description = " Orden Pago Deposito";
         AV16link = "wwordenpagodeposito.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWBancoSucursalContacto";
         AV15description = " Banco Sucursal Contacto";
         AV16link = "wwbancosucursalcontacto.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWTerminal";
         AV15description = " Terminal";
         AV16link = "wwterminal.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWCredito";
         AV15description = " Credito";
         AV16link = "wwcredito.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWRecibo";
         AV15description = " Recibo";
         AV16link = "wwrecibo.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWPersonaJuridica";
         AV15description = " Persona Juridica";
         AV16link = "wwpersonajuridica.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWAutorizacion";
         AV15description = " Autorizacion";
         AV16link = "wwautorizacion.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraAutorizacionCredito";
         AV15description = " Autorizacion";
         AV16link = "wwextraautorizacioncredito.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraAutorizacionNotaCredito";
         AV15description = " Autorizacion";
         AV16link = "wwextraautorizacionnotacredito.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraAutorizacionEgresoCaja";
         AV15description = " Autorizacion";
         AV16link = "wwextraautorizacionegresocaja.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraAutorizacionRAjuste";
         AV15description = " Autorizacion";
         AV16link = "wwextraautorizacionrajuste.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWDeposito";
         AV15description = " Deposito";
         AV16link = "wwdeposito.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWPlan";
         AV15description = " Plan";
         AV16link = "wwplan.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWAsientoDetalle";
         AV15description = " Asiento Detalle";
         AV16link = "wwasientodetalle.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraAsientoDetalleMayor";
         AV15description = "Mayor de Cuentas";
         AV16link = "wwextraasientodetallemayor.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWProveedorIIBB";
         AV15description = " Proveedor IIBB";
         AV16link = "wwproveedoriibb.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "GAMWWApplications";
         AV15description = "Applications ";
         AV16link = "gamwwapplications.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWMoneda";
         AV15description = " Moneda";
         AV16link = "wwmoneda.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWArticuloStock";
         AV15description = " ArticuloStock";
         AV16link = "wwarticulostock.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWNotaCredito";
         AV15description = " Nota Credito";
         AV16link = "wwnotacredito.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraNotaCreditoAutorizar";
         AV15description = " Nota Credito";
         AV16link = "wwextranotacreditoautorizar.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraNotaCreditoCaja";
         AV15description = " Nota Credito";
         AV16link = "wwextranotacreditocaja.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWNaturalezaJuridica";
         AV15description = " Naturaleza Juridica";
         AV16link = "wwnaturalezajuridica.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWMarca";
         AV15description = " Marca";
         AV16link = "wwmarca.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWCajaComprobante";
         AV15description = " Caja Comprobante";
         AV16link = "wwcajacomprobante.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraCajaComprobanteEgreso";
         AV15description = "Iniciar Egreso de Caja";
         AV16link = "wwextracajacomprobanteegreso.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraCajaComprobanteAutorizar";
         AV15description = "Autorizar Egreso de Caja";
         AV16link = "wwextracajacomprobanteautorizar.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraCajaComprobanteConfirmar";
         AV15description = "Confirmar Egreso de Caja";
         AV16link = "wwextracajacomprobanteconfirmar.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraCajaComprobanteIngresoDev";
         AV15description = "Iniciar Ingreso x Dev.";
         AV16link = "wwextracajacomprobanteingresodev.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraCajaComprobanteIngresoDevConf";
         AV15description = "Confirmar Ingreso x Dev.";
         AV16link = "wwextracajacomprobanteingresodevconf.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWSucursal";
         AV15description = " Sucursal";
         AV16link = "wwsucursal.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWCheque";
         AV15description = " Cheques de Terceros";
         AV16link = "wwcheque.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWContratoCuotaCancelacion";
         AV15description = " Contrato Cuota Cancelacion";
         AV16link = "wwcontratocuotacancelacion.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWContrato";
         AV15description = " Contrato";
         AV16link = "wwcontrato.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWIIBBAlicuota";
         AV15description = " IIBB - Alicuotas";
         AV16link = "wwiibbalicuota.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWCentroCosto";
         AV15description = " Centro Costo";
         AV16link = "wwcentrocosto.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWTarjetaEmi";
         AV15description = " Tarjeta Emisor";
         AV16link = "wwtarjetaemi.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWMutualPlan";
         AV15description = " Mutual Plan";
         AV16link = "wwmutualplan.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWEjercicio";
         AV15description = " Ejercicio";
         AV16link = "wwejercicio.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWCajero";
         AV15description = " Cajero";
         AV16link = "wwcajero.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWMutual";
         AV15description = " Mutuales";
         AV16link = "wwmutual.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWObjetos";
         AV15description = " Objetos";
         AV16link = "wwobjetos.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWCBUChequera";
         AV15description = " Chequera";
         AV16link = "wwcbuchequera.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWProveedorActividad";
         AV15description = " Proveedor Actividad";
         AV16link = "wwproveedoractividad.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWPersonaLugarTrabajo";
         AV15description = " Persona Lugar Trabajo";
         AV16link = "wwpersonalugartrabajo.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWPersonaMail";
         AV15description = " Persona Mail";
         AV16link = "wwpersonamail.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWFacturaVentaGarante";
         AV15description = " Factura Venta Garante";
         AV16link = "wwfacturaventagarante.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWMutualPlanSucursal";
         AV15description = " Mutual Plan Sucursal";
         AV16link = "wwmutualplansucursal.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWPresupuestoVtaGarante";
         AV15description = " Presupuesto Vta Garante";
         AV16link = "wwpresupuestovtagarante.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWVehiculo";
         AV15description = " Vehiculo";
         AV16link = "wwvehiculo.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWArticuloPlanTarjeta";
         AV15description = " Articulo Plan Tarjeta";
         AV16link = "wwarticuloplantarjeta.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWLogAcceso";
         AV15description = " Log Acceso";
         AV16link = "wwlogacceso.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWFinancieraPlanSucursal";
         AV15description = " Financiera Plan Sucursal";
         AV16link = "wwfinancieraplansucursal.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWDepartamento";
         AV15description = " Departamento";
         AV16link = "wwdepartamento.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "GAMWWRepositories";
         AV15description = "Repositories ";
         AV16link = "gamwwrepositories.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWEntidad";
         AV15description = " Entidad";
         AV16link = "wwentidad.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWBoletaDeposito";
         AV15description = " Boleta Deposito";
         AV16link = "wwboletadeposito.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWGrupo";
         AV15description = " Grupo";
         AV16link = "wwgrupo.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWPersona";
         AV15description = " Persona";
         AV16link = "wwpersona.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWConSumaSaldo";
         AV15description = " Con Suma Saldo";
         AV16link = "wwconsumasaldo.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWCuentaMovimiento";
         AV15description = " Cuenta Movimiento";
         AV16link = "wwcuentamovimiento.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWRemitoInternoRecepcion";
         AV15description = " Remito Interno";
         AV16link = "wwremitointernorecepcion.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWTarjetaEmiPlan";
         AV15description = " Tarjeta Emisor Plan";
         AV16link = "wwtarjetaemiplan.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWPuntoVenta";
         AV15description = " Punto Venta";
         AV16link = "wwpuntoventa.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWImpuesto";
         AV15description = " Impuesto";
         AV16link = "wwimpuesto.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWUsuario";
         AV15description = " Usuario";
         AV16link = "wwusuario.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWCreditoCuota";
         AV15description = " Credito Cuota";
         AV16link = "wwcreditocuota.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "GAMWWEventSubscriptions";
         AV15description = "Event Susbcrtiptions";
         AV16link = "gamwweventsubscriptions.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWMutualPlanVig";
         AV15description = " Mutual Plan Vig";
         AV16link = "wwmutualplanvig.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWPersonaRol";
         AV15description = " Persona Rol";
         AV16link = "wwpersonarol.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWLibroBanco";
         AV15description = " Libro Banco";
         AV16link = "wwlibrobanco.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWBancoSucursal";
         AV15description = " Banco Sucursal";
         AV16link = "wwbancosucursal.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWArticuloCaracteristicaSerie";
         AV15description = " Articulo Caracteristica Serie";
         AV16link = "wwarticulocaracteristicaserie.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWActividad";
         AV15description = " Actividad";
         AV16link = "wwactividad.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWArticuloUnidadMedida";
         AV15description = " Articulo Unidad Medida";
         AV16link = "wwarticulounidadmedida.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "GAMWWRoles";
         AV15description = "Roles ";
         AV16link = "gamwwroles.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWEmpleado";
         AV15description = " Empleado";
         AV16link = "wwempleado.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWFacturaCompra";
         AV15description = "Facturas Acreedores";
         AV16link = "wwfacturacompra.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraFacturaCompraAutorizar";
         AV15description = " Autorizar Facturas";
         AV16link = "wwextrafacturacompraautorizar.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraFacturaCompraProveedor";
         AV15description = " Facturas Proveedores";
         AV16link = "wwextrafacturacompraproveedor.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWPuesto";
         AV15description = " Puesto";
         AV16link = "wwpuesto.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWTipoDeposito";
         AV15description = " Tipo Deposito";
         AV16link = "wwtipodeposito.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWBanco";
         AV15description = " Banco";
         AV16link = "wwbanco.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWRemitoVenta";
         AV15description = " Remito de Venta";
         AV16link = "wwremitoventa.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWVendedor";
         AV15description = " Vendedor";
         AV16link = "wwvendedor.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWInfoAuto";
         AV15description = " Info Auto";
         AV16link = "wwinfoauto.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "GAMWWUsers";
         AV15description = "Users ";
         AV16link = "gamwwusers.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWProveedorViajante";
         AV15description = " Proveedor Viajante";
         AV16link = "wwproveedorviajante.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWFondo";
         AV15description = " Fondo";
         AV16link = "wwfondo.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWCreditoCuotaSucursal";
         AV15description = " Credito Cuota Sucursal";
         AV16link = "wwcreditocuotasucursal.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWGFK";
         AV15description = " GFK";
         AV16link = "wwgfk.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWNotaPedido";
         AV15description = " Nota Pedido";
         AV16link = "wwnotapedido.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWConEstadoPatrimonialMensual";
         AV15description = " Estado Patrimonial Mensual";
         AV16link = "wwconestadopatrimonialmensual.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWUnidadMedida";
         AV15description = " Unidad Medida";
         AV16link = "wwunidadmedida.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWUsuarioPuestoSucursal";
         AV15description = " Usuario Puesto Sucursal";
         AV16link = "wwusuariopuestosucursal.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWReciboTarjeta";
         AV15description = " Recibo Tarjeta";
         AV16link = "wwrecibotarjeta.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWRol";
         AV15description = " Rol";
         AV16link = "wwrol.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWTransferenciaEfectivo";
         AV15description = "Enviar Transferencia Efectivo";
         AV16link = "wwtransferenciaefectivo.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraTransferenciaEfectivoRecibir";
         AV15description = "Recibir Transferencia Efectivo";
         AV16link = "wwextratransferenciaefectivorecibir.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWArticuloCaracteristica";
         AV15description = " Articulo Caracteristica";
         AV16link = "wwarticulocaracteristica.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWVentaTotal";
         AV15description = " Venta Total";
         AV16link = "wwventatotal.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "Presupuesto_Paso01";
         AV15description = "Paso 1 - Búsqueda de Cliente";
         AV16link = "presupuesto_paso01.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWOrdenPagoTransferencia";
         AV15description = " Orden Pago Transferencia";
         AV16link = "wwordenpagotransferencia.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWPersonaDomicilio";
         AV15description = " Persona Domicilio";
         AV16link = "wwpersonadomicilio.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWProveedor";
         AV15description = "Listar Proveedores";
         AV16link = "wwproveedor.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraProveedorAcreedor";
         AV15description = "Listar Acreedores";
         AV16link = "wwextraproveedoracreedor.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWRemitoAjuste";
         AV15description = " Remito Ajuste";
         AV16link = "wwremitoajuste.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWExtraRemitoAjusteAutorizar";
         AV15description = " Remito Ajuste";
         AV16link = "wwextraremitoajusteautorizar.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWArticulo";
         AV15description = " Articulo";
         AV16link = "wwarticulo.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV14name = "WWPais";
         AV15description = " Pais";
         AV16link = "wwpais.aspx";
         /* Execute user subroutine: 'ADDPROGRAM' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         this.cleanup();
      }

      protected void S111( )
      {
         /* 'ADDPROGRAM' Routine */
         AV8IsAuthorized = true;
         if ( AV8IsAuthorized )
         {
            AV11ProgramName = new GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName(context);
            AV11ProgramName.gxTpr_Name = AV14name;
            AV11ProgramName.gxTpr_Description = AV15description;
            AV11ProgramName.gxTpr_Link = AV16link;
            AV10ProgramNames.Add(AV11ProgramName, 0);
         }
      }

      public override void cleanup( )
      {
         CloseOpenCursors();
         if ( IsMain )
         {
            context.CloseConnections() ;
         }
         exitApplication();
      }

      protected void CloseOpenCursors( )
      {
      }

      public override void initialize( )
      {
         AV9WWPContext = new GeneXus.Programs.wwpbaseobjects.SdtWWPContext(context);
         AV14name = "";
         AV15description = "";
         AV16link = "";
         AV11ProgramName = new GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName(context);
         /* GeneXus formulas. */
         context.Gx_err = 0;
      }

      private bool returnInSub ;
      private bool AV8IsAuthorized ;
      private String AV14name ;
      private String AV15description ;
      private String AV16link ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName> aP0_ProgramNames ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName> AV10ProgramNames ;
      private GeneXus.Programs.wwpbaseobjects.SdtWWPContext AV9WWPContext ;
      private GeneXus.Programs.wwpbaseobjects.SdtProgramNames_ProgramName AV11ProgramName ;
   }

}
