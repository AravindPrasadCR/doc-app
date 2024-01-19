import React, { useEffect, useState } from 'react'
import { Card, Modal } from 'react-bootstrap'

import { doc, collection, query, getDocs, deleteDoc } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.css';
import cardimg from '../Images/clip.jpg'


function ViewDocs() {
    const navigateByUrl = useNavigate();

    const navigate = (id) => {
        navigateByUrl(`/edit/${id}`);
    };

    const firestore = useSelector((state) => state.firebaseSlice.Firestore);
    const [allDocs, setAllDocs] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [userid, setUserId] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = async (name, des, id) => {
        setShow(true)
        setTitle(name)
        setDescription(des)
        setUserId(id)
    };

    const handleDelete = async (id) => {
        console.log("clicked");
        await deleteDoc(doc(firestore, "docs", id));
    }

    useEffect(() => {
        async function fetchData() {
            const q = query(collection(firestore, "docs"));
            const querySnapshot = await getDocs(q);
            const docssArray = [];
            querySnapshot.forEach((doc) => {
            docssArray.push({ id: doc.id, data: doc.data() });
            setAllDocs(docssArray); 
            });
        }
        fetchData();
    }, [handleDelete, firestore]);

    return (
        <>
        <div><h2 className='p-5 mt-5 fs-1 text-center'>All Notes</h2></div>
        <div className='d-flex justify-content-evenly' style={{minHeight:"60vh"}}>
            {allDocs.length > 0 ? allDocs.map((doc) => (
                <div className='' key={doc.id} >
                    
                    <Card onClick={() => handleShow(doc.data.name, doc.data.description, doc.id)} style={{ width: '18rem', height: '12rem' }}>                        
                        <Card.Img className='position-absolute' variant="top" src={cardimg} />
                        <Card.Body style={{marginTop:'5px',position:'relative'}}>
                        <h6 style={{margin:'0px 0px 0px 150px'}}>{doc.data.time}</h6>
                            <Card.Title style={{marginTop:'25px'}}><h2 className='text-center' style={{ color: "black" }}>{doc.data.name}</h2>
                            </Card.Title>                           
                        </Card.Body>
                    </Card>
                    </div>                
            )) : <p className='text-danger'>No Notes</p>}</div>


            <Modal size='xl' show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <div className='d-flex w-100  justify-content-between'>
                        <Modal.Title className='text-break'>{title}</Modal.Title>
                        <div>
                            <button className='btn' onClick={() => navigate(userid)}><i class="fa-solid fa-pen"></i></button>
                            <i onClick={() => handleDelete(doc.id)} className="px-3 mb-2 fa-solid fa-trash text-danger"></i>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body className='text-break'><ReactQuill modules={{ toolbar: false }} theme="snow" value={description} placeholder='Enter your notes !!!' />
                </Modal.Body>
            </Modal>

        </>
    )
}

export default ViewDocs