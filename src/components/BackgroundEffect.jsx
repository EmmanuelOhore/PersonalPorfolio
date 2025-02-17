// background effect component
const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* First Layer: Soft Blue Gradient with Subtle Transparency */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-3xl animate-pulse" />

    {/* Second Layer: Softer Gradient with Even More Transparency */}
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 via-transparent to-teal-300/10 blur-2xl animate-float" />
  </div>
);

export default BackgroundEffect;
