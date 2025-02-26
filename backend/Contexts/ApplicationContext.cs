using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Contexts {
    public class ApplicationContext(DbContextOptions<ApplicationContext> options) : DbContext(options) {
        public required DbSet<ProductModel> Products { get;set; }
    }
}