import authBg from "../assets/img/bg_auth.png";

export const AuthLayouts = ({ children, style }) => {
  return (
    <div
      className={`relative flex items-center justify-center w-full ${style} bg-center bg-no-repeat bg-cover sm:h-screen`}
      style={{ backgroundImage: `url(${authBg})` }}
    >
      {/* Overlay gradient putih */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-white/50 to-white/0"></div>

      {/* Konten */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
