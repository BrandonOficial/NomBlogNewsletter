import Image from "next/image";

interface AvatarProps {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Avatar = ({
  src,
  alt,
  size = "sm",
  className = "",
}: AvatarProps) => {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  };

  if (!src) {
    return (
      <div
        className={`${sizeClasses[size]} rounded-full bg-gray-200 flex items-center justify-center ${className}`}
        aria-label={alt}
      >
        <span className="text-xs font-medium text-gray-500">
          {alt.charAt(0).toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`${sizeClasses[size]} rounded-full overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={24}
        height={24}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
