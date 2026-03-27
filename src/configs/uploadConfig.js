export const uploadConfigs = {
  image: {
    folder: "images",
    allowedMimeTypes: ["image/jpeg", "image/png", "image/webp"],
    maxSize: 5 * 1024 * 1024, // 5MB
  },

  model3d: {
    folder: "models",
    allowedMimeTypes: [
      "model/gltf+json",      // .gltf
      "model/gltf-binary",    // .glb
      "application/octet-stream", // fallback cho .glb
    ],
    maxSize: 50 * 1024 * 1024, // 50MB (model nặng)
  },

  document: {
    folder: "docs",
    allowedMimeTypes: ["application/pdf"],
    maxSize: 10 * 1024 * 1024,
  },
};