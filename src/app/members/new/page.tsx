// app/members/page.tsx
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MemberForm } from "@/components/members/MemberForm";
import { ArrowLeftIcon } from "lucide-react";

export default function MembersPage() {
    const [members, setMembers] = useState<any[]>([]);
    const [editingMember, setEditingMember] = useState<any | null>(null);

    const handleSubmit = (data: any) => {
        if (editingMember) {
            setMembers((prev) =>
                prev.map((m) => (m.id === data.id ? data : m))
            );
            setEditingMember(null);
        } else {
            setMembers((prev) => [...prev, data]);
        }
    };

    const handleEdit = (member: any) => {
        setEditingMember(member);
    };

    const handleDelete = (id: string) => {
        setMembers((prev) => prev.filter((m) => m.id !== id));
    };

    return (
        <div className="flex flex-col gap-8 p-6">
            <div className="flex items-center gap-2">
                <Button
                    type="submit"
                    form="form-notifications"
                    variant="secondary"
                    onClick={() => (window.location.href = "/members")}
                >
                    <ArrowLeftIcon className="h-3.5 w-3.5" />
                    <span>Return</span>
                </Button>
            </div>

            <MemberForm
                initialData={editingMember || undefined}
                onSubmit={handleSubmit}
            />

            <Card>
                <CardHeader>
                    <CardTitle>Members</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Student #</TableHead>
                                <TableHead>UNB Email</TableHead>
                                <TableHead>UNB Student</TableHead>
                                <TableHead>Faculty / Program</TableHead>
                                <TableHead>Education Level</TableHead>
                                <TableHead>Year</TableHead>
                                <TableHead>Discord</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead className="text-right">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {members.map((m) => (
                                <TableRow key={m.id}>
                                    <TableCell>{m.name}</TableCell>
                                    <TableCell>{m.studentNumber}</TableCell>
                                    <TableCell>{m.unbEmail}</TableCell>
                                    <TableCell>
                                        {m.isUnbStudent ? "Yes" : "No"}
                                    </TableCell>
                                    <TableCell>{m.program}</TableCell>
                                    <TableCell>{m.educationLevel}</TableCell>
                                    <TableCell>{m.year}</TableCell>
                                    <TableCell>{m.discord}</TableCell>
                                    <TableCell>{m.role}</TableCell>
                                    <TableCell className="text-right flex gap-2 justify-end">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleEdit(m)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            onClick={() => handleDelete(m.id)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
