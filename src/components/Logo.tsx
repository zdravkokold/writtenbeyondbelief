import logo from "@/assets/logo.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="Written Beyond Belief — explore, expand, create"
      className={`feather-edges select-none ${className}`}
      loading="eager"
    />
  );
}
