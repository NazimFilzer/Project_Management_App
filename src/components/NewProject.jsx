import { useRef } from "react";
import Modal from "./Modal";

const NewProject = ({ onAdd,onCancel }) => {
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();


    const handleClick = () => {
        const project = {
            title: title.current.value,
            description: description.current.value,
            dueDate: dueDate.current.value,
        };

        if (!project.title || !project.description || !project.dueDate) {
            modal.current.showModal();
            return;
        }
        onAdd(project);
    };

    return (
        <>
            <Modal ref={modal} >Invalid Input..<br/> Please enter some details </Modal>
            <div className="new-project">

                <p className="labels">
                    <label htmlFor="">Title</label>
                    <input ref={title} type="text" />
                </p>
                <p className="labels">
                    <label htmlFor="">Decription</label>
                    <input ref={description} type='text' />
                </p>
                <p className="labels">
                    <label htmlFor="">DueDate</label>
                    <input ref={dueDate} type="date" />
                </p>
                <menu>
                    <button className="button-30" onClick={handleClick}>
                        Save
                    </button>
                    <button className="button-30" onClick={onCancel}>
                        Cancel
                    </button>
                </menu>

            </div>
        </>

    );
}

export default NewProject;