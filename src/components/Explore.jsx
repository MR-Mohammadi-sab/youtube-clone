import { faAngleDown, faAngleRight, faAngleUp, faMusic, faGamepad, faNewspaper, faFutbol, faGraduationCap, faGem, faBroadcastTower} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useState } from "react";


const icons=[
    {icon:faMusic , name :"Musics"},
    {icon: faBroadcastTower , name :"Live"},
    {icon:faGamepad , name :"Gaming"},
    {icon:faNewspaper , name :"News"},
    {icon: faFutbol, name :"Sports"},
    {icon:faGraduationCap , name :"Learning"},
    {icon: faGem, name :"Fashion & Beauty"},
 
]
const Expore=memo( function Expore() {
    const [showMore,setShowMore]=useState(false)
    const copyIcons=showMore ? icons :icons.slice(0,3);
  return (
    <li className="ml-4 py-8">
        <div className="flex items-center gap-4">
        <span className="font-medium">Explore</span>
        <FontAwesomeIcon icon={faAngleRight} size="xs"/>
        </div>
        <ul className="my-4 n ">
            
            { copyIcons.map((icon)=> <li key={icon.name} className="flex items-center  gap-4 mt-4">
                <FontAwesomeIcon icon={icon.icon} size="lg" />
                <span className="font-medium">{icon.name}</span>
                </li>)}   
        </ul>
    <button className="capitalize cursor-pointer" onClick={()=>setShowMore(!showMore)}>
        {showMore?
        <> 
        <span className="font-medium">show less</span> <FontAwesomeIcon icon={faAngleUp} size="xs" /> 
        </>
        :<>
        <FontAwesomeIcon icon={faAngleDown} size="xs" /> 
        <span className="font-medium">show More</span>
        </>
        }
        
    </button>
    </li>
  )
})
export default Expore;