using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SteamRecycle.ViewModels;

namespace SteamRecycle.Controllers
{
    public class UserController : Controller
    {
        // GET: User/5
        public ActionResult Index(int id)
        {
            var user = new UserViewModel();
            user.Id = id;

            return View(user);
        }
    }
}
