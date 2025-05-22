import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

type Member = {
  id: string
  name: string
  email: string
  role: string
}

export function MemberTable({
  members,
  onEdit,
  onDelete,
}: {
  members: Member[]
  onEdit: (member: Member) => void
  onDelete: (id: string) => void
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {members.map((m) => (
          <TableRow key={m.id}>
            <TableCell>{m.name}</TableCell>
            <TableCell>{m.email}</TableCell>
            <TableCell>{m.role}</TableCell>
            <TableCell className="text-right flex gap-2 justify-end">
              <Button variant="outline" size="sm" onClick={() => onEdit(m)}>
                Edit
              </Button>
              <Button variant="destructive" size="sm" onClick={() => onDelete(m.id)}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
