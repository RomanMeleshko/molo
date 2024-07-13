interface Todo {
    link: string;
    icon: string;
}

interface Note {
    id: number;
    name?: string;
    class?: string;
    link?: string;
    title?: string;
    links?: Array<Todo>;
    phone?: string;
    email?: string;
    place?: string;
    image?: string;
}

export default Note
