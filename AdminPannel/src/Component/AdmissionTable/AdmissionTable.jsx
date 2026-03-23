import React, { useMemo, useState } from "react";
import "./AdmissionTable.css";

const AdmissionTable = () => {
  const [admissionTableList, setAdmissionTableList] = useState([
    {
      id: 1,
      childName: "Aarav Sharma",
      childDob: "12-04-2018",
      parentName: "Rohit Sharma",
      parentDesignation: "Software Engineer",
      email: "rohit.sharma@gmail.com",
      phoneNo: "9876543210",
      notifyProgress: "Yes",
    },
    {
      id: 2,
      childName: "Anaya Das",
      childDob: "03-09-2019",
      parentName: "Suman Das",
      parentDesignation: "Teacher",
      email: "suman.das@gmail.com",
      phoneNo: "9123456780",
      notifyProgress: "No",
    },
    {
      id: 3,
      childName: "Vivaan Patel",
      childDob: "25-01-2018",
      parentName: "Ketan Patel",
      parentDesignation: "Businessman",
      email: "ketan.patel@gmail.com",
      phoneNo: "9988776655",
      notifyProgress: "Yes",
    },
    {
      id: 4,
      childName: "Diya Nayak",
      childDob: "16-07-2019",
      parentName: "Prakash Nayak",
      parentDesignation: "Bank Manager",
      email: "prakash.nayak@gmail.com",
      phoneNo: "9090909090",
      notifyProgress: "Yes",
    },
    {
      id: 5,
      childName: "Ishaan Verma",
      childDob: "08-12-2017",
      parentName: "Neha Verma",
      parentDesignation: "Doctor",
      email: "neha.verma@gmail.com",
      phoneNo: "9012345678",
      notifyProgress: "No",
    },
    {
      id: 6,
      childName: "Myra Sahoo",
      childDob: "21-06-2018",
      parentName: "Rakesh Sahoo",
      parentDesignation: "Civil Engineer",
      email: "rakesh.sahoo@gmail.com",
      phoneNo: "9345678912",
      notifyProgress: "Yes",
    },
    {
      id: 7,
      childName: "Advik Singh",
      childDob: "14-02-2019",
      parentName: "Pooja Singh",
      parentDesignation: "Lawyer",
      email: "pooja.singh@gmail.com",
      phoneNo: "9776655443",
      notifyProgress: "No",
    },
    {
      id: 8,
      childName: "Kiara Mishra",
      childDob: "30-10-2018",
      parentName: "Amit Mishra",
      parentDesignation: "Accountant",
      email: "amit.mishra@gmail.com",
      phoneNo: "9456781234",
      notifyProgress: "Yes",
    },
    {
      id: 9,
      childName: "Reyansh Gupta",
      childDob: "11-03-2019",
      parentName: "Sneha Gupta",
      parentDesignation: "HR Manager",
      email: "sneha.gupta@gmail.com",
      phoneNo: "9881122334",
      notifyProgress: "Yes",
    },
    {
      id: 10,
      childName: "Sara Khan",
      childDob: "19-08-2018",
      parentName: "Imran Khan",
      parentDesignation: "Architect",
      email: "imran.khan@gmail.com",
      phoneNo: "9765432101",
      notifyProgress: "No",
    },
  ]);

  const [admissionTableEditId, setAdmissionTableEditId] = useState(null);
  const [admissionTableCurrentPage, setAdmissionTableCurrentPage] = useState(1);

  const [admissionTableForm, setAdmissionTableForm] = useState({
    childName: "",
    childDob: "",
    parentName: "",
    parentDesignation: "",
    email: "",
    phoneNo: "",
    notifyProgress: "No",
  });

  const admissionTableItemsPerPage = 8;

  const handleAdmissionTableEdit = (item) => {
    setAdmissionTableEditId(item.id);
    setAdmissionTableForm({
      childName: item.childName,
      childDob: item.childDob,
      parentName: item.parentName,
      parentDesignation: item.parentDesignation,
      email: item.email,
      phoneNo: item.phoneNo,
      notifyProgress: item.notifyProgress,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAdmissionTableDelete = (id) => {
    const admissionTableConfirmDelete = window.confirm(
      "Are you sure you want to delete this admission record?"
    );

    if (!admissionTableConfirmDelete) return;

    const admissionTableUpdatedList = admissionTableList.filter(
      (item) => item.id !== id
    );
    setAdmissionTableList(admissionTableUpdatedList);

    const admissionTableUpdatedPages =
      Math.ceil(admissionTableUpdatedList.length / admissionTableItemsPerPage) || 1;

    if (admissionTableCurrentPage > admissionTableUpdatedPages) {
      setAdmissionTableCurrentPage(admissionTableUpdatedPages);
    }

    if (admissionTableEditId === id) {
      setAdmissionTableEditId(null);
      setAdmissionTableForm({
        childName: "",
        childDob: "",
        parentName: "",
        parentDesignation: "",
        email: "",
        phoneNo: "",
        notifyProgress: "No",
      });
    }
  };

  const handleAdmissionTableInputChange = (e) => {
    const { name, value } = e.target;
    setAdmissionTableForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdmissionTableSubmit = (e) => {
    e.preventDefault();

    if (
      !admissionTableForm.childName.trim() ||
      !admissionTableForm.childDob.trim() ||
      !admissionTableForm.parentName.trim() ||
      !admissionTableForm.parentDesignation.trim() ||
      !admissionTableForm.email.trim()
    ) {
      alert("Please fill all required fields.");
      return;
    }

    setAdmissionTableList((prev) =>
      prev.map((item) =>
        item.id === admissionTableEditId
          ? {
              ...item,
              childName: admissionTableForm.childName,
              childDob: admissionTableForm.childDob,
              parentName: admissionTableForm.parentName,
              parentDesignation: admissionTableForm.parentDesignation,
              email: admissionTableForm.email,
              phoneNo: admissionTableForm.phoneNo,
              notifyProgress: admissionTableForm.notifyProgress,
            }
          : item
      )
    );

    setAdmissionTableEditId(null);
    setAdmissionTableForm({
      childName: "",
      childDob: "",
      parentName: "",
      parentDesignation: "",
      email: "",
      phoneNo: "",
      notifyProgress: "No",
    });
  };

  const admissionTableTotalPages =
    Math.ceil(admissionTableList.length / admissionTableItemsPerPage) || 1;

  const admissionTableStartIndex =
    (admissionTableCurrentPage - 1) * admissionTableItemsPerPage;

  const admissionTablePaginatedList = useMemo(() => {
    return admissionTableList.slice(
      admissionTableStartIndex,
      admissionTableStartIndex + admissionTableItemsPerPage
    );
  }, [admissionTableList, admissionTableStartIndex]);

  const handleAdmissionTablePageChange = (page) => {
    setAdmissionTableCurrentPage(page);
  };

  return (
    <div className="admissionTable">
      <div className="admissionTable__card">
        <div className="admissionTable__header">
          <h2 className="admissionTable__title">Admission Table</h2>
          <p className="admissionTable__subtitle">
            Manage all admission form records here.
          </p>
        </div>

        {admissionTableEditId !== null && (
          <form
            className="admissionTable__editForm"
            onSubmit={handleAdmissionTableSubmit}
          >
            <div className="admissionTable__formGrid">
              <div className="admissionTable__formGroup">
                <label className="admissionTable__label">Child's Name</label>
                <input
                  type="text"
                  name="childName"
                  className="admissionTable__input"
                  value={admissionTableForm.childName}
                  onChange={handleAdmissionTableInputChange}
                />
              </div>

              <div className="admissionTable__formGroup">
                <label className="admissionTable__label">Child's DOB</label>
                <input
                  type="text"
                  name="childDob"
                  className="admissionTable__input"
                  value={admissionTableForm.childDob}
                  onChange={handleAdmissionTableInputChange}
                />
              </div>

              <div className="admissionTable__formGroup">
                <label className="admissionTable__label">Parent's Name</label>
                <input
                  type="text"
                  name="parentName"
                  className="admissionTable__input"
                  value={admissionTableForm.parentName}
                  onChange={handleAdmissionTableInputChange}
                />
              </div>

              <div className="admissionTable__formGroup">
                <label className="admissionTable__label">Parent's Designation</label>
                <input
                  type="text"
                  name="parentDesignation"
                  className="admissionTable__input"
                  value={admissionTableForm.parentDesignation}
                  onChange={handleAdmissionTableInputChange}
                />
              </div>

              <div className="admissionTable__formGroup">
                <label className="admissionTable__label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="admissionTable__input"
                  value={admissionTableForm.email}
                  onChange={handleAdmissionTableInputChange}
                />
              </div>

              <div className="admissionTable__formGroup">
                <label className="admissionTable__label">Phone No</label>
                <input
                  type="text"
                  name="phoneNo"
                  className="admissionTable__input"
                  value={admissionTableForm.phoneNo}
                  onChange={handleAdmissionTableInputChange}
                />
              </div>

              <div className="admissionTable__formGroup">
                <label className="admissionTable__label">Notify Weekly Progress</label>
                <select
                  name="notifyProgress"
                  className="admissionTable__input"
                  value={admissionTableForm.notifyProgress}
                  onChange={handleAdmissionTableInputChange}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>

            <div className="admissionTable__formActions">
              <button type="submit" className="admissionTable__saveBtn">
                Update Admission
              </button>
              <button
                type="button"
                className="admissionTable__cancelBtn"
                onClick={() => {
                  setAdmissionTableEditId(null);
                  setAdmissionTableForm({
                    childName: "",
                    childDob: "",
                    parentName: "",
                    parentDesignation: "",
                    email: "",
                    phoneNo: "",
                    notifyProgress: "No",
                  });
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <div className="admissionTable__tableWrap">
          <table className="admissionTable__table">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Child's Name</th>
                <th>Child's DOB</th>
                <th>Parent's Name</th>
                <th>Parent's Designation</th>
                <th>Email</th>
                <th>Phone No</th>
                <th>Notify Progress</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {admissionTablePaginatedList.length > 0 ? (
                admissionTablePaginatedList.map((item, index) => (
                  <tr key={item.id}>
                    <td>{admissionTableStartIndex + index + 1}</td>
                    <td>{item.childName}</td>
                    <td>{item.childDob}</td>
                    <td>{item.parentName}</td>
                    <td>{item.parentDesignation}</td>
                    <td>{item.email}</td>
                    <td>{item.phoneNo}</td>
                    <td>
                      <span
                        className={`admissionTable__status ${
                          item.notifyProgress === "Yes"
                            ? "admissionTable__status--yes"
                            : "admissionTable__status--no"
                        }`}
                      >
                        {item.notifyProgress}
                      </span>
                    </td>
                    <td>
                      <div className="admissionTable__actionButtons">
                        <button
                          type="button"
                          className="admissionTable__actionBtn admissionTable__actionBtn--edit"
                          onClick={() => handleAdmissionTableEdit(item)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="admissionTable__actionBtn admissionTable__actionBtn--delete"
                          onClick={() => handleAdmissionTableDelete(item.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="admissionTable__empty">
                    No admission records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {admissionTableList.length > 0 && (
          <div className="admissionTable__pagination">
            <button
              className="admissionTable__pageBtn"
              onClick={() =>
                handleAdmissionTablePageChange(
                  admissionTableCurrentPage > 1
                    ? admissionTableCurrentPage - 1
                    : 1
                )
              }
              disabled={admissionTableCurrentPage === 1}
            >
              Prev
            </button>

            {Array.from({ length: admissionTableTotalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`admissionTable__pageBtn ${
                  admissionTableCurrentPage === index + 1
                    ? "admissionTable__pageBtn--active"
                    : ""
                }`}
                onClick={() => handleAdmissionTablePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              className="admissionTable__pageBtn"
              onClick={() =>
                handleAdmissionTablePageChange(
                  admissionTableCurrentPage < admissionTableTotalPages
                    ? admissionTableCurrentPage + 1
                    : admissionTableTotalPages
                )
              }
              disabled={admissionTableCurrentPage === admissionTableTotalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdmissionTable;