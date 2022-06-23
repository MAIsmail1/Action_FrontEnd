import React from "react";
import { useNavigate } from "react-router-dom";

const EditButton = () => {

    const navigate = useNavigate();
    return (
        
            
            <nav>
                <ul>
                    <a href="" onClick={() => { navigate('list-of-venue') }} ><button>Venue List</button></a>
                    <a href="" onClick={() => { navigate('add-venue') }} ><button>Add Venue </button></a>
                    <a href="" onClick={() => { navigate('edit-venue') }} ><button>Edit Venue </button></a>
                    <a href="" onClick={() => { navigate('delete-venue') }} ><button>Delete Venue </button></a>
                </ul>
            </nav>
     
    );
           
}

export default EditButton;