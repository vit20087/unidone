export function getDaysUntilDeadLine(deadlineDateString) {
    const today = new Date();
    today.setHours(0,0,0,0);

    const deadLine = new Date(deadlineDateString)
    deadLine.setHours(0,0,0,0);

    const diffTime = deadLine-today;
    const diffDays = Math.ceil(diffTime/(1000 * 60 * 60 * 24));

    return diffDays ;
}