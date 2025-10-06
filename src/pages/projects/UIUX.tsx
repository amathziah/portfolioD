import { useNavigate } from "react-router-dom";
import UXImg from "../../images/UXp.png";

export default function UIUX() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-b from-[#010312] to-[#1a1a1a] pt-6 pb-12 min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-6 left-6 px-5 py-2 bg-[#E76F51] text-white rounded-lg shadow-lg z-50 hover:bg-[#d65f41] transition-colors duration-300"
      >
        ← Back
      </button>

      {/* UI/UX Image */}
      <div className="w-full flex justify-center mt-6">
        <img
          src={UXImg}
          alt="UI/UX Project"
          className="w-[650px] h-[379px] object-contain rounded-xl shadow-2xl border border-[#E76F51]"
        />
      </div>
    </div>
  );
}

  