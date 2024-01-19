import React, { useEffect, useState } from 'react';
import './AddEdit.css';
import { useSelector } from 'react-redux';
import { doc, getDoc, addDoc, collection, updateDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function AddEdit({ edit }) {

  const { id } = useParams()
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('')
  const firestore = useSelector((state) => state.firebaseSlice.Firestore);

  const isEdit = edit ? true : false
  const navigateByUrl = useNavigate();
  const navigate = () => {
    navigateByUrl(`/view`);
  };


  const handleNotes = (e) => {
    e.preventDefault();

    if (!title || !value) {
      toast.warning("Please fill all details");
    } else {
      let today = new Date();
      const timestamp = Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).format(today);

      try {
        const allCollection = collection(firestore, 'docs');
        addDoc(allCollection, {
          name: title,
          description: value,
          time: timestamp,
        });
        navigate()
      } catch (error) {

        console.error("Error occured:", error);
      }
    }
  };

  const handleUpdate = () => {
    updateDoc(doc(firestore, 'docs', id), {
      name: title,
      description: value,
    })
      .then(() => {
        toast.success("Document updated successfully!!!")
        navigate('/home')
      })
      .catch((error) => {
        console.error(error);
        toast.warning(error)
      });
  };

  const handleReset = () => {
    setTitle("")
    setValue("")
  }

  useEffect(() => {
    if (isEdit) {
      const docEdit = doc(firestore, "docs", id);

      getDoc(docEdit)
        .then((docView) => {
          if (docView.exists()) {
            console.log("Document:", docView.data());
            setValue(docView.data().description)
            setTitle(docView.data().name)

          } else {
            console.log("Cannot find document!!!");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [isEdit])


  return (
    <>
      <div style={{ margin: '50px 250px' }} className="container contact-form">
        <form>
          <div className="d-flex w-75 flex-column">

            <div className="">
              <div className="form-group ">
                <input onChange={(e) => setTitle(e.target.value)} type="text" name="txtName" className="form-control mb-2" placeholder="Subject Name" value={title} required />
              </div>
            </div>

            <div className="">
              <div className="form-group">
                <ReactQuill theme="snow" value={value} placeholder='Enter your notes !!!' onChange={setValue} />
              </div>
            </div>

            <div className='d-flex justify-content-evenly flex-wrap mt-3'>
              <div className="form-group pt-3">
                <input onClick={(e) => isEdit ? handleUpdate(e) : handleNotes(e)} type="reset" name="btnSubmit" className="btnContact btn-success text-white rounded-3 p-1 fs-4 border" value="Submit" />
              </div>
              <div className="form-group pt-3">
                <input type="button" onClick={handleReset} name="btnSubmit" className="btnContact btn-danger text-white rounded-3 pt-1 pb-1 px-3 fs-4 border " value="Reset" />
              </div>
            </div>

          </div>
        </form>
      </div>
    </>

  );
}

export default AddEdit;