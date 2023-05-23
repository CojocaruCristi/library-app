import React, { useState } from 'react';
import { Modal, TextField, Button } from '@mui/material';
import Box from "@mui/material/Box";
import LoadingButton from '@mui/lab/LoadingButton';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { specialtiesData } from '../../helpers/specialties';


const paperStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: '#fff',
    // border: '2px solid #000',
    boxShadow: 24,
    padding: '16px 32px 24px',
};

const textFieldStyle = {
    width: '100%',
    marginBottom: '20px',
};

const buttonStyle = {
    marginTop: '20px',
    marginRight: '10px'
};

const BookFormModal = ({open, setOpen, onSubmit, loading, setLoading}) => {
    const [bookName, setBookName] = useState('');
    const [schoolYear, setSchoolYear] = useState(0);
    const [yearOfIssue, setYearOfIssue] = useState(0);
    const [publishingHouse, setPublishingHouse] = useState('');
    const [author, setAuthor] = useState('');
    const [specialty, setSpecialty] = useState();
    const [bookType, setBookType] = useState('');
    const [exemplarsCount, setExemplarsCount] = useState();
    const [pagesCount, setPagesCount] = useState();


    const handleClose = () => setOpen(false);

    const submitModal = () => {

        const data = {
            bookName,
            schoolYear,
            yearOfIssue,
            authors: [author],
            exemplarsCount,
            pagesCount,
            specialty,
            bookType,

        }
        setLoading(true);
        onSubmit(data)


    }



    return (

            <Modal open={open} onClose={handleClose}>
                <div style={paperStyle}>
                    <h2>Adăugați o carte nouă</h2>

                    <Box style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            paddingTop: 20,
                            paddingBottom: 20
                         }}>
                        <InputLabel id="demo-simple-select-label">Alege tipul de carte</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={bookType}
                        onChange={(item) =>  {
                            setBookType(item.target.value);
                            if(item.target.value === 'general') {
                                setSpecialty();
                                return;
                            }
                            setSchoolYear();
                            setPagesCount();
                        }}
                        style={{
                            width: 200,
                        }}
                        >
                                        <MenuItem value={'general'}>Curs General</MenuItem>
                                        <MenuItem value={'specialty'}>Specialitate</MenuItem>
                                 
                        </Select>
                    </Box>

                        {
                            bookType === 'specialty' && (
                                <Box style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            paddingTop: 20,
                            paddingBottom: 20
                         }}>
                                <InputLabel id="demo-simple-select-label">Alege specialitatea</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={specialty}
                                onChange={(item) =>  setSpecialty(item.target.value)}
                                style={{
                                    width: 200,
                                }}
                                >
                                    {
                                        specialtiesData.map(el => {
                                            return (
                                                <MenuItem value={el}>{el}</MenuItem>
                                            )
                                        })
                                    }
                                </Select>
                            </Box>

                            )
                        }


                        {
                            bookType === 'general' && (
                                <Box style={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    paddingTop: 20,
                                    paddingBottom: 20
                                }}>
                                <InputLabel id="demo-simple-select-label">Selecteaza anul</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={schoolYear}
                                onChange={(item) =>  setSchoolYear(item.target.value)}
                                style={{
                                    width: 200,
                                }}
                                >
                                   <MenuItem value={10}>I</MenuItem>
                                   <MenuItem value={11}>II</MenuItem>
                                   <MenuItem value={12}>III</MenuItem>
                                </Select>
                                </Box>
                            )
                        }
                    
                    <TextField
                        label="Numele Cărții"
                        variant="outlined"
                        style={textFieldStyle}
                        onChange={(e) => setBookName(e.target.value)}
                        value={bookName}
                    />
                    {/* {
                        bookType === 'general' && (
                            <TextField
                                label="Anul Scolar"
                                variant="outlined"
                                style={textFieldStyle}
                                onChange={(e) => setSchoolYear(e.target.value)}
                                value={schoolYear}
                            />
                        )
                    } */}
                    
                    <TextField
                        label="Anul Editiei"
                        variant="outlined"
                        style={textFieldStyle}
                        onChange={(e) => setYearOfIssue(e.target.value)}
                        value={yearOfIssue}

                    />
                    <TextField
                        label="Nr. de Exemplare"
                        variant="outlined"
                        style={textFieldStyle}
                        onChange={(e) => setExemplarsCount(e.target.value)}
                        value={exemplarsCount}
                    />
                    {
                        bookType === 'general' && (
                            <TextField
                                label="Nr. de Pagini"
                                variant="outlined"
                                style={textFieldStyle}
                                onChange={(e) => setPagesCount(e.target.value)}
                                value={pagesCount}
                            />
                        )
                    }
                    
                    <TextField
                        label="Autorii"
                        variant="outlined"
                        style={textFieldStyle}
                        onChange={(e) => setAuthor(e.target.value)}
                        value={author}
                    />
                    <Box >

                        {
                            loading ? (
                                <LoadingButton
                                    style={buttonStyle}
                                    loading={true}
                                    variant="outlined"
                                    // disabled
                                >
                                    <span>Fetching</span>
                                </LoadingButton>
                            )
                                :
                                (
                                    <Button onClick={submitModal} variant="contained" color="primary" style={buttonStyle}>
                                        Adauga
                                    </Button>
                                )
                        }
                        <Button onClick={handleClose} variant="outlined" color="error" style={buttonStyle}>
                            Anuleaza
                        </Button>


                    </Box>

                </div>
            </Modal>
    );
};

export default BookFormModal;