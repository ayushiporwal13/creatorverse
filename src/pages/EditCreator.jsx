import React, { useState } from "react";
import Form from "../components/form";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import CustomizedModal from "../components/customizedModal";
// import Modal from "react-modal";

const EditCreator = ({ data }) => {
  const { id } = useParams();
  const creatorData = data.filter((creator) => creator.id == id);
  const [creator, setCreator] = useState(creatorData[0]);
  const [modalVisible, setModalVisible] = useState(false);

  
  const handleChange = (e) => {
    setCreator({ ...creator, [e.target.name]: e.target.value });
    console.log("creator", creator);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = await supabase
      .from("Creatorverse")
      .update(creator)
      .eq("id", id);

    window.location = "/";
  };

  const handleModalChange = (e) => {
    setModalVisible(true);
  }

  const handleDelete = async (e) => {
    e.preventDefault();

    const error = await supabase
    .from('Creatorverse')
    .delete()
    .eq("id", id)

    window.location = "/";
  };



 

  return (
    <div id="editCreator" className="w-50">
      {console.log("creator return fun", creator)}
      {/* {creator?.map((creator) => ( */}
      <>
        <Form creator={creator} handleChange={handleChange} />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-primary mx-5 p-3 w-25"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
          <button
            type="button"
            className="btn btn-danger m-2 p-3 w-25"
            onClick={handleModalChange}
            data-bs-target="#staticBackdrop"
          >
            DELETE
          </button>

          { modalVisible && <CustomizedModal modalVisible={modalVisible} setModalVisible={setModalVisible} handleDelete={handleDelete}/>}
        </div>
      </>
      {/* ))} */}
    </div>
  );
};

export default EditCreator;
