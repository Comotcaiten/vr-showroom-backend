import BrandDB from "../models/Brand.js";

class BrandService {

  async getAll() {
    return await BrandDB.find({ _delete: false });
  }

  async getById(id) {
    
    return await BrandDB.findOne({
      _id: id,
      _delete: false
    });
  }

  async create(data) {
    const newBrand = new BrandDB({
      ...data,
      _delete: false
    });

    return await newBrand.save();
  }

  async update(id, data) {
    return await BrandDB.findOneAndUpdate(
      { _id: id, _delete: false },
      data,
      { new: true }
    );
  }

  // Soft delete
  async delete(id) {
    return await BrandDB.findOneAndUpdate(
      { _id: id },
      { _delete: true },
      { new: true }
    );
  }

  // Hard delete
  async destroy(id) {
    return await BrandDB.findByIdAndDelete(id);
  }

}

export default new BrandService();