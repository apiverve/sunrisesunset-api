using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.SunriseSunset
{
    /// <summary>
    /// Query options for the Sunrise Sunset API
    /// </summary>
    public class SunriseSunsetQueryOptions
    {
        /// <summary>
        /// The latitude of the location
        /// </summary>
        [JsonProperty("lat")]
        public double Lat { get; set; }

        /// <summary>
        /// The longitude of the location
        /// </summary>
        [JsonProperty("lon")]
        public double Lon { get; set; }

        /// <summary>
        /// The date for which you want to get the sunrise and sunset times (e.g., MM-DD-YYYY : 01-01-2022)
        /// </summary>
        [JsonProperty("date")]
        public string Date { get; set; }
    }
}
