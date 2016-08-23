import mongoose from 'mongoose';

var taskSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    text: {
      type: String,
      required: true
    }
});

export default mongoose.model('Task', taskSchema);
