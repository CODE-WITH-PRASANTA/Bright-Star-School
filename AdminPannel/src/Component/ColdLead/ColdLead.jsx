import React, { useMemo, useState } from "react";
import "./ColdLead.css";

const ColdLead = () => {
  const [coldLeadForm, setColdLeadForm] = useState({
    name: "",
    address: "",
    phone: "",
    message: "",
  });

  const [coldLeadList, setColdLeadList] = useState([]);
  const [coldLeadEditId, setColdLeadEditId] = useState(null);
  const [coldLeadCurrentPage, setColdLeadCurrentPage] = useState(1);
  const [coldLeadFilter, setColdLeadFilter] = useState({
    name: "",
    address: "",
  });

  const coldLeadItemsPerPage = 6;

  const handleColdLeadInputChange = (e) => {
    const { name, value } = e.target;
    setColdLeadForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleColdLeadFilterChange = (e) => {
    const { name, value } = e.target;
    setColdLeadFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
    setColdLeadCurrentPage(1);
  };

  const handleColdLeadSubmit = (e) => {
    e.preventDefault();

    if (
      !coldLeadForm.name.trim() ||
      !coldLeadForm.address.trim() ||
      !coldLeadForm.phone.trim() ||
      !coldLeadForm.message.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (coldLeadEditId !== null) {
      setColdLeadList((prev) =>
        prev.map((item) =>
          item.id === coldLeadEditId
            ? {
                ...item,
                name: coldLeadForm.name,
                address: coldLeadForm.address,
                phone: coldLeadForm.phone,
                message: coldLeadForm.message,
              }
            : item
        )
      );
      setColdLeadEditId(null);
    } else {
      const newColdLead = {
        id: Date.now(),
        name: coldLeadForm.name,
        address: coldLeadForm.address,
        phone: coldLeadForm.phone,
        message: coldLeadForm.message,
      };

      setColdLeadList((prev) => [newColdLead, ...prev]);
    }

    setColdLeadForm({
      name: "",
      address: "",
      phone: "",
      message: "",
    });
    setColdLeadCurrentPage(1);
  };

  const handleColdLeadEdit = (coldLeadItem) => {
    setColdLeadForm({
      name: coldLeadItem.name,
      address: coldLeadItem.address,
      phone: coldLeadItem.phone,
      message: coldLeadItem.message,
    });
    setColdLeadEditId(coldLeadItem.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleColdLeadDelete = (coldLeadId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lead?"
    );
    if (!confirmDelete) return;

    const updatedList = coldLeadList.filter((item) => item.id !== coldLeadId);
    setColdLeadList(updatedList);

    const totalFilteredItemsAfterDelete = updatedList.filter((item) => {
      const matchesName = item.name
        .toLowerCase()
        .includes(coldLeadFilter.name.toLowerCase());
      const matchesAddress = item.address
        .toLowerCase()
        .includes(coldLeadFilter.address.toLowerCase());
      return matchesName && matchesAddress;
    }).length;

    const totalPagesAfterDelete =
      Math.ceil(totalFilteredItemsAfterDelete / coldLeadItemsPerPage) || 1;

    if (coldLeadCurrentPage > totalPagesAfterDelete) {
      setColdLeadCurrentPage(totalPagesAfterDelete);
    }
  };

  const filteredColdLeadList = useMemo(() => {
    return coldLeadList.filter((item) => {
      const matchesName = item.name
        .toLowerCase()
        .includes(coldLeadFilter.name.toLowerCase());

      const matchesAddress = item.address
        .toLowerCase()
        .includes(coldLeadFilter.address.toLowerCase());

      return matchesName && matchesAddress;
    });
  }, [coldLeadList, coldLeadFilter]);

  const coldLeadTotalPages =
    Math.ceil(filteredColdLeadList.length / coldLeadItemsPerPage) || 1;

  const coldLeadStartIndex = (coldLeadCurrentPage - 1) * coldLeadItemsPerPage;
  const coldLeadEndIndex = coldLeadStartIndex + coldLeadItemsPerPage;

  const paginatedColdLeadList = filteredColdLeadList.slice(
    coldLeadStartIndex,
    coldLeadEndIndex
  );

  const handleColdLeadPageChange = (pageNumber) => {
    setColdLeadCurrentPage(pageNumber);
  };

  return (
    <div className="coldLead">
      <div className="coldLead__wrapper">
        {/* Left Side Form */}
        <div className="coldLead__left">
          <div className="coldLead__card">
            <div className="coldLead__header">
              <h2 className="coldLead__title">Cold Lead Form</h2>
              <p className="coldLead__subtitle">
                Add parent or student lead details here.
              </p>
            </div>

            <form className="coldLead__form" onSubmit={handleColdLeadSubmit}>
              <div className="coldLead__formGroup">
                <label className="coldLead__label">Sl No</label>
                <input
                  type="text"
                  className="coldLead__input"
                  value={coldLeadEditId !== null ? "Editing..." : coldLeadList.length + 1}
                  readOnly
                />
              </div>

              <div className="coldLead__formGroup">
                <label className="coldLead__label">Parent / Student Name</label>
                <input
                  type="text"
                  name="name"
                  className="coldLead__input"
                  placeholder="Enter name"
                  value={coldLeadForm.name}
                  onChange={handleColdLeadInputChange}
                />
              </div>

              <div className="coldLead__formGroup">
                <label className="coldLead__label">Address</label>
                <input
                  type="text"
                  name="address"
                  className="coldLead__input"
                  placeholder="Enter address"
                  value={coldLeadForm.address}
                  onChange={handleColdLeadInputChange}
                />
              </div>

              <div className="coldLead__formGroup">
                <label className="coldLead__label">Phone No</label>
                <input
                  type="tel"
                  name="phone"
                  className="coldLead__input"
                  placeholder="Enter phone number"
                  value={coldLeadForm.phone}
                  onChange={handleColdLeadInputChange}
                />
              </div>

              <div className="coldLead__formGroup">
                <label className="coldLead__label">Message</label>
                <textarea
                  name="message"
                  className="coldLead__textarea"
                  placeholder="Enter message"
                  rows="5"
                  value={coldLeadForm.message}
                  onChange={handleColdLeadInputChange}
                />
              </div>

              <button type="submit" className="coldLead__submitBtn">
                {coldLeadEditId !== null ? "Update Lead" : "Submit"}
              </button>
            </form>
          </div>
        </div>

        {/* Right Side List */}
        <div className="coldLead__right">
          <div className="coldLead__card">
            <div className="coldLead__header coldLead__header--row">
              <div>
                <h2 className="coldLead__title">Cold Lead List</h2>
                <p className="coldLead__subtitle">
                  All submitted leads will appear here.
                </p>
              </div>
            </div>

            {/* Filter Section */}
            <div className="coldLead__filters">
              <div className="coldLead__filterGroup">
                <label className="coldLead__label">Filter by Name</label>
                <input
                  type="text"
                  name="name"
                  className="coldLead__input"
                  placeholder="Search by name"
                  value={coldLeadFilter.name}
                  onChange={handleColdLeadFilterChange}
                />
              </div>

              <div className="coldLead__filterGroup">
                <label className="coldLead__label">Filter by Address</label>
                <input
                  type="text"
                  name="address"
                  className="coldLead__input"
                  placeholder="Search by address"
                  value={coldLeadFilter.address}
                  onChange={handleColdLeadFilterChange}
                />
              </div>
            </div>

            <div className="coldLead__tableWrap">
              <table className="coldLead__table">
                <thead>
                  <tr>
                    <th>Sl No</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone No</th>
                    <th>Message</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedColdLeadList.length > 0 ? (
                    paginatedColdLeadList.map((item, index) => (
                      <tr key={item.id}>
                        <td>{coldLeadStartIndex + index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.phone}</td>
                        <td className="coldLead__messageCell">{item.message}</td>
                        <td>
                          <div className="coldLead__actionButtons">
                            <button
                              className="coldLead__actionBtn coldLead__actionBtn--edit"
                              onClick={() => handleColdLeadEdit(item)}
                            >
                              Edit
                            </button>
                            <button
                              className="coldLead__actionBtn coldLead__actionBtn--delete"
                              onClick={() => handleColdLeadDelete(item.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="coldLead__empty">
                        No cold leads found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {filteredColdLeadList.length > 0 && (
              <div className="coldLead__pagination">
                <button
                  className="coldLead__pageBtn"
                  onClick={() =>
                    handleColdLeadPageChange(
                      coldLeadCurrentPage > 1 ? coldLeadCurrentPage - 1 : 1
                    )
                  }
                  disabled={coldLeadCurrentPage === 1}
                >
                  Prev
                </button>

                {Array.from({ length: coldLeadTotalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    className={`coldLead__pageBtn ${
                      coldLeadCurrentPage === index + 1
                        ? "coldLead__pageBtn--active"
                        : ""
                    }`}
                    onClick={() => handleColdLeadPageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  className="coldLead__pageBtn"
                  onClick={() =>
                    handleColdLeadPageChange(
                      coldLeadCurrentPage < coldLeadTotalPages
                        ? coldLeadCurrentPage + 1
                        : coldLeadTotalPages
                    )
                  }
                  disabled={coldLeadCurrentPage === coldLeadTotalPages}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColdLead;