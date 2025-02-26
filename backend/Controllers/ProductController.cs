using Backend.Interfaces;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers {
    [ApiController]
    [Route("products")]
    public class ProductController(IProductService productService) : ControllerBase {
        private readonly IProductService _productService = productService;

        [HttpGet]
        public async Task<ActionResult> GetProductsAsync() {
            return Ok(await _productService.GetProductsAsync());
        }

        [HttpPost]
        public async Task<ActionResult> AddProductAsync([FromBody] IAddProductData data) {
            var product = new ProductModel {
                Name = data.Name,
                Description = data.Description,
                Price = data.Price
            };
            await _productService.AddProductAsync(product);
            return Ok(new {
                product.Id
            });
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateProductAsync(int id, [FromBody] IUpdateProductData data) {
            var product = await _productService.GetProductAsync(id);
            if (product == null) {
                return NotFound(new {
                    Message = "Товар с таким id не найден"
                });
            }

            product.Name = data.Name ?? product.Name;
            product.Description = data.Description ?? product.Description;
            product.Price = data.Price ?? product.Price;

            await _productService.UpdateProductAsync(product);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> RemoveProductAsync(int id) {
            var product = await _productService.GetProductAsync(id);
            if (product == null) {
                return NotFound(new {
                    Message = "Товар с таким id не найден"
                });
            }

            await _productService.RemoveProductAsync(product);
            return Ok();
        }
    }
}