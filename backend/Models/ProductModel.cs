using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models {
    [Table("products")]
    public class ProductModel : BaseModel {
        [Column("name")]
        [StringLength(128)]
        public required string Name { get; set; }

        [Column("price")]
        public required double Price { get; set; }

        [Column("description")]
        [StringLength(1024)]
        public required string Description { get; set; }
    }    
}