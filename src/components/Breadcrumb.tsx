import * as React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import {
    Breadcrumb as BreadcrumbUI,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbProps {
    items: {
        label: string;
        href?: string;
    }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <div className="bg-slate-50 border-b border-slate-200">
            <div className="section-container py-3">
                <BreadcrumbUI>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to="/" className="flex items-center gap-1 text-slate-500 hover:text-primary transition-colors">
                                    <Home className="h-4 w-4" />
                                    <span className="sr-only">Home</span>
                                </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        {items.map((item, index) => (
                            <React.Fragment key={item.label}>
                                <BreadcrumbSeparator>
                                    <ChevronRight className="h-4 w-4 text-slate-300" />
                                </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    {item.href ? (
                                        <BreadcrumbLink asChild>
                                            <Link
                                                to={item.href}
                                                className="text-sm font-medium text-slate-500 hover:text-primary transition-colors hover:underline"
                                            >
                                                {item.label}
                                            </Link>
                                        </BreadcrumbLink>
                                    ) : (
                                        <BreadcrumbPage className="text-sm font-bold text-[#003366] tracking-tight">
                                            {item.label}
                                        </BreadcrumbPage>
                                    )}
                                </BreadcrumbItem>
                            </React.Fragment>
                        ))}
                    </BreadcrumbList>
                </BreadcrumbUI>
            </div>
        </div>
    );
}
