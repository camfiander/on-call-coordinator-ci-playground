import React from "react";
import { TextField,Button } from "@mui/material";
import '../page/Board.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { postSchools } from "../backend-requests/schools";
const CreateSchoolForm = function({}){
    const [selectedProgram, setSelectedProgram] = React.useState('');

    const programs = ['Math','Online','Outside'];

    const programElements = [];
    programs.map( (element)=>{
        programElements.push(<MenuItem value={element} key={element}>{element}</MenuItem>)
    })


    function postSchool(){
        let name = document.querySelector('#school-name').value; //always a string
        let numberOfStudents = Number(document.querySelector('#school-students').value); //always a number, think always an int
        let address = document.querySelector('#school-address').value; //always a string

        if(Number.isInteger(numberOfStudents)) //in case not always int
            postSchools(name, address,numberOfStudents,selectedProgram); //guarnteed to work
    }



    return(
        <form className="create-school-form" onSubmit={postSchool}>
            <header className="create-school-header">
                Create a School
            </header>
            <div className="school-form-name-students">
                <TextField id="school-name" label="Name" sx={{alignSelf:'center'}} variant="outlined" />

                <TextField id="school-students" label="Number of Students" sx={{alignSelf:'center'}} type={'number'} variant="outlined" />
           </div>
           <TextField id="school-address" label="Address" variant="outlined" fullWidth />
           <FormControl fullWidth>
            <InputLabel id="school-program-input">Speciality Programs</InputLabel>
            <Select
                labelId="school-program-label"
                id="school-program"
                label='Speciality Programs'
                value={selectedProgram}
                onChange={(event)=>setSelectedProgram(event.target.value)}
            >
                {programElements}
                
                
            </Select>
            </FormControl>

            <Button id="school-submit" type='form' sx={{alignSelf:'flex-start'}} variant="outlined" color="secondary"> Submit </Button>
        </form>
    )
}

export default CreateSchoolForm;