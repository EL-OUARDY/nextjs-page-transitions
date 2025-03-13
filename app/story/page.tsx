import AnimatedParagraph from "@/components/ui/AnimatedParagraph";
import BlockTextReveal from "@/components/ui/BlockTextReveal/BlockTextReveal";
import { Timeline } from "@/components/ui/TimeLine";

function page() {
  const items = [
    {
      date: "2024-03-07",
      title: "Urban Elegance",
      description:
        "Explore street-inspired fashion where comfort meets style. Effortlessly transition from daytime casual to nighttime chic with bold prints, relaxed fits, and dynamic textures.",
      href: "#",
    },
    {
      date: "2023-06-11",
      title: "Vintage Revival",
      description:
        "Rediscover timeless classics reimagined for today's trendsetters. Celebrate retro charm with tailored silhouettes, nostalgic patterns, and fabrics that evoke fashion history.",
      href: "#",
    },
    {
      date: "2021-04-27",
      title: "Bold Statements",
      description:
        "Make a statement with fashion-forward designs that push the boundaries of creativity. Explore bold prints, vibrant colors, and unique cuts that highlight individuality and self-expression, leaving a lasting impression wherever you go.",
      href: "#",
    },
    {
      date: "2024-03-07",
      title: "Urban Elegance",
      description:
        "Explore street-inspired fashion where comfort meets style. Effortlessly transition from daytime casual to nighttime chic with bold prints, relaxed fits, and dynamic textures.",
      href: "#",
    },
    {
      date: "2023-06-11",
      title: "Vintage Revival",
      description:
        "Rediscover timeless classics reimagined for today's trendsetters. Celebrate retro charm with tailored silhouettes, nostalgic patterns, and fabrics that evoke fashion history.",
      href: "#",
    },
    {
      date: "2021-04-27",
      title: "Bold Statements",
      description:
        "Make a statement with fashion-forward designs that push the boundaries of creativity. Explore bold prints, vibrant colors, and unique cuts that highlight individuality and self-expression, leaving a lasting impression wherever you go.",
      href: "#",
    },
  ];

  return (
    <div className="flex flex-col space-y-10 py-36">
      <div className="space-y-2 text-center">
        <BlockTextReveal className="text-3xl font-bold">
          Ready to Refresh Your Style?
        </BlockTextReveal>
        <AnimatedParagraph
          className="text-muted-foreground text-lg"
          delay={0.8}
        >
          Here&apos;s what&apos;s new in fashion lately
        </AnimatedParagraph>
      </div>
      <Timeline
        items={items}
        initialCount={10}
        titleClassName="font-normal"
        descriptionClassName="text-muted-foreground/80"
        dateClassName="font-light"
        lineClassName="border-l border-border/50"
        dotClassName="bg-muted-foreground/40 group-hover:bg-muted-foreground size-2 transition-colors duration-300"
      />
    </div>
  );
}

export default page;
