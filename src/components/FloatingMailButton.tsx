import { Mail } from "lucide-react";

export function FloatingMailButton() {
  return (
    <a
      href="mailto:info@fluxsrl.com"
      aria-label="Scrivici via email"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:-translate-y-[2px]"
    >
      <Mail size={24} strokeWidth={2} />
    </a>
  );
}
