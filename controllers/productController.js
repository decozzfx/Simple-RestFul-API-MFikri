import Product from '../models/product.js'

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find() // Mengambil data dari mongodb
        res.json({products, message : "data yang semua didapatkan"})

    }catch(err){
        res.status(500).json({ message : err.message}) // 500 = internal status error. dari sisi server
    }
}

export const getProductsById = async (req, res) => {
    const id = req.params.id
    try {
        const product = await Product.findById(id) // Mengambil data dari mongodb berdasarkan id
        res.json({product, message : "data yang diambil berdasarkan id"})

    }catch(err){
        res.status(404).json({ message : err.message}) // 404 = Not found. dari sisi server
    }
}

export const saveProduct = async (req, res) => {
        const product = new Product(req.body) // Product adalah model schema
    try {
        const products = await product.save() // Mengambil data dari mongodb
        res.status(201).json({products, message : "data telah disimpan"}) // "201 = created

    }catch(err){
        res.status(400).json({ message : err.message}) // 400 = bad request, kesalahan dari sisi client
       
    }
}

export const updateProduct = async (req, res) => {
    const id = req.params.id
    const body = req.body
    const cekId = await Product.findById(id)  // validasi id ada atau tidak
    if(!cekId) return res.status(404).json({message : "Data tidak ditemukan"})
    try {
        const updatedProduct = await Product.updateOne({ _id : id}, {$set : body}) // Mengupdate data dari mongodb
        res.status(200).json({updatedProduct, message : "data telah diperbarui"}) // 201 = updated
        

    }catch(err){
        res.status(400).json({ message : err.message}) // 400 = bad request, kesalahan dari sisi client
    }
}

export const deleteProduct = async (req, res) => {
    const id = req.params.id
    const cekId = await Product.findById(id)  // validasi id ada atau tidak
    if(!cekId) return res.status(404).json({message : "Data tidak ditemukan"})
    try {
        const deletedProduct = await Product.deleteOne({ _id : id}) // Mengupdate data dari mongodb
        res.status(200).json({deletedProduct, message : "data telah dihapus"}) // 201 = updated
    }catch(err){
        res.status(400).json({ message : err.message}) // 400 = bad request, kesalahan dari sisi client
    }
}