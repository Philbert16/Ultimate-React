import { useState } from "react";
import Modal from "react-bootstrap/Modal";

interface EditEmployeeProps {
  name?: string;
  role?: string;
}

function EditEmployee({ name: initialName, role: initialRole }: EditEmployeeProps) {
  const [show, setShow] = useState(false);

  const [name, setName] = useState(initialName)
  const [role, setRole] = useState(initialRole)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleInput(event) {
    setName(event.target.value)
  }
  function handleInput2(event) {
    setRole(event.target.value)
  }

  return (
    <>
      <button
        onClick={handleShow}
        className="border border-purple-200 !rounded-full px-4 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"
      >
        Update
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="editModal" className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  Full Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  value={name}
                  onChange={handleInput}
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  Role 
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="role"
                  type="text"
                  value={role}
                  onChange={handleInput2}
                />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={handleClose}
            className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
          <button
            form="editModal"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;
