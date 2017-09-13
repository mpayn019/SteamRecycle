using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SteamRecycle.Models
{
    public class Game
    {
        public int AppId { get; set; }
        public string Name { get; set; }
        public int Playtime { get; set; }
        public string ImageIcon { get; set; }
        public string ImageLogo { get; set; }
        public bool HasVisibleStats { get; set; } = false;
    }
}