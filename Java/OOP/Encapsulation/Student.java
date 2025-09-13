
class Student {
    private String Name;
    private int Age;
    private int Nim;
    private double Ipk;

    
    // Constructor => Memberikan Nilai Awal Objek Yang DIbuat
  public Student(String Name,int Age,int Nim, double Ipk){
    setName(Name);
    setAge(Age);
    setNim(Nim);
    setIpk(Ipk);
  }
//   getter Name!
  public String getName() {
      return Name;
  }
// if name is empty  
 public void setName(String Name)   {
    if (Name != null && Name.isEmpty()) {
        this.Name =  Name;
    } else {
        this.Name="unknown";
    }
 }
//  getter Age
public int getAge(){
    return Age;
}
//if Age 0 and maximum 120
public void setAge(int Age){
    if (Age > 0 && Age <120) {
        this.Age = Age;
    } else {
        this.Age= 18;
    }
}
//getter Nim 
public int getNim(){
    return Nim;
}
public void setNim(int Nim){
 if (Nim >999999999) {
     System.out.println("Nim Tidak Boleh Dari 9");
 } else {
  this.Nim = Nim;
 }
}
public double getIpk(){
    return Ipk;
}
public void setIpk(double Ipk){
if (Ipk > 0.00 && Ipk <= 4.00) {
   this.Ipk = Ipk;
} else {
    this.Ipk = 3.00;
}
//Print All 

}
public void PrintInfo(){
    System.out.println("Name:"+Name+"Age:"+Age+"Nim:"+Nim+"IpK:"+Ipk);
}
}