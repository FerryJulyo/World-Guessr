import { Viewer } from "mapillary-js";

// Ganti dengan Access Token dan Image ID valid
const accessToken = "YOUR_MAPILLARY_ACCESS_TOKEN";
const imageId = "YOUR_START_IMAGE_ID"; // bisa didapat dari koordinat tertentu via Graph API

const container = document.getElementById("mapillary-viewer");

const viewer = new Viewer({
  accessToken,
  container,
  imageId,
});
