import { describe, it, expect } from "vitest";
import { getDaysUntilDeadLine } from "../src/tasks";

describe("getDaysUntilDeadLine", () => {


    it('правильно розраховує дні до дедлайну (дедлайн через 2 дні)', () => {
        const today = new Date();
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + 2);

        const deadLineStr = futureDate.toISOString().split('T')[0];

        const result = getDaysUntilDeadLine(deadLineStr);
        expect(result).toBe(2);
    });

    it('повертає 0, якщо дедлайн сьогодні', () => {
        const todayStr = new Date().toISOString().split('T')[0];
        expect(getDaysUntilDeadLine(todayStr)).toBe(0);
    });

    it('повертає негативне значення, якщо дата вже минула', () => {
        const today = new Date();
        const pastDate = new Date(today);
        pastDate.setDate(today.getDate() - 5);

        const deadLineStr = pastDate.toISOString().split('T')[0];
        expect(getDaysUntilDeadLine(deadLineStr)).toBe(-5);
    });
});