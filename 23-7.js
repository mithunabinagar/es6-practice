class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Nabinagar Pilot High School";
        // this.school = "Nabinagar Pilot High School"; (কমন object conconstructor এর ভিতর দিয়ে পাস করতে হবে না, যেমনঃ constructor(sId, sName){ )

  }

}



const Student1 = new Student(12, "Mithu");
const Student2 = new Student(16, "Ali Akkas");
console.log(Student1, Student2);