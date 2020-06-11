import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'; 
import TextField from '@material-ui/core/TextField';
import WordIcon from '@material-ui/icons/BorderColor';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import WordDetails from './WordDetails';

const useStyles = makeStyles((theme)=>({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        marginBottom: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main,
    },
    header: {
        marginBottom: theme.spacing(1),
    },
    field: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1)
    },
    button: {
        alignSelf: "flex-end"
    },
    submitButton: {
        marginTop: theme.spacing(3)
    }
}));

const MAX_TRANSLATIONS = 6;
const MAX_EXAMPLES = 6;

const testGroups = ["all","food","travel"];

export default props => {

    const classes = useStyles();
    const [word,setWord] = useState('');
    const [translations,setTranslations] = useState([{id:1,value:''}]);
    const [examples,setExamples] = useState([{id:1,value:''}]);
    const [group,setGroup] = useState('');

    const onWordChange = (str) => {
        setWord(str);
    }

    const addTranslation = ()=>{
        if(translations.length<MAX_TRANSLATIONS)
            setTranslations(value=> value.concat({id:translations.length+1,value:''}));
    }
    const addExample = () => {
        if(examples.length<MAX_EXAMPLES)
            setExamples(value=> value.concat({id:examples.length+1,value:''}));
    }

    const onTranslationChange = (str,index) => {
        const arr = [...translations];
        arr[index].value = str;
        setTranslations(arr);
    }
    const onExampleChange = (str,index) => {
        const arr = [...examples];
        arr[index].value = str;
        setExamples(arr);
    }

    const submitInfo = () => {
        console.log('word',word);
        console.log('translations',JSON.stringify(translations));   
        console.log('examples',JSON.stringify(examples)); 
    }

    const onGroupChange = (newGroup) => {
        setGroup(newGroup);
    }

    return (
        <Container component="main" maxWidth="sm">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}> 
                    <WordIcon /> 
                </Avatar> 
                <Typography className={classes.header} component="h1" variant="h5"> Add new word </Typography> 
                <TextField value={word} onChange={event=>onWordChange(event.target.value)} className={classes.field} id="standard-basic" label="new word" fullWidth/>
                {/* {
                    translations.map((element,i)=>{
                        return (
                            <TextField onChange={event=>onTranslationChange(event.target.value,i)} value={element.value} className={classes.field} key={element.id} id="standard-basic" label="add translation" fullWidth/> 
                        )
                    })
                }
                <Button onClick={addTranslation} color="secondary" className={classes.button}>Add</Button> */}
                <WordDetails label="add translation" translations={translations} onTextChange={onTranslationChange} addBtnClick={addTranslation}/>
                {
                    examples.map((element,i)=>{
                        return (
                            <TextField onChange={event=>onExampleChange(event.target.value,i)} value={element.value} className={classes.field} key={element.id} id="standard-basic" label="add example" fullWidth/> 
                        )
                    })
                }
                <Button onClick={addExample} color="secondary" className={classes.button} >add</Button>
                <FormControl fullWidth>
                    <InputLabel id="group-select-label">GROUP</InputLabel>
                    <Select onChange={event=>onGroupChange(event.target.value)} id="group-select" labelId="group-select-label" value={group} >
                        {testGroups.map(element=>{
                            return (
                                <MenuItem key={element} value={element}>{element}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                <Button onClick={submitInfo} fullWidth variant="contained" color="primary" className={classes.submitButton} startIcon={<AddIcon/>}>add word</Button>
            </div>
        </Container>
    )
}