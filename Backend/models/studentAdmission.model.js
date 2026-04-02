const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    admissionNo: { type: String, index: true },
    class: String,
    section: String,
    rollNumber: String,
    biometricId: String,
    admissionDate: Date,

    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, trim: true },
    gender: { type: String, required: true },
    dob: { type: Date, required: true },

    category: String,
    religion: String,
    caste: String,

    mobile: { type: String, index: true },
    email: { type: String, trim: true },
    bloodGroup: String,

    house: String,
    sponsor: String,

    height: String,
    weight: String,
    aadharNumber: String,

    pen: String,
    srNo: String,
    apaarId: String,

    studentBehaviour: {
      type: [String],
      default: [],
    },

    marriageAnniversary: Date,
    guardianType: String,

    studentPhoto: String,
    fatherPhoto: String,
    motherPhoto: String,
    guardianPhoto: String,

    fatherName: String,
    fatherPhone: String,
    fatherDob: Date,
    fatherOccupation: String,

    motherName: String,
    motherPhone: String,
    motherDob: Date,
    motherOccupation: String,

    guardianName: { type: String, required: true },
    guardianPhone: { type: String, required: true },
    guardianRelation: String,
    guardianEmail: String,
    guardianOccupation: String,
    guardianAddress: String,

    guardianAddressSame: Boolean,
    permanentAddressSame: Boolean,
    currentAddress: String,
    permanentAddress: String,

    feeGroup: String,
    discountList: String,
    discountMonth: String,

    routeList: String,
    busStop: String,

    hostelType: String,
    hostelName: String,
    roomType: String,
    room: String,

    bankAccountNumber: String,
    bankName: String,
    branchCode: String,

    previousSchoolDetails: String,
    note: String,

    documents: {
      reportCard: { type: String, default: "" },
      tc: { type: String, default: "" },
      samagraId: { type: String, default: "" },
      nidaCard: { type: String, default: "" },
      previousMarksheet: { type: String, default: "" },
      dobCertificate: { type: String, default: "" },
      aadhaarStudent: { type: String, default: "" },
      aadhaarParent: { type: String, default: "" },
      incomeCertificate: { type: String, default: "" },
      pip: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

studentSchema.set("toJSON", {
  transform: (doc, ret) => {
    const formatDate = (date) =>
      date ? new Date(date).toISOString().split("T")[0] : null;

    ret.admissionDate = formatDate(ret.admissionDate);
    ret.dob = formatDate(ret.dob);
    ret.fatherDob = formatDate(ret.fatherDob);
    ret.motherDob = formatDate(ret.motherDob);
    ret.marriageAnniversary = formatDate(ret.marriageAnniversary);

    return ret;
  },
});

module.exports = mongoose.model("Student", studentSchema);