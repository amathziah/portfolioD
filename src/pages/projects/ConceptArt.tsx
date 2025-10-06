import { useNavigate } from "react-router-dom";
import Img1 from "/src/images/731095a7678df384fd78dfe01bb8ffd0a75428c9.jpg";
import Img2 from "/src/images/887efb011804ca5a343e06ee84ca51b9570e62f0.jpg";
import Img3 from "/src/images/95b63041bf34ad09652a43cf8eb4d60d878f3240.png";
import Img4 from "/src/images/5ac52a50be8dc3ab757e2ee8d087e3daa60ee9c1.jpg";

const images = [Img1, Img2, Img3, Img4];

export default function ConceptArt() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-b from-[#010312] to-[#1a1a1a] pt-6 pb-12">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-6 left-6 px-5 py-2 bg-[#E76F51] text-white rounded-lg shadow-lg z-50 hover:bg-[#d65f41] transition-colors duration-300"
      >
        ← Back
      </button>

      {/* Concept Images stacked vertically */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`w-full flex justify-center ${i !== images.length - 1 ? "mb-6" : ""}`}
        >
          <div className="relative group">
            <img
              src={img}
              alt={`Branding ${i + 1}`}
              className="w-[650px] h-[379px] object-contain rounded-xl shadow-2xl border border-[#E76F51]"
            />
            {/* Optional hover overlay */}
            <div className="absolute inset-0 bg-black/10 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </div>
        </div>
      ))}
    </div>
  );
}



