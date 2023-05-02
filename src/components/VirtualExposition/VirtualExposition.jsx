import Container from "@mui/material/Container";
import {useEffect, useState} from "react";
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import BookFormModal from './BookFormModal.jsx'
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
        field: 'publishingHouse',
        headerName: 'Editia',
        // sortable: false,
        minWidth: 200,
    },
    {
        field: 'authors',
        headerName: 'Autori',
        // sortable: false,
        minWidth: 200,
    },
];


const VirtualExposition = () => {
    const [data, setData] = useState([])
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const addNewBook = async (data) => {



        const response = await fetch("https://library-api-z8qo.onrender.com/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const newBook = await response.json();


        await setData((prevState) => [...prevState, newBook]);

        setLoading(false);
        setOpen(false);

    }

    useEffect(() => {
        fetch('https://library-api-z8qo.onrender.com/api/getAll').then(response =>response.json()).then((data) => setData(data));
    }, [])
    return (
        <Container maxWidth={"lg"}>
            <Box sx={{p: 2}}>
                <Button onClick={() => setOpen(true)} color="primary" size={"large"} variant="contained" startIcon={<AddIcon />}>
                    Adauga Carte
                </Button>
                <BookFormModal open={open} setOpen={setOpen} onSubmit={addNewBook} loading={loading} setLoading={setLoading} />
            </Box>
            <DataGrid
                rows={data}
                loading={data.length === 0}
                autoHeight
                columns={columns}
                paginationModel={{ page: 0, pageSize: 5 }}
                getRowId={(row) => row._id}
                pageSizeOptions={[5, 25, 50, 100]}
            />
        </Container>
    )
}

export default VirtualExposition;