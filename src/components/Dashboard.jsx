import Chartgrid from "../reusables/Chartgrid"
import Chartgrid2 from "../reusables/Chartgrid2"
import Chartgrid3 from "../reusables/Chartgrid3"
import { cards } from "../data"

const Dashboard = () => {
  return (
    <div className="bg-lightgray h-full
     py-6 px-10 flex flex-col gap-8 items-start overflow-y-scroll overflow-x-hidden">
      <h1 className="main-heading-dark 
      mt-1"
      >
        Revenue Dashboard
      </h1>

      <hr className="w-full border border-lightblue" />

      <div className="w-full flex flex-row flex-wrap items-start gap-8">
        {cards.map(card => (
          <Chartgrid
           key={card.id}
           title={card.title}
           content={card.content}
           percentage={card.percentage}
           profit={card.profit} 
          />
        ))}
        <Chartgrid2 prop={true} />
        <Chartgrid3 prop={true} />
        <Chartgrid3 prop={false}/>
        <Chartgrid2 prop={false}/>
        
      </div>
    </div>
  )
}

export default Dashboard