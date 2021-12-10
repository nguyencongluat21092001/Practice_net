using WebApplication.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;


namespace WebApplication.Models
{
    public class ProductDbConnect : DbContext
    {
        public ProductDbConnect() : base("name=ProductDB")
        { 
        }
        public DbSet<Product> Students { get; set; }
        public DbSet<Category> Categoryies { get; set; }

    }
}