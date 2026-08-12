import logo from "@/assets/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Written Beyond Belief — explore, expand, create"
      className={`feather-edges select-none ${className}`}
      loading="eager"
    />
  );
}
