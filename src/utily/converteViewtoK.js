export default function converteViewtoK(view){
    if(view >1000)  return `${Math.round(view/1000)}K`;
    return view
}