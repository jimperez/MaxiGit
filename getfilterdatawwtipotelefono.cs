/*
               File: GetFilterDataWWTipoTelefono
        Description: Get Filter Data WWTipo Telefono
             Author: GeneXus C# Generator version 16_0_5-135614
       Generated on: 10/30/2019 19:14:5.87
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
using GeneXus.Search;
using GeneXus.Encryption;
using GeneXus.Http.Client;
using System.Threading;
using System.Xml.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using System.Runtime.Serialization;
namespace GeneXus.Programs {
   public class getfilterdatawwtipotelefono : GXProcedure
   {
      public getfilterdatawwtipotelefono( )
      {
         context = new GxContext(  );
         DataStoreUtil.LoadDataStores( context);
         dsDefault = context.GetDataStore("Default");
         IsMain = true;
         context.SetDefaultTheme("WorkWithPlusTheme");
      }

      public getfilterdatawwtipotelefono( IGxContext context )
      {
         this.context = context;
         IsMain = false;
         dsDefault = context.GetDataStore("Default");
      }

      public void release( )
      {
      }

      public void execute( String aP0_DDOName ,
                           String aP1_SearchTxt ,
                           String aP2_SearchTxtTo ,
                           out String aP3_OptionsJson ,
                           out String aP4_OptionsDescJson ,
                           out String aP5_OptionIndexesJson )
      {
         this.AV16DDOName = aP0_DDOName;
         this.AV14SearchTxt = aP1_SearchTxt;
         this.AV15SearchTxtTo = aP2_SearchTxtTo;
         this.AV20OptionsJson = "" ;
         this.AV23OptionsDescJson = "" ;
         this.AV25OptionIndexesJson = "" ;
         initialize();
         executePrivate();
         aP3_OptionsJson=this.AV20OptionsJson;
         aP4_OptionsDescJson=this.AV23OptionsDescJson;
         aP5_OptionIndexesJson=this.AV25OptionIndexesJson;
      }

      public String executeUdp( String aP0_DDOName ,
                                String aP1_SearchTxt ,
                                String aP2_SearchTxtTo ,
                                out String aP3_OptionsJson ,
                                out String aP4_OptionsDescJson )
      {
         this.AV16DDOName = aP0_DDOName;
         this.AV14SearchTxt = aP1_SearchTxt;
         this.AV15SearchTxtTo = aP2_SearchTxtTo;
         this.AV20OptionsJson = "" ;
         this.AV23OptionsDescJson = "" ;
         this.AV25OptionIndexesJson = "" ;
         initialize();
         executePrivate();
         aP3_OptionsJson=this.AV20OptionsJson;
         aP4_OptionsDescJson=this.AV23OptionsDescJson;
         aP5_OptionIndexesJson=this.AV25OptionIndexesJson;
         return AV25OptionIndexesJson ;
      }

      public void executeSubmit( String aP0_DDOName ,
                                 String aP1_SearchTxt ,
                                 String aP2_SearchTxtTo ,
                                 out String aP3_OptionsJson ,
                                 out String aP4_OptionsDescJson ,
                                 out String aP5_OptionIndexesJson )
      {
         getfilterdatawwtipotelefono objgetfilterdatawwtipotelefono;
         objgetfilterdatawwtipotelefono = new getfilterdatawwtipotelefono();
         objgetfilterdatawwtipotelefono.AV16DDOName = aP0_DDOName;
         objgetfilterdatawwtipotelefono.AV14SearchTxt = aP1_SearchTxt;
         objgetfilterdatawwtipotelefono.AV15SearchTxtTo = aP2_SearchTxtTo;
         objgetfilterdatawwtipotelefono.AV20OptionsJson = "" ;
         objgetfilterdatawwtipotelefono.AV23OptionsDescJson = "" ;
         objgetfilterdatawwtipotelefono.AV25OptionIndexesJson = "" ;
         objgetfilterdatawwtipotelefono.context.SetSubmitInitialConfig(context);
         objgetfilterdatawwtipotelefono.initialize();
         ThreadPool.QueueUserWorkItem( PropagateCulture(new WaitCallback( executePrivateCatch )),objgetfilterdatawwtipotelefono);
         aP3_OptionsJson=this.AV20OptionsJson;
         aP4_OptionsDescJson=this.AV23OptionsDescJson;
         aP5_OptionIndexesJson=this.AV25OptionIndexesJson;
      }

      void executePrivateCatch( object stateInfo )
      {
         try
         {
            ((getfilterdatawwtipotelefono)stateInfo).executePrivate();
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
         AV19Options = (GxSimpleCollection<String>)(new GxSimpleCollection<String>());
         AV22OptionsDesc = (GxSimpleCollection<String>)(new GxSimpleCollection<String>());
         AV24OptionIndexes = (GxSimpleCollection<String>)(new GxSimpleCollection<String>());
         new GeneXus.Programs.wwpbaseobjects.loadwwpcontext(context ).execute( out  AV9WWPContext) ;
         /* Execute user subroutine: 'LOADGRIDSTATE' */
         S111 ();
         if ( returnInSub )
         {
            this.cleanup();
            if (true) return;
         }
         if ( StringUtil.StrCmp(StringUtil.Upper( AV16DDOName), "DDO_TIPTELNOM") == 0 )
         {
            /* Execute user subroutine: 'LOADTIPTELNOMOPTIONS' */
            S121 ();
            if ( returnInSub )
            {
               this.cleanup();
               if (true) return;
            }
         }
         AV20OptionsJson = AV19Options.ToJSonString(false);
         AV23OptionsDescJson = AV22OptionsDesc.ToJSonString(false);
         AV25OptionIndexesJson = AV24OptionIndexes.ToJSonString(false);
         this.cleanup();
      }

      protected void S111( )
      {
         /* 'LOADGRIDSTATE' Routine */
         if ( StringUtil.StrCmp(AV27Session.Get("WWTipoTelefonoGridState"), "") == 0 )
         {
            AV29GridState.FromXml(new GeneXus.Programs.wwpbaseobjects.loadgridstate(context).executeUdp(  "WWTipoTelefonoGridState"), null, "WWPGridState", "MaxiPrueba");
         }
         else
         {
            AV29GridState.FromXml(AV27Session.Get("WWTipoTelefonoGridState"), null, "WWPGridState", "MaxiPrueba");
         }
         AV35GXV1 = 1;
         while ( AV35GXV1 <= AV29GridState.gxTpr_Filtervalues.Count )
         {
            AV30GridStateFilterValue = ((GeneXus.Programs.wwpbaseobjects.SdtWWPGridState_FilterValue)AV29GridState.gxTpr_Filtervalues.Item(AV35GXV1));
            if ( StringUtil.StrCmp(AV30GridStateFilterValue.gxTpr_Name, "FILTERFULLTEXT") == 0 )
            {
               AV32FilterFullText = AV30GridStateFilterValue.gxTpr_Value;
            }
            else if ( StringUtil.StrCmp(AV30GridStateFilterValue.gxTpr_Name, "TFTIPTELID") == 0 )
            {
               AV10TFTipTelId = (int)(NumberUtil.Val( AV30GridStateFilterValue.gxTpr_Value, "."));
               AV11TFTipTelId_To = (int)(NumberUtil.Val( AV30GridStateFilterValue.gxTpr_Valueto, "."));
            }
            else if ( StringUtil.StrCmp(AV30GridStateFilterValue.gxTpr_Name, "TFTIPTELNOM") == 0 )
            {
               AV12TFTipTelNom = AV30GridStateFilterValue.gxTpr_Value;
            }
            else if ( StringUtil.StrCmp(AV30GridStateFilterValue.gxTpr_Name, "TFTIPTELNOM_SEL") == 0 )
            {
               AV13TFTipTelNom_Sel = AV30GridStateFilterValue.gxTpr_Value;
            }
            AV35GXV1 = (int)(AV35GXV1+1);
         }
      }

      protected void S121( )
      {
         /* 'LOADTIPTELNOMOPTIONS' Routine */
         AV12TFTipTelNom = AV14SearchTxt;
         AV13TFTipTelNom_Sel = "";
         pr_default.dynParam(0, new Object[]{ new Object[]{
                                              AV32FilterFullText ,
                                              AV10TFTipTelId ,
                                              AV11TFTipTelId_To ,
                                              AV13TFTipTelNom_Sel ,
                                              AV12TFTipTelNom ,
                                              A1TipTelId ,
                                              A3TipTelNom } ,
                                              new int[]{
                                              TypeConstants.STRING, TypeConstants.INT, TypeConstants.INT, TypeConstants.STRING, TypeConstants.STRING, TypeConstants.INT, TypeConstants.STRING
                                              }
         } ) ;
         lV32FilterFullText = StringUtil.Concat( StringUtil.RTrim( AV32FilterFullText), "%", "");
         lV32FilterFullText = StringUtil.Concat( StringUtil.RTrim( AV32FilterFullText), "%", "");
         lV12TFTipTelNom = StringUtil.PadR( StringUtil.RTrim( AV12TFTipTelNom), 20, "%");
         /* Using cursor P00112 */
         pr_default.execute(0, new Object[] {lV32FilterFullText, lV32FilterFullText, AV10TFTipTelId, AV11TFTipTelId_To, lV12TFTipTelNom, AV13TFTipTelNom_Sel});
         while ( (pr_default.getStatus(0) != 101) )
         {
            BRK112 = false;
            A3TipTelNom = P00112_A3TipTelNom[0];
            A1TipTelId = P00112_A1TipTelId[0];
            AV26count = 0;
            while ( (pr_default.getStatus(0) != 101) && ( StringUtil.StrCmp(P00112_A3TipTelNom[0], A3TipTelNom) == 0 ) )
            {
               BRK112 = false;
               A1TipTelId = P00112_A1TipTelId[0];
               AV26count = (long)(AV26count+1);
               BRK112 = true;
               pr_default.readNext(0);
            }
            if ( ! String.IsNullOrEmpty(StringUtil.RTrim( A3TipTelNom)) )
            {
               AV18Option = A3TipTelNom;
               AV19Options.Add(AV18Option, 0);
               AV24OptionIndexes.Add(StringUtil.Trim( context.localUtil.Format( (decimal)(AV26count), "Z,ZZZ,ZZZ,ZZ9")), 0);
            }
            if ( AV19Options.Count == 50 )
            {
               /* Exit For each command. Update data (if necessary), close cursors & exit. */
               if (true) break;
            }
            if ( ! BRK112 )
            {
               BRK112 = true;
               pr_default.readNext(0);
            }
         }
         pr_default.close(0);
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
         AV19Options = new GxSimpleCollection<String>();
         AV22OptionsDesc = new GxSimpleCollection<String>();
         AV24OptionIndexes = new GxSimpleCollection<String>();
         AV9WWPContext = new GeneXus.Programs.wwpbaseobjects.SdtWWPContext(context);
         AV27Session = context.GetSession();
         AV29GridState = new GeneXus.Programs.wwpbaseobjects.SdtWWPGridState(context);
         AV30GridStateFilterValue = new GeneXus.Programs.wwpbaseobjects.SdtWWPGridState_FilterValue(context);
         AV32FilterFullText = "";
         AV12TFTipTelNom = "";
         AV13TFTipTelNom_Sel = "";
         scmdbuf = "";
         lV32FilterFullText = "";
         lV12TFTipTelNom = "";
         A3TipTelNom = "";
         P00112_A3TipTelNom = new String[] {""} ;
         P00112_A1TipTelId = new int[1] ;
         AV18Option = "";
         pr_default = new DataStoreProvider(context, new GeneXus.Programs.getfilterdatawwtipotelefono__default(),
            new Object[][] {
                new Object[] {
               P00112_A3TipTelNom, P00112_A1TipTelId
               }
            }
         );
         /* GeneXus formulas. */
         context.Gx_err = 0;
      }

      private int AV35GXV1 ;
      private int AV10TFTipTelId ;
      private int AV11TFTipTelId_To ;
      private int A1TipTelId ;
      private long AV26count ;
      private String AV12TFTipTelNom ;
      private String AV13TFTipTelNom_Sel ;
      private String scmdbuf ;
      private String lV12TFTipTelNom ;
      private String A3TipTelNom ;
      private bool returnInSub ;
      private bool BRK112 ;
      private String AV25OptionIndexesJson ;
      private String AV20OptionsJson ;
      private String AV23OptionsDescJson ;
      private String AV16DDOName ;
      private String AV14SearchTxt ;
      private String AV15SearchTxtTo ;
      private String AV32FilterFullText ;
      private String lV32FilterFullText ;
      private String AV18Option ;
      private IGxSession AV27Session ;
      private IGxDataStore dsDefault ;
      private IDataStoreProvider pr_default ;
      private String[] P00112_A3TipTelNom ;
      private int[] P00112_A1TipTelId ;
      private String aP3_OptionsJson ;
      private String aP4_OptionsDescJson ;
      private String aP5_OptionIndexesJson ;
      private GxSimpleCollection<String> AV19Options ;
      private GxSimpleCollection<String> AV22OptionsDesc ;
      private GxSimpleCollection<String> AV24OptionIndexes ;
      private GeneXus.Programs.wwpbaseobjects.SdtWWPContext AV9WWPContext ;
      private GeneXus.Programs.wwpbaseobjects.SdtWWPGridState AV29GridState ;
      private GeneXus.Programs.wwpbaseobjects.SdtWWPGridState_FilterValue AV30GridStateFilterValue ;
   }

   public class getfilterdatawwtipotelefono__default : DataStoreHelperBase, IDataStoreHelper
   {
      protected Object[] conditional_P00112( IGxContext context ,
                                             String AV32FilterFullText ,
                                             int AV10TFTipTelId ,
                                             int AV11TFTipTelId_To ,
                                             String AV13TFTipTelNom_Sel ,
                                             String AV12TFTipTelNom ,
                                             int A1TipTelId ,
                                             String A3TipTelNom )
      {
         String sWhereString = "" ;
         String scmdbuf ;
         short[] GXv_int1 ;
         GXv_int1 = new short [6] ;
         Object[] GXv_Object2 ;
         GXv_Object2 = new Object [2] ;
         scmdbuf = "SELECT [TipTelNom], [TipTelId] FROM [TipoTelefono]";
         if ( ! String.IsNullOrEmpty(StringUtil.RTrim( AV32FilterFullText)) )
         {
            if ( StringUtil.StrCmp("", sWhereString) != 0 )
            {
               sWhereString = sWhereString + " and (( CONVERT( char(9), CAST([TipTelId] AS decimal(9,0))) like '%' + @lV32FilterFullText) or ( [TipTelNom] like '%' + @lV32FilterFullText))";
            }
            else
            {
               sWhereString = sWhereString + " (( CONVERT( char(9), CAST([TipTelId] AS decimal(9,0))) like '%' + @lV32FilterFullText) or ( [TipTelNom] like '%' + @lV32FilterFullText))";
            }
         }
         else
         {
            GXv_int1[0] = 1;
            GXv_int1[1] = 1;
         }
         if ( ! (0==AV10TFTipTelId) )
         {
            if ( StringUtil.StrCmp("", sWhereString) != 0 )
            {
               sWhereString = sWhereString + " and ([TipTelId] >= @AV10TFTipTelId)";
            }
            else
            {
               sWhereString = sWhereString + " ([TipTelId] >= @AV10TFTipTelId)";
            }
         }
         else
         {
            GXv_int1[2] = 1;
         }
         if ( ! (0==AV11TFTipTelId_To) )
         {
            if ( StringUtil.StrCmp("", sWhereString) != 0 )
            {
               sWhereString = sWhereString + " and ([TipTelId] <= @AV11TFTipTelId_To)";
            }
            else
            {
               sWhereString = sWhereString + " ([TipTelId] <= @AV11TFTipTelId_To)";
            }
         }
         else
         {
            GXv_int1[3] = 1;
         }
         if ( String.IsNullOrEmpty(StringUtil.RTrim( AV13TFTipTelNom_Sel)) && ( ! String.IsNullOrEmpty(StringUtil.RTrim( AV12TFTipTelNom)) ) )
         {
            if ( StringUtil.StrCmp("", sWhereString) != 0 )
            {
               sWhereString = sWhereString + " and ([TipTelNom] like @lV12TFTipTelNom)";
            }
            else
            {
               sWhereString = sWhereString + " ([TipTelNom] like @lV12TFTipTelNom)";
            }
         }
         else
         {
            GXv_int1[4] = 1;
         }
         if ( ! String.IsNullOrEmpty(StringUtil.RTrim( AV13TFTipTelNom_Sel)) )
         {
            if ( StringUtil.StrCmp("", sWhereString) != 0 )
            {
               sWhereString = sWhereString + " and ([TipTelNom] = @AV13TFTipTelNom_Sel)";
            }
            else
            {
               sWhereString = sWhereString + " ([TipTelNom] = @AV13TFTipTelNom_Sel)";
            }
         }
         else
         {
            GXv_int1[5] = 1;
         }
         if ( StringUtil.StrCmp("", sWhereString) != 0 )
         {
            scmdbuf = scmdbuf + " WHERE" + sWhereString;
         }
         scmdbuf = scmdbuf + " ORDER BY [TipTelNom]";
         GXv_Object2[0] = scmdbuf;
         GXv_Object2[1] = GXv_int1;
         return GXv_Object2 ;
      }

      public override Object [] getDynamicStatement( int cursor ,
                                                     IGxContext context ,
                                                     Object [] dynConstraints )
      {
         switch ( cursor )
         {
               case 0 :
                     return conditional_P00112(context, (String)dynConstraints[0] , (int)dynConstraints[1] , (int)dynConstraints[2] , (String)dynConstraints[3] , (String)dynConstraints[4] , (int)dynConstraints[5] , (String)dynConstraints[6] );
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
          Object[] prmP00112 ;
          prmP00112 = new Object[] {
          new Object[] {"@lV32FilterFullText",SqlDbType.NVarChar,100,0} ,
          new Object[] {"@lV32FilterFullText",SqlDbType.NVarChar,100,0} ,
          new Object[] {"@AV10TFTipTelId",SqlDbType.Int,9,0} ,
          new Object[] {"@AV11TFTipTelId_To",SqlDbType.Int,9,0} ,
          new Object[] {"@lV12TFTipTelNom",SqlDbType.NChar,20,0} ,
          new Object[] {"@AV13TFTipTelNom_Sel",SqlDbType.NChar,20,0}
          } ;
          def= new CursorDef[] {
              new CursorDef("P00112", "scmdbuf",false, GxErrorMask.GX_NOMASK | GxErrorMask.GX_MASKLOOPLOCK, false, this,prmP00112,100, GxCacheFrequency.OFF ,true,false )
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
                ((String[]) buf[0])[0] = rslt.getString(1, 20) ;
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
                   stmt.SetParameter(sIdx, (String)parms[10]);
                }
                if ( (short)parms[5] == 0 )
                {
                   sIdx = (short)(sIdx+1);
                   stmt.SetParameter(sIdx, (String)parms[11]);
                }
                return;
       }
    }

 }

 [ServiceContract(Namespace = "GeneXus.Programs.getfilterdatawwtipotelefono_services")]
 [ServiceBehavior(ConcurrencyMode = ConcurrencyMode.Multiple)]
 [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
 public class getfilterdatawwtipotelefono_services : GxRestService
 {
    [OperationContract]
    [WebInvoke(Method =  "POST" ,
    	BodyStyle =  WebMessageBodyStyle.Wrapped  ,
    	ResponseFormat = WebMessageFormat.Json,
    	UriTemplate = "/")]
    public void execute( String DDOName ,
                         String SearchTxt ,
                         String SearchTxtTo ,
                         out String OptionsJson ,
                         out String OptionsDescJson ,
                         out String OptionIndexesJson )
    {
       OptionsJson = "" ;
       OptionsDescJson = "" ;
       OptionIndexesJson = "" ;
       try
       {
          if ( ! ProcessHeaders("getfilterdatawwtipotelefono") )
          {
             return  ;
          }
          getfilterdatawwtipotelefono worker = new getfilterdatawwtipotelefono(context) ;
          worker.IsMain = RunAsMain ;
          worker.execute(DDOName,SearchTxt,SearchTxtTo,out OptionsJson,out OptionsDescJson,out OptionIndexesJson );
          worker.cleanup( );
       }
       catch ( Exception e )
       {
          WebException(e);
       }
       finally
       {
          Cleanup();
       }
    }

 }

}
