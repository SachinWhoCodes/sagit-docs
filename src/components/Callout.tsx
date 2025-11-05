import { Info, CheckCircle, AlertTriangle, AlertCircle } from "lucide-react";

interface CalloutProps {
  variant?: "info" | "success" | "warn" | "danger";
  children: React.ReactNode;
  title?: string;
}

const variants = {
  info: {
    icon: Info,
    className: "bg-primary/10 border-primary/20 text-primary",
  },
  success: {
    icon: CheckCircle,
    className: "bg-success/10 border-success/20 text-success",
  },
  warn: {
    icon: AlertTriangle,
    className: "bg-warning/10 border-warning/20 text-warning",
  },
  danger: {
    icon: AlertCircle,
    className: "bg-danger/10 border-danger/20 text-danger",
  },
};

export function Callout({ variant = "info", children, title }: CalloutProps) {
  const { icon: Icon, className } = variants[variant];

  return (
    <div className={`flex gap-3 p-4 rounded-lg border ${className} my-4`}>
      <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        {title && <div className="font-semibold mb-1">{title}</div>}
        <div className="text-sm opacity-90">{children}</div>
      </div>
    </div>
  );
}
