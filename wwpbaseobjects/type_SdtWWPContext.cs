/*
				   File: type_SdtWWPContext
			Description: WWPContext
				 Author: Nemo 🐠 for C# version 16.0.5.135614
		   Program type: Callable routine
			  Main DBMS: 
*/
using System;
using System.Collections;
using GeneXus.Utils;
using GeneXus.Resources;
using GeneXus.Application;
using GeneXus.Metadata;
using GeneXus.Cryptography;
using GeneXus.Encryption;
using GeneXus.Http.Client;
using GeneXus.Http.Server;
using System.Reflection;
using System.Xml.Serialization;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.Web.Services.Protocols;

using GeneXus.Programs;
namespace GeneXus.Programs.wwpbaseobjects
{
	[XmlSerializerFormat]
	[XmlRoot(ElementName="WWPContext")]
	[XmlType(TypeName="WWPContext" , Namespace="SIGMA" )]
	[Serializable]
	public class SdtWWPContext : GxUserType
	{
		public SdtWWPContext( )
		{
			/* Constructor for serialization */
			gxTv_SdtWWPContext_Usunombre = "";

			gxTv_SdtWWPContext_System = "";

			gxTv_SdtWWPContext_Puestonombre = "";

			gxTv_SdtWWPContext_Ingreso = "";

			gxTv_SdtWWPContext_Opcion = "";

			gxTv_SdtWWPContext_Entidadnombre = "";

			gxTv_SdtWWPContext_Sucursalnombre = "";

			gxTv_SdtWWPContext_Provincianombre = "";

			gxTv_SdtWWPContext_Usupwdmar = "";

		}

		public SdtWWPContext(IGxContext context)
		{
			this.context = context;
			initialize();
		}

		#region Json
		private static Hashtable mapper;
		public override String JsonMap(String value)
		{
			if (mapper == null)
			{
				mapper = new Hashtable();
			}
			return (String)mapper[value]; ;
		}

		public override void ToJSON()
		{
			ToJSON(true) ;
			return;
		}

		public override void ToJSON(bool includeState)
		{
			AddObjectProperty("User", gxTpr_User, false);


			AddObjectProperty("UsuNombre", gxTpr_Usunombre, false);


			AddObjectProperty("System", gxTpr_System, false);


			AddObjectProperty("Puesto", gxTpr_Puesto, false);


			AddObjectProperty("PuestoNombre", gxTpr_Puestonombre, false);


			AddObjectProperty("Rol", gxTpr_Rol, false);


			AddObjectProperty("Ingreso", gxTpr_Ingreso, false);


			AddObjectProperty("Opcion", gxTpr_Opcion, false);


			AddObjectProperty("EntidadId", gxTpr_Entidadid, false);


			AddObjectProperty("EntidadNombre", gxTpr_Entidadnombre, false);


			AddObjectProperty("SucursalId", gxTpr_Sucursalid, false);


			AddObjectProperty("SucursalNombre", gxTpr_Sucursalnombre, false);


			AddObjectProperty("ProvinciaId", gxTpr_Provinciaid, false);


			AddObjectProperty("ProvinciaNombre", gxTpr_Provincianombre, false);


			AddObjectProperty("UsuPwdMar", gxTpr_Usupwdmar, false);


			AddObjectProperty("EmpleadoId", gxTpr_Empleadoid, false);

			return;
		}
		#endregion

		#region Properties

		[SoapElement(ElementName="User")]
		[XmlElement(ElementName="User")]
		public long gxTpr_User
		{
			get { 
				return gxTv_SdtWWPContext_User; 
			}
			set { 
				gxTv_SdtWWPContext_User = value;
				SetDirty("User");
			}
		}




		[SoapElement(ElementName="UsuNombre")]
		[XmlElement(ElementName="UsuNombre")]
		public String gxTpr_Usunombre
		{
			get { 
				return gxTv_SdtWWPContext_Usunombre; 
			}
			set { 
				gxTv_SdtWWPContext_Usunombre = value;
				SetDirty("Usunombre");
			}
		}




