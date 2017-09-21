using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace SteamRecycle.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        [StringLength(17, MinimumLength = 17, ErrorMessage = "SteamID64 must be 17 digits long")]
        [RegularExpression(@"^[0-9]*$", ErrorMessage="SteamID64 must be only numbers")]
        public string ProfileId { get; set; }
    }
}