export interface INotes{
    id: string;
    title: string;
    notes: string;
    created: Date;
    coordinates: [number, number];
    photoURL?: string;
    userId?: string;
}
