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
    Download,
    ExternalLink,
    FileText,
    Filter,
    Link2,
    MoreHorizontal,
    Search,
    Star,
    Upload,
    Video,
} from "lucide-react";

export default function ResourcesPage() {
    const resources = [
        {
            id: 1,
            title: "Introduction to Penetration Testing",
            type: "document",
            format: "pdf",
            size: "2.4 MB",
            uploadedBy: "Taylor Smith",
            uploadDate: "March 10, 2025",
            category: "Workshop Materials",
            tags: ["penetration testing", "beginner", "workshop"],
            downloads: 45,
            starred: true,
        },
        {
            id: 2,
            title: "Web Security Vulnerabilities Cheat Sheet",
            type: "document",
            format: "pdf",
            size: "1.2 MB",
            uploadedBy: "Jamie Lee",
            uploadDate: "February 28, 2025",
            category: "Reference Materials",
            tags: ["web security", "cheat sheet", "OWASP"],
            downloads: 67,
            starred: true,
        },
        {
            id: 3,
            title: "Cryptography Basics - Lecture Slides",
            type: "document",
            format: "pptx",
            size: "5.8 MB",
            uploadedBy: "Riley Kim",
            uploadDate: "February 15, 2025",
            category: "Lecture Materials",
            tags: ["cryptography", "lecture", "slides"],
            downloads: 32,
            starred: false,
        },
        {
            id: 4,
            title: "Network Security Lab Setup Guide",
            type: "document",
            format: "pdf",
            size: "3.1 MB",
            uploadedBy: "Alex Johnson",
            uploadDate: "February 10, 2025",
            category: "Lab Materials",
            tags: ["network security", "lab setup", "guide"],
            downloads: 28,
            starred: false,
        },
        {
            id: 5,
            title: "CTF Walkthrough - Web Challenges",
            type: "video",
            format: "mp4",
            size: "156 MB",
            uploadedBy: "Casey Rivera",
            uploadDate: "January 25, 2025",
            category: "Tutorial Videos",
            tags: ["CTF", "walkthrough", "web challenges"],
            downloads: 39,
            starred: false,
        },
        {
            id: 6,
            title: "Reverse Engineering Tools Overview",
            type: "video",
            format: "mp4",
            size: "210 MB",
            uploadedBy: "Riley Kim",
            uploadDate: "January 18, 2025",
            category: "Tutorial Videos",
            tags: ["reverse engineering", "tools", "tutorial"],
            downloads: 41,
            starred: true,
        },
    ];

    const links = [
        {
            id: 1,
            title: "OWASP Top 10",
            url: "https://owasp.org/www-project-top-ten/",
            description:
                "The Open Web Application Security Project Top 10 vulnerabilities",
            addedBy: "Jamie Lee",
            addDate: "March 5, 2025",
            category: "Web Security",
            tags: ["OWASP", "web security", "vulnerabilities"],
            clicks: 53,
        },
        {
            id: 2,
            title: "HackTheBox",
            url: "https://www.hackthebox.eu/",
            description:
                "Online platform to test and advance your skills in penetration testing and cyber security",
            addedBy: "Taylor Smith",
            addDate: "February 20, 2025",
            category: "Practice Platforms",
            tags: ["CTF", "practice", "penetration testing"],
            clicks: 78,
        },
        {
            id: 3,
            title: "TryHackMe",
            url: "https://tryhackme.com/",
            description:
                "Learn cyber security through hands-on exercises and labs",
            addedBy: "Alex Johnson",
            addDate: "February 15, 2025",
            category: "Practice Platforms",
            tags: ["learning", "labs", "beginner friendly"],
            clicks: 65,
        },
        {
            id: 4,
            title: "Cybersecurity Career Roadmap",
            url: "https://www.cyberseek.org/pathway.html",
            description:
                "Interactive career pathway for cybersecurity professionals",
            addedBy: "Sam Wilson",
            addDate: "February 8, 2025",
            category: "Career Resources",
            tags: ["career", "roadmap", "professional development"],
            clicks: 42,
        },
    ];

    const getTypeIcon = (type: string) => {
        switch (type) {
            case "document":
                return <FileText className="h-5 w-5 text-blue-500" />;
            case "video":
                return <Video className="h-5 w-5 text-red-500" />;
            default:
                return <FileText className="h-5 w-5" />;
        }
    };

    return (
        <div className="flex w-full flex-1 flex-col">
            <div className="flex flex-1 flex-col">
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Resources
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Access and share club resources, documents, and
                                useful links.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                className="h-8 gap-1"
                            >
                                <Link2 className="h-3.5 w-3.5" />
                                <span>Add Link</span>
                            </Button>

                            <Button
                                type="submit"
                                form="form-notifications"
                                variant="secondary"
                            >
                                <Upload className="h-3.5 w-3.5" />
                                <span>Upload</span>
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:flex-row md:items-center">
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search resources..."
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
                                    <SelectItem value="workshop">
                                        Workshop Materials
                                    </SelectItem>
                                    <SelectItem value="reference">
                                        Reference Materials
                                    </SelectItem>
                                    <SelectItem value="lecture">
                                        Lecture Materials
                                    </SelectItem>
                                    <SelectItem value="lab">
                                        Lab Materials
                                    </SelectItem>
                                    <SelectItem value="tutorial">
                                        Tutorial Videos
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <Select defaultValue="newest">
                                <SelectTrigger className="h-8 w-[150px]">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="newest">
                                        Newest First
                                    </SelectItem>
                                    <SelectItem value="oldest">
                                        Oldest First
                                    </SelectItem>
                                    <SelectItem value="downloads">
                                        Most Downloads
                                    </SelectItem>
                                    <SelectItem value="alphabetical">
                                        Alphabetical
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <Tabs defaultValue="files" className="space-y-4">
                        <TabsList>
                            <TabsTrigger value="files">Files</TabsTrigger>
                            <TabsTrigger value="links">Links</TabsTrigger>
                            <TabsTrigger value="starred">Starred</TabsTrigger>
                        </TabsList>
                        <TabsContent value="files" className="space-y-4">
                            <div className="border rounded-lg bg-background">
                                <div className="grid grid-cols-12 gap-4 p-4 text-sm font-medium text-muted-foreground border-b">
                                    <div className="col-span-5">Name</div>
                                    <div className="col-span-2">Category</div>
                                    <div className="col-span-2">
                                        Uploaded By
                                    </div>
                                    <div className="col-span-2">Date</div>
                                    <div className="col-span-1 text-right">
                                        Actions
                                    </div>
                                </div>
                                <div className="divide-y">
                                    {resources.map((resource) => (
                                        <div
                                            key={resource.id}
                                            className="grid grid-cols-12 gap-4 p-4 items-center"
                                        >
                                            <div className="col-span-5 flex items-center gap-3">
                                                {getTypeIcon(resource.type)}
                                                <div>
                                                    <div className="font-medium">
                                                        {resource.title}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground">
                                                        {resource.format.toUpperCase()}{" "}
                                                        • {resource.size} •{" "}
                                                        {resource.downloads}{" "}
                                                        downloads
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-2">
                                                <Badge variant="outline">
                                                    {resource.category}
                                                </Badge>
                                            </div>
                                            <div className="col-span-2">
                                                {resource.uploadedBy}
                                            </div>
                                            <div className="col-span-2 text-sm text-muted-foreground">
                                                {resource.uploadDate}
                                            </div>
                                            <div className="col-span-1 flex justify-end">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger
                                                        asChild
                                                    >
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
                                                            <Download className="mr-2 h-4 w-4" />
                                                            Download
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <Star className="mr-2 h-4 w-4" />
                                                            {resource.starred
                                                                ? "Unstar"
                                                                : "Star"}
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <Link2 className="mr-2 h-4 w-4" />
                                                            Copy Link
                                                        </DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem className="text-destructive">
                                                            Delete
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="links" className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                {links.map((link) => (
                                    <Card key={link.id}>
                                        <CardHeader className="pb-2">
                                            <div className="flex justify-between items-start">
                                                <CardTitle className="text-lg">
                                                    {link.title}
                                                </CardTitle>
                                                <Badge variant="outline">
                                                    {link.category}
                                                </Badge>
                                            </div>
                                            <CardDescription>
                                                <a
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center text-primary hover:underline"
                                                >
                                                    {link.url}
                                                    <ExternalLink className="ml-1 h-3 w-3" />
                                                </a>
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="pb-2">
                                            <p className="text-sm text-muted-foreground">
                                                {link.description}
                                            </p>
                                            <div className="mt-2 flex flex-wrap gap-1">
                                                {link.tags.map((tag, index) => (
                                                    <Badge
                                                        key={index}
                                                        variant="secondary"
                                                        className="text-xs"
                                                    >
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex justify-between text-xs text-muted-foreground">
                                            <div>
                                                Added by {link.addedBy} on{" "}
                                                {link.addDate}
                                            </div>
                                            <div>{link.clicks} clicks</div>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="starred" className="space-y-4">
                            <div className="border rounded-lg bg-background">
                                <div className="grid grid-cols-12 gap-4 p-4 text-sm font-medium text-muted-foreground border-b">
                                    <div className="col-span-5">Name</div>
                                    <div className="col-span-2">Category</div>
                                    <div className="col-span-2">
                                        Uploaded By
                                    </div>
                                    <div className="col-span-2">Date</div>
                                    <div className="col-span-1 text-right">
                                        Actions
                                    </div>
                                </div>
                                <div className="divide-y">
                                    {resources
                                        .filter((resource) => resource.starred)
                                        .map((resource) => (
                                            <div
                                                key={resource.id}
                                                className="grid grid-cols-12 gap-4 p-4 items-center"
                                            >
                                                <div className="col-span-5 flex items-center gap-3">
                                                    {getTypeIcon(resource.type)}
                                                    <div>
                                                        <div className="font-medium">
                                                            {resource.title}
                                                        </div>
                                                        <div className="text-xs text-muted-foreground">
                                                            {resource.format.toUpperCase()}{" "}
                                                            • {resource.size} •{" "}
                                                            {resource.downloads}{" "}
                                                            downloads
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <Badge variant="outline">
                                                        {resource.category}
                                                    </Badge>
                                                </div>
                                                <div className="col-span-2">
                                                    {resource.uploadedBy}
                                                </div>
                                                <div className="col-span-2 text-sm text-muted-foreground">
                                                    {resource.uploadDate}
                                                </div>
                                                <div className="col-span-1 flex justify-end">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger
                                                            asChild
                                                        >
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
                                                                <Download className="mr-2 h-4 w-4" />
                                                                Download
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                <Star className="mr-2 h-4 w-4" />
                                                                Unstar
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                <Link2 className="mr-2 h-4 w-4" />
                                                                Copy Link
                                                            </DropdownMenuItem>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem className="text-destructive">
                                                                Delete
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </main>
            </div>
        </div>
    );
}
