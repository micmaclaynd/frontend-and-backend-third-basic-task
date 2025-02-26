using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models {
    public class BaseModel {
        [Key]
        [Required]
        [Column("id")]
        public int Id { get; set; }
    }
}