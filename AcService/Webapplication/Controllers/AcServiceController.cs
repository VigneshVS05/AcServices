using Microsoft.AspNetCore.Mvc;
using Webapplication.Models;
namespace Webapplication.Controllers;

[ApiController]
[Route("api/Welcome")]
public class AcServiceController : ControllerBase
{
    private readonly AcserviceContext DB;

    public AcServiceController(AcserviceContext db)
    {
        this.DB = db;

    }
     [HttpGet("GetAllServicee")]
    public IQueryable<Service> GetAllService()

    {
        try{
            return DB.Services;
        }
        catch(System.Exception)
        {
            throw;
        }
    }
  [HttpPost("InsertServicess")]

    public object InsertService(Register regObj)
    {
        string message="";
        try{
            Service el =new Service();
            if(el.Id==0){
                el.Email=regObj.RegEmail;
                el.Mobilenumber=regObj.RegMobilenumber;
                 el.Password=regObj.RegPassword;
                  el.AcUsername=regObj.RegAcUsername;
                   el.AcBrands=regObj.RegAcBrands;
                  el.AcPrice=regObj.RegAcPrice;

                DB.Services.Add(el);
               int result = this.DB.SaveChanges();
                    if (result > 0)
                    {
                        message = "User has been sucessfully added";
                    }
                    else
                    {
                        message = "failed";
                    }

                     return Ok(message);
            //Add

            //save it in the database
            DB.SaveChanges();

            return new Response{Status="Success" , Message = "Employee Added!"};

        }
    }
    catch(System.Exception)
    {
throw;
    }

    return new Response{Status="Error" , Message="Invalid Information"};
  }

               


[HttpGet("GetUserDetailsById/{uid}")]
    public IActionResult GetByID(int uid)
    {
            var users =this.DB.Services.FirstOrDefault(o=>o.Id==uid);
            return Ok(users);
    }

     [HttpDelete("DeleteUserDetails/{uid}")]
    public IActionResult DeleteUser(int uid)
    {
        string message = "";
            var user = this.DB.Services.Find(uid);
            if (user == null)
            {
                return NotFound();
            }

            this.DB.Services.Remove(user);
            int result = this.DB.SaveChanges();
            if (result > 0)
            {
                message = "User has been sussfully deleted";
            }
            else
            {
                message = "failed";
            }

            return Ok(message);
        }




     [HttpPost("Login")]
    public IActionResult LoginCheck(Login logObj){
        var logindetail = DB.Services.Where(x=>x.Email.Equals(logObj.email)&& x.Password.Equals(logObj.password)).FirstOrDefault();
        if (logindetail ==null)
        {
            return Ok(new Response{Status="Not Valid",Message="Invalid Credentials!"});

        }
        else
        {
         return Ok(new Response{Status="Success",Message="Welcome User!"});
        }
    }
}