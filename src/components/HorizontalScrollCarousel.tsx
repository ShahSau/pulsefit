import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import CustomerCard from "./CustomerCard";
import customer1 from "../assets/customer1.jpg";
import customer2 from "../assets/customer2.jpg";
import customer3 from "../assets/customer3.jpg";
import customer4 from "../assets/customer4.jpg";
import customer5 from "../assets/customer5.jpg";
const cards = [
    {
      name: 'Emma Dorsey',
      role: 'Senior Developer',
      imageUrl: customer1,
      comment: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
      id: 1,
    },
    {
      name: 'John Doe',
      role: 'Designer',
      imageUrl: customer2,
      comment: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
      id: 2,
    },
    {
      name: 'Jane Doe',
      role: 'Developer',
      imageUrl: customer3,
      comment: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
      id: 3,
    },
    {
      name: 'John Smith',
      role: 'Designer',
      imageUrl: customer4,
      comment: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
      id: 4,
    },
    {
      name: 'Jane Smith',
      role: 'Developer',
      imageUrl: customer5,
      comment: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
      id: 5,
    },
  ];

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  
    return (
      <section ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-2">
            {cards.map((card) => {
              return <CustomerCard card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    );
  };

export default HorizontalScrollCarousel;