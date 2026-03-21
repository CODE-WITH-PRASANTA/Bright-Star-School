import React, { useRef, useState } from "react";
import "./Galleryposting.css";

const Galleryposting = () => {
  const [gallerypostingForm, setGallerypostingForm] = useState({
    image: null,
    preview: "",
  });

  const [gallerypostingList, setGallerypostingList] = useState([]);
  const [gallerypostingEditId, setGallerypostingEditId] = useState(null);
  const [gallerypostingCurrentPage, setGallerypostingCurrentPage] = useState(1);

  const gallerypostingFileRef = useRef(null);
  const gallerypostingItemsPerPage = 5;

  const handleGallerypostingImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setGallerypostingForm({
      image: file,
      preview: imageUrl,
    });
  };

  const handleGallerypostingSubmit = (e) => {
    e.preventDefault();

    if (!gallerypostingForm.image && !gallerypostingForm.preview) {
      alert("Please upload a gallery image.");
      return;
    }

    if (gallerypostingEditId !== null) {
      setGallerypostingList((prev) =>
        prev.map((item) =>
          item.id === gallerypostingEditId
            ? {
                ...item,
                image: gallerypostingForm.image,
                preview: gallerypostingForm.preview,
              }
            : item
        )
      );
      setGallerypostingEditId(null);
    } else {
      const newGallerypostingItem = {
        id: Date.now(),
        image: gallerypostingForm.image,
        preview: gallerypostingForm.preview,
      };

      setGallerypostingList((prev) => [newGallerypostingItem, ...prev]);
    }

    setGallerypostingForm({
      image: null,
      preview: "",
    });

    if (gallerypostingFileRef.current) {
      gallerypostingFileRef.current.value = "";
    }

    setGallerypostingCurrentPage(1);
  };

  const handleGallerypostingEdit = (item) => {
    setGallerypostingForm({
      image: item.image,
      preview: item.preview,
    });
    setGallerypostingEditId(item.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGallerypostingDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this image?"
    );

    if (!confirmDelete) return;

    const updatedList = gallerypostingList.filter((item) => item.id !== id);
    setGallerypostingList(updatedList);

    const updatedTotalPages =
      Math.ceil(updatedList.length / gallerypostingItemsPerPage) || 1;

    if (gallerypostingCurrentPage > updatedTotalPages) {
      setGallerypostingCurrentPage(updatedTotalPages);
    }

    if (gallerypostingEditId === id) {
      setGallerypostingEditId(null);
      setGallerypostingForm({
        image: null,
        preview: "",
      });

      if (gallerypostingFileRef.current) {
        gallerypostingFileRef.current.value = "";
      }
    }
  };

  const gallerypostingTotalPages =
    Math.ceil(gallerypostingList.length / gallerypostingItemsPerPage) || 1;

  const gallerypostingStartIndex =
    (gallerypostingCurrentPage - 1) * gallerypostingItemsPerPage;

  const gallerypostingPaginatedList = gallerypostingList.slice(
    gallerypostingStartIndex,
    gallerypostingStartIndex + gallerypostingItemsPerPage
  );

  const handleGallerypostingPageChange = (page) => {
    setGallerypostingCurrentPage(page);
  };

  return (
    <div className="galleryposting">
      <div className="galleryposting__wrapper">
        <div className="galleryposting__left">
          <div className="galleryposting__card">
            <div className="galleryposting__header">
              <h2 className="galleryposting__title">Gallery Posting Form</h2>
              <p className="galleryposting__subtitle">
                Upload gallery images for your admin panel.
              </p>
            </div>

            <form
              className="galleryposting__form"
              onSubmit={handleGallerypostingSubmit}
            >
              <div className="galleryposting__formGroup">
                <label className="galleryposting__label">
                  Upload Gallery Image
                </label>

                <input
                  type="file"
                  accept="image/*"
                  ref={gallerypostingFileRef}
                  className="galleryposting__fileInput"
                  onChange={handleGallerypostingImageChange}
                />
              </div>

              {gallerypostingForm.preview && (
                <div className="galleryposting__previewBox">
                  <img
                    src={gallerypostingForm.preview}
                    alt="Preview"
                    className="galleryposting__previewImage"
                  />
                </div>
              )}

              <button type="submit" className="galleryposting__submitBtn">
                {gallerypostingEditId !== null ? "Update Image" : "Submit"}
              </button>
            </form>
          </div>
        </div>

        <div className="galleryposting__right">
          <div className="galleryposting__card">
            <div className="galleryposting__header">
              <h2 className="galleryposting__title">Gallery Posting Table</h2>
              <p className="galleryposting__subtitle">
                All uploaded gallery images will appear here.
              </p>
            </div>

            <div className="galleryposting__tableWrap">
              <table className="galleryposting__table">
                <thead>
                  <tr>
                    <th>Sl No</th>
                    <th>Picture</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {gallerypostingPaginatedList.length > 0 ? (
                    gallerypostingPaginatedList.map((item, index) => (
                      <tr key={item.id}>
                        <td>{gallerypostingStartIndex + index + 1}</td>
                        <td>
                          <div className="galleryposting__imageCell">
                            <img
                              src={item.preview}
                              alt={`Gallery ${gallerypostingStartIndex + index + 1}`}
                              className="galleryposting__tableImage"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="galleryposting__actionButtons">
                            <button
                              type="button"
                              className="galleryposting__actionBtn galleryposting__actionBtn--edit"
                              onClick={() => handleGallerypostingEdit(item)}
                            >
                              Edit
                            </button>

                            <button
                              type="button"
                              className="galleryposting__actionBtn galleryposting__actionBtn--delete"
                              onClick={() => handleGallerypostingDelete(item.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="galleryposting__empty">
                        No gallery images uploaded yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {gallerypostingList.length > 0 && (
              <div className="galleryposting__pagination">
                <button
                  className="galleryposting__pageBtn"
                  onClick={() =>
                    handleGallerypostingPageChange(
                      gallerypostingCurrentPage > 1
                        ? gallerypostingCurrentPage - 1
                        : 1
                    )
                  }
                  disabled={gallerypostingCurrentPage === 1}
                >
                  Prev
                </button>

                {Array.from({ length: gallerypostingTotalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    className={`galleryposting__pageBtn ${
                      gallerypostingCurrentPage === index + 1
                        ? "galleryposting__pageBtn--active"
                        : ""
                    }`}
                    onClick={() => handleGallerypostingPageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  className="galleryposting__pageBtn"
                  onClick={() =>
                    handleGallerypostingPageChange(
                      gallerypostingCurrentPage < gallerypostingTotalPages
                        ? gallerypostingCurrentPage + 1
                        : gallerypostingTotalPages
                    )
                  }
                  disabled={gallerypostingCurrentPage === gallerypostingTotalPages}
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

export default Galleryposting;