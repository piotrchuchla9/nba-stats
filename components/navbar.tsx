import {
  IconGame,
  IconMail,
  IconPlayers,
  IconPoland,
  IconSettings,
  IconStats,
  IconTeams,
  IconUSA,
} from "@/public/icons";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo.png";
import NavElement from "./nav-element";

export default function Navbar() {
  return (
    <div className="p-12 pr-0 h-screen border-r-2 border-gray-600">
      <div className="flex">
        <Image width={32} src={logo} alt={"NBA Stats"} />
        <div className="flex items-center">
          <Link className="pl-3 font-semibold text-3xl" href={"/"}>
            NBA Stats
          </Link>
        </div>
      </div>
      <div className="h-full py-20 overflow-y-auto flex flex-col">
        <div className="flex-grow">
          <NavElement icon={<IconPlayers />} link={"/"} text={"Players"} />
          <NavElement icon={<IconTeams />} link={"/teams"} text={"Teams"} />
          <NavElement icon={<IconGame />} link={"/games"} text={"Games"} />
          <NavElement icon={<IconStats />} link={"/stats"} text={"Stats"} />
        </div>
        <div className="mt-auto flex flex-col gap-4">
          <button className="text-xl" onClick={() => console.log("modal")}>
            <div className="flex gap-4 group/item">
              <div className="group-hover/item:text-blue-300">
                <IconMail />
              </div>
              <div className="group-hover/item:text-blue-300">Contact Us</div>
            </div>
          </button>
          <details className="dropdown">
            <summary className="btn m-0 p-0 bg-inherit border-0 hover:bg-inherit">
              <div className="flex gap-4">
                <div>
                  <IconSettings />
                </div>
                <div>
                  <span className="text-xl capitalize font-normal">
                    Settings
                  </span>
                </div>
              </div>
            </summary>
            <div className="shadow menu dropdown-content z-[1] bg-inherit">
              <div className="flex gap-7">
                <button>
                  <IconPoland />
                </button>
                <button>
                  <IconUSA />
                </button>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
