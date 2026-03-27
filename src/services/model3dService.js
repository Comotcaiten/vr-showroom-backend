import ModelDB from "../models/Model3D.js";

class ModelsService {

  async getAll() {
    return await ModelDB.find({ _delete: false });
  }

  async getById(id) {
    
    return await ModelDB.findOne({
      _id: id,
      _delete: false
    });
  }

  async create(data) {

    const newModel = new ModelDB({
      ...data,
      _delete: false
    });

    return await newModel.save();
  }

  async update(id, data) {
    return await ModelDB.findOneAndUpdate(
      { _id: id, _delete: false },
      data,
      { new: true }
    );
  }

  // Soft delete
  async delete(id) {
    return await ModelDB.findOneAndUpdate(
      { _id: id },
      { _delete: true },
      { new: true }
    );
  }

  // Hard delete
  async destroy(id) {
    return await ModelDB.findByIdAndDelete(id);
  }

}

export default new ModelsService();