import mongoose from 'mongoose';

const readersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true, lowercase: true },
    birthdate: { type: Date },
    location: { type: String },
    favoriteAuthors: [{ type: String }]
}
);

export default mongoose.model('Readers', readersSchema);