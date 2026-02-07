import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { notFound } from "next/navigation";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  // const ticket = initialTickets.find((ticket) => ticket.id === ticketId);
  const ticket = await getTicket((await params).ticketId);
  if (!ticket) {
    notFound();
  }
  return (
    <div className="flex justify-center animate-fade-in-from-top">
      <TicketItem key={ticket.id} ticket={ticket} isDetail />
    </div>
  );
};

export default TicketPage;
