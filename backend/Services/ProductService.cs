using Backend.Contexts;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services {
    public interface IProductService {
        public Task<IEnumerable<ProductModel>> GetProductsAsync();
        public Task<ProductModel?> GetProductAsync(int id);
        public Task AddProductAsync(ProductModel productModel);
        public Task UpdateProductAsync(ProductModel productModel);
        public Task RemoveProductAsync(ProductModel productModel);
    }

    public class ProductService(ApplicationContext context) : IProductService {
        private readonly ApplicationContext _context = context;

        public async Task<IEnumerable<ProductModel>> GetProductsAsync() {
            return await _context.Products.ToListAsync();
        }

        public async Task<ProductModel?> GetProductAsync(int id) {
            return await _context.Products.FirstOrDefaultAsync(model => model.Id == id);
        }

        public async Task AddProductAsync(ProductModel productModel) {
            await _context.Products.AddAsync(productModel);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateProductAsync(ProductModel productModel) {
            _context.Products.Update(productModel);
            await _context.SaveChangesAsync();
        }

        public async Task RemoveProductAsync(ProductModel productModel) {
            _context.Products.Remove(productModel);
            await _context.SaveChangesAsync();
        }
    }
}