import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

/**
 * Emblema oficial do CVAERJ.
 * A logo original (quadrado sobre fundo navy) é exibida sem qualquer alteração,
 * dentro de um recipiente com a mesma tonalidade para integração visual perfeita.
 */
export function Logo({ className, priority }: LogoProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center overflow-hidden rounded-[22%] bg-navy-900 shadow-lg shadow-navy-950/30 ring-1 ring-white/10",
        className,
      )}
    >
      <Image
        src="/logo-cvaerj.png"
        alt="CVAERJ — Circuito de Vôlei Amador do Estado do Rio de Janeiro"
        width={1254}
        height={1254}
        priority={priority}
        className="h-full w-full rounded-[22%] object-cover"
      />
    </div>
  );
}
