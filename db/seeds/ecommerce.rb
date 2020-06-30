

cat = Category.find_or_create_by(name: "black top")
Product.find_or_create_by(name: "small black top", price: 23.40, category_id: cat.id, image_url: "https://colorlib.com/tyche/wp-content/uploads/sites/17/2017/06/woman-1477091_1920-255x320.jpg")
Product.find_or_create_by(name: "little black top", price: 18.40, category_id: cat.id, image_url: "https://colorlib.com/tyche/wp-content/uploads/sites/17/2017/06/girl-1286993_1920-255x320.jpg")
Product.find_or_create_by(name: "nice black top", price: 13.40, category_id: cat.id, image_url: "https://colorlib.com/tyche/wp-content/uploads/sites/17/2017/06/model-858751_1920-255x320.jpg")

cat = Category.find_or_create_by(name: "high heel shoes")
Product.find_or_create_by(name: "small black top", price: 23.40, category_id: cat.id, image_url: "https://colorlib.com/tyche/wp-content/uploads/sites/17/2017/06/elegance-18594_1920-255x320.jpg")
Product.find_or_create_by(name: "little black top", price: 43.40, category_id: cat.id, image_url: "https://colorlib.com/tyche/wp-content/uploads/sites/17/2017/06/shoe-1040802_1920-255x320.jpg")
Product.find_or_create_by(name: "nice black top", price: 33.40, category_id: cat.id, image_url: "https://colorlib.com/tyche/wp-content/uploads/sites/17/2017/06/high-heels-1327020_1920-255x320.jpg")

cat = Category.find_or_create_by(name: "shirts and blouse")
Product.find_or_create_by(name: "mango shirt", price: 23.40, category_id: cat.id, image_url: "https://colorlib.com/tyche/wp-content/uploads/sites/17/2017/06/cute-955782_1920-255x320.jpg", featured: true)
Product.find_or_create_by(name: "blue sweater", price: 43.40, category_id: cat.id, image_url: "https://colorlib.com/tyche/wp-content/uploads/sites/17/2017/06/fashion-1283863_1920-255x320.jpg", featured: true)
Product.find_or_create_by(name: "asabi-jeans", price: 33.40, category_id: cat.id, image_url: "https://colorlib.com/tyche/wp-content/uploads/sites/17/2017/06/person-1148941_1920-255x320.jpg", featured: true)
Product.find_or_create_by(name: "merchantile-blouse", price: 8.30, category_id: cat.id, image_url: "https://colorlib.com/tyche/wp-content/uploads/sites/17/2017/06/fashion-984044_1920-255x320.jpg", featured: true)