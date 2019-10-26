import React from 'react'

const  DataSummary =({dataform})=> {

        return (
          <div className="table_c">
              <div className="Row ">
                  <div className="Column">
                   
                       <div>{dataform.firstName}</div>
                  </div>
                  <div className="Column">
                        <div>{dataform.lastName}</div>
                  </div>
                  <div className="Column">
                        <div>{dataform.birthday}</div>
                       
                  </div>
                  <div className="Column">
                        <div>{dataform.age}</div>
                  </div>
                  <div className="Column">
                        <div>{dataform.hobby}</div>
                  </div>
              </div>
              </div>
        )
    }

export default DataSummary
