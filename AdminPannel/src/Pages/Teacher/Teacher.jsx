import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import "./Teacher.css";

const Teacher = () => {
  const base = "teacherAdmin";

  const initialForm = {
    headingLine1: "",
    headingLine2: "",
    description: "",
    featuredImage: "",
    name: "",
    designation: "",
    teacherDescription: "",
    phone: "",
    facebook: "",
    instagram: "",
    email: "",
    whatsapp: "",
    status: "Active",
  };

  const [form, setForm] = useState(initialForm);
  const [previewImage, setPreviewImage] = useState("");
  const [editId, setEditId] = useState(null);
  const [teacherList, setTeacherList] = useState([]);

  const sideTeachers = [
    {
      id: 1,
      image: "https://via.placeholder.com/300x220?text=Teacher+1",
      name: "Teacher Name",
      role: "Teacher Role",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x220?text=Teacher+2",
      name: "Teacher Name",
      role: "Teacher Role",
    },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setForm({ ...form, featuredImage: imageUrl });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    const payload = {
      id: editId || Date.now(),
      image: form.featuredImage,
      name: form.name,
      role: form.designation,
      type: "Featured Teacher",
      phone: form.phone,
      status: form.status,
      headingLine1: form.headingLine1,
      headingLine2: form.headingLine2,
      description: form.description,
      teacherDescription: form.teacherDescription,
      facebook: form.facebook,
      instagram: form.instagram,
      email: form.email,
      whatsapp: form.whatsapp,
    };

    if (editId) {
      const updated = teacherList.map((item) =>
        item.id === editId ? payload : item
      );
      setTeacherList(updated);
      setEditId(null);
    } else {
      setTeacherList([payload, ...teacherList]);
    }

    handleClear();
  };

  const handleClear = () => {
    setForm(initialForm);
    setPreviewImage("");
    setEditId(null);
  };

  const handleEdit = (item) => {
    setForm({
      headingLine1: item.headingLine1 || "",
      headingLine2: item.headingLine2 || "",
      description: item.description || "",
      featuredImage: item.image || "",
      name: item.name || "",
      designation: item.role || "",
      teacherDescription: item.teacherDescription || "",
      phone: item.phone || "",
      facebook: item.facebook || "",
      instagram: item.instagram || "",
      email: item.email || "",
      whatsapp: item.whatsapp || "",
      status: item.status || "Active",
    });

    setPreviewImage(item.image || "");
    setEditId(item.id);
  };

  const handleDelete = (id) => {
    const updated = teacherList.filter((item) => item.id !== id);
    setTeacherList(updated);

    if (editId === id) {
      handleClear();
    }
  };

  return (
    <section className={base}>
      <div className={`${base}__top`}>
        <div className={`${base}__formBox`}>
          <h2 className={`${base}__title`}>Teachers Section Form</h2>

          <form className={`${base}__form`} onSubmit={handleSave}>
            <div className={`${base}__field`}>
              <label>Main Heading Line 1</label>
              <input
                type="text"
                name="headingLine1"
                value={form.headingLine1}
                onChange={handleChange}
                placeholder="Enter heading line 1"
              />
            </div>

            <div className={`${base}__field`}>
              <label>Main Heading Line 2</label>
              <input
                type="text"
                name="headingLine2"
                value={form.headingLine2}
                onChange={handleChange}
                placeholder="Enter heading line 2"
              />
            </div>

            <div className={`${base}__field`}>
              <label>Section Description</label>
              <textarea
                name="description"
                rows="4"
                value={form.description}
                onChange={handleChange}
                placeholder="Enter section description"
              />
            </div>

            <div className={`${base}__field`}>
              <label>Teacher Image Upload</label>
              <input type="file" accept="image/*" onChange={handleImage} />
            </div>

            <div className={`${base}__field`}>
              <label>Teacher Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter teacher name"
              />
            </div>

            <div className={`${base}__field`}>
              <label>Teacher Designation</label>
              <input
                type="text"
                name="designation"
                value={form.designation}
                onChange={handleChange}
                placeholder="Enter designation"
              />
            </div>

            <div className={`${base}__field`}>
              <label>Teacher Description</label>
              <textarea
                name="teacherDescription"
                rows="4"
                value={form.teacherDescription}
                onChange={handleChange}
                placeholder="Enter teacher description"
              />
            </div>

            <div className={`${base}__field`}>
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>

            <div className={`${base}__gridTwo`}>
              <div className={`${base}__field`}>
                <label>Facebook Link</label>
                <input
                  type="text"
                  name="facebook"
                  value={form.facebook}
                  onChange={handleChange}
                  placeholder="Enter facebook link"
                />
              </div>

              <div className={`${base}__field`}>
                <label>Instagram Link</label>
                <input
                  type="text"
                  name="instagram"
                  value={form.instagram}
                  onChange={handleChange}
                  placeholder="Enter instagram link"
                />
              </div>
            </div>

            <div className={`${base}__gridTwo`}>
              <div className={`${base}__field`}>
                <label>Email Link</label>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter email link"
                />
              </div>

              <div className={`${base}__field`}>
                <label>WhatsApp Link</label>
                <input
                  type="text"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="Enter whatsapp link"
                />
              </div>
            </div>

            <div className={`${base}__field`}>
              <label>Status</label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className={`${base}__btnRow`}>
              <button type="submit" className={`${base}__saveBtn`}>
                {editId ? "Update" : "Save"}
              </button>

              <button
                type="button"
                className={`${base}__clearBtn`}
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          </form>
        </div>

        <div className={`${base}__previewBox`}>
          <h2 className={`${base}__title`}>Live Preview</h2>

          <div className={`${base}__preview`}>
            <div className={`${base}__headingArea`}>
              <h1>{form.headingLine1 || "Heading Line 1"}</h1>
              <h2>{form.headingLine2 || "Heading Line 2"}</h2>
              <p>{form.description || "Section description will appear here."}</p>
            </div>

            <div className={`${base}__featuredCard`}>
              <div className={`${base}__featuredImageWrap`}>
                {previewImage ? (
                  <img src={previewImage} alt={form.name || "Teacher"} />
                ) : (
                  <div className={`${base}__imagePlaceholder`}>
                    No Image
                  </div>
                )}
              </div>

              <div className={`${base}__featuredContent`}>
                <h3>{form.name || "Teacher Name"}</h3>
                <h4>{form.designation || "Designation"}</h4>
                <p>{form.teacherDescription || "Teacher description will appear here."}</p>
                <span className={`${base}__phone`}>
                  {form.phone || "Phone Number"}
                </span>

                <div className={`${base}__socials`}>
                  <a href={form.facebook || "#"} onClick={(e) => e.preventDefault()}>
                    <FaFacebookF />
                  </a>
                  <a href={form.instagram || "#"} onClick={(e) => e.preventDefault()}>
                    <FaInstagram />
                  </a>
                  <a href={form.email || "#"} onClick={(e) => e.preventDefault()}>
                    <FaEnvelope />
                  </a>
                  <a href={form.whatsapp || "#"} onClick={(e) => e.preventDefault()}>
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>

            <div className={`${base}__sideCards`}>
              {sideTeachers.map((teacher) => (
                <div className={`${base}__sideCard`} key={teacher.id}>
                  <img src={teacher.image} alt={teacher.name} />
                  <div className={`${base}__sideCardInfo`}>
                    <h5>{teacher.name}</h5>
                    <span>{teacher.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`${base}__tableBox`}>
        <h2 className={`${base}__title`}>Teachers List Table</h2>

        <div className={`${base}__tableWrap`}>
          <table className={`${base}__table`}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Role</th>
                <th>Type</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {teacherList.map((item) => (
                <tr key={item.id}>
                  <td>
                    {item.image ? (
                      <img src={item.image} alt={item.name} />
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>{item.name || "-"}</td>
                  <td>{item.role || "-"}</td>
                  <td>{item.type || "-"}</td>
                  <td>{item.phone || "-"}</td>
                  <td>
                    <span className={`${base}__status`}>
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`${base}__actionBtn`}
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`${base}__actionBtn delete`}
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {teacherList.length === 0 && (
                <tr>
                  <td colSpan="8" className={`${base}__empty`}>
                    No teacher records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Teacher;