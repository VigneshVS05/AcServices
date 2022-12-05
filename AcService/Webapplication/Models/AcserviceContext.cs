using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Webapplication.Models;

public partial class AcserviceContext : DbContext
{
    public AcserviceContext()
    {
    }

    public AcserviceContext(DbContextOptions<AcserviceContext> options)
        : base(options)
    {
    }


    public virtual DbSet<Service> Services { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=ASTLPTWFH148\\SQLEXPRESS;Initial Catalog=Acservice;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      

       
        modelBuilder.Entity<Service>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Services__3213E83FCEF61546");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AcBrands)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.AcPrice)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.AcUsername)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Email)
                .HasMaxLength(80)
                .IsUnicode(false);
            entity.Property(e => e.Mobilenumber)
                .HasMaxLength(70)
                .IsUnicode(false);
            entity.Property(e => e.Password)
                .HasMaxLength(60)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
