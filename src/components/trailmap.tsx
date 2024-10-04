"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useTrailMap } from "@/hooks/use-trailmap";
import Link from "next/link";
import React from "react";

export function TrailMap() {
  const breadcrumbArray = useTrailMap();

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {breadcrumbArray.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={item.href}>{item.name}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index !== breadcrumbArray.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
