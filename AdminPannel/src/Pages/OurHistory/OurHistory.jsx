import React, { useState } from "react";
import "./OurHistory.css";

const OurHistory = () => {
  const base = "ourHistoryAdmin";

  const initialForm = {
    tagline: "",
    heading: "",
    description: "",
    badgePercent: "",
    badgeText: "",
    image: "",
    status: "Active",
  };

  const [form, setForm] = useState(initialForm);
  const [previewImage, setPreviewImage] = useState("");
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);

  const previewCards = [
    {
      icon: "🎓",
      title: "Child-Centered Learning",
      desc: "Short feature description here.",
    },
    {
      icon: "📘",
      title: "Experienced Educators",
      desc: "Short feature description here.",
    },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
      setForm({ ...form, image: url });
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setPreviewImage("");
    setEditId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      id: editId || Date.now(),
      tagline: form.tagline,
      heading: form.heading,
      description: form.description,
      badgePercent: form.badgePercent,
      badgeText: form.badgeText,
      badge: `${form.badgePercent} ${form.badgeText}`.trim(),
      image: form.image,
      status: form.status,
    };

    if (editId) {
      const updated = list.map((item) => (item.id === editId ? payload : item));
      setList(updated);
    } else {
      setList([payload, ...list]);
    }

    resetForm();
  };

  const handleEdit = (item) => {
    setForm({
      tagline: item.tagline || "",
      heading: item.heading || "",
      description: item.description || "",
      badgePercent: item.badgePercent || "",
      badgeText: item.badgeText || "",
      image: item.image || "",
      status: item.status || "Active",
    });

    setPreviewImage(item.image || "");
    setEditId(item.id);
  };

  const handleDelete = (id) => {
    const filtered = list.filter((item) => item.id !== id);
    setList(filtered);

    if (editId === id) {
      resetForm();
    }
  };

  return (
    <section className={base}>
      <div className={`${base}__top`}>
        <div className={`${base}__formBox`}>
          <h2 className={`${base}__title`}>Section Content Form</h2>

          <form onSubmit={handleSubmit} className={`${base}__form`}>
            <div className={`${base}__field`}>
              <label>Small Tagline</label>
              <input
                type="text"
                name="tagline"
                value={form.tagline}
                onChange={handleChange}
                placeholder="Enter tagline"
              />
            </div>

            <div className={`${base}__field`}>
              <label>Main Heading</label>
              <textarea
                name="heading"
                value={form.heading}
                onChange={handleChange}
                rows="3"
                placeholder="Enter heading"
              />
            </div>

            <div className={`${base}__field`}>
              <label>Section Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows="4"
                placeholder="Enter description"
              />
            </div>

            <div className={`${base}__field`}>
              <label>Main Image Upload</label>
              <input type="file" accept="image/*" onChange={handleImage} />
            </div>

            <div className={`${base}__gridTwo`}>
              <div className={`${base}__field`}>
                <label>Trust Badge Percentage</label>
                <input
                  type="text"
                  name="badgePercent"
                  value={form.badgePercent}
                  onChange={handleChange}
                  placeholder="100%"
                />
              </div>

              <div className={`${base}__field`}>
                <label>Trust Badge Text</label>
                <input
                  type="text"
                  name="badgeText"
                  value={form.badgeText}
                  onChange={handleChange}
                  placeholder="Parent Trust"
                />
              </div>
            </div>

            <div className={`${base}__field`}>
              <label>Status</label>
              <select name="status" value={form.status} onChange={handleChange}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className={`${base}__btnRow`}>
              <button type="submit" className={`${base}__submitBtn`}>
                {editId ? "Update" : "Save"}
              </button>

              <button
                type="button"
                className={`${base}__cancelBtn`}
                onClick={resetForm}
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        <div className={`${base}__previewBox`}>
          <h2 className={`${base}__title`}>Live Preview</h2>

          <div className={`${base}__previewCard`}>
            <div className={`${base}__previewText`}>
              <span className={`${base}__tagline`}>
                {form.tagline || "Tagline"}
              </span>
              <h1>{form.heading || "Main heading will show here"}</h1>
              <p>{form.description || "Section description will show here."}</p>
            </div>

            {previewImage && (
              <div className={`${base}__previewMedia`}>
                <div className={`${base}__badge`}>
                  <strong>{form.badgePercent || "100%"}</strong>
                  <span>{form.badgeText || "Trust"}</span>
                </div>

                <img src={previewImage} alt="preview" />
              </div>
            )}

            <div className={`${base}__cards`}>
              {previewCards.map((card, index) => (
                <div className={`${base}__miniCard`} key={index}>
                  <div className={`${base}__miniIcon`}>{card.icon}</div>
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`${base}__tableBox`}>
        <h2 className={`${base}__title`}>Section List Table</h2>

        <div className={`${base}__tableWrap`}>
          <table className={`${base}__table`}>
            <thead>
              <tr>
                <th>Tagline</th>
                <th>Heading</th>
                <th>Badge</th>
                <th>Image</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {list.map((item) => (
                <tr key={item.id}>
                  <td>{item.tagline || "-"}</td>
                  <td>{item.heading || "-"}</td>
                  <td>{item.badge || "-"}</td>
                  <td>
                    {item.image ? (
                      <img src={item.image} alt="preview" />
                    ) : (
                      "-"
                    )}
                  </td>
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

              {list.length === 0 && (
                <tr>
                  <td colSpan="7" className={`${base}__empty`}>
                    No section content added yet.
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

export default OurHistory;