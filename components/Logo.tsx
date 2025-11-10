import LogoSVG from "../assets/logo.svg";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-12 w-auto" }: LogoProps) {
  return <LogoSVG className={className} aria-label="RIDES-HCM Logo" />;
}
