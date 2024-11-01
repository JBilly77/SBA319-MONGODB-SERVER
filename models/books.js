import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
     type: String, required: true 
    },
  authors: [{ type: String }],
  publicationDate: { 
    type: Date, 
    },
  isbn: { 
    type: String, unique: true
 },
  pages: { type: Number },
  genre: { type: String},
  description: { type: String },
  publisher: { type: String }     
}, { timestamps: true });

export default mongoose.model('Book', bookSchema);