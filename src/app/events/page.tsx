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
import { Badge } from "@/components/ui/badge";
import {
    CalendarDays,
    Clock,
    Edit,
    Filter,
    MapPin,
    MoreHorizontal,
    Plus,
    Search,
    Trash2,
    Users,
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function EventsPage() {
    const upcomingEvents = [
        {
            id: 1,
            title: "Capture The Flag Competition",
            date: "March 25, 2025",
            time: "6:00 PM - 10:00 PM",
            location: "Computer Science Building, Room 104",
            description:
                "Test your skills in our semester CTF competition with challenges in web security, cryptography, reverse engineering, and more.",
            attendees: 32,
            type: "competition",
            organizer: "Alex Johnson",
        },
        {
            id: 2,
            title: "Intro to Penetration Testing",
            date: "April 2, 2025",
            time: "5:30 PM - 7:30 PM",
            location: "Engineering Building, Lab 203",
            description:
                "Learn the basics of penetration testing in this hands-on workshop. Bring your laptop with Kali Linux installed or use our lab computers.",
            attendees: 24,
            type: "workshop",
            organizer: "Taylor Smith",
        },
        {
            id: 3,
            title: "Industry Speaker: Cybersecurity Careers",
            date: "April 10, 2025",
            time: "4:00 PM - 5:30 PM",
            location: "Student Union, Conference Room A",
            description:
                "Join us for a talk by industry professional Sarah Chen from SecureTech about career paths in cybersecurity and how to prepare for them.",
            attendees: 45,
            type: "speaker",
            organizer: "Sam Wilson",
        },
        {
            id: 4,
            title: "Networking Social",
            date: "April 15, 2025",
            time: "7:00 PM - 9:00 PM",
            location: "Campus Pub",
            description:
                "Mix and mingle with fellow cybersecurity enthusiasts, club alumni, and industry professionals in a casual setting.",
            attendees: 28,
            type: "social",
            organizer: "Jamie Lee",
        },
    ];

    const pastEvents = [
        {
            id: 5,
            title: "Web Security Workshop",
            date: "February 15, 2025",
            time: "6:00 PM - 8:00 PM",
            location: "Computer Science Building, Room 104",
            description:
                "A hands-on workshop covering common web vulnerabilities and how to exploit and defend against them.",
            attendees: 30,
            type: "workshop",
            organizer: "Jamie Lee",
        },
        {
            id: 6,
            title: "Cybersecurity Movie Night",
            date: "February 8, 2025",
            time: "7:00 PM - 10:00 PM",
            location: "Student Union, Media Room",
            description:
                "Join us for a screening of 'Hackers' followed by a discussion about the portrayal of hacking in media vs. reality.",
            attendees: 22,
            type: "social",
            organizer: "Morgan Chen",
        },
        {
            id: 7,
            title: "Cryptography Challenge",
            date: "January 25, 2025",
            time: "5:30 PM - 7:30 PM",
            location: "Engineering Building, Lab 203",
            description:
                "Test your cryptography skills with a series of increasingly difficult challenges. Prizes for the top performers!",
            attendees: 18,
            type: "competition",
            organizer: "Riley Kim",
        },
    ];

    const getBadgeVariant = (type: string) => {
        switch (type) {
            case "competition":
                return "destructive";
            case "workshop":
                return "default";
            case "speaker":
                return "secondary";
            case "social":
                return "outline";
            default:
                return "default";
        }
    };

    return (
        <div className="flex flex-col ">
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Events
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Schedule and manage club events, workshops, and
                            competitions.
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            type="submit"
                            form="form-notifications"
                            variant="secondary"
                        >
                            <Plus className="h-3.5 w-3.5" />
                            <span>Create Event</span>
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search events..."
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
                        <Button variant="outline" size="sm" className="h-8">
                            <CalendarDays className="h-3.5 w-3.5 mr-1" />
                            Calendar View
                        </Button>
                    </div>
                </div>
                <Tabs defaultValue="upcoming" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="upcoming">
                            Upcoming Events
                        </TabsTrigger>
                        <TabsTrigger value="past">Past Events</TabsTrigger>
                    </TabsList>
                    <TabsContent value="upcoming" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {upcomingEvents.map((event) => (
                                <Card key={event.id}>
                                    <CardHeader className="pb-2">
                                        <div className="flex justify-between items-start">
                                            <CardTitle>{event.title}</CardTitle>
                                            <Badge
                                                variant={getBadgeVariant(
                                                    event.type
                                                )}
                                            >
                                                {event.type
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                    event.type.slice(1)}
                                            </Badge>
                                        </div>
                                        <CardDescription>
                                            Organized by {event.organizer}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pb-2">
                                        <div className="space-y-2">
                                            <div className="flex items-center text-sm">
                                                <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                                                <span>{event.date}</span>
                                            </div>
                                            <div className="flex items-center text-sm">
                                                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                                                <span>{event.time}</span>
                                            </div>
                                            <div className="flex items-center text-sm">
                                                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                                                <span>{event.location}</span>
                                            </div>
                                            <div className="flex items-center text-sm">
                                                <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                                                <span>
                                                    {event.attendees} attending
                                                </span>
                                            </div>
                                            <p className="text-sm text-muted-foreground line-clamp-3 mt-2">
                                                {event.description}
                                            </p>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                        <Button variant="outline" size="sm">
                                            View Details
                                        </Button>
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
                                                    Edit Event
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Users className="mr-2 h-4 w-4" />
                                                    Manage Attendees
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="text-destructive">
                                                    <Trash2 className="mr-2 h-4 w-4" />
                                                    Cancel Event
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="past" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {pastEvents.map((event) => (
                                <Card key={event.id} className="opacity-80">
                                    <CardHeader className="pb-2">
                                        <div className="flex justify-between items-start">
                                            <CardTitle>{event.title}</CardTitle>
                                            <Badge
                                                variant={getBadgeVariant(
                                                    event.type
                                                )}
                                            >
                                                {event.type
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                    event.type.slice(1)}
                                            </Badge>
                                        </div>
                                        <CardDescription>
                                            Organized by {event.organizer}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pb-2">
                                        <div className="space-y-2">
                                            <div className="flex items-center text-sm">
                                                <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                                                <span>{event.date}</span>
                                            </div>
                                            <div className="flex items-center text-sm">
                                                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                                                <span>{event.time}</span>
                                            </div>
                                            <div className="flex items-center text-sm">
                                                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                                                <span>{event.location}</span>
                                            </div>
                                            <div className="flex items-center text-sm">
                                                <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                                                <span>
                                                    {event.attendees} attended
                                                </span>
                                            </div>
                                            <p className="text-sm text-muted-foreground line-clamp-3 mt-2">
                                                {event.description}
                                            </p>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                        <Button variant="outline" size="sm">
                                            View Summary
                                        </Button>
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
                                                    <Users className="mr-2 h-4 w-4" />
                                                    Attendance Report
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Edit className="mr-2 h-4 w-4" />
                                                    Edit Summary
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    <CalendarDays className="mr-2 h-4 w-4" />
                                                    Schedule Similar Event
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    );
}