		[SoapElement(ElementName="System")]
		[XmlElement(ElementName="System")]
		public String gxTpr_System
		{
			get { 
				return gxTv_SdtWWPContext_System; 
			}
			set { 
				gxTv_SdtWWPContext_System = value;
				SetDirty("System");
			}
		}




		[SoapElement(ElementName="Puesto")]
		[XmlElement(ElementName="Puesto")]
		public int gxTpr_Puesto
		{
			get { 
				return gxTv_SdtWWPContext_Puesto; 
			}
			set { 
				gxTv_SdtWWPContext_Puesto = value;
				SetDirty("Puesto");
			}
		}




		[SoapElement(ElementName="PuestoNombre")]
		[XmlElement(ElementName="PuestoNombre")]
		public String gxTpr_Puestonombre
		{
			get { 
				return gxTv_SdtWWPContext_Puestonombre; 
			}
			set { 
				gxTv_SdtWWPContext_Puestonombre = value;
				SetDirty("Puestonombre");
			}
		}




		[SoapElement(ElementName="Rol")]
		[XmlElement(ElementName="Rol")]
		public long gxTpr_Rol
		{
			get { 
				return gxTv_SdtWWPContext_Rol; 
			}
			set { 
				gxTv_SdtWWPContext_Rol = value;
				SetDirty("Rol");
			}
		}




		[SoapElement(ElementName="Ingreso")]
		[XmlElement(ElementName="Ingreso")]
		public String gxTpr_Ingreso
		{
			get { 
				return gxTv_SdtWWPContext_Ingreso; 
			}
			set { 
				gxTv_SdtWWPContext_Ingreso = value;
				SetDirty("Ingreso");
			}
		}




		[SoapElement(ElementName="Opcion")]
		[XmlElement(ElementName="Opcion")]
		public String gxTpr_Opcion
		{
			get { 
				return gxTv_SdtWWPContext_Opcion; 
			}
			set { 
				gxTv_SdtWWPContext_Opcion = value;
				SetDirty("Opcion");
			}
		}




		[SoapElement(ElementName="EntidadId")]
		[XmlElement(ElementName="EntidadId")]
		public short gxTpr_Entidadid
		{
			get { 
				return gxTv_SdtWWPContext_Entidadid; 
			}
			set { 
				gxTv_SdtWWPContext_Entidadid = value;
				SetDirty("Entidadid");
			}
		}




		[SoapElement(ElementName="EntidadNombre")]
		[XmlElement(ElementName="EntidadNombre")]
		public String gxTpr_Entidadnombre
		{
			get { 
				return gxTv_SdtWWPContext_Entidadnombre; 
			}
			set { 
				gxTv_SdtWWPContext_Entidadnombre = value;
				SetDirty("Entidadnombre");
			}
		}




		[SoapElement(ElementName="SucursalId")]
		[XmlElement(ElementName="SucursalId")]
		public short gxTpr_Sucursalid
		{
			get { 
				return gxTv_SdtWWPContext_Sucursalid; 
			}
			set { 
				gxTv_SdtWWPContext_Sucursalid = value;
				SetDirty("Sucursalid");
			}
		}




		[SoapElement(ElementName="SucursalNombre")]
		[XmlElement(ElementName="SucursalNombre")]
		public String gxTpr_Sucursalnombre
		{
			get { 
				return gxTv_SdtWWPContext_Sucursalnombre; 
			}
			set { 
				gxTv_SdtWWPContext_Sucursalnombre = value;
				SetDirty("Sucursalnombre");
			}
		}




		[SoapElement(ElementName="ProvinciaId")]
		[XmlElement(ElementName="ProvinciaId")]
		public short gxTpr_Provinciaid
		{
			get { 
				return gxTv_SdtWWPContext_Provinciaid; 
			}
			set { 
				gxTv_SdtWWPContext_Provinciaid = value;
				SetDirty("Provinciaid");
			}
		}




		[SoapElement(ElementName="ProvinciaNombre")]
		[XmlElement(ElementName="ProvinciaNombre")]
		public String gxTpr_Provincianombre
		{
			get { 
				return gxTv_SdtWWPContext_Provincianombre; 
			}
			set { 
				gxTv_SdtWWPContext_Provincianombre = value;
				SetDirty("Provincianombre");
			}
		}




