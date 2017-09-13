using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SteamRecycle.Models
{
    public class User
    {
        public string ProfileId { get; set; }
        public string Name { get; set; }
        public int GameCount { get; set; }
        public IEnumerable<Game> Games { get; set; }
    }
}