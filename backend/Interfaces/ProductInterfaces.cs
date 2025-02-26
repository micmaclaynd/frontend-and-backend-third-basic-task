namespace Backend.Interfaces {
    public class IAddProductData {
        public required string Name { get; set; }
        public required double Price { get; set; }
        public required string Description { get; set; }
    }

    public class IUpdateProductData {
        public string? Name { get; set; }
        public double? Price { get; set; }
        public string? Description { get; set; }
    }
}
