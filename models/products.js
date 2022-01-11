import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '商品名稱不能為空']
  },
  price: {
    type: Number,
    min: [0, '價格不得為零'],
    required: [true, '商品價格不能為空']
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  sell: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    // 預先設定好商品分類
    enum: {
      values: ['飾品', '皮件', '鞋子'],
      messsage: '商品分類不存在'
    }
  }
}, { versionKey: false })

export default mongoose.model('products', productSchema)
