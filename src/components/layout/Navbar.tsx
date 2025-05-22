"use client";

import {
    List,
    LogOut,
    Moon,
    Settings,
    SquareMenu,
    Sun,
    User,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { SidebarTrigger } from "../ui/sidebar";
import { SearchDialog } from "./search-dialog";

const NavBar = () => {
    const { theme, setTheme } = useTheme();

    return (
        <nav className="p-4 flex items-center justify-between">
            {/* LEFT */}
            <div className="flex items-center gap-4">
                <SidebarTrigger />
                <SearchDialog />
            </div>

            {/* RIGHT  */}

            <div className="flex items-center gap-4">
                {/* USER MENU  */}
                {/* <Link href="/">Dashboard</Link> */}

                {/* THEME MENU  */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* PROFILE MENU  */}
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://avatars.githubusercontent.com/u/93093979?v=4" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10}>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        <DropdownMenuItem asChild>
                            <Link href="/users/test">
                                <User className="h-[1.2rem] w-[1.2rem] mr-2" />
                                Account
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="/settings">
                                <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
                                Settings
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem variant="destructive" asChild>
                            <Link href="/login">
                                <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
                                Logout
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
};
export default NavBar;
