using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication.Models
{
    public class Product
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public string SupplierID { get; set; }
        public string CategyID { get; set; }
        public string QuantityPerUnit { get; set; }
        public string UnitPrice { get; set; }
        public string UnitslnStock { get; set; }
        public string UnitsOnOrder { get; set; }
        public string ReorderLever { get; set; }
        public string Discontinued { get; set; }

    }
}