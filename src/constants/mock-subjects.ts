import { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "CS",
        description: "A foundational course covering core programming concepts, algorithms, and computational thinking.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 2,
        code: "MTH201",
        name: "Calculus II",
        department: "Math",
        description: "Continuation of Calculus I, exploring integral calculus, series, and multivariable functions.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 3,
        code: "ENG110",
        name: "Academic Writing",
        department: "English",
        description: "Develops students' ability to write clear, well-structured academic essays and research papers.",
        createdAt: new Date().toISOString(),
    },
];
