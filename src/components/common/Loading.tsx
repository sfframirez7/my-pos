import React from 'react'

type IProps = {
    loading : boolean
}

const Loading : React.FC<IProps> = (props)=> {

    if(props.loading)
    {
        return (
    
            <div>
                
                <div className="spinner-grow spinner-grow-sm text-warning" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )

    }

    else {
        return (
            null
        )
    }



}
export default Loading