function getGradeByScore(studentScore) {
    const grades = ["A", "AB", "B", "BC", "C", "D", "E"];
    const rangeLimit = [80, 70, 65, 60, 50, 40, 0];
    
    for (let i = 0; i < rangeLimit.length; i++) { if (studentScore >= rangeLimit[i]) {
    return grades[i];
    }
    }
    return "E";
    }
    
    console.log(getGradeByScore(75)); 
    