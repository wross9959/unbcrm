import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    ChevronDown,
    Download,
    Filter,
    MoreHorizontal,
    Plus,
    Search,
} from "lucide-react";

export default function MembersPage() {
    const members = [
        {
            id: 1,
            name: "Alex Cameron",
            email: "alex.Cameron@unb.ca",
            role: "President",
            year: "Senior",
            status: "active",
            joinDate: "Sep 2022",
            skills: ["MR HARDWARE MAN"],
            avatar: "/placeholder.svg?height=40&width=40",
        },
        {
            id: 2,
            name: "Will Ross",
            email: "will.ross@unb.ca",
            role: "Vice President",
            year: "Senior",
            status: "active",
            joinDate: "Oct 2024",
            skills: ["Web Security", "JavaScript", "Teaching"],
            avatar: "/placeholder.svg?height=40&width=40",
        },
        {
            id: 3,
            name: "Manav ",
            email: "Manav.clown@unb.ca",
            role: "Club Clown",
            year: "Senior",
            status: "active",
            joinDate: "Sep 2021",
            skills: ["Complaining", "Loving TME"],
            avatar: "https://t3.ftcdn.net/jpg/00/59/02/84/360_F_59028470_uW2Uk2QJzlKmPz8ckFR21XMBKLOazqgk.jpg?height=40&width=40",
        },
    ];

    return (
        <div className="flex w-full flex-1 flex-col ">
            <div className="flex flex-1 flex-col">
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                    {/* HEADER TITLE AND EXPORT AND ADD MEMBER BUTTONS  */}
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Members
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Manage club members, roles, and contact
                                information.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                className="h-8 gap-1"
                            >
                                <Download className="h-3.5 w-3.5" />
                                <span>Export</span>
                            </Button>
                            <Button
                                type="submit"
                                form="form-notifications"
                                variant="secondary"
                            >
                                <Plus className="h-3.5 w-3.5" />
                                <span>Add Member</span>
                            </Button>
                        </div>
                    </div>
                    {/* SEARCH BAR AND FILTER DROPDOWN */}
                    <div className="flex flex-col gap-4 md:flex-row md:items-center">
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search members..."
                                    className="w-full rounded-lg bg-background pl-8 md:w-[300px]"
                                />
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="h-8 gap-1"
                                    >
                                        <Filter className="h-3.5 w-3.5" />
                                        <span>Filter</span>
                                        <ChevronDown className="h-3.5 w-3.5" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align="end"
                                    className="w-[200px]"
                                >
                                    <DropdownMenuLabel>
                                        Filter by
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        Active Members
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Inactive Members
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Executive Team
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Regular Members
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        Clear Filters
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div className="flex items-center gap-2 ml-auto">
                            <Select defaultValue="all">
                                <SelectTrigger className="h-8 w-[150px]">
                                    <SelectValue placeholder="Select role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">
                                        All Roles
                                    </SelectItem>
                                    <SelectItem value="executive">
                                        Executive
                                    </SelectItem>
                                    <SelectItem value="member">
                                        Member
                                    </SelectItem>
                                    <SelectItem value="alumni">
                                        Alumni
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <Select defaultValue="all">
                                <SelectTrigger className="h-8 w-[150px]">
                                    <SelectValue placeholder="Select year" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">
                                        All Years
                                    </SelectItem>
                                    <SelectItem value="freshman">
                                        Freshman
                                    </SelectItem>
                                    <SelectItem value="sophomore">
                                        Sophomore
                                    </SelectItem>
                                    <SelectItem value="junior">
                                        Junior
                                    </SelectItem>
                                    <SelectItem value="senior">
                                        Senior
                                    </SelectItem>
                                    <SelectItem value="graduate">
                                        Graduate
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    {/* TABLE */}
                    <div className="border rounded-lg bg-background">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Member</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead>Year</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Join Date</TableHead>
                                    <TableHead>Skills</TableHead>
                                    <TableHead className="text-right">
                                        Actions
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {members.map((member) => (
                                    <TableRow key={member.id}>
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <Avatar className="h-9 w-9">
                                                    <AvatarImage
                                                        src={member.avatar}
                                                        alt={member.name}
                                                    />
                                                    <AvatarFallback>
                                                        {member.name.charAt(0)}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="flex flex-col">
                                                    <span className="font-medium">
                                                        {member.name}
                                                    </span>
                                                    <span className="text-sm text-muted-foreground">
                                                        {member.email}
                                                    </span>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>{member.role}</TableCell>
                                        <TableCell>{member.year}</TableCell>
                                        <TableCell>
                                            <Badge
                                                variant={
                                                    member.status === "active"
                                                        ? "default"
                                                        : "secondary"
                                                }
                                            >
                                                {member.status === "active"
                                                    ? "Active"
                                                    : "Inactive"}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>{member.joinDate}</TableCell>
                                        <TableCell>
                                            <div className="flex flex-wrap gap-1">
                                                {member.skills.map(
                                                    (skill, index) => (
                                                        <Badge
                                                            key={index}
                                                            variant="outline"
                                                            className="text-xs"
                                                        >
                                                            {skill}
                                                        </Badge>
                                                    )
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                    >
                                                        <MoreHorizontal className="h-4 w-4" />
                                                        <span className="sr-only">
                                                            Actions
                                                        </span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem>
                                                        View Profile
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        Edit Member
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        Assign to Project
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="text-destructive">
                                                        Remove Member
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </main>
            </div>
        </div>
    );
}
