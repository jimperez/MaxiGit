/*
               File: WWPBaseObjects.SecGAMIsAuthByFunctionalityKey
        Description: Is Authorized By Functionality
             Author: GeneXus C# Generator version 16_0_6-136889
       Generated on: 11/1/2019 15:38:58.29
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
   public class secgamisauthbyfunctionalitykey : GXProcedure
   {
      public secgamisauthbyfunctionalitykey( )
      {
         context = new GxContext(  );
         DataStoreUtil.LoadDataStores( context);
         IsMain = true;
         context.SetDefaultTheme("WorkWithPlusTheme");
      }

      public secgamisauthbyfunctionalitykey( IGxContext context )
      {
         this.context = context;
         IsMain = false;
      }

      public void release( )
      {
      }

      public void execute( String aP0_SecGAMFunctionalityKey ,
                           out bool aP1_IsAuthorized )
      {
         this.AV10SecGAMFunctionalityKey = aP0_SecGAMFunctionalityKey;
         this.AV9IsAuthorized = false ;
         initialize();
         executePrivate();
         aP1_IsAuthorized=this.AV9IsAuthorized;
      }

      public bool executeUdp( String aP0_SecGAMFunctionalityKey )
      {
         this.AV10SecGAMFunctionalityKey = aP0_SecGAMFunctionalityKey;
         this.AV9IsAuthorized = false ;
         initialize();
         executePrivate();
         aP1_IsAuthorized=this.AV9IsAuthorized;
         return AV9IsAuthorized ;
      }

      public void executeSubmit( String aP0_SecGAMFunctionalityKey ,
                                 out bool aP1_IsAuthorized )
      {
         secgamisauthbyfunctionalitykey objsecgamisauthbyfunctionalitykey;
         objsecgamisauthbyfunctionalitykey = new secgamisauthbyfunctionalitykey();
         objsecgamisauthbyfunctionalitykey.AV10SecGAMFunctionalityKey = aP0_SecGAMFunctionalityKey;
         objsecgamisauthbyfunctionalitykey.AV9IsAuthorized = false ;
         objsecgamisauthbyfunctionalitykey.context.SetSubmitInitialConfig(context);
         objsecgamisauthbyfunctionalitykey.initialize();
         ThreadPool.QueueUserWorkItem( PropagateCulture(new WaitCallback( executePrivateCatch )),objsecgamisauthbyfunctionalitykey);
         aP1_IsAuthorized=this.AV9IsAuthorized;
      }

      void executePrivateCatch( object stateInfo )
      {
         try
         {
            ((secgamisauthbyfunctionalitykey)stateInfo).executePrivate();
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
         if ( StringUtil.StrCmp(AV10SecGAMFunctionalityKey, "<Check_Is_Authenticated>") == 0 )
         {
            AV9IsAuthorized = (bool)(!(new GeneXus.Programs.genexussecurity.SdtGAMSession(context).isanonymoususer(out  AV8GAMErrors)));
         }
         else
         {
            AV9IsAuthorized = new GeneXus.Programs.genexussecurity.SdtGAMRepository(context).checkpermission(AV10SecGAMFunctionalityKey);
         }
         this.cleanup();
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
         AV8GAMErrors = new GXExternalCollection<GeneXus.Programs.genexussecurity.SdtGAMError>( context, "GeneXus.Programs.genexussecurity.SdtGAMError", "GeneXus.Programs");
         /* GeneXus formulas. */
         context.Gx_err = 0;
      }

      private bool AV9IsAuthorized ;
      private String AV10SecGAMFunctionalityKey ;
      private bool aP1_IsAuthorized ;
      private GXExternalCollection<GeneXus.Programs.genexussecurity.SdtGAMError> AV8GAMErrors ;
   }

}
