using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace SteamRecycle
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Root",
                url: "",
                defaults: new { controller = "Home", action = "Index" }
            );

            routes.MapRoute(
                name: "HomePage",
                url: "User/Games",
                defaults: new { controller = "User", action = "Games" }
            );

            routes.MapRoute(
                "404-PageNotFound",
                "{*url}",
                new { controller = "Error", action = "PageNotFound" }
            );
        }
    }
}
