import { OptionsType } from "../shared/types";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";
import { motion } from "framer-motion";
import HText from "../shared/HText";
import Options from "./Options";
import { Link } from "react-router-dom";

const options: Array<OptionsType> = [
    {
      name: "Back",
      image: image1,
    },
    {
      name: "Cardio",
      image: image2,
    },
    {
        name: "Chest",
        image: image7,
    },
    {
      name: "lower arms",
      image: image4,
    },
    {
      name: "lower legs",
      image: image3,
    },
    {
      name: "neck",
      image: image9,
    },
    {
      name: "Shoulders",
      image: image10,
    },
    {
      name: "Upper arms",
      image: image5,
    },
    {
      name: "Upper legs",
      image: image8,
    },
    {
      name: "waist",
      image: image6,
    },
  ];

const HomeSearch = () => {
  return (
    <section id="options" className="w-full py-40">
        <motion.div
        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
            >
                {/*search bar*/}
                <div className="md:w-3/5">
                    <HText>Exercises</HText>
                    <div className="py-5  md:ml-56 lg:ml-96">
                        <form className="mx-auto mt-10 flex max-w-md gap-x-4">
                            <label htmlFor="email-address" className="sr-only">
                                Search Exercise
                            </label>
                            <input
                                id="exercise"
                                name="exercise"
                                required
                                placeholder="Enter exercise type"
                                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white/50 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 placeholder-white/50"
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white/50 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-white "
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
            <Link to="/exercise?">
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {options.map((item: OptionsType, index) => (
                            <Options
                                key={`${item.name}-${index}`}
                                name={item.name}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>   
            </Link> 
        </motion.div>
    </section>
  )
}

export default HomeSearch