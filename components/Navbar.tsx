"use client"
import React, {useState} from "react"
import { HoveredLink,Menu, MenuItem,ProductItem  } from "./ui/navbar-menu"
import {cn} from "@/utils/cn"
import Link from "next/link"
export default function Navbar({className}: {className?:string}){
    const [active, setActive] = useState<string | null>(null);
    return(
        <div
      className={cn("fixed top-10 inset-x-0 max-w-4xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Events">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/events">All Events</HoveredLink>
            <HoveredLink href="/events/hackathons">Hackathons</HoveredLink>
            <HoveredLink href="/events/workshops">Workshops</HoveredLink>
            <HoveredLink href="/events/conferences">Conferences</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Participate">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/sponsor-registration">Sponsor Registration</HoveredLink>
            <HoveredLink href="/register">Company Registration</HoveredLink>
            <HoveredLink href="/register/developer">Developer Registration</HoveredLink>
            <HoveredLink href="/projects">Browse Projects</HoveredLink>
            <HoveredLink href="/mentorship">Mentorship Program</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Community">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/community">About Us</HoveredLink>
            <HoveredLink href="/community/impact">Our Impact</HoveredLink>
            <HoveredLink href="https://discord.gg/opencode" target="_blank">Discord Server</HoveredLink>
            <HoveredLink href="/community/partners">Partners</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
    )
}