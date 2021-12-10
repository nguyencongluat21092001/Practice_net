using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Practicebe.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace Practicebe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public ProductController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        [HttpGet]
        public JsonResult Get()
        {
            string query = @"Select ProductId,ProductName , SupplierID ,CategoryID , QuantityPerUnit , UnitPrice , UnitslnStock , UnitsOnOrder , ReorderLevel , Discontinued from dbo.Product";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("StudentConnectionString");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Product objStudent)
        {
            string query = @"Insert into dbo.Product values
                ('" + objStudent.ProductName + "','" + objStudent.SupplierID + "','" + objStudent.CategoryID + "','" + objStudent.QuantityPerUnit + "','" + objStudent.UnitPrice + "','" + objStudent.UnitslnStock + "','" + objStudent.UnitsOnOrder + "','" + objStudent.ReorderLevel + "','" + objStudent.Discontinued + "')";
            
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("StudentConnectionString");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Product objStudent)
        {
            string query = @"Update dbo.Product set

                ProductName = '" + objStudent.ProductName + @"',
                SupplierID = '" + objStudent.SupplierID + @"',
                CategoryID = '" + objStudent.CategoryID + @"',
                QuantityPerUnit = '" + objStudent.QuantityPerUnit + @"',
                UnitPrice = '" + objStudent.UnitPrice + @"',
                UnitslnStock = '" + objStudent.UnitslnStock + @"',
                UnitsOnOrder = '" + objStudent.UnitsOnOrder + @"',
                ReorderLevel = '" + objStudent.ReorderLevel + @"',
                Discontinued = '" + objStudent.Discontinued + @"' where ProductID = " + objStudent.ProductID;
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("StudentConnectionString");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"Delete from dbo.Product where ProductId = " + id;
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("StudentConnectionString");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }
    }
}
