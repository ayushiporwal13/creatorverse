import React, { useState, useEffect } from "react";
import KitchenSinkcard from "../components/kitchenSinkcard";
import { useParams, Link } from "react-router-dom";
import CustomizedModal from "../components/customizedModal";
import { supabase } from "../client";

const ViewCreator = ({ data }) => {
  const param = useParams();
  const creatorData = data.filter((creator) => creator.id == param.id);
  const [modalVisible, setModalVisible] = useState(false);
  
  function handleModalChange() {
    setModalVisible(true);
  }

  async function handleDelete(e) {
    e.preventDefault();
    const error = await supabase
    .from('Creatorverse')
    .delete()
    .eq("id", param.id)

    window.location = "/";
  }

  return (
    <div className="" style={{height:"500px", width:"80%"}}>
      {creatorData?.map((creator) => (
        <>
          <KitchenSinkcard creator={creator} />
          <div className="card-buttons m-5">
            <Link to={`/edit-creator/${creator.id}`} className="btn btn-primary mx-5 p-3 w-25">
              
                EDIT
      
            </Link>
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
      ))}
    </div>
  );
};

export default ViewCreator;
