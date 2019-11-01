/*
               File: WWPBaseObjects.Home
        Description: Inicio
             Author: GeneXus C# Generator version 16_0_5-135614
       Generated on: 10/30/2019 19:14:8.14
       Program type: Main program
          Main DBMS: SQL Server
*/
using System;
using System.Collections;
using GeneXus.Utils;
using GeneXus.Resources;
using GeneXus.Application;
using GeneXus.Metadata;
using GeneXus.Cryptography;
using System.Data;
using GeneXus.Data;
using com.genexus;
using GeneXus.Data.ADO;
using GeneXus.Data.NTier;
using GeneXus.Data.NTier.ADO;
using GeneXus.WebControls;
using GeneXus.Http;
using GeneXus.XML;
using GeneXus.Search;
using GeneXus.Encryption;
using GeneXus.Http.Client;
using System.Xml.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.Runtime.Serialization;
namespace GeneXus.Programs.wwpbaseobjects {
   public class home : GXDataArea, System.Web.SessionState.IRequiresSessionState
   {
      public home( )
      {
         context = new GxContext(  );
         DataStoreUtil.LoadDataStores( context);
         dsDefault = context.GetDataStore("Default");
         IsMain = true;
         context.SetDefaultTheme("WorkWithPlusTheme");
      }

      public home( IGxContext context )
      {
         this.context = context;
         IsMain = false;
         dsDefault = context.GetDataStore("Default");
      }

      public void release( )
      {
      }

      public void execute( )
      {
         executePrivate();
      }

      void executePrivate( )
      {
         isStatic = false;
         webExecute();
      }

      protected override void createObjects( )
      {
         cmbavHomesampledata__productstatus = new GXCombobox();
      }

      protected void INITWEB( )
      {
         initialize_properties( ) ;
         if ( nGotPars == 0 )
         {
            entryPointCalled = false;
            gxfirstwebparm = GetNextPar( );
            gxfirstwebparm_bkp = gxfirstwebparm;
            gxfirstwebparm = DecryptAjaxCall( gxfirstwebparm);
            if ( context.isSpaRequest( ) )
            {
               disableJsOutput();
            }
            if ( StringUtil.StrCmp(gxfirstwebparm, "dyncall") == 0 )
            {
               setAjaxCallMode();
               if ( ! IsValidAjaxCall( true) )
               {
                  GxWebError = 1;
                  return  ;
               }
               dyncall( GetNextPar( )) ;
               return  ;
            }
            else if ( StringUtil.StrCmp(gxfirstwebparm, "gxajaxEvt") == 0 )
            {
               setAjaxEventMode();
               if ( ! IsValidAjaxCall( true) )
               {
                  GxWebError = 1;
                  return  ;
               }
               gxfirstwebparm = GetNextPar( );
            }
            else if ( StringUtil.StrCmp(gxfirstwebparm, "gxfullajaxEvt") == 0 )
            {
               if ( ! IsValidAjaxCall( true) )
               {
                  GxWebError = 1;
                  return  ;
               }
               gxfirstwebparm = GetNextPar( );
            }
            else if ( StringUtil.StrCmp(gxfirstwebparm, "gxajaxNewRow_"+"Grid") == 0 )
            {
               nRC_GXsfl_98 = (int)(NumberUtil.Val( GetNextPar( ), "."));
               nGXsfl_98_idx = (int)(NumberUtil.Val( GetNextPar( ), "."));
               sGXsfl_98_idx = GetNextPar( );
               setAjaxCallMode();
               if ( ! IsValidAjaxCall( true) )
               {
                  GxWebError = 1;
                  return  ;
               }
               gxnrGrid_newrow( ) ;
               return  ;
            }
            else if ( StringUtil.StrCmp(gxfirstwebparm, "gxajaxGridRefresh_"+"Grid") == 0 )
            {
               subGrid_Rows = (int)(NumberUtil.Val( GetNextPar( ), "."));
               ajax_req_read_hidden_sdt(GetNextPar( ), AV5HomeSampleData);
               setAjaxCallMode();
               if ( ! IsValidAjaxCall( true) )
               {
                  GxWebError = 1;
                  return  ;
               }
               gxgrGrid_refresh( subGrid_Rows, AV5HomeSampleData) ;
               GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
               GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
               context.GX_webresponse.AddString((String)(context.getJSONResponse( )));
               return  ;
            }
            else
            {
               if ( ! IsValidAjaxCall( false) )
               {
                  GxWebError = 1;
                  return  ;
               }
               gxfirstwebparm = gxfirstwebparm_bkp;
            }
            if ( context.isSpaRequest( ) )
            {
               enableJsOutput();
            }
         }
         if ( ! context.IsLocalStorageSupported( ) )
         {
            context.PushCurrentUrl();
         }
      }

      public override void webExecute( )
      {
         if ( initialized == 0 )
         {
            createObjects();
            initialize();
         }
         INITWEB( ) ;
         if ( ! isAjaxCallMode( ) )
         {
            MasterPageObj = (GXMasterPage) ClassLoader.GetInstance("wwpbaseobjects.workwithplusmasterpage", "GeneXus.Programs.wwpbaseobjects.workwithplusmasterpage", new Object[] {new GxContext( context.handle, context.DataStores, context.HttpContext)});
            MasterPageObj.setDataArea(this,false);
            ValidateSpaRequest();
            MasterPageObj.webExecute();
            if ( ( GxWebError == 0 ) && context.isAjaxRequest( ) )
            {
               enableOutput();
               if ( ! context.isAjaxRequest( ) )
               {
                  context.GX_webresponse.AppendHeader("Cache-Control", "no-store");
               }
               if ( ! context.WillRedirect( ) )
               {
                  context.GX_webresponse.AddString((String)(context.getJSONResponse( )));
               }
               else
               {
                  if ( context.isAjaxRequest( ) )
                  {
                     disableOutput();
                  }
                  RenderHtmlHeaders( ) ;
                  context.Redirect( context.wjLoc );
                  context.DispatchAjaxCommands();
               }
            }
         }
         this.cleanup();
      }

      public override short ExecuteStartEvent( )
      {
         PA0C2( ) ;
         gxajaxcallmode = (short)((isAjaxCallMode( ) ? 1 : 0));
         if ( ( gxajaxcallmode == 0 ) && ( GxWebError == 0 ) )
         {
            START0C2( ) ;
         }
         return gxajaxcallmode ;
      }

      public override void RenderHtmlHeaders( )
      {
         GxWebStd.gx_html_headers( context, 0, "", "", Form.Meta, Form.Metaequiv, true);
      }

      public override void RenderHtmlOpenForm( )
      {
         if ( context.isSpaRequest( ) )
         {
            enableOutput();
         }
         context.WriteHtmlText( "<title>") ;
         context.SendWebValue( Form.Caption) ;
         context.WriteHtmlTextNl( "</title>") ;
         if ( context.isSpaRequest( ) )
         {
            disableOutput();
         }
         if ( StringUtil.Len( sDynURL) > 0 )
         {
            context.WriteHtmlText( "<BASE href=\""+sDynURL+"\" />") ;
         }
         define_styles( ) ;
         if ( nGXWrapped != 1 )
         {
            MasterPageObj.master_styles();
         }
         if ( ( ( context.GetBrowserType( ) == 1 ) || ( context.GetBrowserType( ) == 5 ) ) && ( StringUtil.StrCmp(context.GetBrowserVersion( ), "7.0") == 0 ) )
         {
            context.AddJavascriptSource("json2.js", "?"+context.GetBuildNumber( 135614), false, true);
         }
         context.AddJavascriptSource("jquery.js", "?"+context.GetBuildNumber( 135614), false, true);
         context.AddJavascriptSource("gxgral.js", "?"+context.GetBuildNumber( 135614), false, true);
         context.AddJavascriptSource("gxcfg.js", "?201910301914848", false, true);
         if ( context.isSpaRequest( ) )
         {
            enableOutput();
         }
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Panel/BootstrapPanelRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/DVProgressIndicator/DVProgressIndicatorRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Panel/BootstrapPanelRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/DVProgressIndicator/DVProgressIndicatorRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Panel/BootstrapPanelRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/DVProgressIndicator/DVProgressIndicatorRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Panel/BootstrapPanelRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/DVProgressIndicator/DVProgressIndicatorRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Panel/BootstrapPanelRender.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/QueryViewerCommon.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/highcharts/highcharts.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/highcharts/highcharts-3d.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/highcharts/highcharts-more.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/highcharts/modules/funnel.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/highcharts/modules/solid-gauge.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/oatPivot/gxpivotjs.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/QueryViewerRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Panel/BootstrapPanelRender.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/QueryViewerCommon.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/highcharts/highcharts.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/highcharts/highcharts-3d.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/highcharts/highcharts-more.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/highcharts/modules/funnel.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/highcharts/modules/solid-gauge.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/oatPivot/gxpivotjs.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/QueryViewerRender.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
         context.AddJavascriptSource("DVelop/Bootstrap/Panel/BootstrapPanelRender.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/QueryViewerCommon.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/highcharts/highcharts.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/highcharts/highcharts-3d.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/highcharts/highcharts-more.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/highcharts/modules/funnel.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/highcharts/modules/solid-gauge.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/oatPivot/gxpivotjs.js", "", false, true);
         context.AddJavascriptSource("QueryViewer/QueryViewerRender.js", "", false, true);
         context.WriteHtmlText( Form.Headerrawhtml) ;
         context.CloseHtmlHeader();
         if ( context.isSpaRequest( ) )
         {
            disableOutput();
         }
         FormProcess = ((nGXWrapped==0) ? " data-HasEnter=\"false\" data-Skiponenter=\"false\"" : "");
         context.WriteHtmlText( "<body ") ;
         bodyStyle = "" + "background-color:" + context.BuildHTMLColor( Form.Backcolor) + ";color:" + context.BuildHTMLColor( Form.Textcolor) + ";";
         if ( nGXWrapped == 0 )
         {
            bodyStyle = bodyStyle + "-moz-opacity:0;opacity:0;";
         }
         if ( ! ( String.IsNullOrEmpty(StringUtil.RTrim( Form.Background)) ) )
         {
            bodyStyle = bodyStyle + " background-image:url(" + context.convertURL( Form.Background) + ")";
         }
         context.WriteHtmlText( " "+"class=\"form-horizontal Form\""+" "+ "style='"+bodyStyle+"'") ;
         context.WriteHtmlText( FormProcess+">") ;
         context.skipLines(1);
         if ( nGXWrapped != 1 )
         {
            context.WriteHtmlTextNl( "<form id=\"MAINFORM\" autocomplete=\"off\" name=\"MAINFORM\" method=\"post\" tabindex=-1  class=\"form-horizontal Form\" data-gx-class=\"form-horizontal Form\" novalidate action=\""+formatLink("wwpbaseobjects.home.aspx") +"\">") ;
            GxWebStd.gx_hidden_field( context, "_EventName", "");
            GxWebStd.gx_hidden_field( context, "_EventGridId", "");
            GxWebStd.gx_hidden_field( context, "_EventRowId", "");
            context.WriteHtmlText( "<input type=\"submit\" title=\"submit\" style=\"display:none\" disabled>") ;
            context.httpAjaxContext.ajax_rsp_assign_prop("", false, "FORM", "Class", "form-horizontal Form", true);
         }
         toggleJsOutput = isJsOutputEnabled( );
         if ( context.isSpaRequest( ) )
         {
            disableJsOutput();
         }
      }

      protected void send_integrity_footer_hashes( )
      {
         GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
      }

