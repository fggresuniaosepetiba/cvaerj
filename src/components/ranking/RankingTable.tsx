import { Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import type { RankingEntry } from "@/data/ranking";
import { teams } from "@/data/teams";

type RankingTableProps = {
  entries: RankingEntry[];
};

const positionClasses: Record<number, string> = {
  1: "bg-gold-400 text-navy-950",
  2: "bg-cream-200 text-navy-900",
  3: "bg-gold-700/70 text-white",
};

function TeamEmblemMini({
  teamId,
  initials,
}: {
  teamId: string;
  initials: string;
}) {
  const team = teams.find((t) => t.id === teamId);
  const [color, fg] = team?.emblem.split(":") ?? ["#0a2c5e", "#f6be63"];
  return (
    <span
      aria-hidden
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-display text-xs font-black uppercase"
      style={{ backgroundColor: color, color: fg }}
    >
      {team?.initials ?? initials}
    </span>
  );
}

export function RankingTable({ entries }: RankingTableProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg shadow-navy-900/10 ring-1 ring-navy-900/10">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left">
          <caption className="sr-only">
            Tabela de classificação do ranking do CVAERJ
          </caption>
          <thead>
            <tr className="border-b border-navy-900/10 bg-navy-950 text-xs font-bold uppercase tracking-widest text-gold-300">
              <th scope="col" className="px-5 py-4 text-center">
                #
              </th>
              <th scope="col" className="px-5 py-4">
                Equipe
              </th>
              <th scope="col" className="px-5 py-4 text-center">
                Etapas
              </th>
              <th scope="col" className="px-5 py-4 text-center">
                Títulos
              </th>
              <th scope="col" className="px-5 py-4 text-right">
                Pontos
              </th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr
                key={entry.teamId}
                className={cn(
                  "border-b border-navy-900/5 transition-colors last:border-0 hover:bg-gold-400/10",
                  index % 2 === 1 && "bg-navy-900/[0.02]",
                )}
              >
                <td className="px-5 py-4 text-center">
                  <span
                    className={cn(
                      "mx-auto flex h-8 w-8 items-center justify-center rounded-full font-display text-sm font-black",
                      positionClasses[entry.position] ??
                        "bg-navy-900/5 text-navy-900/60",
                    )}
                  >
                    {entry.position}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <TeamEmblemMini teamId={entry.teamId} initials="VC" />
                    <span className="font-display font-bold text-navy-900">
                      {entry.team}
                    </span>
                    {entry.position <= 3 && (
                      <Trophy
                        aria-hidden
                        className={cn(
                          "h-4 w-4",
                          entry.position === 1
                            ? "text-gold-500"
                            : "text-navy-900/30",
                        )}
                      />
                    )}
                  </div>
                </td>
                <td className="px-5 py-4 text-center text-sm font-medium text-navy-900/60">
                  {entry.stages}
                </td>
                <td className="px-5 py-4 text-center text-sm font-medium text-navy-900/60">
                  {entry.titles}
                </td>
                <td className="px-5 py-4 text-right">
                  <span className="font-display text-lg font-black text-gold-600">
                    {entry.points}
                  </span>
                  <span className="ml-1 text-xs font-semibold uppercase text-navy-900/40">
                    pts
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
