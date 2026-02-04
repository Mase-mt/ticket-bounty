import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ticketPath } from "@/paths";
import Link from "next/link";
import { TICKET_ICONS } from "../constants";
import { Ticket } from "../types";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type TicketItemsProp = {
  ticket: Ticket;
};

const TicketItem = ({ ticket }: TicketItemsProp) => {
  const detailButton = (
      <Button asChild variant={"outline"} size={"icon"}>
        <Link href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="w-4 h-4"/>
      </Link>
      </Button>
  );
  return (
    <div className="w-full max-w-[420px] flex gap-x-1">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span className="line-clamp-3 whitespace-break-spaces">
            {ticket.content}
          </span>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-y-2.5">
      {detailButton}
      </div>
    </div>
  );
};

export { TicketItem };
