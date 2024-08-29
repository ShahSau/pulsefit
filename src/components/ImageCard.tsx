import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};
type Props = {
    body: string;
    imageUrl: string;
    secondaryMuscles: string[];
    id: string;
    name: string;
    target: string;
  };
const ImageCard = ({  body, imageUrl, secondaryMuscles, id, name, target }: Props) => {
  return (
    <motion.div 
      variants={childVariant}
      className="mt-8 rounded-md border-2 border-gray-300 text-center basis-1/4"
      >
        <Link to={`/exercise/${id}`} >
          {/* image */}
          <div
            key={id}
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8  sm:pt-48 lg:pt-80"
          >
            <img alt="" src={imageUrl} className="absolute inset-0 -z-10 h-full w-full object-fill"/>
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          {/* text */}
          <h3 className="mt-2 text-lg font-semibold leading-6 text-white">
            {name}
          </h3>
          <div className="mt-2 flex justify-center gap-2">
            <p className="inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium bg-pink-600/30 text-gray-700">{body}</p>
            <p className="inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium bg-pink-600/30 text-gray-700">{target}</p>
          </div>
          <div className="mt-2 flex justify-center gap-2">
            {secondaryMuscles.map((muscle) => (
              <span key={muscle} className="inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium bg-red-900/15 text-gray-700">{muscle}</span>
          ))}
          </div>

       </Link>
       
                    
    </motion.div>
  )
}

export default ImageCard