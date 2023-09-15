export class ReportNational{
        // Số liệu báo cáo quý
        patientHIVInTheQuarterMale?: number; //Số người nhiễm HIV phát hiện mới trong quý - Nam
        patientHIVInTheQuarterFemale?: number; // Số người nhiễm HIV phát hiện mới trong quý - Nữ
    
        patientHIVInTheQuarterOutOfProvinceMale?: number; //Số người nhiễm HIV ngoại tỉnh phát hiện mới trong quý - Nam
        patientHIVInTheQuarterOutOfProvinceFemale?: number; // Số người nhiễm HIV ngoại tỉnh phát hiện mới trong quý - Nữ
    
        patientHIVInTheQuarterRecencyConclusionMale?: number; //Số người phát hiện nhiễm mới HIV theo phương cách trong quý - Nam
        patientHIVInTheQuarterRecencyConclusionFemale?: number; // Số người phát hiện nhiễm mới HIV theo phương cách trong quý - Nữ
    
        patientHIVInTheQuarterDeadMale?: number; //Số người nhiễm HIV tử vong trong quý - Nam
        patientHIVInTheQuarterDeadFemale?: number; // Số người nhiễm HIV tử vong trong quý - Nữ
    
    
        // Số liệu từ đầu năm đến cuối kỳ báo cáo
        patientHIVInTheQuarterYearMale?: number; //Số người nhiễm HIV phát hiện mới trong quý - Nam
        patientHIVInTheQuarterYearFemale?: number; // Số người nhiễm HIV phát hiện mới trong quý - Nữ
    
        patientHIVInTheQuarterOutOfProvinceYearMale?: number; //Số người nhiễm HIV ngoại tỉnh phát hiện mới trong quý - Nam
        patientHIVInTheQuarterOutOfProvinceYearFemale?: number; // Số người nhiễm HIV ngoại tỉnh phát hiện mới trong quý - Nữ
    
        patientHIVInTheQuarterRecencyConclusionYearMale?: number; //Số người phát hiện nhiễm mới HIV theo phương cách trong quý - Nam
        patientHIVInTheQuarterRecencyConclusionYearFemale?: number; // Số người phát hiện nhiễm mới HIV theo phương cách trong quý - Nữ
    
        patientHIVInTheQuarterDeadYearMale?: number; //Số người nhiễm HIV tử vong trong quý - Nam
        patientHIVInTheQuarterDeadYearFemale?: number; // Số người nhiễm HIV tử vong trong quý - Nữ
    
        // Số người nhiễm HIV hiện quản lý tính đến cuối kỳ báo cáo
        patientAccumulatedMale?: number; //Số người nhiễm HIV lũy tích
        patientAliveMale?: number; // Số người nhiễm HIV còn sống
        patientdDeadMale?: number; // Số người nhiễm HIV tử vong
    
        patientAccumulatedFemale?: number; //Số người nhiễm HIV lũy tích
        patientAliveFemale?: number; // Số người nhiễm HIV còn sống
        patientdDeadFemale?: number; // Số người nhiễm HIV tử vong
    
        quarter?: number; // quý
        monthStart?: number;
        monthEnd?: number;
        year?: number; // năm
}