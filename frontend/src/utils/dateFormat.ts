

const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

export function formatTimeAgo(date: Date | string | number): string {
    const now = new Date();
    const messageDate = new Date(date);
    const diff = (messageDate.getTime() - now.getTime()) / 1000;

    const divisions: { amount: number; name: Intl.RelativeTimeFormatUnit }[] = [
        { amount: 60, name: "seconds" },
        { amount: 60, name: "minutes" },
        { amount: 24, name: "hours" },
        { amount: 30, name: "days" },
        { amount: 12, name: "months" },
        { amount: Infinity, name: "years" },
    ];

    let duration = diff;

    for (const division of divisions) {
        if (Math.abs(duration) < division.amount) {
            return rtf.format(Math.round(duration), division.name);
        }
        duration /= division.amount;
    }

    return "";
}