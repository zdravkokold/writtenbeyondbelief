import logo from "@/assets/logo.png";

export function Logo({
  className = "",
  feather = true,
  href,
}: {
  className?: string;
  feather?: boolean;
  href?: string;
}) {
  const image = (
    <img
      src={logo}
      alt="Written Beyond Belief — explore, expand, create"
      className={`${feather ? "feather-edges" : ""} select-none ${className}`}
      loading="eager"
    />
  );

  // Ако има подаден href, обвиваме лого снимката в линк
  if (href) {
    return (
      <a href={href} className="inline-block">
        {image}
      </a>
    );
  }

  return image;
}