      protected void SendCloseFormHiddens( )
      {
         /* Send hidden variables. */
         /* Send saved values. */
         send_integrity_footer_hashes( ) ;
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "Homesampledata", AV5HomeSampleData);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("Homesampledata", AV5HomeSampleData);
         }
         GxWebStd.gx_hidden_field( context, "nRC_GXsfl_98", StringUtil.LTrim( StringUtil.NToC( (decimal)(nRC_GXsfl_98), 8, 0, ",", "")));
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "vAXES", AV10Axes);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("vAXES", AV10Axes);
         }
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "vPARAMETERS", AV11Parameters);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("vPARAMETERS", AV11Parameters);
         }
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "vITEMCLICKDATA", AV12ItemClickData);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("vITEMCLICKDATA", AV12ItemClickData);
         }
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "vITEMDOUBLECLICKDATA", AV13ItemDoubleClickData);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("vITEMDOUBLECLICKDATA", AV13ItemDoubleClickData);
         }
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "vDRAGANDDROPDATA", AV14DragAndDropData);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("vDRAGANDDROPDATA", AV14DragAndDropData);
         }
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "vFILTERCHANGEDDATA", AV15FilterChangedData);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("vFILTERCHANGEDDATA", AV15FilterChangedData);
         }
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "vITEMEXPANDDATA", AV16ItemExpandData);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("vITEMEXPANDDATA", AV16ItemExpandData);
         }
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "vITEMCOLLAPSEDATA", AV17ItemCollapseData);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("vITEMCOLLAPSEDATA", AV17ItemCollapseData);
         }
         if ( context.isAjaxRequest( ) )
         {
            context.httpAjaxContext.ajax_rsp_assign_sdt_attri("", false, "vHOMESAMPLEDATA", AV5HomeSampleData);
         }
         else
         {
            context.httpAjaxContext.ajax_rsp_assign_hidden_sdt("vHOMESAMPLEDATA", AV5HomeSampleData);
         }
         GxWebStd.gx_hidden_field( context, "GRID_nFirstRecordOnPage", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nFirstRecordOnPage), 15, 0, ",", "")));
         GxWebStd.gx_hidden_field( context, "GRID_nEOF", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nEOF), 1, 0, ",", "")));
         GxWebStd.gx_hidden_field( context, "GRID_Rows", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Rows), 6, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "UCPROGRESS1_Caption", StringUtil.RTrim( Ucprogress1_Caption));
         GxWebStd.gx_hidden_field( context, "UCPROGRESS1_Cls", StringUtil.RTrim( Ucprogress1_Cls));
         GxWebStd.gx_hidden_field( context, "UCPROGRESS1_Percentage", StringUtil.LTrim( StringUtil.NToC( (decimal)(Ucprogress1_Percentage), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "UCPROGRESS1_Circlewidth", StringUtil.LTrim( StringUtil.NToC( (decimal)(Ucprogress1_Circlewidth), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "UCPROGRESS1_Circleprogresswidth", StringUtil.LTrim( StringUtil.NToC( (decimal)(Ucprogress1_Circleprogresswidth), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD1_Width", StringUtil.RTrim( Dvpanel_card1_Width));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD1_Autowidth", StringUtil.BoolToStr( Dvpanel_card1_Autowidth));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD1_Autoheight", StringUtil.BoolToStr( Dvpanel_card1_Autoheight));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD1_Cls", StringUtil.RTrim( Dvpanel_card1_Cls));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD1_Title", StringUtil.RTrim( Dvpanel_card1_Title));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD1_Collapsible", StringUtil.BoolToStr( Dvpanel_card1_Collapsible));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD1_Collapsed", StringUtil.BoolToStr( Dvpanel_card1_Collapsed));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD1_Showcollapseicon", StringUtil.BoolToStr( Dvpanel_card1_Showcollapseicon));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD1_Iconposition", StringUtil.RTrim( Dvpanel_card1_Iconposition));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD1_Autoscroll", StringUtil.BoolToStr( Dvpanel_card1_Autoscroll));
         GxWebStd.gx_hidden_field( context, "UCPROGRESS2_Caption", StringUtil.RTrim( Ucprogress2_Caption));
         GxWebStd.gx_hidden_field( context, "UCPROGRESS2_Cls", StringUtil.RTrim( Ucprogress2_Cls));
         GxWebStd.gx_hidden_field( context, "UCPROGRESS2_Percentage", StringUtil.LTrim( StringUtil.NToC( (decimal)(Ucprogress2_Percentage), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "UCPROGRESS2_Circlewidth", StringUtil.LTrim( StringUtil.NToC( (decimal)(Ucprogress2_Circlewidth), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "UCPROGRESS2_Circleprogresswidth", StringUtil.LTrim( StringUtil.NToC( (decimal)(Ucprogress2_Circleprogresswidth), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD2_Width", StringUtil.RTrim( Dvpanel_card2_Width));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD2_Autowidth", StringUtil.BoolToStr( Dvpanel_card2_Autowidth));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD2_Autoheight", StringUtil.BoolToStr( Dvpanel_card2_Autoheight));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD2_Cls", StringUtil.RTrim( Dvpanel_card2_Cls));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD2_Title", StringUtil.RTrim( Dvpanel_card2_Title));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD2_Collapsible", StringUtil.BoolToStr( Dvpanel_card2_Collapsible));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD2_Collapsed", StringUtil.BoolToStr( Dvpanel_card2_Collapsed));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD2_Showcollapseicon", StringUtil.BoolToStr( Dvpanel_card2_Showcollapseicon));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD2_Iconposition", StringUtil.RTrim( Dvpanel_card2_Iconposition));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD2_Autoscroll", StringUtil.BoolToStr( Dvpanel_card2_Autoscroll));
         GxWebStd.gx_hidden_field( context, "UCPROGRESS3_Caption", StringUtil.RTrim( Ucprogress3_Caption));
         GxWebStd.gx_hidden_field( context, "UCPROGRESS3_Cls", StringUtil.RTrim( Ucprogress3_Cls));
         GxWebStd.gx_hidden_field( context, "UCPROGRESS3_Percentage", StringUtil.LTrim( StringUtil.NToC( (decimal)(Ucprogress3_Percentage), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "UCPROGRESS3_Circlewidth", StringUtil.LTrim( StringUtil.NToC( (decimal)(Ucprogress3_Circlewidth), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "UCPROGRESS3_Circleprogresswidth", StringUtil.LTrim( StringUtil.NToC( (decimal)(Ucprogress3_Circleprogresswidth), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD3_Width", StringUtil.RTrim( Dvpanel_card3_Width));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD3_Autowidth", StringUtil.BoolToStr( Dvpanel_card3_Autowidth));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD3_Autoheight", StringUtil.BoolToStr( Dvpanel_card3_Autoheight));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD3_Cls", StringUtil.RTrim( Dvpanel_card3_Cls));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD3_Title", StringUtil.RTrim( Dvpanel_card3_Title));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD3_Collapsible", StringUtil.BoolToStr( Dvpanel_card3_Collapsible));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD3_Collapsed", StringUtil.BoolToStr( Dvpanel_card3_Collapsed));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD3_Showcollapseicon", StringUtil.BoolToStr( Dvpanel_card3_Showcollapseicon));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD3_Iconposition", StringUtil.RTrim( Dvpanel_card3_Iconposition));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD3_Autoscroll", StringUtil.BoolToStr( Dvpanel_card3_Autoscroll));
         GxWebStd.gx_hidden_field( context, "UCPROGRESS4_Caption", StringUtil.RTrim( Ucprogress4_Caption));
         GxWebStd.gx_hidden_field( context, "UCPROGRESS4_Cls", StringUtil.RTrim( Ucprogress4_Cls));
         GxWebStd.gx_hidden_field( context, "UCPROGRESS4_Percentage", StringUtil.LTrim( StringUtil.NToC( (decimal)(Ucprogress4_Percentage), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "UCPROGRESS4_Circlewidth", StringUtil.LTrim( StringUtil.NToC( (decimal)(Ucprogress4_Circlewidth), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "UCPROGRESS4_Circleprogresswidth", StringUtil.LTrim( StringUtil.NToC( (decimal)(Ucprogress4_Circleprogresswidth), 9, 0, ".", "")));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD4_Width", StringUtil.RTrim( Dvpanel_card4_Width));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD4_Autowidth", StringUtil.BoolToStr( Dvpanel_card4_Autowidth));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD4_Autoheight", StringUtil.BoolToStr( Dvpanel_card4_Autoheight));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD4_Cls", StringUtil.RTrim( Dvpanel_card4_Cls));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD4_Title", StringUtil.RTrim( Dvpanel_card4_Title));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD4_Collapsible", StringUtil.BoolToStr( Dvpanel_card4_Collapsible));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD4_Collapsed", StringUtil.BoolToStr( Dvpanel_card4_Collapsed));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD4_Showcollapseicon", StringUtil.BoolToStr( Dvpanel_card4_Showcollapseicon));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD4_Iconposition", StringUtil.RTrim( Dvpanel_card4_Iconposition));
         GxWebStd.gx_hidden_field( context, "DVPANEL_CARD4_Autoscroll", StringUtil.BoolToStr( Dvpanel_card4_Autoscroll));
         GxWebStd.gx_hidden_field( context, "UTCHARTDOUGHNUT_Width", StringUtil.RTrim( Utchartdoughnut_Width));
         GxWebStd.gx_hidden_field( context, "UTCHARTDOUGHNUT_Height", StringUtil.RTrim( Utchartdoughnut_Height));
         GxWebStd.gx_hidden_field( context, "UTCHARTDOUGHNUT_Type", StringUtil.RTrim( Utchartdoughnut_Type));
         GxWebStd.gx_hidden_field( context, "UTCHARTDOUGHNUT_Charttype", StringUtil.RTrim( Utchartdoughnut_Charttype));
         GxWebStd.gx_hidden_field( context, "UTCHARTDOUGHNUT_Showvalues", StringUtil.BoolToStr( Utchartdoughnut_Showvalues));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART3_Width", StringUtil.RTrim( Dvpanel_tablechart3_Width));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART3_Autowidth", StringUtil.BoolToStr( Dvpanel_tablechart3_Autowidth));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART3_Autoheight", StringUtil.BoolToStr( Dvpanel_tablechart3_Autoheight));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART3_Cls", StringUtil.RTrim( Dvpanel_tablechart3_Cls));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART3_Title", StringUtil.RTrim( Dvpanel_tablechart3_Title));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART3_Collapsible", StringUtil.BoolToStr( Dvpanel_tablechart3_Collapsible));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART3_Collapsed", StringUtil.BoolToStr( Dvpanel_tablechart3_Collapsed));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART3_Showcollapseicon", StringUtil.BoolToStr( Dvpanel_tablechart3_Showcollapseicon));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART3_Iconposition", StringUtil.RTrim( Dvpanel_tablechart3_Iconposition));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART3_Autoscroll", StringUtil.BoolToStr( Dvpanel_tablechart3_Autoscroll));
         GxWebStd.gx_hidden_field( context, "UTCHARTSMOOTHLINE_Height", StringUtil.RTrim( Utchartsmoothline_Height));
         GxWebStd.gx_hidden_field( context, "UTCHARTSMOOTHLINE_Type", StringUtil.RTrim( Utchartsmoothline_Type));
         GxWebStd.gx_hidden_field( context, "UTCHARTSMOOTHLINE_Charttype", StringUtil.RTrim( Utchartsmoothline_Charttype));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART4_Width", StringUtil.RTrim( Dvpanel_tablechart4_Width));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART4_Autowidth", StringUtil.BoolToStr( Dvpanel_tablechart4_Autowidth));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART4_Autoheight", StringUtil.BoolToStr( Dvpanel_tablechart4_Autoheight));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART4_Cls", StringUtil.RTrim( Dvpanel_tablechart4_Cls));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART4_Title", StringUtil.RTrim( Dvpanel_tablechart4_Title));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART4_Collapsible", StringUtil.BoolToStr( Dvpanel_tablechart4_Collapsible));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART4_Collapsed", StringUtil.BoolToStr( Dvpanel_tablechart4_Collapsed));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART4_Showcollapseicon", StringUtil.BoolToStr( Dvpanel_tablechart4_Showcollapseicon));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART4_Iconposition", StringUtil.RTrim( Dvpanel_tablechart4_Iconposition));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART4_Autoscroll", StringUtil.BoolToStr( Dvpanel_tablechart4_Autoscroll));
         GxWebStd.gx_hidden_field( context, "UTCHARTSMOOTHAREA_Type", StringUtil.RTrim( Utchartsmootharea_Type));
         GxWebStd.gx_hidden_field( context, "UTCHARTSMOOTHAREA_Charttype", StringUtil.RTrim( Utchartsmootharea_Charttype));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART1_Width", StringUtil.RTrim( Dvpanel_tablechart1_Width));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART1_Autowidth", StringUtil.BoolToStr( Dvpanel_tablechart1_Autowidth));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART1_Autoheight", StringUtil.BoolToStr( Dvpanel_tablechart1_Autoheight));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART1_Cls", StringUtil.RTrim( Dvpanel_tablechart1_Cls));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART1_Title", StringUtil.RTrim( Dvpanel_tablechart1_Title));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART1_Collapsible", StringUtil.BoolToStr( Dvpanel_tablechart1_Collapsible));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART1_Collapsed", StringUtil.BoolToStr( Dvpanel_tablechart1_Collapsed));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART1_Showcollapseicon", StringUtil.BoolToStr( Dvpanel_tablechart1_Showcollapseicon));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART1_Iconposition", StringUtil.RTrim( Dvpanel_tablechart1_Iconposition));
         GxWebStd.gx_hidden_field( context, "DVPANEL_TABLECHART1_Autoscroll", StringUtil.BoolToStr( Dvpanel_tablechart1_Autoscroll));
      }

      public override void RenderHtmlCloseForm( )
      {
         SendCloseFormHiddens( ) ;
         GxWebStd.gx_hidden_field( context, "GX_FocusControl", GX_FocusControl);
         SendAjaxEncryptionKey();
         SendSecurityToken((String)(sPrefix));
         SendComponentObjects();
         SendServerCommands();
         SendState();
         if ( context.isSpaRequest( ) )
         {
            disableOutput();
         }
         if ( nGXWrapped != 1 )
         {
            context.WriteHtmlTextNl( "</form>") ;
         }
         if ( context.isSpaRequest( ) )
         {
            enableOutput();
         }
         include_jscripts( ) ;
      }

      public override void RenderHtmlContent( )
      {
         gxajaxcallmode = (short)((isAjaxCallMode( ) ? 1 : 0));
         if ( ( gxajaxcallmode == 0 ) && ( GxWebError == 0 ) )
         {
            context.WriteHtmlText( "<div") ;
            GxWebStd.ClassAttribute( context, "gx-ct-body"+" "+(String.IsNullOrEmpty(StringUtil.RTrim( Form.Class)) ? "form-horizontal Form" : Form.Class)+"-fx");
            context.WriteHtmlText( ">") ;
            WE0C2( ) ;
            context.WriteHtmlText( "</div>") ;
         }
      }

      public override void DispatchEvents( )
      {
         EVT0C2( ) ;
      }

      public override bool HasEnterEvent( )
      {
         return false ;
      }

      public override GXWebForm GetForm( )
      {
         return Form ;
      }

      public override String GetSelfLink( )
      {
         return formatLink("wwpbaseobjects.home.aspx")  ;
      }

      public override String GetPgmname( )
      {
         return "WWPBaseObjects.Home" ;
      }

      public override String GetPgmdesc( )
      {
         return "Inicio" ;
      }

      protected void WB0C0( )
      {
         if ( context.isAjaxRequest( ) )
         {
            disableOutput();
         }
         if ( ! wbLoad )
         {
            if ( nGXWrapped == 1 )
            {
               RenderHtmlHeaders( ) ;
               RenderHtmlOpenForm( ) ;
            }
            GxWebStd.gx_msg_list( context, "", context.GX_msglist.DisplayMode, "", "", "", "false");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "Section", "left", "top", " "+"data-gx-base-lib=\"bootstrapv3\""+" "+"data-abstract-form"+" ", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divLayoutmaintable_Internalname, 1, 0, "px", 0, "px", "Table", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divTablemain_Internalname, 1, 0, "px", 0, "px", "TableMain", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divTablecards_Internalname, 1, 0, "px", 0, "px", "", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 col-sm-6 col-lg-3", "left", "top", "", "", "div");
            /* User Defined Control */
            ucDvpanel_card1.SetProperty("Width", Dvpanel_card1_Width);
            ucDvpanel_card1.SetProperty("AutoWidth", Dvpanel_card1_Autowidth);
            ucDvpanel_card1.SetProperty("AutoHeight", Dvpanel_card1_Autoheight);
            ucDvpanel_card1.SetProperty("Cls", Dvpanel_card1_Cls);
            ucDvpanel_card1.SetProperty("Title", Dvpanel_card1_Title);
            ucDvpanel_card1.SetProperty("Collapsible", Dvpanel_card1_Collapsible);
            ucDvpanel_card1.SetProperty("Collapsed", Dvpanel_card1_Collapsed);
            ucDvpanel_card1.SetProperty("ShowCollapseIcon", Dvpanel_card1_Showcollapseicon);
            ucDvpanel_card1.SetProperty("IconPosition", Dvpanel_card1_Iconposition);
            ucDvpanel_card1.SetProperty("AutoScroll", Dvpanel_card1_Autoscroll);
            ucDvpanel_card1.Render(context, "dvelop.gxbootstrap.panel_al", Dvpanel_card1_Internalname, "DVPANEL_CARD1Container");
            context.WriteHtmlText( "<div class=\"gx_usercontrol_child\" id=\""+"DVPANEL_CARD1Container"+"Card1"+"\" style=\"display:none;\">") ;
            /* Div Control */
            GxWebStd.gx_div_start( context, divCard1_Internalname, 1, 0, "px", 0, "px", "", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 col-sm-6", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divUnnamedtable4_Internalname, 1, 0, "px", 0, "px", "TableCardMaterial", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", " gx-attribute", "left", "top", "", "", "div");
            /* Attribute/Variable Label */
            GxWebStd.gx_label_element( context, edtavValuecard1_Internalname, "Value Card1", "col-sm-3 DashboardNumberCardLabel", 0, true);
            /* Single line edit */
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 21,'',false,'" + sGXsfl_98_idx + "',0)\"";
            GxWebStd.gx_single_line_edit( context, edtavValuecard1_Internalname, StringUtil.LTrim( StringUtil.NToC( (decimal)(AV9ValueCard1), 10, 0, ",", "")), ((edtavValuecard1_Enabled!=0) ? StringUtil.LTrim( context.localUtil.Format( (decimal)(AV9ValueCard1), "ZZ,ZZZ,ZZ9")) : context.localUtil.Format( (decimal)(AV9ValueCard1), "ZZ,ZZZ,ZZ9")), TempTags+" onchange=\""+"gx.num.valid_integer( this,'.');"+";gx.evt.onchange(this, event)\" "+" onblur=\""+"gx.num.valid_integer( this,'.');"+";gx.evt.onblur(this,21);\"", "'"+""+"'"+",false,"+"'"+""+"'", "", "", "", "", edtavValuecard1_Jsonclick, 0, "DashboardNumberCard", "", "", "", "", 1, edtavValuecard1_Enabled, 0, "text", "", 10, "chr", 1, "row", 10, 0, 0, 0, 1, -1, 0, true, "KPINumericValue", "right", false, "HLP_WWPBaseObjects\\Home.htm");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* Text block */
            GxWebStd.gx_label_ctrl( context, lblDescriptioncard1_Internalname, "Sales", "", "", lblDescriptioncard1_Jsonclick, "'"+""+"'"+",false,"+"'"+""+"'", "", "TextBlockDashboardDescriptionCard", 0, "", 1, 1, 0, "HLP_WWPBaseObjects\\Home.htm");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 col-sm-6", "Right", "top", "", "", "div");
            /* User Defined Control */
            ucUcprogress1.SetProperty("Caption", Ucprogress1_Caption);
            ucUcprogress1.SetProperty("Cls", Ucprogress1_Cls);
            ucUcprogress1.SetProperty("Percentage", Ucprogress1_Percentage);
            ucUcprogress1.SetProperty("CircleWidth", Ucprogress1_Circlewidth);
            ucUcprogress1.SetProperty("CircleProgressWidth", Ucprogress1_Circleprogresswidth);
            ucUcprogress1.Render(context, "dvelop.gxbootstrap.dvprogressindicator", Ucprogress1_Internalname, "UCPROGRESS1Container");
            GxWebStd.gx_div_end( context, "Right", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            context.WriteHtmlText( "</div>") ;
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 col-sm-6 col-lg-3", "left", "top", "", "", "div");
            /* User Defined Control */
            ucDvpanel_card2.SetProperty("Width", Dvpanel_card2_Width);
            ucDvpanel_card2.SetProperty("AutoWidth", Dvpanel_card2_Autowidth);
            ucDvpanel_card2.SetProperty("AutoHeight", Dvpanel_card2_Autoheight);
            ucDvpanel_card2.SetProperty("Cls", Dvpanel_card2_Cls);
            ucDvpanel_card2.SetProperty("Title", Dvpanel_card2_Title);
            ucDvpanel_card2.SetProperty("Collapsible", Dvpanel_card2_Collapsible);
            ucDvpanel_card2.SetProperty("Collapsed", Dvpanel_card2_Collapsed);
            ucDvpanel_card2.SetProperty("ShowCollapseIcon", Dvpanel_card2_Showcollapseicon);
            ucDvpanel_card2.SetProperty("IconPosition", Dvpanel_card2_Iconposition);
            ucDvpanel_card2.SetProperty("AutoScroll", Dvpanel_card2_Autoscroll);
            ucDvpanel_card2.Render(context, "dvelop.gxbootstrap.panel_al", Dvpanel_card2_Internalname, "DVPANEL_CARD2Container");
            context.WriteHtmlText( "<div class=\"gx_usercontrol_child\" id=\""+"DVPANEL_CARD2Container"+"Card2"+"\" style=\"display:none;\">") ;
            /* Div Control */
            GxWebStd.gx_div_start( context, divCard2_Internalname, 1, 0, "px", 0, "px", "", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 col-sm-6", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divUnnamedtable3_Internalname, 1, 0, "px", 0, "px", "TableCardMaterial", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", " gx-attribute", "left", "top", "", "", "div");
            /* Attribute/Variable Label */
            GxWebStd.gx_label_element( context, edtavValuecard2_Internalname, "Value Card2", "col-sm-3 DashboardNumberCardLabel", 0, true);
            /* Single line edit */
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 37,'',false,'" + sGXsfl_98_idx + "',0)\"";
            GxWebStd.gx_single_line_edit( context, edtavValuecard2_Internalname, StringUtil.LTrim( StringUtil.NToC( (decimal)(AV8ValueCard2), 11, 0, ",", "")), ((edtavValuecard2_Enabled!=0) ? StringUtil.LTrim( context.localUtil.Format( (decimal)(AV8ValueCard2), "$ZZ,ZZZ,ZZ9")) : context.localUtil.Format( (decimal)(AV8ValueCard2), "$ZZ,ZZZ,ZZ9")), TempTags+" onchange=\""+"gx.num.valid_integer( this,'.');"+";gx.evt.onchange(this, event)\" "+" onblur=\""+"gx.num.valid_integer( this,'.');"+";gx.evt.onblur(this,37);\"", "'"+""+"'"+",false,"+"'"+""+"'", "", "", "", "", edtavValuecard2_Jsonclick, 0, "DashboardNumberCard", "", "", "", "", 1, edtavValuecard2_Enabled, 0, "text", "", 11, "chr", 1, "row", 11, 0, 0, 0, 1, -1, 0, true, "KPIPrice", "right", false, "HLP_WWPBaseObjects\\Home.htm");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* Text block */
            GxWebStd.gx_label_ctrl( context, lblDescriptioncard2_Internalname, "Revenue", "", "", lblDescriptioncard2_Jsonclick, "'"+""+"'"+",false,"+"'"+""+"'", "", "TextBlockDashboardDescriptionCard", 0, "", 1, 1, 0, "HLP_WWPBaseObjects\\Home.htm");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 col-sm-6", "Right", "top", "", "", "div");
            /* User Defined Control */
            ucUcprogress2.SetProperty("Caption", Ucprogress2_Caption);
            ucUcprogress2.SetProperty("Cls", Ucprogress2_Cls);
            ucUcprogress2.SetProperty("Percentage", Ucprogress2_Percentage);
            ucUcprogress2.SetProperty("CircleWidth", Ucprogress2_Circlewidth);
            ucUcprogress2.SetProperty("CircleProgressWidth", Ucprogress2_Circleprogresswidth);
            ucUcprogress2.Render(context, "dvelop.gxbootstrap.dvprogressindicator", Ucprogress2_Internalname, "UCPROGRESS2Container");
            GxWebStd.gx_div_end( context, "Right", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            context.WriteHtmlText( "</div>") ;
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 col-sm-6 col-lg-3 CellMarginTopMedium", "left", "top", "", "", "div");
            /* User Defined Control */
            ucDvpanel_card3.SetProperty("Width", Dvpanel_card3_Width);
            ucDvpanel_card3.SetProperty("AutoWidth", Dvpanel_card3_Autowidth);
            ucDvpanel_card3.SetProperty("AutoHeight", Dvpanel_card3_Autoheight);
            ucDvpanel_card3.SetProperty("Cls", Dvpanel_card3_Cls);
            ucDvpanel_card3.SetProperty("Title", Dvpanel_card3_Title);
            ucDvpanel_card3.SetProperty("Collapsible", Dvpanel_card3_Collapsible);
            ucDvpanel_card3.SetProperty("Collapsed", Dvpanel_card3_Collapsed);
            ucDvpanel_card3.SetProperty("ShowCollapseIcon", Dvpanel_card3_Showcollapseicon);
            ucDvpanel_card3.SetProperty("IconPosition", Dvpanel_card3_Iconposition);
            ucDvpanel_card3.SetProperty("AutoScroll", Dvpanel_card3_Autoscroll);
            ucDvpanel_card3.Render(context, "dvelop.gxbootstrap.panel_al", Dvpanel_card3_Internalname, "DVPANEL_CARD3Container");
            context.WriteHtmlText( "<div class=\"gx_usercontrol_child\" id=\""+"DVPANEL_CARD3Container"+"Card3"+"\" style=\"display:none;\">") ;
            /* Div Control */
            GxWebStd.gx_div_start( context, divCard3_Internalname, 1, 0, "px", 0, "px", "", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 col-sm-6", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divUnnamedtable2_Internalname, 1, 0, "px", 0, "px", "TableCardMaterial", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", " gx-attribute", "left", "top", "", "", "div");
            /* Attribute/Variable Label */
            GxWebStd.gx_label_element( context, edtavValuecard3_Internalname, "Value Card3", "col-sm-3 DashboardNumberCardLabel", 0, true);
            /* Single line edit */
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 53,'',false,'" + sGXsfl_98_idx + "',0)\"";
            GxWebStd.gx_single_line_edit( context, edtavValuecard3_Internalname, AV7ValueCard3, StringUtil.RTrim( context.localUtil.Format( AV7ValueCard3, "")), TempTags+" onchange=\""+""+";gx.evt.onchange(this, event)\" "+" onblur=\""+""+";gx.evt.onblur(this,53);\"", "'"+""+"'"+",false,"+"'"+""+"'", "", "", "", "", edtavValuecard3_Jsonclick, 0, "DashboardNumberCard", "", "", "", "", 1, edtavValuecard3_Enabled, 0, "text", "", 40, "chr", 1, "row", 40, 0, 0, 0, 1, -1, -1, true, "KPIVarchar", "left", true, "HLP_WWPBaseObjects\\Home.htm");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* Text block */
            GxWebStd.gx_label_ctrl( context, lblDescriptioncard3_Internalname, "Users", "", "", lblDescriptioncard3_Jsonclick, "'"+""+"'"+",false,"+"'"+""+"'", "", "TextBlockDashboardDescriptionCard", 0, "", 1, 1, 0, "HLP_WWPBaseObjects\\Home.htm");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 col-sm-6", "Right", "top", "", "", "div");
            /* User Defined Control */
            ucUcprogress3.SetProperty("Caption", Ucprogress3_Caption);
            ucUcprogress3.SetProperty("Cls", Ucprogress3_Cls);
            ucUcprogress3.SetProperty("Percentage", Ucprogress3_Percentage);
            ucUcprogress3.SetProperty("CircleWidth", Ucprogress3_Circlewidth);
            ucUcprogress3.SetProperty("CircleProgressWidth", Ucprogress3_Circleprogresswidth);
            ucUcprogress3.Render(context, "dvelop.gxbootstrap.dvprogressindicator", Ucprogress3_Internalname, "UCPROGRESS3Container");
            GxWebStd.gx_div_end( context, "Right", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            context.WriteHtmlText( "</div>") ;
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 col-sm-6 col-lg-3 CellMarginTopMedium", "left", "top", "", "", "div");
            /* User Defined Control */
            ucDvpanel_card4.SetProperty("Width", Dvpanel_card4_Width);
            ucDvpanel_card4.SetProperty("AutoWidth", Dvpanel_card4_Autowidth);
            ucDvpanel_card4.SetProperty("AutoHeight", Dvpanel_card4_Autoheight);
            ucDvpanel_card4.SetProperty("Cls", Dvpanel_card4_Cls);
            ucDvpanel_card4.SetProperty("Title", Dvpanel_card4_Title);
            ucDvpanel_card4.SetProperty("Collapsible", Dvpanel_card4_Collapsible);
            ucDvpanel_card4.SetProperty("Collapsed", Dvpanel_card4_Collapsed);
            ucDvpanel_card4.SetProperty("ShowCollapseIcon", Dvpanel_card4_Showcollapseicon);
            ucDvpanel_card4.SetProperty("IconPosition", Dvpanel_card4_Iconposition);
            ucDvpanel_card4.SetProperty("AutoScroll", Dvpanel_card4_Autoscroll);
            ucDvpanel_card4.Render(context, "dvelop.gxbootstrap.panel_al", Dvpanel_card4_Internalname, "DVPANEL_CARD4Container");
            context.WriteHtmlText( "<div class=\"gx_usercontrol_child\" id=\""+"DVPANEL_CARD4Container"+"Card4"+"\" style=\"display:none;\">") ;
            /* Div Control */
            GxWebStd.gx_div_start( context, divCard4_Internalname, 1, 0, "px", 0, "px", "", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 col-sm-6", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, divUnnamedtable1_Internalname, 1, 0, "px", 0, "px", "TableCardMaterial", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", " gx-attribute", "left", "top", "", "", "div");
            /* Attribute/Variable Label */
            GxWebStd.gx_label_element( context, edtavValuecard4_Internalname, "Value Card4", "col-sm-3 DashboardNumberCardLabel", 0, true);
            /* Single line edit */
            TempTags = "  onfocus=\"gx.evt.onfocus(this, 69,'',false,'" + sGXsfl_98_idx + "',0)\"";
            GxWebStd.gx_single_line_edit( context, edtavValuecard4_Internalname, StringUtil.LTrim( StringUtil.NToC( (decimal)(AV6ValueCard4), 10, 0, ",", "")), ((edtavValuecard4_Enabled!=0) ? StringUtil.LTrim( context.localUtil.Format( (decimal)(AV6ValueCard4), "ZZ,ZZZ,ZZ9")) : context.localUtil.Format( (decimal)(AV6ValueCard4), "ZZ,ZZZ,ZZ9")), TempTags+" onchange=\""+"gx.num.valid_integer( this,'.');"+";gx.evt.onchange(this, event)\" "+" onblur=\""+"gx.num.valid_integer( this,'.');"+";gx.evt.onblur(this,69);\"", "'"+""+"'"+",false,"+"'"+""+"'", "", "", "", "", edtavValuecard4_Jsonclick, 0, "DashboardNumberCard", "", "", "", "", 1, edtavValuecard4_Enabled, 0, "text", "", 10, "chr", 1, "row", 10, 0, 0, 0, 1, -1, 0, true, "KPINumericValue", "right", false, "HLP_WWPBaseObjects\\Home.htm");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "left", "top", "", "", "div");
            /* Text block */
            GxWebStd.gx_label_ctrl( context, lblDescriptioncard4_Internalname, "Views", "", "", lblDescriptioncard4_Jsonclick, "'"+""+"'"+",false,"+"'"+""+"'", "", "TextBlockDashboardDescriptionCard", 0, "", 1, 1, 0, "HLP_WWPBaseObjects\\Home.htm");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 col-sm-6", "Right", "top", "", "", "div");
            /* User Defined Control */
            ucUcprogress4.SetProperty("Caption", Ucprogress4_Caption);
            ucUcprogress4.SetProperty("Cls", Ucprogress4_Cls);
            ucUcprogress4.SetProperty("Percentage", Ucprogress4_Percentage);
            ucUcprogress4.SetProperty("CircleWidth", Ucprogress4_Circlewidth);
            ucUcprogress4.SetProperty("CircleProgressWidth", Ucprogress4_Circleprogresswidth);
            ucUcprogress4.Render(context, "dvelop.gxbootstrap.dvprogressindicator", Ucprogress4_Internalname, "UCPROGRESS4Container");
            GxWebStd.gx_div_end( context, "Right", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            context.WriteHtmlText( "</div>") ;
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 hidden-xs col-sm-6 hidden-sm col-md-12 col-lg-5 CellMarginTop", "left", "top", "", "", "div");
            /* User Defined Control */
            ucDvpanel_tablechart3.SetProperty("Width", Dvpanel_tablechart3_Width);
            ucDvpanel_tablechart3.SetProperty("AutoWidth", Dvpanel_tablechart3_Autowidth);
            ucDvpanel_tablechart3.SetProperty("AutoHeight", Dvpanel_tablechart3_Autoheight);
            ucDvpanel_tablechart3.SetProperty("Cls", Dvpanel_tablechart3_Cls);
            ucDvpanel_tablechart3.SetProperty("Title", Dvpanel_tablechart3_Title);
            ucDvpanel_tablechart3.SetProperty("Collapsible", Dvpanel_tablechart3_Collapsible);
            ucDvpanel_tablechart3.SetProperty("Collapsed", Dvpanel_tablechart3_Collapsed);
            ucDvpanel_tablechart3.SetProperty("ShowCollapseIcon", Dvpanel_tablechart3_Showcollapseicon);
            ucDvpanel_tablechart3.SetProperty("IconPosition", Dvpanel_tablechart3_Iconposition);
            ucDvpanel_tablechart3.SetProperty("AutoScroll", Dvpanel_tablechart3_Autoscroll);
            ucDvpanel_tablechart3.Render(context, "dvelop.gxbootstrap.panel_al", Dvpanel_tablechart3_Internalname, "DVPANEL_TABLECHART3Container");
            context.WriteHtmlText( "<div class=\"gx_usercontrol_child\" id=\""+"DVPANEL_TABLECHART3Container"+"TableChart3"+"\" style=\"display:none;\">") ;
            /* Div Control */
            GxWebStd.gx_div_start( context, divTablechart3_Internalname, 1, 0, "px", divTablechart3_Height, "px", "", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "Center", "top", "", "", "div");
            /* User Defined Control */
            ucUtchartdoughnut.SetProperty("Axes", AV10Axes);
            ucUtchartdoughnut.SetProperty("Parameters", AV11Parameters);
            ucUtchartdoughnut.SetProperty("Width", Utchartdoughnut_Width);
            ucUtchartdoughnut.SetProperty("Height", Utchartdoughnut_Height);
            ucUtchartdoughnut.SetProperty("Type", Utchartdoughnut_Type);
            ucUtchartdoughnut.SetProperty("ChartType", Utchartdoughnut_Charttype);
            ucUtchartdoughnut.SetProperty("Title", Utchartdoughnut_Title);
            ucUtchartdoughnut.SetProperty("ShowValues", Utchartdoughnut_Showvalues);
            ucUtchartdoughnut.SetProperty("ItemClickData", AV12ItemClickData);
            ucUtchartdoughnut.SetProperty("ItemDoubleClickData", AV13ItemDoubleClickData);
            ucUtchartdoughnut.SetProperty("DragAndDropData", AV14DragAndDropData);
            ucUtchartdoughnut.SetProperty("FilterChangedData", AV15FilterChangedData);
            ucUtchartdoughnut.SetProperty("ItemExpandData", AV16ItemExpandData);
            ucUtchartdoughnut.SetProperty("ItemCollapseData", AV17ItemCollapseData);
            ucUtchartdoughnut.Render(context, "queryviewer", Utchartdoughnut_Internalname, "UTCHARTDOUGHNUTContainer");
            GxWebStd.gx_div_end( context, "Center", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            context.WriteHtmlText( "</div>") ;
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 hidden-xs col-sm-6 hidden-sm col-md-12 col-lg-7 CellMarginTop", "left", "top", "", "", "div");
            /* User Defined Control */
            ucDvpanel_tablechart4.SetProperty("Width", Dvpanel_tablechart4_Width);
            ucDvpanel_tablechart4.SetProperty("AutoWidth", Dvpanel_tablechart4_Autowidth);
            ucDvpanel_tablechart4.SetProperty("AutoHeight", Dvpanel_tablechart4_Autoheight);
            ucDvpanel_tablechart4.SetProperty("Cls", Dvpanel_tablechart4_Cls);
            ucDvpanel_tablechart4.SetProperty("Title", Dvpanel_tablechart4_Title);
            ucDvpanel_tablechart4.SetProperty("Collapsible", Dvpanel_tablechart4_Collapsible);
            ucDvpanel_tablechart4.SetProperty("Collapsed", Dvpanel_tablechart4_Collapsed);
            ucDvpanel_tablechart4.SetProperty("ShowCollapseIcon", Dvpanel_tablechart4_Showcollapseicon);
            ucDvpanel_tablechart4.SetProperty("IconPosition", Dvpanel_tablechart4_Iconposition);
            ucDvpanel_tablechart4.SetProperty("AutoScroll", Dvpanel_tablechart4_Autoscroll);
            ucDvpanel_tablechart4.Render(context, "dvelop.gxbootstrap.panel_al", Dvpanel_tablechart4_Internalname, "DVPANEL_TABLECHART4Container");
            context.WriteHtmlText( "<div class=\"gx_usercontrol_child\" id=\""+"DVPANEL_TABLECHART4Container"+"TableChart4"+"\" style=\"display:none;\">") ;
            /* Div Control */
            GxWebStd.gx_div_start( context, divTablechart4_Internalname, 1, 0, "px", divTablechart4_Height, "px", "", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "Center", "top", "", "", "div");
            /* User Defined Control */
            ucUtchartsmoothline.SetProperty("Axes", AV10Axes);
            ucUtchartsmoothline.SetProperty("Parameters", AV11Parameters);
            ucUtchartsmoothline.SetProperty("Height", Utchartsmoothline_Height);
            ucUtchartsmoothline.SetProperty("Type", Utchartsmoothline_Type);
            ucUtchartsmoothline.SetProperty("ChartType", Utchartsmoothline_Charttype);
            ucUtchartsmoothline.SetProperty("Title", Utchartsmoothline_Title);
            ucUtchartsmoothline.SetProperty("ItemClickData", AV12ItemClickData);
            ucUtchartsmoothline.SetProperty("ItemDoubleClickData", AV13ItemDoubleClickData);
            ucUtchartsmoothline.SetProperty("DragAndDropData", AV14DragAndDropData);
            ucUtchartsmoothline.SetProperty("FilterChangedData", AV15FilterChangedData);
            ucUtchartsmoothline.SetProperty("ItemExpandData", AV16ItemExpandData);
            ucUtchartsmoothline.SetProperty("ItemCollapseData", AV17ItemCollapseData);
            ucUtchartsmoothline.Render(context, "queryviewer", Utchartsmoothline_Internalname, "UTCHARTSMOOTHLINEContainer");
            GxWebStd.gx_div_end( context, "Center", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            context.WriteHtmlText( "</div>") ;
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 hidden-xs col-lg-8 CellMarginTop", "left", "top", "", "", "div");
            /* User Defined Control */
            ucDvpanel_tablechart1.SetProperty("Width", Dvpanel_tablechart1_Width);
            ucDvpanel_tablechart1.SetProperty("AutoWidth", Dvpanel_tablechart1_Autowidth);
            ucDvpanel_tablechart1.SetProperty("AutoHeight", Dvpanel_tablechart1_Autoheight);
            ucDvpanel_tablechart1.SetProperty("Cls", Dvpanel_tablechart1_Cls);
            ucDvpanel_tablechart1.SetProperty("Title", Dvpanel_tablechart1_Title);
            ucDvpanel_tablechart1.SetProperty("Collapsible", Dvpanel_tablechart1_Collapsible);
            ucDvpanel_tablechart1.SetProperty("Collapsed", Dvpanel_tablechart1_Collapsed);
            ucDvpanel_tablechart1.SetProperty("ShowCollapseIcon", Dvpanel_tablechart1_Showcollapseicon);
            ucDvpanel_tablechart1.SetProperty("IconPosition", Dvpanel_tablechart1_Iconposition);
            ucDvpanel_tablechart1.SetProperty("AutoScroll", Dvpanel_tablechart1_Autoscroll);
            ucDvpanel_tablechart1.Render(context, "dvelop.gxbootstrap.panel_al", Dvpanel_tablechart1_Internalname, "DVPANEL_TABLECHART1Container");
            context.WriteHtmlText( "<div class=\"gx_usercontrol_child\" id=\""+"DVPANEL_TABLECHART1Container"+"TableChart1"+"\" style=\"display:none;\">") ;
            /* Div Control */
            GxWebStd.gx_div_start( context, divTablechart1_Internalname, 1, 0, "px", divTablechart1_Height, "px", "", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "row", "left", "top", "", "", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12", "Center", "top", "", "", "div");
            /* User Defined Control */
            ucUtchartsmootharea.SetProperty("Axes", AV10Axes);
            ucUtchartsmootharea.SetProperty("Parameters", AV11Parameters);
            ucUtchartsmootharea.SetProperty("Type", Utchartsmootharea_Type);
            ucUtchartsmootharea.SetProperty("ChartType", Utchartsmootharea_Charttype);
            ucUtchartsmootharea.SetProperty("Title", Utchartsmootharea_Title);
            ucUtchartsmootharea.SetProperty("ItemClickData", AV12ItemClickData);
            ucUtchartsmootharea.SetProperty("ItemDoubleClickData", AV13ItemDoubleClickData);
            ucUtchartsmootharea.SetProperty("DragAndDropData", AV14DragAndDropData);
            ucUtchartsmootharea.SetProperty("FilterChangedData", AV15FilterChangedData);
            ucUtchartsmootharea.SetProperty("ItemExpandData", AV16ItemExpandData);
            ucUtchartsmootharea.SetProperty("ItemCollapseData", AV17ItemCollapseData);
            ucUtchartsmootharea.Render(context, "queryviewer", Utchartsmootharea_Internalname, "UTCHARTSMOOTHAREAContainer");
            GxWebStd.gx_div_end( context, "Center", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            context.WriteHtmlText( "</div>") ;
            GxWebStd.gx_div_end( context, "left", "top", "div");
            /* Div Control */
            GxWebStd.gx_div_start( context, "", 1, 0, "px", 0, "px", "col-xs-12 hidden-sm col-md-5 hidden-md col-lg-4 SectionGrid GridNoBorderCell CellMarginTop", "left", "top", "", "", "div");
            /*  Grid Control  */
            GridContainer.SetWrapped(nGXWrapped);
            if ( GridContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "<div id=\""+"GridContainer"+"DivS\" data-gxgridid=\"98\">") ;
               sStyleString = "";
               GxWebStd.gx_table_start( context, subGrid_Internalname, subGrid_Internalname, "", "GridNoBorder WorkWith", 0, "", "", 1, 2, sStyleString, "", "", 0);
               /* Subfile titles */
               context.WriteHtmlText( "<tr") ;
               context.WriteHtmlTextNl( ">") ;
               if ( subGrid_Backcolorstyle == 0 )
               {
                  subGrid_Titlebackstyle = 0;
                  if ( StringUtil.Len( subGrid_Class) > 0 )
                  {
                     subGrid_Linesclass = subGrid_Class+"Title";
                  }
               }
               else
               {
                  subGrid_Titlebackstyle = 1;
                  if ( subGrid_Backcolorstyle == 1 )
                  {
                     subGrid_Titlebackcolor = subGrid_Allbackcolor;
                     if ( StringUtil.Len( subGrid_Class) > 0 )
                     {
                        subGrid_Linesclass = subGrid_Class+"UniformTitle";
                     }
                  }
                  else
                  {
                     if ( StringUtil.Len( subGrid_Class) > 0 )
                     {
                        subGrid_Linesclass = subGrid_Class+"Title";
                     }
                  }
               }
               context.WriteHtmlText( "<th align=\""+"left"+"\" "+" nowrap=\"nowrap\" "+" class=\""+"Attribute"+"\" "+" style=\""+""+""+"\" "+">") ;
               context.SendWebValue( "Name") ;
               context.WriteHtmlTextNl( "</th>") ;
               context.WriteHtmlText( "<th align=\""+"right"+"\" "+" nowrap=\"nowrap\" "+" class=\""+"Attribute"+"\" "+" style=\""+""+""+"\" "+">") ;
               context.SendWebValue( "Price") ;
               context.WriteHtmlTextNl( "</th>") ;
               context.WriteHtmlText( "<th align=\""+"right"+"\" "+" nowrap=\"nowrap\" "+" class=\""+"Attribute"+"\" "+" style=\""+""+""+"\" "+">") ;
               context.SendWebValue( "Status") ;
               context.WriteHtmlTextNl( "</th>") ;
               context.WriteHtmlTextNl( "</tr>") ;
               GridContainer.AddObjectProperty("GridName", "Grid");
            }
            else
            {
               GridContainer.AddObjectProperty("GridName", "Grid");
               GridContainer.AddObjectProperty("Header", subGrid_Header);
               GridContainer.AddObjectProperty("Class", "GridNoBorder WorkWith");
               GridContainer.AddObjectProperty("Cellpadding", StringUtil.LTrim( StringUtil.NToC( (decimal)(1), 4, 0, ".", "")));
               GridContainer.AddObjectProperty("Cellspacing", StringUtil.LTrim( StringUtil.NToC( (decimal)(2), 4, 0, ".", "")));
               GridContainer.AddObjectProperty("Backcolorstyle", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Backcolorstyle), 1, 0, ".", "")));
               GridContainer.AddObjectProperty("CmpContext", "");
               GridContainer.AddObjectProperty("InMasterPage", "false");
               GridColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridColumn.AddObjectProperty("Enabled", StringUtil.LTrim( StringUtil.NToC( (decimal)(edtavHomesampledata__productname_Enabled), 5, 0, ".", "")));
               GridContainer.AddColumnProperties(GridColumn);
               GridColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridColumn.AddObjectProperty("Enabled", StringUtil.LTrim( StringUtil.NToC( (decimal)(edtavHomesampledata__productprice_Enabled), 5, 0, ".", "")));
               GridContainer.AddColumnProperties(GridColumn);
               GridColumn = GXWebColumn.GetNew(isAjaxCallMode( ));
               GridColumn.AddObjectProperty("Columnclass", StringUtil.RTrim( cmbavHomesampledata__productstatus_Columnclass));
               GridColumn.AddObjectProperty("Enabled", StringUtil.LTrim( StringUtil.NToC( (decimal)(cmbavHomesampledata__productstatus.Enabled), 5, 0, ".", "")));
               GridContainer.AddColumnProperties(GridColumn);
               GridContainer.AddObjectProperty("Selectedindex", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Selectedindex), 4, 0, ".", "")));
               GridContainer.AddObjectProperty("Allowselection", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Allowselection), 1, 0, ".", "")));
               GridContainer.AddObjectProperty("Selectioncolor", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Selectioncolor), 9, 0, ".", "")));
               GridContainer.AddObjectProperty("Allowhover", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Allowhovering), 1, 0, ".", "")));
               GridContainer.AddObjectProperty("Hovercolor", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Hoveringcolor), 9, 0, ".", "")));
               GridContainer.AddObjectProperty("Allowcollapsing", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Allowcollapsing), 1, 0, ".", "")));
               GridContainer.AddObjectProperty("Collapsed", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Collapsed), 1, 0, ".", "")));
            }
         }
         if ( wbEnd == 98 )
         {
            wbEnd = 0;
            nRC_GXsfl_98 = (int)(nGXsfl_98_idx-1);
            if ( GridContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "</table>") ;
               context.WriteHtmlText( "</div>") ;
            }
            else
            {
               GridContainer.AddObjectProperty("GRID_nEOF", GRID_nEOF);
               GridContainer.AddObjectProperty("GRID_nFirstRecordOnPage", GRID_nFirstRecordOnPage);
               AV22GXV1 = nGXsfl_98_idx;
               sStyleString = "";
               context.WriteHtmlText( "<div id=\""+"GridContainer"+"Div\" "+sStyleString+">"+"</div>") ;
               context.httpAjaxContext.ajax_rsp_assign_grid("_"+"Grid", GridContainer);
               if ( ! context.isAjaxRequest( ) && ! context.isSpaRequest( ) )
               {
                  GxWebStd.gx_hidden_field( context, "GridContainerData", GridContainer.ToJavascriptSource());
               }
               if ( context.isAjaxRequest( ) || context.isSpaRequest( ) )
               {
                  GxWebStd.gx_hidden_field( context, "GridContainerData"+"V", GridContainer.GridValuesHidden());
               }
               else
               {
                  context.WriteHtmlText( "<input type=\"hidden\" "+"name=\""+"GridContainerData"+"V"+"\" value='"+GridContainer.GridValuesHidden()+"'/>") ;
               }
            }
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
            GxWebStd.gx_div_end( context, "left", "top", "div");
         }
         if ( wbEnd == 98 )
         {
            wbEnd = 0;
            if ( isFullAjaxMode( ) )
            {
               if ( GridContainer.GetWrapped() == 1 )
               {
                  context.WriteHtmlText( "</table>") ;
                  context.WriteHtmlText( "</div>") ;
               }
               else
               {
                  GridContainer.AddObjectProperty("GRID_nEOF", GRID_nEOF);
                  GridContainer.AddObjectProperty("GRID_nFirstRecordOnPage", GRID_nFirstRecordOnPage);
                  AV22GXV1 = nGXsfl_98_idx;
                  sStyleString = "";
                  context.WriteHtmlText( "<div id=\""+"GridContainer"+"Div\" "+sStyleString+">"+"</div>") ;
                  context.httpAjaxContext.ajax_rsp_assign_grid("_"+"Grid", GridContainer);
                  if ( ! context.isAjaxRequest( ) && ! context.isSpaRequest( ) )
                  {
                     GxWebStd.gx_hidden_field( context, "GridContainerData", GridContainer.ToJavascriptSource());
                  }
                  if ( context.isAjaxRequest( ) || context.isSpaRequest( ) )
                  {
                     GxWebStd.gx_hidden_field( context, "GridContainerData"+"V", GridContainer.GridValuesHidden());
                  }
                  else
                  {
                     context.WriteHtmlText( "<input type=\"hidden\" "+"name=\""+"GridContainerData"+"V"+"\" value='"+GridContainer.GridValuesHidden()+"'/>") ;
                  }
               }
            }
         }
         wbLoad = true;
      }

      protected void START0C2( )
      {
         wbLoad = false;
         wbEnd = 0;
         wbStart = 0;
         if ( ! context.isSpaRequest( ) )
         {
            Form.Meta.addItem("generator", "GeneXus C# 16_0_5-135614", 0) ;
            Form.Meta.addItem("description", "Inicio", 0) ;
         }
         context.wjLoc = "";
         context.nUserReturn = 0;
         context.wbHandled = 0;
         if ( StringUtil.StrCmp(context.GetRequestMethod( ), "POST") == 0 )
         {
         }
         wbErr = false;
         STRUP0C0( ) ;
      }

      protected void WS0C2( )
      {
         START0C2( ) ;
         EVT0C2( ) ;
      }

      protected void EVT0C2( )
      {
         if ( StringUtil.StrCmp(context.GetRequestMethod( ), "POST") == 0 )
         {
            if ( ! context.WillRedirect( ) && ( context.nUserReturn != 1 ) && ! wbErr )
            {
               /* Read Web Panel buttons. */
               sEvt = cgiGet( "_EventName");
               EvtGridId = cgiGet( "_EventGridId");
               EvtRowId = cgiGet( "_EventRowId");
               if ( StringUtil.Len( sEvt) > 0 )
               {
                  sEvtType = StringUtil.Left( sEvt, 1);
                  sEvt = StringUtil.Right( sEvt, (short)(StringUtil.Len( sEvt)-1));
                  if ( StringUtil.StrCmp(sEvtType, "M") != 0 )
                  {
                     if ( StringUtil.StrCmp(sEvtType, "E") == 0 )
                     {
                        sEvtType = StringUtil.Right( sEvt, 1);
                        if ( StringUtil.StrCmp(sEvtType, ".") == 0 )
                        {
                           sEvt = StringUtil.Left( sEvt, (short)(StringUtil.Len( sEvt)-1));
                           if ( StringUtil.StrCmp(sEvt, "RFR") == 0 )
                           {
                              context.wbHandled = 1;
                              dynload_actions( ) ;
                           }
                           else if ( StringUtil.StrCmp(sEvt, "LSCR") == 0 )
                           {
                              context.wbHandled = 1;
                              dynload_actions( ) ;
                           }
                           else if ( StringUtil.StrCmp(sEvt, "GRIDPAGING") == 0 )
                           {
                              context.wbHandled = 1;
                              sEvt = cgiGet( "GRIDPAGING");
                              if ( StringUtil.StrCmp(sEvt, "FIRST") == 0 )
                              {
                                 subgrid_firstpage( ) ;
                              }
                              else if ( StringUtil.StrCmp(sEvt, "PREV") == 0 )
                              {
                                 subgrid_previouspage( ) ;
                              }
                              else if ( StringUtil.StrCmp(sEvt, "NEXT") == 0 )
                              {
                                 subgrid_nextpage( ) ;
                              }
                              else if ( StringUtil.StrCmp(sEvt, "LAST") == 0 )
                              {
                                 subgrid_lastpage( ) ;
                              }
                              dynload_actions( ) ;
                           }
                        }
                        else
                        {
                           sEvtType = StringUtil.Right( sEvt, 4);
                           sEvt = StringUtil.Left( sEvt, (short)(StringUtil.Len( sEvt)-4));
                           if ( ( StringUtil.StrCmp(StringUtil.Left( sEvt, 5), "START") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 9), "GRID.LOAD") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 5), "ENTER") == 0 ) || ( StringUtil.StrCmp(StringUtil.Left( sEvt, 6), "CANCEL") == 0 ) )
                           {
                              nGXsfl_98_idx = (int)(NumberUtil.Val( sEvtType, "."));
                              sGXsfl_98_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_98_idx), 4, 0)), 4, "0");
                              SubsflControlProps_982( ) ;
                              AV22GXV1 = (int)(nGXsfl_98_idx+GRID_nFirstRecordOnPage);
                              if ( ( AV5HomeSampleData.Count >= AV22GXV1 ) && ( AV22GXV1 > 0 ) )
                              {
                                 AV5HomeSampleData.CurrentItem = ((GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem)AV5HomeSampleData.Item(AV22GXV1));
                              }
                              sEvtType = StringUtil.Right( sEvt, 1);
                              if ( StringUtil.StrCmp(sEvtType, ".") == 0 )
                              {
                                 sEvt = StringUtil.Left( sEvt, (short)(StringUtil.Len( sEvt)-1));
                                 if ( StringUtil.StrCmp(sEvt, "START") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    dynload_actions( ) ;
                                    /* Execute user event: Start */
                                    E110C2 ();
                                 }
                                 else if ( StringUtil.StrCmp(sEvt, "GRID.LOAD") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    dynload_actions( ) ;
                                    E120C2 ();
                                 }
                                 else if ( StringUtil.StrCmp(sEvt, "ENTER") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    if ( ! wbErr )
                                    {
                                       Rfr0gs = false;
                                       if ( ! Rfr0gs )
                                       {
                                       }
                                       dynload_actions( ) ;
                                    }
                                    /* No code required for Cancel button. It is implemented as the Reset button. */
                                 }
                                 else if ( StringUtil.StrCmp(sEvt, "LSCR") == 0 )
                                 {
                                    context.wbHandled = 1;
                                    dynload_actions( ) ;
                                 }
                              }
                              else
                              {
                              }
                           }
                        }
                     }
                     context.wbHandled = 1;
                  }
               }
            }
         }
      }

      protected void WE0C2( )
      {
         if ( ! GxWebStd.gx_redirect( context) )
         {
            Rfr0gs = true;
            Refresh( ) ;
            if ( ! GxWebStd.gx_redirect( context) )
            {
               if ( nGXWrapped == 1 )
               {
                  RenderHtmlCloseForm( ) ;
               }
            }
         }
      }

      protected void PA0C2( )
      {
         if ( nDonePA == 0 )
         {
            if ( String.IsNullOrEmpty(StringUtil.RTrim( context.GetCookie( "GX_SESSION_ID"))) )
            {
               gxcookieaux = context.SetCookie( "GX_SESSION_ID", Encrypt64( Crypto.GetEncryptionKey( ), Crypto.GetServerKey( )), "", (DateTime)(DateTime.MinValue), "", 0);
            }
            GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
            toggleJsOutput = isJsOutputEnabled( );
            if ( context.isSpaRequest( ) )
            {
               disableJsOutput();
            }
            init_web_controls( ) ;
            if ( toggleJsOutput )
            {
               if ( context.isSpaRequest( ) )
               {
                  enableJsOutput();
               }
            }
            if ( ! context.isAjaxRequest( ) )
            {
               GX_FocusControl = edtavValuecard1_Internalname;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "GX_FocusControl", GX_FocusControl);
            }
            nDonePA = 1;
         }
      }

      protected void dynload_actions( )
      {
         /* End function dynload_actions */
      }

      protected void gxnrGrid_newrow( )
      {
         GxWebStd.set_html_headers( context, 0, "", "");
         SubsflControlProps_982( ) ;
         while ( nGXsfl_98_idx <= nRC_GXsfl_98 )
         {
            sendrow_982( ) ;
            nGXsfl_98_idx = ((subGrid_Islastpage==1)&&(nGXsfl_98_idx+1>subGrid_Recordsperpage( )) ? 1 : nGXsfl_98_idx+1);
            sGXsfl_98_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_98_idx), 4, 0)), 4, "0");
            SubsflControlProps_982( ) ;
         }
         context.GX_webresponse.AddString(context.httpAjaxContext.getJSONContainerResponse( GridContainer));
         /* End function gxnrGrid_newrow */
      }

      protected void gxgrGrid_refresh( int subGrid_Rows ,
                                       GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem> AV5HomeSampleData )
      {
         initialize_formulas( ) ;
         GxWebStd.set_html_headers( context, 0, "", "");
         GRID_nCurrentRecord = 0;
         RF0C2( ) ;
         /* End function gxgrGrid_refresh */
      }

      protected void send_integrity_hashes( )
      {
      }

      protected void clear_multi_value_controls( )
      {
         if ( context.isAjaxRequest( ) )
         {
            dynload_actions( ) ;
         }
      }

      protected void fix_multi_value_controls( )
      {
      }

      public void Refresh( )
      {
         send_integrity_hashes( ) ;
         RF0C2( ) ;
         if ( isFullAjaxMode( ) )
         {
            send_integrity_footer_hashes( ) ;
         }
      }

      protected void initialize_formulas( )
      {
         /* GeneXus formulas. */
         context.Gx_err = 0;
         edtavValuecard1_Enabled = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavValuecard1_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavValuecard1_Enabled), 5, 0)), true);
         edtavValuecard2_Enabled = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavValuecard2_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavValuecard2_Enabled), 5, 0)), true);
         edtavValuecard3_Enabled = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavValuecard3_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavValuecard3_Enabled), 5, 0)), true);
         edtavValuecard4_Enabled = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavValuecard4_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavValuecard4_Enabled), 5, 0)), true);
         edtavHomesampledata__productname_Enabled = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavHomesampledata__productname_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavHomesampledata__productname_Enabled), 5, 0)), !bGXsfl_98_Refreshing);
         edtavHomesampledata__productprice_Enabled = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavHomesampledata__productprice_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavHomesampledata__productprice_Enabled), 5, 0)), !bGXsfl_98_Refreshing);
         cmbavHomesampledata__productstatus.Enabled = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, cmbavHomesampledata__productstatus_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(cmbavHomesampledata__productstatus.Enabled), 5, 0)), !bGXsfl_98_Refreshing);
      }

      protected void RF0C2( )
      {
         initialize_formulas( ) ;
         clear_multi_value_controls( ) ;
         if ( isAjaxCallMode( ) )
         {
            GridContainer.ClearRows();
         }
         wbStart = 98;
         nGXsfl_98_idx = 1;
         sGXsfl_98_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_98_idx), 4, 0)), 4, "0");
         SubsflControlProps_982( ) ;
         bGXsfl_98_Refreshing = true;
         GridContainer.AddObjectProperty("GridName", "Grid");
         GridContainer.AddObjectProperty("CmpContext", "");
         GridContainer.AddObjectProperty("InMasterPage", "false");
         GridContainer.AddObjectProperty("Class", "GridNoBorder WorkWith");
         GridContainer.AddObjectProperty("Cellpadding", StringUtil.LTrim( StringUtil.NToC( (decimal)(1), 4, 0, ".", "")));
         GridContainer.AddObjectProperty("Cellspacing", StringUtil.LTrim( StringUtil.NToC( (decimal)(2), 4, 0, ".", "")));
         GridContainer.AddObjectProperty("Backcolorstyle", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Backcolorstyle), 1, 0, ".", "")));
         GridContainer.PageSize = subGrid_Recordsperpage( );
         gxdyncontrolsrefreshing = true;
         fix_multi_value_controls( ) ;
         gxdyncontrolsrefreshing = false;
         if ( ! context.WillRedirect( ) && ( context.nUserReturn != 1 ) )
         {
            SubsflControlProps_982( ) ;
            E120C2 ();
            if ( ( GRID_nCurrentRecord > 0 ) && ( GRID_nGridOutOfScope == 0 ) && ( nGXsfl_98_idx == 1 ) )
            {
               GRID_nCurrentRecord = 0;
               GRID_nGridOutOfScope = 1;
               subgrid_firstpage( ) ;
               E120C2 ();
            }
            wbEnd = 98;
            WB0C0( ) ;
         }
         bGXsfl_98_Refreshing = true;
      }

      protected void send_integrity_lvl_hashes0C2( )
      {
      }

      protected int subGrid_Pagecount( )
      {
         GRID_nRecordCount = subGrid_Recordcount( );
         if ( ((int)((GRID_nRecordCount) % (subGrid_Recordsperpage( )))) == 0 )
         {
            return (int)(NumberUtil.Int( (long)(GRID_nRecordCount/ (decimal)(subGrid_Recordsperpage( ))))) ;
         }
         return (int)(NumberUtil.Int( (long)(GRID_nRecordCount/ (decimal)(subGrid_Recordsperpage( ))))+1) ;
      }

      protected int subGrid_Recordcount( )
      {
         return AV5HomeSampleData.Count ;
      }

      protected int subGrid_Recordsperpage( )
      {
         if ( subGrid_Rows > 0 )
         {
            return subGrid_Rows*1 ;
         }
         else
         {
            return (int)(-1) ;
         }
      }

      protected int subGrid_Currentpage( )
      {
         return (int)(NumberUtil.Int( (long)(GRID_nFirstRecordOnPage/ (decimal)(subGrid_Recordsperpage( ))))+1) ;
      }

      protected short subgrid_firstpage( )
      {
         GRID_nFirstRecordOnPage = 0;
         GxWebStd.gx_hidden_field( context, "GRID_nFirstRecordOnPage", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nFirstRecordOnPage), 15, 0, ".", "")));
         if ( isFullAjaxMode( ) )
         {
            gxgrGrid_refresh( subGrid_Rows, AV5HomeSampleData) ;
         }
         send_integrity_footer_hashes( ) ;
         return 0 ;
      }

      protected short subgrid_nextpage( )
      {
         GRID_nRecordCount = subGrid_Recordcount( );
         if ( ( GRID_nRecordCount >= subGrid_Recordsperpage( ) ) && ( GRID_nEOF == 0 ) )
         {
            GRID_nFirstRecordOnPage = (long)(GRID_nFirstRecordOnPage+subGrid_Recordsperpage( ));
         }
         else
         {
            return 2 ;
         }
         GxWebStd.gx_hidden_field( context, "GRID_nFirstRecordOnPage", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nFirstRecordOnPage), 15, 0, ".", "")));
         GridContainer.AddObjectProperty("GRID_nFirstRecordOnPage", GRID_nFirstRecordOnPage);
         if ( isFullAjaxMode( ) )
         {
            gxgrGrid_refresh( subGrid_Rows, AV5HomeSampleData) ;
         }
         send_integrity_footer_hashes( ) ;
         return (short)(((GRID_nEOF==0) ? 0 : 2)) ;
      }

      protected short subgrid_previouspage( )
      {
         if ( GRID_nFirstRecordOnPage >= subGrid_Recordsperpage( ) )
         {
            GRID_nFirstRecordOnPage = (long)(GRID_nFirstRecordOnPage-subGrid_Recordsperpage( ));
         }
         else
         {
            return 2 ;
         }
         GxWebStd.gx_hidden_field( context, "GRID_nFirstRecordOnPage", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nFirstRecordOnPage), 15, 0, ".", "")));
         if ( isFullAjaxMode( ) )
         {
            gxgrGrid_refresh( subGrid_Rows, AV5HomeSampleData) ;
         }
         send_integrity_footer_hashes( ) ;
         return 0 ;
      }

      protected short subgrid_lastpage( )
      {
         GRID_nRecordCount = subGrid_Recordcount( );
         if ( GRID_nRecordCount > subGrid_Recordsperpage( ) )
         {
            if ( ((int)((GRID_nRecordCount) % (subGrid_Recordsperpage( )))) == 0 )
            {
               GRID_nFirstRecordOnPage = (long)(GRID_nRecordCount-subGrid_Recordsperpage( ));
            }
            else
            {
               GRID_nFirstRecordOnPage = (long)(GRID_nRecordCount-((int)((GRID_nRecordCount) % (subGrid_Recordsperpage( )))));
            }
         }
         else
         {
            GRID_nFirstRecordOnPage = 0;
         }
         GxWebStd.gx_hidden_field( context, "GRID_nFirstRecordOnPage", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nFirstRecordOnPage), 15, 0, ".", "")));
         if ( isFullAjaxMode( ) )
         {
            gxgrGrid_refresh( subGrid_Rows, AV5HomeSampleData) ;
         }
         send_integrity_footer_hashes( ) ;
         return 0 ;
      }

      protected int subgrid_gotopage( int nPageNo )
      {
         if ( nPageNo > 0 )
         {
            GRID_nFirstRecordOnPage = (long)(subGrid_Recordsperpage( )*(nPageNo-1));
         }
         else
         {
            GRID_nFirstRecordOnPage = 0;
         }
         GxWebStd.gx_hidden_field( context, "GRID_nFirstRecordOnPage", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nFirstRecordOnPage), 15, 0, ".", "")));
         if ( isFullAjaxMode( ) )
         {
            gxgrGrid_refresh( subGrid_Rows, AV5HomeSampleData) ;
         }
         send_integrity_footer_hashes( ) ;
         return (int)(0) ;
      }

      protected void STRUP0C0( )
      {
         /* Before Start, stand alone formulas. */
         context.Gx_err = 0;
         edtavValuecard1_Enabled = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavValuecard1_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavValuecard1_Enabled), 5, 0)), true);
         edtavValuecard2_Enabled = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavValuecard2_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavValuecard2_Enabled), 5, 0)), true);
         edtavValuecard3_Enabled = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavValuecard3_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavValuecard3_Enabled), 5, 0)), true);
         edtavValuecard4_Enabled = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavValuecard4_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavValuecard4_Enabled), 5, 0)), true);
         edtavHomesampledata__productname_Enabled = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavHomesampledata__productname_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavHomesampledata__productname_Enabled), 5, 0)), !bGXsfl_98_Refreshing);
         edtavHomesampledata__productprice_Enabled = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, edtavHomesampledata__productprice_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(edtavHomesampledata__productprice_Enabled), 5, 0)), !bGXsfl_98_Refreshing);
         cmbavHomesampledata__productstatus.Enabled = 0;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, cmbavHomesampledata__productstatus_Internalname, "Enabled", StringUtil.LTrim( StringUtil.Str( (decimal)(cmbavHomesampledata__productstatus.Enabled), 5, 0)), !bGXsfl_98_Refreshing);
         /* Execute Start event if defined. */
         context.wbGlbDoneStart = 0;
         /* Execute user event: Start */
         E110C2 ();
         context.wbGlbDoneStart = 1;
         /* After Start, stand alone formulas. */
         if ( StringUtil.StrCmp(context.GetRequestMethod( ), "POST") == 0 )
         {
            /* Read saved SDTs. */
            ajax_req_read_hidden_sdt(cgiGet( "Homesampledata"), AV5HomeSampleData);
            ajax_req_read_hidden_sdt(cgiGet( "vAXES"), AV10Axes);
            ajax_req_read_hidden_sdt(cgiGet( "vPARAMETERS"), AV11Parameters);
            ajax_req_read_hidden_sdt(cgiGet( "vITEMCLICKDATA"), AV12ItemClickData);
            ajax_req_read_hidden_sdt(cgiGet( "vITEMDOUBLECLICKDATA"), AV13ItemDoubleClickData);
            ajax_req_read_hidden_sdt(cgiGet( "vDRAGANDDROPDATA"), AV14DragAndDropData);
            ajax_req_read_hidden_sdt(cgiGet( "vFILTERCHANGEDDATA"), AV15FilterChangedData);
            ajax_req_read_hidden_sdt(cgiGet( "vITEMEXPANDDATA"), AV16ItemExpandData);
            ajax_req_read_hidden_sdt(cgiGet( "vITEMCOLLAPSEDATA"), AV17ItemCollapseData);
            ajax_req_read_hidden_sdt(cgiGet( "vHOMESAMPLEDATA"), AV5HomeSampleData);
            /* Read variables values. */
            if ( ( ( context.localUtil.CToN( cgiGet( edtavValuecard1_Internalname), ",", ".") < Convert.ToDecimal( 0 )) ) || ( ( context.localUtil.CToN( cgiGet( edtavValuecard1_Internalname), ",", ".") > Convert.ToDecimal( 99999999 )) ) )
            {
               GX_msglist.addItem(context.GetMessage( "GXM_badnum", ""), 1, "vVALUECARD1");
               GX_FocusControl = edtavValuecard1_Internalname;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "GX_FocusControl", GX_FocusControl);
               wbErr = true;
               AV9ValueCard1 = 0;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV9ValueCard1", StringUtil.LTrim( StringUtil.Str( (decimal)(AV9ValueCard1), 8, 0)));
            }
            else
            {
               AV9ValueCard1 = (int)(context.localUtil.CToN( cgiGet( edtavValuecard1_Internalname), ",", "."));
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV9ValueCard1", StringUtil.LTrim( StringUtil.Str( (decimal)(AV9ValueCard1), 8, 0)));
            }
            if ( ( ( context.localUtil.CToN( cgiGet( edtavValuecard2_Internalname), ",", ".") < Convert.ToDecimal( 0 )) ) || ( ( context.localUtil.CToN( cgiGet( edtavValuecard2_Internalname), ",", ".") > Convert.ToDecimal( 99999999 )) ) )
            {
               GX_msglist.addItem(context.GetMessage( "GXM_badnum", ""), 1, "vVALUECARD2");
               GX_FocusControl = edtavValuecard2_Internalname;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "GX_FocusControl", GX_FocusControl);
               wbErr = true;
               AV8ValueCard2 = 0;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV8ValueCard2", StringUtil.LTrim( StringUtil.Str( (decimal)(AV8ValueCard2), 8, 0)));
            }
            else
            {
               AV8ValueCard2 = (int)(context.localUtil.CToN( cgiGet( edtavValuecard2_Internalname), ",", "."));
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV8ValueCard2", StringUtil.LTrim( StringUtil.Str( (decimal)(AV8ValueCard2), 8, 0)));
            }
            AV7ValueCard3 = cgiGet( edtavValuecard3_Internalname);
            context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV7ValueCard3", AV7ValueCard3);
            if ( ( ( context.localUtil.CToN( cgiGet( edtavValuecard4_Internalname), ",", ".") < Convert.ToDecimal( 0 )) ) || ( ( context.localUtil.CToN( cgiGet( edtavValuecard4_Internalname), ",", ".") > Convert.ToDecimal( 99999999 )) ) )
            {
               GX_msglist.addItem(context.GetMessage( "GXM_badnum", ""), 1, "vVALUECARD4");
               GX_FocusControl = edtavValuecard4_Internalname;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "GX_FocusControl", GX_FocusControl);
               wbErr = true;
               AV6ValueCard4 = 0;
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV6ValueCard4", StringUtil.LTrim( StringUtil.Str( (decimal)(AV6ValueCard4), 8, 0)));
            }
            else
            {
               AV6ValueCard4 = (int)(context.localUtil.CToN( cgiGet( edtavValuecard4_Internalname), ",", "."));
               context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV6ValueCard4", StringUtil.LTrim( StringUtil.Str( (decimal)(AV6ValueCard4), 8, 0)));
            }
            /* Read saved values. */
            nRC_GXsfl_98 = (int)(context.localUtil.CToN( cgiGet( "nRC_GXsfl_98"), ",", "."));
            GRID_nFirstRecordOnPage = (long)(context.localUtil.CToN( cgiGet( "GRID_nFirstRecordOnPage"), ",", "."));
            GRID_nEOF = (short)(context.localUtil.CToN( cgiGet( "GRID_nEOF"), ",", "."));
            subGrid_Rows = (int)(context.localUtil.CToN( cgiGet( "GRID_Rows"), ",", "."));
            GxWebStd.gx_hidden_field( context, "GRID_Rows", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Rows), 6, 0, ".", "")));
            Ucprogress1_Caption = cgiGet( "UCPROGRESS1_Caption");
            Ucprogress1_Cls = cgiGet( "UCPROGRESS1_Cls");
            Ucprogress1_Percentage = (int)(context.localUtil.CToN( cgiGet( "UCPROGRESS1_Percentage"), ",", "."));
            Ucprogress1_Circlewidth = (int)(context.localUtil.CToN( cgiGet( "UCPROGRESS1_Circlewidth"), ",", "."));
            Ucprogress1_Circleprogresswidth = (int)(context.localUtil.CToN( cgiGet( "UCPROGRESS1_Circleprogresswidth"), ",", "."));
            Dvpanel_card1_Width = cgiGet( "DVPANEL_CARD1_Width");
            Dvpanel_card1_Autowidth = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD1_Autowidth"));
            Dvpanel_card1_Autoheight = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD1_Autoheight"));
            Dvpanel_card1_Cls = cgiGet( "DVPANEL_CARD1_Cls");
            Dvpanel_card1_Title = cgiGet( "DVPANEL_CARD1_Title");
            Dvpanel_card1_Collapsible = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD1_Collapsible"));
            Dvpanel_card1_Collapsed = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD1_Collapsed"));
            Dvpanel_card1_Showcollapseicon = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD1_Showcollapseicon"));
            Dvpanel_card1_Iconposition = cgiGet( "DVPANEL_CARD1_Iconposition");
            Dvpanel_card1_Autoscroll = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD1_Autoscroll"));
            Ucprogress2_Caption = cgiGet( "UCPROGRESS2_Caption");
            Ucprogress2_Cls = cgiGet( "UCPROGRESS2_Cls");
            Ucprogress2_Percentage = (int)(context.localUtil.CToN( cgiGet( "UCPROGRESS2_Percentage"), ",", "."));
            Ucprogress2_Circlewidth = (int)(context.localUtil.CToN( cgiGet( "UCPROGRESS2_Circlewidth"), ",", "."));
            Ucprogress2_Circleprogresswidth = (int)(context.localUtil.CToN( cgiGet( "UCPROGRESS2_Circleprogresswidth"), ",", "."));
            Dvpanel_card2_Width = cgiGet( "DVPANEL_CARD2_Width");
            Dvpanel_card2_Autowidth = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD2_Autowidth"));
            Dvpanel_card2_Autoheight = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD2_Autoheight"));
            Dvpanel_card2_Cls = cgiGet( "DVPANEL_CARD2_Cls");
            Dvpanel_card2_Title = cgiGet( "DVPANEL_CARD2_Title");
            Dvpanel_card2_Collapsible = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD2_Collapsible"));
            Dvpanel_card2_Collapsed = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD2_Collapsed"));
            Dvpanel_card2_Showcollapseicon = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD2_Showcollapseicon"));
            Dvpanel_card2_Iconposition = cgiGet( "DVPANEL_CARD2_Iconposition");
            Dvpanel_card2_Autoscroll = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD2_Autoscroll"));
            Ucprogress3_Caption = cgiGet( "UCPROGRESS3_Caption");
            Ucprogress3_Cls = cgiGet( "UCPROGRESS3_Cls");
            Ucprogress3_Percentage = (int)(context.localUtil.CToN( cgiGet( "UCPROGRESS3_Percentage"), ",", "."));
            Ucprogress3_Circlewidth = (int)(context.localUtil.CToN( cgiGet( "UCPROGRESS3_Circlewidth"), ",", "."));
            Ucprogress3_Circleprogresswidth = (int)(context.localUtil.CToN( cgiGet( "UCPROGRESS3_Circleprogresswidth"), ",", "."));
            Dvpanel_card3_Width = cgiGet( "DVPANEL_CARD3_Width");
            Dvpanel_card3_Autowidth = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD3_Autowidth"));
            Dvpanel_card3_Autoheight = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD3_Autoheight"));
            Dvpanel_card3_Cls = cgiGet( "DVPANEL_CARD3_Cls");
            Dvpanel_card3_Title = cgiGet( "DVPANEL_CARD3_Title");
            Dvpanel_card3_Collapsible = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD3_Collapsible"));
            Dvpanel_card3_Collapsed = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD3_Collapsed"));
            Dvpanel_card3_Showcollapseicon = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD3_Showcollapseicon"));
            Dvpanel_card3_Iconposition = cgiGet( "DVPANEL_CARD3_Iconposition");
            Dvpanel_card3_Autoscroll = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD3_Autoscroll"));
            Ucprogress4_Caption = cgiGet( "UCPROGRESS4_Caption");
            Ucprogress4_Cls = cgiGet( "UCPROGRESS4_Cls");
            Ucprogress4_Percentage = (int)(context.localUtil.CToN( cgiGet( "UCPROGRESS4_Percentage"), ",", "."));
            Ucprogress4_Circlewidth = (int)(context.localUtil.CToN( cgiGet( "UCPROGRESS4_Circlewidth"), ",", "."));
            Ucprogress4_Circleprogresswidth = (int)(context.localUtil.CToN( cgiGet( "UCPROGRESS4_Circleprogresswidth"), ",", "."));
            Dvpanel_card4_Width = cgiGet( "DVPANEL_CARD4_Width");
            Dvpanel_card4_Autowidth = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD4_Autowidth"));
            Dvpanel_card4_Autoheight = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD4_Autoheight"));
            Dvpanel_card4_Cls = cgiGet( "DVPANEL_CARD4_Cls");
            Dvpanel_card4_Title = cgiGet( "DVPANEL_CARD4_Title");
            Dvpanel_card4_Collapsible = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD4_Collapsible"));
            Dvpanel_card4_Collapsed = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD4_Collapsed"));
            Dvpanel_card4_Showcollapseicon = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD4_Showcollapseicon"));
            Dvpanel_card4_Iconposition = cgiGet( "DVPANEL_CARD4_Iconposition");
            Dvpanel_card4_Autoscroll = StringUtil.StrToBool( cgiGet( "DVPANEL_CARD4_Autoscroll"));
            Utchartdoughnut_Width = cgiGet( "UTCHARTDOUGHNUT_Width");
            Utchartdoughnut_Height = cgiGet( "UTCHARTDOUGHNUT_Height");
            Utchartdoughnut_Type = cgiGet( "UTCHARTDOUGHNUT_Type");
            Utchartdoughnut_Charttype = cgiGet( "UTCHARTDOUGHNUT_Charttype");
            Utchartdoughnut_Showvalues = StringUtil.StrToBool( cgiGet( "UTCHARTDOUGHNUT_Showvalues"));
            Dvpanel_tablechart3_Width = cgiGet( "DVPANEL_TABLECHART3_Width");
            Dvpanel_tablechart3_Autowidth = StringUtil.StrToBool( cgiGet( "DVPANEL_TABLECHART3_Autowidth"));
            Dvpanel_tablechart3_Autoheight = StringUtil.StrToBool( cgiGet( "DVPANEL_TABLECHART3_Autoheight"));
            Dvpanel_tablechart3_Cls = cgiGet( "DVPANEL_TABLECHART3_Cls");
            Dvpanel_tablechart3_Title = cgiGet( "DVPANEL_TABLECHART3_Title");
            Dvpanel_tablechart3_Collapsible = StringUtil.StrToBool( cgiGet( "DVPANEL_TABLECHART3_Collapsible"));
            Dvpanel_tablechart3_Collapsed = StringUtil.StrToBool( cgiGet( "DVPANEL_TABLECHART3_Collapsed"));
            Dvpanel_tablechart3_Showcollapseicon = StringUtil.StrToBool( cgiGet( "DVPANEL_TABLECHART3_Showcollapseicon"));
            Dvpanel_tablechart3_Iconposition = cgiGet( "DVPANEL_TABLECHART3_Iconposition");
            Dvpanel_tablechart3_Autoscroll = StringUtil.StrToBool( cgiGet( "DVPANEL_TABLECHART3_Autoscroll"));
            Utchartsmoothline_Height = cgiGet( "UTCHARTSMOOTHLINE_Height");
            Utchartsmoothline_Type = cgiGet( "UTCHARTSMOOTHLINE_Type");
            Utchartsmoothline_Charttype = cgiGet( "UTCHARTSMOOTHLINE_Charttype");
            Dvpanel_tablechart4_Width = cgiGet( "DVPANEL_TABLECHART4_Width");
            Dvpanel_tablechart4_Autowidth = StringUtil.StrToBool( cgiGet( "DVPANEL_TABLECHART4_Autowidth"));
            Dvpanel_tablechart4_Autoheight = StringUtil.StrToBool( cgiGet( "DVPANEL_TABLECHART4_Autoheight"));
            Dvpanel_tablechart4_Cls = cgiGet( "DVPANEL_TABLECHART4_Cls");
            Dvpanel_tablechart4_Title = cgiGet( "DVPANEL_TABLECHART4_Title");
            Dvpanel_tablechart4_Collapsible = StringUtil.StrToBool( cgiGet( "DVPANEL_TABLECHART4_Collapsible"));
            Dvpanel_tablechart4_Collapsed = StringUtil.StrToBool( cgiGet( "DVPANEL_TABLECHART4_Collapsed"));
            Dvpanel_tablechart4_Showcollapseicon = StringUtil.StrToBool( cgiGet( "DVPANEL_TABLECHART4_Showcollapseicon"));
            Dvpanel_tablechart4_Iconposition = cgiGet( "DVPANEL_TABLECHART4_Iconposition");
            Dvpanel_tablechart4_Autoscroll = StringUtil.StrToBool( cgiGet( "DVPANEL_TABLECHART4_Autoscroll"));
            Utchartsmootharea_Type = cgiGet( "UTCHARTSMOOTHAREA_Type");
            Utchartsmootharea_Charttype = cgiGet( "UTCHARTSMOOTHAREA_Charttype");
            Dvpanel_tablechart1_Width = cgiGet( "DVPANEL_TABLECHART1_Width");
            Dvpanel_tablechart1_Autowidth = StringUtil.StrToBool( cgiGet( "DVPANEL_TABLECHART1_Autowidth"));
            Dvpanel_tablechart1_Autoheight = StringUtil.StrToBool( cgiGet( "DVPANEL_TABLECHART1_Autoheight"));
            Dvpanel_tablechart1_Cls = cgiGet( "DVPANEL_TABLECHART1_Cls");
            Dvpanel_tablechart1_Title = cgiGet( "DVPANEL_TABLECHART1_Title");
            Dvpanel_tablechart1_Collapsible = StringUtil.StrToBool( cgiGet( "DVPANEL_TABLECHART1_Collapsible"));
            Dvpanel_tablechart1_Collapsed = StringUtil.StrToBool( cgiGet( "DVPANEL_TABLECHART1_Collapsed"));
            Dvpanel_tablechart1_Showcollapseicon = StringUtil.StrToBool( cgiGet( "DVPANEL_TABLECHART1_Showcollapseicon"));
            Dvpanel_tablechart1_Iconposition = cgiGet( "DVPANEL_TABLECHART1_Iconposition");
            Dvpanel_tablechart1_Autoscroll = StringUtil.StrToBool( cgiGet( "DVPANEL_TABLECHART1_Autoscroll"));
            nRC_GXsfl_98 = (int)(context.localUtil.CToN( cgiGet( "nRC_GXsfl_98"), ",", "."));
            nGXsfl_98_fel_idx = 0;
            while ( nGXsfl_98_fel_idx < nRC_GXsfl_98 )
            {
               nGXsfl_98_fel_idx = ((subGrid_Islastpage==1)&&(nGXsfl_98_fel_idx+1>subGrid_Recordsperpage( )) ? 1 : nGXsfl_98_fel_idx+1);
               sGXsfl_98_fel_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_98_fel_idx), 4, 0)), 4, "0");
               SubsflControlProps_fel_982( ) ;
               AV22GXV1 = (int)(nGXsfl_98_fel_idx+GRID_nFirstRecordOnPage);
               if ( ( AV5HomeSampleData.Count >= AV22GXV1 ) && ( AV22GXV1 > 0 ) )
               {
                  AV5HomeSampleData.CurrentItem = ((GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem)AV5HomeSampleData.Item(AV22GXV1));
               }
            }
            if ( nGXsfl_98_fel_idx == 0 )
            {
               nGXsfl_98_idx = 1;
               sGXsfl_98_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_98_idx), 4, 0)), 4, "0");
               SubsflControlProps_982( ) ;
            }
            nGXsfl_98_fel_idx = 1;
            /* Read subfile selected row values. */
            /* Read hidden variables. */
            GXKey = Decrypt64( context.GetCookie( "GX_SESSION_ID"), Crypto.GetServerKey( ));
            /* Check if conditions changed and reset current page numbers */
         }
         else
         {
            dynload_actions( ) ;
         }
      }

      protected void GXStart( )
      {
         /* Execute user event: Start */
         E110C2 ();
         if (returnInSub) return;
      }

      protected void E110C2( )
      {
         /* Start Routine */
         divTablechart1_Height = 447;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, divTablechart1_Internalname, "Height", StringUtil.LTrim( StringUtil.Str( (decimal)(divTablechart1_Height), 9, 0)), true);
         divTablechart4_Height = 427;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, divTablechart4_Internalname, "Height", StringUtil.LTrim( StringUtil.Str( (decimal)(divTablechart4_Height), 9, 0)), true);
         divTablechart3_Height = 427;
         context.httpAjaxContext.ajax_rsp_assign_prop("", false, divTablechart3_Internalname, "Height", StringUtil.LTrim( StringUtil.Str( (decimal)(divTablechart3_Height), 9, 0)), true);
         subGrid_Rows = 0;
         GxWebStd.gx_hidden_field( context, "GRID_Rows", StringUtil.LTrim( StringUtil.NToC( (decimal)(subGrid_Rows), 6, 0, ".", "")));
         AV9ValueCard1 = 352;
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV9ValueCard1", StringUtil.LTrim( StringUtil.Str( (decimal)(AV9ValueCard1), 8, 0)));
         AV8ValueCard2 = 75520;
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV8ValueCard2", StringUtil.LTrim( StringUtil.Str( (decimal)(AV8ValueCard2), 8, 0)));
         AV7ValueCard3 = "+560";
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV7ValueCard3", AV7ValueCard3);
         AV6ValueCard4 = 2540;
         context.httpAjaxContext.ajax_rsp_assign_attri("", false, "AV6ValueCard4", StringUtil.LTrim( StringUtil.Str( (decimal)(AV6ValueCard4), 8, 0)));
         GXt_objcol_SdtHomeSampleData_HomeSampleDataItem1 = AV5HomeSampleData;
         new GeneXus.Programs.wwpbaseobjects.gethomesampledata(context ).execute( out  GXt_objcol_SdtHomeSampleData_HomeSampleDataItem1) ;
         AV5HomeSampleData = GXt_objcol_SdtHomeSampleData_HomeSampleDataItem1;
         gx_BV98 = true;
      }

      private void E120C2( )
      {
         /* Grid_Load Routine */
         AV22GXV1 = 1;
         while ( AV22GXV1 <= AV5HomeSampleData.Count )
         {
            AV5HomeSampleData.CurrentItem = ((GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem)AV5HomeSampleData.Item(AV22GXV1));
            if ( ((GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem)(AV5HomeSampleData.CurrentItem)).gxTpr_Productstatus == 1 )
            {
               cmbavHomesampledata__productstatus_Columnclass = "WWColumn WWColumnTag WWColumnTagSuccess WWColumnTagSuccessSingleCell";
            }
            else if ( ((GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem)(AV5HomeSampleData.CurrentItem)).gxTpr_Productstatus == 2 )
            {
               cmbavHomesampledata__productstatus_Columnclass = "WWColumn WWColumnTag WWColumnTagDanger WWColumnTagDangerSingleCell";
            }
            else if ( ((GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem)(AV5HomeSampleData.CurrentItem)).gxTpr_Productstatus == 4 )
            {
               cmbavHomesampledata__productstatus_Columnclass = "WWColumn WWColumnTag WWColumnTagInfoLight WWColumnTagInfoLightSingleCell";
            }
            else if ( ((GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem)(AV5HomeSampleData.CurrentItem)).gxTpr_Productstatus == 3 )
            {
               cmbavHomesampledata__productstatus_Columnclass = "WWColumn WWColumnTag WWColumnTagWarning WWColumnTagWarningSingleCell";
            }
            else
            {
               cmbavHomesampledata__productstatus_Columnclass = "WWColumn";
            }
            /* Load Method */
            if ( wbStart != -1 )
            {
               wbStart = 98;
            }
            if ( ( subGrid_Islastpage == 1 ) || ( subGrid_Rows == 0 ) || ( ( GRID_nCurrentRecord >= GRID_nFirstRecordOnPage ) && ( GRID_nCurrentRecord < GRID_nFirstRecordOnPage + subGrid_Recordsperpage( ) ) ) )
            {
               sendrow_982( ) ;
               GRID_nEOF = 0;
               GxWebStd.gx_hidden_field( context, "GRID_nEOF", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nEOF), 1, 0, ".", "")));
               if ( GRID_nCurrentRecord + 1 >= subGrid_Recordcount( ) )
               {
                  GRID_nEOF = 1;
                  GxWebStd.gx_hidden_field( context, "GRID_nEOF", StringUtil.LTrim( StringUtil.NToC( (decimal)(GRID_nEOF), 1, 0, ".", "")));
               }
            }
            GRID_nCurrentRecord = (long)(GRID_nCurrentRecord+1);
            if ( isFullAjaxMode( ) && ! bGXsfl_98_Refreshing )
            {
               context.DoAjaxLoad(98, GridRow);
            }
            AV22GXV1 = (int)(AV22GXV1+1);
         }
         /*  Sending Event outputs  */
      }

      public override void setparameters( Object[] obj )
      {
         createObjects();
         initialize();
      }

      public override String getresponse( String sGXDynURL )
      {
         initialize_properties( ) ;
         BackMsgLst = context.GX_msglist;
         context.GX_msglist = LclMsgLst;
         sDynURL = sGXDynURL;
         nGotPars = (short)(1);
         nGXWrapped = (short)(1);
         context.SetWrapped(true);
         PA0C2( ) ;
         WS0C2( ) ;
         WE0C2( ) ;
         this.cleanup();
         context.SetWrapped(false);
         context.GX_msglist = BackMsgLst;
         return "";
      }

      public void responsestatic( String sGXDynURL )
      {
      }

      protected void define_styles( )
      {
         AddStyleSheetFile("DVelop/Bootstrap/Shared/DVelopBootstrap.css", "");
         AddStyleSheetFile("DVelop/Bootstrap/Shared/DVelopBootstrap.css", "");
         AddStyleSheetFile("DVelop/Bootstrap/Shared/DVelopBootstrap.css", "");
         AddStyleSheetFile("DVelop/Bootstrap/Shared/DVelopBootstrap.css", "");
         AddStyleSheetFile("QueryViewer/highcharts/css/highcharts.css", "");
         AddStyleSheetFile("QueryViewer/QueryViewer.css", "");
         AddStyleSheetFile("QueryViewer/highcharts/css/highcharts.css", "");
         AddStyleSheetFile("QueryViewer/QueryViewer.css", "");
         AddStyleSheetFile("QueryViewer/highcharts/css/highcharts.css", "");
         AddStyleSheetFile("QueryViewer/QueryViewer.css", "");
         AddThemeStyleSheetFile("", context.GetTheme( )+".css", "?"+GetCacheInvalidationToken( ));
         bool outputEnabled = isOutputEnabled( ) ;
         if ( context.isSpaRequest( ) )
         {
            enableOutput();
         }
         idxLst = 1;
         while ( idxLst <= Form.Jscriptsrc.Count )
         {
            context.AddJavascriptSource(StringUtil.RTrim( ((String)Form.Jscriptsrc.Item(idxLst))), "?2019103019141631", true, true);
            idxLst = (int)(idxLst+1);
         }
         if ( ! outputEnabled )
         {
            if ( context.isSpaRequest( ) )
            {
               disableOutput();
            }
         }
         /* End function define_styles */
      }

      protected void include_jscripts( )
      {
         if ( nGXWrapped != 1 )
         {
            context.AddJavascriptSource("messages.spa.js", "?"+GetCacheInvalidationToken( ), false, true);
            context.AddJavascriptSource("wwpbaseobjects/home.js", "?2019103019141632", false, true);
            context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
            context.AddJavascriptSource("DVelop/Bootstrap/Panel/BootstrapPanelRender.js", "", false, true);
            context.AddJavascriptSource("DVelop/Bootstrap/DVProgressIndicator/DVProgressIndicatorRender.js", "", false, true);
            context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
            context.AddJavascriptSource("DVelop/Bootstrap/Panel/BootstrapPanelRender.js", "", false, true);
            context.AddJavascriptSource("DVelop/Bootstrap/DVProgressIndicator/DVProgressIndicatorRender.js", "", false, true);
            context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
            context.AddJavascriptSource("DVelop/Bootstrap/Panel/BootstrapPanelRender.js", "", false, true);
            context.AddJavascriptSource("DVelop/Bootstrap/DVProgressIndicator/DVProgressIndicatorRender.js", "", false, true);
            context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
            context.AddJavascriptSource("DVelop/Bootstrap/Panel/BootstrapPanelRender.js", "", false, true);
            context.AddJavascriptSource("DVelop/Bootstrap/DVProgressIndicator/DVProgressIndicatorRender.js", "", false, true);
            context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
            context.AddJavascriptSource("DVelop/Bootstrap/Panel/BootstrapPanelRender.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/QueryViewerCommon.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/highcharts/highcharts.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/highcharts/highcharts-3d.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/highcharts/highcharts-more.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/highcharts/modules/funnel.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/highcharts/modules/solid-gauge.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/oatPivot/gxpivotjs.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/QueryViewerRender.js", "", false, true);
            context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
            context.AddJavascriptSource("DVelop/Bootstrap/Panel/BootstrapPanelRender.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/QueryViewerCommon.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/highcharts/highcharts.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/highcharts/highcharts-3d.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/highcharts/highcharts-more.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/highcharts/modules/funnel.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/highcharts/modules/solid-gauge.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/oatPivot/gxpivotjs.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/QueryViewerRender.js", "", false, true);
            context.AddJavascriptSource("DVelop/Bootstrap/Shared/DVelopBootstrap.js", "", false, true);
            context.AddJavascriptSource("DVelop/Bootstrap/Panel/BootstrapPanelRender.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/QueryViewerCommon.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/highcharts/highcharts.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/highcharts/highcharts-3d.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/highcharts/highcharts-more.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/highcharts/modules/funnel.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/highcharts/modules/solid-gauge.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/oatPivot/gxpivotjs.js", "", false, true);
            context.AddJavascriptSource("QueryViewer/QueryViewerRender.js", "", false, true);
         }
         /* End function include_jscripts */
      }

      protected void SubsflControlProps_982( )
      {
         edtavHomesampledata__productname_Internalname = "HOMESAMPLEDATA__PRODUCTNAME_"+sGXsfl_98_idx;
         edtavHomesampledata__productprice_Internalname = "HOMESAMPLEDATA__PRODUCTPRICE_"+sGXsfl_98_idx;
         cmbavHomesampledata__productstatus_Internalname = "HOMESAMPLEDATA__PRODUCTSTATUS_"+sGXsfl_98_idx;
      }

      protected void SubsflControlProps_fel_982( )
      {
         edtavHomesampledata__productname_Internalname = "HOMESAMPLEDATA__PRODUCTNAME_"+sGXsfl_98_fel_idx;
         edtavHomesampledata__productprice_Internalname = "HOMESAMPLEDATA__PRODUCTPRICE_"+sGXsfl_98_fel_idx;
         cmbavHomesampledata__productstatus_Internalname = "HOMESAMPLEDATA__PRODUCTSTATUS_"+sGXsfl_98_fel_idx;
      }

      protected void sendrow_982( )
      {
         SubsflControlProps_982( ) ;
         WB0C0( ) ;
         if ( ( subGrid_Rows * 1 == 0 ) || ( nGXsfl_98_idx <= subGrid_Recordsperpage( ) * 1 ) )
         {
            GridRow = GXWebRow.GetNew(context,GridContainer);
            if ( subGrid_Backcolorstyle == 0 )
            {
               /* None style subfile background logic. */
               subGrid_Backstyle = 0;
               if ( StringUtil.StrCmp(subGrid_Class, "") != 0 )
               {
                  subGrid_Linesclass = subGrid_Class+"Odd";
               }
            }
            else if ( subGrid_Backcolorstyle == 1 )
            {
               /* Uniform style subfile background logic. */
               subGrid_Backstyle = 0;
               subGrid_Backcolor = subGrid_Allbackcolor;
               if ( StringUtil.StrCmp(subGrid_Class, "") != 0 )
               {
                  subGrid_Linesclass = subGrid_Class+"Uniform";
               }
            }
            else if ( subGrid_Backcolorstyle == 2 )
            {
               /* Header style subfile background logic. */
               subGrid_Backstyle = 1;
               if ( StringUtil.StrCmp(subGrid_Class, "") != 0 )
               {
                  subGrid_Linesclass = subGrid_Class+"Odd";
               }
               subGrid_Backcolor = (int)(0x0);
            }
            else if ( subGrid_Backcolorstyle == 3 )
            {
               /* Report style subfile background logic. */
               subGrid_Backstyle = 1;
               if ( ((int)((nGXsfl_98_idx) % (2))) == 0 )
               {
                  subGrid_Backcolor = (int)(0x0);
                  if ( StringUtil.StrCmp(subGrid_Class, "") != 0 )
                  {
                     subGrid_Linesclass = subGrid_Class+"Even";
                  }
               }
               else
               {
                  subGrid_Backcolor = (int)(0x0);
                  if ( StringUtil.StrCmp(subGrid_Class, "") != 0 )
                  {
                     subGrid_Linesclass = subGrid_Class+"Odd";
                  }
               }
            }
            if ( GridContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "<tr ") ;
               context.WriteHtmlText( " class=\""+"GridNoBorder WorkWith"+"\" style=\""+""+"\"") ;
               context.WriteHtmlText( " gxrow=\""+sGXsfl_98_idx+"\">") ;
            }
            /* Subfile cell */
            if ( GridContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "<td valign=\"middle\" align=\""+"left"+"\""+" style=\""+""+"\">") ;
            }
            /* Single line edit */
            ROClassString = "Attribute";
            GridRow.AddColumnProperties("edit", 1, isAjaxCallMode( ), new Object[] {(String)edtavHomesampledata__productname_Internalname,((GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem)AV5HomeSampleData.Item(AV22GXV1)).gxTpr_Productname,(String)"",(String)"",(String)"'"+""+"'"+",false,"+"'"+""+"'",(String)"",(String)"",(String)"",(String)"",(String)edtavHomesampledata__productname_Jsonclick,(short)0,(String)"Attribute",(String)"",(String)ROClassString,(String)"WWColumn",(String)"",(short)-1,(int)edtavHomesampledata__productname_Enabled,(short)0,(String)"text",(String)"",(short)0,(String)"px",(short)17,(String)"px",(short)40,(short)0,(short)0,(short)98,(short)1,(short)-1,(short)-1,(bool)true,(String)"",(String)"left",(bool)true});
            /* Subfile cell */
            if ( GridContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "<td valign=\"middle\" align=\""+"right"+"\""+" style=\""+""+"\">") ;
            }
            /* Single line edit */
            ROClassString = "Attribute";
            GridRow.AddColumnProperties("edit", 1, isAjaxCallMode( ), new Object[] {(String)edtavHomesampledata__productprice_Internalname,StringUtil.LTrim( StringUtil.NToC( ((GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem)AV5HomeSampleData.Item(AV22GXV1)).gxTpr_Productprice, 11, 1, ",", "")),((edtavHomesampledata__productprice_Enabled!=0) ? StringUtil.LTrim( context.localUtil.Format( ((GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem)AV5HomeSampleData.Item(AV22GXV1)).gxTpr_Productprice, "$ ZZZ,ZZ9.9")) : context.localUtil.Format( ((GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem)AV5HomeSampleData.Item(AV22GXV1)).gxTpr_Productprice, "$ ZZZ,ZZ9.9")),(String)"",(String)"'"+""+"'"+",false,"+"'"+""+"'",(String)"",(String)"",(String)"",(String)"",(String)edtavHomesampledata__productprice_Jsonclick,(short)0,(String)"Attribute",(String)"",(String)ROClassString,(String)"WWColumn",(String)"",(short)-1,(int)edtavHomesampledata__productprice_Enabled,(short)0,(String)"text",(String)"",(short)0,(String)"px",(short)17,(String)"px",(short)11,(short)0,(short)0,(short)98,(short)1,(short)-1,(short)0,(bool)true,(String)"",(String)"right",(bool)false});
            /* Subfile cell */
            if ( GridContainer.GetWrapped() == 1 )
            {
               context.WriteHtmlText( "<td valign=\"middle\" align=\""+"right"+"\""+" style=\""+""+"\">") ;
            }
            if ( ( cmbavHomesampledata__productstatus.ItemCount == 0 ) && isAjaxCallMode( ) )
            {
               GXCCtl = "HOMESAMPLEDATA__PRODUCTSTATUS_" + sGXsfl_98_idx;
               cmbavHomesampledata__productstatus.Name = GXCCtl;
               cmbavHomesampledata__productstatus.WebTags = "";
               cmbavHomesampledata__productstatus.addItem("1", "Available", 0);
               cmbavHomesampledata__productstatus.addItem("2", "Missing", 0);
               cmbavHomesampledata__productstatus.addItem("3", "Comming Soon", 0);
               cmbavHomesampledata__productstatus.addItem("4", "Ordered", 0);
               if ( cmbavHomesampledata__productstatus.ItemCount > 0 )
               {
                  if ( ( AV22GXV1 > 0 ) && ( AV5HomeSampleData.Count >= AV22GXV1 ) && (0==((GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem)AV5HomeSampleData.Item(AV22GXV1)).gxTpr_Productstatus) )
                  {
                     ((GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem)AV5HomeSampleData.Item(AV22GXV1)).gxTpr_Productstatus = (short)(NumberUtil.Val( cmbavHomesampledata__productstatus.getValidValue(StringUtil.Trim( StringUtil.Str( (decimal)(((GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem)AV5HomeSampleData.Item(AV22GXV1)).gxTpr_Productstatus), 1, 0))), "."));
                  }
               }
            }
            /* ComboBox */
            GridRow.AddColumnProperties("combobox", 2, isAjaxCallMode( ), new Object[] {(GXCombobox)cmbavHomesampledata__productstatus,(String)cmbavHomesampledata__productstatus_Internalname,StringUtil.Trim( StringUtil.Str( (decimal)(((GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem)AV5HomeSampleData.Item(AV22GXV1)).gxTpr_Productstatus), 1, 0)),(short)1,(String)cmbavHomesampledata__productstatus_Jsonclick,(short)0,(String)"'"+""+"'"+",false,"+"'"+""+"'",(String)"int",(String)"",(short)-1,cmbavHomesampledata__productstatus.Enabled,(short)0,(short)0,(short)0,(String)"px",(short)0,(String)"px",(String)"",(String)"Attribute",(String)cmbavHomesampledata__productstatus_Columnclass,(String)"",(String)"",(String)"",(bool)true});
            cmbavHomesampledata__productstatus.CurrentValue = StringUtil.Trim( StringUtil.Str( (decimal)(((GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem)AV5HomeSampleData.Item(AV22GXV1)).gxTpr_Productstatus), 1, 0));
            context.httpAjaxContext.ajax_rsp_assign_prop("", false, cmbavHomesampledata__productstatus_Internalname, "Values", (String)(cmbavHomesampledata__productstatus.ToJavascriptSource()), !bGXsfl_98_Refreshing);
            send_integrity_lvl_hashes0C2( ) ;
            GridContainer.AddRow(GridRow);
            nGXsfl_98_idx = ((subGrid_Islastpage==1)&&(nGXsfl_98_idx+1>subGrid_Recordsperpage( )) ? 1 : nGXsfl_98_idx+1);
            sGXsfl_98_idx = StringUtil.PadL( StringUtil.LTrim( StringUtil.Str( (decimal)(nGXsfl_98_idx), 4, 0)), 4, "0");
            SubsflControlProps_982( ) ;
         }
         /* End function sendrow_982 */
      }

      protected void init_web_controls( )
      {
         GXCCtl = "HOMESAMPLEDATA__PRODUCTSTATUS_" + sGXsfl_98_idx;
         cmbavHomesampledata__productstatus.Name = GXCCtl;
         cmbavHomesampledata__productstatus.WebTags = "";
         cmbavHomesampledata__productstatus.addItem("1", "Available", 0);
         cmbavHomesampledata__productstatus.addItem("2", "Missing", 0);
         cmbavHomesampledata__productstatus.addItem("3", "Comming Soon", 0);
         cmbavHomesampledata__productstatus.addItem("4", "Ordered", 0);
         if ( cmbavHomesampledata__productstatus.ItemCount > 0 )
         {
            if ( ( AV22GXV1 > 0 ) && ( AV5HomeSampleData.Count >= AV22GXV1 ) && (0==((GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem)AV5HomeSampleData.Item(AV22GXV1)).gxTpr_Productstatus) )
            {
               ((GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem)AV5HomeSampleData.Item(AV22GXV1)).gxTpr_Productstatus = (short)(NumberUtil.Val( cmbavHomesampledata__productstatus.getValidValue(StringUtil.Trim( StringUtil.Str( (decimal)(((GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem)AV5HomeSampleData.Item(AV22GXV1)).gxTpr_Productstatus), 1, 0))), "."));
            }
         }
         /* End function init_web_controls */
      }

      protected void init_default_properties( )
      {
         edtavValuecard1_Internalname = "vVALUECARD1";
         lblDescriptioncard1_Internalname = "DESCRIPTIONCARD1";
         divUnnamedtable4_Internalname = "UNNAMEDTABLE4";
         Ucprogress1_Internalname = "UCPROGRESS1";
         divCard1_Internalname = "CARD1";
         Dvpanel_card1_Internalname = "DVPANEL_CARD1";
         edtavValuecard2_Internalname = "vVALUECARD2";
         lblDescriptioncard2_Internalname = "DESCRIPTIONCARD2";
         divUnnamedtable3_Internalname = "UNNAMEDTABLE3";
         Ucprogress2_Internalname = "UCPROGRESS2";
         divCard2_Internalname = "CARD2";
         Dvpanel_card2_Internalname = "DVPANEL_CARD2";
         edtavValuecard3_Internalname = "vVALUECARD3";
         lblDescriptioncard3_Internalname = "DESCRIPTIONCARD3";
         divUnnamedtable2_Internalname = "UNNAMEDTABLE2";
         Ucprogress3_Internalname = "UCPROGRESS3";
         divCard3_Internalname = "CARD3";
         Dvpanel_card3_Internalname = "DVPANEL_CARD3";
         edtavValuecard4_Internalname = "vVALUECARD4";
         lblDescriptioncard4_Internalname = "DESCRIPTIONCARD4";
         divUnnamedtable1_Internalname = "UNNAMEDTABLE1";
         Ucprogress4_Internalname = "UCPROGRESS4";
         divCard4_Internalname = "CARD4";
         Dvpanel_card4_Internalname = "DVPANEL_CARD4";
         divTablecards_Internalname = "TABLECARDS";
         Utchartdoughnut_Internalname = "UTCHARTDOUGHNUT";
         divTablechart3_Internalname = "TABLECHART3";
         Dvpanel_tablechart3_Internalname = "DVPANEL_TABLECHART3";
         Utchartsmoothline_Internalname = "UTCHARTSMOOTHLINE";
         divTablechart4_Internalname = "TABLECHART4";
         Dvpanel_tablechart4_Internalname = "DVPANEL_TABLECHART4";
         Utchartsmootharea_Internalname = "UTCHARTSMOOTHAREA";
         divTablechart1_Internalname = "TABLECHART1";
         Dvpanel_tablechart1_Internalname = "DVPANEL_TABLECHART1";
         edtavHomesampledata__productname_Internalname = "HOMESAMPLEDATA__PRODUCTNAME";
         edtavHomesampledata__productprice_Internalname = "HOMESAMPLEDATA__PRODUCTPRICE";
         cmbavHomesampledata__productstatus_Internalname = "HOMESAMPLEDATA__PRODUCTSTATUS";
         divTablemain_Internalname = "TABLEMAIN";
         divLayoutmaintable_Internalname = "LAYOUTMAINTABLE";
         Form.Internalname = "FORM";
         subGrid_Internalname = "GRID";
      }

      public override void initialize_properties( )
      {
         context.SetDefaultTheme("WorkWithPlusTheme");
         if ( context.isSpaRequest( ) )
         {
            disableJsOutput();
         }
         init_default_properties( ) ;
         cmbavHomesampledata__productstatus_Jsonclick = "";
         edtavHomesampledata__productprice_Jsonclick = "";
         edtavHomesampledata__productname_Jsonclick = "";
         cmbavHomesampledata__productstatus.Enabled = -1;
         edtavHomesampledata__productprice_Enabled = -1;
         edtavHomesampledata__productname_Enabled = -1;
         subGrid_Allowcollapsing = 0;
         subGrid_Allowselection = 0;
         cmbavHomesampledata__productstatus_Columnclass = "WWColumn";
         subGrid_Header = "";
         cmbavHomesampledata__productstatus.Enabled = 0;
         edtavHomesampledata__productprice_Enabled = 0;
         edtavHomesampledata__productname_Enabled = 0;
         subGrid_Class = "GridNoBorder WorkWith";
         subGrid_Backcolorstyle = 0;
         Utchartsmootharea_Title = "";
         divTablechart1_Height = 0;
         Utchartsmoothline_Title = "";
         divTablechart4_Height = 0;
         Utchartdoughnut_Title = "";
         divTablechart3_Height = 0;
         edtavValuecard4_Jsonclick = "";
         edtavValuecard4_Enabled = 1;
         edtavValuecard3_Jsonclick = "";
         edtavValuecard3_Enabled = 1;
         edtavValuecard2_Jsonclick = "";
         edtavValuecard2_Enabled = 1;
         edtavValuecard1_Jsonclick = "";
         edtavValuecard1_Enabled = 1;
         Dvpanel_tablechart1_Autoscroll = Convert.ToBoolean( 0);
         Dvpanel_tablechart1_Iconposition = "Right";
         Dvpanel_tablechart1_Showcollapseicon = Convert.ToBoolean( 0);
         Dvpanel_tablechart1_Collapsed = Convert.ToBoolean( 0);
         Dvpanel_tablechart1_Collapsible = Convert.ToBoolean( -1);
         Dvpanel_tablechart1_Title = "";
         Dvpanel_tablechart1_Cls = "PanelNoHeader";
         Dvpanel_tablechart1_Autoheight = Convert.ToBoolean( -1);
         Dvpanel_tablechart1_Autowidth = Convert.ToBoolean( 0);
         Dvpanel_tablechart1_Width = "100%";
         Utchartsmootharea_Charttype = "StackedArea";
         Utchartsmootharea_Type = "Chart";
         Dvpanel_tablechart4_Autoscroll = Convert.ToBoolean( 0);
         Dvpanel_tablechart4_Iconposition = "Right";
         Dvpanel_tablechart4_Showcollapseicon = Convert.ToBoolean( 0);
         Dvpanel_tablechart4_Collapsed = Convert.ToBoolean( 0);
         Dvpanel_tablechart4_Collapsible = Convert.ToBoolean( 0);
         Dvpanel_tablechart4_Title = "Task Board";
         Dvpanel_tablechart4_Cls = "PanelCard_GrayTitle";
         Dvpanel_tablechart4_Autoheight = Convert.ToBoolean( -1);
         Dvpanel_tablechart4_Autowidth = Convert.ToBoolean( 0);
         Dvpanel_tablechart4_Width = "100%";
         Utchartsmoothline_Charttype = "SmoothLine";
         Utchartsmoothline_Type = "Chart";
         Utchartsmoothline_Height = "450";
         Dvpanel_tablechart3_Autoscroll = Convert.ToBoolean( 0);
         Dvpanel_tablechart3_Iconposition = "Right";
         Dvpanel_tablechart3_Showcollapseicon = Convert.ToBoolean( 0);
         Dvpanel_tablechart3_Collapsed = Convert.ToBoolean( 0);
         Dvpanel_tablechart3_Collapsible = Convert.ToBoolean( -1);
         Dvpanel_tablechart3_Title = "Orders";
         Dvpanel_tablechart3_Cls = "PanelCard_GrayTitle";
         Dvpanel_tablechart3_Autoheight = Convert.ToBoolean( -1);
         Dvpanel_tablechart3_Autowidth = Convert.ToBoolean( 0);
         Dvpanel_tablechart3_Width = "100%";
         Utchartdoughnut_Showvalues = Convert.ToBoolean( 0);
         Utchartdoughnut_Charttype = "Doughnut";
         Utchartdoughnut_Type = "Chart";
         Utchartdoughnut_Height = "450";
         Utchartdoughnut_Width = "300";
         Dvpanel_card4_Autoscroll = Convert.ToBoolean( 0);
         Dvpanel_card4_Iconposition = "Right";
         Dvpanel_card4_Showcollapseicon = Convert.ToBoolean( 0);
         Dvpanel_card4_Collapsed = Convert.ToBoolean( 0);
         Dvpanel_card4_Collapsible = Convert.ToBoolean( 0);
         Dvpanel_card4_Title = "";
         Dvpanel_card4_Cls = "PanelNoHeader";
         Dvpanel_card4_Autoheight = Convert.ToBoolean( -1);
         Dvpanel_card4_Autowidth = Convert.ToBoolean( 0);
         Dvpanel_card4_Width = "100%";
         Ucprogress4_Circleprogresswidth = 5;
         Ucprogress4_Circlewidth = 80;
         Ucprogress4_Percentage = 60;
         Ucprogress4_Cls = "ProgressDanger";
         Ucprogress4_Caption = "60%";
         Dvpanel_card3_Autoscroll = Convert.ToBoolean( 0);
         Dvpanel_card3_Iconposition = "Right";
         Dvpanel_card3_Showcollapseicon = Convert.ToBoolean( 0);
         Dvpanel_card3_Collapsed = Convert.ToBoolean( 0);
         Dvpanel_card3_Collapsible = Convert.ToBoolean( 0);
         Dvpanel_card3_Title = "";
         Dvpanel_card3_Cls = "PanelNoHeader";
         Dvpanel_card3_Autoheight = Convert.ToBoolean( -1);
         Dvpanel_card3_Autowidth = Convert.ToBoolean( 0);
         Dvpanel_card3_Width = "100%";
         Ucprogress3_Circleprogresswidth = 5;
         Ucprogress3_Circlewidth = 80;
         Ucprogress3_Percentage = 40;
         Ucprogress3_Cls = "ProgressWarning";
         Ucprogress3_Caption = "40%";
         Dvpanel_card2_Autoscroll = Convert.ToBoolean( 0);
         Dvpanel_card2_Iconposition = "Right";
         Dvpanel_card2_Showcollapseicon = Convert.ToBoolean( 0);
         Dvpanel_card2_Collapsed = Convert.ToBoolean( 0);
         Dvpanel_card2_Collapsible = Convert.ToBoolean( 0);
         Dvpanel_card2_Title = "";
         Dvpanel_card2_Cls = "PanelNoHeader";
         Dvpanel_card2_Autoheight = Convert.ToBoolean( -1);
         Dvpanel_card2_Autowidth = Convert.ToBoolean( 0);
         Dvpanel_card2_Width = "100%";
         Ucprogress2_Circleprogresswidth = 5;
         Ucprogress2_Circlewidth = 80;
         Ucprogress2_Percentage = 30;
         Ucprogress2_Cls = "ProgressInfoLight";
         Ucprogress2_Caption = "30%";
         Dvpanel_card1_Autoscroll = Convert.ToBoolean( 0);
         Dvpanel_card1_Iconposition = "Right";
         Dvpanel_card1_Showcollapseicon = Convert.ToBoolean( 0);
         Dvpanel_card1_Collapsed = Convert.ToBoolean( 0);
         Dvpanel_card1_Collapsible = Convert.ToBoolean( 0);
         Dvpanel_card1_Title = "";
         Dvpanel_card1_Cls = "PanelNoHeader";
         Dvpanel_card1_Autoheight = Convert.ToBoolean( -1);
         Dvpanel_card1_Autowidth = Convert.ToBoolean( 0);
         Dvpanel_card1_Width = "100%";
         Ucprogress1_Circleprogresswidth = 5;
         Ucprogress1_Circlewidth = 80;
         Ucprogress1_Percentage = 20;
         Ucprogress1_Cls = "ProgressInfo";
         Ucprogress1_Caption = "20%";
         Form.Headerrawhtml = "";
         Form.Background = "";
         Form.Textcolor = 0;
         Form.Backcolor = (int)(0xFFFFFF);
         Form.Caption = "Inicio";
         subGrid_Rows = 0;
         if ( context.isSpaRequest( ) )
         {
            enableJsOutput();
         }
      }

      public override bool SupportAjaxEvent( )
      {
         return true ;
      }

      public override void InitializeDynEvents( )
      {
         setEventMetadata("REFRESH","{handler:'Refresh',iparms:[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'},{av:'AV5HomeSampleData',fld:'vHOMESAMPLEDATA',grid:98,pic:''},{av:'nRC_GXsfl_98',ctrl:'GRID',prop:'GridRC'}]");
         setEventMetadata("REFRESH",",oparms:[]}");
         setEventMetadata("GRID.LOAD","{handler:'E120C2',iparms:[{av:'AV5HomeSampleData',fld:'vHOMESAMPLEDATA',grid:98,pic:''},{av:'GRID_nFirstRecordOnPage'},{av:'nRC_GXsfl_98',ctrl:'GRID',prop:'GridRC'}]");
         setEventMetadata("GRID.LOAD",",oparms:[{ctrl:'HOMESAMPLEDATA__PRODUCTSTATUS',prop:'Columnclass'}]}");
         setEventMetadata("GRID_FIRSTPAGE","{handler:'subgrid_firstpage',iparms:[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'},{av:'AV5HomeSampleData',fld:'vHOMESAMPLEDATA',grid:98,pic:''},{av:'nRC_GXsfl_98',ctrl:'GRID',prop:'GridRC'}]");
         setEventMetadata("GRID_FIRSTPAGE",",oparms:[]}");
         setEventMetadata("GRID_PREVPAGE","{handler:'subgrid_previouspage',iparms:[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'},{av:'AV5HomeSampleData',fld:'vHOMESAMPLEDATA',grid:98,pic:''},{av:'nRC_GXsfl_98',ctrl:'GRID',prop:'GridRC'}]");
         setEventMetadata("GRID_PREVPAGE",",oparms:[]}");
         setEventMetadata("GRID_NEXTPAGE","{handler:'subgrid_nextpage',iparms:[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'},{av:'AV5HomeSampleData',fld:'vHOMESAMPLEDATA',grid:98,pic:''},{av:'nRC_GXsfl_98',ctrl:'GRID',prop:'GridRC'}]");
         setEventMetadata("GRID_NEXTPAGE",",oparms:[]}");
         setEventMetadata("GRID_LASTPAGE","{handler:'subgrid_lastpage',iparms:[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows',ctrl:'GRID',prop:'Rows'},{av:'AV5HomeSampleData',fld:'vHOMESAMPLEDATA',grid:98,pic:''},{av:'nRC_GXsfl_98',ctrl:'GRID',prop:'GridRC'}]");
         setEventMetadata("GRID_LASTPAGE",",oparms:[]}");
         setEventMetadata("NULL","{handler:'Validv_Gxv4',iparms:[]");
         setEventMetadata("NULL",",oparms:[]}");
         return  ;
      }

      public override void cleanup( )
      {
         flushBuffer();
         CloseOpenCursors();
         if ( IsMain )
         {
            context.CloseConnections() ;
         }
      }

      protected void CloseOpenCursors( )
      {
      }

      public override void initialize( )
      {
         gxfirstwebparm = "";
         gxfirstwebparm_bkp = "";
         AV5HomeSampleData = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem>( context, "HomeSampleDataItem", "MaxiPrueba");
         GXKey = "";
         sDynURL = "";
         FormProcess = "";
         bodyStyle = "";
         AV10Axes = new GXBaseCollection<SdtQueryViewerAxes_Axis>( context, "Axis", "MaxiPrueba");
         AV11Parameters = new GXBaseCollection<SdtQueryViewerParameters_Parameter>( context, "Parameter", "MaxiPrueba");
         AV12ItemClickData = new SdtQueryViewerItemClickData(context);
         AV13ItemDoubleClickData = new SdtQueryViewerItemDoubleClickData(context);
         AV14DragAndDropData = new SdtQueryViewerDragAndDropData(context);
         AV15FilterChangedData = new SdtQueryViewerFilterChangedData(context);
         AV16ItemExpandData = new SdtQueryViewerItemExpandData(context);
         AV17ItemCollapseData = new SdtQueryViewerItemCollapseData(context);
         GX_FocusControl = "";
         Form = new GXWebForm();
         sPrefix = "";
         ucDvpanel_card1 = new GXUserControl();
         TempTags = "";
         lblDescriptioncard1_Jsonclick = "";
         ucUcprogress1 = new GXUserControl();
         ucDvpanel_card2 = new GXUserControl();
         lblDescriptioncard2_Jsonclick = "";
         ucUcprogress2 = new GXUserControl();
         ucDvpanel_card3 = new GXUserControl();
         AV7ValueCard3 = "";
         lblDescriptioncard3_Jsonclick = "";
         ucUcprogress3 = new GXUserControl();
         ucDvpanel_card4 = new GXUserControl();
         lblDescriptioncard4_Jsonclick = "";
         ucUcprogress4 = new GXUserControl();
         ucDvpanel_tablechart3 = new GXUserControl();
         ucUtchartdoughnut = new GXUserControl();
         ucDvpanel_tablechart4 = new GXUserControl();
         ucUtchartsmoothline = new GXUserControl();
         ucDvpanel_tablechart1 = new GXUserControl();
         ucUtchartsmootharea = new GXUserControl();
         GridContainer = new GXWebGrid( context);
         sStyleString = "";
         subGrid_Linesclass = "";
         GridColumn = new GXWebColumn();
         sEvt = "";
         EvtGridId = "";
         EvtRowId = "";
         sEvtType = "";
         GXt_objcol_SdtHomeSampleData_HomeSampleDataItem1 = new GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem>( context, "HomeSampleDataItem", "MaxiPrueba");
         GridRow = new GXWebRow();
         BackMsgLst = new msglist();
         LclMsgLst = new msglist();
         ROClassString = "";
         GXCCtl = "";
         /* GeneXus formulas. */
         context.Gx_err = 0;
         edtavValuecard1_Enabled = 0;
         edtavValuecard2_Enabled = 0;
         edtavValuecard3_Enabled = 0;
         edtavValuecard4_Enabled = 0;
         edtavHomesampledata__productname_Enabled = 0;
         edtavHomesampledata__productprice_Enabled = 0;
         cmbavHomesampledata__productstatus.Enabled = 0;
      }

      private short nGotPars ;
      private short GxWebError ;
      private short GRID_nEOF ;
      private short initialized ;
      private short gxajaxcallmode ;
      private short nGXWrapped ;
      private short wbEnd ;
      private short wbStart ;
      private short subGrid_Backcolorstyle ;
      private short subGrid_Titlebackstyle ;
      private short subGrid_Allowselection ;
      private short subGrid_Allowhovering ;
      private short subGrid_Allowcollapsing ;
      private short subGrid_Collapsed ;
      private short nDonePA ;
      private short gxcookieaux ;
      private short subGrid_Backstyle ;
      private int nRC_GXsfl_98 ;
      private int nGXsfl_98_idx=1 ;
      private int subGrid_Rows ;
      private int Ucprogress1_Percentage ;
      private int Ucprogress1_Circlewidth ;
      private int Ucprogress1_Circleprogresswidth ;
      private int Ucprogress2_Percentage ;
      private int Ucprogress2_Circlewidth ;
      private int Ucprogress2_Circleprogresswidth ;
      private int Ucprogress3_Percentage ;
      private int Ucprogress3_Circlewidth ;
      private int Ucprogress3_Circleprogresswidth ;
      private int Ucprogress4_Percentage ;
      private int Ucprogress4_Circlewidth ;
      private int Ucprogress4_Circleprogresswidth ;
      private int AV9ValueCard1 ;
      private int edtavValuecard1_Enabled ;
      private int AV8ValueCard2 ;
      private int edtavValuecard2_Enabled ;
      private int edtavValuecard3_Enabled ;
      private int AV6ValueCard4 ;
      private int edtavValuecard4_Enabled ;
      private int divTablechart3_Height ;
      private int divTablechart4_Height ;
      private int divTablechart1_Height ;
      private int subGrid_Titlebackcolor ;
      private int subGrid_Allbackcolor ;
      private int edtavHomesampledata__productname_Enabled ;
      private int edtavHomesampledata__productprice_Enabled ;
      private int subGrid_Selectedindex ;
      private int subGrid_Selectioncolor ;
      private int subGrid_Hoveringcolor ;
      private int AV22GXV1 ;
      private int subGrid_Islastpage ;
      private int GRID_nGridOutOfScope ;
      private int nGXsfl_98_fel_idx=1 ;
      private int idxLst ;
      private int subGrid_Backcolor ;
      private long GRID_nFirstRecordOnPage ;
      private long GRID_nCurrentRecord ;
      private long GRID_nRecordCount ;
      private String gxfirstwebparm ;
      private String gxfirstwebparm_bkp ;
      private String sGXsfl_98_idx="0001" ;
      private String GXKey ;
      private String sDynURL ;
      private String FormProcess ;
      private String bodyStyle ;
      private String Ucprogress1_Caption ;
      private String Ucprogress1_Cls ;
      private String Dvpanel_card1_Width ;
      private String Dvpanel_card1_Cls ;
      private String Dvpanel_card1_Title ;
      private String Dvpanel_card1_Iconposition ;
      private String Ucprogress2_Caption ;
      private String Ucprogress2_Cls ;
      private String Dvpanel_card2_Width ;
      private String Dvpanel_card2_Cls ;
      private String Dvpanel_card2_Title ;
      private String Dvpanel_card2_Iconposition ;
      private String Ucprogress3_Caption ;
      private String Ucprogress3_Cls ;
      private String Dvpanel_card3_Width ;
      private String Dvpanel_card3_Cls ;
      private String Dvpanel_card3_Title ;
      private String Dvpanel_card3_Iconposition ;
      private String Ucprogress4_Caption ;
      private String Ucprogress4_Cls ;
      private String Dvpanel_card4_Width ;
      private String Dvpanel_card4_Cls ;
      private String Dvpanel_card4_Title ;
      private String Dvpanel_card4_Iconposition ;
      private String Utchartdoughnut_Width ;
      private String Utchartdoughnut_Height ;
      private String Utchartdoughnut_Type ;
      private String Utchartdoughnut_Charttype ;
      private String Dvpanel_tablechart3_Width ;
      private String Dvpanel_tablechart3_Cls ;
      private String Dvpanel_tablechart3_Title ;
      private String Dvpanel_tablechart3_Iconposition ;
      private String Utchartsmoothline_Height ;
      private String Utchartsmoothline_Type ;
      private String Utchartsmoothline_Charttype ;
      private String Dvpanel_tablechart4_Width ;
      private String Dvpanel_tablechart4_Cls ;
      private String Dvpanel_tablechart4_Title ;
      private String Dvpanel_tablechart4_Iconposition ;
      private String Utchartsmootharea_Type ;
      private String Utchartsmootharea_Charttype ;
      private String Dvpanel_tablechart1_Width ;
      private String Dvpanel_tablechart1_Cls ;
      private String Dvpanel_tablechart1_Title ;
      private String Dvpanel_tablechart1_Iconposition ;
      private String GX_FocusControl ;
      private String sPrefix ;
      private String divLayoutmaintable_Internalname ;
      private String divTablemain_Internalname ;
      private String divTablecards_Internalname ;
      private String Dvpanel_card1_Internalname ;
      private String divCard1_Internalname ;
      private String divUnnamedtable4_Internalname ;
      private String edtavValuecard1_Internalname ;
      private String TempTags ;
      private String edtavValuecard1_Jsonclick ;
      private String lblDescriptioncard1_Internalname ;
      private String lblDescriptioncard1_Jsonclick ;
      private String Ucprogress1_Internalname ;
      private String Dvpanel_card2_Internalname ;
      private String divCard2_Internalname ;
      private String divUnnamedtable3_Internalname ;
      private String edtavValuecard2_Internalname ;
      private String edtavValuecard2_Jsonclick ;
      private String lblDescriptioncard2_Internalname ;
      private String lblDescriptioncard2_Jsonclick ;
      private String Ucprogress2_Internalname ;
      private String Dvpanel_card3_Internalname ;
      private String divCard3_Internalname ;
      private String divUnnamedtable2_Internalname ;
      private String edtavValuecard3_Internalname ;
      private String edtavValuecard3_Jsonclick ;
      private String lblDescriptioncard3_Internalname ;
      private String lblDescriptioncard3_Jsonclick ;
      private String Ucprogress3_Internalname ;
      private String Dvpanel_card4_Internalname ;
      private String divCard4_Internalname ;
      private String divUnnamedtable1_Internalname ;
      private String edtavValuecard4_Internalname ;
      private String edtavValuecard4_Jsonclick ;
      private String lblDescriptioncard4_Internalname ;
      private String lblDescriptioncard4_Jsonclick ;
      private String Ucprogress4_Internalname ;
      private String Dvpanel_tablechart3_Internalname ;
      private String divTablechart3_Internalname ;
      private String Utchartdoughnut_Title ;
      private String Utchartdoughnut_Internalname ;
      private String Dvpanel_tablechart4_Internalname ;
      private String divTablechart4_Internalname ;
      private String Utchartsmoothline_Title ;
      private String Utchartsmoothline_Internalname ;
      private String Dvpanel_tablechart1_Internalname ;
      private String divTablechart1_Internalname ;
      private String Utchartsmootharea_Title ;
      private String Utchartsmootharea_Internalname ;
      private String sStyleString ;
      private String subGrid_Internalname ;
      private String subGrid_Class ;
      private String subGrid_Linesclass ;
      private String subGrid_Header ;
      private String cmbavHomesampledata__productstatus_Columnclass ;
      private String sEvt ;
      private String EvtGridId ;
      private String EvtRowId ;
      private String sEvtType ;
      private String edtavHomesampledata__productname_Internalname ;
      private String edtavHomesampledata__productprice_Internalname ;
      private String cmbavHomesampledata__productstatus_Internalname ;
      private String sGXsfl_98_fel_idx="0001" ;
      private String ROClassString ;
      private String edtavHomesampledata__productname_Jsonclick ;
      private String edtavHomesampledata__productprice_Jsonclick ;
      private String GXCCtl ;
      private String cmbavHomesampledata__productstatus_Jsonclick ;
      private bool entryPointCalled ;
      private bool toggleJsOutput ;
      private bool Dvpanel_card1_Autowidth ;
      private bool Dvpanel_card1_Autoheight ;
      private bool Dvpanel_card1_Collapsible ;
      private bool Dvpanel_card1_Collapsed ;
      private bool Dvpanel_card1_Showcollapseicon ;
      private bool Dvpanel_card1_Autoscroll ;
      private bool Dvpanel_card2_Autowidth ;
      private bool Dvpanel_card2_Autoheight ;
      private bool Dvpanel_card2_Collapsible ;
      private bool Dvpanel_card2_Collapsed ;
      private bool Dvpanel_card2_Showcollapseicon ;
      private bool Dvpanel_card2_Autoscroll ;
      private bool Dvpanel_card3_Autowidth ;
      private bool Dvpanel_card3_Autoheight ;
      private bool Dvpanel_card3_Collapsible ;
      private bool Dvpanel_card3_Collapsed ;
      private bool Dvpanel_card3_Showcollapseicon ;
      private bool Dvpanel_card3_Autoscroll ;
      private bool Dvpanel_card4_Autowidth ;
      private bool Dvpanel_card4_Autoheight ;
      private bool Dvpanel_card4_Collapsible ;
      private bool Dvpanel_card4_Collapsed ;
      private bool Dvpanel_card4_Showcollapseicon ;
      private bool Dvpanel_card4_Autoscroll ;
      private bool Utchartdoughnut_Showvalues ;
      private bool Dvpanel_tablechart3_Autowidth ;
      private bool Dvpanel_tablechart3_Autoheight ;
      private bool Dvpanel_tablechart3_Collapsible ;
      private bool Dvpanel_tablechart3_Collapsed ;
      private bool Dvpanel_tablechart3_Showcollapseicon ;
      private bool Dvpanel_tablechart3_Autoscroll ;
      private bool Dvpanel_tablechart4_Autowidth ;
      private bool Dvpanel_tablechart4_Autoheight ;
      private bool Dvpanel_tablechart4_Collapsible ;
      private bool Dvpanel_tablechart4_Collapsed ;
      private bool Dvpanel_tablechart4_Showcollapseicon ;
      private bool Dvpanel_tablechart4_Autoscroll ;
      private bool Dvpanel_tablechart1_Autowidth ;
      private bool Dvpanel_tablechart1_Autoheight ;
      private bool Dvpanel_tablechart1_Collapsible ;
      private bool Dvpanel_tablechart1_Collapsed ;
      private bool Dvpanel_tablechart1_Showcollapseicon ;
      private bool Dvpanel_tablechart1_Autoscroll ;
      private bool wbLoad ;
      private bool Rfr0gs ;
      private bool wbErr ;
      private bool bGXsfl_98_Refreshing=false ;
      private bool gxdyncontrolsrefreshing ;
      private bool returnInSub ;
      private bool gx_BV98 ;
      private String AV7ValueCard3 ;
      private GXWebGrid GridContainer ;
      private GXWebRow GridRow ;
      private GXWebColumn GridColumn ;
      private GXUserControl ucDvpanel_card1 ;
      private GXUserControl ucUcprogress1 ;
      private GXUserControl ucDvpanel_card2 ;
      private GXUserControl ucUcprogress2 ;
      private GXUserControl ucDvpanel_card3 ;
      private GXUserControl ucUcprogress3 ;
      private GXUserControl ucDvpanel_card4 ;
      private GXUserControl ucUcprogress4 ;
      private GXUserControl ucDvpanel_tablechart3 ;
      private GXUserControl ucUtchartdoughnut ;
      private GXUserControl ucDvpanel_tablechart4 ;
      private GXUserControl ucUtchartsmoothline ;
      private GXUserControl ucDvpanel_tablechart1 ;
      private GXUserControl ucUtchartsmootharea ;
      private IGxDataStore dsDefault ;
      private GXCombobox cmbavHomesampledata__productstatus ;
      private msglist BackMsgLst ;
      private msglist LclMsgLst ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem> AV5HomeSampleData ;
      private GXBaseCollection<GeneXus.Programs.wwpbaseobjects.SdtHomeSampleData_HomeSampleDataItem> GXt_objcol_SdtHomeSampleData_HomeSampleDataItem1 ;
      private GXBaseCollection<SdtQueryViewerAxes_Axis> AV10Axes ;
      private GXBaseCollection<SdtQueryViewerParameters_Parameter> AV11Parameters ;
      private GXWebForm Form ;
      private SdtQueryViewerItemClickData AV12ItemClickData ;
      private SdtQueryViewerItemDoubleClickData AV13ItemDoubleClickData ;
      private SdtQueryViewerDragAndDropData AV14DragAndDropData ;
      private SdtQueryViewerFilterChangedData AV15FilterChangedData ;
      private SdtQueryViewerItemExpandData AV16ItemExpandData ;
      private SdtQueryViewerItemCollapseData AV17ItemCollapseData ;
   }

}
