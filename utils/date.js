
export const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export function formatMonth(month) {
    if (!month) return "";
    // Check if month is a number or string number
    const monthNum = parseInt(month);
    if (!isNaN(monthNum) && monthNum >= 1 && monthNum <= 12) {
        return months[monthNum - 1];
    }
    return month;
}
