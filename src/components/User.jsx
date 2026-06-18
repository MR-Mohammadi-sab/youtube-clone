import { faAngleRight, faClock, faHistory, faList, faThumbsUp, faVideo} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const icons=[
    {icon:faHistory , name :"History"},
    {icon: faList , name :"Playlist"},
    {icon:faClock , name :"Watch later"},
    {icon:faThumbsUp , name :"Liked Videos"},
    {icon: faVideo, name :"Your Videos"},
 
]
 function User() {
    
  return (
    <li className="ml-4">
        <div className="flex items-center gap-4">
        <span className="font-medium">You</span>
        <FontAwesomeIcon icon={faAngleRight} size="xs"/>
        </div>

        <ul className="mt-4 pb-8">
            
            { icons.map((icon)=> <li key={icon.name} className="flex items-center  gap-4 mt-4">
                <FontAwesomeIcon icon={icon.icon} size="lg" />
                <span className="font-medium">{icon.name}</span>
                </li>)}
              
        </ul>

    </li>
  )
}
export default User;
