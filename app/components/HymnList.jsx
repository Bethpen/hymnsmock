import Hymns from "./Hymns"


const Hymnlist = ({hymns}) => {
  return (
    <div className="flex w-full mt-7 gap-3 flex-wrap">
        {
            hymns.map(hymn => <Hymns key={hymn.id} hymn={hymn} />)
        }
    </div>
  )
}

export default Hymnlist