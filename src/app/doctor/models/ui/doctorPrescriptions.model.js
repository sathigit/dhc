function DoctorPrescriptionsUI(doctorPrescriptionsServer) {
    if (doctorPrescriptionsServer) {
        this.prescriptions = [];

        doctorPrescriptionsServer.prescriptions.forEach(function(prescriptionServer) {
            var prescription = {};
            prescription.patientName =  prescriptionServer.patientName;
            prescription.consultantDate = prescriptionServer.consultantDate;
            prescription.detail= prescriptionServer.detail;
            prescription.status = prescriptionServer.status;
            this.prescriptions.push(prescription);
         }, this);
    }
}