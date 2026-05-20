import { skills } from "@/data/site";
import { BrandIcon, techNameToIcon } from "@/components/ui/BrandIcon";

export function TechMarquee() {
  const items = Object.values(skills).reduce<string[]>((all, group) => {
    all.push(...group);
    return all;
  }, []);
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-white/[0.02] py-4 light:border-slate-900/10 light:bg-slate-50/60">
      <div className="flex w-max animate-marquee items-center gap-2.5">
        {loop.map((item, index) => {
          const iconKey = techNameToIcon[item.toLowerCase()];
          return (
            <span
              key={`${item}-${index}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-sm font-medium text-silver/75 light:border-slate-200 light:bg-white light:text-slate-700"
            >
              {iconKey ? (
                <BrandIcon name={iconKey} className="h-[18px] w-[18px] rounded-sm" />
              ) : (
                <span className="h-[18px] w-[18px] rounded-sm bg-white/10 light:bg-slate-200" />
              )}
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