		[SoapElement(ElementName="UsuPwdMar")]
		[XmlElement(ElementName="UsuPwdMar")]
		public String gxTpr_Usupwdmar
		{
			get { 
				return gxTv_SdtWWPContext_Usupwdmar; 
			}
			set { 
				gxTv_SdtWWPContext_Usupwdmar = value;
				SetDirty("Usupwdmar");
			}
		}




		[SoapElement(ElementName="EmpleadoId")]
		[XmlElement(ElementName="EmpleadoId")]
		public long gxTpr_Empleadoid
		{
			get { 
				return gxTv_SdtWWPContext_Empleadoid; 
			}
			set { 
				gxTv_SdtWWPContext_Empleadoid = value;
				SetDirty("Empleadoid");
			}
		}




		#endregion

		#region Initialization

		public void initialize( )
		{
			gxTv_SdtWWPContext_Usunombre = "";
			gxTv_SdtWWPContext_System = "";

			gxTv_SdtWWPContext_Puestonombre = "";

			gxTv_SdtWWPContext_Ingreso = "";
			gxTv_SdtWWPContext_Opcion = "";

			gxTv_SdtWWPContext_Entidadnombre = "";

			gxTv_SdtWWPContext_Sucursalnombre = "";

			gxTv_SdtWWPContext_Provincianombre = "";
			gxTv_SdtWWPContext_Usupwdmar = "";

			return  ;
		}



		#endregion

		#region Declaration

		protected long gxTv_SdtWWPContext_User;
		 

		protected String gxTv_SdtWWPContext_Usunombre;
		 

		protected String gxTv_SdtWWPContext_System;
		 

		protected int gxTv_SdtWWPContext_Puesto;
		 

		protected String gxTv_SdtWWPContext_Puestonombre;
		 

		protected long gxTv_SdtWWPContext_Rol;
		 

		protected String gxTv_SdtWWPContext_Ingreso;
		 

		protected String gxTv_SdtWWPContext_Opcion;
		 

		protected short gxTv_SdtWWPContext_Entidadid;
		 

		protected String gxTv_SdtWWPContext_Entidadnombre;
		 

		protected short gxTv_SdtWWPContext_Sucursalid;
		 

		protected String gxTv_SdtWWPContext_Sucursalnombre;
		 

		protected short gxTv_SdtWWPContext_Provinciaid;
		 

		protected String gxTv_SdtWWPContext_Provincianombre;
		 

		protected String gxTv_SdtWWPContext_Usupwdmar;
		 

		protected long gxTv_SdtWWPContext_Empleadoid;
		 


		#endregion
	}
	#region Rest interface
	[DataContract(Name=@"WWPContext", Namespace="SIGMA")]
	public class SdtWWPContext_RESTInterface : GxGenericCollectionItem<SdtWWPContext>, System.Web.SessionState.IRequiresSessionState
	{
		public SdtWWPContext_RESTInterface( ) : base()
		{
		}

		public SdtWWPContext_RESTInterface( SdtWWPContext psdt ) : base(psdt)
		{
		}

		#region Rest Properties
		[DataMember(Name="User", Order=0)]
		public  String gxTpr_User
		{
			get { 
				return StringUtil.LTrim( StringUtil.Str( (decimal) sdt.gxTpr_User, 11, 0));

			}
			set { 
				sdt.gxTpr_User = (long) NumberUtil.Val( value, ".");
			}
		}

		[DataMember(Name="UsuNombre", Order=1)]
		public  String gxTpr_Usunombre
		{
			get { 
				return sdt.gxTpr_Usunombre;

			}
			set { 
				 sdt.gxTpr_Usunombre = value;
			}
		}

		[DataMember(Name="System", Order=2)]
		public  String gxTpr_System
		{
			get { 
				return StringUtil.RTrim( sdt.gxTpr_System);

			}
			set { 
				 sdt.gxTpr_System = value;
			}
		}

