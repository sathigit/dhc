function DoctorPrescriptionsServer(doctorPrescriptionsUI) {
    if (doctorPrescriptionsUI) {
       this.prescriptions = [];
       doctorPrescriptionsUI.prescriptions.forEach(function(prescriptionUI) {
          var prescription = {};
          prescription.patientName =  prescriptionUI.patientName;
          prescription.consultantDate = prescriptionUI.consultantDate;
          prescription.detail= prescriptionUI.detail;
          prescription.status = prescriptionUI.status;
          this.prescriptions.push(prescription);
       }, this);
    }
}