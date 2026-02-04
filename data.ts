import { title } from "process";

export const initialTickets = [
    {
        id:"1",
        title:"Ticket 1",
        content:"First ticket",
        status:"OPEN" as const
    },
    {
        id:"2",
        title:"Ticket 2",
        content:"Second ticket",
        status:"IN_PROGRESS" as const
    },
    {
        id:"3",
        title:"Ticket 3",
        content:"Third ticket",
        status:"DONE" as const
    }
]