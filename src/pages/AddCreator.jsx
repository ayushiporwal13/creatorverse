import React from "react";
import { supabase } from "../client";
import Form from "../components/form";

const AddCreator = () => {
  const [creatorDetails, setCreatorDetails] = React.useState({
    name: "",
    image: "",
    desc: "",
    youtube: "",
    twitter: "",
    instagram: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreatorDetails({ ...creatorDetails, [name]: value });
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(creatorDetails);
    const error = await supabase
    .from('Creatorverse')
    .insert(creatorDetails)
    .select()

    if(error){
      console.log(error);
    }
    window.location = '/';
  }
  

  return (
    <div className="w-50">
      <Form handleChange={handleChange} creator = {creatorDetails}></Form>
      <div className="form-group">
          <div className="text-center">
            <button type="submit" className="btn btn-primary mx-5 p-3 w-25" onClick={handleSubmit}>
              SUBMIT
            </button>
          </div>
        </div>
    </div>
  );
};

export default AddCreator;
