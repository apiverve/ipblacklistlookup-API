using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.IPBlacklistLookup
{
    /// <summary>
    /// Query options for the IP Blacklist Lookup API
    /// </summary>
    public class IPBlacklistLookupQueryOptions
    {
        /// <summary>
        /// The IP address to lookup in the blacklist (e.g., 201.23.192.173)
        /// Example: 201.23.192.173
        /// </summary>
        [JsonProperty("ip")]
        public string Ip { get; set; }
    }
}
