
class Car{
String Color;
int Speed;

void Drive (){
    System.out.println(" Speed "+Speed+ Color+" Km/Hour");
}
}


public class Main{
public static void main(String[] args) {
 Car myCar = new Car();
 myCar.Color = "Red";
 myCar.Speed = 79;
 myCar.Drive();
}


}