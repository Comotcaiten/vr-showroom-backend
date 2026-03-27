import { supabase } from "../configs/supabase.js";

const storageBucket = "vr-showroom";
const storageFolder = "models";

class UploadService {

  async uploadModel(file) {

    console.log(`file name original: ${file.originalname}`);

    const fileExt = file.originalname.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `${storageFolder}/${fileName}`;

    const { data, error } = await supabase.storage
      .from(storageBucket) // bucket name
      .upload(filePath, file.buffer, {
        contentType: file.mimetype,
      });

    if (error) {
      throw new Error(error.message);
    }

    // lấy public URL
    const { data: publicUrl } = supabase.storage
      .from(storageBucket)
      .getPublicUrl(filePath);

    return publicUrl.publicUrl;
  }

  async deleteFile(fileUrl) {

    // ví dụ URL:
    // https://xxx.supabase.co/storage/v1/object/public/vr-showroom/abc.glb

    const filePath = fileUrl.split("/vr-showroom/")[1];

    if (!filePath) {
      throw new Error("Invalid file URL");
    }

    const { error } = await supabase.storage
      .from(storageBucket)
      .remove([filePath]);

    if (error) {
      throw new Error(error.message);
    }

    return true;
  }
}

export default new UploadService();