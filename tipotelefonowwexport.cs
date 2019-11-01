/*
               File: TipoTelefonoWWExport
        Description: Tipo Telefono WWExport
             Author: GeneXus C# Generator version 16_0_5-135614
       Generated on: 10/30/2019 18:44:5.1
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
using System.Data;
using GeneXus.Data;
using com.genexus;
using GeneXus.Data.ADO;
using GeneXus.Data.NTier;
using GeneXus.Data.NTier.ADO;
using GeneXus.WebControls;
using GeneXus.Http;
using GeneXus.Procedure;
using GeneXus.XML;
using GeneXus.Office;
using GeneXus.Search;
using GeneXus.Encryption;
using GeneXus.Http.Client;
using System.Threading;
using System.Xml.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.Runtime.Serialization;
namespace GeneXus.Programs {
   public class tipotelefonowwexport : GXProcedure
   {
      public tipotelefonowwexport( )
      {
         context = new GxContext(  );
         DataStoreUtil.LoadDataStores( context);
         dsDefault = context.GetDataStore("Default");
         IsMain = true;
         context.SetDefaultTheme("WorkWithPlusTheme");
      }

      public tipotelefonowwexport( IGxContext context )
      {
         this.context = context;
         IsMain = false;
         dsDefault = context.GetDataStore("Default");
      }

      public void release( )
      {
      }

      public void execute( out String aP0_Filename ,
                           out String aP1_ErrorMessage )
      {
         this.AV11Filename = "" ;
         this.AV12ErrorMessage = "" ;
         initialize();
         executePrivate();
         aP0_Filename=this.AV11Filename;
         aP1_ErrorMessage=this.AV12ErrorMessage;
      }

      public String executeUdp( out String aP0_Filename )
      {
         this.AV11Filename = "" ;
         this.AV12ErrorMessage = "" ;
         initialize();
         executePrivate();
         aP0_Filename=this.AV11Filename;
         aP1_ErrorMessage=this.AV12ErrorMessage;
         return AV12ErrorMessage ;
      }

      public void executeSubmit( out String aP0_Filename ,
                                 out String aP1_ErrorMessage )
      {
         tipotelefonowwexport objtipotelefonowwexport;
         objtipotelefonowwexport = new tipotelefonowwexport();
         objtipotelefonowwexport.AV11Filename = "" ;
         objtipotelefonowwexport.AV12ErrorMessage = "" ;
         objtipotelefonowwexport.context.SetSubmitInitialConfig(context);
         objtipotelefonowwexport.initialize();
         ThreadPool.QueueUserWorkItem( PropagateCulture(new WaitCallback( executePrivateCatch )),objtipotelefonowwexport);
         aP0_Filename=this.AV11Filename;
         aP1_ErrorMessage=this.AV12ErrorMessage;
      }

      void executePrivateCatch( object stateInfo )
      {
         try
         {
            ((tipotelefonowwexport)stateInfo).executePrivate();
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
         new GeneXus.Programs.wwpbaseobjects.loadwwpcontext(context ).execute( out  AV9WWPContext) ;
         /* Execute user subroutine: 'OPENDOCUMENT' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         AV13CellRow = 1;
         AV14FirstColumn = 1;
         /* Execute user subroutine: 'LOADGRIDSTATE' */
         S201 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         /* Execute user subroutine: 'WRITEFILTERS' */
         S131 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         /* Execute user subroutine: 'WRITECOLUMNTITLES' */
         S141 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         /* Execute user subroutine: 'WRITEDATA' */
         S161 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         /* Execute user subroutine: 'CLOSEDOCUMENT' */
         S191 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         this.cleanup();
      }

      protected void S111( )
      {
         /* 'OPENDOCUMENT' Routine */
         AV15Random = (int)(NumberUtil.Random( )*10000);
         AV11Filename = "TipoTelefonoWWExport-" + StringUtil.Trim( StringUtil.Str( (decimal)(AV15Random), 8, 0)) + ".xlsx";
         AV10ExcelDocument.Open(AV11Filename);
         /* Execute user subroutine: 'CHECKSTATUS' */
         S121 ();
         if (returnInSub) return;
         AV10ExcelDocument.Clear();
      }

      protected void S131( )
      {
         /* 'WRITEFILTERS' Routine */
         if ( ! ( String.IsNullOrEmpty(StringUtil.RTrim( AV18FilterFullText)) ) )
         {
            AV13CellRow = (int)(AV13CellRow+1);
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn+0, 1, 1).Bold = 1;
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn+0, 1, 1).Color = 3;
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn+0, 1, 1).Text = "Filter";
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn+1, 1, 1).Italic = 1;
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn+1, 1, 1).Text = AV18FilterFullText;
         }
         if ( ! ( (0==AV33TFTipTelId) && (0==AV34TFTipTelId_To) ) )
         {
            AV13CellRow = (int)(AV13CellRow+1);
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn, 1, 1).Bold = 1;
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn, 1, 1).Color = 3;
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn, 1, 1).Text = "Tel Id";
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn+1, 1, 1).Italic = 1;
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn+1, 1, 1).Number = AV33TFTipTelId;
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn+2, 1, 1).Bold = 1;
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn+2, 1, 1).Color = 3;
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn+2, 1, 1).Text = "Hasta";
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn+3, 1, 1).Italic = 1;
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn+3, 1, 1).Number = AV34TFTipTelId_To;
         }
         if ( ! ( (0==AV35TFTipTelNom) && (0==AV36TFTipTelNom_To) ) )
         {
            AV13CellRow = (int)(AV13CellRow+1);
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn, 1, 1).Bold = 1;
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn, 1, 1).Color = 3;
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn, 1, 1).Text = "Tel Nom";
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn+1, 1, 1).Italic = 1;
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn+1, 1, 1).Number = AV35TFTipTelNom;
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn+2, 1, 1).Bold = 1;
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn+2, 1, 1).Color = 3;
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn+2, 1, 1).Text = "Hasta";
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn+3, 1, 1).Italic = 1;
            AV10ExcelDocument.get_Cells(AV13CellRow, AV14FirstColumn+3, 1, 1).Number = AV36TFTipTelNom_To;
         }
         AV13CellRow = (int)(AV13CellRow+2);
      }

      protected void S141( )
      {
         /* 'WRITECOLUMNTITLES' Routine */
         AV30VisibleColumnCount = 0;
         if ( StringUtil.StrCmp(AV19Session.Get("TipoTelefonoWWColumnsSelector"), "") != 0 )
         {
            AV25ColumnsSelectorXML = AV19Session.Get("TipoTelefonoWWColumnsSelector");
            AV23ColumnsSelector.FromXml(AV25ColumnsSelectorXML, null, "WWPColumnsSelector", "MaxiPrueba");
         }
         else
         {
            /* Execute user subroutine: 'INITIALIZECOLUMNSSELECTOR' */
            S151 ();
            if (returnInSub) return;
         }
         if ( ((GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector_Column)AV23ColumnsSelector.gxTpr_Columns.Item(1)).gxTpr_Isvisible )
         {
            AV10ExcelDocument.get_Cells(AV13CellRow, (int)(AV14FirstColumn+AV30VisibleColumnCount), 1, 1).Text = "Tel Id";
            AV30VisibleColumnCount = (long)(AV30VisibleColumnCount+1);
         }
         if ( ((GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector_Column)AV23ColumnsSelector.gxTpr_Columns.Item(2)).gxTpr_Isvisible )
         {
            AV10ExcelDocument.get_Cells(AV13CellRow, (int)(AV14FirstColumn+AV30VisibleColumnCount), 1, 1).Text = "Tel Nom";
            AV30VisibleColumnCount = (long)(AV30VisibleColumnCount+1);
         }
         AV37i = 1;
         while ( AV37i <= AV30VisibleColumnCount )
         {
            AV10ExcelDocument.get_Cells(AV13CellRow, (int)(AV14FirstColumn+AV37i-1), 1, 1).Bold = 1;
            AV10ExcelDocument.get_Cells(AV13CellRow, (int)(AV14FirstColumn+AV37i-1), 1, 1).Color = 11;
            AV37i = (long)(AV37i+1);
         }
      }

      protected void S161( )
      {
         /* 'WRITEDATA' Routine */
         AV41TipoTelefonoWWDS_1_Filterfulltext = AV18FilterFullText;
         AV42TipoTelefonoWWDS_2_Tftiptelid = AV33TFTipTelId;
         AV43TipoTelefonoWWDS_3_Tftiptelid_to = AV34TFTipTelId_To;
         AV44TipoTelefonoWWDS_4_Tftiptelnom = AV35TFTipTelNom;
         AV45TipoTelefonoWWDS_5_Tftiptelnom_to = AV36TFTipTelNom_To;
         pr_default.dynParam(0, new Object[]{ new Object[]{
                                              AV41TipoTelefonoWWDS_1_Filterfulltext ,
                                              AV42TipoTelefonoWWDS_2_Tftiptelid ,
                                              AV43TipoTelefonoWWDS_3_Tftiptelid_to ,
                                              AV44TipoTelefonoWWDS_4_Tftiptelnom ,
                                              AV45TipoTelefonoWWDS_5_Tftiptelnom_to ,
                                              A1TipTelId ,
                                              A3TipTelNom ,
                                              AV16OrderedBy ,
                                              AV17OrderedDsc } ,
                                              new int[]{
                                              TypeConstants.STRING, TypeConstants.INT, TypeConstants.INT, TypeConstants.SHORT, TypeConstants.SHORT, TypeConstants.INT, TypeConstants.SHORT, TypeConstants.SHORT, TypeConstants.BOOLEAN
                                              }
         } ) ;
         lV41TipoTelefonoWWDS_1_Filterfulltext = StringUtil.Concat( StringUtil.RTrim( AV41TipoTelefonoWWDS_1_Filterfulltext), "%", "");
         lV41TipoTelefonoWWDS_1_Filterfulltext = StringUtil.Concat( StringUtil.RTrim( AV41TipoTelefonoWWDS_1_Filterfulltext), "%", "");
         /* Using cursor P000X2 */
         pr_default.execute(0, new Object[] {lV41TipoTelefonoWWDS_1_Filterfulltext, lV41TipoTelefonoWWDS_1_Filterfulltext, AV42TipoTelefonoWWDS_2_Tftiptelid, AV43TipoTelefonoWWDS_3_Tftiptelid_to, AV44TipoTelefonoWWDS_4_Tftiptelnom, AV45TipoTelefonoWWDS_5_Tftiptelnom_to});
         while ( (pr_default.getStatus(0) != 101) )
         {
            A3TipTelNom = P000X2_A3TipTelNom[0];
            A1TipTelId = P000X2_A1TipTelId[0];
            AV13CellRow = (int)(AV13CellRow+1);
            /* Execute user subroutine: 'BEFOREWRITELINE' */
            S172 ();
            if ( returnInSub )
            {
               pr_default.close(0);
               returnInSub = true;
               if (true) return;
            }
            AV30VisibleColumnCount = 0;
            if ( ((GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector_Column)AV23ColumnsSelector.gxTpr_Columns.Item(1)).gxTpr_Isvisible )
            {
               AV10ExcelDocument.get_Cells(AV13CellRow, (int)(AV14FirstColumn+AV30VisibleColumnCount), 1, 1).Number = A1TipTelId;
               AV30VisibleColumnCount = (long)(AV30VisibleColumnCount+1);
            }
            if ( ((GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector_Column)AV23ColumnsSelector.gxTpr_Columns.Item(2)).gxTpr_Isvisible )
            {
               AV10ExcelDocument.get_Cells(AV13CellRow, (int)(AV14FirstColumn+AV30VisibleColumnCount), 1, 1).Number = A3TipTelNom;
               AV30VisibleColumnCount = (long)(AV30VisibleColumnCount+1);
            }
            /* Execute user subroutine: 'AFTERWRITELINE' */
            S182 ();
            if ( returnInSub )
            {
               pr_default.close(0);
               returnInSub = true;
               if (true) return;
            }
            pr_default.readNext(0);
         }
         pr_default.close(0);
      }

      protected void S191( )
      {
         /* 'CLOSEDOCUMENT' Routine */
         AV10ExcelDocument.Save();
         /* Execute user subroutine: 'CHECKSTATUS' */
         S121 ();
         if (returnInSub) return;
         AV10ExcelDocument.Close();
      }

      protected void S121( )
      {
         /* 'CHECKSTATUS' Routine */
         if ( AV10ExcelDocument.ErrCode != 0 )
         {
            AV11Filename = "";
            AV12ErrorMessage = AV10ExcelDocument.ErrDescription;
            AV10ExcelDocument.Close();
            returnInSub = true;
            if (true) return;
         }
      }

      protected void S151( )
      {
         /* 'INITIALIZECOLUMNSSELECTOR' Routine */
         AV23ColumnsSelector = new GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector(context);
         new GeneXus.Programs.wwpbaseobjects.wwp_columnsselector_add(context ).execute( ref  AV23ColumnsSelector,  "Tel Id",  true) ;
         new GeneXus.Programs.wwpbaseobjects.wwp_columnsselector_add(context ).execute( ref  AV23ColumnsSelector,  "Tel Nom",  true) ;
         GXt_char1 = AV26UserCustomValue;
         new GeneXus.Programs.wwpbaseobjects.loadcolumnsselectorstate(context ).execute(  "TipoTelefonoWWColumnsSelector", out  GXt_char1) ;
         AV26UserCustomValue = GXt_char1;
         if ( ! ( String.IsNullOrEmpty(StringUtil.RTrim( AV26UserCustomValue)) ) )
         {
            AV24ColumnsSelectorAux.FromXml(AV26UserCustomValue, null, "WWPColumnsSelector", "MaxiPrueba");
            new GeneXus.Programs.wwpbaseobjects.wwp_columnselector_updatecolumns(context ).execute( ref  AV24ColumnsSelectorAux, ref  AV23ColumnsSelector) ;
         }
      }

      protected void S201( )
      {
         /* 'LOADGRIDSTATE' Routine */
         if ( StringUtil.StrCmp(AV19Session.Get("TipoTelefonoWWGridState"), "") == 0 )
         {
            AV21GridState.FromXml(new GeneXus.Programs.wwpbaseobjects.loadgridstate(context).executeUdp(  "TipoTelefonoWWGridState"), null, "WWPGridState", "MaxiPrueba");
         }
         else
         {
            AV21GridState.FromXml(AV19Session.Get("TipoTelefonoWWGridState"), null, "WWPGridState", "MaxiPrueba");
         }
         AV16OrderedBy = AV21GridState.gxTpr_Orderedby;
         AV17OrderedDsc = AV21GridState.gxTpr_Ordereddsc;
         AV46GXV1 = 1;
         while ( AV46GXV1 <= AV21GridState.gxTpr_Filtervalues.Count )
         {
            AV22GridStateFilterValue = ((GeneXus.Programs.wwpbaseobjects.SdtWWPGridState_FilterValue)AV21GridState.gxTpr_Filtervalues.Item(AV46GXV1));
            if ( StringUtil.StrCmp(AV22GridStateFilterValue.gxTpr_Name, "FILTERFULLTEXT") == 0 )
            {
               AV18FilterFullText = AV22GridStateFilterValue.gxTpr_Value;
            }
            else if ( StringUtil.StrCmp(AV22GridStateFilterValue.gxTpr_Name, "TFTIPTELID") == 0 )
            {
               AV33TFTipTelId = (int)(NumberUtil.Val( AV22GridStateFilterValue.gxTpr_Value, "."));
               AV34TFTipTelId_To = (int)(NumberUtil.Val( AV22GridStateFilterValue.gxTpr_Valueto, "."));
            }
            else if ( StringUtil.StrCmp(AV22GridStateFilterValue.gxTpr_Name, "TFTIPTELNOM") == 0 )
            {
               AV35TFTipTelNom = (short)(NumberUtil.Val( AV22GridStateFilterValue.gxTpr_Value, "."));
               AV36TFTipTelNom_To = (short)(NumberUtil.Val( AV22GridStateFilterValue.gxTpr_Valueto, "."));
            }
            AV46GXV1 = (int)(AV46GXV1+1);
         }
      }

      protected void S172( )
      {
         /* 'BEFOREWRITELINE' Routine */
      }

      protected void S182( )
      {
         /* 'AFTERWRITELINE' Routine */
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
         AV10ExcelDocument = new ExcelDocumentI();
         AV18FilterFullText = "";
         AV19Session = context.GetSession();
         AV25ColumnsSelectorXML = "";
         AV23ColumnsSelector = new GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector(context);
         AV41TipoTelefonoWWDS_1_Filterfulltext = "";
         scmdbuf = "";
         lV41TipoTelefonoWWDS_1_Filterfulltext = "";
         P000X2_A3TipTelNom = new short[1] ;
         P000X2_A1TipTelId = new int[1] ;
         AV26UserCustomValue = "";
         GXt_char1 = "";
         AV24ColumnsSelectorAux = new GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector(context);
         AV21GridState = new GeneXus.Programs.wwpbaseobjects.SdtWWPGridState(context);
         AV22GridStateFilterValue = new GeneXus.Programs.wwpbaseobjects.SdtWWPGridState_FilterValue(context);
         pr_default = new DataStoreProvider(context, new GeneXus.Programs.tipotelefonowwexport__default(),
            new Object[][] {
                new Object[] {
               P000X2_A3TipTelNom, P000X2_A1TipTelId
               }
            }
         );
         /* GeneXus formulas. */
         context.Gx_err = 0;
      }

      private short AV35TFTipTelNom ;
      private short AV36TFTipTelNom_To ;
      private short AV44TipoTelefonoWWDS_4_Tftiptelnom ;
      private short AV45TipoTelefonoWWDS_5_Tftiptelnom_to ;
      private short A3TipTelNom ;
      private short AV16OrderedBy ;
      private int AV13CellRow ;
      private int AV14FirstColumn ;
      private int AV15Random ;
      private int AV33TFTipTelId ;
      private int AV34TFTipTelId_To ;
      private int AV42TipoTelefonoWWDS_2_Tftiptelid ;
      private int AV43TipoTelefonoWWDS_3_Tftiptelid_to ;
      private int A1TipTelId ;
      private int AV46GXV1 ;
      private long AV30VisibleColumnCount ;
      private long AV37i ;
      private String scmdbuf ;
      private String GXt_char1 ;
      private bool returnInSub ;
      private bool AV17OrderedDsc ;
      private String AV25ColumnsSelectorXML ;
      private String AV26UserCustomValue ;
      private String AV12ErrorMessage ;
      private String AV11Filename ;
      private String AV18FilterFullText ;
      private String AV41TipoTelefonoWWDS_1_Filterfulltext ;
      private String lV41TipoTelefonoWWDS_1_Filterfulltext ;
      private IGxSession AV19Session ;
      private IGxDataStore dsDefault ;
      private IDataStoreProvider pr_default ;
      private short[] P000X2_A3TipTelNom ;
      private int[] P000X2_A1TipTelId ;
      private String aP0_Filename ;
      private String aP1_ErrorMessage ;
      private ExcelDocumentI AV10ExcelDocument ;
      private GeneXus.Programs.wwpbaseobjects.SdtWWPContext AV9WWPContext ;
      private GeneXus.Programs.wwpbaseobjects.SdtWWPGridState AV21GridState ;
      private GeneXus.Programs.wwpbaseobjects.SdtWWPGridState_FilterValue AV22GridStateFilterValue ;
      private GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector AV23ColumnsSelector ;
      private GeneXus.Programs.wwpbaseobjects.SdtWWPColumnsSelector AV24ColumnsSelectorAux ;
   }

   public class tipotelefonowwexport__default : DataStoreHelperBase, IDataStoreHelper
   {
      protected Object[] conditional_P000X2( IGxContext context ,
                                             String AV41TipoTelefonoWWDS_1_Filterfulltext ,
                                             int AV42TipoTelefonoWWDS_2_Tftiptelid ,
                                             int AV43TipoTelefonoWWDS_3_Tftiptelid_to ,
                                             short AV44TipoTelefonoWWDS_4_Tftiptelnom ,
                                             short AV45TipoTelefonoWWDS_5_Tftiptelnom_to ,
                                             int A1TipTelId ,
                                             short A3TipTelNom ,
                                             short AV16OrderedBy ,
                                             bool AV17OrderedDsc )
      {
         String sWhereString = "" ;
         String scmdbuf ;
         short[] GXv_int2 ;
         GXv_int2 = new short [6] ;
         Object[] GXv_Object3 ;
         GXv_Object3 = new Object [2] ;
         scmdbuf = "SELECT [TipTelNom], [TipTelId] FROM [TipoTelefono]";
         if ( ! String.IsNullOrEmpty(StringUtil.RTrim( AV41TipoTelefonoWWDS_1_Filterfulltext)) )
         {
            if ( StringUtil.StrCmp("", sWhereString) != 0 )
            {
               sWhereString = sWhereString + " and (( CONVERT( char(9), CAST([TipTelId] AS decimal(9,0))) like '%' + @lV41TipoTelefonoWWDS_1_Filterfulltext) or ( CONVERT( char(4), CAST([TipTelNom] AS decimal(4,0))) like '%' + @lV41TipoTelefonoWWDS_1_Filterfulltext))";
            }
            else
            {
               sWhereString = sWhereString + " (( CONVERT( char(9), CAST([TipTelId] AS decimal(9,0))) like '%' + @lV41TipoTelefonoWWDS_1_Filterfulltext) or ( CONVERT( char(4), CAST([TipTelNom] AS decimal(4,0))) like '%' + @lV41TipoTelefonoWWDS_1_Filterfulltext))";
            }
         }
         else
         {
            GXv_int2[0] = 1;
            GXv_int2[1] = 1;
         }
         if ( ! (0==AV42TipoTelefonoWWDS_2_Tftiptelid) )
         {
            if ( StringUtil.StrCmp("", sWhereString) != 0 )
            {
               sWhereString = sWhereString + " and ([TipTelId] >= @AV42TipoTelefonoWWDS_2_Tftiptelid)";
            }
            else
            {
               sWhereString = sWhereString + " ([TipTelId] >= @AV42TipoTelefonoWWDS_2_Tftiptelid)";
            }
         }
         else
         {
            GXv_int2[2] = 1;
         }
         if ( ! (0==AV43TipoTelefonoWWDS_3_Tftiptelid_to) )
         {
            if ( StringUtil.StrCmp("", sWhereString) != 0 )
            {
               sWhereString = sWhereString + " and ([TipTelId] <= @AV43TipoTelefonoWWDS_3_Tftiptelid_to)";
            }
            else
            {
               sWhereString = sWhereString + " ([TipTelId] <= @AV43TipoTelefonoWWDS_3_Tftiptelid_to)";
            }
         }
         else
         {
            GXv_int2[3] = 1;
         }
         if ( ! (0==AV44TipoTelefonoWWDS_4_Tftiptelnom) )
         {
            if ( StringUtil.StrCmp("", sWhereString) != 0 )
            {
               sWhereString = sWhereString + " and ([TipTelNom] >= @AV44TipoTelefonoWWDS_4_Tftiptelnom)";
            }
            else
            {
               sWhereString = sWhereString + " ([TipTelNom] >= @AV44TipoTelefonoWWDS_4_Tftiptelnom)";
            }
         }
         else
         {
            GXv_int2[4] = 1;
         }
         if ( ! (0==AV45TipoTelefonoWWDS_5_Tftiptelnom_to) )
         {
            if ( StringUtil.StrCmp("", sWhereString) != 0 )
            {
               sWhereString = sWhereString + " and ([TipTelNom] <= @AV45TipoTelefonoWWDS_5_Tftiptelnom_to)";
            }
            else
            {
               sWhereString = sWhereString + " ([TipTelNom] <= @AV45TipoTelefonoWWDS_5_Tftiptelnom_to)";
            }
         }
         else
         {
            GXv_int2[5] = 1;
         }
         if ( StringUtil.StrCmp("", sWhereString) != 0 )
         {
            scmdbuf = scmdbuf + " WHERE" + sWhereString;
         }
         if ( ( AV16OrderedBy == 1 ) && ! AV17OrderedDsc )
         {
            scmdbuf = scmdbuf + " ORDER BY [TipTelNom]";
         }
         else if ( ( AV16OrderedBy == 1 ) && ( AV17OrderedDsc ) )
         {
            scmdbuf = scmdbuf + " ORDER BY [TipTelNom] DESC";
         }
         else if ( ( AV16OrderedBy == 2 ) && ! AV17OrderedDsc )
         {
            scmdbuf = scmdbuf + " ORDER BY [TipTelId]";
         }
         else if ( ( AV16OrderedBy == 2 ) && ( AV17OrderedDsc ) )
         {
            scmdbuf = scmdbuf + " ORDER BY [TipTelId] DESC";
         }
         GXv_Object3[0] = scmdbuf;
         GXv_Object3[1] = GXv_int2;
         return GXv_Object3 ;
      }

      public override Object [] getDynamicStatement( int cursor ,
                                                     IGxContext context ,
                                                     Object [] dynConstraints )
      {
         switch ( cursor )
         {
               case 0 :
                     return conditional_P000X2(context, (String)dynConstraints[0] , (int)dynConstraints[1] , (int)dynConstraints[2] , (short)dynConstraints[3] , (short)dynConstraints[4] , (int)dynConstraints[5] , (short)dynConstraints[6] , (short)dynConstraints[7] , (bool)dynConstraints[8] );
         }
         return base.getDynamicStatement(cursor, context, dynConstraints);
      }

      public ICursor[] getCursors( )
      {
         cursorDefinitions();
         return new Cursor[] {
          new ForEachCursor(def[0])
       };
    }

    private static CursorDef[] def;
    private void cursorDefinitions( )
    {
       if ( def == null )
       {
          Object[] prmP000X2 ;
          prmP000X2 = new Object[] {
          new Object[] {"@lV41TipoTelefonoWWDS_1_Filterfulltext",SqlDbType.NVarChar,100,0} ,
          new Object[] {"@lV41TipoTelefonoWWDS_1_Filterfulltext",SqlDbType.NVarChar,100,0} ,
          new Object[] {"@AV42TipoTelefonoWWDS_2_Tftiptelid",SqlDbType.Int,9,0} ,
          new Object[] {"@AV43TipoTelefonoWWDS_3_Tftiptelid_to",SqlDbType.Int,9,0} ,
          new Object[] {"@AV44TipoTelefonoWWDS_4_Tftiptelnom",SqlDbType.SmallInt,4,0} ,
          new Object[] {"@AV45TipoTelefonoWWDS_5_Tftiptelnom_to",SqlDbType.SmallInt,4,0}
          } ;
          def= new CursorDef[] {
              new CursorDef("P000X2", "scmdbuf",false, GxErrorMask.GX_NOMASK | GxErrorMask.GX_MASKLOOPLOCK, false, this,prmP000X2,100, GxCacheFrequency.OFF ,true,false )
          };
       }
    }

    public void getResults( int cursor ,
                            IFieldGetter rslt ,
                            Object[] buf )
    {
       switch ( cursor )
       {
             case 0 :
                ((short[]) buf[0])[0] = rslt.getShort(1) ;
                ((int[]) buf[1])[0] = rslt.getInt(2) ;
                return;
       }
    }

    public void setParameters( int cursor ,
                               IFieldSetter stmt ,
                               Object[] parms )
    {
       short sIdx ;
       switch ( cursor )
       {
             case 0 :
                sIdx = 0;
                if ( (short)parms[0] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (String)parms[6]);
                }
                if ( (short)parms[1] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (String)parms[7]);
                }
                if ( (short)parms[2] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (int)parms[8]);
                }
                if ( (short)parms[3] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (int)parms[9]);
                }
                if ( (short)parms[4] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (short)parms[10]);
                }
                if ( (short)parms[5] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (short)parms[11]);
                }
                return;
       }
    }

 }

}
