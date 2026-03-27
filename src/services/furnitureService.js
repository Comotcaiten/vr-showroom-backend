import FurnitureDB from "../models/Furniture.js";

class FurnitureService {

  async getAll() {
    return await FurnitureDB.find({ _delete: false });
  }

  async getById(id) {
    
    return await FurnitureDB.findOne({
      _id: id,
      _delete: false
    });
  }

  async create(data) {
    const newFurniture = new FurnitureDB({
      ...data,
      _delete: false
    });

    return await newFurniture.save();
  }

  async update(id, data) {
    return await FurnitureDB.findOneAndUpdate(
      { _id: id, _delete: false },
      data,
      { new: true }
    );
  }

  // Soft delete
  async delete(id) {
    return await FurnitureDB.findOneAndUpdate(
      { _id: id },
      { _delete: true },
      { new: true }
    );
  }

  // Hard delete
  async destroy(id) {
    return await FurnitureDB.findByIdAndDelete(id);
  }

}

export default new FurnitureService();