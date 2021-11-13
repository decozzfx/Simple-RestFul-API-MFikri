import mongoose from 'mongoose'

// Model adalah tempat menyimpan Schema
// Schema adalah struktur/blueprint data untuk akses data di database

const product = mongoose.Schema({
    title : {
        type : String,
        require : true,
    },
    price : {
        type : Number,
        require : true,
    }
})

export default mongoose.model('Products', product) // export module mongoose (<Collection>, <Schema>)