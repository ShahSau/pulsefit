import { motion } from "framer-motion";
import ImageCard from '../components/ImageCard';

const exercise = [
    {
        "bodyPart":"waist",
        "equipment":"body weight",
        "gifUrl":"https://v2.exercisedb.io/image/UXHynpjAJLc5am",
        "id":"0001",
        "name":"3/4 sit-up",
        "target":"abs",
        "secondaryMuscles":["hip flexors","lower back"],
        "instructions":["Lie flat on your back with your knees bent and feet flat on the ground.","Place your hands behind your head with your elbows pointing outwards.","Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.","Pause for a moment at the top, then slowly lower your upper body back down to the starting position.","Repeat for the desired number of repetitions."]
    },
    {
        "bodyPart":"waist",
        "equipment":"body weight",
        "gifUrl":"https://v2.exercisedb.io/image/pJQQb3R3mKXQor",
        "id":"0002",
        "name":"45° side bend",
        "target":"abs",
        "secondaryMuscles":["obliques"],
        "instructions":["Stand with your feet shoulder-width apart and your arms extended straight down by your sides.","Keeping your back straight and your core engaged, slowly bend your torso to one side, lowering your hand towards your knee.","Pause for a moment at the bottom, then slowly return to the starting position.","Repeat on the other side.","Continue alternating sides for the desired number of repetitions."]
    },
    {
        "bodyPart":"waist",
        "equipment":"body weight",
        "gifUrl":"https://v2.exercisedb.io/image/w8np0UA-thw9vr",
        "id":"0003",
        "name":"air bike",
        "target":"abs",
        "secondaryMuscles":["hip flexors"],
        "instructions":["Lie flat on your back with your hands placed behind your head.","Lift your legs off the ground and bend your knees at a 90-degree angle.","Bring your right elbow towards your left knee while simultaneously straightening your right leg.","Return to the starting position and repeat the movement on the opposite side, bringing your left elbow towards your right knee while straightening your left leg.","Continue alternating sides in a pedaling motion for the desired number of repetitions."]
    },
    {
        "bodyPart":"upper legs",
        "equipment":"body weight",
        "gifUrl":"https://v2.exercisedb.io/image/TdXoBoc5c6n6Dy",
        "id":"1512",
        "name":"all fours squad stretch",
        "target":"quads",
        "secondaryMuscles":["hamstrings","glutes"],
        "instructions":["Start on all fours with your hands directly under your shoulders and your knees directly under your hips.","Extend one leg straight back, keeping your knee bent and your foot flexed.","Slowly lower your hips towards the ground, feeling a stretch in your quads.","Hold this position for 20-30 seconds.","Switch legs and repeat the stretch on the other side."]
    },
    {
        "bodyPart":"waist",
        "equipment":"body weight",
        "gifUrl":"https://v2.exercisedb.io/image/ZkACiC8VflHXdc",
        "id":"0006",
        "name":"alternate heel touchers",
        "target":"abs",
        "secondaryMuscles":["obliques"],
        "instructions":["Lie flat on your back with your knees bent and feet flat on the ground.","Extend your arms straight out to the sides, parallel to the ground.","Engaging your abs, lift your shoulders off the ground and reach your right hand towards your right heel.","Return to the starting position and repeat on the left side, reaching your left hand towards your left heel.","Continue alternating sides for the desired number of repetitions."]
    },
    {
        "bodyPart":"back",
        "equipment":"cable",
        "gifUrl":"https://v2.exercisedb.io/image/DttQ3vCZ2Wh4nC",
        "id":"0007",
        "name":"alternate lateral pulldown",
        "target":"lats",
        "secondaryMuscles":["biceps","rhomboids"],
        "instructions":["Sit on the cable machine with your back straight and feet flat on the ground.","Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.","Lean back slightly and pull the handles towards your chest, squeezing your shoulder blades together.","Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.","Repeat for the desired number of repetitions."]
    },
    {
        "bodyPart":"lower legs",
        "equipment":"body weight",
        "gifUrl":"https://v2.exercisedb.io/image/Jil4ufBUF4e4Ss",
        "id":"1368",
        "name":"ankle circles",
        "target":"calves",
        "secondaryMuscles":["ankle stabilizers"],
        "instructions":["Sit on the ground with your legs extended in front of you.","Lift one leg off the ground and rotate your ankle in a circular motion.","Perform the desired number of circles in one direction, then switch to the other direction.","Repeat with the other leg."]
    },
    {
        "bodyPart":"back",
        "equipment":"body weight",
        "gifUrl":"https://v2.exercisedb.io/image/3D880igiWGACZl",
        "id":"3293",
        "name":"archer pull up",
        "target":"lats",
        "secondaryMuscles":["biceps","forearms"],
        "instructions":["Start by hanging from a pull-up bar with an overhand grip, slightly wider than shoulder-width apart.","Engage your core and pull your shoulder blades down and back.","As you pull yourself up, bend one arm and bring your elbow towards your side, while keeping the other arm straight.","Continue pulling until your chin is above the bar and your bent arm is fully flexed.","Lower yourself back down with control, straightening the bent arm and repeating the movement on the other side.","Alternate sides with each repetition."]
    },
    {
        "bodyPart":"chest",
        "equipment":"body weight",
        "gifUrl":"https://v2.exercisedb.io/image/q9P0mPhfK0GrJe",
        "id":"3294",
        "name":"archer push up",
        "target":"pectorals",
        "secondaryMuscles":["triceps","shoulders","core"],
        "instructions":["Start in a push-up position with your hands slightly wider than shoulder-width apart.","Extend one arm straight out to the side, parallel to the ground.","Lower your body by bending your elbows, keeping your back straight and core engaged.","Push back up to the starting position.","Repeat on the other side, extending the opposite arm out to the side.","Continue alternating sides for the desired number of repetitions."]
    },
    {
        "bodyPart":"waist",
        "equipment":"body weight",
        "gifUrl":"https://v2.exercisedb.io/image/CYRUwakOZVz7X6",
        "id":"2355",
        "name":"arm slingers hanging bent knee legs",
        "target":"abs",
        "secondaryMuscles":["shoulders","back"],
        "instructions":["Hang from a pull-up bar with your arms fully extended and your knees bent at a 90-degree angle.","Engage your core and lift your knees towards your chest, bringing them as close to your elbows as possible.","Slowly lower your legs back down to the starting position.","Repeat for the desired number of repetitions."]
    }
]

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
                <form className="mx-auto mt-10 flex max-w-md">
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
                    >
                        <option value="equipment">Equipment</option>
                        <option value="bodypart">Body Part</option>
                        <option value="target">Target</option>
                    </select>
        
                    <input
                        id="exercise"
                        name="exercise"
                        required
                        placeholder="Enter exercise name"
                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-10 py-2 text-white/50 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 placeholder-white/50"
                    />
                    <button
                        type="submit"
                        className="ml-4 flex-none rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white/50 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-white "
                    >
                        Search
                    </button>
                </form>
            </div>
        </motion.div>
            

        <motion.div
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
        </motion.div>   


    </section>
  )
}

export default Exercise

