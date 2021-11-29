import AttorneyBlock from './attorney-block'

const AttorneysSection = ({ AttorneysList }) => {
   var AttorneysData = AttorneysList.map(function(attorney){
      return ( 
         <AttorneyBlock key={attorney.id} Attorney={attorney}></AttorneyBlock>
      ) 
    })

   return (
      <>
         <div id="principal_attorney_content" className="row">
            { AttorneysData }
         </div>
      </>
  )
}

export default AttorneysSection