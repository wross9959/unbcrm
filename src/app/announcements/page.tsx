import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
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
import {
    Edit,
    Filter,
    MessageSquare,
    MoreHorizontal,
    Pin,
    Plus,
    Search,
    Trash2,
} from "lucide-react";

export default function AnnouncementsPage() {
    const announcements = [
        {
            id: 1,
            title: "New CTF Competition Announced",
            content:
                "We're excited to announce our upcoming Capture The Flag competition on March 25th. This event will feature challenges in web security, cryptography, reverse engineering, and more. Registration is now open and limited to 50 participants. Sign up early to secure your spot!\n\nThe competition will run from 6:00 PM to 10:00 PM in the Computer Science Building, Room 104. Prizes will be awarded to the top three performers. Refreshments will be provided.\n\nNo prior experience is necessary, but basic knowledge of cybersecurity concepts is recommended. This is a great opportunity to test your skills and learn from others in a fun, competitive environment.",
            date: "March 10, 2025",
            author: {
                name: "Alex Johnson",
                role: "Club President",
                avatar: "/placeholder.svg?height=40&width=40",
            },
            category: "Events",
            pinned: true,
            comments: 8,
        },
        {
            id: 2,
            title: "Industry Partnership with CyberDefend Inc.",
            content:
                "We're thrilled to announce that we've secured a partnership with CyberDefend Inc., a leading cybersecurity firm in the region. This partnership will provide exclusive internship opportunities for club members this summer.\n\nCyberDefend Inc. will also be sponsoring our upcoming events and providing mentorship to our project teams. Their team of experts will be giving a series of guest lectures throughout the semester on various cybersecurity topics.\n\nIf you're interested in applying for the internship positions, please submit your resume to the club email by April 15th. More details about the positions and requirements will be shared in a separate announcement.",
            date: "March 5, 2025",
            author: {
                name: "Sam Wilson",
                role: "External Relations",
                avatar: "/placeholder.svg?height=40&width=40",
            },
            category: "Partnerships",
            pinned: true,
            comments: 12,
        },
        {
            id: 3,
            title: "Workshop Series Starting Next Month",
            content:
                "Our new workshop series on ethical hacking fundamentals begins next month. The series will consist of six weekly sessions covering various aspects of ethical hacking, from reconnaissance to exploitation and reporting.\n\nEach workshop will be hands-on, with participants working in our dedicated lab environment. Limited spots are available, so please register early to secure your place.\n\nThe workshops will be held every Wednesday from 5:30 PM to 7:30 PM in the Engineering Building, Lab 203, starting April 5th. All necessary tools and resources will be provided, but participants are encouraged to bring their own laptops.",
            date: "February 28, 2025",
            author: {
                name: "Jamie Lee",
                role: "Education Coordinator",
                avatar: "/placeholder.svg?height=40&width=40",
            },
            category: "Workshops",
            pinned: false,
            comments: 5,
        },
        {
            id: 4,
            title: "Club Website Redesign - Volunteers Needed",
            content:
                "We're planning to redesign our club website to improve its functionality and security features. We're looking for volunteers with web development experience to join this project.\n\nThe project will involve redesigning the user interface, implementing a secure authentication system, and creating a resource repository for club materials. This is a great opportunity to gain practical experience and contribute to the club.\n\nIf you're interested in participating, please fill out the form linked below by March 20th. We'll be holding an initial planning meeting on March 22nd.",
            date: "February 20, 2025",
            author: {
                name: "Casey Rivera",
                role: "Technical Lead",
                avatar: "/placeholder.svg?height=40&width=40",
            },
            category: "Projects",
            pinned: false,
            comments: 3,
        },
        {
            id: 5,
            title: "Congratulations to CTF Winners",
            content:
                "Congratulations to the winners of our recent internal Capture The Flag competition! The competition was fierce, with 28 participants solving challenges across various categories.\n\nFirst Place: Riley Kim (850 points)\nSecond Place: Morgan Chen (780 points)\nThird Place: Taylor Smith (720 points)\n\nSpecial recognition goes to Casey Rivera for solving the most difficult challenge in record time. Thank you to everyone who participated and helped organize the event. We'll be sharing the challenge solutions and walkthrough in our next meeting.",
            date: "February 10, 2025",
            author: {
                name: "Alex Johnson",
                role: "Club President",
                avatar: "/placeholder.svg?height=40&width=40",
            },
            category: "Events",
            pinned: false,
            comments: 15,
        },
    ];

    return (
        <div className="flex flex-1 flex-col ">
            <div className="flex flex-1 flex-col">
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Announcements
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                View and manage club announcements and updates.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button
                                type="submit"
                                form="form-notifications"
                                variant="secondary"
                            >
                                <Plus className="h-3.5 w-3.5" />
                                <span>New Announcement</span>
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:flex-row md:items-center">
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search announcements..."
                                    className="w-full rounded-lg bg-background pl-8 md:w-[300px]"
                                />
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                className="h-8 gap-1"
                            >
                                <Filter className="h-3.5 w-3.5" />
                                <span>Filter</span>
                            </Button>
                        </div>
                        <div className="flex items-center gap-2 ml-auto">
                            <Select defaultValue="all">
                                <SelectTrigger className="h-8 w-[150px]">
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">
                                        All Categories
                                    </SelectItem>
                                    <SelectItem value="events">
                                        Events
                                    </SelectItem>
                                    <SelectItem value="workshops">
                                        Workshops
                                    </SelectItem>
                                    <SelectItem value="projects">
                                        Projects
                                    </SelectItem>
                                    <SelectItem value="partnerships">
                                        Partnerships
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <Tabs defaultValue="all" className="space-y-4">
                        <TabsList>
                            <TabsTrigger value="all">
                                All Announcements
                            </TabsTrigger>
                            <TabsTrigger value="pinned">Pinned</TabsTrigger>
                        </TabsList>
                        <TabsContent value="all" className="space-y-4">
                            {announcements.map((announcement) => (
                                <Card
                                    key={announcement.id}
                                    className="relative"
                                >
                                    {announcement.pinned && (
                                        <div className="absolute right-4 top-4">
                                            <Badge
                                                variant="secondary"
                                                className="flex items-center gap-1"
                                            >
                                                <Pin className="h-3 w-3" />
                                                Pinned
                                            </Badge>
                                        </div>
                                    )}
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <CardTitle>
                                                    {announcement.title}
                                                </CardTitle>
                                                <CardDescription className="flex items-center gap-2 mt-1">
                                                    <Badge variant="outline">
                                                        {announcement.category}
                                                    </Badge>
                                                    <span>
                                                        {announcement.date}
                                                    </span>
                                                </CardDescription>
                                            </div>
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
                                                        <Edit className="mr-2 h-4 w-4" />
                                                        Edit
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <Pin className="mr-2 h-4 w-4" />
                                                        {announcement.pinned
                                                            ? "Unpin"
                                                            : "Pin"}
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <MessageSquare className="mr-2 h-4 w-4" />
                                                        View Comments
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="text-destructive">
                                                        <Trash2 className="mr-2 h-4 w-4" />
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="whitespace-pre-line text-sm">
                                                {announcement.content.length >
                                                300
                                                    ? `${announcement.content.substring(
                                                          0,
                                                          300
                                                      )}...`
                                                    : announcement.content}
                                            </div>
                                            {announcement.content.length >
                                                300 && (
                                                <Button
                                                    variant="link"
                                                    className="p-0 h-auto"
                                                >
                                                    Read More
                                                </Button>
                                            )}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                        <div className="flex items-center gap-2">
                                            <Avatar className="h-6 w-6">
                                                <AvatarImage
                                                    src={
                                                        announcement.author
                                                            .avatar
                                                    }
                                                    alt={
                                                        announcement.author.name
                                                    }
                                                />
                                                <AvatarFallback>
                                                    {announcement.author.name.charAt(
                                                        0
                                                    )}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="text-sm">
                                                <span className="font-medium">
                                                    {announcement.author.name}
                                                </span>
                                                <span className="text-muted-foreground">
                                                    {" "}
                                                    • {announcement.author.role}
                                                </span>
                                            </div>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="gap-1"
                                        >
                                            <MessageSquare className="h-4 w-4" />
                                            <span>
                                                {announcement.comments} Comments
                                            </span>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </TabsContent>
                    </Tabs>
                </main>
            </div>
        </div>
    );
}
