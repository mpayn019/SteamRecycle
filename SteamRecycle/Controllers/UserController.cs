using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Html;
using SteamRecycle.Models;

namespace SteamRecycle.Controllers
{
    public class UserController : Controller
    {
        // GET: User/Games/5
        public ActionResult Games(string profileId)
        {

            var user = new User();
            user.ProfileId = profileId;

            return View(user);
        }
    }
}
