import "../css/canva.css";
import * as React from "react";
import { cn } from "@/lib/utils";
import canvaLogo from "../assets/canva-logo.svg";
import canvaElement1 from "../assets/canva-element-1.webp";
import canvaElement2 from "../assets/canva-element-2.webp";
import canvaElement3 from "../assets/canva-element-3.webp";
import canvaElement4 from "../assets/canva-element-4.webp";
import canvaElement5 from "../assets/canva-element-5.webp";
import canvaElement6 from "../assets/canva-element-6.webp";
import canvaElement7 from "../assets/canva-element-7.webp";
import canvaElement8 from "../assets/canva-element-8.webp";
import canvaElement9 from "../assets/canva-element-9.webp";
import {
  ChevronRightIcon,
  MenuIcon,
  XIcon,
  ExternalLinkIcon,
} from "lucide-react";

export default function Canva() {
  return (
    <>
      <NavBar />
      <MainContent />
    </>
  );
}

function NavBar() {
  return (
    <div className={cn("z-20 fixed top-0 left-0 h-20 w-screen")}>
      <div className="w-[93%] ml-4 lg:ml-10 xl:ml-15 mr-auto justify-between flex items-center h-full">
        <CanvaLogo />
        <NavList />
        <LoginButtons />
      </div>
    </div>
  );
}

function HamburgerMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="flex items-center gap-2 lg:hidden cursor-pointer">
        <MenuIcon className="size-6 text-white" onClick={toggleMenu} />
      </div>
      <HamburgerMenuContent isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
}

function HamburgerMenuContent({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) {
  return (
    <>
      <div
        className={cn(
          "absolute top-0 left-0 w-[80%] h-screen bg-white flex flex-col items-start justify-end mb-10 z-20",
          isOpen ? "translate-x-0" : "-translate-x-1000",
          "transition-all duration-300",
        )}
        onClick={toggleMenu}
      >
        <div className="flex items-center justify-end w-full p-8">
          <XIcon
            className="size-6 text-black cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <div className="flex flex-col items-start justify-between w-full h-[80%]">
          <div className="flex flex-col items-start justify-center w-full">
            <HamburgerNavButton>Design</HamburgerNavButton>
            <HamburgerNavButton>Product</HamburgerNavButton>
            <HamburgerNavButton>Plans</HamburgerNavButton>
            <HamburgerNavButton>Business</HamburgerNavButton>
            <HamburgerNavButton>Education</HamburgerNavButton>
            <HamburgerNavButton>Help</HamburgerNavButton>
          </div>
          <div className="flex flex-col items-start justify-center w-full px-4 gap-2">
            <button className="hover:bg-purple-800 bg-purple-600 rounded-lg px-6 py-2 w-full">
              <span className="text-white text-xl text-center">Log in</span>
            </button>
            <button className="hover:bg-gray-200 bg-white rounded-lg px-6 py-2 w-full border border-gray-200">
              <span className="text-black text-xl text-center">Sign up</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "fixed top-0 left-0 w-screen h-screen overflow-hidden backdrop-blur-sm z-10 md:hidden",
          isOpen ? "opacity-100" : "opacity-0",
          "transition-all duration-300",
        )}
        onClick={toggleMenu}
      />
    </>
  );
}

function HamburgerNavButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="hover:bg-gray-200 bg-white rounded-lg px-6 py-2 w-full justify-between flex items-center">
      <span className="text-black text-xl">{children}</span>
      <ChevronRightIcon className="size-6 text-black" />
    </button>
  );
}

function CanvaLogo() {
  return (
    <div className="flex items-center justify-start gap-2">
      <HamburgerMenu />
      <img src={canvaLogo} alt="Canva Logo" className="size-25" />
    </div>
  );
}

type AnchorRect = { left: number; top: number } | null;

function NavList() {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [anchorRect, setAnchorRect] = React.useState<AnchorRect>(null);
  const [isOpen, setIsOpen] = React.useState(true);

  const handleNavClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      setIsOpen(true);
      const buttonRect = e.currentTarget.getBoundingClientRect();
      const wrapperRect = wrapper.getBoundingClientRect();
      setAnchorRect({
        left: buttonRect.left - wrapperRect.left + buttonRect.width / 2,
        top: buttonRect.top - wrapperRect.top,
      });
    },
    [],
  );

  return (
    <div ref={wrapperRef} className="relative flex items-center">
      <div className="items-center hidden lg:flex relative z-20">
        <NavButton onClick={handleNavClick}>Design</NavButton>
        <NavButton onClick={handleNavClick}>Product</NavButton>
        <NavButton onClick={handleNavClick}>Plans</NavButton>
        <NavButton onClick={handleNavClick}>Business</NavButton>
        <NavButton onClick={handleNavClick}>Education</NavButton>
        <NavButton onClick={handleNavClick}>Help</NavButton>
      </div>
      <NavViewport
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        anchorRect={anchorRect}
      />
    </div>
  );
}

