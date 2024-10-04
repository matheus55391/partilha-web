import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  name: string;
  href: string;
}

/**
 * Returns an array of breadcrumb items representing the current URL path.
 * Each breadcrumb item is an object with a `name` and `href` property.
 * The `name` property is the capitalized path segment, and the `href` property
 * is the URL path up to that segment.
 *
 * @returns {BreadcrumbItem[]} An array of breadcrumb items
 */

export function useTrailMap(): BreadcrumbItem[] {
  const pathname = usePathname();

  const breadcrumbArray = pathname
    .split("/")
    .filter((item) => item) 
    .map((item, index, arr) => {
      const href = "/" + arr.slice(0, index + 1).join("/");
      return {
        name: item.charAt(0).toUpperCase() + item.slice(1), 
        href,
      };
    });

  return breadcrumbArray;
}
