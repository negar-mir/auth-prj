﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreAuthPrj.Dtos
{
    public class MovieResponse
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Director { get; set; }
        public string Rate { get; set; }
    }
}
