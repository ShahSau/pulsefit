

type Exercise = {
    name: string,
    bodyPart: string,
    img:string

    }
const IconCard = ({name, bodyPart,img}:Exercise) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white/30 p-6 text-center">
        <dt>
            <img src={img} alt="body part" className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400" />
             <span className="mt-4 text-sm font-medium text-gray-900">{name}</span>
        </dt>
        <dd className="mt-1 text-sm text-gray-500">{bodyPart}</dd>
    </div>
  )
}

export default IconCard