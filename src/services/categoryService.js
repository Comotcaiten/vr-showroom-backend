import CategoryDB from "../models/Category.js";

class CategoryService {

  async getAll() {
    return await CategoryDB.find({ _delete: false });
  }

  async getById(id) {
    
    return await CategoryDB.findOne({
      _id: id,
      _delete: false
    });
  }

  async create(data) {
    const newCategory = new CategoryDB({
      ...data,
      _delete: false
    });

    return await newCategory.save();
  }

  async update(id, data) {
    return await CategoryDB.findOneAndUpdate(
      { _id: id, _delete: false },
      data,
      { new: true }
    );
  }

  // Soft delete
  async delete(id) {
    return await CategoryDB.findOneAndUpdate(
      { _id: id },
      { _delete: true },
      { new: true }
    );
  }

  // Hard delete
  async destroy(id) {
    return await CategoryDB.findByIdAndDelete(id);
  }

}

export default new CategoryService();