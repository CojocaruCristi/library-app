import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import BookFormModal from './BookFormModal.jsx'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { specialtiesData } from "../../helpers/specialties.js";
import { TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import TitleImage from "./../../components/title/Title";

const textFieldStyle = {
    width: '100%',
    marginBottom: '20px',
};




const ElectronicCatalog = () => {
    const [data, setData] = useState([]);
    const [searchedData, setSearchedData] = useState(data);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [booksType, setBooksType] = useState('');
    const [schoolYear, setSchoolYear] = useState();
    const [specialty, setSpecialty] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const user = JSON.parse(localStorage.getItem('admin'));

    const columns = [
        {
            field: 'bookName',
            headerName: 'Denumirea',
            minWidth: 200,
        },
        {
            field: 'schoolYear',
            headerName: 'Anul Scolar',
            minWidth: 150,
        },
        {
            field: 'yearOfIssue',
            headerName: 'Anul Editiei',
            minWidth: 150,
        },
        {
            field: 'authors',
            headerName: 'Autori',
            // sortable: false,
            minWidth: 150,
        },
        {
            field: 'pagesCount',
            headerName: 'Nr. pagini',
            // sortable: false,
            minWidth: 150,
        },
        {
            field: 'exemplarsCount',
            headerName: 'Nr. exemplare',
            // sortable: false,
            minWidth: 150,
        },
        {
            field: 'actions',
            headerName: 'Optiuni',
            // sortable: false,
            minWidth: 150,
            renderCell: (data) => (
                <span>

                    {

                        !!user?.name && (
                            <Button onClick={() => deleteBook(data.id)}>
                                <DeleteIcon />
                            </Button>

                        )
                    }

                </span>
            )
        },
    ];


    const deleteBook = async (id) => {
        const response = await fetch(`https://library-api-z8qo.onrender.com/api/book/${id}`, {
        // const response = await fetch(`http://localhost:5000/api/book/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            const filteredSearch = searchedData.filter((book) => {
                return book._id !== id
            })
            const filteredData = data.filter((book) => {
                return book._id !== id
            })
            setSearchedData(filteredSearch);
            setData(filteredData);
        }
    }

    const addNewBook = async (data) => {



        const response = await fetch("https://library-api-z8qo.onrender.com/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const newBook = await response.json();

        setBooksType(data.bookType);
        !!data.specialty && setSpecialty(data.specialty);
        !!data.schoolYear && setSchoolYear(data.schoolYear);


        setLoading(false);
        setOpen(false);

    }

    function searchBooks(searchString) {

        if (searchString === '') {
            return data;
        }
        const searchTerm = searchString?.toLowerCase();

        const searchResults = data.filter((book) =>
            book.bookName?.toLowerCase().includes(searchTerm)
        );

        return searchResults;
    }

    useEffect(() => {
        if (inputValue === '') {
            setSearchedData(data);
        }
        const results = searchBooks(inputValue);
        setSearchedData(results);
    }, [inputValue])


    const initResults = async () => {

        setIsLoading(true);
        const response = await fetch(`https://library-api-z8qo.onrender.com/api/books?bookType=${booksType}&specialty=${specialty}&year=${schoolYear}`);
        const data = await response.json();
        await setData(data);
        await setSearchedData(data);
        setIsLoading(false);
    }

    useEffect(() => {
        if (!!booksType && (schoolYear || specialty)) {
            initResults();
        }

    }, [booksType, schoolYear, specialty])


    return (
        <div style={{marginTop:"-60vh" }}>
                    <TitleImage title="Catalog electronic"/>
        <Container maxWidth={"lg"} style={{
            minHeight: '100vh'
        }}>

            {/* //toDoo */}
            {
                !!user?.name && (

                    <Box sx={{ p: 2 }} style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}>
                        <Button onClick={() => setOpen(true)} color="primary" size={"large"} variant="contained" startIcon={<AddIcon />}>
                            Adauga Carte
                        </Button>
                        <BookFormModal open={open} setOpen={setOpen} onSubmit={addNewBook} loading={loading} setLoading={setLoading} />
                    </Box>
                )
            }


            <Breadcrumbs aria-label="breadcrumb" style={{
                marginBottom: 20,
            }}>

                <Typography variant="h5" style={{ cursor: 'pointer', color: booksType === 'general' && 'black' }} onClick={() => {
                    setBooksType('general');
                    setSpecialty();
                    setData([])
                }} >Curs General</Typography>

                <Typography variant="h5" style={{ cursor: 'pointer', color: booksType === 'specialty' && 'black' }} onClick={() => {
                    setBooksType('specialty');
                    setSchoolYear();
                    setData([])
                }} >Specialitate</Typography>

            </Breadcrumbs>



            {
                booksType === 'specialty' && (
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
                            onChange={(item) => setSpecialty(item.target.value)}
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
                booksType === 'general' && (
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
                            onChange={(item) => setSchoolYear(item.target.value)}
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


            {/* <input value={inputValue} onChange={(e) => {
            setInputValue(e.target.value);
            
        }} />
     */}
            {
                !!data.length && (
                    <TextField
                        label="Cauta dupa denumirea cartii"
                        variant="outlined"
                        style={textFieldStyle}
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                    />
                )
            }
            <DataGrid
                rows={searchedData}
                loading={isLoading}
                autoHeight
                columns={columns}
                // paginationModel={{ page: 0, pageSize: 5 }}
                getRowId={(row) => row._id}
                pageSizeOptions={[5, 25, 50, 100]}
            />
        </Container>
        </div>
    )
}

export default ElectronicCatalog;