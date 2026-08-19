import logo from "@/assets/logo.png";

export function Logo({
  className = "",
  feather = true,
}: {
  className?: string;
  feather?: boolean;
}) {
  return (
    <img
      src={logo}
      alt="Written Beyond Belief — explore, expand, create"
      className={`${feather ? "feather-edges" : ""} select-none ${className}`}
      loading="eager"
    />
  );
}
