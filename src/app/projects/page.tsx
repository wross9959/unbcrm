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
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    AvatarGroup,
    AvatarGroupList,
    AvatarGroupSkeleton,
} from "@/components/ui/avatar-group";
import {
    Calendar,
    Clock,
    Edit,
    Filter,
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

export default function ProjectsPage() {
    const activeProjects = [
        {
            id: 1,
            name: "Vulnerability Scanner",
            description:
                "Building an open-source vulnerability scanner for educational purposes.",
            progress: 75,
            status: "in-progress",
            members: [
                {
                    id: 1,
                    name: "Taylor Smith",
                    avatar: "/placeholder.svg?height=40&width=40",
                },
                {
                    id: 2,
                    name: "Riley Kim",
                    avatar: "/placeholder.svg?height=40&width=40",
                },
                {
                    id: 3,
                    name: "Alex Johnson",
                    avatar: "/placeholder.svg?height=40&width=40",
                },
                {
                    id: 4,
                    name: "Casey Rivera",
                    avatar: "/placeholder.svg?height=40&width=40",
                },
            ],
            deadline: "April 30, 2025",
            lead: "Taylor Smith",
            tags: ["Python", "Security", "Open Source"],
        },
        {
            id: 2,
            name: "Security Awareness Campaign",
            description:
                "Creating materials for campus-wide security awareness.",
            progress: 40,
            status: "in-progress",
            members: [
                {
                    id: 5,
                    name: "Jamie Lee",
                    avatar: "/placeholder.svg?height=40&width=40",
                },
                {
                    id: 6,
                    name: "Sam Wilson",
                    avatar: "/placeholder.svg?height=40&width=40",
                },
                {
                    id: 7,
                    name: "Morgan Chen",
                    avatar: "/placeholder.svg?height=40&width=40",
                },
            ],
            deadline: "May 15, 2025",
            lead: "Jamie Lee",
            tags: ["Education", "Design", "Outreach"],
        },
        {
            id: 3,
            name: "CTF Challenge Development",
            description:
                "Developing challenges for the upcoming CTF competition.",
            progress: 90,
            status: "almost-complete",
            members: [
                {
                    id: 8,
                    name: "Alex Johnson",
                    avatar: "/placeholder.svg?height=40&width=40",
                },
                {
                    id: 9,
                    name: "Riley Kim",
                    avatar: "/placeholder.svg?height=40&width=40",
                },
                {
                    id: 10,
                    name: "Taylor Smith",
                    avatar: "/placeholder.svg?height=40&width=40",
                },
            ],
            deadline: "March 20, 2025",
            lead: "Alex Johnson",
            tags: ["CTF", "Web Security", "Cryptography"],
        },
        {
            id: 4,
            name: "Club Website Redesign",
            description:
                "Redesigning the club website with improved security features.",
            progress: 30,
            status: "in-progress",
            members: [
                {
                    id: 11,
                    name: "Casey Rivera",
                    avatar: "/placeholder.svg?height=40&width=40",
                },
                {
                    id: 12,
                    name: "Morgan Chen",
                    avatar: "/placeholder.svg?height=40&width=40",
                },
            ],
            deadline: "June 1, 2025",
            lead: "Casey Rivera",
            tags: ["Web Development", "UI/UX", "Security"],
        },
    ];

    const completedProjects = [
        {
            id: 5,
            name: "Password Manager Workshop",
            description:
                "Created educational materials and hands-on exercises for password manager workshop.",
            progress: 100,
            status: "completed",
            members: [
                {
                    id: 13,
                    name: "Jamie Lee",
                    avatar: "/placeholder.svg?height=40&width=40",
                },
                {
                    id: 14,
                    name: "Morgan Chen",
                    avatar: "/placeholder.svg?height=40&width=40",
                },
            ],
            completedDate: "February 10, 2025",
            lead: "Jamie Lee",
            tags: ["Education", "Workshop", "Password Security"],
        },
        {
            id: 6,
            name: "Network Security Lab Setup",
            description:
                "Set up a dedicated network security lab for club activities and training.",
            progress: 100,
            status: "completed",
            members: [
                {
                    id: 15,
                    name: "Taylor Smith",
                    avatar: "/placeholder.svg?height=40&width=40",
                },
                {
                    id: 16,
                    name: "Riley Kim",
                    avatar: "/placeholder.svg?height=40&width=40",
                },
                {
                    id: 17,
                    name: "Alex Johnson",
                    avatar: "/placeholder.svg?height=40&width=40",
                },
            ],
            completedDate: "January 15, 2025",
            lead: "Taylor Smith",
            tags: ["Networking", "Lab Setup", "Hardware"],
        },
    ];

    const getStatusBadge = (status: string, progress: number) => {
        if (progress === 100)
            return <Badge className="bg-green-500">Complete</Badge>;
        if (progress > 75)
            return <Badge className="bg-blue-500">Almost Complete</Badge>;
        if (progress > 25) return <Badge>In Progress</Badge>;
        return <Badge variant="outline">Just Started</Badge>;
    };

    return (
        <div className="flex w-full flex-1 flex-col">
            <div className="flex flex-1 flex-col">
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Projects
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Track and manage club projects and initiatives.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">

                            <Button
                                type="submit"
                                form="form-notifications"
                                variant="secondary"
                            >
                                <Plus className="h-3.5 w-3.5" />
                                <span>New Project</span>
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:flex-row md:items-center">
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search projects..."
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
                    </div>
                    <Tabs defaultValue="active" className="space-y-4">
                        <TabsList>
                            <TabsTrigger value="active">
                                Active Projects
                            </TabsTrigger>
                            <TabsTrigger value="completed">
                                Completed Projects
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="active" className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                {activeProjects.map((project) => (
                                    <Card key={project.id}>
                                        <CardHeader className="pb-2">
                                            <div className="flex justify-between items-start">
                                                <CardTitle>
                                                    {project.name}
                                                </CardTitle>
                                                {getStatusBadge(
                                                    project.status,
                                                    project.progress
                                                )}
                                            </div>
                                            <CardDescription>
                                                Led by {project.lead}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="pb-2">
                                            <div className="space-y-4">
                                                <p className="text-sm text-muted-foreground">
                                                    {project.description}
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <Progress
                                                        value={project.progress}
                                                        className="h-2"
                                                    />
                                                    <span className="text-xs font-medium">
                                                        {project.progress}%
                                                    </span>
                                                </div>
                                                <div className="flex items-center text-sm">
                                                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                                                    <span>
                                                        Deadline:{" "}
                                                        {project.deadline}
                                                    </span>
                                                </div>
                                                <div className="flex flex-wrap gap-1">
                                                    {project.tags.map(
                                                        (tag, index) => (
                                                            <Badge
                                                                key={index}
                                                                variant="outline"
                                                                className="text-xs"
                                                            >
                                                                {tag}
                                                            </Badge>
                                                        )
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm text-muted-foreground">
                                                        Team:
                                                    </span>
                                                    <AvatarGroup>
                                                        <AvatarGroupList>
                                                            {project.members.map(
                                                                (member) => (
                                                                    <Avatar
                                                                        key={
                                                                            member.id
                                                                        }
                                                                        className="h-7 w-7 border-2 border-background"
                                                                    >
                                                                        <AvatarImage
                                                                            src={
                                                                                member.avatar
                                                                            }
                                                                            alt={
                                                                                member.name
                                                                            }
                                                                        />
                                                                        <AvatarFallback>
                                                                            {member.name.charAt(
                                                                                0
                                                                            )}
                                                                        </AvatarFallback>
                                                                    </Avatar>
                                                                )
                                                            )}
                                                        </AvatarGroupList>
                                                        {project.members
                                                            .length > 4 && (
                                                            <AvatarGroupSkeleton className="h-7 w-7">
                                                                +
                                                                {project.members
                                                                    .length - 4}
                                                            </AvatarGroupSkeleton>
                                                        )}
                                                    </AvatarGroup>
                                                </div>
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
                                                        Edit Project
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <Users className="mr-2 h-4 w-4" />
                                                        Manage Team
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <Calendar className="mr-2 h-4 w-4" />
                                                        Update Timeline
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="text-destructive">
                                                        <Trash2 className="mr-2 h-4 w-4" />
                                                        Archive Project
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="completed" className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                {completedProjects.map((project) => (
                                    <Card
                                        key={project.id}
                                        className="opacity-90"
                                    >
                                        <CardHeader className="pb-2">
                                            <div className="flex justify-between items-start">
                                                <CardTitle>
                                                    {project.name}
                                                </CardTitle>
                                                <Badge className="bg-green-500">
                                                    Completed
                                                </Badge>
                                            </div>
                                            <CardDescription>
                                                Led by {project.lead}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="pb-2">
                                            <div className="space-y-4">
                                                <p className="text-sm text-muted-foreground">
                                                    {project.description}
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <Progress
                                                        value={100}
                                                        className="h-2"
                                                    />
                                                    <span className="text-xs font-medium">
                                                        100%
                                                    </span>
                                                </div>
                                                <div className="flex items-center text-sm">
                                                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                                                    <span>
                                                        Completed:{" "}
                                                        {project.completedDate}
                                                    </span>
                                                </div>
                                                <div className="flex flex-wrap gap-1">
                                                    {project.tags.map(
                                                        (tag, index) => (
                                                            <Badge
                                                                key={index}
                                                                variant="outline"
                                                                className="text-xs"
                                                            >
                                                                {tag}
                                                            </Badge>
                                                        )
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm text-muted-foreground">
                                                        Team:
                                                    </span>
                                                    <AvatarGroup>
                                                        <AvatarGroupList>
                                                            {project.members.map(
                                                                (member) => (
                                                                    <Avatar
                                                                        key={
                                                                            member.id
                                                                        }
                                                                        className="h-7 w-7 border-2 border-background"
                                                                    >
                                                                        <AvatarImage
                                                                            src={
                                                                                member.avatar
                                                                            }
                                                                            alt={
                                                                                member.name
                                                                            }
                                                                        />
                                                                        <AvatarFallback>
                                                                            {member.name.charAt(
                                                                                0
                                                                            )}
                                                                        </AvatarFallback>
                                                                    </Avatar>
                                                                )
                                                            )}
                                                        </AvatarGroupList>
                                                    </AvatarGroup>
                                                </div>
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
                                                        Team Report
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <Edit className="mr-2 h-4 w-4" />
                                                        Edit Summary
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem>
                                                        <Calendar className="mr-2 h-4 w-4" />
                                                        Create Similar Project
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
        </div>
    );
}
