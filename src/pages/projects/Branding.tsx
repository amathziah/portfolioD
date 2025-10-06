import { useNavigate } from "react-router-dom";
import Img1 from "../../images/Logo print1.png";
import Img2 from "../../images/Logo print-02.png";
import Img3 from "../../images/Logo print-03.png";
import Img4 from "../../images/Logo print-04.png";
import Img5 from "../../images/Logo print-05.png";
import Img6 from "../../images/Logo print-06.png";

const images = [Img1, Img2, Img3, Img4, Img5, Img6];

export default function Branding() {
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

      {/* Branding Images stacked vertically */}
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



