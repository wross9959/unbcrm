"use client"

import { useState } from "react"
import { CalendarPlus, FileUp, MessageSquarePlus, UserPlus, FolderPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

export function QuickActions() {
  const router = useRouter();
  const { toast } = useToast();
  const [actionInProgress, setActionInProgress] = useState<string | null>(null)
  

  const handleAction = (action: string, path: string) => {
    setActionInProgress(action)
    
    // Simulate API call
    setTimeout(() => {
      setActionInProgress(null)

      // Show success toast
      toast({
        title: "Success",
        description: `${action} action completed successfully.`,
        variant: "default",
      })

      // Navigate to the appropriate page
      router.push(path)
    }, 1500)
  }

  const actions = [
    { id: "member", label: "Add Member", icon: UserPlus, path: "/members/new" },
    { id: "event", label: "Create Event", icon: CalendarPlus, path: "/events" },
    { id: "project", label: "New Project", icon: FolderPlus, path: "/projects" },
    { id: "resource", label: "Upload Resource", icon: FileUp, path: "/resources" },
    { id: "announcement", label: "Post Announcement", icon: MessageSquarePlus, path: "/announcements" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common tasks you can perform quickly</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
          {actions.map((action) => (
            <Button
              key={action.id}
              variant="outline"
              className="flex h-24 flex-col items-center justify-center gap-1"
              onClick={() => handleAction(action.label, action.path)}
              disabled={actionInProgress === action.label}
            >
              {actionInProgress === action.label ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
              ) : (
                <action.icon className="h-5 w-5" />
              )}
              <span className="text-xs">{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
