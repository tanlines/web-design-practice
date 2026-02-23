import {
  ChevronDownIcon,
  ExternalLinkIcon,
  MenuIcon,
  PhoneIcon,
  StarIcon,
} from "lucide-react";
import homeHeaderImage from "../assets/workyard-img.avif";
import accentHeaderImage from "../assets/workyard-header.svg";
import { cn } from "../lib/utils";
import { WorkyardSvg } from "../components/WorkyardSvg";
import { useState } from "react";
import "../css/workyard.css";

export default function Workyard() {
  return (
    <>
      <Navigation />
      <MainContent />
    </>
  );
}

function MainContent() {
  return (
    <div className={cn("bg-teal", "h-screen w-full")}>
      <div
        className={cn(
          "flex inset-0 flex-end absolute justify-center top-40 left-0 bg-teal",
          "w-full h-full z-0",
        )}
      >
        <img
          src={accentHeaderImage}
          alt="Workyard"
          className="pointer-events-none"
        />
      </div>
      <div
        className={cn(
          "flex flex-col items-center justify-between gap-4",
          "max-w-7xl m-auto px-5 pt-20 z-10",
          "lg:flex-row",
        )}
      >
        <div
          className={cn("flex flex-col gap-4", "w-full z-2 p-4", "lg:w-3xl")}
        >
          <h1
            className={cn(
              "text-white font-bold leading-16",
              "text-xl xs:text-2xl md:text-3xl lg:text-5xl max-w-2xl",
            )}
          >
            Workforce management built for the field
          </h1>
          <p className={cn("text-white", "text-lg")}>
            Track your crew with GPS. <br /> Save time. Cut costs. Ensure
            compliance. <br /> Get started in minutes with Workyard.
          </p>
          <div className={cn("flex flex-row gap-2 items-center")}>
            <a
              href="https://github.com/tanlines/temu-workyard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={cn(
                  "flex-[1 1 auto] rounded-md",
                  "bg-turquoise hover:bg-turquoise text-black font-semibold",
                  "text-xl lg:text-2xl h-18 w-50 lg:w-60",
                  "hover:translate-y-1 hover:shadow-xl shadow-lg",
                  "transition-all duration-300",
                  "cursor-pointer",
                )}
              >
                <span className="flex flex-row items-center justify-center gap-2 text-dark-slate-blue">
                  View Github <ExternalLinkIcon className="size-5 xl:size-6" />
                </span>
              </button>
            </a>

            <div className={cn("flex flex-col gap-2", "px-2 py-4")}>
              <div className="flex flex-row">
                {[...Array(5)].map((_, idx) => (
                  <StarIcon
                    key={idx}
                    className="size-5 xl:size-6 text-yellow-500"
                  />
                ))}
              </div>

              <p className={cn("text-white font-medium", "text-xs xl:text-sm")}>
                Trusted by 0+ workers
              </p>
            </div>
          </div>
        </div>
        <div className={cn("w-full z-2", "p-4", "md:w-3xl")}>
          <img src={homeHeaderImage} alt="Workyard" />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      className={cn("flex justify-center", "bg-teal h-18 w-full font-medium")}
    >
      <div
        className={cn(
          "flex flex-row flex-1 items-center justify-between",
          "max-w-7xl m-auto px-5 z-50",
        )}
      >
        <nav className="flex justify-center items-center">
          <WorkyardSvg
            className={cn("w-3/12 min-w-30 max-w-40", "text-white mr-8")}
          />
          <ul className={cn("flex flex-row", "text-white", "hidden lg:flex")}>
            <NavItem title="Product" />
            <NavItem title="Solutions" />
            <NavItem title="Integrations" chevron={false} />
            <NavItem title="Pricing" chevron={false} />
            <NavItem title="Reviews" chevron={false} />
            <NavItem title="Resources" />
          </ul>
        </nav>
        <div
          className={cn(
            "bg-teal h-full w-full -z-10",
            isMenuOpen ? "translate-y-0" : "-translate-y-1000",
            "transition-all duration-300",
            "lg:hidden fixed top-0 left-0 right-0 bottom-0",
          )}
        >
          <div className="w-[90%] m-auto max-w-3xl pt-20">
            <nav className="lg:hidden">
              <ul
                className={cn("flex flex-col items-start gap-5", "text-white")}
              >
                <NavItem title="Product" orientation="vertical" />
                <NavItem title="Solutions" orientation="vertical" />
                <NavItem
                  title="Integrations"
                  chevron={false}
                  orientation="vertical"
                />
                <NavItem
                  title="Pricing"
                  chevron={false}
                  orientation="vertical"
                />
                <NavItem
                  title="Reviews"
                  chevron={false}
                  orientation="vertical"
                />
                <NavItem title="Resources" orientation="vertical" />
              </ul>
            </nav>
          </div>
        </div>
        <div className={cn("flex flex-row items-center justify-center gap-2")}>
          <a
            href="/"
            className={cn(
              "text-white hover:text-turquoise",
              "text-sm pr-4 text-nowrap",
              "transition-all duration-300",
              "hidden lg:block",
            )}
          >
            Contact sales
          </a>
          <PhoneIcon className="size-6 text-white lg:hidden" />
          <button
            className={cn(
              "flex-[1 1 auto] rounded-md",
              "bg-turquoise hover:bg-turquoise text-black font-semibold",
              "text-sm h-12 w-18 md:w-18 lg:w-36",
              "hover:translate-y-1 shadow-lg",
              "transition-all duration-300",
            )}
          >
            Try free
          </button>
          <button
            className={cn(
              "rounded-md font-semibold text-sm h-12 w-18",
              "bg-[#cafffa] hover:bg-[#0fffe6] text-teal hover:text-black",
              "hover:translate-y-1",
              "transition-all duration-300",
              "hidden lg:block",
            )}
          >
            Login
          </button>
          <MenuIcon
            className="cursor-pointer size-6 text-white lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>
    </div>
  );
}

function NavItem({
  title,
  chevron = true,
  orientation = "horizontal",
}: {
  title: string;
  chevron?: boolean;
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <li
      className={cn(
        "flex flex-row items-center gap",
        "hover:text-turquoise transition-all duration-300 group",
      )}
    >
      <a
        href="/"
        className={cn(
          orientation === "vertical"
            ? "text-base lg:text-xl"
            : "text-xs xl:text-xs 2xl:text-base",
        )}
      >
        {title}
      </a>
      {chevron ? (
        <ChevronDownIcon
          className={cn(
            "size-4 ml-2 mr-4 lg:size-5",
            "group-hover:rotate-180 transition-all duration-300",
          )}
        />
      ) : (
        <span className="mr-4" />
      )}
    </li>
  );
}
