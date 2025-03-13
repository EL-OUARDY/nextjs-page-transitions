"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import BlockTextReveal from "./BlockTextReveal/BlockTextReveal";
import AnimatedParagraph from "./AnimatedParagraph";

interface TimelineItem {
  date: string;
  title: string;
  description?: string;
  href?: string;
  icon?: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
  initialCount?: number;
  dateFormat?: Intl.DateTimeFormatOptions;
  className?: string;
  showMoreText?: string;
  showLessText?: string;
  dotClassName?: string;
  lineClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  dateClassName?: string;
  buttonVariant?: "default" | "outline" | "ghost" | "link";
  buttonSize?: "default" | "sm" | "lg";
  animationDuration?: number;
  animationDelay?: number;
  showAnimation?: boolean;
}

function DesktopTimelineEntry({
  item,
  dotClassName,
  lineClassName,
  titleClassName,
  descriptionClassName,
  dateClassName,
}: {
  item: TimelineItem;
  dotClassName?: string;
  lineClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  dateClassName?: string;
}) {
  return (
    <Link
      href={item.href || "#"}
      className={cn(
        "group hidden grid-cols-9 items-center md:grid",
        !item.href && "pointer-events-none",
      )}
    >
      <dl className="col-span-2">
        <dt className="sr-only">Date</dt>
        <dd
          className={cn(
            "text-muted-foreground group-hover:text-foreground text-base font-medium transition-colors",
            dateClassName,
          )}
        >
          <BlockTextReveal className="">
            <time dateTime={item.date}>
              {new Date(item.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </BlockTextReveal>
        </dd>
      </dl>
      <div className="col-span-7 flex items-center">
        <div className="relative ml-4">
          <div
            className={cn("border-border h-16 border-l pr-8", lineClassName)}
          />
          <div
            className={cn(
              "bg-primary/60 group-hover:bg-primary absolute top-[1.6875rem] -left-1 flex h-5 w-5 items-center justify-center rounded-full transition-colors",
              !item.icon && "h-2.5 w-2.5",
              dotClassName,
            )}
          >
            {item.icon && (
              <div className="text-primary-foreground h-3 w-3">{item.icon}</div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3
            className={cn(
              "text-muted-foreground group-hover:text-foreground text-xl font-medium tracking-tight transition-colors",
              titleClassName,
            )}
          >
            <BlockTextReveal className="">{item.title}</BlockTextReveal>
          </h3>
          {item.description && (
            <div
              className={cn(
                "text-muted-foreground group-hover:text-muted-foreground/80 text-sm",
                descriptionClassName,
              )}
            >
              <AnimatedParagraph delay={0.8}>
                {item.description}
              </AnimatedParagraph>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

function MobileTimelineEntry({
  item,
  dotClassName,
  lineClassName,
  titleClassName,
  descriptionClassName,
  dateClassName,
}: {
  item: TimelineItem;
  dotClassName?: string;
  lineClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  dateClassName?: string;
}) {
  return (
    <Link
      href={item.href || "#"}
      className={cn(
        "hover:bg-muted active:bg-muted/80 flex items-center space-x-4 rounded-lg px-4 py-3 transition-colors md:hidden",
        !item.href && "pointer-events-none",
      )}
    >
      <div className="relative">
        <div className={cn("border-border h-16 border-l", lineClassName)} />
        <div
          className={cn(
            "bg-primary/60 absolute top-5 -left-1 flex h-5 w-5 items-center justify-center rounded-full",
            !item.icon && "h-2.5 w-2.5",
            dotClassName,
          )}
        >
          {item.icon && (
            <div className="text-primary-foreground h-3 w-3">{item.icon}</div>
          )}
        </div>
      </div>
      <div>
        <dl>
          <dt className="sr-only">Date</dt>
          <dd
            className={cn(
              "text-muted-foreground text-sm font-medium",
              dateClassName,
            )}
          >
            <BlockTextReveal className="">
              <time dateTime={item.date}>
                {new Date(item.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </BlockTextReveal>
          </dd>
        </dl>
        <h3
          className={cn(
            "text-foreground text-lg font-medium tracking-tight",
            titleClassName,
          )}
        >
          <BlockTextReveal className="">{item.title}</BlockTextReveal>
        </h3>
        {item.description && (
          <div
            className={cn(
              "text-muted-foreground text-sm",
              descriptionClassName,
            )}
          >
            <AnimatedParagraph delay={0.8}>
              {item.description}
            </AnimatedParagraph>
          </div>
        )}
      </div>
    </Link>
  );
}

export function Timeline({
  items,
  initialCount = 5,
  className,
  showMoreText = "Show More",
  showLessText = "Show Less",
  dotClassName,
  lineClassName,
  titleClassName,
  descriptionClassName,
  dateClassName,
  buttonVariant = "ghost",
  buttonSize = "sm",
  animationDuration = 0.3,
  animationDelay = 0.1,
  showAnimation = true,
}: TimelineProps) {
  const [showAll, setShowAll] = useState(false);
  const sortedItems = items.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const initialItems = sortedItems.slice(0, initialCount);
  const remainingItems = sortedItems.slice(initialCount);

  return (
    <div className={cn("mx-5 max-w-2xl md:mx-auto", className)}>
      <div className="">
        <ul className="space-y-8">
          {initialItems.map((item, index) => (
            <motion.li
              key={index}
              initial={showAnimation ? { opacity: 0, y: 20 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: animationDuration,
                delay: index * animationDelay,
              }}
            >
              <DesktopTimelineEntry
                item={item}
                dotClassName={dotClassName}
                lineClassName={lineClassName}
                titleClassName={titleClassName}
                descriptionClassName={descriptionClassName}
                dateClassName={dateClassName}
              />
              <MobileTimelineEntry
                item={item}
                dotClassName={dotClassName}
                lineClassName={lineClassName}
                titleClassName={titleClassName}
                descriptionClassName={descriptionClassName}
                dateClassName={dateClassName}
              />
            </motion.li>
          ))}
          <AnimatePresence>
            {showAll &&
              remainingItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    duration: animationDuration,
                    delay: index * animationDelay,
                  }}
                >
                  <DesktopTimelineEntry
                    item={item}
                    dotClassName={dotClassName}
                    lineClassName={lineClassName}
                    titleClassName={titleClassName}
                    descriptionClassName={descriptionClassName}
                    dateClassName={dateClassName}
                  />
                  <MobileTimelineEntry
                    item={item}
                    dotClassName={dotClassName}
                    lineClassName={lineClassName}
                    titleClassName={titleClassName}
                    descriptionClassName={descriptionClassName}
                    dateClassName={dateClassName}
                  />
                </motion.li>
              ))}
          </AnimatePresence>
        </ul>
      </div>
      {remainingItems.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 flex justify-center"
        >
          <Button
            variant={buttonVariant}
            size={buttonSize}
            className="gap-2"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? showLessText : showMoreText}
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </Button>
        </motion.div>
      )}
    </div>
  );
}