		[DataMember(Name="Puesto", Order=3)]
		public  String gxTpr_Puesto
		{
			get { 
				return StringUtil.LTrim( StringUtil.Str( (decimal) sdt.gxTpr_Puesto, 9, 0));

			}
			set { 
				sdt.gxTpr_Puesto = (int) NumberUtil.Val( value, ".");
			}
		}

		[DataMember(Name="PuestoNombre", Order=4)]
		public  String gxTpr_Puestonombre
		{
			get { 
				return sdt.gxTpr_Puestonombre;

			}
			set { 
				 sdt.gxTpr_Puestonombre = value;
			}
		}

		[DataMember(Name="Rol", Order=5)]
		public  String gxTpr_Rol
		{
			get { 
				return StringUtil.LTrim( StringUtil.Str( (decimal) sdt.gxTpr_Rol, 11, 0));

			}
			set { 
				sdt.gxTpr_Rol = (long) NumberUtil.Val( value, ".");
			}
		}

		[DataMember(Name="Ingreso", Order=6)]
		public  String gxTpr_Ingreso
		{
			get { 
				return StringUtil.RTrim( sdt.gxTpr_Ingreso);

			}
			set { 
				 sdt.gxTpr_Ingreso = value;
			}
		}

		[DataMember(Name="Opcion", Order=7)]
		public  String gxTpr_Opcion
		{
			get { 
				return StringUtil.RTrim( sdt.gxTpr_Opcion);

			}
			set { 
				 sdt.gxTpr_Opcion = value;
			}
		}

		[DataMember(Name="EntidadId", Order=8)]
		public short gxTpr_Entidadid
		{
			get { 
				return sdt.gxTpr_Entidadid;

			}
			set { 
				sdt.gxTpr_Entidadid = value;
			}
		}

		[DataMember(Name="EntidadNombre", Order=9)]
		public  String gxTpr_Entidadnombre
		{
			get { 
				return sdt.gxTpr_Entidadnombre;

			}
			set { 
				 sdt.gxTpr_Entidadnombre = value;
			}
		}

		[DataMember(Name="SucursalId", Order=10)]
		public short gxTpr_Sucursalid
		{
			get { 
				return sdt.gxTpr_Sucursalid;

			}
			set { 
				sdt.gxTpr_Sucursalid = value;
			}
		}

		[DataMember(Name="SucursalNombre", Order=11)]
		public  String gxTpr_Sucursalnombre
		{
			get { 
				return sdt.gxTpr_Sucursalnombre;

			}
			set { 
				 sdt.gxTpr_Sucursalnombre = value;
			}
		}

		[DataMember(Name="ProvinciaId", Order=12)]
		public short gxTpr_Provinciaid
		{
			get { 
				return sdt.gxTpr_Provinciaid;

			}
			set { 
				sdt.gxTpr_Provinciaid = value;
			}
		}

		[DataMember(Name="ProvinciaNombre", Order=13)]
		public  String gxTpr_Provincianombre
		{
			get { 
				return sdt.gxTpr_Provincianombre;

			}
			set { 
				 sdt.gxTpr_Provincianombre = value;
			}
		}

		[DataMember(Name="UsuPwdMar", Order=14)]
		public  String gxTpr_Usupwdmar
		{
			get { 
				return StringUtil.RTrim( sdt.gxTpr_Usupwdmar);

			}
			set { 
				 sdt.gxTpr_Usupwdmar = value;
			}
		}

		[DataMember(Name="EmpleadoId", Order=15)]
		public  String gxTpr_Empleadoid
		{
			get { 
				return StringUtil.LTrim( StringUtil.Str( (decimal) sdt.gxTpr_Empleadoid, 15, 0));

			}
			set { 
				sdt.gxTpr_Empleadoid = (long) NumberUtil.Val( value, ".");
			}
		}


		#endregion

		public SdtWWPContext sdt
		{
			get { 
				return (SdtWWPContext)Sdt;
			}
			set { 
				Sdt = value;
			}
		}

		[OnDeserializing]
		void checkSdt( StreamingContext ctx )
		{
			if ( sdt == null )
			{
				sdt = new SdtWWPContext() ;
			}
		}
	}
	#endregion
}