function NavViewport({
  isOpen,
  setIsOpen,
  anchorRect,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  anchorRect: AnchorRect;
}) {
  return (
    <>
      <div
        className={cn(
          "absolute hidden lg:flex bg-white rounded-lg py-4 flex-col items-start justify-start z-20",
          anchorRect && isOpen
            ? "opacity-100"
            : "opacity-0 pointer-events-none",
          "transition-all duration-300",
        )}
        style={
          anchorRect
            ? {
                left: anchorRect.left - 150,
                top: anchorRect.top + 40,
                width: 300,
              }
            : {
                left: 0,
                top: 0,
                opacity: 0,
                pointerEvents: "none",
              }
        }
      >
        <div className="flex flex-col items-start justify-start px-2 w-full">
          <HamburgerNavButton>Design</HamburgerNavButton>
          <HamburgerNavButton>Product</HamburgerNavButton>
          <HamburgerNavButton>Plans</HamburgerNavButton>
          <HamburgerNavButton>Business</HamburgerNavButton>
          <HamburgerNavButton>Education</HamburgerNavButton>
          <HamburgerNavButton>Help</HamburgerNavButton>
        </div>
      </div>
      <div
        className={cn(
          "fixed top-0 left-0 w-screen h-screen z-10",
          anchorRect && isOpen ? "block" : "hidden",
        )}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}

function NavButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      className="hover:bg-white/5 rounded-lg px-2 py-2"
      onClick={onClick}
      onMouseEnter={onClick}
    >
      <span className="text-white text-sm">{children}</span>
    </button>
  );
}

function LoginButtons() {
  return (
    <div className="flex items-center gap-2">
      <button className="bg-white/10 rounded-lg px-4 py-1 hidden lg:block cursor-pointer">
        <span className="text-white">Sign up</span>
      </button>
      <button className="hover:bg-white bg-white/90 rounded-lg px-4 py-1 cursor-pointer">
        <span className="text-black">Log in</span>
      </button>
    </div>
  );
}

function MainContent() {
  return (
    <div className="bg-linear-(--canva-gradient-mobile) lg:bg-linear-(--canva-gradient) h-screen w-screen flex flex-col items-center justify-start absolute z-[-1] top-0 left-0">
      <MainHeader />
      <MainElements />
    </div>
  );
}

function MainElements() {
  return (
    <>
      <div className="flex-col items-center justify-center h-auto hidden md:flex w-screen overflow-hidden">
        <div className="flex items-center justify-center h-full gap-7 xl:*:size-45 md:*:size-40">
          <img src={canvaElement1} alt="Canva Element 1" />
          <img src={canvaElement2} alt="Canva Element 2" />
          <img src={canvaElement3} alt="Canva Element 3" />
          <img src={canvaElement4} alt="Canva Element 4" />
        </div>
        <div className="flex items-center justify-center h-full gap-7 xl:*:size-45 md:*:size-40">
          <img src={canvaElement5} alt="Canva Element 5" />
          <img src={canvaElement6} alt="Canva Element 6" />
          <img src={canvaElement7} alt="Canva Element 7" />
          <img src={canvaElement8} alt="Canva Element 8" />
          <img src={canvaElement9} alt="Canva Element 9" />
        </div>
      </div>
      <div className="pointer-events-none absolute top-0 left-0 w-screen h-full md:hidden *:size-40 overflow-hidden *:overflow-hidden *:absolute">
        <img
          src={canvaElement1}
          alt="Canva Element 1"
          className="top-1/3 left-[calc(100%-100px)]"
        />
        <img
          src={canvaElement5}
          alt="Canva Element 5"
          className="top-1/12 left-[50%]"
        />
        <img
          src={canvaElement3}
          alt="Canva Element 3"
          className="top-1/8 left-[20px]"
        />
        <img
          src={canvaElement7}
          alt="Canva Element 7"
          className="top-5/12 left-[-20px]"
        />
        <img
          src={canvaElement6}
          alt="Canva Element 6"
          className="top-7/12 left-[calc(100%-110px)]"
        />
        <img
          src={canvaElement2}
          alt="Canva Element 2"
          className="top-3/4 left-[60px]"
        />
      </div>
    </>
  );
}

function MainHeader() {
  return (
    <div className="flex flex-col items-center justify-start h-auto gap-3 pb-20 z-0">
      <h1
        className={cn(
          " text-white text-center",
          "text-[clamp(2rem,3rem+0.75vw,4rem)] md:text-8xl lg:text-6xl xl:text-7xl",
          "w-xs md:w-screen lg:w-full",
          "pt-50 leading-none md:pt-20 lg:pt-30 lg:leading-normal",
        )}
      >
        What will you design today?
      </h1>
      <p
        className={cn(
          "text-white opacity-90 text-center",
          "text-sm md:text-2xl xl:text-2xl lg:text-xl",
          "w-50 md:w-[60%] lg:w-full",
        )}
      >
        Make AI-powered social posts, videos, presentations, and more with
        Canva.
      </p>
      <a
        className="text-black"
        href="https://github.com/tanlines/web-design-practice"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-white/90 hover:bg-white rounded-lg px-4 py-2 flex gap-2">
          View Github
          <ExternalLinkIcon className="size-5 xl:size-6" />
        </button>
      </a>
    </div>
  );
}
