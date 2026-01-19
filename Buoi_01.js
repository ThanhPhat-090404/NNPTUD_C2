// Câu 1: Khai báo constructor function Product để tạo đối tượng sản phẩm
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
  }
  
  // Câu 2: Khởi tạo mảng products gồm ít nhất 5 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau
  const products = [
    new Product(1, "Laptop Dell", 15000000, 5, "Electronics", true),
    new Product(2, "USB Hub", 500000, 12, "Accessories", true),
    new Product(3, "Mouse Logitech", 800000, 8, "Accessories", true),
    new Product(4, "Keyboard Mechanical", 2500000, 3, "Electronics", true),
    new Product(5, "Monitor LG 24 inch", 5000000, 2, "Electronics", false),
    new Product(6, "Phone Stand", 350000, 15, "Accessories", true),
    new Product(7, "HDMI Cable", 200000, 0, "Accessories", true),
  ];
  
  console.log("=== Câu 2: Danh sách sản phẩm ===");
  console.log(products);
  
  // Câu 3: Tạo mảng mới chỉ chứa name, price của mỗi sản phẩm
  const productInfo = products.map(product => ({
    name: product.name,
    price: product.price
  }));
  
  console.log("\n=== Câu 3: Thông tin sản phẩm (Tên - Giá) ===");
  console.log(productInfo);
  
  // Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
  const productsInStock = products.filter(product => product.quantity > 0);
  
  console.log("\n=== Câu 4: Sản phẩm còn hàng trong kho ===");
  console.log(productsInStock);
  
  // Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30 hay không
  // Lưu ý: Giá trên 30 có thể hiểu là giá > 30 hoặc > 3,000,000 VND
  const hasPriceAbove30 = products.some(product => product.price > 3000000);
  
  console.log("\n=== Câu 5: Kiểm tra sản phẩm có giá trên 3,000,000 VND ===");
  console.log(`Có sản phẩm có giá trên 3,000,000 VND: ${hasPriceAbove30}`);
  
  // Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
  const allAccessoriesAvailable = products
    .filter(product => product.category === "Accessories")
    .every(product => product.isAvailable === true);
  
  console.log("\n=== Câu 6: Kiểm tra tất cả sản phẩm Accessories có sẵn bán ===");
  console.log(`Tất cả sản phẩm Accessories có sẵn bán: ${allAccessoriesAvailable}`);
  
  // Câu 7: Tính tổng giá trị kho hàng. Giá trị kho = price × quantity
  const totalWarehouseValue = products.reduce((sum, product) => {
    return sum + (product.price * product.quantity);
  }, 0);
  
  console.log("\n=== Câu 7: Tổng giá trị kho hàng ===");
  console.log(`Tổng giá trị kho: ${totalWarehouseValue.toLocaleString('vi-VN')} VND`);
  
  // Câu 8: Dùng for...of Duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
  console.log("\n=== Câu 8: Danh sách sản phẩm (for...of) ===");
  for (const product of products) {
    const status = product.isAvailable ? "Có bán" : "Không bán";
    console.log(`${product.name} - ${product.category} - ${status}`);
  }
  
  // Câu 9: Dùng for...in để:
  // - In ra tên thuộc tính
  // - In ra giá trị tương ứng
  console.log("\n=== Câu 9: Chi tiết sản phẩm đầu tiên (for...in) ===");
  const firstProduct = products[0];
  for (const key in firstProduct) {
    console.log(`${key}: ${firstProduct[key]}`);
  }
  
  // Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
  const availableProductNames = products
    .filter(product => product.isAvailable === true && product.quantity > 0)
    .map(product => product.name);
  
  console.log("\n=== Câu 10: Danh sách tên sản phẩm đang bán và còn hàng ===");
  console.log(availableProductNames);
  