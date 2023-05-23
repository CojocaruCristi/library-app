import Container from "@mui/material/Container";
import {useEffect, useState} from "react";
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

const columns = [
    {
        field: 'bookName',
        headerName: 'Denumirea',
        minWidth: 200,
    },
    {
        field: 'schoolYear',
        headerName: 'Anul Scolar',
        minWidth: 200,
    },
    {
        field: 'yearOfIssue',
        headerName: 'Anul Editiei',
        minWidth: 200,
    },
    {
        field: 'authors',
        headerName: 'Autori',
        // sortable: false,
        minWidth: 200,
    },
    {
        field: 'pagesCount',
        headerName: 'Nr. pagini',
        // sortable: false,
        minWidth: 200,
    },
    {
        field: 'exemplarsCount',
        headerName: 'Nr. exemplare',
        // sortable: false,
        minWidth: 200,
    },
];


const ElectronicCatalog = () => {
    const [data, setData] = useState([])
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [booksType, setBooksType] = useState('');
    const [schoolYear, setSchoolYear] = useState();
    const [specialty, setSpecialty] = useState();
    const [isLoading, setIsLoading] = useState(false);
    
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


    const initResults = async () => {

        setIsLoading(true);
        const response = await fetch(`https://library-api-z8qo.onrender.com/api/books?bookType=${booksType}&specialty=${specialty}&year=${schoolYear}`);
        const data = await response.json();
        await setData(data);
        setIsLoading(false);
    }

    useEffect(() => {
        if(!!booksType && (schoolYear || specialty)) {
            initResults();
        }

    }, [booksType, schoolYear, specialty])


    return (
        <Container maxWidth={"lg"} style={{
            minHeight: '100vh'
        }}>

            {/* //toDoo */}
            <Box sx={{p: 2}}>
                <Button onClick={() => setOpen(true)} color="primary" size={"large"} variant="contained" startIcon={<AddIcon />}>
                    Adauga Carte
                </Button>
                <BookFormModal open={open} setOpen={setOpen} onSubmit={addNewBook} loading={loading} setLoading={setLoading} />
            </Box>


        <Breadcrumbs aria-label="breadcrumb" style={{
            marginBottom: 20,
        }}>

            <Typography variant="h5" style={{cursor: 'pointer', color: booksType === 'general' && 'black'}} onClick={() => {
                setBooksType('general');
                setSpecialty();
                setData([])
            }} >Curs General</Typography>

            <Typography variant="h5" style={{cursor: 'pointer', color: booksType === 'specialty' && 'black'}} onClick={() => {
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

    
            <DataGrid
                rows={data}
                loading={isLoading}
                autoHeight
                columns={columns}
                paginationModel={{ page: 0, pageSize: 5 }}
                getRowId={(row) => row._id}
                pageSizeOptions={[5, 25, 50, 100]}
            />
        </Container>
    )
}

export default ElectronicCatalog;