import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

export default props => {
    return (
        <FormControl fullWidth>
            <InputLabel id="group-select-label">{props.label}</InputLabel>
            <Select onChange={event=>props.onSelectChange(event.target.value)} id="group-select" labelId="group-select-label" value={props.value} >
                {props.items.map(element=>{
                    return (
                        <MenuItem key={element} value={element}>{element}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}