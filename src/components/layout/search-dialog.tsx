"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, FileText, FolderOpen, Search, Users, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"

export function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const members = [
    { id: 1, name: "Alex Johnson", role: "President", href: "/members/1" },
    { id: 2, name: "Jamie Lee", role: "Education Coordinator", href: "/members/2" },
    { id: 3, name: "Sam Wilson", role: "External Relations", href: "/members/3" },
    { id: 4, name: "Taylor Smith", role: "Technical Lead", href: "/members/4" },
  ]

  const events = [
    { id: 1, name: "Capture The Flag Competition", date: "March 25, 2025", href: "/events/1" },
    { id: 2, name: "Intro to Penetration Testing", date: "April 2, 2025", href: "/events/2" },
    { id: 3, name: "Industry Speaker: Cybersecurity Careers", date: "April 10, 2025", href: "/events/3" },
  ]

  const projects = [
    { id: 1, name: "Vulnerability Scanner", progress: "75%", href: "/projects/1" },
    { id: 2, name: "Security Awareness Campaign", progress: "40%", href: "/projects/2" },
    { id: 3, name: "CTF Challenge Development", progress: "90%", href: "/projects/3" },
  ]

  const resources = [
    { id: 1, name: "Introduction to Penetration Testing", type: "PDF", href: "/resources/1" },
    { id: 2, name: "Web Security Vulnerabilities Cheat Sheet", type: "PDF", href: "/resources/2" },
    { id: 3, name: "Cryptography Basics - Lecture Slides", type: "PPTX", href: "/resources/3" },
  ]

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.date.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredProjects = projects.filter((project) => project.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const filteredResources = resources.filter(
    (resource) =>
      resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.type.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleItemClick = () => {
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="w-[260px] justify-start text-sm text-muted-foreground">
          <Search className="mr-2 h-4 w-4" />
          Search...
          <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogTitle className="sr-only">Search</DialogTitle>
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for members, events, projects, resources..."
              value={searchQuery}
              onChange={handleSearch}
              className="border-0 p-0 shadow-none focus-visible:ring-0"
              autoFocus
            />
            {searchQuery && (
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setSearchQuery("")}>
                <X className="h-4 w-4" />
                <span className="sr-only">Clear</span>
              </Button>
            )}
          </div>
        </DialogHeader>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          <ScrollArea className="max-h-[300px] overflow-auto">
            <TabsContent value="all" className="space-y-4 py-2">
              {filteredMembers.length > 0 && (
                <div>
                  <h3 className="mb-2 text-sm font-medium">Members</h3>
                  <div className="space-y-1">
                    {filteredMembers.slice(0, 3).map((member) => (
                      <Link
                        key={member.id}
                        href={member.href}
                        className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent"
                        onClick={handleItemClick}
                      >
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">{member.name}</p>
                          <p className="text-xs text-muted-foreground">{member.role}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {filteredEvents.length > 0 && (
                <div>
                  <h3 className="mb-2 text-sm font-medium">Events</h3>
                  <div className="space-y-1">
                    {filteredEvents.slice(0, 3).map((event) => (
                      <Link
                        key={event.id}
                        href={event.href}
                        className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent"
                        onClick={handleItemClick}
                      >
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">{event.name}</p>
                          <p className="text-xs text-muted-foreground">{event.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {filteredProjects.length > 0 && (
                <div>
                  <h3 className="mb-2 text-sm font-medium">Projects</h3>
                  <div className="space-y-1">
                    {filteredProjects.slice(0, 3).map((project) => (
                      <Link
                        key={project.id}
                        href={project.href}
                        className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent"
                        onClick={handleItemClick}
                      >
                        <FolderOpen className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">{project.name}</p>
                          <p className="text-xs text-muted-foreground">Progress: {project.progress}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {filteredResources.length > 0 && (
                <div>
                  <h3 className="mb-2 text-sm font-medium">Resources</h3>
                  <div className="space-y-1">
                    {filteredResources.slice(0, 3).map((resource) => (
                      <Link
                        key={resource.id}
                        href={resource.href}
                        className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent"
                        onClick={handleItemClick}
                      >
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">{resource.name}</p>
                          <p className="text-xs text-muted-foreground">{resource.type}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {filteredMembers.length === 0 &&
                filteredEvents.length === 0 &&
                filteredProjects.length === 0 &&
                filteredResources.length === 0 && (
                  <div className="py-6 text-center text-sm text-muted-foreground">
                    No results found for "{searchQuery}"
                  </div>
                )}
            </TabsContent>
            <TabsContent value="members" className="space-y-4 py-2">
              {filteredMembers.length > 0 ? (
                <div className="space-y-1">
                  {filteredMembers.map((member) => (
                    <Link
                      key={member.id}
                      href={member.href}
                      className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent"
                      onClick={handleItemClick}
                    >
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-6 text-center text-sm text-muted-foreground">
                  No members found for "{searchQuery}"
                </div>
              )}
            </TabsContent>
            <TabsContent value="events" className="space-y-4 py-2">
              {filteredEvents.length > 0 ? (
                <div className="space-y-1">
                  {filteredEvents.map((event) => (
                    <Link
                      key={event.id}
                      href={event.href}
                      className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent"
                      onClick={handleItemClick}
                    >
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">{event.name}</p>
                        <p className="text-xs text-muted-foreground">{event.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-6 text-center text-sm text-muted-foreground">
                  No events found for "{searchQuery}"
                </div>
              )}
            </TabsContent>
            <TabsContent value="projects" className="space-y-4 py-2">
              {filteredProjects.length > 0 ? (
                <div className="space-y-1">
                  {filteredProjects.map((project) => (
                    <Link
                      key={project.id}
                      href={project.href}
                      className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent"
                      onClick={handleItemClick}
                    >
                      <FolderOpen className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">{project.name}</p>
                        <p className="text-xs text-muted-foreground">Progress: {project.progress}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-6 text-center text-sm text-muted-foreground">
                  No projects found for "{searchQuery}"
                </div>
              )}
            </TabsContent>
            <TabsContent value="resources" className="space-y-4 py-2">
              {filteredResources.length > 0 ? (
                <div className="space-y-1">
                  {filteredResources.map((resource) => (
                    <Link
                      key={resource.id}
                      href={resource.href}
                      className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent"
                      onClick={handleItemClick}
                    >
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">{resource.name}</p>
                        <p className="text-xs text-muted-foreground">{resource.type}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-6 text-center text-sm text-muted-foreground">
                  No resources found for "{searchQuery}"
                </div>
              )}
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}