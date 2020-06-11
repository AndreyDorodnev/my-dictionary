import React from 'react';
import Typography from '@material-ui/core/Typography';

export default props => {
    return (
        <>
            <Typography  component="h1" variant="h5">{props.header}</Typography> 
            {
                props.items.map((element,i)=>{
                    return (
                        <Typography key={i} component="p">{`- ${element}`}</Typography>  
                    )
                }) 
            }
        </>
    )
}