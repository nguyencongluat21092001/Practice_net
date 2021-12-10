using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication.Models
{
    public class Product
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public string ProductName { get; set; }
        public int SupplierID { get; set; }
        public int CategyID { get; set; }
        public int QuantityPerUnit { get; set; }
        public int UnitPrice { get; set; }
        public int UnitslnStock { get; set; }
        public int UnitsOnOrder { get; set; }
        public int ReorderLever { get; set; }
        public int Discontinued { get; set; }
        [ForeignKey("CategoryID")]
        public virtual Category Category { get; set; }

    }
}