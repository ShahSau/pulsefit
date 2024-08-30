import { motion } from "framer-motion";
import ImageCard from '../components/ImageCard';
import { useState, useEffect } from "react";


export interface ExerciseType {
    bodyPart: string
    equipment: string
    gifUrl: string
    id: string
    name: string
    target: string
    secondaryMuscles: string[]
    instructions: string[]
}

const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
};


const Exercise = () => {
    const [exercise, setExercise] = useState<ExerciseType[]>([]);
    const [loading, setLoading] = useState(true);
    const [type, setType] = useState('bodyPart');
    const [search, setSearch] = useState('');
    const [dropValues, setDropValues] = useState([
        "back","cardio","chest","lower arms","lower legs","neck","shoulders","upper arms","upper legs","waist"
    ]);


    useEffect(() => {
        fetch('https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0', {
            method: 'GET',
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_EXERCISE_KEY as string,
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
            },
        })
            .then(response => response.json())
            .then(data => {
                setExercise(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    useEffect(() => {
        setLoading(true);
        fetch(`https://exercisedb.p.rapidapi.com/exercises/${type}List`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_EXERCISE_KEY as string,
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
            },
        })
            .then(response => response.json())
            .then(data => {
                setDropValues(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
            });
    }, [type, exercise]);


  return (
    <section id="" className="gap-1 py-10 md:h-full md:pb-0">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={
                {
                    hidden: { opacity: 0, x: -90 },
                    visible: { opacity: 1, x: 0 },
                }
            }
            className="md:w-3/5 flex justify-center items-center"
        >
            <div className="py-5  md:ml-56 lg:ml-96">
                <form className="mx-auto mt-10 flex max-w-md" onSubmit={
                    (e) => {
                        e.preventDefault();
                        setSearch('');
                        setLoading(true);
                        fetch(`https://exercisedb.p.rapidapi.com/exercises/${type}/${search}`, {
                            method: 'GET',
                            headers: {
                                'x-rapidapi-key': import.meta.env.VITE_EXERCISE_KEY as string,
                                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
                            },
                        })
                            .then(response => response.json())
                            .then(data => {
                                setExercise(data);
                                setLoading(false);
                            })
                            .catch(err => {
                                console.error(err);
                            });
                    }
                }>
                    <label htmlFor="email-address" className="sr-only">
                        Search Exercise
                    </label>
                    <label htmlFor="type" className="sr-only">
                        Type
                    </label>
                    <select
                        id="type"
                        name="type"
                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-5.5 py-2 text-white/50 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 placeholder-white/50"
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="equipment">Equipment</option>
                        <option value="bodyPart">Body Part</option>
                        <option value="target">Target</option>
                    </select>
        
                    <select
                        id="exercise"
                        name="exercise"
                        required
                        
                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-10 py-2 text-white/50 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 placeholder-white/50"
                        onChange={(e) => setSearch(e.target.value)}
                    >
                        {dropValues.map((value: string) => (
                            <option key={value} value={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                    <button
                        type="submit"
                        className="ml-4 flex-none rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white/50 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-white"
                    >
                        Search
                    </button>
                </form>
            </div>
        </motion.div>
            

        {!loading && <motion.div
            className="mt-6 items-center justify-between gap-8 md:flex flex-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
        >
            {exercise.map((exercise: ExerciseType) => (
                <ImageCard
                    key={exercise.id}
                    body={exercise.bodyPart}
                    imageUrl={exercise.gifUrl}
                    secondaryMuscles={exercise.secondaryMuscles}
                    id={exercise.id}
                    name={exercise.name}
                    target={exercise.target}
                />
            ))}
        </motion.div>  } 

        {loading && <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
            }


    </section>
  )
}

export default Exercise

