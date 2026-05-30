import { CSSProperties, HTMLAttributes, ReactNode } from "react";

type AnimationMode = "auto-rotate" | "rotate-on-hover" | "stop-rotate-on-hover";

interface BorderRotateProps extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
  children: ReactNode;
  className?: string;
  animationMode?: AnimationMode;
  animationSpeed?: number;
  gradientColors?: {
    primary: string;
    secondary: string;
    accent: string;
  };
  backgroundColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  style?: CSSProperties;
}

const defaultGradientColors = {
  primary: "#1E1B4B",
  secondary: "#3730A3",
  accent: "#A5B4FC",
};

export function BorderRotate({
  children,
  className = "",
  animationMode = "auto-rotate",
  animationSpeed = 5,
  gradientColors = defaultGradientColors,
  backgroundColor = "rgba(255,255,255,0.86)",
  borderWidth = 1,
  borderRadius = 24,
  style = {},
  ...props
}: BorderRotateProps) {
  const getAnimationClass = () => {
    switch (animationMode) {
      case "auto-rotate":
        return "gradient-border-auto";
      case "rotate-on-hover":
        return "gradient-border-hover";
      case "stop-rotate-on-hover":
        return "gradient-border-stop-hover";
      default:
        return "";
    }
  };

  const combinedStyle = {
    "--gradient-primary": gradientColors.primary,
    "--gradient-secondary": gradientColors.secondary,
    "--gradient-accent": gradientColors.accent,
    "--bg-color": backgroundColor,
    "--border-width": `${borderWidth}px`,
    "--border-radius": `${borderRadius}px`,
    "--animation-duration": `${animationSpeed}s`,
    border: `${borderWidth}px solid transparent`,
    borderRadius: `${borderRadius}px`,
    backgroundImage: `
      linear-gradient(${backgroundColor}, ${backgroundColor}),
      conic-gradient(
        from var(--gradient-angle, 0deg),
        ${gradientColors.primary} 0%,
        ${gradientColors.secondary} 25%,
        ${gradientColors.accent} 34%,
        ${gradientColors.secondary} 43%,
        ${gradientColors.primary} 50%,
        ${gradientColors.secondary} 75%,
        ${gradientColors.accent} 84%,
        ${gradientColors.secondary} 93%,
        ${gradientColors.primary} 100%
      )
    `,
    backgroundClip: "padding-box, border-box",
    backgroundOrigin: "padding-box, border-box",
    ...style,
  } as CSSProperties;

  return (
    <div className={`gradient-border-component ${getAnimationClass()} ${className}`} style={combinedStyle} {...props}>
      {children}
    </div>
  );
}
