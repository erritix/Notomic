import type { NoteData } from "@/types";

export const fakeNotes: NoteData[] = [
    {
        title: "Test Note",
        id: crypto.randomUUID(),
        lastEdited: new Date(2026, 1, 20, 14, 30).getTime(),
        content: '# Hello world\n Init **SYBAU.EXE**'
    }
]