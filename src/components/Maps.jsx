export const GoogleMapEmbed = ({
  latitude,
  longitude,
  zoom = 14,
  height = "400px",
}) => {
  if (!latitude || !longitude) return <p>Koordinat tidak tersedia</p>;

  // const src = `https://maps.google.com/maps?q=-7.5778458,110.6783925&z=14&output=embed`;
  // const src = `https://maps.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`;
  const src = `https://www.google.com/maps?q=${latitude},${longitude}&z=${zoom}&t=h&output=embed`;

  return (
    <div className="w-full" style={{ height }}>
      <iframe
        className="w-full h-full rounded-2xl"
        title="Google Map"
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
