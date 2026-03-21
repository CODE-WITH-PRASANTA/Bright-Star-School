import React, { useMemo, useState } from "react";
import "./ColdLeadTable.css";

const ColdLeadTable = () => {
  const [coldLeadTableList, setColdLeadTableList] = useState([
    {
      id: 1,
      name: "Aarav Sharma",
      address: "Patia, Bhubaneswar, Odisha",
      phoneNo: "9876543210",
      feedback: "Interested in admission for Class Nursery.",
    },
    {
      id: 2,
      name: "Ananya Das",
      address: "Kharavel Nagar, Bhubaneswar, Odisha",
      phoneNo: "9123456780",
      feedback: "Asked for fee structure details.",
    },
    {
      id: 3,
      name: "Rohan Mishra",
      address: "Saheed Nagar, Bhubaneswar, Odisha",
      phoneNo: "9988776655",
      feedback: "Wants callback in evening.",
    },
    {
      id: 4,
      name: "Priya Sahoo",
      address: "CDA, Cuttack, Odisha",
      phoneNo: "9090909090",
      feedback: "Looking for transport facility.",
    },
    {
      id: 5,
      name: "Aditya Nayak",
      address: "Jaydev Vihar, Bhubaneswar, Odisha",
      phoneNo: "9012345678",
      feedback: "Interested in hostel details.",
    },
    {
      id: 6,
      name: "Sneha Patel",
      address: "Chandrasekharpur, Bhubaneswar, Odisha",
      phoneNo: "9345678912",
      feedback: "Parent wants school brochure.",
    },
    {
      id: 7,
      name: "Vivaan Rout",
      address: "Badambadi, Cuttack, Odisha",
      phoneNo: "9776655443",
      feedback: "Will visit campus next week.",
    },
    {
      id: 8,
      name: "Diya Mohanty",
      address: "Baramunda, Bhubaneswar, Odisha",
      phoneNo: "9456781234",
      feedback: "Needs information about timings.",
    },
    {
      id: 9,
      name: "Ishita Behera",
      address: "Jatni, Khordha, Odisha",
      phoneNo: "9881122334",
      feedback: "Asked for admission process.",
    },
    {
      id: 10,
      name: "Aryan Panda",
      address: "Nayapalli, Bhubaneswar, Odisha",
      phoneNo: "9765432101",
      feedback: "Interested in sports facilities.",
    },
    {
      id: 11,
      name: "Myra Das",
      address: "Puri Town, Odisha",
      phoneNo: "9654321098",
      feedback: "Requested principal meeting.",
    },
    {
      id: 12,
      name: "Krish Sethi",
      address: "Angul, Odisha",
      phoneNo: "9432109876",
      feedback: "Waiting for follow-up call.",
    },
  ]);

  const [coldLeadTableCurrentPage, setColdLeadTableCurrentPage] = useState(1);
  const [coldLeadTablePopupOpen, setColdLeadTablePopupOpen] = useState(false);
  const [coldLeadTableSelectedId, setColdLeadTableSelectedId] = useState(null);
  const [coldLeadTableFeedbackText, setColdLeadTableFeedbackText] = useState("");

  const coldLeadTableItemsPerPage = 8;

  const handleColdLeadTableEdit = (item) => {
    alert(`Edit clicked for ${item.name}`);
  };

  const handleColdLeadTableDelete = (id) => {
    const coldLeadTableConfirmDelete = window.confirm(
      "Are you sure you want to delete this cold lead record?"
    );

    if (!coldLeadTableConfirmDelete) return;

    const coldLeadTableUpdatedList = coldLeadTableList.filter(
      (item) => item.id !== id
    );
    setColdLeadTableList(coldLeadTableUpdatedList);

    const coldLeadTableUpdatedPages =
      Math.ceil(coldLeadTableUpdatedList.length / coldLeadTableItemsPerPage) || 1;

    if (coldLeadTableCurrentPage > coldLeadTableUpdatedPages) {
      setColdLeadTableCurrentPage(coldLeadTableUpdatedPages);
    }
  };

  const handleColdLeadTableOpenFeedback = (item) => {
    setColdLeadTableSelectedId(item.id);
    setColdLeadTableFeedbackText(item.feedback || "");
    setColdLeadTablePopupOpen(true);
  };

  const handleColdLeadTableCloseFeedback = () => {
    setColdLeadTablePopupOpen(false);
    setTimeout(() => {
      setColdLeadTableSelectedId(null);
      setColdLeadTableFeedbackText("");
    }, 300);
  };

  const handleColdLeadTableFeedbackSubmit = (e) => {
    e.preventDefault();

    if (!coldLeadTableFeedbackText.trim()) {
      alert("Please enter feedback.");
      return;
    }

    const coldLeadTableUpdatedList = coldLeadTableList.map((item) =>
      item.id === coldLeadTableSelectedId
        ? { ...item, feedback: coldLeadTableFeedbackText }
        : item
    );

    setColdLeadTableList(coldLeadTableUpdatedList);
    handleColdLeadTableCloseFeedback();
  };

  const coldLeadTableTotalPages =
    Math.ceil(coldLeadTableList.length / coldLeadTableItemsPerPage) || 1;

  const coldLeadTableStartIndex =
    (coldLeadTableCurrentPage - 1) * coldLeadTableItemsPerPage;

  const coldLeadTablePaginatedList = useMemo(() => {
    return coldLeadTableList.slice(
      coldLeadTableStartIndex,
      coldLeadTableStartIndex + coldLeadTableItemsPerPage
    );
  }, [coldLeadTableList, coldLeadTableStartIndex]);

  const handleColdLeadTablePageChange = (page) => {
    setColdLeadTableCurrentPage(page);
  };

  return (
    <div className="coldLeadTable">
      <div className="coldLeadTable__card">
        <div className="coldLeadTable__header">
          <h2 className="coldLeadTable__title">Cold Lead Table</h2>
          <p className="coldLeadTable__subtitle">
            Manage all parents and student cold lead records here.
          </p>
        </div>

        <div className="coldLeadTable__tableWrap">
          <table className="coldLeadTable__table">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Parents / Student Name</th>
                <th>Address</th>
                <th>Feedback</th>
                <th>Phone No</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {coldLeadTablePaginatedList.length > 0 ? (
                coldLeadTablePaginatedList.map((item, index) => (
                  <tr key={item.id}>
                    <td>{coldLeadTableStartIndex + index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td className="coldLeadTable__feedbackCell">
                      {item.feedback || "No feedback added"}
                    </td>
                    <td>{item.phoneNo}</td>
                    <td>
                      <div className="coldLeadTable__actionButtons">
                        <button
                          type="button"
                          className="coldLeadTable__actionBtn coldLeadTable__actionBtn--edit"
                          onClick={() => handleColdLeadTableEdit(item)}
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className="coldLeadTable__actionBtn coldLeadTable__actionBtn--delete"
                          onClick={() => handleColdLeadTableDelete(item.id)}
                        >
                          Delete
                        </button>

                        <button
                          type="button"
                          className="coldLeadTable__actionBtn coldLeadTable__actionBtn--feedback"
                          onClick={() => handleColdLeadTableOpenFeedback(item)}
                        >
                          Feedback
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="coldLeadTable__empty">
                    No cold lead records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {coldLeadTableList.length > 0 && (
          <div className="coldLeadTable__pagination">
            <button
              className="coldLeadTable__pageBtn"
              onClick={() =>
                handleColdLeadTablePageChange(
                  coldLeadTableCurrentPage > 1
                    ? coldLeadTableCurrentPage - 1
                    : 1
                )
              }
              disabled={coldLeadTableCurrentPage === 1}
            >
              Prev
            </button>

            {Array.from({ length: coldLeadTableTotalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`coldLeadTable__pageBtn ${
                  coldLeadTableCurrentPage === index + 1
                    ? "coldLeadTable__pageBtn--active"
                    : ""
                }`}
                onClick={() => handleColdLeadTablePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              className="coldLeadTable__pageBtn"
              onClick={() =>
                handleColdLeadTablePageChange(
                  coldLeadTableCurrentPage < coldLeadTableTotalPages
                    ? coldLeadTableCurrentPage + 1
                    : coldLeadTableTotalPages
                )
              }
              disabled={coldLeadTableCurrentPage === coldLeadTableTotalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>

      <div
        className={`coldLeadTable__popupOverlay ${
          coldLeadTablePopupOpen ? "coldLeadTable__popupOverlay--show" : ""
        }`}
      >
        <div
          className={`coldLeadTable__popup ${
            coldLeadTablePopupOpen ? "coldLeadTable__popup--show" : ""
          }`}
        >
          <div className="coldLeadTable__popupHeader">
            <h3 className="coldLeadTable__popupTitle">Feedback Form</h3>
            <button
              type="button"
              className="coldLeadTable__popupClose"
              onClick={handleColdLeadTableCloseFeedback}
            >
              ×
            </button>
          </div>

          <form onSubmit={handleColdLeadTableFeedbackSubmit}>
            <div className="coldLeadTable__popupGroup">
              <label className="coldLeadTable__popupLabel">Feedback</label>
              <textarea
                className="coldLeadTable__popupTextarea"
                placeholder="Write feedback here..."
                value={coldLeadTableFeedbackText}
                onChange={(e) => setColdLeadTableFeedbackText(e.target.value)}
                rows="5"
              />
            </div>

            <div className="coldLeadTable__popupActions">
              <button
                type="button"
                className="coldLeadTable__popupBtn coldLeadTable__popupBtn--cancel"
                onClick={handleColdLeadTableCloseFeedback}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="coldLeadTable__popupBtn coldLeadTable__popupBtn--submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ColdLeadTable;