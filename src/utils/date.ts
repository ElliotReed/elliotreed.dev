type Order = "asc" | "desc";

export function sortByDate<T>(
    items: T[],
    order: Order = "desc"
): T[] {
    const dir = order === "asc" ? 1 : -1;

    return [...items].sort((a, b) => {
        const aDate = (a as any).data.date_updated ?? (a as any).data.date;
        const bDate = (b as any).data.date_updated ?? (b as any).data.date;

        return (aDate.getTime() - bDate.getTime()) * dir;
    });
}