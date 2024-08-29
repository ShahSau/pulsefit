type CustomerCardProps = {
    id: number;
    imageUrl: string;
    name: string;
    role: string;
    comment: string;
};

const CustomerCard = ({ card }: { card: CustomerCardProps }) => {
    return (
    <div
    key={card.id}
    className="relative h-[450px] w-[450px]"
    >
        <img alt="" src={card.imageUrl} className="aspect-[3/2] w-full rounded-2xl object-cover" />
        <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-500">{card.name}</h3>
        <p className="text-base leading-7 text-gray-500">{card.role}</p>
        <p className="mt-4 text-base leading-7 text-gray-500">{card.comment}</p>
    </div>
    );
  };

export default CustomerCard;