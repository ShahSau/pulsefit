import BodyPartImage from '../assets/body-part.png';
import TargetImage from '../assets/target.png';
import EquipmentImage from '../assets/equipment.png';
import IconCard from '../components/IconCard';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ExerciseType from '../types/Exercise';
import YoutubeData from '../types/YoutubeData';

const Details = () => {
    const { id } = useParams<{id: string}>();
    const [exercise, setExercise] = useState<ExerciseType | null>(null);
    const [loading, setLoading] = useState(true);
    const [youtube, setYoutube] = useState<YoutubeData | [] >([]);
    const [loadingYoutube, setLoadingYoutube] = useState(true);

    useEffect(() => {
        fetch(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, {
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

        fetch(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exercise?.name} exercise`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_YOUTUBE_KEY as string,
                'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
              },
        })
            .then(response => response.json())
            .then(data => {
                setYoutube(data);
                setLoadingYoutube(false);
            })
            .catch(err => {
                console.error(err);
            });
        
    }
    , []);
    console.log(youtube)
  return (
    <section className="">
        {/* Details */}
        {!loading && <div className="pb-16 pt-6 sm:pb-24">
            <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
                <div className="lg:col-span-5 lg:col-start-8">
                    <h1 className="text-xl font-medium text-gray-500">{exercise?.name}</h1>
                </div>

                {/* Image gallery */}
                <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                    <div
                        key={exercise?.id}
                        className="min-h-96 min-w-96 relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8  sm:pt-48 lg:pt-80"
                    >
                        <img alt="" src={exercise?.gifUrl} className="absolute inset-0 -z-10 h-full w-full object-fill"/>
                        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                        <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                </div>

                <div className="mt-8 lg:col-span-5">
                {/* instruction */}
                <div className="mt-8 border-t border-gray-200 pt-8">
                    <h2 className="font-medium text-gray-900 text-xl">Instructions</h2>

                    <div className="prose prose-sm mt-4 text-gray-500">
                    <ul role="list" className="list-disc">
                        {exercise?.instructions.map((item) => (
                        <li key={item}>{item}</li>
                        ))}
                    </ul>
                    </div>
                </div>

                {/* icons */}
                <div className="mt-10">

                    <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                        <IconCard name="Body Part" bodyPart={exercise?.bodyPart || ""} img={BodyPartImage}/>
                        <IconCard name="Target" bodyPart={exercise?.target || ""} img={TargetImage}/>
                        <IconCard name="Equipment" bodyPart={exercise?.equipment || ""} img={EquipmentImage}/>
                    </dl>
                </div>
                </div>
            </div>
            </div>
        </div>}
        {/* Youtube */}
        {!loadingYoutube && <>
        <h1 className="text-2xl mx-4 font-bold text-gray-500">{`Watch ${exercise?.name} exercise videos`}</h1>
        <div className='mt-5 items-center justify-between gap-8 m-4'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 ">
                {/*eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
                {Array.isArray(youtube) ? null : youtube.contents.map((content:any) => (
                    <div className='max-w-96 my-6 md:my-2 shadow-lg rounded-lg' key={content.video.videoId || "ddddd"}>
                        <iframe
                            className="w-full h-56  rounded-lg"
                            src={`https://www.youtube.com/embed/`+content.video.videoId || ''}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                        <h2 className="font-medium text-gray-900 text-xl">{content.video.title}</h2>
                        <p className="text-sm text-gray-500">{content.video.description}</p>
                        <div className="flex justify-between mt-2">
                            <p className="text-sm text-gray-500">{content.video.channelName}</p>
                            <p className="text-sm text-gray-500">{content.video.viewCountText}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>}
        {(loading || loadingYoutube)&& <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>}
    </section>

  )
}

export default Details