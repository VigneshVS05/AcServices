using System;
using System.Collections.Generic;

namespace Webapplication.Models;

public partial class Service
{
    public int Id { get; set; }

    public string? Email { get; set; }

    public string? Mobilenumber { get; set; }

    public string? Password { get; set; }

    public string? AcUsername { get; set; }

    public string? AcBrands { get; set; }

    public string? AcPrice { get; set; }
}
