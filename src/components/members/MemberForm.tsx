"use client";

import { useState } from "react";
import { v4 as uuid } from "uuid";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type Props = {
    initialData?: {
        id: string;
        name: string;
        studentNumber: string;
        unbEmail: string;
        isUnbStudent: boolean;
        program: string;
        educationLevel: string;
        year: string;
        discord: string;
        role: string;
    };
    onSubmit: (data: any) => void;
};

export function MemberForm({ initialData, onSubmit }: Props) {
    const [form, setForm] = useState({
        name: initialData?.name || "",
        studentNumber: initialData?.studentNumber || "",
        unbEmail: initialData?.unbEmail || "",
        isUnbStudent: initialData?.isUnbStudent ?? true,
        program: initialData?.program || "",
        educationLevel: initialData?.educationLevel || "Undergrad",
        year: initialData?.year || "",
        discord: initialData?.discord || "",
        role: initialData?.role || "Member",
    });

    const handleChange = (
        field: keyof typeof form,
        value: string | boolean
    ) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data = {
            id: initialData?.id || uuid(),
            ...form,
        };
        onSubmit(data);
        setForm({
            name: "",
            studentNumber: "",
            unbEmail: "",
            isUnbStudent: true,
            program: "",
            educationLevel: "Undergrad",
            year: "",
            discord: "",
            role: "Member",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>
                        {initialData ? "Edit Member" : "Add Member"}
                    </CardTitle>
                    <CardDescription>
                        {initialData
                            ? "Update a member’s details"
                            : "Add a new member to the system"}
                    </CardDescription>
                </CardHeader>
                <CardContent className="@container">
                    <FieldGroup>
                        <Field>
                            <Label htmlFor="name">Name</Label>
                            <FieldControl>
                                <Input
                                    id="name"
                                    value={form.name}
                                    onChange={(e) =>
                                        handleChange("name", e.target.value)
                                    }
                                    required
                                />
                            </FieldControl>
                        </Field>
                        <Field>
                            <Label htmlFor="studentNumber">
                                Student Number
                            </Label>
                            <FieldControl>
                                <Input
                                    id="studentNumber"
                                    value={form.studentNumber}
                                    onChange={(e) =>
                                        handleChange(
                                            "studentNumber",
                                            e.target.value
                                        )
                                    }
                                    required
                                />
                            </FieldControl>
                        </Field>
                        <Field>
                            <Label htmlFor="unbEmail">UNB Email</Label>
                            <FieldControl>
                                <Input
                                    id="unbEmail"
                                    type="email"
                                    value={form.unbEmail}
                                    onChange={(e) =>
                                        handleChange("unbEmail", e.target.value)
                                    }
                                    required
                                />
                            </FieldControl>
                        </Field>
                        <Field>
                            <Label htmlFor="isUnbStudent">
                                Are you a UNB student?
                            </Label>
                            <FieldControl>
                                <Select
                                    value={form.isUnbStudent ? "yes" : "no"}
                                    onValueChange={(val) =>
                                        handleChange(
                                            "isUnbStudent",
                                            val === "yes"
                                        )
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Yes or No" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="yes">Yes</SelectItem>
                                        <SelectItem value="no">No</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FieldControl>
                        </Field>
                        <Field>
                            <Label htmlFor="program">Faculty / Program</Label>
                            <FieldControl>
                                <Input
                                    id="program"
                                    value={form.program}
                                    onChange={(e) =>
                                        handleChange("program", e.target.value)
                                    }
                                    required
                                />
                            </FieldControl>
                        </Field>
                        <Field>
                            <Label htmlFor="educationLevel">
                                Education Level
                            </Label>
                            <FieldControl>
                                <Select
                                    value={form.educationLevel}
                                    onValueChange={(val) =>
                                        handleChange("educationLevel", val)
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select level" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Undergrad">
                                            Undergrad
                                        </SelectItem>
                                        <SelectItem value="Grad">Grad</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FieldControl>
                        </Field>
                        <Field>
                            <Label htmlFor="year">Year of Program</Label>
                            <FieldControl>
                                <Input
                                    id="year"
                                    value={form.year}
                                    onChange={(e) =>
                                        handleChange("year", e.target.value)
                                    }
                                    required
                                />
                            </FieldControl>
                        </Field>
                        <Field>
                            <Label htmlFor="discord">Discord Username</Label>
                            <FieldControl>
                                <Input
                                    id="discord"
                                    value={form.discord}
                                    onChange={(e) =>
                                        handleChange("discord", e.target.value)
                                    }
                                    required
                                />
                            </FieldControl>
                        </Field>
                        <Field>
                            <Label htmlFor="role">Role</Label>
                            <FieldControl>
                                <Select
                                    value={form.role}
                                    onValueChange={(val) =>
                                        handleChange("role", val)
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Member">
                                            Member
                                        </SelectItem>
                                        <SelectItem value="Exec">Exec</SelectItem>
                                        <SelectItem value="President">President</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FieldControl>
                        </Field>
                    </FieldGroup>
                </CardContent>
                <CardFooter className="border-t">
                    <Button type="submit" variant="secondary">
                        {initialData ? "Update" : "Add Member"}
                    </Button>
                </CardFooter>
            </Card>
        </form>
    );
}

function FieldGroup({ children }: React.ComponentProps<"div">) {
    return (
        <div className="@container/field-group flex max-w-4xl min-w-0 flex-col gap-8 @3xl:gap-6">
            {children}
        </div>
    );
}

function Field({ children, className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            className={cn(
                "grid auto-rows-min items-start gap-3 *:data-[slot=label]:col-start-1 *:data-[slot=label]:row-start-1 @3xl/field-group:grid-cols-2 @3xl/field-group:gap-6",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

function FieldControl({
    children,
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            className={cn(
                "@3xl/field-group:col-start-2 @3xl/field-group:row-span-2 @3xl/field-group:row-start-1 @3xl/field-group:self-start",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
