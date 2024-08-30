import BodyPartImage from '../assets/body-part.png';
import TargetImage from '../assets/target.png';
import EquipmentImage from '../assets/equipment.png';
import IconCard from '../components/IconCard';

const exercise={
    "bodyPart":"waist", //
    "equipment":"body weight",
    "gifUrl":"https://v2.exercisedb.io/image/pJQQb3R3mKXQor", //
    "id":"0002", // 
    "name":"45° side bend",//
    "target":"abs",//
    "secondaryMuscles":["obliques"],
    "instructions":["Stand with your feet shoulder-width apart and your arms extended straight down by your sides.","Keeping your back straight and your core engaged, slowly bend your torso to one side, lowering your hand towards your knee.","Pause for a moment at the bottom, then slowly return to the starting position.","Repeat on the other side.","Continue alternating sides for the desired number of repetitions."]
}

const youtube = {
    "contents":
    [
        {
            "video":
            {
                "channelId":"UCsRM0YB_dabtEPGPTKo-gcw",
                "channelName":"Adele",
                "description":"Follow Adele on: Facebook - https://www.facebook.com/Adele Twitter - https://twitter.com/Adele Instagram ...",
                "lengthText":"5:08",
                "publishedTimeText":"8 years ago",
                "thumbnails":[
                    {
                        "height":202,
                        "url":"https://i.ytimg.com/vi/DfG6VKnjrVw/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB5n_7dEYsm7eUH3Ni1f8B3AjCMMg",
                        "width":360
                    },
                    {
                        "height":404,
                        "url":"https://i.ytimg.com/vi/DfG6VKnjrVw/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAg-OxjBc39z4L-1iOFko8BPegWtQ",
                        "width":720
                    }
                ],
                "title":"Adele - Hello (Live at the NRJ Awards)",
                "videoId":"DfG6VKnjrVw",
                "viewCountText":"107,452,372 views"
            }
        },
        {
            "video":
            {
                "channelId":"UC7oBTs3SUrGBK8zE6h7Ruxw",
                "channelName":"nowaklimak",
                "lengthText":"4:43",
                "publishedTimeText":"13 years ago",
                "thumbnails":
                [
                    {
                        "height":270,
                        "url":"https://i.ytimg.com/vi/jNm_wrWquPs/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA75-9OQANvX6ePXQWiECL5hJcaXg",
                        "width":480
                    }
                ],
                "title":"Martin Solveig - Hello",
                "videoId":"jNm_wrWquPs",
                "viewCountText":"9,729,335 views"
            }
        },
        {
            "video":
            {
                "channelId":"UCbCmjCuTUZos6Inko4u57UQ",
                "channelName":"Cocomelon - Nursery Rhymes",
                "description":"JJ has met some new friends at preschool! Let's sing along and meet them too! Subscribe for new videos every week: ...",
                "lengthText":"3:26",
                "publishedTimeText":"5 years ago",
                "thumbnails":
                [
                    {
                        "height":202,
                        "url":"https://i.ytimg.com/vi/fxVMqaViVaA/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDFj4iOeQUrsAn_hVHMGuM0F5AMoQ",
                        "width":360
                    }
                    ,
                    {
                        "height":404,
                        "url":"https://i.ytimg.com/vi/fxVMqaViVaA/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAXk8TPkxeOhWQ_AlCr50JTsuNutQ",
                        "width":720
                    }
                ],
                "title":"Hello Song | CoComelon Nursery Rhymes & Kids Songs","videoId":"fxVMqaViVaA","viewCountText":"367,256,645 views"
            }
        },
        {
            "video":
            {
                "channelId":"UCsRM0YB_dabtEPGPTKo-gcw",
                "channelName":"Adele",
                "description":"Follow Adele on: Facebook - https://www.facebook.com/Adele Twitter - https://twitter.com/Adele Instagram ...",
                "lengthText":"5:08",
                "publishedTimeText":"8 years ago",
                "thumbnails":[
                    {
                        "height":202,
                        "url":"https://i.ytimg.com/vi/DfG6VKnjrVw/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB5n_7dEYsm7eUH3Ni1f8B3AjCMMg",
                        "width":360
                    },
                    {
                        "height":404,
                        "url":"https://i.ytimg.com/vi/DfG6VKnjrVw/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAg-OxjBc39z4L-1iOFko8BPegWtQ",
                        "width":720
                    }
                ],
                "title":"Adele - Hello (Live at the NRJ Awards)",
                "videoId":"DfG6VKnjrVw",
                "viewCountText":"107,452,372 views"
            }
        },
        {
            "video":
            {
                "channelId":"UC7oBTs3SUrGBK8zE6h7Ruxw",
                "channelName":"nowaklimak",
                "lengthText":"4:43",
                "publishedTimeText":"13 years ago",
                "thumbnails":
                [
                    {
                        "height":270,
                        "url":"https://i.ytimg.com/vi/jNm_wrWquPs/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA75-9OQANvX6ePXQWiECL5hJcaXg",
                        "width":480
                    }
                ],
                "title":"Martin Solveig - Hello",
                "videoId":"jNm_wrWquPs",
                "viewCountText":"9,729,335 views"
            }
        },
        {
            "video":
            {
                "channelId":"UCbCmjCuTUZos6Inko4u57UQ",
                "channelName":"Cocomelon - Nursery Rhymes",
                "description":"JJ has met some new friends at preschool! Let's sing along and meet them too! Subscribe for new videos every week: ...",
                "lengthText":"3:26",
                "publishedTimeText":"5 years ago",
                "thumbnails":
                [
                    {
                        "height":202,
                        "url":"https://i.ytimg.com/vi/fxVMqaViVaA/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDFj4iOeQUrsAn_hVHMGuM0F5AMoQ",
                        "width":360
                    }
                    ,
                    {
                        "height":404,
                        "url":"https://i.ytimg.com/vi/fxVMqaViVaA/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAXk8TPkxeOhWQ_AlCr50JTsuNutQ",
                        "width":720
                    }
                ],
                "title":"Hello Song | CoComelon Nursery Rhymes & Kids Songs","videoId":"fxVMqaViVaA","viewCountText":"367,256,645 views"
            }
        },
        {
            "video":
            {
                "channelId":"UCsRM0YB_dabtEPGPTKo-gcw",
                "channelName":"Adele",
                "description":"Follow Adele on: Facebook - https://www.facebook.com/Adele Twitter - https://twitter.com/Adele Instagram ...",
                "lengthText":"5:08",
                "publishedTimeText":"8 years ago",
                "thumbnails":[
                    {
                        "height":202,
                        "url":"https://i.ytimg.com/vi/DfG6VKnjrVw/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB5n_7dEYsm7eUH3Ni1f8B3AjCMMg",
                        "width":360
                    },
                    {
                        "height":404,
                        "url":"https://i.ytimg.com/vi/DfG6VKnjrVw/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAg-OxjBc39z4L-1iOFko8BPegWtQ",
                        "width":720
                    }
                ],
                "title":"Adele - Hello (Live at the NRJ Awards)",
                "videoId":"DfG6VKnjrVw",
                "viewCountText":"107,452,372 views"
            }
        },
        {
            "video":
            {
                "channelId":"UC7oBTs3SUrGBK8zE6h7Ruxw",
                "channelName":"nowaklimak",
                "lengthText":"4:43",
                "publishedTimeText":"13 years ago",
                "thumbnails":
                [
                    {
                        "height":270,
                        "url":"https://i.ytimg.com/vi/jNm_wrWquPs/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA75-9OQANvX6ePXQWiECL5hJcaXg",
                        "width":480
                    }
                ],
                "title":"Martin Solveig - Hello",
                "videoId":"jNm_wrWquPs",
                "viewCountText":"9,729,335 views"
            }
        },
        {
            "video":
            {
                "channelId":"UCbCmjCuTUZos6Inko4u57UQ",
                "channelName":"Cocomelon - Nursery Rhymes",
                "description":"JJ has met some new friends at preschool! Let's sing along and meet them too! Subscribe for new videos every week: ...",
                "lengthText":"3:26",
                "publishedTimeText":"5 years ago",
                "thumbnails":
                [
                    {
                        "height":202,
                        "url":"https://i.ytimg.com/vi/fxVMqaViVaA/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDFj4iOeQUrsAn_hVHMGuM0F5AMoQ",
                        "width":360
                    }
                    ,
                    {
                        "height":404,
                        "url":"https://i.ytimg.com/vi/fxVMqaViVaA/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAXk8TPkxeOhWQ_AlCr50JTsuNutQ",
                        "width":720
                    }
                ],
                "title":"Hello Song | CoComelon Nursery Rhymes & Kids Songs","videoId":"fxVMqaViVaA","viewCountText":"367,256,645 views"
            }
        }
    ],
    estimatedResults:"4106802157",
    next:"Ep4DEgVoZWxsbxqUA1NDaUNBUXRFWmtjMlZrdHVhbkpXZDRJQkMycE9iVjkzY2xkeGRWQnpnZ0VMWm5oV1RYRmhWbWxXWVVHQ0FRdHdjVVJGZDFCcE4zWjRaNElCQzFOWFMxSmtkVU5sTlRsSmdnRUxWRVYwV2t0dFRqWlpaV2VDQVF0TlRXdFJSM2hJWTJkdFNZSUJDM2RuYmpRNVp6YzJOMTh3Z2dFTFFYaDRPVWxOWkV3MGFtT0NBUXMyTUdkUFNsbGpPVE5LT0lJQkN6TXllWE55UWtNMlFqWnJnZ0VMVDB0clRGWXhla1U0VFRDQ0FRdHlSRmQxY1hKS1FYbEhkNElCQzFsUU5VUkVkeTFJV0RkRmdnRUxWREYwYkRZMmRISllWRkdDQVFzMVR6WkxSSFZMU205Q01JSUJDM0JxY0hwd1FVaHZRVlpuZ2dFTFRtaGZhVk5JYzFaelVFR0NBUXRsU1VocFdIUm9MV0UzWjRJQkMwbHlZa1o1WkhSTVJpMVpzZ0VHQ2dRSUZoQUM2Z0VFQ0FJUU1nJTNEJTNEGIHg6BgiC3NlYXJjaC1mZWVk"
}
const Details = () => {
  return (
    <section className="bg-gray-100">
        {/* Details */}
        <div className="pb-16 pt-6 sm:pb-24">
            <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
                <div className="lg:col-span-5 lg:col-start-8">
                    <h1 className="text-xl font-medium text-gray-500">{exercise.name}</h1>
                </div>

                {/* Image gallery */}
                <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                    <div
                        key={exercise.id}
                        className="min-h-96 min-w-96 relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8  sm:pt-48 lg:pt-80"
                    >
                        <img alt="" src={exercise.gifUrl} className="absolute inset-0 -z-10 h-full w-full object-fill"/>
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
                        {exercise.instructions.map((item) => (
                        <li key={item}>{item}</li>
                        ))}
                    </ul>
                    </div>
                </div>

                {/* icons */}
                <div className="mt-10">

                    <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                        <IconCard name="Body Part" bodyPart={exercise.bodyPart} img={BodyPartImage}/>
                        <IconCard name="Target" bodyPart={exercise.target} img={TargetImage}/>
                        <IconCard name="Equipment" bodyPart={exercise.equipment} img={EquipmentImage}/>
                    </dl>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Youtube */}
        <h1 className="text-2xl mx-4 font-bold text-gray-500">{`Watch ${exercise.name} exercise videos`}</h1>
        <div className='mt-5 items-center justify-between gap-8 m-4'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 ">
                {youtube.contents.map((content) => (
                    <div className='max-w-96 my-6 md:my-2 shadow-lg rounded-lg'>
                        <iframe
                            className="w-full h-56  rounded-lg"
                            src={`https://www.youtube.com/embed/`+content.video.videoId}
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
    </section>

  )
}

export default Details