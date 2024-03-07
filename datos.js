class Product {
  constructor(
    title,
    description,
    price,
    thumbnail,
    code,
    stock,
    id = 0
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
}

class ProductManager {
  constructor() {
    this.products = [];
    this.id = 0;
  }

  addProduct(product) {
    if (!this.validateProduct(product)) {
      throw new Error("El producto no es válido");
    }

    const existingProduct = this.products.find(
      (p) => p.code === product.code
    );
    if (existingProduct) {
      throw new Error("El código del producto ya existe");
    }

    this.id++;
    product.id = this.id;
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new Error("Producto no encontrado");
    }
    return product;
  }

  validateProduct(product) {
    return (
      product.title &&
      product.description &&
      product.price &&
      product.thumbnail &&
      product.code &&
      product.stock
    );
  }
}

const productsData = [
  {
    title: "Arroz",
    description: "Arroz blanco tipo largo",
    price: 100,
    thumbnail: "", //aún no posee
    code: "ARROZ-001",
    stock: 100,
  },
  {
    title: "Fideos",
    description: "Fideos tallarines",
    price: 80,
    thumbnail: "", //aún no posee
    code: "FIDEOS-002",
    stock: 50,
  },
  {
    title: "Aceite de oliva",
    description: "Aceite de oliva virgen extra",
    price: 200,
    thumbnail: "", //aún no posee
    code: "ACEITE-OLIVA-003",
  }
]