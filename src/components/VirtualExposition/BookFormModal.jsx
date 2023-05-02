import React, { useState } from 'react';
import { Modal, TextField, Button } from '@mui/material';
import Box from "@mui/material/Box";
import LoadingButton from '@mui/lab/LoadingButton';

const BookFormModal = ({open, setOpen, onSubmit, loading, setLoading}) => {
    const [bookName, setBookName] = useState('');
    const [schoolYear, setSchoolYear] = useState(0);
    const [yearOfIssue, setYearOfIssue] = useState(0);
    const [publishingHouse, setPublishingHouse] = useState('');
    const [author, setAuthor] = useState('');


    const handleClose = () => setOpen(false);

    const submitModal = () => {

        const data = {
            bookName,
            schoolYear,
            yearOfIssue,
            publishingHouse,
            authors: [author]
        }
        setLoading(true);
        onSubmit(data)


    }


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

    return (

            <Modal open={open} onClose={handleClose}>
                <div style={paperStyle}>
                    <h2>Adăugați o carte nouă</h2>
                    <TextField
                        label="Numele Cărții"
                        variant="outlined"
                        style={textFieldStyle}
                        onChange={(e) => setBookName(e.target.value)}
                        value={bookName}
                    />
                    <TextField
                        label="Anul Scolar"
                        variant="outlined"
                        style={textFieldStyle}
                        onChange={(e) => setSchoolYear(e.target.value)}
                        value={schoolYear}
                    />
                    <TextField
                        label="Anul Editiei"
                        variant="outlined"
                        style={textFieldStyle}
                        onChange={(e) => setYearOfIssue(e.target.value)}
                        value={yearOfIssue}

                    />
                    <TextField
                        label="Editura"
                        variant="outlined"
                        style={textFieldStyle}
                        onChange={(e) => setPublishingHouse(e.target.value)}
                        value={publishingHouse}
                    />
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