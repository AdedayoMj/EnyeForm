import React from 'react'
import DataSummary from './DataSummary'

const Table=({formdata})=>{

        return (
            
                    <div>
                        {formdata && formdata.map(dataform=>{
                            return (
                                <DataSummary dataform={dataform} key={dataform.id}/>
                            )
                        })}
                    </div>
         
        )
    }
export default Table
