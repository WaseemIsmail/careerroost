function SectionHeading({
  title,
  subtitle,
  align = "center",   // center | left
  className = "",
}) {
  return (
    <div
      className={`mb-8 ${
        align === "center" ? "text-center mx-auto" : "text-left"
      } ${className}`}
    >
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-3 text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;